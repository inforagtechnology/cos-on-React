import PageFrame from "@/runtime/PageFrame.jsx";
import { Link } from "react-router-dom";

// Converted from register.html
const styles = [{ href: "/contactustwo.css" }, { href: "/header-footer.css" }, { href: "/register.css" }];
const scripts = [{ src: "/script.js", names: {"fn":["showCourseList"],"vars":[],"lex":["faqs","cards","observer"],"consts":["faqs","cards","observer"]} }];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>Registration | Code of School</title>
          <meta name="description" content="Register for courses at Code of School. Sign up for web development, data science, Java, DevOps, and other IT training programs in Indore." />
          <link rel="canonical" href="https://codeofschool.com/registration" />
          <meta name="keywords" content="Code of School registration, course registration, sign up for coding classes, IT training registration, web development registration" />
          <meta property="og:title" content="Registration | Code of School" />
          <meta property="og:description" content="Sign up for courses at Code of School and start your journey in coding, web development, and data science." />
          <meta property="og:url" content="https://codeofschool.com/registration" />
          <meta property="og:image" content="https://codeofschool.com/img/cos-white-logo2.png" />
          <meta name="twitter:title" content="Registration | Code of School" />
          <meta name="twitter:description" content="Register for IT and coding courses at Code of School. Join web development, data science, Java, DevOps, and more." />
          <meta name="twitter:image" content="https://codeofschool.com/img/cos-white-logo2.png" />
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo2.png" type="image/webp" sizes="32x32" />
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo2.png" type="image/webp" sizes="48x48" />
          <link rel="apple-touch-icon" href="https://codeofschool.com/img/cos-white-logo2.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="icon" href="./img/cos-white-logo2.png" type="image/webp" />
        </>
      }
    >
      {" "}
      <div className="main">
        {" "}
        <header>
          <nav>
            <div className="nav-image">
              <a href="#home">
                <img src="./img/cos-white-logo.webp" alt="Company Logo" />
              </a>
            </div>
            {" "}
            <div className="nav-pg">
              <ul className="nav-page">
                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>
                {" "}
                <li>
                  <a href="aboutus.html">
                    About Us
                  </a>
                </li>
                {" "}
                <li>
                  <Link to="/course.html" id="courses-link">
                    Courses ▼
                  </Link>
                </li>
                {" "}
                <li>
                  <Link to="/placement.html">
                    Our Placements
                  </Link>
                </li>
                {" "}
                <li>
                  <a href="contactustwo.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            {" "}
            <div className="nav-but">
              <a href="tel:+919977723584" className="call-btn">
                {" "}
                <i className="fa-solid fa-phone"></i>
                {" Enroll Now "}
              </a>
            </div>
            {" "}
            <div className="hamburger-menu" id="hamburger-icon">
              {" ☰ "}
            </div>
          </nav>
        </header>
        {" "}
        <div className="dropdown-panel" id="dropdown-panel">
          <ul className="categories" id="category-list">
            <li data-category="all">
              All
            </li>
            {" "}
            <li data-category="web">
              Web Dev
            </li>
            {" "}
            <li data-category="language">
              Languages
            </li>
            {" "}
            <li data-category="app">
              Mobile.Dev
            </li>
            {" "}
            <li data-category="ai">
              {"Data & AI"}
            </li>
            {" "}
            <li data-category="other">
              Other
            </li>
          </ul>
          {" "}
          <ul className="courses" id="course-list"></ul>
        </div>
        {" "}
        <div className="mobile-nav-overlay" id="mobile-nav-overlay">
          <div className="close-btn" id="close-mobile-nav">
            ×
          </div>
          {" "}
          <ul className="mobile-nav-page">
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            {" "}
            <li>
              <a href="aboutus.html">
                About Us
              </a>
            </li>
            {" "}
            <li>
              <a href="contactustwo.html">
                Contact Us
              </a>
            </li>
            {" "}
            <li>
              <Link to="/course.html" id="mobile-courses-link">
                Courses ▼
              </Link>
            </li>
            {" "}
            <li>
              <Link to="/placement.html">
                Our Placements
              </Link>
            </li>
          </ul>
          {" "}
          <div className="mobile-nav-button">
            <button>
              Login
            </button>
            {" "}
            <button>
              Connect Us
            </button>
          </div>
        </div>
      </div>
      {" "}
      <section className="reg">
        <section className="reg-a">
          <h1 id="he">
            Registration Form
          </h1>
          {" "}
          <form method="POST">
            {" {% csrf_token %} "}
            <div className="for-inquiry">
              <div>
                <input type="radio" name="work" id="work" defaultValue="10" />
                {" "}
                <label htmlFor="iquiry">
                  Inquiry
                </label>
              </div>
              {" "}
              <div>
                <input type="radio" name="work" id="work" defaultValue="20" defaultChecked />
                {" "}
                <label htmlFor="register">
                  Registration
                </label>
              </div>
            </div>
            {" "}
            <div className="a">
              <select name="course" id="course" defaultValue={""}>
                <option value="" disabled>
                  Course
                </option>
                <option value="Fullstack">
                  Fullstack
                </option>
                <option value="JAVA">
                  JAVA
                </option>
                <option value="Python">
                  Python
                </option>
                <option value="C++">
                  C++
                </option>
                <option value="Digital marketing">
                  Digital marketing
                </option>
                <option value="Machine Learning">
                  Machine Learning
                </option>
                <option value="Blockchain">
                  Blockchain
                </option>
              </select>
            </div>
            {" "}
            <div className="b">
              <div className="b-a">
                <label htmlFor="name">
                  Name
                </label>
                {" "}
                <input type="text" name="student" id="student" />
              </div>
              {" "}
              <div className="b-a">
                <label htmlFor="reference">
                  Reference
                </label>
                {" "}
                <input type="text" name="reference" id="reference" />
              </div>
            </div>
            {" "}
            <div className="b">
              <div className="b-a">
                <label htmlFor="E_mail">
                  E-mail
                </label>
                {" "}
                <input type="email" name="E_mail" id="E_mail" />
              </div>
              {" "}
              <div className="b-a">
                <label htmlFor="duration">
                  Duration
                </label>
                {" "}
                <input type="number" name="duration" id="duration" />
              </div>
            </div>
            {" "}
            <div className="b">
              <div className="b-a">
                <label htmlFor="fee">
                  Total Fee
                </label>
                {" "}
                <input type="number" name="fee" id="fee" />
              </div>
            </div>
            {" "}
            <div className="b">
              <div className="b-a">
                <label htmlFor="first_installment">
                  First
                </label>
                {" "}
                <input type="number" name="first_installment" id="first_installment" />
              </div>
              {" "}
            </div>
            {" "}
            {" "}
            <div className="c">
              <button>
                <b>
                  Submit
                </b>
              </button>
            </div>
            {" "}
            <div className="c"></div>
          </form>
        </section>
      </section>
      {" "}
    </PageFrame>
  );
}
