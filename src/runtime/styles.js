/**
 * Per-page stylesheet manager.
 *
 * The original site is multi-page: every HTML file loads ITS OWN css files, and many of them
 * target the same class names. In a single-page app those files must not be active together, so
 * each page declares its stylesheets (in original order) and they are added to <head> when the page
 * mounts and removed when it unmounts. Files shared by the next page stay loaded (ref-counted), so
 * moving between two pages with the same CSS never flashes unstyled content.
 */
const registry = new Map(); // key -> { el, count, promise }

const hashCss = (css) => {
  let h = 0;
  for (let i = 0; i < css.length; i++) h = (h * 31 + css.charCodeAt(i)) | 0;
  return `inline:${h}:${css.length}`;
};

const create = (item) => {
  if (item.href) {
    const el = document.createElement("link");
    el.rel = "stylesheet";
    el.href = item.href;
    el.dataset.cosPage = "1";
    const promise = new Promise((resolve) => {
      el.addEventListener("load", () => resolve());
      el.addEventListener("error", () => resolve()); // a missing file must not block the page (same as a browser)
    });
    return { el, promise };
  }
  const el = document.createElement("style");
  el.textContent = item.css;
  el.dataset.cosPage = "1";
  return { el, promise: Promise.resolve() };
};

const keyOf = (item) => (item.href ? `href:${new URL(item.href, location.href).href}` : hashCss(item.css));

export function acquireStyles(items) {
  const entries = items.map((item) => {
    const key = keyOf(item);
    let entry = registry.get(key);
    if (!entry) {
      const made = create(item);
      entry = { key, el: made.el, promise: made.promise, count: 0, attached: false };
      registry.set(key, entry);
    }
    entry.count++;
    return entry;
  });

  // attach new ones in order, then make sure the DOM order matches the page's declared order
  entries.forEach((e) => {
    if (!e.attached) {
      document.head.appendChild(e.el);
      e.attached = true;
    }
  });
  const domOrder = [...document.head.querySelectorAll("[data-cos-page]")].filter((n) => entries.some((e) => e.el === n));
  const inOrder = domOrder.length === entries.length && domOrder.every((n, i) => n === entries[i].el);
  if (!inOrder) entries.forEach((e) => document.head.appendChild(e.el));

  const ready = Promise.all(entries.map((e) => e.promise));

  const release = () => {
    entries.forEach((e) => e.count--);
    // deferred: if the next page needs the same file it re-acquires before this runs
    setTimeout(() => {
      entries.forEach((e) => {
        if (e.count <= 0 && registry.get(e.key) === e) {
          e.el.remove();
          registry.delete(e.key);
        }
      });
    }, 0);
  };
  return { ready, release };
}
