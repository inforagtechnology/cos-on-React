import { lazy, Suspense, useEffect } from "react";
import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import routes from "./routes.generated.js";
import ComponentsPreview from "./pages/components-preview.jsx";

const AdminPanel = lazy(() => import("./runtime/AdminPanel.jsx"));
const PublishedBlogIndex = lazy(() =>
  import("./runtime/PublishedBlogs.jsx").then((module) => ({ default: module.PublishedBlogIndex }))
);
const PublishedBlogPage = lazy(() =>
  import("./runtime/PublishedBlogs.jsx").then((module) => ({ default: module.PublishedBlogPage }))
);

/**
 * Serve every original page at a clean URL while redirecting legacy .html URLs.
 */
export default function App() {
  const location = useLocation();

  useEffect(() => {
    function cleanInternalLinks(root) {
      const anchors = [];
      if (root instanceof HTMLAnchorElement) anchors.push(root);
      if (root.querySelectorAll) anchors.push(...root.querySelectorAll("a[href]"));

      anchors.forEach((anchor) => {
        const href = anchor.getAttribute("href");
        if (!href) return;

        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin || !/\.html$/i.test(url.pathname)) return;

        url.pathname = url.pathname === "/index.html"
          ? "/"
          : url.pathname.replace(/\.html$/i, "");
        anchor.setAttribute("href", `${url.pathname}${url.search}${url.hash}`);
      });
    }

    cleanInternalLinks(document.body);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes") {
          cleanInternalLinks(mutation.target);
        } else {
          mutation.addedNodes.forEach(cleanInternalLinks);
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["href"],
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  if (location.pathname.endsWith(".html")) {
    const pathname = location.pathname === "/index.html"
      ? "/"
      : location.pathname.slice(0, -".html".length);
    return (
      <Navigate
        to={{ pathname, search: location.search, hash: location.hash }}
        replace
      />
    );
  }

  return (
    <Suspense fallback={null}>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/blogs" element={<PublishedBlogIndex />} />
        <Route path="/blogs/posts/:slug" element={<PublishedBlogPage />} />
        <Route path="/components-preview" element={<ComponentsPreview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

function NotFound() {
  return (
    <div style={{ padding: "80px 20px", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>404</h1>
      <p>Page not found.</p>
      <a href="/">Go to home</a>
    </div>
  );
}
