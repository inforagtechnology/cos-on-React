// Stand-in for react-router-dom used ONLY by tools/verify.mjs (renders <Link> as a plain <a>)
import React from "react";
export const Link = ({ to, ...rest }) => React.createElement("a", { href: to, ...rest });
export const useLocation = () => ({ hash: "", pathname: "/" });
export const StaticRouter = ({ children }) => children;
