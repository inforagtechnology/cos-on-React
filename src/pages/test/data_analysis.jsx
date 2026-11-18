import PageFrame from "@/runtime/PageFrame.jsx";
import { Link } from "react-router-dom";

// Converted from test/data_analysis.html
const styles = [{ href: "/header-footer.css" }, { href: "/test/main.css" }];
const scripts = [{ src: "/script.js", names: {"fn":["showCourseList"],"vars":[],"lex":["faqs","cards","observer"],"consts":["faqs","cards","observer"]} }, { src: "/test/main.js", names: {"fn":["ELanguage","HLanguage","toggleSection"],"vars":["english","hindi"],"lex":[],"consts":[]} }];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>Data Analysis Course in Indore | Code of School</title>
          <meta name="description" content={"Learn data analysis using Excel, SQL, Power BI & Python. Master data cleaning, visualization, and insights with live projects."} />
          <link rel="canonical" href="https://codeofschool.com/courses/data-analysis" />
          <meta name="keywords" content="Data analysis course Indore, Data analytics training Indore, Power BI course Indore, Code of School data analysis" />
          <meta property="og:title" content="Data Analysis Course in Indore | Code of School" />
          <meta property="og:description" content="Learn data analytics with practical tools and real-world projects." />
          <meta property="og:url" content="https://codeofschool.com/courses/data-analysis" />
          <meta property="og:image" content="https://codeofschool.com/img/cos-white-logo.webp" />
          <meta name="twitter:title" content="Data Analysis Course | Code of School" />
          <meta name="twitter:description" content={"Master data analysis using Excel, SQL, Power BI & Python."} />
          <meta name="twitter:image" content="https://codeofschool.com/img/cos-white-logo.webp" />
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo.webp" type="image/webp" sizes="32x32" />
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo.webp" type="image/webp" sizes="48x48" />
          <link rel="apple-touch-icon" href="https://codeofschool.com/img/cos-white-logo.webp" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo.webp" type="image/webp" />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"Article\",\n      \"headline\": \"Data Analysis Tutorial – Learn Data Analysis Step-by-Step\",\n      \"description\": \"Data Analysis tutorial for beginners covering basics, syntax, examples, and exercises.\",\n      \"image\": \"https://yourwebsite.com/images/Data Analysis-banner.png\",\n      \"author\": {\n        \"@type\": \"Person\",\n        \n      },\n      \"publisher\": {\n        \"@type\": \"Organization\",\n        \"name\": \"YourWebsiteName\",\n        \"logo\": {\n          \"@type\": \"ImageObject\",\n          \"url\": \"https://yourwebsite.com/logo.png\"\n        }\n      },\n      \"mainEntityOfPage\": \"https://yourwebsite.com/Data Analysis.html\",\n      \"datePublished\": \"2025-01-10\",\n      \"dateModified\": \"2025-01-10\"\n    }" }} />
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
            {"Data Analysis"}
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
        {"\n          "}
        {"\n          "}
        <div id="englishContent">
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"1. Data Collection"}
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
                  {"Data Collection is the step where raw information is gathered from different sources\n                                   for\n                                   analysis. Sources can include surveys, online forms, databases, APIs, and web\n                                   scraping.\n                                   Beginners learn step-by-step how to collect accurate and high-quality data."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Customer Feedback: [5, 4, 3, 5, 4]"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Average rating = (5+4+3+5+4)/5 = 4.2 → Customer satisfaction is high."}
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
                {"2. Data Cleaning"}
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
                  {"Data Cleaning prepares data for analysis by removing errors, duplicates, and handling\n                                   missing values."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Customer ages: [25, 30, '', 27, 25]\nStep 1: Remove duplicates → [25, 30, '', 27]\nStep 2: Fill missing ('') with average → [25, 30, 27.33, 27]"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Cleaned ages = [25, 30, 27.33, 27]"}
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
                {"3. Data Types"}
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
                  {"Understanding data types is crucial for analysis. Data can be numerical, categorical,\n                                   ordinal, or boolean."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Age = 25 (numerical)\nGender = 'Male' (categorical)\nRating = 5 (ordinal)\nSubscribed = True (boolean)"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Type identification successful."}
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
                {"4. Descriptive Statistics"}
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
                  {"Descriptive stats summarize data using measures like mean, median, mode, and standard\n                                   deviation."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Sales = [200, 250, 300, 400, 350]"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Mean = 300, Median = 300, Mode = None"}
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
                {"5. Data Visualization"}
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
                  {"Visualization uses charts and graphs to show data patterns and trends clearly."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Monthly Sales: Jan=100, Feb=150, Mar=200"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Bar chart shows sales increasing."}
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
                {"6. Using Excel"}
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
                  {"Excel helps in data analysis using sorting, filtering, formulas, and charts."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Sales = [200, 250, 300]"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"SUM = 750"}
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
                {"7. SQL Basics"}
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
                  {"SQL fetches data from databases using queries."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"SELECT * FROM sales WHERE month='Jan';"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"January sales rows fetched."}
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
                {"8. Data Interpretation"}
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
                  {"Interpreting data means finding patterns and drawing conclusions."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Product B sales = 500, Product A sales = 400"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Product B performs better."}
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
                {"9. Key Metrics & KPIs"}
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
                  {"Metrics and KPIs measure business performance."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Revenue = 1000 - 400"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Revenue = 600"}
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
                {"10. Reporting"}
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
                  {"Reporting presents results in tables, charts, or dashboards."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Excel bar chart of monthly sales"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Sales trend shown increasing."}
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
                {"11. Data Patterns & Trends"}
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
                  {"Identifying patterns and trends helps in forecasting."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Sales increase every December"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Trend identified."}
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
                {"12. Data-driven Decision Making"}
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
                  {"Decisions are taken based on data insights for better outcomes."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Increase marketing budget for top-selling product"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Higher sales expected."}
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
                {"13. Dashboards"}
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
                  {"Dashboards visually track KPIs and metrics for quick insights."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Tableau dashboard with Sales & Profit"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Performance clearly visible."}
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
                {"14. Predictive Analysis"}
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
                  {"Predictive analysis estimates future sales or trends."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Next month sales forecast = 300"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Predicted sales = 300"}
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
                {"15. Data Documentation"}
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
                  {"Documentation keeps analysis steps clear and repeatable."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Maintain a data dictionary"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Process becomes transparent and easy to repeat."}
                  </p>
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
        {"\n          "}
        {"\n          "}
        {"\n          "}
        <div id="hindiContent" className="hidden">
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"1. डेटा संग्रहण"}
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
                  {"डेटा संग्रहण वह स्टेप है जिसमें अलग-अलग स्रोतों से जानकारी इकट्ठा की जाती है ताकि उसका\n                                   विश्लेषण किया जा सके। स्रोतों में सर्वे, ऑनलाइन फॉर्म, डेटाबेस, API और वेब स्क्रैपिंग\n                                   शामिल हो सकते हैं। शुरुआती लोग स्टेप-बाय-स्टेप सीखते हैं कि सही और उच्च-गुणवत्ता वाला\n                                   डेटा\n                                   कैसे इकट्ठा करें।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Customer Feedback: [5, 4, 3, 5, 4]"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Average rating = (5+4+3+5+4)/5 = 4.2 → Customer satisfaction उच्च है।"}
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
                {"2. डेटा सफाई"}
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
                  {"डेटा सफाई वह प्रक्रिया है जिसमें डेटा को विश्लेषण के लिए तैयार किया जाता है। इसमें\n                                   डुप्लिकेट, गलत मान और मिसिंग वैल्यू को हटाया या सही किया जाता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Customer ages: [25, 30, '', 27, 25]\nStep 1: डुप्लिकेट हटाएं → [25, 30, '', 27]\nStep 2: खाली ('') को औसत से भरें → [25, 30, 27.33, 27]"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"साफ किया गया डेटा = [25, 30, 27.33, 27]"}
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
                {"3. डेटा के प्रकार"}
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
                  {"डेटा के प्रकार को समझना बहुत जरूरी है। डेटा संख्यात्मक, श्रेणीबद्ध, क्रमिक और बूलियन\n                                   प्रकार\n                                   का हो सकता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Age = 25 (संख्यात्मक)\nGender = 'Male' (श्रेणीबद्ध)\nRating = 5 (क्रमिक)\nSubscribed = True (बूलियन)"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"प्रकार की पहचान सफल।"}
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
                {"4. वर्णनात्मक सांख्यिकी"}
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
                  {"वर्णनात्मक सांख्यिकी में डेटा का सारांश निकाला जाता है जैसे औसत (Mean), माध्यिका\n                                   (Median),\n                                   बहुलक (Mode) और मानक विचलन।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Sales = [200, 250, 300, 400, 350]"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Mean = 300, Median = 300, Mode = None"}
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
                {"5. डेटा का दृश्य प्रदर्शन"}
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
                  {"चार्ट और ग्राफ का उपयोग करके डेटा के पैटर्न और रुझान आसानी से समझे जा सकते हैं।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Monthly Sales: Jan=100, Feb=150, Mar=200"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"बार चार्ट में बिक्री बढ़ती हुई दिखती है।"}
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
                {"6. एक्सेल का उपयोग"}
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
                  {"एक्सेल शुरुआती लोगों के लिए आसान टूल है जिसमें सॉर्टिंग, फिल्टरिंग, फार्मूला और चार्ट्स\n                                   का\n                                   उपयोग कर सकते हैं।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Sales = [200, 250, 300]"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"SUM = 750"}
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
                {"7. SQL के बेसिक्स"}
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
                  {"SQL डेटाबेस से डेटा लाने के लिए क्वेरी का उपयोग करता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"SELECT * FROM sales WHERE month='Jan';"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"जनवरी की बिक्री की पंक्तियाँ प्राप्त हुईं।"}
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
                {"8. डेटा की व्याख्या"}
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
                  {"डेटा की व्याख्या का मतलब है पैटर्न समझकर निष्कर्ष निकालना।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Product B sales = 500, Product A sales = 400"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Product B का प्रदर्शन बेहतर है।"}
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
                {"9. मुख्य मेट्रिक्स और KPI"}
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
                  {"मेट्रिक्स और KPI बिजनेस के प्रदर्शन को मापने में मदद करते हैं।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Revenue = 1000 - 400"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Revenue = 600"}
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
                {"10. रिपोर्टिंग"}
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
                  {"रिपोर्टिंग में परिणामों को टेबल, चार्ट या डैशबोर्ड के रूप में दिखाया जाता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Excel bar chart of monthly sales"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"बिक्री का रुझान बढ़ता हुआ दिख रहा है।"}
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
                {"11. डेटा पैटर्न और रुझान"}
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
                  {"डेटा में पैटर्न और रुझान पहचानने से भविष्यवाणी करना संभव हो जाता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Sales increase every December"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"रुझान पहचाना गया।"}
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
                {"12. डेटा-संचालित निर्णय"}
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
                  {"डेटा से मिले इनसाइट्स के आधार पर निर्णय लिए जाते हैं ताकि बेहतर परिणाम मिल सकें।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Increase marketing budget for top-selling product"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"बिक्री बढ़ने की संभावना है।"}
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
                {"13. डैशबोर्ड्स"}
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
                  {"डैशबोर्ड्स में मेट्रिक्स और KPI को विजुअल रूप में ट्रैक किया जाता है ताकि जल्दी इनसाइट\n                                   मिल\n                                   सके।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Tableau dashboard with Sales & Profit"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"प्रदर्शन स्पष्ट रूप से दिखाई देता है।"}
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
                {"14. पूर्वानुमान विश्लेषण"}
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
                  {"पूर्वानुमान विश्लेषण से भविष्य की बिक्री या रुझान का अनुमान लगाया जाता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Next month sales forecast = 300"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Predicted sales = 300"}
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
                {"15. डेटा डाक्यूमेंटेशन"}
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
                  {"डेटा और विश्लेषण की स्टेप्स को सही तरीके से डाक्यूमेंट करना जरूरी है ताकि यह दोहराने\n                                   योग्य\n                                   और पारदर्शी रहे।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"Maintain a data dictionary"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"प्रक्रिया पारदर्शी और दोहराने में आसान बनती है।"}
                  </p>
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
        {"\n          "}
        {"\n     "}
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
      {"\n\n       "}
      {"\n        "}
      <a href="https://wa.me/919977723584?text=Hi%20I%20need%20help" className="whatsapp-float" id="whatsappButton" target="_blank">
        {"\n            "}
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Chat" />
        {"\n            "}
        <span className="notification-dot"></span>
        {"\n        "}
      </a>
      {"\n\n\n     "}
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
            {"\n                    "}
            <h3 id="heading-two">
              {"Courses Offered"}
            </h3>
            {"\n                    "}
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
