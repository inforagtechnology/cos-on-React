import PageFrame from "@/runtime/PageFrame.jsx";
import { Link } from "react-router-dom";

// Converted from test/java.html
const styles = [{ href: "/header-footer.css" }, { href: "/test/main.css" }];
const scripts = [{ src: "/script.js", names: {"fn":["showCourseList"],"vars":[],"lex":["faqs","cards","observer"],"consts":["faqs","cards","observer"]} }, { src: "/test/main.js", names: {"fn":["ELanguage","HLanguage","toggleSection"],"vars":["english","hindi"],"lex":[],"consts":[]} }];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>{"Java Core & Advanced Course in Indore | Code of School"}</title>
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
      {"\n\n     \n\n\n     "}
      <div className="container">
        {"\n          "}
        {"\n          "}
        <div className="top">
          {"\n               "}
          <h1>
            {"Java"}
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
        <div id="englishContent">
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"1. Introduction to Java"}
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
                  {"Java is an object-oriented, platform-independent programming language used in desktop,\n                                   web,\n                                   and mobile applications. Its slogan “Write Once, Run Anywhere” means code can run on\n                                   any\n                                   machine. Java syntax is similar to C/C++ and beginner-Satendly."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Hello, World!"}
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
                {"2. Java Basics – Variables and Data Types"}
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
                  {"Variables store data in programs. Java has primitive data types: int, float, double,\n                                   char,\n                                   boolean."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"int age = 20;\ndouble price = 99.99;\nchar grade = 'A';\nboolean isPassed = true;\nSystem.out.println(age + \", \" + price + \", \" + grade + \", \" + isPassed);\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"20, 99.99, A, true"}
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
                {"3. Operators in Java"}
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
                  {"Operators perform arithmetic, relational, and logical operations. Assignment operators\n                                   are\n                                   also used."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"int a = 10, b = 5;\nSystem.out.println(a + b); // Addition\nSystem.out.println(a > b);  // Comparison\nSystem.out.println(a != b); // Not equal\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"15"}
                    <br />
                    {"true"}
                    <br />
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
                {"4. Conditional Statements (if-else, switch)"}
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
                  {"Conditional statements control the program flow."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"int num = -5;\nif(num > 0) {\n    System.out.println(\"Positive\");\n} else if(num < 0) {\n    System.out.println(\"Negative\");\n} else {\n    System.out.println(\"Zero\");\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Negative"}
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
                {"5. Loops in Java (for, while, do-while)"}
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
                  {"Loops are used for repetitive tasks."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"for(int i = 1; i <= 5; i++) {\n    System.out.println(i);\n}\n                "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"1 2 3 4 5"}
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
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"6. Arrays in Java"}
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
                  {"Arrays store multiple values together. Index starts from 0."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"String[] fruits = {\"Apple\", \"Banana\", \"Mango\"};\nSystem.out.println(fruits[1]);\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Banana"}
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
                {"7. Functions / Methods in Java"}
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
                  {"Methods make code modular and reusable. Parameters and return types are specified."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"public static int multiply(int a, int b) {\n    return a * b;\n}\nSystem.out.println(multiply(5, 4));\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"20"}
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
                {"8. Object-Oriented Programming – Classes & Objects"}
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
                  {"Class is a blueprint, object is a real instance. OOP concepts: Encapsulation,\n                                   Inheritance,\n                                   Polymorphism."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"class Car {\n    String color;\n}\nCar myCar = new Car();\nmyCar.color = \"Red\";\nSystem.out.println(myCar.color);\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Red"}
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
                {"9. Constructors in Java"}
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
                  {"Constructor initializes objects during creation. Types: Default and Parameterized."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"class Car {\n    String color;\n    Car(String c) { color = c; }\n}\nCar myCar = new Car(\"Blue\");\nSystem.out.println(myCar.color);\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Blue"}
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
                {"10. Inheritance"}
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
                  {"Inheritance allows a class to inherit properties and methods from another class."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"class Vehicle { int speed = 100; }\nclass Bike extends Vehicle {}\nBike myBike = new Bike();\nSystem.out.println(myBike.speed);\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"100"}
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
                {"11. Polymorphism"}
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
                  {"Polymorphism allows a function to take multiple forms. Compile-time (method\n                                   overloading) and\n                                   Run-time (method overriding)."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"class Math {\n    int sum(int a, int b) { return a+b; }\n    int sum(int a, int b, int c) { return a+b+c; }\n}\nMath m = new Math();\nSystem.out.println(m.sum(2,3));\nSystem.out.println(m.sum(2,3,4));\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"5"}
                    <br />
                    {"9"}
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
                {"12. Encapsulation"}
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
                  {"Encapsulation keeps data private and accessed via getter/setter."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"class Student {\n    private String name;\n    public void setName(String n) { name = n; }\n    public String getName() { return name; }\n}\nStudent s = new Student();\ns.setName(\"Avi\");\nSystem.out.println(s.getName());\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Avi"}
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
                {"13. Exception Handling"}
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
                  {"Use try-catch-finally to handle errors in Java."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"try {\n    int a = 10/0;\n} catch(Exception e) {\n    System.out.println(\"Error occurred\");\n} finally {\n    System.out.println(\"Execution complete\");\n}\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Error occurred"}
                    <br />
                    {"Execution complete"}
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
                {"14. Java Packages"}
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
                  {"Packages help organize and reuse code."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"import java.util.Scanner;\nScanner sc = new Scanner(System.in);\nSystem.out.println(\"Enter your name:\");\nString name = sc.nextLine();\nSystem.out.println(\"Hello \" + name);\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Enter your name: Avi"}
                    <br />
                    {"Hello Avi"}
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
                {"15. File Handling in Java"}
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
                  {"Java uses File, FileReader, FileWriter, BufferedReader/Writer to read/write files."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"import java.io.File;\npublic class ReadFile {\n    public static void main(String[] args) {\n        File file = new File(\"test.txt\");\n        if(file.exists()) {\n            System.out.println(\"File exists\");\n        } else {\n            System.out.println(\"File not found\");\n        }\n    }\n}\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"File exists"}
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
        {"\n          "}
        {"\n          "}
        <div id="hindiContent" className="hidden">
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"1. जावा का परिचय"}
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
                  {"जावा एक ऑब्जेक्ट-ओरिएंटेड, प्लेटफ़ॉर्म-इंडिपेंडेंट प्रोग्रामिंग भाषा है। इसका उपयोग\n                                   डेस्कटॉप, वेब और मोबाइल एप्लिकेशन में होता है। इसका स्लोगन “Write Once, Run Anywhere”\n                                   है\n                                   जिसका मतलब है कि कोड किसी भी मशीन पर चल सकता है। जावा का सिंटैक्स C/C++ से\n                                   मिलता-जुलता है\n                                   और यह शुरुआती लोगों के लिए आसान है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Hello, World!"}
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
                {"2. जावा बेसिक्स – वेरिएबल्स और डाटा टाइप्स"}
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
                  {"वेरिएबल्स प्रोग्राम में डेटा स्टोर करते हैं। जावा में प्रिमिटिव डाटा टाइप्स होते हैं:\n                                   int,\n                                   float, double, char, boolean।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"int age = 20;\ndouble price = 99.99;\nchar grade = 'A';\nboolean isPassed = true;\nSystem.out.println(age + \", \" + price + \", \" + grade + \", \" + isPassed);\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"20, 99.99, A, true"}
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
                {"3. जावा में ऑपरेटर्स"}
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
                  {"ऑपरेटर्स अंकगणितीय, रिलेशनल और लॉजिकल ऑपरेशन करते हैं। असाइनमेंट ऑपरेटर्स भी उपयोग किए\n                                   जाते\n                                   हैं।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"int a = 10, b = 5;\nSystem.out.println(a + b); // Addition\nSystem.out.println(a > b);  // Comparison\nSystem.out.println(a != b); // Not equal\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"15 true true"}
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
                {"4. कंडीशनल स्टेटमेंट्स (if-else, switch)"}
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
                  {"कंडीशनल स्टेटमेंट्स प्रोग्राम के फ्लो को नियंत्रित करते हैं।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"int num = -5;\nif(num > 0) {\n    System.out.println(\"Positive\");\n} else if(num < 0) {\n    System.out.println(\"Negative\");\n} else {\n    System.out.println(\"Zero\");\n}\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Negative"}
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
                {"5. लूप्स (for, while, do-while)"}
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
                  {"लूप्स दोहराए जाने वाले कार्यों के लिए उपयोग किए जाते हैं।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"for(int i = 1; i <= 5; i++) {\n    System.out.println(i);\n}\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"1 2 3 4 5"}
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
                {"6. ऐरे"}
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
                  {"ऐरे एक साथ कई वैल्यू स्टोर करते हैं। इनका इंडेक्स 0 से शुरू होता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"String[] fruits = {\"Apple\", \"Banana\", \"Mango\"};\nSystem.out.println(fruits[1]);\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Banana"}
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
                {"7. फ़ंक्शंस / मेथड्स"}
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
                  {"मेथड्स कोड को मॉड्यूलर और पुन: उपयोगी बनाते हैं। पैरामीटर और रिटर्न टाइप्स को निर्दिष्ट\n                                   करते\n                                   हैं।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"public static int multiply(int a, int b) {\n    return a * b;\n}\nSystem.out.println(multiply(5, 4));\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"20"}
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
                {"8. क्लास और ऑब्जेक्ट्स"}
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
                  {"क्लास ब्लूप्रिंट है और ऑब्जेक्ट वास्तविक इंस्टेंस है। OOP के कॉन्सेप्ट्स:\n                                   Encapsulation,\n                                   Inheritance, Polymorphism।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"class Car {\n    String color;\n}\nCar myCar = new Car();\nmyCar.color = \"Red\";\nSystem.out.println(myCar.color);\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Red"}
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
                {"9. कंस्ट्रक्टर्स"}
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
                  {"कंस्ट्रक्टर ऑब्जेक्ट को बनाते समय इनिशियलाइज़ करता है। प्रकार: डिफ़ॉल्ट और\n                                   पैरामीटराइज्ड।\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"class Car {\n    String color;\n    Car(String c) { color = c; }\n}\nCar myCar = new Car(\"Blue\");\nSystem.out.println(myCar.color);\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Blue"}
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
                {"10. इनहेरिटेंस"}
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
                  {"इनहेरिटेंस से एक क्लास दूसरी क्लास की प्रॉपर्टीज़ और मेथड्स को इनहेरिट कर सकती है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"class Vehicle { int speed = 100; }\nclass Bike extends Vehicle {}\nBike myBike = new Bike();\nSystem.out.println(myBike.speed);\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"100"}
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
                {"11. पॉलीमॉर्फिज़्म"}
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
                  {"पॉलीमॉर्फिज़्म में एक फ़ंक्शन कई रूप ले सकता है। कंपाइल-टाइम (मेथड ओवरलोडिंग) और\n                                   रन-टाइम\n                                   (मेथड ओवरराइडिंग)।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"class Math {\n    int sum(int a, int b) { return a+b; }\n    int sum(int a, int b, int c) { return a+b+c; }\n}\nMath m = new Math();\nSystem.out.println(m.sum(2,3));\nSystem.out.println(m.sum(2,3,4));\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"5 9"}
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
                {"12. एन्कैप्सुलेशन"}
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
                  {"एन्कैप्सुलेशन में डेटा प्राइवेट होता है और उसे गेटर-सेटर से एक्सेस किया जाता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"class Student {\n    private String name;\n    public void setName(String n) { name = n; }\n    public String getName() { return name; }\n}\nStudent s = new Student();\ns.setName(\"Avi\");\nSystem.out.println(s.getName());\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Avi"}
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
                {"13. एक्सेप्शन हैंडलिंग"}
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
                  {"एरर्स को हैंडल करने के लिए try-catch-finally का उपयोग किया जाता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"try {\n    int a = 10/0;\n} catch(Exception e) {\n    System.out.println(\"Error occurred\");\n} finally {\n    System.out.println(\"Execution complete\");\n}\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Error occurred Execution complete"}
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
                {"14. पैकेजेस"}
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
                  {"पैकेजेस कोड को ऑर्गनाइज़ और पुन: उपयोग करने में मदद करते हैं।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"import java.util.Scanner;\nScanner sc = new Scanner(System.in);\nSystem.out.println(\"Enter your name:\");\nString name = sc.nextLine();\nSystem.out.println(\"Hello \" + name);\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"Enter your name: Avi Hello Avi"}
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
                {"15. फाइल हैंडलिंग"}
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
                  {"फाइल्स को पढ़ने और लिखने के लिए File, FileReader, FileWriter, BufferedReader/Writer का\n                                   उपयोग\n                                   किया जाता है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="code-section">
                {"\n                              "}
                <div className="code-example">
                  {"\n                                   "}
                  <pre>
                    {"import java.io.File;\npublic class ReadFile {\n    public static void main(String[] args) {\n        File file = new File(\"test.txt\");\n        if(file.exists()) {\n            System.out.println(\"File exists\");\n        } else {\n            System.out.println(\"File not found\");\n        }\n    }\n}\n        "}
                  </pre>
                  {"\n                              "}
                </div>
                {"\n                              "}
                <div className="output-example">
                  {"\n                                   "}
                  <p>
                    {"File exists"}
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
        {"\n\n\n\n\n\n\n\n\n          "}
        {"\n\n\n\n     "}
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
