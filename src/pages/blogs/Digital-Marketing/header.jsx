import PageFrame from "@/runtime/PageFrame.jsx";
import { Link } from "react-router-dom";

// Converted from blogs/Digital-Marketing/header.html
const styles = [{ href: "/header-footer.css" }];
const scripts = [{ src: "/blogs/script.js", names: {"fn":[],"vars":[],"lex":[],"consts":[]} }];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>Document</title>
        </>
      }
    >
      <header>
        <nav>
          <div className="nav-image">
            <Link to="/">
              <img src="../../img/cos-white-logo.webp" alt="Company Logo" />
            </Link>
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
                <a href="about-us.html">
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
                <a href="placement.html">
                  Our Placements
                </a>
              </li>
              {" "}
              <li>
                <a href="contact-us.html">
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
            <a href="about-us.html">
              About Us
            </a>
          </li>
          {" "}
          <li>
            <a href="course.html" id="mobile-courses-link">
              Courses ▼
            </a>
          </li>
          {" "}
          <li>
            <a href="placement.html">
              Our Placements
            </a>
          </li>
          {" "}
          <li>
            <a href="contact-us.html">
              Contact Us
            </a>
          </li>
        </ul>
        {" "}
        <div className="mobile-nav-button">
          <a href="tel:+919977723584">
            {" "}
            <button>
              Enroll Now
            </button>
            {" "}
          </a>
        </div>
      </div>
      {" "}
    </PageFrame>
  );
}
