import PageFrame from "@/runtime/PageFrame.jsx";
import { Link } from "react-router-dom";

// Converted from test/html.html
const styles = [{ href: "/header-footer.css" }, { href: "/test/main.css" }, { css: "\n                                        .flex-box {\n                                             display: flex;\n                                             justify-content: space-between;\n                                             align-items: center;\n                                        }\n\n                                        .box {\n                                             width: 50px;\n                                             height: 50px;\n                                             background-color: teal;\n                                        }\n                                   " }, { css: "\n                                        .grid-demo {\n                                             display: grid;\n                                             grid-template-columns: repeat(3, 1fr);\n                                             gap: 10px;\n                                        }\n\n                                        .box1 {\n                                             background-color: orange;\n                                             height: 40px;\n                                             width: 40px;\n                                        }\n                                   " }, { css: "\n                                        .box-demo {\n                                             width: 200px;\n                                             padding: 20px;\n                                             background-color: white;\n                                             border: 2px solid #333;\n                                             border-radius: 15px;\n                                             box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);\n                                        }\n\n                                        .box-demo h3 {\n                                             text-shadow: 2px 2px 4px gray;\n                                        }\n                                   " }, { css: "\n                                        .flex-demo {\n                                             display: flex;\n                                             justify-content: space-between;\n                                             align-items: center;\n                                        }\n\n                                        .box {\n                                             width: 50px;\n                                             height: 50px;\n                                             background-color: teal;\n                                        }\n                                   " }, { css: "\n                                             .grid-demo {\n                                                  display: grid;\n                                                  grid-template-columns: repeat(3, 1fr);\n                                                  gap: 10px;\n                                             }\n\n                                             .box1 {\n                                                  background-color: orange;\n                                                  height: 40px;\n                                                  width: 40px;\n                                             }\n                                        " }];
const scripts = [{ src: "/script.js", names: {"fn":["showCourseList"],"vars":[],"lex":["faqs","cards","observer"],"consts":["faqs","cards","observer"]} }, { src: "/test/main.js", names: {"fn":["ELanguage","HLanguage","toggleSection"],"vars":["english","hindi"],"lex":[],"consts":[]} }];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>HTML Course in Indore | Code of School</title>
          <meta name="description" content="Learn HTML from scratch in Indore with Code of School. Build web pages, master tags, forms, tables, and start your journey in web development." />
          <link rel="canonical" href="https://codeofschool.com/courses/html" />
          <meta name="keywords" content="HTML course Indore, HTML training Indore, Learn HTML Indore, HTML classes Indore, Web Development basics Indore" />
          <meta property="og:title" content="HTML Course in Indore | Code of School" />
          <meta property="og:description" content="Hands-on HTML training with projects. Start your career in web development with Code of School." />
          <meta property="og:url" content="https://codeofschool.com/courses/html" />
          <meta property="og:image" content="https://codeofschool.com/img/cos-white-logo.webp" />
          <meta name="twitter:title" content="HTML Course in Indore | Code of School" />
          <meta name="twitter:description" content="Learn HTML, the foundation of web development. Beginner-friendly training in Indore with Code of School." />
          <meta name="twitter:image" content="https://codeofschool.com/img/cos-white-logo.webp" />
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo.webp" type="image/webp" sizes="32x32" />
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo.webp" type="image/webp" sizes="48x48" />
          <link rel="apple-touch-icon" href="https://codeofschool.com/img/cos-white-logo.webp" />
          <link rel="manifest" href="/site.webmanifest" />
        </>
      }
    >
      {"\n     "}
      <div className="main">
        {"\n          "}
        <header>
          {"\n               "}
          <nav>
            {"\n                    "}
            <div className="nav-image">
              {"\n                         "}
              <Link to="/">
                <img src="../img/cos-white-logo.webp" alt="Code OF School" />
              </Link>
              {"\n                    "}
            </div>
            {"\n\n                    "}
            <div className="nav-pg">
              {"\n\n                         "}
              <ul className="nav-page">
                {"\n                              "}
                <li>
                  <Link to="/">
                    {"Home"}
                  </Link>
                </li>
                {"\n                              "}
                <li>
                  <Link to="/about-us.html">
                    {"About Us"}
                  </Link>
                </li>
                {"\n                              "}
                <li>
                  <Link to="/placement.html">
                    {"Our Placements"}
                  </Link>
                </li>
                {"\n                              "}
                <li>
                  <Link to="/contact-us.html">
                    {"Contact Us"}
                  </Link>
                </li>
                {"\n                         "}
              </ul>
              {"\n                    "}
            </div>
            {"\n\n                    "}
            <div className="nav-but">
              {"\n                         "}
              <a href="./scholarship.html" target="_blank">
                {"\n                              "}
                <button>
                  {"Scholarship"}
                </button>
                {"\n                         "}
              </a>
              {"\n                    "}
            </div>
            {"\n\n                    "}
            <div className="hamburger-menu" id="hamburger-icon">
              {"\n                         ☰ "}
            </div>
            {"\n               "}
          </nav>
          {"\n          "}
        </header>
        {"\n          "}
        <div className="dropdown-panel" id="dropdown-panel">
          {"\n               "}
          <ul className="categories" id="category-list">
            {"\n                    "}
            <li data-category="all">
              {"All"}
            </li>
            {"\n                    "}
            <li data-category="web">
              {"Web Dev"}
            </li>
            {"\n                    "}
            <li data-category="language">
              {"Languages"}
            </li>
            {"\n                    "}
            <li data-category="app">
              {"Mobile.Dev"}
            </li>
            {"\n                    "}
            <li data-category="ai">
              {"Data & AI"}
            </li>
            {"\n                    "}
            <li data-category="other">
              {"Other"}
            </li>
            {"\n               "}
          </ul>
          {"\n               "}
          <ul className="courses" id="course-list">
            {"\n               "}
          </ul>
          {"\n          "}
        </div>
        {"\n\n          "}
        <div className="mobile-nav-overlay" id="mobile-nav-overlay">
          {"\n               "}
          <div className="close-btn" id="close-mobile-nav">
            {"×"}
          </div>
          {"\n               "}
          <ul className="mobile-nav-page">
            {"\n                    "}
            <li>
              <Link to="/">
                {"Home"}
              </Link>
            </li>
            {"\n                    "}
            <li>
              <Link to="/about-us.html">
                {"About Us"}
              </Link>
            </li>
            {"\n                    "}
            {"\n                    "}
            <li>
              <Link to="/placement.html">
                {"Our Placements"}
              </Link>
            </li>
            {"\n                    "}
            <li>
              <Link to="/contact-us.html">
                {"Contact Us"}
              </Link>
            </li>
            {"\n               "}
          </ul>
          {"\n               "}
          <div className="mobile-nav-button">
            {"\n                    "}
            <a href="./scholarship.html" target="_blank">
              {"\n                         "}
              <button>
                {"Scholarship"}
              </button>
              {"\n                    "}
            </a>
            {"\n               "}
          </div>
          {"\n          "}
        </div>
        {"\n     "}
      </div>
      {"\n     "}
      {"\n\n     \n\n\n     "}
      <div className="container">
        {"\n          "}
        {"\n          "}
        <div className="top">
          {"\n               "}
          <h1>
            {"HTML & CSS"}
          </h1>
          {"\n          "}
        </div>
        {"\n          "}
        {"\n          "}
        <div className="language-toggle">
          {"\n               "}
          <button className="lang-btn" onClick={(event) => { ELanguage(); }}>
            {"\n                    English\n               "}
          </button>
          {"\n               "}
          <button className="lang-btn" onClick={(event) => { HLanguage(); }}>
            {"\n                    "}
            {"Hindi\n               "}
          </button>
          {"\n          "}
        </div>
        {"\n\n\n          "}
        {"\n          "}
        <section className="section-one">
          {"\n               "}
          <div className="notice">
            {"\n                    "}
            <h2>
              {"📌 Important Notice & Guidelines"}
            </h2>
            {"\n                    "}
            <ul>
              {"\n                         "}
              <li>
                <strong>
                  {"Scholarship Rule:"}
                </strong>
                {" The percentage of marks you score in the test will\n                              be equal to the percentage of scholarship you receive."}
              </li>
              {"\n                         "}
              <li>
                <strong>
                  {"Weekly Test:"}
                </strong>
                {" Tests will be conducted every Friday."}
              </li>
              {"\n                         "}
              <li>
                <strong>
                  {"Result Update:"}
                </strong>
                {" Your marks/results will be updated on the WhatsApp\n                              Channel every Saturday."}
              </li>
              {"\n                         "}
              <li>
                <strong>
                  {"New Batches:"}
                </strong>
                {" New batches will start every Monday."}
              </li>
              {"\n                    "}
            </ul>
            {"\n               "}
          </div>
          {"\n          "}
        </section>
        {"\n\n\n          "}
        <div id="englishContent">
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"1. Introduction to HTML"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="section-content-id">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  <strong>
                    {"HTML (HyperText Markup Language)"}
                  </strong>
                  {" is the standard language for creating\n                                   web\n                                   pages. It structures content on the web using elements and tags. The basic structure\n                                   includes "}
                  <code>
                    {"<!DOCTYPE html>"}
                  </code>
                  {",\n                                   "}
                  <code>
                    {"<html>"}
                  </code>
                  {","}
                  <code>
                    {"<head>"}
                  </code>
                  {", and "}
                  <code>
                    {"<body>"}
                  </code>
                  {".\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML & CSS</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n  <p>Welcome to my website.</p>\n</body>\n</html>\n    "}
                  </pre>
                  {"\n\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <strong>
                    {"Page title:"}
                  </strong>
                  {" HTML & CSS"}
                  <br />
                  <br />
                  {"\n                                   "}
                  <h1 style={{ margin: "10px 0", color: "#333" }}>
                    {"Hello World!"}
                  </h1>
                  {"\n                                   "}
                  <p style={{ margin: "10px 0" }}>
                    {"Welcome to my website."}
                  </p>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"2. HTML Tags and Elements"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="section-content-id">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"Tags define structure and type of content.Common tags include headings, paragraphs,\n                                   links,\n                                   images, lists, and containers.\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {" <h2>About Me</h2>\n <p>I am learning HTML & CSS.</p>\n <a href=\"https://google.com\">Google</a>\n <img src=\"https://via.placeholder.com/100\" alt=\"Sample\">\n <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n     <li>JavaScript</li>\n </ul>\n          "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <h2>
                    {"About Me"}
                  </h2>
                  {"\n                                   "}
                  <p>
                    {"I am learning HTML & CSS."}
                  </p>
                  {"\n                                   "}
                  <a href="https://google.com" target="_blank">
                    {"Google"}
                  </a>
                  <br />
                  <br />
                  {"\n                                   "}
                  <img src="https://via.placeholder.com/100" alt="Sample" />
                  <br />
                  {"\n                                   "}
                  <ul>
                    {"\n                                        "}
                    <li>
                      {"HTML"}
                    </li>
                    {"\n                                        "}
                    <li>
                      {"CSS"}
                    </li>
                    {"\n                                        "}
                    <li>
                      {"JavaScript"}
                    </li>
                    {"\n                                   "}
                  </ul>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"3. Attributes in HTML"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"Attributes provide additional information about elements. Examples: id, class, src,\n                                   href,\n                                   alt, title.\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<img src=\"https://via.placeholder.com/120\"\n alt=\"Company Logo\" title=\"Our Logo\">\n<a href=\"https://example.com\" target=\"_blank\">\n  Open Link\n</a>\n          "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <img src="https://via.placeholder.com/120" alt="Company Logo" title="Our Logo" />
                  <br />
                  <br />
                  {"\n                                   "}
                  <a href="https://example.com" target="_blank">
                    {"Open Link"}
                  </a>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"4. Forms in HTML"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"Forms are used to collect user input. Elements include input, textarea, button, select.\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<form>\n  <input type=\"text\" placeholder=\"Enter Name\">\n  <input type=\"email\" placeholder=\"Enter Email\">\n  <button type=\"submit\">Submit</button>\n</form>\n    "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <form>
                    {"\n                                        "}
                    <input type="text" placeholder="Enter Name" />
                    <br />
                    <br />
                    {"\n                                        "}
                    <input type="email" placeholder="Enter Email" />
                    <br />
                    <br />
                    {"\n                                        "}
                    <button type="submit">
                      {"Submit"}
                    </button>
                    {"\n                                   "}
                  </form>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"5. Introduction to CSS"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="section-content-id">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"CSS styles the HTML content. It changes colors, fonts, spacing, layout, and visual\n                                   appearance."}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<style>\n  p {\n    color: blue;\n    font-size: 16px;\n  }\n</style>\n\n<p>This is a styled paragraph.</p>\n    "}
                  </pre>
                  {"\n\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p style={{ color: "blue", fontSize: "16px" }}>
                    {"This is a styled paragraph."}
                  </p>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"6. Selectors in CSS"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="section-content-id">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"Selectors define which HTML elements the CSS styles apply to. Types: element, class,\n                                   id,\n                                   group, universal."}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {" "}
                    <pre>
                      {"<style>\n  p { color: green; }\n  .highlight { background-color: yellow; }\n  #main { width: 50%; }\n</style>\n\n<p>This is green text.</p>\n<p class=\"highlight\">This has yellow background.</p>\n<div id=\"main\">This div is 50% width.</div>\n    \n                              "}
                    </pre>
                    {"\n\n                              "}
                  </pre>
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p style={{ color: "green" }}>
                    {"This is green text."}
                  </p>
                  {"\n                                   "}
                  <p style={{ backgroundColor: "yellow" }}>
                    {"This has yellow background."}
                  </p>
                  {"\n                                   "}
                  <div style={{ width: "50%", background: "#eee" }}>
                    {"This div is 50% width."}
                  </div>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"7. Box Model in CSS"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="section-content-id">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"Every HTML element is a rectangular box. Components: content, padding, border, margin.\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    <pre>
                      {"<style>\ndiv {\n  width: 200px;\n  padding: 10px;\n  border: 2px solid black;\n  margin: 20px;\n}\n</style>\n\n<div>Box Model Example</div>\n    "}
                    </pre>
                    {"\n\n                              "}
                  </pre>
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <div style={{ width: "200px", padding: "10px", border: "2px solid black", margin: "20px" }}>
                    {"\n                                        Box Model Example\n                                   "}
                  </div>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"8. CSS Positioning"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="section-content-id">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"CSS positioning controls the placement of elements on the page: static, relative,\n                                   absolute,\n                                   fixed, sticky."}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    <pre>
                      {"<style>\n.box {\n  width: 100px;\n  height: 100px;\n  background-color: coral;\n  position: absolute;\n  top: 50px;\n  left: 100px;\n}\n</style>\n\n<div class=\"box\"></div>\n    "}
                    </pre>
                    {"\n\n                              "}
                  </pre>
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <div style={{ width: "100px", height: "100px", backgroundColor: "coral", position: "absolute", top: "20px", left: "50px" }}>
                    {"\n                                   "}
                  </div>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"9. Flexbox in CSS"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="section-content-id-sl">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"Flexbox provides a flexible way to layout items inside a container."}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {" "}
                    <pre>
                      {"<style>\n.flex-box {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.box {\n  width: 50px;\n  height: 50px;\n  background-color: teal;\n}\n</style>\n\n<div class=\"flex-box\">\n  <div class=\"box\"></div>\n  <div class=\"box\"></div>\n  <div class=\"box\"></div>\n</div>\n    "}
                    </pre>
                    {"\n\n                              "}
                  </pre>
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  {"\n                                   "}
                  <div className="flex-box">
                    {"\n                                        "}
                    <div className="box"></div>
                    {"\n                                        "}
                    <div className="box"></div>
                    {"\n                                        "}
                    <div className="box"></div>
                    {"\n                                   "}
                  </div>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"10. Grid in CSS"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="section-content-id-sl">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"Grid layout divides space into rows and columns."}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    <pre>
                      {"<style>\n.grid-demo{\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n.box1 {\n  background-color: orange;\n  height: 40px;\n  width:40px;\n}\n</style>\n\n<div class=\"grid\">\n  <div class=\"box1\"></div>\n  <div class=\"box1\"></div>\n  <div class=\"box1\"></div>\n  <div class=\"box1\"></div>\n  <div class=\"box1\"></div>\n  <div class=\"box1\"></div>\n</div>\n    "}
                    </pre>
                    {"\n\n                              "}
                  </pre>
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  {"\n                                   "}
                  <div className="grid-demo">
                    {"\n                                        "}
                    <div className="box1"></div>
                    {"\n                                        "}
                    <div className="box1"></div>
                    {"\n                                        "}
                    <div className="box1"></div>
                    {"\n                                        "}
                    <div className="box1"></div>
                    {"\n                                        "}
                    <div className="box1"></div>
                    {"\n                                        "}
                    <div className="box1"></div>
                    {"\n                                   "}
                  </div>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"11. Lists in HTML"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="section-content-id-sl">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"Lists are used to group related items. There are two main types: Ordered lists\n                                   (<ol>)\n                                   and Unordered lists (<ul>)."}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<h3>Unordered List</h3>\n<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n  <li>Mango</li>\n</ul>\n\n<h3>Ordered List</h3>\n<ol>\n  <li>Step 1</li>\n  <li>Step 2</li>\n  <li>Step 3</li>\n</ol>\n    "}
                  </pre>
                  {"\n\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <h3>
                    {"Unordered List"}
                  </h3>
                  {"\n                                   "}
                  <ul>
                    {"\n                                        "}
                    <li>
                      {"Apple"}
                    </li>
                    {"\n                                        "}
                    <li>
                      {"Banana"}
                    </li>
                    {"\n                                        "}
                    <li>
                      {"Mango"}
                    </li>
                    {"\n                                   "}
                  </ul>
                  {"\n                                   "}
                  <h3>
                    {"Ordered List"}
                  </h3>
                  {"\n                                   "}
                  <ol>
                    {"\n                                        "}
                    <li>
                      {"Step 1"}
                    </li>
                    {"\n                                        "}
                    <li>
                      {"Step 2"}
                    </li>
                    {"\n                                        "}
                    <li>
                      {"Step 3"}
                    </li>
                    {"\n                                   "}
                  </ol>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"12. Tables in HTML"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="section-content-id-sl">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"Tables are used to display data in rows and columns using <table>, <tr>,\n                                   <th>, <td> tags."}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<table border=\"1\">\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>John</td>\n    <td>25</td>\n  </tr>\n  <tr>\n    <td>Emma</td>\n    <td>22</td>\n  </tr>\n</table>\n    "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <table border="1">
                    <tbody>
                      <tr>
                        <th>
                          {"Name"}
                        </th>
                        <th>
                          {"Age"}
                        </th>
                      </tr>
                      <tr>
                        <td>
                          {"John"}
                        </td>
                        <td>
                          {"25"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Emma"}
                        </td>
                        <td>
                          {"22"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"13. HTML5 Semantic Tags"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="section-content-id">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"Semantic tags like <header>, <nav>, <section>, <article>,\n                                   <footer> improve accessibility and SEO."}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<header>My Website</header>\n<nav>\n  <a href=\"#\">Home</a>\n  <a href=\"#\">About</a>\n</nav>\n<section>\n  <article>\n    <h3>Article Title</h3>\n    <p>This is an article.</p>\n  </article>\n</section>\n<footer>Copyright 2025</footer>\n    "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <h2>
                    {"My Website"}
                  </h2>
                  {"\n                                   "}
                  <nav>
                    {"\n                                        "}
                    <a href="#">
                      {"Home"}
                    </a>
                    {" |\n                                        "}
                    <a href="#">
                      {"About"}
                    </a>
                    {"\n                                   "}
                  </nav>
                  {"\n                                   "}
                  <h3>
                    {"\n                                        Article Title\n                                   "}
                  </h3>
                  {"\n                                   "}
                  <p>
                    {"\n                                        This is an article\n                                   "}
                  </p>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"14. Embedding Multimedia"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="section-content-id">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"HTML allows embedding images, audio, and video using <img>, <audio>,\n                                   <video> tags."}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<img src=\"https://via.placeholder.com/120\">\n<audio controls>\n  <source src=\"sample.mp3\" type=\"audio/mpeg\">\n</audio>\n<video width=\"200\" controls>\n  <source src=\"sample.mp4\" type=\"video/mp4\">\n</video>\n    "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <img src="https://via.placeholder.com/120" alt="Sample" />
                  <br />
                  <br />
                  {"\n                                   "}
                  <audio controls>
                    {"\n                                        "}
                    <source src="sample.mp3" type="audio/mpeg" />
                    {"\n                                   "}
                  </audio>
                  <br />
                  <br />
                  {"\n                                   "}
                  <video width="200" controls>
                    {"\n                                        "}
                    <source src="sample.mp4" type="video/mp4" />
                    {"\n                                   "}
                  </video>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"15. CSS Shadows & Borders"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="section-content-id-sl">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"Shadows and borders improve the visual design of elements.\n                                   "}
                  <b>
                    {"box-shadow"}
                  </b>
                  {" adds shadow around elements, "}
                  <b>
                    {"text-shadow"}
                  </b>
                  {" adds shadow to\n                                   text,\n                                   and "}
                  <b>
                    {"border-radius"}
                  </b>
                  {" creates rounded corners.\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example" id="code-example-css">
                  {"\n                                   "}
                  <pre>
                    {"<style>\n.box {\n  width: 200px;\n  padding: 20px;\n  background-color: white;\n  border: 2px solid #333;\n  border-radius: 15px;\n  box-shadow: 4px 4px 10px rgba(0,0,0,0.3);\n}\nh3 {\n  text-shadow: 2px 2px 4px gray;\n}\n</style>\n\n<div class=\"box\">\n  <h3>Shadow Box</h3>\n  <p>This box has rounded corners and a shadow.</p>\n</div>\n    "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  {"\n                                   "}
                  <div className="box-demo">
                    {"\n                                        "}
                    <h3>
                      {"Shadow Box"}
                    </h3>
                    {"\n                                        "}
                    <p>
                      {"This box has rounded corners and a shadow."}
                    </p>
                    {"\n                                   "}
                  </div>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n          "}
        </div>
        {"\n\n          "}
        <div id="hindiContent" className="hidden">
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"1. HTML का परिचय"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  <strong>
                    {"HTML (हाइपरटेक्स्ट मार्कअप लैंग्वेज)"}
                  </strong>
                  {" वेब पेज बनाने की मानक भाषा है।\n                                   यह वेब पर सामग्री को तत्वों और टैग्स की मदद से संरचित करता है।\n                                   इसकी बुनियादी संरचना में "}
                  <code>
                    {"<!DOCTYPE html>"}
                  </code>
                  {",\n                                   "}
                  <code>
                    {"<html>"}
                  </code>
                  {", "}
                  <code>
                    {"<head>"}
                  </code>
                  {", और "}
                  <code>
                    {"<body>"}
                  </code>
                  {"\n                                   शामिल होते हैं।\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<!DOCTYPE html>\n<html>\n<head>\n<title>Hello World</title>\n</head>\n<body>\n<h1>Hello World!</h1>\n<p>Welcome to my website.</p>\n</body>\n</html>\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <strong>
                    {"पेज का टाइटल:"}
                  </strong>
                  {" HTML & CSS"}
                  <br />
                  <br />
                  {"\n                                   "}
                  <h1 style={{ margin: "10px 0", color: "#333" }}>
                    {"Hello World!"}
                  </h1>
                  {"\n                                   "}
                  <p style={{ margin: "10px 0" }}>
                    {"Welcome to my website."}
                  </p>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"2. HTML टैग और एलिमेंट्स"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"टैग्स सामग्री की संरचना और प्रकार को परिभाषित करते हैं।\n                                   सामान्य टैग्स में हेडिंग्स, पैराग्राफ, लिंक, इमेज, सूचियां और कंटेनर शामिल हैं।\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<h2>About Me</h2>\n<p>I am learning HTML & CSS.</p>\n<a href=\"https://google.com\">Google</a>\n<img src=\"https://via.placeholder.com/100\" alt=\"Sample\">\n<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <h2>
                    {"About Me"}
                  </h2>
                  {"\n                                   "}
                  <p>
                    {"I am learning HTML & CSS."}
                  </p>
                  {"\n                                   "}
                  <a href="https://google.com" target="_blank">
                    {"Google"}
                  </a>
                  <br />
                  <br />
                  {"\n                                   "}
                  <img src="https://via.placeholder.com/100" alt="Sample" />
                  <br />
                  {"\n                                   "}
                  <ul>
                    {"\n                                        "}
                    <li>
                      {"HTML"}
                    </li>
                    {"\n                                        "}
                    <li>
                      {"CSS"}
                    </li>
                    {"\n                                        "}
                    <li>
                      {"JavaScript"}
                    </li>
                    {"\n                                   "}
                  </ul>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"3. HTML में एट्रिब्यूट्स"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"एट्रिब्यूट्स एलिमेंट्स के बारे में अतिरिक्त जानकारी प्रदान करते हैं।\n                                   उदाहरण: id, class, src, href, alt, title।\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<img src=\"https://via.placeholder.com/120\"\n alt=\"Company Logo\" title=\"Our Logo\">\n<a href=\"https://example.com\" target=\"_blank\">\n  Open Link\n</a>\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <img src="https://via.placeholder.com/120" alt="Company Logo" title="Our Logo" />
                  <br />
                  <br />
                  {"\n                                   "}
                  <a href="https://example.com" target="_blank">
                    {"Open Link"}
                  </a>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"4. HTML में फॉर्म"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"फॉर्म का उपयोग उपयोगकर्ता से इनपुट लेने के लिए किया जाता है।\n                                   सामान्य एलिमेंट्स: input, textarea, button, select।\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<form>\n  <input type=\"text\" placeholder=\"Enter Name\">\n  <input type=\"email\" placeholder=\"Enter Email\">\n  <button type=\"submit\">Submit</button>\n</form>\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <form>
                    {"\n                                        "}
                    <input type="text" placeholder="Enter Name" />
                    <br />
                    <br />
                    {"\n                                        "}
                    <input type="email" placeholder="Enter Email" />
                    <br />
                    <br />
                    {"\n                                        "}
                    <button type="submit">
                      {"Submit"}
                    </button>
                    {"\n                                   "}
                  </form>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"5. CSS का परिचय"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"CSS का उपयोग HTML सामग्री को स्टाइल करने के लिए किया जाता है।\n                                   यह रंग, फॉन्ट, स्पेसिंग, लेआउट और विजुअल लुक बदलता है।\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<style>\n  p {\n    color: blue;\n    font-size: 16px;\n  }\n</style>\n\n<p>This is a styled paragraph.</p>\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p style={{ color: "blue", fontSize: "16px" }}>
                    {"This is a styled paragraph."}
                  </p>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"6. CSS सेलेक्टर्स"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"सेलेक्टर्स यह तय करते हैं कि कौन से HTML एलिमेंट्स पर CSS लागू होगी।\n                                   प्रकार: element, class, id, group, universal।\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<style>\n  p { color: green; }\n  .highlight { background-color: yellow; }\n  #main { width: 50%; }\n</style>\n\n<p>This is green text.</p>\n<p class=\"highlight\">This has yellow background.</p>\n<div id=\"main\">This div is 50% width.</div>\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p style={{ color: "green" }}>
                    {"This is green text."}
                  </p>
                  {"\n                                   "}
                  <p style={{ backgroundColor: "yellow" }}>
                    {"This has yellow background."}
                  </p>
                  {"\n                                   "}
                  <div style={{ width: "50%", background: "#eee" }}>
                    {"This div is 50% width."}
                  </div>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"7. CSS बॉक्स मॉडल"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"हर HTML एलिमेंट एक आयताकार बॉक्स की तरह होता है। इसके हिस्से होते हैं: कंटेंट, पैडिंग,\n                                   बॉर्डर और मार्जिन।"}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<style>\ndiv {\n  width: 200px;\n  padding: 10px;\n  border: 2px solid black;\n  margin: 20px;\n}\n</style>\n\n<div>बॉक्स मॉडल उदाहरण</div>\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <div style={{ width: "200px", padding: "10px", border: "2px solid black", margin: "20px" }}>
                    {"\n                                        बॉक्स मॉडल उदाहरण\n                                   "}
                  </div>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"8. CSS पोज़िशनिंग"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"CSS पोज़िशनिंग पेज पर एलिमेंट्स की स्थिति को नियंत्रित करती है: static, relative,\n                                   absolute, fixed, sticky।"}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<style>\n.box {\n  width: 100px;\n  height: 100px;\n  background-color: coral;\n  position: absolute;\n  top: 50px;\n  left: 100px;\n}\n</style>\n\n<div class=\"box\"></div>\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <div style={{ width: "100px", height: "100px", backgroundColor: "coral", position: "absolute", top: "20px", left: "50px" }}>
                    {"\n                                   "}
                  </div>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"9. CSS फ्लेक्सबॉक्स"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"फ्लेक्सबॉक्स एक कंटेनर के अंदर आइटम्स को लचीले तरीके से लेआउट करने का तरीका प्रदान करता\n                                   है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<style>\n.flex-demo {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.box {\n  width: 50px;\n  height: 50px;\n  background-color: teal;\n}\n</style>\n\n<div class=\"flex-demo\">\n  <div class=\"box\"></div>\n  <div class=\"box\"></div>\n  <div class=\"box\"></div>\n</div>\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  {"\n                                   "}
                  <div className="flex-demo">
                    {"\n                                        "}
                    <div className="box"></div>
                    {"\n                                        "}
                    <div className="box"></div>
                    {"\n                                        "}
                    <div className="box"></div>
                    {"\n                                   "}
                  </div>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"10. CSS ग्रिड"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"ग्रिड लेआउट पेज को पंक्तियों और स्तंभों में विभाजित करता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<style>\n.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n.box {\n  background-color: orange;\n  height: 80px;\n}\n</style>\n\n<div class=\"grid-demo\">\n  <div class=\"box1\"></div>\n  <div class=\"box1\"></div>\n  <div class=\"box1\"></div>\n  <div class=\"box1\"></div>\n  <div class=\"box1\"></div>\n  <div class=\"box1\"></div>\n</div>\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <div className="grid-demo">
                    {"\n                                        "}
                    {"\n                                        "}
                    <div className="box1"></div>
                    {"\n                                        "}
                    <div className="box1"></div>
                    {"\n                                        "}
                    <div className="box1"></div>
                    {"\n                                        "}
                    <div className="box1"></div>
                    {"\n                                        "}
                    <div className="box1"></div>
                    {"\n                                        "}
                    <div className="box1"></div>
                    {"\n                                   "}
                  </div>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"11. HTML में सूचियाँ (Lists)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"सूचियों का उपयोग संबंधित आइटम को समूहित करने के लिए किया जाता है। मुख्य दो प्रकार हैं:\n                                   क्रमबद्ध सूची (<ol>) और अक्रमबद्ध सूची (<ul>)।"}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<h3>अक्रमबद्ध सूची</h3>\n<ul>\n  <li>सेब</li>\n  <li>केला</li>\n  <li>आम</li>\n</ul>\n\n<h3>क्रमबद्ध सूची</h3>\n<ol>\n  <li>कदम 1</li>\n  <li>कदम 2</li>\n  <li>कदम 3</li>\n</ol>\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <h3>
                    {"अक्रमबद्ध सूची"}
                  </h3>
                  {"\n                                   "}
                  <ul>
                    {"\n                                        "}
                    <li>
                      {"सेब"}
                    </li>
                    {"\n                                        "}
                    <li>
                      {"केला"}
                    </li>
                    {"\n                                        "}
                    <li>
                      {"आम"}
                    </li>
                    {"\n                                   "}
                  </ul>
                  {"\n                                   "}
                  <h3>
                    {"क्रमबद्ध सूची"}
                  </h3>
                  {"\n                                   "}
                  <ol>
                    {"\n                                        "}
                    <li>
                      {"कदम 1"}
                    </li>
                    {"\n                                        "}
                    <li>
                      {"कदम 2"}
                    </li>
                    {"\n                                        "}
                    <li>
                      {"कदम 3"}
                    </li>
                    {"\n                                   "}
                  </ol>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"12. HTML में तालिकाएँ (Tables)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"तालिकाओं का उपयोग डेटा को पंक्तियों और स्तंभों में दिखाने के लिए किया जाता है। इसके लिए\n                                   <table>, <tr>, <th>, <td> टैग का उपयोग होता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<table border=\"1\">\n  <tr>\n    <th>नाम</th>\n    <th>आयु</th>\n  </tr>\n  <tr>\n    <td>जॉन</td>\n    <td>25</td>\n  </tr>\n  <tr>\n    <td>एम्मा</td>\n    <td>22</td>\n  </tr>\n</table>\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <table border="1">
                    <tbody>
                      <tr>
                        <th>
                          {"नाम"}
                        </th>
                        <th>
                          {"आयु"}
                        </th>
                      </tr>
                      <tr>
                        <td>
                          {"जॉन"}
                        </td>
                        <td>
                          {"25"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"एम्मा"}
                        </td>
                        <td>
                          {"22"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"13. HTML5 सेमांटिक टैग्स"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="section-content-id">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"सेमांटिक टैग्स जैसे <header>, <nav>, <section>, <article>,\n                                   <footer> वेबसाइट की संरचना, एक्सेसिबिलिटी और SEO को बेहतर बनाते हैं।"}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<header>मेरी वेबसाइट</header>\n<nav>\n  <a href=\"#\">मुखपृष्ठ</a>\n  <a href=\"#\">परिचय</a>\n</nav>\n<section>\n  <article>\n    <h3>लेख का शीर्षक</h3>\n    <p>यह एक लेख है।</p>\n  </article>\n</section>\n<footer>कॉपीराइट 2025</footer>\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <h2>
                    {"मेरी वेबसाइट"}
                  </h2>
                  {"\n                                   "}
                  <nav>
                    {"\n                                        "}
                    <a href="#">
                      {"मुखपृष्ठ"}
                    </a>
                    {" |\n                                        "}
                    <a href="#">
                      {"परिचय"}
                    </a>
                    {"\n                                        "}
                    <h3>
                      {"\n                                             लेख का शीर्षक\n                                        "}
                    </h3>
                    {"\n                                        "}
                    <p>
                      {"\n                                             यह एक लेख है।\n                                        "}
                    </p>
                    {"\n\n                                   "}
                  </nav>
                  {"\n\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"14. मल्टीमीडिया एम्बेड करना"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="section-content-id">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"HTML में छवियाँ, ऑडियो और वीडियो एम्बेड करने के लिए <img>, <audio>,\n                                   <video> टैग का उपयोग किया जाता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<img src=\"https://via.placeholder.com/120\">\n<audio controls>\n  <source src=\"sample.mp3\" type=\"audio/mpeg\">\n</audio>\n<video width=\"200\" controls>\n  <source src=\"sample.mp4\" type=\"video/mp4\">\n</video>\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <img src="https://via.placeholder.com/120" alt="Sample" />
                  <br />
                  <br />
                  {"\n                                   "}
                  <audio controls>
                    {"\n                                        "}
                    <source src="sample.mp3" type="audio/mpeg" />
                    {"\n                                   "}
                  </audio>
                  <br />
                  <br />
                  {"\n                                   "}
                  <video width="200" controls>
                    {"\n                                        "}
                    <source src="sample.mp4" type="video/mp4" />
                    {"\n                                   "}
                  </video>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"15. CSS शैडोज़ और बॉर्डर्स"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="section-content-id">
              {"\n                         "}
              <div>
                {"\n                              "}
                <p>
                  {"शैडोज़ और बॉर्डर्स एलिमेंट्स के डिज़ाइन को बेहतर बनाते हैं।\n                                   "}
                  <b>
                    {"box-shadow"}
                  </b>
                  {" एलिमेंट्स के चारों ओर छाया जोड़ता है,\n                                   "}
                  <b>
                    {"text-shadow"}
                  </b>
                  {" टेक्स्ट में छाया जोड़ता है,\n                                   और "}
                  <b>
                    {"border-radius"}
                  </b>
                  {" किनारों को गोल करता है।\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"<style>\n.box {\n  width: 200px;\n  padding: 20px;\n  background-color: white;\n  border: 2px solid #333;\n  border-radius: 15px;\n  box-shadow: 4px 4px 10px rgba(0,0,0,0.3);\n}\nh3 {\n  text-shadow: 2px 2px 4px gray;\n}\n</style>\n\n<div class=\"box\">\n  <h3>शैडो बॉक्स</h3>\n  <p>इस बॉक्स में गोल किनारे और छाया है।</p>\n</div>\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <div className="box-demo">
                    {"\n                                        "}
                    <h3>
                      {"शैडो बॉक्स"}
                    </h3>
                    {"\n                                        "}
                    <p>
                      {"इस बॉक्स में गोल किनारे और छाया है।"}
                    </p>
                    {"\n                                   "}
                  </div>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n          "}
        </div>
        {"\n\n\n     "}
      </div>
      {"\n     "}
      <section className="section-final">
        {"\n          "}
        <h1>
          {"Best of Luck to All Students! "}
        </h1>
        {"\n          "}
        <p>
          {"Give your best in the test, stay focused, and keep learning something new every day. Believe in\n               yourself,\n               and let each lesson make you stronger and smarter."}
        </p>
        {"\n     "}
      </section>
      {"\n  "}
      {"\n        "}
      <a href="https://wa.me/919977723584?text=Hi%20I%20need%20help" className="whatsapp-float" id="whatsappButton" target="_blank">
        {"\n            "}
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Chat" />
        {"\n            "}
        <span className="notification-dot"></span>
        {"\n        "}
      </a>
      {"\n\n     "}
      <footer>
        {"\n\n          "}
        <div className="footer-partone">
          {"\n\n               "}
          <div className="footer-inforag">
            {"\n                    "}
            <div className="footer-image">
              <img src="../img/cos-white-logo.webp" alt="Code OF School" />
            </div>
            {"\n                    "}
            <div className="footer-dis">
              {"\n                         "}
              <p>
                {"\n                              Code of School by Inforag Technology empowers future tech innovators through hands-on\n                              training in coding, data science, AI, and full-stack development. Our practical,\n                              industry-driven curriculum ensures students gain job-ready skills and real-world project\n                              experience."}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="footer-logo">
              {"\n                         "}
              <a href="https://www.instagram.com/codeofschool/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path>
                </svg>
              </a>
              {"\n\n                         "}
              <a href="https://www.linkedin.com/company/code-of-school" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path>
                </svg>
              </a>
              {"\n\n                         "}
              <a href="https://www.facebook.com/codeofschool" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                </svg>
              </a>
              {"\n\n                         "}
              <a href="https://x.com/codeofschool" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
                </svg>
              </a>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          <div className="footer-quicklink">
            {"\n                    "}
            <ul>
              {"\n                         "}
              <h3 id="heading">
                {"Quick Links"}
              </h3>
              {"\n                         "}
              <li>
                <Link to="/">
                  {"Home"}
                </Link>
              </li>
              {"\n                         "}
              <li>
                <Link to="/about-us.html">
                  {"About Us"}
                </Link>
              </li>
              {"\n                         "}
              <li>
                <Link to="/contact-us.html">
                  {"Contact Us"}
                </Link>
              </li>
              {"\n                         "}
              <li>
                {"\n                              "}
                <h3>
                  {"Legal & Info "}
                </h3>
                {"\n                         "}
              </li>
              {"\n                         "}
              <li>
                <Link to="/Frequently-asked-questions.html">
                  {"FAQ"}
                </Link>
              </li>
              {"\n                         "}
              <li>
                <Link to="/privacy-policy.html">
                  {"Privacy Policy"}
                </Link>
              </li>
              {"\n                         "}
              <li>
                <Link to="/termsandcondition.html">
                  {"Terms & Conditions"}
                </Link>
              </li>
              {"\n                    "}
            </ul>
            {"\n                    "}
            <div className="footer-login-btn">
              <Link to="/login.html">
                <button>
                  {"Login"}
                </button>
              </Link>
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          <div className="footer-service">
            {"\n                   "}
            <ul>
              {"\n                    "}
              <li>
                <a href="./marketing.html">
                  {"Digital Marketing with AI"}
                </a>
              </li>
              {"\n                    "}
              <li>
                <a href="./frontend.html">
                  {"Full Stack Development"}
                </a>
              </li>
              {"\n                    "}
              <li>
                <a href="./mern.html">
                  {"MERN Stack Development"}
                </a>
              </li>
              {"\n                    "}
              <li>
                <a href="./frontend.html">
                  {"Frontend Development"}
                </a>
              </li>
              {"\n                    "}
              <li>
                <a href="./mobile_app.html">
                  {"Mobile App Development"}
                </a>
              </li>
              {"\n                    "}
              <li>
                <Link to="/test/data_science.html">
                  {"Data Science"}
                </Link>
              </li>
              {"\n                    "}
              <li>
                <a href="./analysis.html">
                  {"Data Analysis"}
                </a>
              </li>
              {"\n                    "}
              <li>
                <a href="./ui_ux.html">
                  {"UI/UX Design"}
                </a>
              </li>
              {"\n                    "}
              <li>
                <Link to="/test/python.html">
                  {"Python"}
                </Link>
              </li>
              {"\n                    "}
              <li>
                <Link to="/test/c.html">
                  {"C & C++"}
                </Link>
              </li>
              {"\n                "}
            </ul>
            {"\n               "}
          </div>
          {"\n\n               "}
          <div className="footer-contact">
            {"\n                    "}
            <h3 id="heading-three">
              {"Contact Us"}
            </h3>
            {"\n\n                    "}
            <div className="footer-contact-loc">
              {"\n                         "}
              <div className="footer-contact-logo">
                {"\n                              "}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"></path>
                </svg>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="footer-contact-location">
                {"\n                              "}
                <a href={"https://www.google.com/maps/place/Inforag+Technology+-+Web+%7C+App+%7C+Digital+Marketing+%7C+Software+Company+in+Indore/@22.7496616,75.8953251,3a,75y/data=!3m8!1e2!3m6!1sAF1QipP1gRwG7pwN49gQMMzKXwBFGqWpqR2oBXTp7Kna!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipP1gRwG7pwN49gQMMzKXwBFGqWpqR2oBXTp7Kna%3Dw114-h86-k-no!7i4160!8i3120!4m7!3m6!1s0x3962fd13477b7e61:0x8cfc2e3f59b0c1b3!8m2!3d22.749631!4d75.8954539!10e5!16s%2Fg%2F11x1jbjxtj?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"} target="_blank">
                  {"Office No. 421 Fourth Floor, Shagun Tower, Rasoma Square, Vijay\n                                   Nagar,\n                                   Ratna Lok Colony, Indore, Madhya Pradesh 452010"}
                </a>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n\n                    "}
            <div className="footer-contact-phoneno">
              {"\n                         "}
              <div className="footer-contact-logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path>
                </svg>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="contact-no">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    <a href="tel:9977723584">
                      {"+91 99777-23-584"}
                    </a>
                  </li>
                  {"\n                                   "}
                  <li>
                    <a href="tel:9977701948">
                      {"+91 99777-019-48"}
                    </a>
                  </li>
                  {"\n                                   "}
                  <li>
                    <a href="tel:9165234695">
                      {"+91 9165-234-695"}
                    </a>
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n\n                    "}
            <div className="footer-contact-mail">
              {"\n                         "}
              <div className="footer-contact-logo">
                {"\n                              "}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"></path>
                </svg>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="mail-add">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    <a href="mailto:thecodeofschool@gmail.com">
                      {"thecodeofschool@gmail.com"}
                    </a>
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n\n                    "}
            <div className="footer-contact-time">
              {"\n                         "}
              <div className="footer-contact-logo">
                {"\n                              "}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"></path>
                </svg>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="office">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Mon-Sat : 10:00 - 20:00 "}
                  </li>
                  {"\n                                   "}
                  {"\n                                   "}
                  <li>
                    {"Sunday : Closed "}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n\n\n          "}
        </div>
        {"\n          "}
        <div className="footer-parttwo">
          {"\n               "}
          <h3>
            {"Copyright © 2025 "}
            <a href="https://inforag.com/" target="_blank">
              {"Inforag Technology"}
            </a>
            {" All\n                    rights reserved"}
          </h3>
          {"\n          "}
        </div>
        {"\n\n     "}
      </footer>
      {"\n\n     "}
      {"\n\n\n\n\n\n"}
    </PageFrame>
  );
}
