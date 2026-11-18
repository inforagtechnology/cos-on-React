/**
 * Copies every non-HTML file (images, css, js, pdf) of the original site into /public,
 * keeping the folder structure so every relative url() / src in the original CSS keeps working.
 *   node tools/copy-assets.mjs <path-to-original-site>
 */
import fs from "node:fs";
import path from "node:path";
const SRC = path.resolve(process.argv[2] || "../original");
const DEST = path.resolve("public");
let n = 0;
const walk = (dir) => {
  for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, d.name);
    if (d.isDirectory()) { if (d.name !== ".git" && d.name !== "node_modules") walk(p); continue; }
    if (d.name.endsWith(".html") || d.name.endsWith(".md")) continue;
    const out = path.join(DEST, path.relative(SRC, p));
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.copyFileSync(p, out);
    n++;
  }
};
walk(SRC);
console.log(`copied ${n} asset files into public/`);
