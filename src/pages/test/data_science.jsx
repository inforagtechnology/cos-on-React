import PageFrame from "@/runtime/PageFrame.jsx";
import { Link } from "react-router-dom";

// Converted from test/data_science.html
const styles = [{ href: "/header-footer.css" }, { href: "/test/main.css" }];
const scripts = [{ src: "/test/main.js", names: {"fn":["ELanguage","HLanguage","toggleSection"],"vars":["english","hindi"],"lex":[],"consts":[]} }];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>Data Science Course in Indore | Code of School</title>
          <meta name="description" content="Learn Data Science with Python, Machine Learning, Statistics, Data Visualization, and AI. Build real-world projects and prepare for top IT careers." />
          <link rel="canonical" href="https://codeofschool.com/courses/data-science" />
          <meta name="keywords" content="Data Science course Indore, Data Science training Indore, Machine Learning Indore, Python Data Science Indore, AI Indore" />
          <meta property="og:title" content="Data Science Course in Indore | Code of School" />
          <meta property="og:description" content="Hands-on Data Science training with Python, Machine Learning, and AI projects." />
          <meta property="og:url" content="https://codeofschool.com/courses/data-science" />
          <meta property="og:image" content="https://codeofschool.com/img/cos-white-logo.webp" />
          <meta name="twitter:title" content="Data Science Course | Code of School" />
          <meta name="twitter:description" content="Master Data Science with Python, ML, AI, and real-world projects." />
          <meta name="twitter:image" content="https://codeofschool.com/img/cos-white-logo.webp" />
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo.webp" type="image/webp" sizes="32x32" />
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo.webp" type="image/webp" sizes="48x48" />
          <link rel="apple-touch-icon" href="https://codeofschool.com/img/cos-white-logo.webp" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo.webp" type="image/webp" />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"Article\",\n      \"headline\": \"Data Science Tutorial – Learn Data Analysis Step-by-Step\",\n      \"description\": \"Data Science tutorial for beginners covering basics, syntax, examples, and exercises.\",\n      \"image\": \"https://yourwebsite.com/images/Data Science.png\",\n      \"author\": {\n        \"@type\": \"Person\",\n        \n      },\n      \"publisher\": {\n        \"@type\": \"Organization\",\n        \"name\": \"YourWebsiteName\",\n        \"logo\": {\n          \"@type\": \"ImageObject\",\n          \"url\": \"https://yourwebsite.com/logo.png\"\n        }\n      },\n      \"mainEntityOfPage\": \"https://yourwebsite.com/Data Science.html\",\n      \"datePublished\": \"2025-01-10\",\n      \"dateModified\": \"2025-01-10\"\n    }\n\n     \n\n</head>\n\n\n<body>\n     <div class=\"main\">\n          <header>\n               <header>\n                    <nav>\n                         <div class=\"nav-image\">\n                              <a href=\"/\"><img src=\"../img/cos-white-logo.webp\" alt=\"Code OF School\"></a>\n                         </div>\n\n                         <div class=\"nav-pg\">\n\n                              <ul class=\"nav-page\">\n                                   <li><a href=\"/\">Home</a></li>\n                                   <li><a href=\"../about-us.html\">About Us</a></li>\n                                   <li><a href=\"../placement.html\">Our Placements</a></li>\n                                   <li><a href=\"../contact-us.html\">Contact Us</a></li>\n                              </ul>\n                         </div>\n\n                         <div class=\"nav-but\">\n                              <a href=\"./scholarship.html\" target=\"_blank\">\n                                   <button>Scholarship</button>\n                              </a>\n                         </div>\n\n                         <div class=\"hamburger-menu\" id=\"hamburger-icon\">\n                              &#9776; </div>\n                    </nav>\n               </header>\n               <div class=\"dropdown-panel\" id=\"dropdown-panel\">\n                    <ul class=\"categories\" id=\"category-list\">\n                         <li data-category=\"all\">All</li>\n                         <li data-category=\"web\">Web Dev</li>\n                         <li data-category=\"language\">Languages</li>\n                         <li data-category=\"app\">Mobile.Dev</li>\n                         <li data-category=\"ai\">Data & AI</li>\n                         <li data-category=\"other\">Other</li>\n                    </ul>\n                    <ul class=\"courses\" id=\"course-list\">\n                    </ul>\n               </div>\n\n               <div class=\"mobile-nav-overlay\" id=\"mobile-nav-overlay\">\n                    <div class=\"close-btn\" id=\"close-mobile-nav\">&times;</div>\n                    <ul class=\"mobile-nav-page\">\n                         <li><a href=\"/\">Home</a></li>\n                         <li><a href=\"../about-us.html\">About Us</a></li>\n                         <!-- <li><a href=\"../course.html\" id=\"mobile-courses-link\">Courses ▼</a></li> -->\n                         <li><a href=\"../placement.html\">Our Placements</a></li>\n                         <li><a href=\"../contact-us.html\">Contact Us</a></li>\n                    </ul>\n                    <div class=\"mobile-nav-button\">\n                         <a href=\"./scholarship.html\" target=\"_blank\">\n                              <button>Scholarship</button>\n                         </a>\n                    </div>\n               </div>\n     </div>\n     <script src=\"../script.js\">" }} />
        </>
      }
    >
      <div className="container">
        {"\n          "}
        {"\n          "}
        <div className="top">
          {"\n               "}
          <h1>
            {"Data Science"}
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
        {"\n          "}
        {"\n          "}
        <div id="englishContent">
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"1. Introduction to Data Science"}
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
              <p>
                {"Data Science is the field where we extract meaningful insights from data using statistics,\n                              algorithms, and tools."}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"Definition & Importance:"}
                  </b>
                  {" Understanding what Data Science is and why it matters.\n                              "}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Applications:"}
                  </b>
                  {" Uses in healthcare, finance, e-commerce, and social media."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Data vs Information:"}
                  </b>
                  {" Difference between raw data and actionable insights."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Career Paths:"}
                  </b>
                  {" Roles like Data Analyst, Data Engineer, and Data Scientist."}
                </li>
                {"\n                         "}
              </ul>
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
                {"2. Mathematics for Data Science"}
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
              <p>
                {"Mathematics forms the foundation of Data Science, especially linear algebra, probability,\n                              and statistics."}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"Linear Algebra:"}
                  </b>
                  {" Vectors, matrices, and their operations."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Probability:"}
                  </b>
                  {" Basic probability concepts, random variables, distributions."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Statistics:"}
                  </b>
                  {" Mean, median, variance, standard deviation."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Use in ML Models:"}
                  </b>
                  {" How math supports algorithms like regression and\n                                   classification."}
                </li>
                {"\n                         "}
              </ul>
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
                {"3. Python for Data Science"}
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
              <p>
                {"Python is a simple and powerful programming language widely used in Data Science."}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"Basic Syntax:"}
                  </b>
                  {" Variables, data types, loops, and functions."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Libraries:"}
                  </b>
                  {" Introduction to NumPy and Pandas."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Jupyter Notebook:"}
                  </b>
                  {" Hands-on environment for coding and visualization."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Advantages of Python:"}
                  </b>
                  {" Community support, versatility, and ease of learning.\n                              "}
                </li>
                {"\n                         "}
              </ul>
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
                {"4. Data Collection & Sources"}
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
              <p>
                {"Data can come from multiple sources such as databases, APIs, sensors, and user-generated\n                              content."}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"Structured Data:"}
                  </b>
                  {" Data stored in tables or columns."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Unstructured Data:"}
                  </b>
                  {" Text, images, videos, social media posts."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"APIs & Web Scraping:"}
                  </b>
                  {" Collecting data programmatically from the internet."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Data Reliability:"}
                  </b>
                  {" Importance of clean and trustworthy sources."}
                </li>
                {"\n                         "}
              </ul>
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
                {"5. Data Cleaning & Preprocessing"}
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
              <p>
                {"Preparing raw data for analysis by handling missing or inconsistent values."}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"Missing Values:"}
                  </b>
                  {" Techniques like mean/median imputation or deletion."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Removing Duplicates:"}
                  </b>
                  {" Ensuring no repeated records."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Outlier Treatment:"}
                  </b>
                  {" Identifying and handling abnormal values."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Feature Scaling & Encoding:"}
                  </b>
                  {" Normalization and converting text into numbers.\n                              "}
                </li>
                {"\n                         "}
              </ul>
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
                {"6. Exploratory Data Analysis (EDA)"}
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
              <p>
                {"EDA helps in understanding data patterns, trends, and relationships before building models.\n                         "}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"Descriptive Statistics:"}
                  </b>
                  {" Mean, median, mode, and correlations."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Visualization:"}
                  </b>
                  {" Scatter plots, bar graphs, histograms."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Trend Analysis:"}
                  </b>
                  {" Identifying patterns in time-series data."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Data Distribution:"}
                  </b>
                  {" Checking skewness and normality of data."}
                </li>
                {"\n                         "}
              </ul>
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
                {"7. Data Visualization Tools"}
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
              <p>
                {"Visualization helps to present insights in an understandable and appealing way."}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"Charts & Graphs:"}
                  </b>
                  {" Bar charts, pie charts, histograms."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Heatmaps:"}
                  </b>
                  {" Showing correlations between variables."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Libraries:"}
                  </b>
                  {" Matplotlib and Seaborn in Python."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Storytelling with Data:"}
                  </b>
                  {" Turning visuals into meaningful narratives."}
                </li>
                {"\n                         "}
              </ul>
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
                {"8. Database & SQL Basics"}
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
              <p>
                {"SQL is used to store, manage, and retrieve structured data efficiently."}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"Basic Queries:"}
                  </b>
                  {" SELECT, WHERE, ORDER BY."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Aggregations:"}
                  </b>
                  {" COUNT, SUM, AVG, MIN, MAX."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Joins:"}
                  </b>
                  {" Combining multiple tables (INNER JOIN, LEFT JOIN)."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Integration with Python:"}
                  </b>
                  {" Using SQL data in Data Science workflows."}
                </li>
                {"\n                         "}
              </ul>
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
                {"9. Introduction to Machine Learning"}
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
              <p>
                {"Machine Learning allows computers to learn patterns from data and make predictions."}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"Definition:"}
                  </b>
                  {" Difference between traditional programming and ML."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Types of ML:"}
                  </b>
                  {" Supervised, Unsupervised, and Reinforcement Learning."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Real-Life Applications:"}
                  </b>
                  {" Spam filters, recommendation systems, fraud detection.\n                              "}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Importance in Data Science:"}
                  </b>
                  {" Automating predictions and decision-making."}
                </li>
                {"\n                         "}
              </ul>
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
                {"10. Regression & Classification Basics"}
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
              <p>
                {"Two key supervised learning techniques used for predictions."}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"Linear Regression:"}
                  </b>
                  {" Predicting continuous values like house prices."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Logistic Regression:"}
                  </b>
                  {" Binary classification like spam or not spam."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Decision Trees:"}
                  </b>
                  {" Tree-like models for classification tasks."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Use Cases:"}
                  </b>
                  {" Sales forecasting, medical diagnosis, sentiment analysis."}
                </li>
                {"\n                         "}
              </ul>
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
                {"11. Clustering & Dimensionality Reduction"}
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
              <p>
                {"Techniques for grouping data and simplifying datasets."}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"K-Means Clustering:"}
                  </b>
                  {" Grouping data into clusters without labels."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Hierarchical Clustering:"}
                  </b>
                  {" Building a tree of clusters."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Dimensionality Reduction:"}
                  </b>
                  {" Simplifying data while keeping key features."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"PCA (Principal Component Analysis):"}
                  </b>
                  {" Reducing dimensions for efficiency."}
                </li>
                {"\n                         "}
              </ul>
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
                {"12. Model Evaluation & Performance Metrics"}
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
              <p>
                {"Evaluating model accuracy to ensure reliable predictions."}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"Accuracy & Error Rate:"}
                  </b>
                  {" How well the model predicts correctly."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Precision & Recall:"}
                  </b>
                  {" Handling imbalanced datasets."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"F1-Score:"}
                  </b>
                  {" Balancing precision and recall."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Confusion Matrix:"}
                  </b>
                  {" Visual representation of model performance."}
                </li>
                {"\n                         "}
              </ul>
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
                {"13. Case Studies & Mini Projects"}
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
              <p>
                {"Applying knowledge to solve real-world problems."}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"Student Performance Prediction:"}
                  </b>
                  {" Using demographic and study data."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Sales Data Analysis:"}
                  </b>
                  {" Identifying trends and forecasting sales."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Customer Segmentation:"}
                  </b>
                  {" Grouping customers for marketing strategies."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Social Media Data:"}
                  </b>
                  {" Sentiment analysis on tweets or posts."}
                </li>
                {"\n                         "}
              </ul>
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
                {"14. Time Series Analysis"}
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
              <p>
                {"Analyzing data patterns and trends over time."}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"Trend & Seasonality:"}
                  </b>
                  {" Identifying patterns based on time."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Moving Average:"}
                  </b>
                  {" Smoothing data for short-term trend analysis."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Forecasting:"}
                  </b>
                  {" Building models for future predictions."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"ARIMA Model:"}
                  </b>
                  {" Predictive model for time-series data."}
                </li>
                {"\n                         "}
              </ul>
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
                {"15. Ethics & Security in Data Science"}
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
              <p>
                {"Responsible use of data and ensuring privacy and security."}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"Data Privacy:"}
                  </b>
                  {" Protecting user information."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Bias & Fairness:"}
                  </b>
                  {" Avoiding bias in data and models."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Data Security:"}
                  </b>
                  {" Protecting data from unauthorized access."}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Ethical Use:"}
                  </b>
                  {" Using data ethically and legally."}
                </li>
                {"\n                         "}
              </ul>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n          "}
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
                {"1. डेटा साइंस का परिचय"}
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
              <p>
                {"डेटा साइंस वह क्षेत्र है जहाँ हम डेटा से महत्वपूर्ण जानकारी निकालते हैं। यह सांख्यिकी,\n                              एल्गोरिदम और टूल्स का उपयोग करता है।"}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"परिभाषा और महत्व:"}
                  </b>
                  {" डेटा साइंस क्या है और क्यों जरूरी है।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"प्रयोग:"}
                  </b>
                  {" हेल्थकेयर, फाइनेंस, ई-कॉमर्स और सोशल मीडिया में उपयोग।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"डेटा बनाम जानकारी:"}
                  </b>
                  {" कच्चे डेटा और उपयोगी इनसाइट्स में अंतर।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"करियर पथ:"}
                  </b>
                  {" डेटा एनालिस्ट, डेटा इंजीनियर और डेटा साइंटिस्ट की भूमिकाएँ।"}
                </li>
                {"\n                         "}
              </ul>
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
                {"2. डेटा साइंस के लिए गणित"}
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
              <p>
                {"गणित डेटा साइंस का आधार है, खासकर रेखीय बीजगणित, प्रायिकता और सांख्यिकी।"}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"रेखीय बीजगणित:"}
                  </b>
                  {" वेक्टर, मैट्रिक्स और उनके ऑपरेशन।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"प्रायिकता:"}
                  </b>
                  {" बेसिक कॉन्सेप्ट्स, रैंडम वैरिएबल, वितरण।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"सांख्यिकी:"}
                  </b>
                  {" माध्य, माध्यम, विचलन और मानक विचलन।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"एमएल में उपयोग:"}
                  </b>
                  {" कैसे गणित रिग्रेशन और क्लासिफिकेशन में काम आता है।"}
                </li>
                {"\n                         "}
              </ul>
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
                {"3. डेटा साइंस के लिए पायथन"}
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
              <p>
                {"Python सरल और पावरफुल भाषा है, जो डेटा साइंस में सबसे ज्यादा उपयोग होती है।"}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"बेसिक सिंटैक्स:"}
                  </b>
                  {" वेरिएबल, डेटा टाइप्स, लूप और फंक्शन्स।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"लाइब्रेरी:"}
                  </b>
                  {" NumPy और Pandas का परिचय।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Jupyter Notebook:"}
                  </b>
                  {" कोडिंग और विज़ुअलाइजेशन के लिए हैंड्स-ऑन एनवायरनमेंट।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Python के फायदे:"}
                  </b>
                  {" कम्युनिटी सपोर्ट, वर्सटाइल, और सीखने में आसान।"}
                </li>
                {"\n                         "}
              </ul>
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
                {"4. डेटा संग्रहण और स्रोत"}
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
              <p>
                {"डेटा विभिन्न स्रोतों से आता है जैसे डेटाबेस, APIs, सेंसर्स और यूजर-जनरेटेड कंटेंट।"}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"स्ट्रक्चर्ड डेटा:"}
                  </b>
                  {" टेबल या कॉलम में संग्रहित डेटा।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"अनस्ट्रक्चर्ड डेटा:"}
                  </b>
                  {" टेक्स्ट, इमेज, वीडियो और सोशल मीडिया पोस्ट।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"APIs और वेब स्क्रैपिंग:"}
                  </b>
                  {" इंटरनेट से प्रोग्रामेटिक डेटा कलेक्शन।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"डेटा विश्वसनीयता:"}
                  </b>
                  {" क्लीन और भरोसेमंद स्रोत का महत्व।"}
                </li>
                {"\n                         "}
              </ul>
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
                {"5. डेटा क्लीनिंग और प्री-प्रोसेसिंग"}
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
              <p>
                {"कच्चे डेटा को एनालिसिस के लिए तैयार करना, मिसिंग या गलत वैल्यूज को हैंडल करना।"}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"मिसिंग वैल्यूज:"}
                  </b>
                  {" मी/मीडियन इम्प्यूटेशन और डिलीशन।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"डुप्लीकेट हटाना:"}
                  </b>
                  {" दोहराए गए रिकॉर्ड्स को रिमूव करना।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"आउटलायर ट्रीटमेंट:"}
                  </b>
                  {" असामान्य वैल्यूज की पहचान और सुधार।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"फीचर स्केलिंग और एनकोडिंग:"}
                  </b>
                  {" नॉर्मलाइजेशन और टेक्स्ट को नंबर में बदलना।"}
                </li>
                {"\n                         "}
              </ul>
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
                {"6. एक्सप्लोरेटरी डेटा एनालिसिस (EDA)"}
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
              <p>
                {"EDA डेटा में पैटर्न, ट्रेंड और रिलेशनशिप को समझने में मदद करता है।"}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"डिस्क्रिप्टिव स्टैटिस्टिक्स:"}
                  </b>
                  {" माध्य, माध्यम, मोड, और कोरिलेशन।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"विज़ुअलाइजेशन:"}
                  </b>
                  {" स्कैटर प्लॉट, बार ग्राफ, हिस्टोग्राम।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"ट्रेंड एनालिसिस:"}
                  </b>
                  {" टाइम-सीरीज़ डेटा में पैटर्न पहचानना।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"डेटा डिस्ट्रीब्यूशन:"}
                  </b>
                  {" स्क्यूनेस और नॉर्मैलिटी चेक करना।"}
                </li>
                {"\n                         "}
              </ul>
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
                {"7. डेटा विज़ुअलाइजेशन टूल्स"}
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
              <p>
                {"डेटा विज़ुअलाइजेशन से इनसाइट्स को आसानी से समझा और प्रस्तुत किया जा सकता है।"}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"चार्ट और ग्राफ:"}
                  </b>
                  {" बार चार्ट, पाई चार्ट, हिस्टोग्राम।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"हीटमैप:"}
                  </b>
                  {" वेरिएबल्स के बीच कोरिलेशन दिखाना।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"लाइब्रेरी:"}
                  </b>
                  {" Python में Matplotlib और Seaborn।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"डेटा स्टोरीटेलिंग:"}
                  </b>
                  {" विज़ुअल्स को अर्थपूर्ण कहानी में बदलना।"}
                </li>
                {"\n                         "}
              </ul>
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
                {"8. डेटाबेस और SQL बेसिक्स"}
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
              <p>
                {"SQL का उपयोग स्ट्रक्चर्ड डेटा को स्टोर, मैनेज और रिट्रीव करने के लिए किया जाता है।"}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"बेसिक क्वेरीज:"}
                  </b>
                  {" SELECT, WHERE, ORDER BY।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"एग्रीगेशन:"}
                  </b>
                  {" COUNT, SUM, AVG, MIN, MAX।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"जॉइन्स:"}
                  </b>
                  {" मल्टीपल टेबल्स को जोड़ना (INNER JOIN, LEFT JOIN)।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Python के साथ इंटिग्रेशन:"}
                  </b>
                  {" SQL डेटा को Data Science वर्कफ़्लो में इस्तेमाल करना।\n                              "}
                </li>
                {"\n                         "}
              </ul>
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
                {"9. मशीन लर्निंग का परिचय"}
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
              <p>
                {"मशीन लर्निंग कंप्यूटर को डेटा से पैटर्न सीखने और भविष्यवाणी करने की क्षमता देता है।"}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"परिभाषा:"}
                  </b>
                  {" ट्रेडिशनल प्रोग्रामिंग और ML में अंतर।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"ML के प्रकार:"}
                  </b>
                  {" Supervised, Unsupervised और Reinforcement Learning।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"रियल-लाइफ एप्लीकेशंस:"}
                  </b>
                  {" स्पैम फिल्टर, रीकमेंडेशन सिस्टम, फ्रॉड डिटेक्शन।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"डेटा साइंस में महत्व:"}
                  </b>
                  {" Predictions और Decision-Making को ऑटोमेट करना।"}
                </li>
                {"\n                         "}
              </ul>
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
                {"10. रिग्रेशन और क्लासिफिकेशन बेसिक्स"}
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
              <p>
                {"ये दो मुख्य Supervised Learning तकनीकें हैं, जिनका उपयोग भविष्यवाणियों के लिए होता है।"}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"लिनियर रिग्रेशन:"}
                  </b>
                  {" लगातार मान (Continuous values) की भविष्यवाणी।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"लॉजिस्टिक रिग्रेशन:"}
                  </b>
                  {" बाइनरी क्लासिफिकेशन (जैसे स्पैम या नॉन-स्पैम)।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"डिसीजन ट्री:"}
                  </b>
                  {" ट्री जैसी संरचना वाली क्लासिफिकेशन मॉडल।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"यूज केस:"}
                  </b>
                  {" सेल्स फोरकास्टिंग, मेडिकल डायग्नोसिस, सेंटिमेंट एनालिसिस।"}
                </li>
                {"\n                         "}
              </ul>
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
                {"11. क्लस्टरिंग और डाइमेंशनलिटी रिडक्शन"}
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
              <p>
                {"डेटा को ग्रुप करने और datasets को सरल बनाने की तकनीकें।"}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"K-Means क्लस्टरिंग:"}
                  </b>
                  {" बिना लेबल्स के डेटा को क्लस्टर्स में ग्रुप करना।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"हायरार्किकल क्लस्टरिंग:"}
                  </b>
                  {" क्लस्टर्स का ट्री बनाना।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"डाइमेंशनलिटी रिडक्शन:"}
                  </b>
                  {" महत्वपूर्ण फीचर्स को बनाए रखते हुए डेटा को सरल बनाना।\n                              "}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"PCA (Principal Component Analysis):"}
                  </b>
                  {" डेटा के डायमेंशन्स को रिड्यूस करना।"}
                </li>
                {"\n                         "}
              </ul>
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
                {"12. मॉडल इवैल्युएशन और परफॉर्मेंस मेट्रिक्स"}
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
              <p>
                {"मॉडल की सटीकता का मूल्यांकन करना ताकि भरोसेमंद भविष्यवाणियाँ सुनिश्चित की जा सकें।"}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"Accuracy और Error Rate:"}
                  </b>
                  {" मॉडल कितनी सही भविष्यवाणी करता है।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Precision और Recall:"}
                  </b>
                  {" इम्बैलेंस्ड datasets में प्रदर्शन।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"F1-Score:"}
                  </b>
                  {" Precision और Recall का बैलेंस।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"Confusion Matrix:"}
                  </b>
                  {" मॉडल परफॉर्मेंस का विज़ुअल रिप्रेजेंटेशन।"}
                </li>
                {"\n                         "}
              </ul>
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
                {"13. केस स्टडीज और मिनी प्रोजेक्ट्स"}
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
              <p>
                {"रीयल-वर्ल्ड समस्याओं को हल करने के लिए ज्ञान का अनुप्रयोग।"}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"स्टूडेंट परफॉर्मेंस प्रिडिक्शन:"}
                  </b>
                  {" डेमोग्राफिक और स्टडी डेटा का उपयोग।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"सेल्स डेटा एनालिसिस:"}
                  </b>
                  {" ट्रेंड्स पहचानना और सेल्स फोरकास्टिंग।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"कस्टमर सेगमेंटेशन:"}
                  </b>
                  {" मार्केटिंग स्ट्रेटेजी के लिए ग्राहकों का समूह।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"सोशल मीडिया डेटा:"}
                  </b>
                  {" ट्वीट्स या पोस्ट पर सेंटिमेंट एनालिसिस।"}
                </li>
                {"\n                         "}
              </ul>
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
                {"14. टाइम सीरीज़ एनालिसिस"}
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
              <p>
                {"समय के साथ डेटा में पैटर्न और ट्रेंड को पहचानना।"}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"ट्रेंड और सीज़नैलिटी:"}
                  </b>
                  {" समय के आधार पर डेटा पैटर्न।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"मोविंग एवरेज:"}
                  </b>
                  {" स्मूथिंग और शॉर्ट-टर्म ट्रेंड पहचानना।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"फोरकास्टिंग:"}
                  </b>
                  {" भविष्यवाणी के लिए मॉडल बनाना।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"ARIMA मॉडल:"}
                  </b>
                  {" टाइम सीरीज़ डेटा के लिए प्रेडिक्टिव मॉडल।"}
                </li>
                {"\n                         "}
              </ul>
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
                {"15. डेटा साइंस में एथिक्स और सुरक्षा"}
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
              <p>
                {"डेटा का जिम्मेदारी से उपयोग और प्राइवेसी का ध्यान रखना।"}
              </p>
              {"\n                         "}
              <ul className="points">
                {"\n                              "}
                <li>
                  <b>
                    {"डेटा प्राइवेसी:"}
                  </b>
                  {" यूज़र की जानकारी सुरक्षित रखना।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"बायस और फेयरनेस:"}
                  </b>
                  {" डेटा और मॉडल में पक्षपात से बचना।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"डेटा सिक्योरिटी:"}
                  </b>
                  {" अनधिकृत एक्सेस से सुरक्षा।"}
                </li>
                {"\n                              "}
                <li>
                  <b>
                    {"एथिकल यूज़:"}
                  </b>
                  {" डेटा का नैतिक और कानूनी उपयोग।"}
                </li>
                {"\n                         "}
              </ul>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n\n          "}
        </div>
        {"\n          "}
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
