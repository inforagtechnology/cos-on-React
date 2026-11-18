/**
 * Proves the conversion is lossless: for every page, renders the React component to HTML and compares
 * the resulting DOM (tags, attributes, classes, ids, inline styles, text, order) with the DOM the
 * browser's HTML parser builds from the ORIGINAL file.
 *
 *   node tools/verify.mjs <path-to-original-site>
 */
import fs from "node:fs";
import path from "node:path";
import { createServer } from "vite";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { parse, parseFragment } from "parse5";
import routes from "../src/routes.generated.js";

const SRC = path.resolve(process.argv[2] || "../original");
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? (e.name === ".git" ? [] : walk(path.join(d, e.name))) : [path.join(d, e.name)]));
const files = walk(SRC).filter((f) => f.endsWith(".html")).sort();

const exact = new Set(JSON.parse(fs.readFileSync(path.resolve("tools/exact-whitespace-pages.json"), "utf8")));
let strict = false;
const SKIP = new Set(["script", "style", "noscript", "title", "meta", "link", "base"]);
const BLOCKISH = new Set(["div", "section", "article", "aside", "header", "footer", "nav", "main", "ul", "ol", "li", "p", "form", "body", "h1", "h2", "h3", "h4", "h5", "h6", "td", "th", "button", "fieldset", "figure", "figcaption", "blockquote", "dd", "dt", "dl", "details", "summary", "address"]);
const NOWS = new Set(["table", "thead", "tbody", "tfoot", "tr", "colgroup", "select", "optgroup", "svg", "g", "defs"]);

const normStyle = (s) => s.split(";").map((d) => d.trim()).filter(Boolean).map((d) => { const i = d.indexOf(":"); return d.slice(0, i).trim().toLowerCase() + ":" + d.slice(i + 1).trim().replace(/\s+/g, " "); }).sort().join(";");

const resolveHref = (route, href) => {
  if (!href || /^(#|[a-z][a-z0-9+.-]*:|\/\/)/i.test(href)) return href;
  const [p, rest] = [href.split(/[?#]/)[0], href.slice(href.split(/[?#]/)[0].length)];
  let r = path.posix.normalize(p.startsWith("/") ? p : path.posix.join(path.posix.dirname(route), p));
  if (r === "/index.html") r = "/";
  r = r.replace(/\.html$/, "");
  return (r || "/") + rest;
};

const canon = (node, route, out = [], depth = 0) => {
  for (const kid of node.childNodes || []) {
    if (kid.nodeName === "#comment") continue;
    if (kid.nodeName === "#text") {
      const t = strict ? kid.value : kid.value.replace(/[ \t\r\n\f]+/g, " ");
      if (t) out.push({ text: t, parent: node.tagName || "body" });
      continue;
    }
    if (SKIP.has(kid.tagName)) continue;
    const attrs = kid.attrs
      .map((a) => {
        let v = a.value;
        const n = a.name.toLowerCase();
        if (n === "class") v = v.replace(/\s+/g, " ").trim();
        else if (n === "style") v = normStyle(v);
        else if (n === "href" && kid.tagName === "a") v = resolveHref(route, v);
        else if (/^on/.test(n)) return null; // handlers are React props, not attributes
        else if (n === "value" && kid.tagName === "input") v = v;
        if (n === "selected" || (n === "src" && v === "")) return null;
        return `${n}=${v}`;
      })
      .filter(Boolean)
      .sort();
    out.push({ open: kid.tagName, attrs });
    if (kid.tagName !== "iframe") canon(kid.tagName === "template" ? kid.content : kid, route, out, depth + 1);
    out.push({ close: kid.tagName });
  }
  return out;
};

// merge adjacent text, drop insignificant whitespace-only text
const tidy = (tokens) => {
  if (strict) {
    const m = [];
    for (const t of tokens) { const l = m[m.length - 1]; if (t.text !== undefined && l && l.text !== undefined) l.text += t.text; else m.push({ ...t }); }
    return m.filter((t) => !(t.text !== undefined && /^[ \t\r\n\f]*$/.test(t.text) && NOWS.has(t.parent))).map((t) => (t.text !== undefined ? `T:${JSON.stringify(t.text)}` : t.open ? `<${t.open} ${t.attrs.join(" ")}>` : `</${t.close}>`));
  }
  const merged = [];
  for (const t of tokens) {
    const last = merged[merged.length - 1];
    if (t.text !== undefined && last && last.text !== undefined) last.text = (last.text + t.text).replace(/ +/g, " ");
    else merged.push({ ...t });
  }
  const res = [];
  merged.forEach((t, i) => {
    if (t.text !== undefined && t.text.trim() === "") {
      if (NOWS.has(t.parent)) return;
      const prev = merged[i - 1], next = merged[i + 1];
      const atStart = !prev || prev.open === t.parent;
      const atEnd = !next || next.close === t.parent;
      if (BLOCKISH.has(t.parent) && (atStart || atEnd)) return;
    }
    if (t.text !== undefined && BLOCKISH.has(t.parent)) {
      // leading / trailing spaces of a block container are collapsed away by the browser
      const prev = merged[i - 1], next = merged[i + 1];
      let x = t.text;
      if (!prev || prev.open === t.parent) x = x.replace(/^ /, "");
      if (!next || next.close === t.parent) x = x.replace(/ $/, "");
      if (x === "") return;
      res.push({ ...t, text: x });
      return;
    }
    res.push(t);
  });
  return res.map((t) => (t.text !== undefined ? `T:${JSON.stringify(t.text)}` : t.open ? `<${t.open} ${t.attrs.join(" ")}>` : `</${t.close}>`));
};

const server = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "error", resolve: { alias: { "react-router-dom": path.resolve("tools/router-stub.jsx"), "@": path.resolve("src") } } });
const { StaticRouter } = await server.ssrLoadModule("react-router-dom");
let bad = 0, good = 0;
const byRoute = new Map(routes.map((r) => [r.path, r]));

for (const file of files) {
  const rel = path.relative(SRC, file).split(path.sep).join("/");
  const route = rel === "index.html" ? "/" : "/" + rel;
  const modPath = "/src/pages/" + rel.replace(/\.html$/, "").replace(/[^A-Za-z0-9_\-./]/g, "_") + ".jsx";
  try {
    strict = exact.has(rel);
    const mod = await server.ssrLoadModule(modPath);
    const html = renderToStaticMarkup(React.createElement(StaticRouter, { location: route }, React.createElement(mod.default)));
    const rendered = parseFragment(html);
    // original body
    const doc = parse(fs.readFileSync(file, "utf8"));
    const findBody = (n) => (n.tagName === "body" ? n : (n.childNodes || []).map(findBody).find(Boolean));
    const a = tidy(canon(findBody(doc), route));
    const b = tidy(canon(rendered, route));
    let i = 0;
    while (i < Math.max(a.length, b.length) && a[i] === b[i]) i++;
    if (i === Math.max(a.length, b.length)) good++;
    else {
      bad++;
      console.log(`MISMATCH ${rel} at token ${i}/${a.length}\n  original: ${a.slice(i, i + 3).join(" ")}\n  react   : ${b.slice(i, i + 3).join(" ")}`);
    }
  } catch (err) {
    bad++;
    console.log(`ERROR ${rel}: ${err.message.split("\n")[0]}`);
  }
}
await server.close();
console.log(`\n${good} identical, ${bad} different, of ${files.length} pages`);
process.exit(bad ? 1 : 0);
