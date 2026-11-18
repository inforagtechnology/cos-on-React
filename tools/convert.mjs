/**
 * HTML -> React (JSX) converter for the Code Of School static site.
 *
 *   node tools/convert.mjs <path-to-original-site> [--out src/pages]
 *
 * - parses every .html file with parse5 (the HTML5 parser used by browsers, so the DOM tree is
 *   exactly what the browser built for the original page)
 * - writes one JSX component per page into src/pages/ (same folder structure as the site)
 * - writes src/routes.generated.js (URL -> lazy page)
 * - nothing about the markup, classes, ids, text or inline styles is changed
 */
import fs from "node:fs";
import path from "node:path";
import { parse } from "parse5";
import * as acorn from "acorn";

const SRC = path.resolve(process.argv[2] || "../original");
const OUT = path.resolve(process.argv.includes("--out") ? process.argv[process.argv.indexOf("--out") + 1] : "src/pages");
const PUBLIC = path.resolve("public");

// ---------------------------------------------------------------- helpers
const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name);
    if (d.isDirectory()) return d.name === ".git" || d.name === "node_modules" ? [] : walk(p);
    return [p];
  });

const htmlFiles = walk(SRC).filter((f) => f.endsWith(".html")).sort();
const relOf = (f) => path.relative(SRC, f).split(path.sep).join("/");

// route (original URL path) for each html file
const routeOf = (rel) => (rel === "index.html" ? "/" : "/" + rel);
const routeSet = new Set(htmlFiles.map((f) => routeOf(relOf(f))));
// clean-URL aliases also count as internal pages for <Link>
const cleanOf = (route) => route.replace(/\.html$/, "");

// all non-html files that will exist in /public (for stylesheet case-fixing)
const allFiles = walk(SRC).filter((f) => !f.endsWith(".html")).map((f) => "/" + relOf(f));
const lowerMap = new Map(allFiles.map((f) => [f.toLowerCase(), f]));

const warnings = [];
const exactPages = [];
const warn = (page, msg) => warnings.push(`${page}: ${msg}`);

// ---------------------------------------------------------------- attribute handling
const ATTR = {
  class: "className", for: "htmlFor", tabindex: "tabIndex", colspan: "colSpan", rowspan: "rowSpan",
  maxlength: "maxLength", minlength: "minLength", readonly: "readOnly", autocomplete: "autoComplete",
  autofocus: "autoFocus", autoplay: "autoPlay", crossorigin: "crossOrigin", frameborder: "frameBorder",
  allowfullscreen: "allowFullScreen", srcset: "srcSet", datetime: "dateTime", cellpadding: "cellPadding",
  cellspacing: "cellSpacing", enctype: "encType", novalidate: "noValidate", itemprop: "itemProp",
  itemscope: "itemScope", itemtype: "itemType", itemid: "itemID", referrerpolicy: "referrerPolicy",
  contenteditable: "contentEditable", spellcheck: "spellCheck", playsinline: "playsInline",
  fetchpriority: "fetchPriority", accesskey: "accessKey", usemap: "useMap", formaction: "formAction",
  formmethod: "formMethod", formtarget: "formTarget", hreflang: "hrefLang", inputmode: "inputMode",
  charset: "charSet", "http-equiv": "httpEquiv", "accept-charset": "acceptCharset", srclang: "srcLang",
  bgcolor: "bgcolor", marginwidth: "marginWidth", marginheight: "marginHeight", "xlink:href": "xlinkHref",
  "xml:space": "xmlSpace", "xmlns:xlink": "xmlnsXlink", "xml:lang": "xmlLang", controlslist: "controlsList",
  allowtransparency: "allowTransparency", disablepictureinpicture: "disablePictureInPicture",
  nomodule: "noModule", ismap: "isMap", rowspan_: "rowSpan",
};
const BOOL = new Set([
  "disabled", "required", "checked", "selected", "readonly", "multiple", "autofocus", "autoplay", "controls",
  "loop", "muted", "playsinline", "hidden", "async", "defer", "allowfullscreen", "novalidate", "open",
  "reversed", "default", "itemscope", "nomodule", "ismap", "formnovalidate",
]);
const EVENT = {
  onclick: "onClick", onchange: "onChange", onsubmit: "onSubmit", onerror: "onError", onload: "onLoad",
  oninput: "onInput", onfocus: "onFocus", onblur: "onBlur", onkeydown: "onKeyDown", onkeyup: "onKeyUp",
  onmouseover: "onMouseOver", onmouseout: "onMouseOut", onmouseenter: "onMouseEnter", onmouseleave: "onMouseLeave",
};
// HTML parsers re-case these on SVG elements (viewbox -> viewBox ...); React does not, so do it here
const SVG_CASE = Object.fromEntries(
  ["viewBox", "preserveAspectRatio", "gradientUnits", "gradientTransform", "patternUnits", "patternContentUnits", "patternTransform",
   "clipPathUnits", "maskUnits", "maskContentUnits", "filterUnits", "primitiveUnits", "markerWidth", "markerHeight", "markerUnits",
   "refX", "refY", "textLength", "lengthAdjust", "spreadMethod", "stdDeviation", "baseFrequency", "numOctaves", "startOffset",
   "pathLength", "tableValues", "keyTimes", "keySplines", "repeatCount", "repeatDur", "calcMode", "attributeName", "attributeType",
   "specularConstant", "specularExponent", "surfaceScale", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "limitingConeAngle",
   "pointsAtX", "pointsAtY", "pointsAtZ", "xChannelSelector", "yChannelSelector", "zoomAndPan", "targetX", "targetY", "edgeMode",
   "filterRes", "glyphRef", "preserveAlpha", "stitchTiles", "baseProfile", "contentScriptType", "contentStyleType", "requiredExtensions",
   "requiredFeatures", "systemLanguage"].map((n) => [n.toLowerCase(), n])
);
const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
const NO_WS_PARENTS = new Set(["table", "thead", "tbody", "tfoot", "tr", "colgroup", "select", "optgroup", "datalist", "svg", "g", "defs", "linearGradient", "radialGradient", "clipPath", "mask", "pattern", "symbol", "html", "head"]);
// block containers: leading / trailing whitespace-only children are never rendered
const BLOCKISH = new Set(["div", "section", "article", "aside", "header", "footer", "nav", "main", "ul", "ol", "li", "p", "form", "body", "h1", "h2", "h3", "h4", "h5", "h6", "td", "th", "button", "fieldset", "figure", "figcaption", "blockquote", "dd", "dt", "dl", "details", "summary", "address"]);

const jstr = (s) => JSON.stringify(s).replace(/\u00a0/g, "\\u00a0").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");

const camelCssProp = (p) => {
  if (p.startsWith("--")) return p;
  if (p.startsWith("-ms-")) return "ms" + p.slice(4).replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^./, (c) => c.toUpperCase());
  const s = p.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  return p.startsWith("-") ? s.replace(/^./, (c) => c.toUpperCase()) : s;
};

const splitDecls = (css) => {
  const out = [];
  let cur = "", depth = 0, quote = "";
  for (const ch of css) {
    if (quote) { cur += ch; if (ch === quote) quote = ""; continue; }
    if (ch === '"' || ch === "'") { quote = ch; cur += ch; continue; }
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === ";" && depth === 0) { out.push(cur); cur = ""; continue; }
    cur += ch;
  }
  if (cur.trim()) out.push(cur);
  return out;
};

const styleToObject = (css) => {
  const props = [];
  for (const d of splitDecls(css)) {
    const i = d.indexOf(":");
    if (i < 0) continue;
    const name = d.slice(0, i).trim();
    let val = d.slice(i + 1).trim();
    if (!name || !val) continue;
    props.push(`${/^[A-Za-z_$][\w$]*$/.test(camelCssProp(name)) ? camelCssProp(name) : jstr(camelCssProp(name))}: ${jstr(val)}`);
  }
  return `{{ ${props.join(", ")} }}`;
};

// ---------------------------------------------------------------- links
const resolveUrl = (pageRoute, href) => {
  const dir = path.posix.dirname(pageRoute);
  return path.posix.normalize(href.startsWith("/") ? href : path.posix.join(dir, href));
};

const asInternalRoute = (pageRoute, href) => {
  if (!href || /^(#|[a-z][a-z0-9+.-]*:|\/\/)/i.test(href) || /[?#]/.test(href)) return null;
  let r = resolveUrl(pageRoute, href);
  if (r === "/index.html") r = "/";
  if (routeSet.has(r)) return cleanOf(r);
  // clean URL form, e.g. /about-us
  const withHtml = r + ".html";
  if (routeSet.has(withHtml)) return r;
  return null;
};

// ---------------------------------------------------------------- script analysis
// The original scripts are classic <script>s: their top-level names are globals. In a single-page app the same script is
// executed again on every visit, and a second top-level `const x` would throw. So each script runs inside its own function scope,
// and we record its top-level names here so the runtime can still expose them on window (inline onclick handlers need that).
const patternNames = (p, out) => {
  if (!p) return;
  if (p.type === "Identifier") out.push(p.name);
  else if (p.type === "ObjectPattern") p.properties.forEach((x) => patternNames(x.value || x.argument, out));
  else if (p.type === "ArrayPattern") p.elements.forEach((x) => patternNames(x, out));
  else if (p.type === "AssignmentPattern") patternNames(p.left, out);
  else if (p.type === "RestElement") patternNames(p.argument, out);
};
const analyseScript = (code, label) => {
  try {
    const ast = acorn.parse(code, { ecmaVersion: "latest", sourceType: "script", allowReturnOutsideFunction: true, allowHashBang: true });
    const names = { fn: [], vars: [], lex: [], consts: [] };
    for (const n of ast.body) {
      if (n.type === "FunctionDeclaration") names.fn.push(n.id.name);
      else if (n.type === "ClassDeclaration") names.lex.push(n.id.name);
      else if (n.type === "VariableDeclaration") {
        const out = [];
        n.declarations.forEach((d) => patternNames(d.id, out));
        (n.kind === "var" ? names.vars : names.lex).push(...out);
        if (n.kind === "const") names.consts.push(...out);
      }
    }
    return names;
  } catch (err) {
    warn(label, "script could not be analysed, runs unwrapped: " + err.message);
    return null;
  }
};
const namesJs = (names) => (names ? `, names: ${JSON.stringify(names)}` : "");

// ---------------------------------------------------------------- JSX serialisation
const attrKey = (name, tag, inSvg) => {
  if (inSvg && SVG_CASE[name]) return SVG_CASE[name];
  if (ATTR[name]) return ATTR[name];
  if (name.startsWith("data-") || name.startsWith("aria-")) return name;
  if (inSvg && name.includes("-")) return name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  return name;
};

const attrToJsx = (a, node, ctx) => {
  const tag = node.tagName;
  let name = a.name;
  let value = a.value;
  const lname = name.toLowerCase();

  // inline event handlers: onclick="foo(this)" -> onClick={(event) => { foo(event.currentTarget) }}
  if (EVENT[lname]) {
    let code = value.trim().replace(/\bthis\b/g, "event.currentTarget");
    const hasReturn = /^return\s/.test(code);
    if (hasReturn) code = code.replace(/^return\s+/, "");
    code = code.replace(/;\s*$/, "");
    return `${EVENT[lname]}={(event) => { ${code}; }}`;
  }
  if (lname.startsWith("on")) { ctx.warn(`unsupported inline handler ${name}`); return ""; }

  if (lname === "style") return `style=${styleToObject(value)}`;

  // form controls keep their value without becoming "controlled"
  if (tag === "input" && lname === "value") name = "defaultValue";
  else if (tag === "input" && lname === "checked") name = "defaultChecked";
  else name = attrKey(lname, tag, ctx.inSvg);

  if (!/^[A-Za-z_][\w:.-]*$/.test(name)) return `{...{${jstr(name)}: ${jstr(value)}}}`;

  if (BOOL.has(lname) && (value === "" || value.toLowerCase() === lname)) return `${name}`;
  if (lname === "class") value = value.replace(/\s+/g, " ").trim();

  if (/^[^"'&<>{}\\\n\r\u2028\u2029\u00a0]*$/.test(value)) return `${name}="${value}"`;
  return `${name}={${jstr(value)}}`;
};

const textOf = (node) => (node.childNodes || []).map((c) => (c.nodeName === "#text" ? c.value : "")).join("");

const serializeChildren = (node, ctx, indent) => {
  const kids = node.childNodes || [];
  const parts = [];
  const isPre = ["pre", "textarea", "code"].includes(node.tagName) && node.tagName !== "code" ? true : ctx.pre;
  kids.forEach((kid, i) => {
    if (kid.nodeName === "#comment") return;
    if (kid.nodeName === "#text") {
      let t = kid.value;
      if (ctx.exactWs) {
        // page CSS makes whitespace visible (white-space: pre*): keep every character exactly as in the source
        if (t === "") return;
        if (/^[ \t\r\n\f]*$/.test(t) && NO_WS_PARENTS.has(node.tagName)) return;
        parts.push(`${indent}{${jstr(t)}}`);
        return;
      }
      if (!isPre) t = t.replace(/[ \t\r\n\f]+/g, " ");
      if (t === "") return;
      if (!isPre && t === " ") {
        if (NO_WS_PARENTS.has(node.tagName)) return;
        const prev = kids.slice(0, i).filter((k) => k.nodeName !== "#comment");
        const next = kids.slice(i + 1).filter((k) => k.nodeName !== "#comment");
        if (BLOCKISH.has(node.tagName) && (prev.length === 0 || next.length === 0)) return;
        parts.push(`${indent}{" "}`);
        return;
      }
      if (/^[^{}<>&\u00a0\u2028\u2029\\]*$/.test(t) && !/^ | $/.test(t) && !isPre) parts.push(`${indent}${t}`);
      else parts.push(`${indent}{${jstr(t)}}`);
      return;
    }
    const s = serializeElement(kid, ctx, indent);
    if (s) parts.push(s);
  });
  return parts;
};

const serializeElement = (node, ctx, indent) => {
  const tag = node.tagName;
  if (!tag) return "";

  // things that are handled at page level, not inside the markup
  if (tag === "script") { ctx.collectScript(node); return ""; }
  if (tag === "style") { ctx.styles.push({ css: textOf(node) }); return ""; }
  if (tag === "noscript") return "";
  if (tag === "link" || tag === "meta" || tag === "title" || tag === "base") {
    if (node.namespaceURI === "http://www.w3.org/1999/xhtml") { ctx.collectHeadLike(node); return ""; }
  }

  const inSvg = node.namespaceURI === "http://www.w3.org/2000/svg";
  const inner = { ...ctx, inSvg: ctx.inSvg || tag === "svg" || inSvg, pre: ctx.pre || tag === "pre" || tag === "textarea" };

  let compTag = tag;
  let attrs = node.attrs.slice();

  // internal page links become <Link> (client-side navigation, same destination)
  if (tag === "a") {
    const href = attrs.find((a) => a.name === "href");
    const target = attrs.find((a) => a.name === "target");
    const download = attrs.find((a) => a.name === "download");
    if (href && !target && !download) {
      const route = asInternalRoute(ctx.route, href.value);
      if (route) {
        compTag = "Link";
        ctx.state.usesLink = true;
        attrs = attrs.filter((a) => a !== href);
        attrs.unshift({ name: "__to", value: route });
      }
    }
  }

  const attrStrs = attrs
    .map((a) => (a.name === "__to" ? `to=${jstr(a.value)}` : attrToJsx(a, node, inner)))
    .filter(Boolean);

  if (tag === "select") {
    const selected = [];
    const scan = (n) => (n.childNodes || []).forEach((c) => {
      if (c.tagName === "option") {
        if (c.attrs.some((a) => a.name === "selected")) {
          const v = c.attrs.find((a) => a.name === "value");
          selected.push(v ? v.value : textOf(c).trim());
          c.attrs = c.attrs.filter((a) => a.name !== "selected");
        }
      } else scan(c);
    });
    scan(node);
    const multiple = node.attrs.some((a) => a.name === "multiple");
    if (selected.length) attrStrs.push(`defaultValue={${multiple ? "[" + selected.map(jstr).join(", ") + "]" : jstr(selected[0])}}`);
  }

  // <textarea>text</textarea> -> defaultValue
  if (tag === "textarea") {
    const t = textOf(node);
    if (t) attrStrs.push(`defaultValue={${jstr(t)}}`);
    return `${indent}<textarea${attrStrs.length ? " " + attrStrs.join(" ") : ""} />`;
  }

  const open = `<${compTag}${attrStrs.length ? " " + attrStrs.join(" ") : ""}`;
  if (VOID.has(tag) || tag === "iframe") return `${indent}${open}${tag === "iframe" ? "></iframe>" : " />"}`;

  const children = serializeChildren(node.tagName === "template" ? node.content : node, inner, indent + "  ");
  if (!children.length) return `${indent}${open}></${compTag}>`;
  return `${indent}${open}>\n${children.join("\n")}\n${indent}</${compTag}>`;
};

// ---------------------------------------------------------------- page conversion
const find = (node, name) => {
  if (node.tagName === name) return node;
  for (const c of node.childNodes || []) {
    const r = find(c, name);
    if (r) return r;
  }
  return null;
};

const resolveAsset = (route, href) => {
  if (/^(https?:)?\/\//i.test(href)) return href.startsWith("//") ? "https:" + href : href;
  const r = resolveUrl(route, href.split(/[?#]/)[0]);
  if (lowerMap.has(r.toLowerCase())) return lowerMap.get(r.toLowerCase());
  return null;
};

const convertPage = (file) => {
  const rel = relOf(file);
  const route = routeOf(rel);
  const doc = parse(fs.readFileSync(file, "utf8"));
  const html = find(doc, "html");
  const head = find(html, "head");
  const body = find(html, "body");

  const ctx = {
    route,
    state: { usesLink: false },
    exactWs: false,
    styles: [],
    scripts: [],
    headTags: [],
    inSvg: false,
    pre: false,
    warn: (m) => warn(rel, m),
    collectScript(node) {
      const type = (node.attrs.find((a) => a.name === "type") || {}).value || "";
      if (type === "application/ld+json") {
        ctx.headTags.push(`<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ${jstr(textOf(node).trim())} }} />`);
        return;
      }
      if (type && !/javascript|module/.test(type)) return;
      const src = (node.attrs.find((a) => a.name === "src") || {}).value;
      if (src) {
        const r = resolveAsset(route, src);
        if (!r) { warn(rel, `script not found: ${src}`); return; }
        let names = null;
        if (!/^https?:/.test(r)) {
          try { names = analyseScript(fs.readFileSync(path.join(SRC, r), "utf8"), rel + " -> " + r); } catch { /* missing */ }
        }
        ctx.scripts.push({ src: r, names, library: /^https?:/.test(r) });
      } else {
        const code = textOf(node);
        if (code.trim()) ctx.scripts.push({ code, names: analyseScript(code, rel + " (inline)") });
      }
    },
    collectHeadLike(node) {
      const t = node.tagName;
      const a = Object.fromEntries(node.attrs.map((x) => [x.name, x.value]));
      if (t === "title") { ctx.title = textOf(node).trim(); return; }
      if (t === "base") return;
      if (t === "meta") {
        if (a.charset || a.name === "viewport") return;
      }
      if (t === "link" && /\bstylesheet\b/i.test(a.rel || "")) {
        const r = resolveAsset(route, a.href || "");
        if (!r) { warn(rel, `stylesheet not found: ${a.href}`); return; }
        if ((a.href || "").toLowerCase() !== r.toLowerCase().slice(-(a.href || "").length) && !/^https?:/.test(r)) {
          // path differed only by case (works on Windows/macOS, 404s on Linux hosts) -> point at the real file
        }
        // drop exact duplicates (same file listed twice in one page changes nothing)
        if (!ctx.styles.some((s) => s.href === r)) ctx.styles.push({ href: r });
        return;
      }
      const attrs = node.attrs.map((x) => attrToJsx(x, node, ctx)).filter(Boolean);
      ctx.headTags.push(`<${t} ${attrs.join(" ")} />`);
    },
  };

  // head first (document order: head styles/scripts come before body ones)
  const walkHead = (n) => {
    for (const c of n.childNodes || []) {
      if (c.tagName === "script") ctx.collectScript(c);
      else if (c.tagName === "style") ctx.styles.push({ css: textOf(c) });
      else if (c.tagName === "link" || c.tagName === "meta" || c.tagName === "title" || c.tagName === "base") ctx.collectHeadLike(c);
      else if (c.tagName === "noscript") continue;
      else if (c.childNodes) walkHead(c);
    }
  };
  walkHead(head);

  // does any stylesheet / inline style of this page make whitespace visible?
  const WS = /white-space\s*:\s*(pre|pre-wrap|pre-line|break-spaces)/i;
  const cssTexts = ctx.styles.map((st) => {
    if (st.css) return st.css;
    if (/^https?:/.test(st.href)) return "";
    try { return fs.readFileSync(path.join(SRC, st.href), "utf8"); } catch { return ""; }
  });
  ctx.exactWs = cssTexts.some((c) => WS.test(c)) || WS.test(fs.readFileSync(file, "utf8").replace(/<!--[\s\S]*?-->/g, ""));
  if (ctx.exactWs) exactPages.push(rel);

  const bodyJsx = serializeChildren(body, ctx, "      ");
  const publishedCategory = {
    "/blogs/Digital-Marketing/digital-marketing-blog.html": "digital-marketing",
    "/blogs/Fullstack-Developer/Full-stack-blog.html": "full-stack",
  }[route];
  if (publishedCategory) {
    const headingIndex = bodyJsx.findIndex((line) => line.trim() === "</h1>");
    if (headingIndex < 0) throw new Error("blog listing heading not found");
    bodyJsx.splice(
      headingIndex + 1,
      0,
      `        <PublishedBlogCards category="${publishedCategory}" />`
    );
  }

  const title = ctx.title ? `<title>${/[{}<>&]/.test(ctx.title) ? `{${jstr(ctx.title)}}` : ctx.title}</title>` : "";
  const headJsx = [title, ...ctx.headTags].filter(Boolean).map((l) => "      " + l).join("\n");

  const stylesJs = "[" + ctx.styles.map((s) => (s.href ? `{ href: ${jstr(s.href)} }` : `{ css: ${jstr(s.css)} }`)).join(", ") + "]";
  const scriptsJs = "[" + ctx.scripts.map((s) => (s.src ? `{ src: ${jstr(s.src)}${namesJs(s.names)} }` : `{ code: ${jstr(s.code)}${namesJs(s.names)} }`)).join(", ") + "]";

  const imports = [`import PageFrame from "@/runtime/PageFrame.jsx";`];
  if (ctx.state.usesLink) imports.push(`import { Link } from "react-router-dom";`);
  if (publishedCategory) imports.push(`import { PublishedBlogCards } from "@/runtime/PublishedBlogs.jsx";`);

  const jsx = `${imports.join("\n")}

// Converted from ${rel}
const styles = ${stylesJs};
const scripts = ${scriptsJs};

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
${headJsx.replace(/^ {6}/gm, "          ")}
        </>
      }
    >
${bodyJsx.join("\n")}
    </PageFrame>
  );
}
`;
  return { rel, route, jsx, stats: { styles: ctx.styles.length, scripts: ctx.scripts.length } };
};

// ---------------------------------------------------------------- run
fs.rmSync(OUT, { recursive: true, force: true });
const routes = [];
let ok = 0;
for (const file of htmlFiles) {
  try {
    const { rel, route, jsx } = convertPage(file);
    const outRel = rel.replace(/\.html$/, "").replace(/[^A-Za-z0-9_\-./]/g, "_") + ".jsx";
    const outFile = path.join(OUT, outRel);
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, jsx);
    routes.push({ route, rel, module: "./pages/" + outRel });
    ok++;
  } catch (err) {
    warn(relOf(file), "FAILED: " + err.message);
  }
}

// routes: exact original URL, plus clean URL (without .html) as an alias
const lines = [];
for (const r of routes) {
  const paths = r.route === "/" ? ["/", "/index.html", "/index"] : [r.route, cleanOf(r.route)];
  for (const p of paths) lines.push(`  { path: ${jstr(p)}, Component: lazy(() => import(${jstr(r.module)})) },`);
}
fs.writeFileSync(
  path.resolve("src/routes.generated.js"),
  `// GENERATED by tools/convert.mjs - do not edit by hand\nimport { lazy } from "react";\n\nexport default [\n${lines.join("\n")}\n];\n`
);
fs.writeFileSync(path.resolve("tools/exact-whitespace-pages.json"), JSON.stringify(exactPages, null, 1));
fs.writeFileSync(path.resolve("tools/convert-warnings.txt"), warnings.join("\n") + "\n");
console.log(`${exactPages.length} pages use exact-whitespace mode; converted ${ok}/${htmlFiles.length} pages, ${warnings.length} warnings (tools/convert-warnings.txt)`);
