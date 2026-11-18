import PageFrame from "@/runtime/PageFrame.jsx";
import { Link } from "react-router-dom";

// Converted from test/javascript.html
const styles = [{ href: "/header-footer.css" }, { href: "/test/main.css" }];
const scripts = [{ src: "/script.js", names: {"fn":["showCourseList"],"vars":[],"lex":["faqs","cards","observer"],"consts":["faqs","cards","observer"]} }, { src: "/test/main.js", names: {"fn":["ELanguage","HLanguage","toggleSection"],"vars":["english","hindi"],"lex":[],"consts":[]} }];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>Javascript Course in Indore | Code of School</title>
          <meta name="description" content="Learn Java programming from basics to advanced. Master OOP, collections, multithreading, and build enterprise-level applications." />
          <link rel="canonical" href="https://codeofschool.com/courses/java" />
          <meta name="keywords" content="Java course Indore, Java training Indore, Core Java Indore, Advanced Java Indore" />
          <meta property="og:title" content={"Java Core & Advanced Course in Indore | Code of School"} />
          <meta property="og:description" content="Master Java and prepare for software development and enterprise projects." />
          <meta property="og:url" content="https://codeofschool.com/courses/java" />
          <meta property="og:image" content="https://codeofschool.com/img/cos-white-logo.webp" />
          <meta name="twitter:title" content={"Java Core & Advanced Course | Code of School"} />
          <meta name="twitter:description" content="Hands-on Java training with projects and placement support." />
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
            {"Javascript"}
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
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"1. Introduction to JavaScript"}
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
                  {"JavaScript is a lightweight, interpreted programming language. It is one of the core\n                                   technologies of the World Wide Web, alongside HTML and CSS. It helps to make web\n                                   pages\n                                   interactive by handling events, validating forms, creating animations, and\n                                   dynamically\n                                   updating content. JavaScript runs inside the browser, but it can also run on servers\n                                   using\n                                   Node.js.\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"console.log('Hello World!');\n       "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Hello World!"}
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
            {"\n\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"2. Variables (var, let, const)"}
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
                  {"Variables are containers for storing data values. In JavaScript, variables can be\n                                   declared\n                                   in\n                                   three ways: 1. var (function scoped, older way), 2. let (block scoped, modern way),\n                                   3.\n                                   const\n                                   (for constants which cannot be reassigned). Using meaningful variable names improves\n                                   code\n                                   readability."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"var city = 'Delhi';\nlet age = 22;\nconst country = 'India';\nconsole.log(city);\nconsole.log(age);\nconsole.log(country);\n"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Delhi"}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"22"}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"India"}
                  </p>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n\n               "}
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
                  {"JavaScript supports various data types such as: 1. String - text values 2. Number -\n                                   numeric\n                                   values 3. Boolean - true/false 4. Object - collection of key-value pairs 5. Array -\n                                   list\n                                   of\n                                   values 6. Null - empty value 7. Undefined - not assigned. Data types help in\n                                   organizing\n                                   and\n                                   working with values correctly."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"let name = 'Avinash';\nlet age = 25;\nlet isStudent = true;\nlet car = null;\nlet marks;\nconsole.log(typeof name);\nconsole.log(typeof age);\nconsole.log(typeof isStudent);\nconsole.log(car);\nconsole.log(marks);\n"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"string"}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"number"}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"boolean"}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"null"}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"undefined"}
                  </p>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"4. Operators"}
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
                  {"Operators are special symbols that perform operations on values and variables. Common\n                                   operators include: - Arithmetic (+, -, *, /, %) - Assignment (=, +=, -=) - Comparison\n                                   (==,\n                                   ===, >, <) - Logical (&&, ||, !) Operators allow us to build expressions."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"let a = 10, b = 3;\nconsole.log(a + b);\nconsole.log(a - b);\nconsole.log(a * b);\nconsole.log(a / b);\nconsole.log(a % b);\nconsole.log(a > b);\nconsole.log(a == 10 && b == 3);\n"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"13"}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"7"}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"30"}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"3.333..."}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"1"}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"true"}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"true"}
                  </p>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"5. Functions"}
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
                  {"Functions are reusable blocks of code designed to perform a specific task. Functions\n                                   can\n                                   accept inputs (parameters) and return outputs. They help to avoid code repetition and\n                                   improve maintainability."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"function add(a, b){\nreturn a + b;\n}\nlet result = add(5, 7);\nconsole.log(result);\n"}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"12"}
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
                {"6. Conditional Statements (if, else, switch)"}
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
                  {"\n                                   Conditional statements in JavaScript are used to control the flow of a program. This\n                                   means the code will only run if the condition is true. The most common statement is\n                                   "}
                  <code>
                    {"if"}
                  </code>
                  {", which checks a condition and runs its block if true.\n                                   If the condition is false, it is skipped. The "}
                  <code>
                    {"else"}
                  </code>
                  {" block runs when the\n                                   condition is false.\n                                   We can also check multiple conditions using "}
                  <code>
                    {"else if"}
                  </code>
                  {". The\n                                   "}
                  <code>
                    {"switch"}
                  </code>
                  {" statement is useful when comparing multiple values against a\n                                   single variable.\n                                   These statements are very useful in real-world programs, such as creating login\n                                   systems, showing error messages, or navigation based on user roles.\n                                   Without them, decision-making is not possible.\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"let marks = 75;\nif(marks >= 80){\n  console.log(\"Grade A\");\n} else if(marks >= 60){\n  console.log(\"Grade B\");\n} else {\n  console.log(\"Grade C\");\n}\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Grade B"}
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
                {"7. Loops (for, while, do...while)"}
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
                  {"\n                                   Loops in JavaScript are used to run the same code multiple times without rewriting\n                                   it.\n                                   The "}
                  <code>
                    {"for"}
                  </code>
                  {" loop is used when we know how many times the loop should run. It\n                                   runs with initialization, condition, and increment.\n                                   The "}
                  <code>
                    {"while"}
                  </code>
                  {" loop continues to run as long as the condition is true, which\n                                   is useful when the number of iterations is not fixed.\n                                   The "}
                  <code>
                    {"do...while"}
                  </code>
                  {" loop is similar to the while loop, but it runs the code\n                                   at least once, regardless of the condition.\n                                   Loops are important in real-life programming, such as printing numbers from 1 to 100,\n                                   processing array elements, or creating animations.\n                                   They make repetitive tasks easy and fast.\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"for(let i=1; i<=5; i++){\n  console.log(\"Number:\", i);\n}\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Number: 1"}
                    <br />
                    {"\n                                        Number: 2"}
                    <br />
                    {"\n                                        Number: 3"}
                    <br />
                    {"\n                                        Number: 4"}
                    <br />
                    {"\n                                        Number: 5\n                                   "}
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
                {"8. Arrays"}
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
                  {"\n                                   An array in JavaScript is a special object that can store multiple values in a single\n                                   variable.\n                                   Arrays are useful when handling lists like names, marks, or fruits. Each element in\n                                   an array has an index number starting from 0.\n                                   We can access or modify elements using this index. JavaScript arrays have many\n                                   built-in methods such as "}
                  <code>
                    {".push()"}
                  </code>
                  {" (add an element), "}
                  <code>
                    {".pop()"}
                  </code>
                  {"\n                                   (remove last element), "}
                  <code>
                    {".shift()"}
                  </code>
                  {" (remove first element), and\n                                   "}
                  <code>
                    {".unshift()"}
                  </code>
                  {" (add element at the start).\n                                   Arrays are widely used in real-life applications like product lists in e-commerce or\n                                   user posts in social media.\n                                   They are a flexible and dynamic data structure and an important part of JavaScript.\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"let fruits = [\"Apple\", \"Banana\", \"Mango\"];\nconsole.log(fruits[0]);\nconsole.log(fruits.length);\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Apple"}
                    <br />
                    {"\n                                        3\n                                   "}
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
                {"9. Objects"}
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
                  {"\n                                   Objects in JavaScript are an important data structure that store data in key-value\n                                   pairs.\n                                   In arrays, elements are stored using indices, but in objects, keys describe the\n                                   values directly.\n                                   Objects are powerful when representing real-world entities like a person, car, or\n                                   product.\n                                   For example, a person object can store name, age, and city.\n                                   Values can be accessed using dot notation ("}
                  <code>
                    {"object.key"}
                  </code>
                  {") or bracket\n                                   notation ("}
                  <code>
                    {"object[\"key\"]"}
                  </code>
                  {").\n                                   Objects are useful in JavaScript for creating APIs, managing settings, and storing\n                                   structured information.\n                                   They help represent and manipulate complex data.\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"let person = {\n  name: \"Avinash\",\n  age: 25,\n  city: \"Delhi\"\n};\nconsole.log(person.name);\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Avinash"}
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
                {"10. Functions with Parameters & Return"}
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
                  {"\n                                   Functions are reusable blocks of code that make programs modular and simple.\n                                   Using parameters and return values makes functions even more powerful. Parameters\n                                   provide input to the function, and the "}
                  <code>
                    {"return"}
                  </code>
                  {" statement can send a value\n                                   back.\n                                   This makes the code flexible and reduces repetition. For example, a multiplication\n                                   function can take two parameters and return their product.\n                                   In real-world programming, functions are used for calculations, form validation, and\n                                   data processing.\n                                   They make programs more reusable and maintainable.\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"function multiply(x, y){\n  return x * y;\n}\nconsole.log(multiply(4, 6));\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"24"}
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
                {"11. String Methods"}
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
                  {"\n                                   JavaScript provides many built-in methods for strings that help in manipulating text.\n                                   For example, "}
                  <code>
                    {"length"}
                  </code>
                  {" gives the size of the string,\n                                   "}
                  <code>
                    {"toUpperCase()"}
                  </code>
                  {" and "}
                  <code>
                    {"toLowerCase()"}
                  </code>
                  {" convert the case,\n                                   "}
                  <code>
                    {"slice()"}
                  </code>
                  {" extracts a substring, and "}
                  <code>
                    {"replace()"}
                  </code>
                  {" is used to\n                                   replace text.\n                                   String methods are very useful in real-world programming for input validation,\n                                   formatting, and displaying data.\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"let text = \"Hello World\";\nconsole.log(text.length);\nconsole.log(text.toUpperCase());\nconsole.log(text.slice(0,5));\nconsole.log(text.replace(\"World\",\"JavaScript\"));\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"11"}
                    <br />
                    {"\n                                        HELLO WORLD"}
                    <br />
                    {"\n                                        Hello"}
                    <br />
                    {"\n                                        Hello JavaScript"}
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
                {"12. Date & Time"}
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
                  {"\n                                   The "}
                  <code>
                    {"Date"}
                  </code>
                  {" object in JavaScript is used to handle the current date and\n                                   time.\n                                   We can retrieve the current day, month, year, hours, minutes, and seconds.\n                                   This feature is important in real-world applications for timers, event scheduling,\n                                   and logging.\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"let now = new Date();\nconsole.log(now);\nconsole.log(\"Year:\", now.getFullYear());\nconsole.log(\"Month:\", now.getMonth() + 1);\nconsole.log(\"Date:\", now.getDate());\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        "}
                    {"\n                                        Wed Sep 12 2025 10:00:00 GMT+0530 (India Standard Time)"}
                    <br />
                    {"\n                                        Year: 2025"}
                    <br />
                    {"\n                                        Month: 9"}
                    <br />
                    {"\n                                        Date: 12\n                                   "}
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
                {"13. DOM Manipulation"}
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
                  {"\n                                   DOM (Document Object Model) in JavaScript is used to manipulate HTML elements.\n                                   We can select elements, change their content, create new elements, and remove\n                                   existing ones.\n                                   This is essential for making web pages interactive and dynamic.\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"document.body.innerHTML += \"<p>Hello DOM!</p>\";\nlet heading = document.createElement(\"h2\");\nheading.innerText = \"New Heading\";\ndocument.body.appendChild(heading);\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Hello DOM!"}
                    <br />
                    {"\n                                        New Heading\n                                   "}
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
                {"14. Event Handling"}
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
                  {"\n                                   Events in JavaScript are used to detect and handle user actions such as clicks, mouse\n                                   movements, and keyboard inputs.\n                                   We can define functions for specific events using "}
                  <code>
                    {"addEventListener()"}
                  </code>
                  {".\n                                   This is very important in creating interactive web applications.\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"let button = document.createElement(\"button\");\nbutton.innerText = \"Click Me\";\ndocument.body.appendChild(button);\nbutton.addEventListener(\"click\", function(){\n  alert(\"Button Clicked!\");\n});\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Button Clicked! (alert appears on clicking the button)\n                                   "}
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
                {"15. Local Storage"}
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
                  {"\n                                   Local Storage in JavaScript is used to store data permanently in the browser.\n                                   The data remains available even after the page is reloaded or the browser is closed.\n                                   Local Storage stores data as key-value pairs and is useful for small settings,\n                                   preferences, and temporary data.\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"localStorage.setItem(\"username\", \"Avinash\");\nconsole.log(localStorage.getItem(\"username\"));\nlocalStorage.removeItem(\"username\");\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Avinash\n                                   "}
                  </p>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n\n\n\n\n\n\n\n          "}
        </div>
        {"\n          "}
        <div id="hindiContent" className="hidden">
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"1. JavaScript का परिचय"}
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
                  {"JavaScript एक हल्का और interpreted प्रोग्रामिंग भाषा है। यह World Wide Web की मुख्य\n                                   तकनीकों में से एक है, HTML और CSS के साथ। यह वेब पेज को interactive बनाता है जैसे\n                                   events handle करना, forms validate करना, animations बनाना और dynamically content\n                                   update करना। JavaScript browser में चलता है, लेकिन Node.js का उपयोग करके यह server पर\n                                   भी चल सकता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"console.log('Hello World!');\n                   "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Hello World!"}
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
                {"2. Variables (var, let, const)"}
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
                  {"Variables डेटा को store करने के लिए containers होते हैं। JavaScript में variables\n                                   declare करने के तीन तरीके हैं: 1. var (function scoped, पुराना तरीका), 2. let (block\n                                   scoped, आधुनिक तरीका), 3. const (constants के लिए जिन्हें reassign नहीं किया जा\n                                   सकता)। Meaningful variable names को use करने से code पढ़ने में आसान होता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"var city = 'Delhi';\nlet age = 22;\nconst country = 'India';\nconsole.log(city);\nconsole.log(age);\nconsole.log(country);\n                   "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Delhi"}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"22"}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"India"}
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
                  {"JavaScript विभिन्न डेटा प्रकारों का समर्थन करता है जैसे: 1. String - टेक्स्ट मान, 2.\n                                   Number - संख्यात्मक मान, 3. Boolean - true/false, 4. Object - key-value pairs का\n                                   संग्रह, 5. Array - मानों की सूची, 6. Null - खाली मान, 7. Undefined - असाइन नहीं किया\n                                   गया। डेटा प्रकार values को सही तरीके से organize और manipulate करने में मदद करते हैं।\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"let name = 'Avinash';\nlet age = 25;\nlet isStudent = true;\nlet car = null;\nlet marks;\nconsole.log(typeof name);\nconsole.log(typeof age);\nconsole.log(typeof isStudent);\nconsole.log(car);\nconsole.log(marks);\n                   "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"string"}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"number"}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"boolean"}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"null"}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"undefined"}
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
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"4. Operators"}
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
                  {"Operators विशेष प्रतीक होते हैं जो values और variables पर operations perform करते हैं।\n                                   सामान्य operators में शामिल हैं: Arithmetic (+, -, *, /, %), Assignment (=, +=, -=),\n                                   Comparison (==, ===, >, <), Logical (&&, ||, !)। Operators का उपयोग expressions बनाने\n                                        के लिए किया जाता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"let a = 10, b = 3;\nconsole.log(a + b);\nconsole.log(a - b);\nconsole.log(a * b);\nconsole.log(a / b);\nconsole.log(a % b);\nconsole.log(a > b);\nconsole.log(a == 10 && b == 3);\n                   "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"13"}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"7"}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"30"}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"3.333..."}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"1"}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"true"}
                  </p>
                  {"\n                                   "}
                  <p>
                    {"true"}
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
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"5. Functions"}
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
                  {"Functions पुन: उपयोग योग्य कोड के ब्लॉक होते हैं जो किसी विशेष कार्य को पूरा करने के\n                                   लिए बनाए जाते हैं। Functions input (parameters) ले सकते हैं और output return कर सकते\n                                   हैं। ये code repetition को कम करते हैं और maintainability बढ़ाते हैं।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"function add(a, b){\nreturn a + b;\n}\nlet result = add(5, 7);\nconsole.log(result);\n                   "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"12"}
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
                {"6. Conditional Statements (if, else, switch)"}
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
                  {"\n                                   JavaScript में conditional statements का उपयोग प्रोग्राम के flow को control करने के\n                                   लिए किया जाता है। इसका मतलब है कि code सिर्फ तब चलेगा जब condition true होगी। सबसे\n                                   सामान्य statement "}
                  <code>
                    {"if"}
                  </code>
                  {" है, जो condition check करता है और true होने पर उसका\n                                   block run होता है। अगर condition false है तो वो skip हो जाता है। "}
                  <code>
                    {"else"}
                  </code>
                  {"\n                                   block तब run होता है जब condition false हो। हम "}
                  <code>
                    {"else if"}
                  </code>
                  {" के जरिए multiple\n                                   conditions भी check कर सकते हैं। "}
                  <code>
                    {"switch"}
                  </code>
                  {" statement तब उपयोगी है जब एक\n                                   variable की multiple values के साथ comparison करना हो। ये statements login system,\n                                   error messages, और user role-based navigation जैसी situations में काम आते हैं।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"let marks = 75;\nif(marks >= 80){\n  console.log(\"Grade A\");\n} else if(marks >= 60){\n  console.log(\"Grade B\");\n} else {\n  console.log(\"Grade C\");\n}\n                   "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Grade B"}
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
                {"7. Loops (for, while, do...while)"}
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
                  {"\n                                   JavaScript में loops एक ही code को बार-बार चलाने के लिए उपयोग किए जाते हैं बिना उसे\n                                   बार-बार लिखे। "}
                  <code>
                    {"for"}
                  </code>
                  {" loop तब उपयोगी है जब हमें पता हो कि loop कितनी बार\n                                   चलेगा। "}
                  <code>
                    {"while"}
                  </code>
                  {" loop तब तक चलता है जब तक condition true हो।\n                                   "}
                  <code>
                    {"do...while"}
                  </code>
                  {" loop कम से कम एक बार code execute करता है, चाहे condition\n                                   false हो। Loops repetitive tasks जैसे numbers print करना, array के elements process\n                                   करना, और animations बनाने में मदद करते हैं।\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"for(let i=1; i<=5; i++){\n  console.log(\"Number:\", i);\n}\n                   "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Number: 1"}
                    <br />
                    {"\n                                        Number: 2"}
                    <br />
                    {"\n                                        Number: 3"}
                    <br />
                    {"\n                                        Number: 4"}
                    <br />
                    {"\n                                        Number: 5\n                                   "}
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
                {"8. Arrays"}
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
                  {"\n                                   JavaScript में array एक special object है जिसमें एक ही variable के अंदर multiple\n                                   values store की जा सकती हैं। Arrays list handle करने के लिए useful हैं, जैसे names,\n                                   marks, या fruits। Array elements का index 0 से शुरू होता है। Arrays के built-in\n                                   methods हैं: "}
                  <code>
                    {".push()"}
                  </code>
                  {" (element add करना), "}
                  <code>
                    {".pop()"}
                  </code>
                  {" (last\n                                   element हटाना), "}
                  <code>
                    {".shift()"}
                  </code>
                  {" (first element हटाना), और\n                                   "}
                  <code>
                    {".unshift()"}
                  </code>
                  {" (start में element add करना)। Arrays dynamic data structure\n                                   हैं और real-world applications जैसे products list या user posts में इस्तेमाल होते\n                                   हैं।\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"let fruits = [\"Apple\", \"Banana\", \"Mango\"];\nconsole.log(fruits[0]);\nconsole.log(fruits.length);\n                   "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Apple"}
                    <br />
                    {"\n                                        3\n                                   "}
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
                {"9. Objects"}
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
                  {"\n                                   JavaScript में objects एक महत्वपूर्ण data structure हैं जो key-value pairs के रूप में\n                                   data store करते हैं। Arrays index के जरिए store होते हैं, लेकिन objects में keys\n                                   values को describe करती हैं। Objects का उपयोग real-world entities जैसे person, car,\n                                   या product को represent करने के लिए होता है। Dot notation ("}
                  <code>
                    {"object.key"}
                  </code>
                  {")\n                                   या bracket notation ("}
                  <code>
                    {"object[\"key\"]"}
                  </code>
                  {") से values access की जाती हैं।\n                                   Objects APIs, settings, और structured information के लिए उपयोगी हैं।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"let person = {\n  name: \"Avinash\",\n  age: 25,\n  city: \"Delhi\"\n};\nconsole.log(person.name);\n                   "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Avinash"}
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
                {"10. Parameters और Return वाले Functions"}
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
                  {"\n                                   Functions code के reusable blocks हैं। Parameters input provide करने के लिए और\n                                   "}
                  <code>
                    {"return"}
                  </code>
                  {" statement value वापस देने के लिए उपयोग होते हैं। ये functions को\n                                   flexible और modular बनाते हैं। उदाहरण के लिए multiplication function दो parameters ले\n                                   सकता है और उनका product return करता है।\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"function multiply(x, y){\n  return x * y;\n}\nconsole.log(multiply(4, 6));\n                   "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"24"}
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
                {"11. String Methods"}
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
                  {"\n                                   JavaScript में strings के लिए built-in methods होते हैं जो text को manipulate करने\n                                   में मदद करते हैं। जैसे "}
                  <code>
                    {"length"}
                  </code>
                  {" string की length बताता है,\n                                   "}
                  <code>
                    {"toUpperCase()"}
                  </code>
                  {" और "}
                  <code>
                    {"toLowerCase()"}
                  </code>
                  {" case बदलते हैं,\n                                   "}
                  <code>
                    {"slice()"}
                  </code>
                  {" substring निकालता है, और "}
                  <code>
                    {"replace()"}
                  </code>
                  {" text को बदलता\n                                   है। ये methods input validation, formatting और data display के लिए useful हैं।\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"let text = \"Hello World\";\nconsole.log(text.length);\nconsole.log(text.toUpperCase());\nconsole.log(text.slice(0,5));\nconsole.log(text.replace(\"World\",\"JavaScript\"));\n                   "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"11"}
                    <br />
                    {"\n                                        HELLO WORLD"}
                    <br />
                    {"\n                                        Hello"}
                    <br />
                    {"\n                                        Hello JavaScript"}
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
                {"12. Date & Time"}
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
                  {"\n                                   JavaScript में "}
                  <code>
                    {"Date"}
                  </code>
                  {" object का उपयोग current date और time को handle करने\n                                   के लिए होता है। हम day, month, year, hours, minutes, और seconds retrieve कर सकते हैं।\n                                   यह timers, event scheduling और logging के लिए उपयोगी है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"let now = new Date();\nconsole.log(now);\nconsole.log(\"Year:\", now.getFullYear());\nconsole.log(\"Month:\", now.getMonth() + 1);\nconsole.log(\"Date:\", now.getDate());\n                   "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Wed Sep 12 2025 10:00:00 GMT+0530 (India Standard Time)"}
                    <br />
                    {"\n                                        Year: 2025"}
                    <br />
                    {"\n                                        Month: 9"}
                    <br />
                    {"\n                                        Date: 12\n                                   "}
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
                {"13. DOM Manipulation"}
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
                  {"\n                                   JavaScript में DOM (Document Object Model) का उपयोग HTML elements को manipulate करने\n                                   के लिए होता है। हम elements select कर सकते हैं, उनका content change कर सकते हैं, नए\n                                   elements create कर सकते हैं और remove कर सकते हैं। यह web pages को interactive और\n                                   dynamic बनाता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"document.body.innerHTML += \"<p>Hello DOM!</p>\";\nlet heading = document.createElement(\"h2\");\nheading.innerText = \"New Heading\";\ndocument.body.appendChild(heading);\n                   "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Hello DOM!"}
                    <br />
                    {"\n                                        New Heading\n                                   "}
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
                {"14. Event Handling"}
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
                  {"\n                                   JavaScript में events का उपयोग user actions detect और handle करने के लिए होता है जैसे\n                                   clicks, mouse movements, और keyboard inputs। हम "}
                  <code>
                    {"addEventListener()"}
                  </code>
                  {" use\n                                   करके event-specific functions define कर सकते हैं। यह interactive web applications में\n                                   महत्वपूर्ण है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"let button = document.createElement(\"button\");\nbutton.innerText = \"Click Me\";\ndocument.body.appendChild(button);\nbutton.addEventListener(\"click\", function(){\n  alert(\"Button Clicked!\");\n});\n                   "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Button Clicked! (alert appears on clicking the button)\n                                   "}
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
                {"15. Local Storage"}
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
                  {"\n                                   JavaScript में Local Storage का उपयोग browser में data को permanently store करने के\n                                   लिए होता है। यह data page reload या browser close होने के बाद भी उपलब्ध रहता है।\n                                   Local Storage key-value pairs में data store करता है और settings, preferences, या\n                                   temporary data के लिए useful है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"localStorage.setItem(\"username\", \"Avinash\");\nconsole.log(localStorage.getItem(\"username\"));\nlocalStorage.removeItem(\"username\");\n                   "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Avinash\n                                   "}
                  </p>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n\n          "}
        </div>
        {"\n\n\n\n\n     "}
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
