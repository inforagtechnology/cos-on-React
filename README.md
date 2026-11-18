# Code Of School – React version

The whole static website (217 HTML pages) converted to a React + Vite single-page app.
**The UI is unchanged**: every page keeps its original markup, class names, ids, inline styles, text and
its own original CSS files.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview
```

Assets (images, CSS, JS, PDFs) live in `public/` with the **same folder structure as the old site**, so every
`url(...)` inside the CSS and every `<img src>` keeps working untouched.
If `public/CoursePdf/` or the PDFs are missing (they are large and not shipped in the zip), copy them from the
original site:

```bash
npm run copy-assets -- ../path-to-original-site
```

## URLs

Every page uses a clean URL without `.html`. Legacy URLs ending in `.html` redirect to the clean URL:

| Original file | URLs that open it |
|---|---|
| `index.html` | `/` (legacy: `/index.html`) |
| `about-us.html` | `/about-us` (legacy: `/about-us.html`) |
| `blogs/Digital-Marketing/seo-guide.html` | `/blogs/Digital-Marketing/seo-guide` (legacy: `/blogs/Digital-Marketing/seo-guide.html`) |

Your host must serve `index.html` for unknown paths (single-page-app fallback). Already configured for
**Vercel** (`vercel.json`) and **Netlify** (`public/_redirects`). For Apache add
`FallbackResource /index.html`; for nginx `try_files $uri /index.html;`.

## Blog admin

The Supabase-backed admin is available at `/admin`. It supports admin sign-in, drafts, publishing,
editing/deleting posts, and cover-image uploads. Published posts appear on `/blogs`, on their matching
existing Digital Marketing or Full Stack blog page, and at `/blogs/posts/<slug>`.

### Supabase setup

1. Create a Supabase project and open its SQL Editor.
2. Run [`supabase/blog-admin.sql`](./supabase/blog-admin.sql) to create the tables, RLS policies,
   and public `blog-images` storage bucket.
3. In Supabase Authentication, create an email/password user for the site admin. Then add that user's
   email to the allowlist by running this query with the real address:

   ```sql
   insert into public.blog_admins (user_id)
   select id from auth.users where email = 'admin@example.com'
   on conflict (user_id) do nothing;
   ```

4. Copy [`.env.example`](./.env.example) to `.env.local` and set `VITE_SUPABASE_URL` and
   `VITE_SUPABASE_ANON_KEY` from the Supabase project's API settings. Add the same variables to
   the Vercel project's Environment Variables and redeploy.

The browser uses only the Supabase anon/publishable key; never put a `service_role` key in this app.
Row-level security restricts post management and image uploads to users in `blog_admins`.

## How it is built

| Folder | What |
|---|---|
| `src/pages/**` | one React component per original HTML file (same folder layout), generated |
| `src/routes.generated.js` | URL -> page (lazy loaded, so each page is its own small chunk) |
| `src/runtime/PageFrame.jsx` | wraps every page: sets `<title>`/meta, loads **that page's own CSS** (and removes it when you leave), runs its original scripts |
| `src/runtime/styles.js` | per-page stylesheet manager (the old pages load different CSS files that share class names, so they must never be active together) |
| `src/runtime/scripts.js` | runs the original page scripts (header dropdown, mobile menu, FAQ, observers, GSAP, EmailJS...) in an isolated scope and cleans them up when you leave the page |
| `tools/convert.mjs` | the HTML -> JSX converter (re-runnable) |
| `tools/verify.mjs` | proves every converted page renders the same DOM as the original file |

## Re-running the conversion

If you edit the old HTML again and want to regenerate the React pages:

```bash
npm run convert -- ../path-to-original-site
npm run verify  -- ../path-to-original-site     # expects: 217 identical, 0 different
```

`tools/convert-warnings.txt` lists links in the original site that were already broken
(e.g. `digital_m_seoni_malwa.css` is referenced by 68 pages but does not exist in the site, so it 404'd before too).

## Notes

* **SEO**: the old site served finished HTML to Google. A client-side React app renders in the browser, so
  Google sees content only after running JavaScript. If organic search matters (it does for a training institute),
  add pre-rendering (e.g. `vite-plugin-prerender`/`react-snap`) or move to Next.js. The page components already
  render on the server (`tools/verify.mjs` does exactly that), so this is a small step.
* The inline `onclick="..."` attributes became React `onClick` handlers with the same code.
* Third-party scripts (GSAP, ScrollTrigger, Bootstrap, EmailJS) are still loaded from their CDNs, exactly as before.

## Missing large files

`public/CoursePdf/` (the course PDFs, ~290 MB) is not included in this zip. Copy the folder from your original site into `public/CoursePdf/`, or run `npm run copy-assets -- <path-to-original-site>` (copies every image, css, js and pdf).
