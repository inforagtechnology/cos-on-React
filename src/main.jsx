import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// StrictMode is intentionally not used: the original pages ship plain DOM scripts (carousels, GSAP,
// accordions) that run once per page view, and StrictMode's dev-only double-mount would run them twice.
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
