/**
 * Runs the original page scripts (carousels, accordions, GSAP animations, EmailJS...) after the
 * page's React tree is on screen, and undoes their side effects when the page unmounts.
 *
 * The scripts were written for a normal page load, so:
 *  - callbacks registered for DOMContentLoaded / load are invoked right after the script runs
 *  - every other document/window listener, IntersectionObserver and interval the script creates is
 *    tracked and removed on unmount (so nothing from a previous page keeps running)
 */
const loadedLibs = new Map(); // absolute url -> promise (CDN libraries are loaded once for the whole session)

const isLibrary = (src) => /^https?:\/\//i.test(src);

function loadLibrary(src) {
  if (!loadedLibs.has(src)) {
    loadedLibs.set(
      src,
      new Promise((resolve) => {
        const el = document.createElement("script");
        el.src = src;
        el.dataset.cosLib = "1";
        el.onload = () => resolve();
        el.onerror = () => resolve();
        document.head.appendChild(el);
      })
    );
  }
  return loadedLibs.get(src);
}

function createTracker() {
  const listeners = [];
  const observers = [];
  const intervals = [];
  const orig = {
    docAdd: document.addEventListener,
    winAdd: window.addEventListener,
    IO: window.IntersectionObserver,
    setInterval: window.setInterval,
  };
  let deferred = [];
  let active = false;

  const patch = () => {
    if (active) return;
    active = true;
    document.addEventListener = function (type, fn, opts) {
      if (type === "DOMContentLoaded") return void deferred.push(fn);
      listeners.push([document, type, fn, opts]);
      return orig.docAdd.call(this, type, fn, opts);
    };
    window.addEventListener = function (type, fn, opts) {
      if (type === "DOMContentLoaded" || type === "load") return void deferred.push(fn);
      listeners.push([window, type, fn, opts]);
      return orig.winAdd.call(this, type, fn, opts);
    };
    if (orig.IO) {
      window.IntersectionObserver = class extends orig.IO {
        constructor(...args) {
          super(...args);
          observers.push(this);
        }
      };
    }
    window.setInterval = function (...args) {
      const id = orig.setInterval.apply(window, args);
      intervals.push(id);
      return id;
    };
  };

  const unpatch = () => {
    active = false;
    document.addEventListener = orig.docAdd;
    window.addEventListener = orig.winAdd;
    window.IntersectionObserver = orig.IO;
    window.setInterval = orig.setInterval;
  };

  const flushDeferred = () => {
    // callbacks may register more listeners / observers, so keep the patch active while they run
    const list = deferred;
    deferred = [];
    list.forEach((fn) => {
      try {
        fn.call(document, new Event("DOMContentLoaded"));
      } catch (err) {
        console.error(err);
      }
    });
  };

  const dispose = () => {
    listeners.forEach(([target, type, fn, opts]) => target.removeEventListener(type, fn, opts));
    observers.forEach((o) => o.disconnect());
    intervals.forEach((id) => clearInterval(id));
    listeners.length = observers.length = intervals.length = 0;
  };

  return { patch, unpatch, flushDeferred, dispose };
}

const J = JSON.stringify;

/**
 * Runs the script in its own function scope (so a top-level `const faqs` can run again on the next page visit)
 * while still exposing its top-level names on window, exactly like a classic <script> would.
 */
function wrap(code, names, label) {
  if (!names) return code;
  const fn = names.fn.map((n) => `window[${J(n)}]=${n};`).join("");
  const lazy = [...names.vars, ...names.lex]
    .map((n) => {
      const setter = names.consts.includes(n) ? "" : `,set:function(v){${n}=v}`;
      return `try{Object.defineProperty(window,${J(n)},{configurable:true,get:function(){return ${n}}${setter}})}catch(e){}`;
    })
    .join("");
  return `(function(){${fn}${lazy}\n${code}\n}).call(window);\n//# sourceURL=${label}`;
}

const sourceCache = new Map();
const fetchText = (src) => {
  if (!sourceCache.has(src)) sourceCache.set(src, fetch(src).then((r) => (r.ok ? r.text() : "")).catch(() => ""));
  return sourceCache.get(src);
};

async function runOne(item, tracker) {
  // local files with known top-level names are fetched and run wrapped; everything else runs as a plain <script src>
  let code = item.code;
  if (item.src && item.names) {
    code = await fetchText(item.src);
    if (!code) return null;
  }
  return runElement(item, code, tracker);
}

function runElement(item, code, tracker) {
  return new Promise((resolve) => {
    const el = document.createElement("script");
    el.dataset.cosScript = "1";
    const done = () => {
      try {
        tracker.flushDeferred();
      } finally {
        tracker.unpatch();
        resolve(el);
      }
    };
    tracker.patch();
    if (item.src && code === undefined) {
      el.src = item.src;
      el.onload = done;
      el.onerror = done;
      document.body.appendChild(el);
    } else {
      el.textContent = wrap(code, item.names, item.src || "inline-script.js");
      try {
        document.body.appendChild(el); // inline scripts execute synchronously on insertion
      } catch (err) {
        console.error(err);
      }
      done();
    }
  });
}

export function runScripts(items) {
  if (!items || !items.length) return () => {};
  let cancelled = false;
  const tracker = createTracker();
  const added = [];

  (async () => {
    for (const item of items) {
      if (cancelled) return;
      if (item.src && isLibrary(item.src)) {
        await loadLibrary(item.src);
      } else {
        const el = await runOne(item, tracker);
        if (el) added.push(el);
      }
    }
  })();

  return () => {
    cancelled = true;
    tracker.unpatch();
    tracker.dispose();
    added.forEach((el) => el.remove());
    // GSAP ScrollTrigger pins / spacers live inside the page DOM - revert them before React removes it
    try {
      if (window.ScrollTrigger) window.ScrollTrigger.getAll().forEach((t) => t.kill(true));
    } catch (e) {
      /* ignore */
    }
    document.body.style.overflow = "";
  };
}
