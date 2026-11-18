import { useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { acquireStyles } from "./styles.js";
import { runScripts } from "./scripts.js";

/**
 * Wraps every converted page.
 *  - head:    <title>, <meta>, <link> of the original <head> (React 19 hoists them into <head>)
 *  - styles:  the page's own stylesheets / <style> blocks, in the original order
 *  - scripts: the page's original scripts, run after the page is rendered
 * The page body is shown only after its stylesheets have loaded, like a normal page load (no flash of unstyled content).
 */
export default function PageFrame({ head, styles = [], scripts = [], children }) {
  // on the server (tools/verify.mjs, prerendering) there is no CSS to wait for, so the markup renders straight away
  const [ready, setReady] = useState(typeof window === "undefined");
  const { hash } = useLocation();

  useLayoutEffect(() => {
    let cancelled = false;
    const { ready: loaded, release } = acquireStyles(styles);
    loaded.then(() => !cancelled && setReady(true));
    return () => {
      cancelled = true;
      release();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // a new page always opens at the top (or at its #anchor), like a normal page load
  useLayoutEffect(() => {
    if (!ready) return;
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [ready, hash]);

  // layout effect so the cleanup (reverting GSAP pin-spacers) runs BEFORE React removes the DOM
  useLayoutEffect(() => {
    if (!ready) return;
    const stop = runScripts(scripts);
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  return (
    <>
      {head}
      {ready ? children : null}
      {ready && <BlogNavigationLinks />}
    </>
  );
}

function BlogNavigationLinks() {
  const [targets, setTargets] = useState([]);

  useLayoutEffect(() => {
    const placementLinks = Array.from(
      document.querySelectorAll("nav a, .nav-page a, .mobile-nav-page a")
    ).filter((anchor) => /^our placements?$/i.test(anchor.textContent.trim()));
    const hosts = placementLinks.flatMap((anchor) => {
      const item = anchor.closest("li");
      if (!item) return [];
      const host = document.createElement("li");
      host.className = "nav-blog-link";
      item.insertAdjacentElement("afterend", host);
      return [host];
    });

    setTargets(hosts);
    return () => hosts.forEach((host) => host.remove());
  }, []);

  return targets.map((target, index) =>
    createPortal(<Link to="/blogs">Blog</Link>, target, `blog-navigation-${index}`)
  );
}
