import PageFrame from "@/runtime/PageFrame.jsx";
import { Link } from "react-router-dom";

// Converted from test/c.html
const styles = [{ href: "/header-footer.css" }, { href: "/test/main.css" }];
const scripts = [{ src: "/script.js", names: {"fn":["showCourseList"],"vars":[],"lex":["faqs","cards","observer"],"consts":["faqs","cards","observer"]} }, { src: "/test/main.js", names: {"fn":["ELanguage","HLanguage","toggleSection"],"vars":["english","hindi"],"lex":[],"consts":[]} }];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>C Programming Tutorial for Beginners | Learn C Language Step-by-Step</title>
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo.webp" type="image/webp" />
          <meta name="description" content="Learn C programming from basics to advanced. Understand data structures, OOP, and build strong programming logic with hands-on practice." />
          <link rel="canonical" href="https://codeofschool.com/courses/c-cpp" />
          <meta name="keywords" content="C Programming course Indore,C Training Indore, Coding Classes Indore, Code of School Indore" />
          <meta property="og:title" content={"C & C++ Programming Course in Indore | Code of School"} />
          <meta property="og:description" content="Strengthen your programming logic with C and C++ – the foundation of software development." />
          <meta property="og:url" content="https://codeofschool.com/courses/c-cpp" />
          <meta property="og:image" content="https://codeofschool.com/img/cos-white-logo.webp" />
          <meta name="twitter:title" content={"C Programming Course | Learn DSA & Logic"} />
          <meta name="twitter:description" content={"Master programming fundamentals and data structures with C & C++."} />
          <meta name="twitter:image" content="https://codeofschool.com/img/cos-white-logo.webp" />
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo.webp" type="image/webp" sizes="32x32" />
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo.webp" type="image/webp" sizes="48x48" />
          <link rel="apple-touch-icon" href="https://codeofschool.com/img/cos-white-logo.webp" />
          <link rel="manifest" href="/site.webmanifest" />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"Article\",\n      \"headline\": \"C Programming Tutorial – Learn C Language Step-by-Step\",\n      \"description\": \"C programming tutorial for beginners covering basics, syntax, examples, and exercises.\",\n      \"image\": \"https://yourwebsite.com/images/c-language-banner.png\",\n      \"author\": {\n        \"@type\": \"Person\",\n        \n      },\n      \"publisher\": {\n        \"@type\": \"Organization\",\n        \"name\": \"YourWebsiteName\",\n        \"logo\": {\n          \"@type\": \"ImageObject\",\n          \"url\": \"https://yourwebsite.com/logo.png\"\n        }\n      },\n      \"mainEntityOfPage\": \"https://yourwebsite.com/c_programming.html\",\n      \"datePublished\": \"2025-01-10\",\n      \"dateModified\": \"2025-01-10\"\n    }" }} />
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
            {"C Programming"}
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
        {"\n\n          "}
        {"\n\n          "}
        <div id="englishContent">
          {"\n\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {" Introduction"}
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
                  {"C is known as the mother language of many modern programming languages. It is a\n                                   high-level,\n                                   procedural language developed in the early 1970s and is widely used in system\n                                   programming,\n                                   application development, embedded systems, and software engineering. Many languages\n                                   like\n                                   C++, Java, and Python have roots in C. Being called the “mother language” emphasizes\n                                   its\n                                   foundational importance, as understanding C gives a strong base for learning other\n                                   languages and understanding computer programming concepts."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    printf(\"C Programming Basics\\n\");\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"C Programming Basics"}
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
                {"1. Basic Structure of C Program"}
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
                  {"Every C program has a basic structure: header files, main function, statements, and\n                                   return.\n                                   Header files provide libraries for input/output and other functions. int main() is\n                                   the\n                                   entry point. Statements define logic and each ends with a semicolon. return 0;\n                                   indicates\n                                   successful execution."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    printf(\"C Programming Basics\\n\");\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"C Programming Basics"}
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
                {"2. Variables and Data Types"}
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
                  {"Variables store data in memory. Data types include int, float, char, double, etc.\n                                   Correct\n                                   data type selection ensures efficiency and prevents errors."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    int a = 10;\n    float b = 5.5;\n    char c = 'A';\n    double d = 20.55;\n    printf(\"Integer: %d\\n\", a);\n    printf(\"Float: %.2f\\n\", b);\n    printf(\"Char: %c\\n\", c);\n    printf(\"Double: %.2lf\\n\", d);\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Integer: 10"}
                    <br />
                    {"\n                                        Float: 5.50"}
                    <br />
                    {"\n                                        Char: A"}
                    <br />
                    {"\n                                        Double: 20.55\n                                   "}
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
                {"3. Input/Output in C"}
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
                  {"scanf() is used to get input, printf() is used to display output. Both are part of\n                                   stdio.h.\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    int num;\n    printf(\"Enter a number: \");\n    scanf(\"%d\", &num);\n    printf(\"You entered: %d\\n\", num);\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Enter a number: 25"}
                    <br />
                    {"\n                                        You entered: 25\n                                   "}
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
                  {"C uses arithmetic, relational, logical, and assignment operators to perform operations\n                                   on\n                                   data."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    int a = 10, b = 5;\n    printf(\"Addition: %d\\n\", a+b);\n    printf(\"Subtraction: %d\\n\", a-b);\n    printf(\"Multiplication: %d\\n\", a*b);\n    printf(\"Division: %d\\n\", a/b);\n    printf(\"Modulo: %d\\n\", a%b);\n    printf(\"Greater? %d\\n\", a>b);\n    printf(\"Equal? %d\\n\", a==b);\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Addition: 15"}
                    <br />
                    {"\n                                        Subtraction: 5"}
                    <br />
                    {"\n                                        Multiplication: 50"}
                    <br />
                    {"\n                                        Division: 2"}
                    <br />
                    {"\n                                        Modulo: 0"}
                    <br />
                    {"\n                                        Greater? 1"}
                    <br />
                    {"\n                                        Equal? 0\n                                   "}
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
                {"5. Conditional Statements"}
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
                  {"if, if-else, else-if allow decision-making based on conditions."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    int num;\n    printf(\"Enter a number: \");\n    scanf(\"%d\", &num);\n    if(num % 2 == 0)\n        printf(\"Even Number\\n\");\n    else\n        printf(\"Odd Number\\n\");\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Enter a number: 8"}
                    <br />
                    {"\n                                        Even Number\n                                   "}
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
                {"6. Nested if and else-if"}
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
                  {"For multiple conditions, nested if or else-if statements are used."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    int marks;\n    printf(\"Enter marks: \");\n    scanf(\"%d\", &marks);\n    if(marks >= 90)\n        printf(\"Grade A\\n\");\n    else if(marks >= 75)\n        printf(\"Grade B\\n\");\n    else if(marks >= 50)\n        printf(\"Grade C\\n\");\n    else\n        printf(\"Grade F\\n\");\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Enter marks: 82"}
                    <br />
                    {"\n                                        Grade B\n                                   "}
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
                {"7. Switch Case"}
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
                  {"switch allows multiple choice selection for different cases."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    int choice;\n    printf(\"Enter 1-3: \");\n    scanf(\"%d\", &choice);\n    switch(choice) {\n        case 1: printf(\"One\\n\"); break;\n        case 2: printf(\"Two\\n\"); break;\n        case 3: printf(\"Three\\n\"); break;\n        default: printf(\"Invalid choice\\n\");\n    }\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Enter 1-3: 2"}
                    <br />
                    {"\n                                        Two\n                                   "}
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
                {"8. Loops (for, while, do-while)"}
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
                  {"Loops allow repeated execution of a block of code. for, while, and do-while loops are\n                                   used\n                                   based on the condition and number of iterations."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    int i;\n    for(i=1; i<=5; i++) {\n        printf(\"Number: %d\\n\", i);\n    }\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Number: 1"}
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
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"9. Arrays"}
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
                  {"Arrays store multiple values of the same data type. They are useful for storing lists\n                                   and\n                                   performing operations on sequential data."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    for(int i=0; i<5; i++) {\n        printf(\"Element %d: %d\\n\", i, arr[i]);\n    }\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Element 0: 10"}
                    <br />
                    {"\n                                        Element 1: 20"}
                    <br />
                    {"\n                                        Element 2: 30"}
                    <br />
                    {"\n                                        Element 3: 40"}
                    <br />
                    {"\n                                        Element 4: 50\n                                   "}
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
                {"10. Strings"}
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
                  {"Strings are arrays of characters used to store text. Standard library functions help in\n                                   string manipulation."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\n#include <string.h>\nint main() {\n    char name[20] = \"Avinash\";\n    printf(\"Name: %s\\n\", name);\n    printf(\"Length: %lu\\n\", strlen(name));\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Name: Avinash"}
                    <br />
                    {"\n                                        Length: 7\n                                   "}
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
                {"11. Functions"}
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
                  {"Functions allow modular code by breaking a program into smaller reusable blocks."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint add(int a, int b) {\n    return a + b;\n}\nint main() {\n    int result = add(10, 20);\n    printf(\"Sum: %d\\n\", result);\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Sum: 30"}
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
                {"12. Pointers"}
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
                  {"Pointers store memory addresses and allow efficient manipulation of data."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    int a = 10;\n    int *ptr = &a;\n    printf(\"Value: %d\\n\", *ptr);\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Value: 10"}
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
                {"13. Structures"}
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
                  {"Structures allow grouping of different data types under a single name."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nstruct Student {\n    int id;\n    char name[20];\n};\nint main() {\n    struct Student s1 = {1, \"Avinash\"};\n    printf(\"ID: %d, Name: %s\\n\", s1.id, s1.name);\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"ID: 1, Name: Avinash"}
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
                {"14. File Handling"}
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
                  {"C allows reading/writing files using fopen, fclose, fprintf, fscanf."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    FILE *fp = fopen(\"test.txt\", \"w\");\n    fprintf(fp, \"Hello File\\n\");\n    fclose(fp);\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"File created with text: Hello File"}
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
                {"15. Recursion"}
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
                  {"Recursion is when a function calls itself to solve smaller instances of a problem. It\n                                   helps\n                                   in tasks like factorial, Fibonacci series, etc."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint factorial(int n) {\n    if(n == 0)\n        return 1;\n    else\n        return n * factorial(n-1);\n}\nint main() {\n    int num = 5;\n    printf(\"Factorial of %d is %d\\n\", num, factorial(num));\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Factorial of 5 is 120"}
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
        {"\n\n\n\n\n          "}
        {"\n          "}
        <div id="hindiContent" className="hidden">
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {" परिचय (Introduction)"}
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
                  {"C को कई आधुनिक प्रोग्रामिंग भाषाओं की \"मदर लैंग्वेज\" कहा जाता है। यह एक हाई-लेवल,\n                                   प्रोसीजरल\n                                   भाषा है जिसे 1970 के दशक में विकसित किया गया था। यह सिस्टम प्रोग्रामिंग, एप्लिकेशन\n                                   डेवलपमेंट, एम्बेडेड सिस्टम और सॉफ्टवेयर इंजीनियरिंग में व्यापक रूप से उपयोग की जाती\n                                   है। कई\n                                   भाषाएं जैसे C++, Java और Python, C से प्रभावित हुई हैं। इसे \"मदर लैंग्वेज\" कहने का\n                                   मतलब है\n                                   कि C को सीखने से आपको प्रोग्रामिंग का मजबूत आधार मिलता है और अन्य भाषाएं सीखना आसान\n                                   हो\n                                   जाता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    printf(\"C Programming Basics\\n\");\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"C Programming Basics"}
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
                {"1. C प्रोग्राम की बेसिक संरचना"}
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
                  {"हर C प्रोग्राम का एक बेसिक स्ट्रक्चर होता है: हेडर फाइल्स, main() फंक्शन, स्टेटमेंट्स\n                                   और\n                                   return।\n                                   हेडर फाइल्स इनपुट/आउटपुट और अन्य फंक्शन्स के लिए लाइब्रेरी प्रोवाइड करती हैं।\n                                   int main() प्रोग्राम का entry point होता है।\n                                   स्टेटमेंट्स प्रोग्राम की लॉजिक को डिफाइन करते हैं और हर स्टेटमेंट सेमीकोलन से खत्म\n                                   होता\n                                   है।\n                                   return 0; का मतलब है कि प्रोग्राम सफलतापूर्वक चला।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    printf(\"C Programming Basics\\n\");\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"C Programming Basics"}
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
                {"2. वेरिएबल और डाटा टाइप"}
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
                  {"वेरिएबल्स मेमोरी में डाटा स्टोर करने के लिए उपयोग किए जाते हैं। डाटा टाइप यह बताता है\n                                   कि किस\n                                   प्रकार का डाटा स्टोर होगा (int, float, char आदि)।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    int age = 21;\n    float marks = 85.5;\n    char grade = 'A';\n    printf(\"Age: %d\\n\", age);\n    printf(\"Marks: %.1f\\n\", marks);\n    printf(\"Grade: %c\\n\", grade);\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Age: 21"}
                    <br />
                    {"\n                                        Marks: 85.5"}
                    <br />
                    {"\n                                        Grade: A\n                                   "}
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
                {"3. इनपुट और आउटपुट"}
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
                  {"printf() आउटपुट दिखाने के लिए और scanf() यूज़र से इनपुट लेने के लिए उपयोग होता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    int num;\n    printf(\"Enter a number: \");\n    scanf(\"%d\", &num);\n    printf(\"You entered: %d\\n\", num);\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Enter a number: 10"}
                    <br />
                    {"\n                                        You entered: 10\n                                   "}
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
                {"4. ऑपरेटर्स"}
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
                  {"C में Arithmetic, Relational, Logical और Assignment ऑपरेटर्स का उपयोग डाटा पर ऑपरेशन\n                                   करने के\n                                   लिए होता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    int a = 10, b = 5;\n    printf(\"Addition: %d\\n\", a+b);\n    printf(\"Subtraction: %d\\n\", a-b);\n    printf(\"Multiplication: %d\\n\", a*b);\n    printf(\"Division: %d\\n\", a/b);\n    printf(\"Modulo: %d\\n\", a%b);\n    printf(\"Greater? %d\\n\", a>b);\n    printf(\"Equal? %d\\n\", a==b);\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Addition: 15"}
                    <br />
                    {"\n                                        Subtraction: 5"}
                    <br />
                    {"\n                                        Multiplication: 50"}
                    <br />
                    {"\n                                        Division: 2"}
                    <br />
                    {"\n                                        Modulo: 0"}
                    <br />
                    {"\n                                        Greater? 1"}
                    <br />
                    {"\n                                        Equal? 0\n                                   "}
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
                {"5. कंडीशनल स्टेटमेंट्स"}
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
                  {"if, if-else, else-if का उपयोग conditions के आधार पर decision लेने के लिए किया जाता है।\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    int num;\n    printf(\"Enter a number: \");\n    scanf(\"%d\", &num);\n    if(num % 2 == 0)\n        printf(\"Even Number\\n\");\n    else\n        printf(\"Odd Number\\n\");\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Enter a number: 8"}
                    <br />
                    {"\n                                        Even Number\n                                   "}
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
                {"6. Nested if और else-if"}
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
                  {"जब एक से अधिक conditions check करनी हों तब nested if या else-if का प्रयोग किया जाता है।\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    int marks;\n    printf(\"Enter marks: \");\n    scanf(\"%d\", &marks);\n    if(marks >= 90)\n        printf(\"Grade A\\n\");\n    else if(marks >= 75)\n        printf(\"Grade B\\n\");\n    else if(marks >= 50)\n        printf(\"Grade C\\n\");\n    else\n        printf(\"Grade F\\n\");\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Enter marks: 82"}
                    <br />
                    {"\n                                        Grade B\n                                   "}
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
                {"7. स्विच केस"}
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
                  {"switch का उपयोग एक से अधिक विकल्पों में से किसी एक को चुनने के लिए किया जाता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    int choice;\n    printf(\"Enter 1-3: \");\n    scanf(\"%d\", &choice);\n    switch(choice) {\n        case 1: printf(\"One\\n\"); break;\n        case 2: printf(\"Two\\n\"); break;\n        case 3: printf(\"Three\\n\"); break;\n        default: printf(\"Invalid choice\\n\");\n    }\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Enter 1-3: 2"}
                    <br />
                    {"\n                                        Two\n                                   "}
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
                {"8. लूप्स (for, while, do-while)"}
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
                  {"लूप्स का उपयोग किसी कोड को बार-बार चलाने के लिए किया जाता है। for loop का उपयोग तब किया\n                                   जाता\n                                   है जब iterations की संख्या पता हो। while और do-while का उपयोग तब किया जाता है जब\n                                   condition\n                                   के आधार पर कोड बार-बार चलाना हो।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    int i;\n    for(i=1; i<=5; i++) {\n        printf(\"Number: %d\\n\", i);\n    }\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Number: 1"}
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
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"9. एरेज़ (Arrays)"}
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
                  {"एरेज़ का उपयोग एक ही प्रकार के कई डाटा को एक साथ स्टोर करने के लिए किया जाता है। यह\n                                   sequential डाटा के साथ काम करने में सहायक होते हैं।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    for(int i=0; i<5; i++) {\n        printf(\"Element %d: %d\\n\", i, arr[i]);\n    }\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Element 0: 10"}
                    <br />
                    {"\n                                        Element 1: 20"}
                    <br />
                    {"\n                                        Element 2: 30"}
                    <br />
                    {"\n                                        Element 3: 40"}
                    <br />
                    {"\n                                        Element 4: 50\n                                   "}
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
                {"10. स्ट्रिंग्स (Strings)"}
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
                  {"स्ट्रिंग्स character का एक समूह होती हैं जिनका उपयोग टेक्स्ट स्टोर करने के लिए किया\n                                   जाता है।\n                                   C में स्ट्रिंग्स null character ('\\0') से terminate होती हैं।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\n#include <string.h>\nint main() {\n    char name[20] = \"Avinash\";\n    printf(\"Name: %s\\n\", name);\n    printf(\"Length: %lu\\n\", strlen(name));\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Name: Avinash"}
                    <br />
                    {"\n                                        Length: 7\n                                   "}
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
                {"11. फंक्शन्स (Functions)"}
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
                  {"फंक्शन्स प्रोग्राम को छोटे-छोटे reusable ब्लॉक्स में बांट देते हैं जिससे कोड modular और\n                                   maintain करने में आसान बन जाता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint add(int a, int b) {\n    return a + b;\n}\nint main() {\n    int result = add(10, 20);\n    printf(\"Sum: %d\\n\", result);\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Sum: 30\n                                   "}
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
                {"12. पॉइंटर्स (Pointers)"}
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
                  {"पॉइंटर्स वे वेरिएबल्स होते हैं जो किसी अन्य वेरिएबल के memory address को स्टोर करते\n                                   हैं।\n                                   इनका उपयोग memory को direct access करने और efficient प्रोग्रामिंग के लिए किया जाता\n                                   है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    int a = 10;\n    int *ptr = &a;\n    printf(\"Value: %d\\n\", *ptr);\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Value: 10\n                                   "}
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
                {"13. स्ट्रक्चर्स (Structures)"}
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
                  {"स्ट्रक्चर्स का उपयोग अलग-अलग डाटा टाइप्स को एक ही नाम के अंदर group करने के लिए किया\n                                   जाता\n                                   है। यह user-defined data type बनाने की सुविधा देता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nstruct Student {\n    int id;\n    char name[20];\n};\nint main() {\n    struct Student s1 = {1, \"Avinash\"};\n    printf(\"ID: %d, Name: %s\\n\", s1.id, s1.name);\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        ID: 1, Name: Avinash\n                                   "}
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
                {"14. फाइल हैंडलिंग (File Handling)"}
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
                  {"C में फाइल को पढ़ने और लिखने के लिए fopen(), fclose(), fprintf(), fscanf() जैसे\n                                   फंक्शन्स का\n                                   उपयोग किया जाता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint main() {\n    FILE *fp = fopen(\"test.txt\", \"w\");\n    fprintf(fp, \"Hello File\\n\");\n    fclose(fp);\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        File created with text: Hello File\n                                   "}
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
                {"15. रिकर्शन (Recursion)"}
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
                  {"रिकर्शन तब होती है जब कोई फंक्शन खुद को ही call करता है। इसका उपयोग factorial,\n                                   Fibonacci\n                                   series और complex problems को छोटे टुकड़ों में solve करने के लिए किया जाता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"#include <stdio.h>\nint factorial(int n) {\n    if(n == 0)\n        return 1;\n    else\n        return n * factorial(n-1);\n}\nint main() {\n    int num = 5;\n    printf(\"Factorial of %d is %d\\n\", num, factorial(num));\n    return 0;\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"\n                                        Factorial of 5 is 120\n                                   "}
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
        {"\n\n          "}
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
      {"\n     "}
      {"\n\n\n\n\n\n"}
    </PageFrame>
  );
}
