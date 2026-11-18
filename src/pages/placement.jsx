import PageFrame from "@/runtime/PageFrame.jsx";
import { Link } from "react-router-dom";

// Converted from placement.html
const styles = [{ href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" }, { href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" }, { href: "/placement.css" }, { href: "/header-footer.css" }, { css: "\n    .contact-no ul {\n        padding-left: 0;\n    }\n\n    .mail-add ul,\n    .office ul {\n        padding-left: 0;\n    }\n" }];
const scripts = [{ code: "\n\n        document.addEventListener(\"DOMContentLoaded\", function () {\n            const carousel = document.querySelector(\"#studentCarousel\");\n            if (!carousel) return;\n\n            const carouselInner = carousel.querySelector(\".carousel-inner\");\n            const originalSlides = Array.from(carouselInner.children);\n\n            // Collect all cards from all slides\n            let allCards = [];\n            originalSlides.forEach(slide => {\n                const cards = slide.querySelectorAll(\".card-width\");\n                cards.forEach(card => allCards.push(card.cloneNode(true)));\n            });\n\n            // Function to rebuild carousel for mobile\n            function rebuildForMobile() {\n                if (window.innerWidth <= 700) {\n                    carouselInner.innerHTML = \"\"; // Clear existing slides\n\n                    allCards.forEach((card, index) => {\n                        const newSlide = document.createElement(\"div\");\n                        newSlide.classList.add(\"carousel-item\");\n                        if (index === 0) newSlide.classList.add(\"active\");\n\n                        const wrapper = document.createElement(\"div\");\n                        wrapper.classList.add(\"two-partone-one\");\n                        wrapper.appendChild(card);\n                        newSlide.appendChild(wrapper);\n\n                        carouselInner.appendChild(newSlide);\n                    });\n                } else {\n                    // Restore desktop view (3 cards per slide)\n                    carouselInner.innerHTML = \"\";\n                    originalSlides.forEach(slide => carouselInner.appendChild(slide.cloneNode(true)));\n                }\n            }\n\n            // Run on load\n            rebuildForMobile();\n\n            // Rebuild on resize\n            window.addEventListener(\"resize\", () => {\n                rebuildForMobile();\n            });\n        });\n    ", names: {"fn":[],"vars":[],"lex":[],"consts":[]} }, { src: "/script.js", names: {"fn":["showCourseList"],"vars":[],"lex":["faqs","cards","observer"],"consts":["faqs","cards","observer"]} }, { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" }];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>{"Our Placements - Code Of School | Student Success & Career Growth"}</title>
          <meta name="title" content={"Our Placements - Code Of School | Student Success & Career \nGrowth"} />
          <meta name="description" content="Students of Code Of School have secured placements in top companies. Explore our learners’ success stories, hired companies, career growth, and real-world achievements." />
          <meta name="keywords" content={"Code Of School placements, student success, coding \nplacements, tech jobs, web development jobs, Code Of School hiring partners, student \nachievements"} />
          <meta name="author" content="Ritendra Gour" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content={"Our Placements - Code Of School | Student Success & \nCareer Growth"} />
          <meta property="og:description" content="Students of Code Of School have secured placements in top companies. Explore our learners’ success stories, hired companies, career growth, and real-world achievements." />
          <meta property="og:image" content="https://codeofschool.com/img/cos-white-logo2.png" />
          <meta property="og:url" content="https://codeofschool.com/placement.html" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Code of School" />
          <meta itemProp="name" content="Code of School" />
          <meta itemProp="description" content="At Code Of School, we turn learning into careers. Our students have secured placements in top companies. Explore success stories, hiring companies, and real-world achievements that showcase the impact of our industry-ready training" />
          <meta itemProp="image" content="./img/cos-white-logo2.png" />
          <meta name="twitter:card" content="https://codeofschool.com/img/cos-white-logo2.webp" />
          <meta name="twitter:site" content="@codeofschool" />
          <meta name="twitter:creator" content="Ritendra gour" />
          <meta name="twitter:title" content={"About Code of School — Best Programming & Digital Marketing Training Institute in Indore"} />
          <meta name="twitter:description" content={"Learn about Code of School and how we help students master programming, digital marketing, and full-stack development with expert-led training & live projects."} />
          <meta name="twitter:image" content="https://codeofschool.com/img/cos-white-logo2.png" />
          <link rel="canonical" href="https://codeofschool.com/placement" />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{ \n  \"@context\": \"https://schema.org\", \n  \"@type\": \"CollectionPage\", \n  \"name\": \"Our Placements - Code Of School\", \n  \"url\": \"https://codeofschool.com/placement.html\", \n  \"description\": \"Code Of School ke students ne top-tech companies me placements hasil kiye \nhain. Hamare learners ki success stories, hiring partners aur career achievements explore \nkarein.\", \n  \"about\": [ \n    \"Student Placements\", \n    \"Hiring Partners\", \n    \"Success Stories\", \n    \"Career Growth\", \n    \"Top Company Selections\" \n  ], \n  \"publisher\": { \n    \"@type\": \"Organization\", \n    \"name\": \"Code Of School\", \n    \"logo\": \"https://codeofschool.com/img/cos-white-logo2.png\", \n    \"url\": \"https://codeofschool.com/\" \n  } \n}" }} />
        </>
      }
    >
      <div className="main">
        <header>
          <nav>
            <div className="nav-image">
              <Link to="/">
                <img src="./img/cos-white-logo.webp" alt="Company Logo" />
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
                  <Link to="/about-us.html">
                    About Us
                  </Link>
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
                  <Link to="/contact-us.html">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            {" "}
            <div className="nav-but">
              <a href="tel:+919977723584" className="call-btn" style={{ padding: "11px 20px" }}>
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
              <Link to="/about-us.html">
                About Us
              </Link>
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
            {" "}
            <li>
              <Link to="/contact-us.html">
                Contact Us
              </Link>
            </li>
          </ul>
          {" "}
          <div className="mobile-nav-button">
            <a href="tel:+919977723584" className="call-btn">
              {" "}
              <i className="fa-solid fa-phone"></i>
              {" Enroll Now "}
            </a>
          </div>
        </div>
        {" "}
        <div className="dropdown-panel" id="dropdown-panel">
          <ul className="categories" id="category-list">
            <li data-category="web">
              Web Dev
            </li>
            {" "}
            <li data-category="data">
              Data Science
            </li>
            {" "}
            <li data-category="design">
              Design
            </li>
            {" "}
            <li data-category="marketing">
              Marketing
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
              <a href="#" id="mobile-courses-link">
                Courses ▼
              </a>
            </li>
            {" "}
            <li>
              <Link to="/placement.html">
                Our Placements
              </Link>
            </li>
          </ul>
          {" "}
          <div className="nav-but">
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
        {" "}
        <section className="place-section-one">
          <div className="sec-one-partone">
            <div className="one-partone-one">
              <h3 id="partone-one-headone">
                Our Placements
              </h3>
              {" "}
              <h1 id="partone-one-headtwo">
                Empowering careers through excellence and innovation
              </h1>
              {" "}
              <p id="partone-one-paraone">
                Our placement program connects skilled students with top industry leaders, creating exceptional opportunities and consistently high success rates.
              </p>
              {" "}
              <Link to="/contact-us.html">
                {" "}
                <h6 id="partone-one-headfour">
                  Explore our placement success
                </h6>
                {" "}
              </Link>
            </div>
            {" "}
            <div className="one-partone-two">
              <img src="./img/CodeOfSchoolCertificate.png" alt="" />
            </div>
            {" "}
            <a href="https://wa.me/919977723584?text=Hi%20I%20need%20help" className="whatsapp-float" id="whatsappButton" target="_blank">
              {" "}
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Chat" />
              {" "}
              <span className="notification-dot"></span>
              {" "}
            </a>
          </div>
          {" "}
          {" "}
          <div className="sec-one-parttwo">
            <div className="one-parttwo-one">
              <h3 className="parttwo-one-headone">
                Track Record of Success
              </h3>
            </div>
            {" "}
            <p className="parttwo-one-paraone">
              Our strong placement support, trusted hiring partners, and years of experience highlight our dedication to shaping successful careers.
            </p>
            {" "}
            <div className="one-parttwo-two">
              <div className="card-cover">
                <div className="parttwo-card">
                  <p className="parttwo-card-para">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path>
                    </svg>
                  </p>
                  {" "}
                  <h3 className="parttwo-card-head">
                    5 +
                  </h3>
                  {" "}
                  <h6 className="parttwo-card-headtwo">
                    Years Experience
                  </h6>
                </div>
              </div>
              {" "}
              <div className="card-cover">
                <div className="parttwo-card">
                  <p className="parttwo-card-para">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"></path>
                    </svg>
                  </p>
                  {" "}
                  <h3 className="parttwo-card-head">
                    {"100 % "}
                  </h3>
                  {" "}
                  <h6 className="parttwo-card-headtwo">
                    {" Placements Assistance"}
                  </h6>
                </div>
              </div>
              {" "}
              <div className="card-cover">
                <div className="parttwo-card">
                  <p className="parttwo-card-para">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-award" viewBox="0 0 16 16">
                      <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"></path>
                      <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"></path>
                    </svg>
                  </p>
                  {" "}
                  <h3 className="parttwo-card-head">
                    500 +
                  </h3>
                  {" "}
                  <h6 className="parttwo-card-headtwo">
                    Placements
                  </h6>
                </div>
              </div>
              {" "}
              <div className="card-cover">
                <div className="parttwo-card">
                  <p className="parttwo-card-para">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-building" viewBox="0 0 16 16">
                      <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"></path>
                      <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"></path>
                    </svg>
                  </p>
                  {" "}
                  <h3 className="parttwo-card-head">
                    250+
                  </h3>
                  {" "}
                  <h6 className="parttwo-card-headtwo">
                    Hiring Partners
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="place-section-two">
          <div className="sec-two-partone">
            <h1 id="two-partone-headone">
              Proud Moments
            </h1>
            {" "}
            <p className="two-partone-para">
              Introducing our brilliant Trainees who earned placements in leading companies
            </p>
            {" "}
            <div id="studentCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {" "}
                <div className="carousel-item active">
                  <div className="two-partone-one">
                    {" "}
                    <div className="card-width">
                      <div className="two-partone-one-card">
                        <img src="./img/uma.jpg" alt="Uma" />
                        {" "}
                        <h2 className="two-partone-one-head">
                          Uma Chawla
                        </h2>
                        {" "}
                        <h3 className="two-partone-one-headtwo">
                          7.6 LPA
                        </h3>
                        {" "}
                        <p className="two-partone-one-para">
                          Qualwebs
                        </p>
                      </div>
                    </div>
                    {" "}
                    {" "}
                    <div className="card-width">
                      <div className="two-partone-one-card">
                        <img src="./img/Ayush.jpg" alt="Ayush" />
                        {" "}
                        <h2 className="two-partone-one-head">
                          Ayush Tripathi
                        </h2>
                        {" "}
                        <h3 className="two-partone-one-headtwo">
                          6 LPA
                        </h3>
                        {" "}
                        <p className="two-partone-one-para">
                          Tudip Digital
                        </p>
                      </div>
                    </div>
                    {" "}
                    {" "}
                    <div className="card-width">
                      <div className="two-partone-one-card">
                        <img src="./img/payal.jpg" alt="Payal" />
                        {" "}
                        <h2 className="two-partone-one-head">
                          Payal Kewat
                        </h2>
                        {" "}
                        <h3 className="two-partone-one-headtwo">
                          5 LPA
                        </h3>
                        {" "}
                        <p className="two-partone-one-para">
                          Hotwax Systems
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="carousel-item">
                  <div className="two-partone-one">
                    {" "}
                    <div className="card-width">
                      <div className="two-partone-one-card">
                        <img src="./img/kapil.jpeg" alt="Student 6" />
                        {" "}
                        <h2 className="two-partone-one-head">
                          Kapil Partidar
                        </h2>
                        {" "}
                        <h3 className="two-partone-one-headtwo">
                          6.4 LPA
                        </h3>
                        {" "}
                        <p className="two-partone-one-para">
                          Engineer Master
                        </p>
                      </div>
                    </div>
                    {" "}
                    {" "}
                    <div className="card-width">
                      <div className="two-partone-one-card">
                        <img src="./img/siddhdarthjpg.jpg" alt="Student 5" />
                        {" "}
                        <h2 className="two-partone-one-head">
                          Siddharth Yadav
                        </h2>
                        {" "}
                        <h3 className="two-partone-one-headtwo">
                          5.5 LPA
                        </h3>
                        {" "}
                        <p className="two-partone-one-para">
                          Click Suprr
                        </p>
                      </div>
                    </div>
                    {" "}
                    {" "}
                    <div className="card-width">
                      <div className="two-partone-one-card">
                        <img src="img/yougiraj.jpg" alt="Student 4" />
                        {" "}
                        <h2 className="two-partone-one-head">
                          Raghunandan Yogi
                        </h2>
                        {" "}
                        <h3 className="two-partone-one-headtwo">
                          5 LPA
                        </h3>
                        {" "}
                        <p className="two-partone-one-para">
                          Lasso Art Design Software
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="carousel-item">
                  <div className="two-partone-one">
                    {" "}
                    <div className="card-width">
                      <div className="two-partone-one-card">
                        <img src="./img/abhishek.jpg" alt="Student 4" />
                        {" "}
                        <h2 className="two-partone-one-head">
                          {"Abhishek Songara "}
                        </h2>
                        {" "}
                        <h3 className="two-partone-one-headtwo">
                          3.8 LPA
                        </h3>
                        {" "}
                        <p className="two-partone-one-para">
                          {"Infocepts Data & AI"}
                        </p>
                      </div>
                    </div>
                    {" "}
                    {" "}
                    <div className="card-width">
                      <div className="two-partone-one-card">
                        <img src="./img/monica.jpg" alt="Student 5" />
                        {" "}
                        <h2 className="two-partone-one-head">
                          Monica Mishra
                        </h2>
                        {" "}
                        <h3 className="two-partone-one-headtwo">
                          3.6 LPA
                        </h3>
                        {" "}
                        <p className="two-partone-one-para">
                          Click Suprr
                        </p>
                      </div>
                    </div>
                    {" "}
                    {" "}
                    <div className="card-width">
                      <div className="two-partone-one-card">
                        <img src="img/abhishek-chandravanshib.jpg" alt="Student 6" />
                        {" "}
                        <h2 className="two-partone-one-head">
                          Abhishek Chandravanshi
                        </h2>
                        {" "}
                        <h3 className="two-partone-one-headtwo">
                          3.6 LPA
                        </h3>
                        {" "}
                        <p className="two-partone-one-para">
                          Inforag Technology
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="carousel-item">
                  <div className="two-partone-one">
                    {" "}
                    <div className="card-width">
                      <div className="two-partone-one-card">
                        <img src="./img/yuvraj.jpg" alt="Student 4" />
                        {" "}
                        <h2 className="two-partone-one-head">
                          Yuvraj Singh
                        </h2>
                        {" "}
                        <h3 className="two-partone-one-headtwo">
                          3.2 LPA
                        </h3>
                        {" "}
                        <p className="two-partone-one-para">
                          LiuGong
                        </p>
                      </div>
                    </div>
                    {" "}
                    {" "}
                    <div className="card-width">
                      <div className="two-partone-one-card">
                        <img src="./img/vishal lowanshi.jpg" alt="Student 5" />
                        {" "}
                        <h2 className="two-partone-one-head">
                          Vishal Lowanshi
                        </h2>
                        {" "}
                        <h3 className="two-partone-one-headtwo">
                          3.2 LPA
                        </h3>
                        {" "}
                        <p className="two-partone-one-para">
                          {" Doniv Digital Media"}
                        </p>
                      </div>
                    </div>
                    {" "}
                    {" "}
                    <div className="card-width">
                      <div className="two-partone-one-card">
                        <img src="./img/gayatri.jpg" alt="Student 6" />
                        {" "}
                        <h2 className="two-partone-one-head">
                          Gayatri bodade
                        </h2>
                        {" "}
                        <h3 className="two-partone-one-headtwo">
                          2.4 LPA
                        </h3>
                        {" "}
                        <p className="two-partone-one-para">
                          {"Metawish Ai "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="carousel-item">
                  <div className="two-partone-one">
                    {" "}
                    <div className="card-width">
                      <div className="two-partone-one-card">
                        <img src="./img/shubham.jpg" alt="Student 4" />
                        {" "}
                        <h2 className="two-partone-one-head">
                          Shubham Lowanshi
                        </h2>
                        {" "}
                        <h3 className="two-partone-one-headtwo">
                          2 LPA
                        </h3>
                        {" "}
                        <p className="two-partone-one-para">
                          Aplite Info
                        </p>
                      </div>
                    </div>
                    {" "}
                    {" "}
                    <div className="card-width">
                      <div className="two-partone-one-card">
                        <img src="./img/sandeep.jpeg" alt="Student 5" />
                        {" "}
                        <h2 className="two-partone-one-head">
                          Sandeep Raghuwanshi
                        </h2>
                        {" "}
                        <h3 className="two-partone-one-headtwo">
                          3 LPA
                        </h3>
                        {" "}
                        <p className="two-partone-one-para">
                          Inforag Technology
                        </p>
                      </div>
                    </div>
                    {" "}
                    {" "}
                    <div className="card-width">
                      <div className="two-partone-one-card">
                        <img src="./img/aman.jpeg" alt="Student 6" />
                        {" "}
                        <h2 className="two-partone-one-head">
                          Aman Gurjar
                        </h2>
                        {" "}
                        <h3 className="two-partone-one-headtwo">
                          2.5 LPA
                        </h3>
                        {" "}
                        <p className="two-partone-one-para">
                          Intelyhood Technology
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="carousel-item">
                  <div className="two-partone-one">
                    {" "}
                    <div className="card-width">
                      <div className="two-partone-one-card">
                        <img src="./img/stu/Akshay-patel-2.png" alt="Student 4" />
                        {" "}
                        <h2 className="two-partone-one-head">
                          Akshay Patel
                        </h2>
                        {" "}
                        <h5 className="two-partone-one-headtwo">
                          3 LPA
                        </h5>
                        {" "}
                        <p className="two-partone-one-para">
                          Inforag Technology
                        </p>
                      </div>
                    </div>
                    {" "}
                    {" "}
                    <div className="card-width">
                      <div className="two-partone-one-card">
                        <img src="./img/nilesh.jpeg" alt="Student 5" />
                        {" "}
                        <h2 className="two-partone-one-head">
                          Nilesh Chourasiya
                        </h2>
                        {" "}
                        <h3 className="two-partone-one-headtwo">
                          3.5 LPA
                        </h3>
                        {" "}
                        <p className="two-partone-one-para">
                          Inforag Technology
                        </p>
                      </div>
                    </div>
                    {" "}
                    {" "}
                    <div className="card-width">
                      <div className="two-partone-one-card">
                        <img src="./img/sudha1.jpg" alt="Student 6" />
                        {" "}
                        <h2 className="two-partone-one-head">
                          Sudha Patidar
                        </h2>
                        {" "}
                        <h3 className="two-partone-one-headtwo">
                          3 LPA
                        </h3>
                        {" "}
                        <p className="two-partone-one-para">
                          Inforag Technology
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="carousel-item">
                  <div className="two-partone-one">
                    {" "}
                    <div className="card-width">
                      <div className="two-partone-one-card">
                        <img src="./img/stu/deepanshu.jpg" alt="Student 4" />
                        {" "}
                        <h2 className="two-partone-one-head">
                          Deepanshu Rode
                        </h2>
                        {" "}
                        <h3 className="two-partone-one-headtwo">
                          2 LPA
                        </h3>
                        {" "}
                        <p className="two-partone-one-para">
                          Inforag Technology
                        </p>
                      </div>
                    </div>
                    {" "}
                    {" "}
                    <div className="card-width">
                      <div className="two-partone-one-card">
                        <img src="./img/nakul-sir.jpeg" alt="Student 5" />
                        {" "}
                        <h2 className="two-partone-one-head">
                          Nakul Chauhan
                        </h2>
                        {" "}
                        <h3 className="two-partone-one-headtwo">
                          3 LPA
                        </h3>
                        {" "}
                        <p className="two-partone-one-para">
                          Marix Global
                        </p>
                      </div>
                    </div>
                    {" "}
                    {" "}
                    <div className="card-width">
                      <div className="two-partone-one-card">
                        <img src="./img/khushi.jpeg" alt="Student 6" />
                        {" "}
                        <h2 className="two-partone-one-head">
                          Khushi Gurjar
                        </h2>
                        {" "}
                        <h3 className="two-partone-one-headtwo">
                          2 LPA
                        </h3>
                        {" "}
                        <p className="two-partone-one-para">
                          Marix Global
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {" "}
              {" "}
              <button className="carousel-control-prev" type="button" data-bs-target="#studentCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
                {" "}
                <span className="visually-hidden">
                  Previous
                </span>
              </button>
              {" "}
              {" "}
              <button className="carousel-control-next" type="button" data-bs-target="#studentCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
                {" "}
                <span className="visually-hidden">
                  Next
                </span>
              </button>
              {" "}
              {" "}
              <p className="two-partone-para">
                {"And many more bright achievers placed in renowned organizations worldwide "}
              </p>
              {" "}
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="place-section-four">
          <div className="section-four-partone">
            <div className="four-partone-one">
              <div className="four-partone-one-content">
                <h1 id="four-partone-one-content-head">
                  Step-by-Step Placement Process
                </h1>
                {" "}
                <p id="four-partone-one-content-para">
                  Our comprehensive placement training prepares learners to excel with confidence
                </p>
              </div>
              {" "}
              <div className="four-partone-one-cards">
                <div className="four-partone-one-card">
                  <h2 className="four-partone-one-card-no">
                    1
                  </h2>
                  {" "}
                  <h1 className="four-partone-one-card-headone">
                    {"Orientation & Counseling"}
                  </h1>
                  {" "}
                  <p className="four-partone-one-card-para">
                    Introduction to the program with career guidance and goal setting
                  </p>
                </div>
                {" "}
                <div className="four-partone-one-card">
                  <h2 className="four-partone-one-card-no">
                    2
                  </h2>
                  {" "}
                  <h1 className="four-partone-one-card-headone">
                    Technical Training
                  </h1>
                  {" "}
                  <p className="four-partone-one-card-para">
                    In-depth training in IT, Digital Marketing, and hands-on projects
                  </p>
                </div>
                {" "}
                <div className="four-partone-one-card">
                  <h2 className="four-partone-one-card-no">
                    3
                  </h2>
                  {" "}
                  <h1 className="four-partone-one-card-headone">
                    Soft Skills Development
                  </h1>
                  {" "}
                  <p className="four-partone-one-card-para">
                    Communication, teamwork, leadership, and confidence building
                  </p>
                </div>
                {" "}
                <div className="four-partone-one-card">
                  <h2 className="four-partone-one-card-no">
                    4
                  </h2>
                  {" "}
                  <h1 className="four-partone-one-card-headone">
                    Resume Building
                  </h1>
                  {" "}
                  <p className="four-partone-one-card-para">
                    {"Professional resume, LinkedIn optimization & project portfolio"}
                  </p>
                </div>
                {" "}
                <div className="four-partone-one-card">
                  <h2 className="four-partone-one-card-no">
                    5
                  </h2>
                  {" "}
                  <h1 className="four-partone-one-card-headone">
                    {"Aptitude & Mock Tests"}
                  </h1>
                  {" "}
                  <p className="four-partone-one-card-para">
                    Preparation for aptitude, technical, and logical reasoning tests
                  </p>
                </div>
                {" "}
                <div className="four-partone-one-card">
                  <h2 className="four-partone-one-card-no">
                    6
                  </h2>
                  {" "}
                  <h1 className="four-partone-one-card-headone">
                    Mock Interviews
                  </h1>
                  {" "}
                  <p className="four-partone-one-card-para">
                    {"HR & technical mock interviews with personalized feedback"}
                  </p>
                </div>
                {" "}
                <div className="four-partone-one-card">
                  <h2 className="four-partone-one-card-no">
                    7
                  </h2>
                  {" "}
                  <h1 className="four-partone-one-card-headone">
                    Industry Exposure
                  </h1>
                  {" "}
                  <p className="four-partone-one-card-para">
                    {"Workshops, guest lectures & real-world case studies "}
                  </p>
                </div>
                {" "}
                <div className="four-partone-one-card">
                  <h2 className="four-partone-one-card-no">
                    8
                  </h2>
                  {" "}
                  <h1 className="four-partone-one-card-headone">
                    {"Placement Drives & Interviews"}
                  </h1>
                  {" "}
                  <p className="four-partone-one-card-para">
                    {"On-campus and virtual interviews with top recruiters "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {" "}
          <div className="section-four-parttwo">
            <div className="four-parttwo-container">
              <div className="four-parttwo-container-one">
                <h1 id="four-parttwo-container-head">
                  {"Kickstart your career today! "}
                </h1>
                {" "}
                <p id="four-parttwo-container-para">
                  Join our institute and take advantage of excellent placement opportunities and strong industry ties.
                </p>
                {" "}
                <div className="four-parttwo-container-btn">
                  <Link to="/contact-us.html" style={{ textDecoration: "none" }}>
                    <button>
                      Get in touch
                    </button>
                  </Link>
                </div>
              </div>
              {" "}
              <div className="four-parttwo-container-two">
                <p className="four-parttwo-container-two-para">
                  <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"></path>
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <footer>
          <div className="footer-partone">
            {" "}
            <div className="footer-inforag">
              <div className="footer-image">
                <Link to="/">
                  {" "}
                  <img src="./img/cos-white-logo.webp" alt="Code of School Logo" />
                </Link>
              </div>
              {" "}
              <div className="footer-dis">
                <p>
                  Code of School by Inforag Technology empowers future tech innovators through hands-on training in coding, data science, AI, and full-stack development. Our practical, industry-driven curriculum ensures students gain job-ready skills and real-world project experience.
                </p>
              </div>
              {" "}
              <div className="footer-log">
                <div className="logo-box">
                  <img src="./img/course_img/cmmi-removebg-preview-3.png" alt="CMMI" />
                </div>
                {" "}
                <div className="logo-box">
                  <img src="./img/course_img/iso-final-removebg-preview-1.png" alt="ISO" />
                </div>
                {" "}
                <div className="logo-box">
                  <img src="./img/course_img/iso-removebg-preview-1.png" alt="ISO" />
                </div>
                {" "}
                <div className="logo-box">
                  <img src="./img/course_img/msme-removebg-preview.png" alt="MSME" />
                </div>
              </div>
            </div>
            {" "}
            {" "}
            <div className="footer-quicklink">
              <ul>
                <h3 id="heading">
                  Quick Links
                </h3>
                {" "}
                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>
                {" "}
                <li>
                  <Link to="/about-us.html">
                    About Us
                  </Link>
                </li>
                {" "}
                <li>
                  <Link to="/contact-us.html">
                    Courses
                  </Link>
                </li>
                {" "}
                <li>
                  <Link to="/placement.html">
                    Our Placement
                  </Link>
                </li>
                {" "}
                <li>
                  <Link to="/contact-us.html">
                    Contact Us
                  </Link>
                </li>
                {" "}
                <li>
                  <h3>
                    {"Legal & Info"}
                  </h3>
                </li>
                {" "}
                <li>
                  <Link to="/Frequently-asked-questions.html">
                    FAQ
                  </Link>
                </li>
                {" "}
                <li>
                  <Link to="/privacy-policy.html">
                    Privacy Policy
                  </Link>
                </li>
                {" "}
                <li>
                  <Link to="/termsandcondition.html">
                    {"Terms & Conditions"}
                  </Link>
                </li>
              </ul>
            </div>
            {" "}
            {" "}
            <div className="footer-contact">
              <h3 id="heading-three">
                Connect With Us
              </h3>
              {" "}
              <div className="footer-contact-loc">
                <div className="footer-contact-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"></path>
                  </svg>
                </div>
                {" "}
                <div className="footer-contact-location">
                  <a href={"https://www.google.com/maps/place/Code+Of+School/@22.7247256,75.8354956,13z/data=!4m10!1m2!2m1!1scode+of+school+indore!3m6!1s0x3962fd45228527cb:0x7622cac56fecc69d!8m2!3d22.7495525!4d75.8956164!15sChVjb2RlIG9mIHNjaG9vbCBpbmRvcmWSARtzb2Z0d2FyZV90cmFpbmluZ19pbnN0aXR1dGXgAQA!16s%2Fg%2F11xp6pw1j6?entry=ttu&g_ep=EgoyMDI2MDQxMy4wIKXMDSoASAFQAw%3D%3D"} target="_blank">
                    {" "}
                    <b>
                      Head Office (Indore):
                    </b>
                    {" Office No. 421 Fourth Floor, Shagun Tower, Rasoma Square, Vijay Nagar, Ratna Lok Colony, Indore, MP 452010 "}
                  </a>
                </div>
              </div>
              {" "}
              <div className="footer-contact-phoneno">
                <div className="footer-contact-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path>
                  </svg>
                </div>
                {" "}
                <div className="contact-no">
                  <ul className="phone-list">
                    <li>
                      <a href="tel:9977723584">
                        +91 9977-723-584 ,
                      </a>
                    </li>
                    {" "}
                    <li>
                      <a href="tel:9165234695">
                        +91 9165-234-695
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {" "}
              <div className="footer-contact-loc">
                <div className="footer-contact-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"></path>
                  </svg>
                </div>
                {" "}
                <div className="footer-contact-location">
                  <a href={"https://www.google.com/maps/place/SBI+Branch+Seoni+Malwa/@22.456887,77.4745115,17z/data=!3m1!4b1!4m6!3m5!1s0x397d951da2d23db9:0xb53e632f76801d6f!8m2!3d22.456887!4d77.4745115!16s%2Fg%2F11pv83p_36?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"} target="_blank">
                    {" "}
                    <b>
                      Second Branch (Seoni Malwa):
                    </b>
                    {" Main Road, above SBI Main Branch, near Geeta Talkies, Seoni Malwa. MP 461223 "}
                  </a>
                </div>
              </div>
              {" "}
              <div className="footer-contact-phoneno">
                <div className="footer-contact-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path>
                  </svg>
                </div>
                {" "}
                <div className="contact-no">
                  <ul className="phone-list">
                    <li>
                      <a href="tel:6263945418">
                        +91 6263-945-418 ,
                      </a>
                    </li>
                    {" "}
                    <li>
                      <a href="tel:9977723584">
                        {"+91 9977-723-584 "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {" "}
              <div className="footer-contact-loc">
                <div className="footer-contact-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"></path>
                  </svg>
                </div>
                {" "}
                <div className="footer-contact-location">
                  <a href={"https://www.google.com/maps/place/CANARA+BANK+-+INDORE+PALASIA+POINT/@22.7229014,75.8875932,20.5z/data=!4m7!3m6!1s0x3962fd4ea8f55ef5:0xc0faeb545450efb5!4b1!8m2!3d22.7230581!4d75.8878384!16s%2Fg%2F1q62fh6ws?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D"} target="_blank">
                    {" "}
                    <b>
                      Third Branch (Indore):
                    </b>
                    {"Office No.104 , Day Tower , Above Canara bank, Behind Shekhar central , Palasia Square Indore "}
                  </a>
                </div>
              </div>
              {" "}
              <div className="footer-contact-phoneno">
                <div className="footer-contact-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path>
                  </svg>
                </div>
                {" "}
                <div className="contact-no">
                  <ul className="phone-list">
                    <li>
                      <a href="tel:+919977085405">
                        +91 99770-85405 ,
                      </a>
                    </li>
                    {" "}
                    <li>
                      <a href="tel:9977723584">
                        {"+91 9977-723-584 "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {" "}
            {" "}
            <div className="footer-contact">
              <h3 id="heading-two">
                Get in Touch
              </h3>
              {" "}
              <img src="./img/new-map.jpeg" alt="Courses Image" style={{ width: "100%", borderRadius: "8px", marginTop: "1rem" }} />
              {" "}
              <div className="footer-contact-phoneno">
                <div className="footer-contact-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path>
                  </svg>
                </div>
                {" "}
                <div className="contact-no">
                  <ul className="phone-list">
                    <li>
                      <a href="tel:9977723584">
                        {"+91 9977-723-584 "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {" "}
              <div className="footer-contact-mail">
                <div className="footer-contact-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"></path>
                  </svg>
                </div>
                {" "}
                <div className="mail-add">
                  <ul>
                    <li>
                      <a href="mailto:thecodeofschool@gmail.com">
                        thecodeofschool@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {" "}
              <div className="footer-contact-time">
                <div className="footer-contact-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"></path>
                  </svg>
                </div>
                {" "}
                <div className="office">
                  <ul>
                    <li>
                      <b>
                        {"Office Time : "}
                      </b>
                      {"Mon–Sat \u00a010:00 AM – 8:00 PM"}
                    </li>
                    {" "}
                    <li>
                      {"Sunday \u00a0\u00a0Closed"}
                    </li>
                  </ul>
                </div>
              </div>
              {" "}
              {" "}
              <div className="footer-logo">
                <a href="https://www.instagram.com/codeofschool/" target="_blank" title="Instagram">
                  {" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path>
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="https://www.linkedin.com/company/code-of-school" target="_blank" title="LinkedIn">
                  {" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path>
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="https://www.facebook.com/codeofschool" target="_blank" title="Facebook">
                  {" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                  </svg>
                  {" "}
                </a>
                {" "}
                <a href="https://x.com/codeofschool" target="_blank" title="X / Twitter">
                  {" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
                  </svg>
                  {" "}
                </a>
              </div>
            </div>
          </div>
          {" "}
          {" "}
          <div className="footer-offer">
            <div className="footer-courses">
              {" "}
              <div className="footer-left">
                <h4>
                  Courses We Offer Offline
                </h4>
                {" "}
                <div className="footer-coures">
                  <Link to="/digital_marketing.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      Digital Marketing Course |
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/ui_ux_design.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      UI UX Design Course |
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/data_science.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      Data Science Course |
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/video_editing.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      {" Video Editing Course |"}
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/python_full_stack.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      Python Full Stack Course |
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/python.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      Python Programming Course |
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/frontend_with_react.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      {"Frontend Development With React & Angular Course |"}
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/wordpress_development.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      {" WordPress Development Course |"}
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/django.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      Python With Django Course |
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/mern_stack.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      MERN Stack Course |
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/reactnative.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      {" Mobile App Development Course |"}
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/business_development_executive.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      {"Business Development & Sales Training Course |"}
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/dsa.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      {"Data Structures & Algorithms Course |"}
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/data_science.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      Data Science Course |
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/machine_learning.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      Machine Learning Course |
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/reactnative.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      {" Frontend Development Course Online |"}
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/php.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      {" PHP Core & Advanced Course "}
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <a href="" style={{ textDecoration: "none" }}>
                    {" "}
                    <p></p>
                    {" "}
                  </a>
                  {" "}
                  <a href="" style={{ textDecoration: "none" }}>
                    {" "}
                    <p></p>
                    {" "}
                  </a>
                </div>
              </div>
              {" "}
              <hr />
              {" "}
              {" "}
              <div className="footer-right">
                <h4>
                  Courses We Offer Online
                </h4>
                {" "}
                <div className="footer-coures">
                  <Link to="/digital_marketing.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      {" Online Digital Marketing Course |"}
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/ui_ux_design.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      Online UI UX Development Course |
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/data_science.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      {" Online Data Science Course |"}
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/video_editing.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      Online Video Editing Course |
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/python_full_stack.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      {" Online Python Full Stack Course |"}
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/python.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      {" Online Python Programming Course |"}
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/frontend_with_react.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      {" Online React & Angular Course |"}
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/wordpress_development.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      {" Online WordPress Development Course |"}
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/django.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      {" Online Django Web Development Course |"}
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/mern_stack.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      Online MERN Full Stack Course |
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/reactnative.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      {" Online Mobile App Development Course |"}
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/business_development_executive.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      {" Business Development & Sales Training Course |"}
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/dsa.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      {"Data Structures & Algorithms Course |"}
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/data_science.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      Online Data Science Course |
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/machine_learning.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      {" Online ML & Deep Learning Course |"}
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/reactnative.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      {" Frontend Development Course Online |"}
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <Link to="/php.html" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>
                      {" Online PHP Core & Advanced Course "}
                    </p>
                    {" "}
                  </Link>
                  {" "}
                  <a href="" style={{ textDecoration: "none" }}>
                    {" "}
                    <p></p>
                    {" "}
                  </a>
                  {" "}
                  <a href="" style={{ textDecoration: "none" }}>
                    {" "}
                    <p></p>
                    {" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {" "}
          <div className="coures-location">
            <h4>
              JOIN OUR COURSES ONLINE, DESIGNED FOR YOUR CITY
            </h4>
            {" "}
            <p>
              <Link to="/citys/courses_in_delhi.html">
                Delhi
              </Link>
              {" | "}
              <Link to="/citys/courses_in_bhopal.html">
                Bhopal
              </Link>
              {" | "}
              <Link to="/citys/courses_in_pune.html">
                Pune
              </Link>
              {" | "}
              <Link to="/citys/courses_in_mumbai.html">
                Mumbai
              </Link>
              {" | "}
              <Link to="/citys/courses_in_lucknow.html">
                Lucknow
              </Link>
              {" | "}
              <Link to="/citys/courses_in_ahmedabad.html">
                Ahmedabad
              </Link>
              {" | "}
              <Link to="/citys/courses_in_dewas.html">
                Dewas
              </Link>
              {" | "}
              <Link to="/citys/courses_in_indore.html">
                Indore
              </Link>
              {" | "}
              <Link to="/citys/courses_in_ujjain.html">
                Ujjain
              </Link>
              {" | "}
              <Link to="/citys/courses_in_harda.html">
                Harda
              </Link>
              {" | "}
              <Link to="/citys/courses_in_mhow.html">
                Mhow
              </Link>
              {" | "}
              <Link to="/citys/courses_in_hoshangabad.html">
                Hoshangabad
              </Link>
              {" | "}
              <Link to="/citys/courses_in_seoni_malwa.html">
                Seoni Malwa
              </Link>
              {" | "}
              <Link to="/citys/courses_in_sehore.html">
                Sehore
              </Link>
              {" | "}
              <Link to="/citys/courses_in_sagar.html">
                Sagar
              </Link>
              {" | "}
              <Link to="/citys/courses_in_dhar.html">
                Dhar
              </Link>
              {" |"}
              <br />
              {" "}
              <Link to="/citys/courses_in_jabalpur.html">
                Jabalpur
              </Link>
              {" | "}
              <Link to="/citys/courses_in_satna.html">
                Satna
              </Link>
              {" | "}
              <Link to="/citys/courses_in_gwalior.html">
                Gwalior
              </Link>
              {" | "}
              <Link to="/citys/courses_in_chennai.html">
                Chennai
              </Link>
              {" | "}
              <Link to="/citys/courses_in_udaipur.html">
                Udaipur
              </Link>
              {" | "}
              <Link to="/citys/courses_in_surat.html">
                Surat
              </Link>
              {" | "}
              <Link to="/citys/courses_in_jaipur.html">
                Jaipur
              </Link>
              {" | "}
              <Link to="/citys/courses_in_chandigarh.html">
                Chandigarh
              </Link>
              {" | "}
              <Link to="/citys/courses_in_nagpur.html">
                Nagpur
              </Link>
              {" | "}
              <Link to="/citys/courses_in_noida.html">
                Noida
              </Link>
              {" | "}
              <Link to="/citys/courses_in_kanpur.html">
                Kanpur
              </Link>
              {" | "}
              <Link to="/citys/courses_in_kota.html">
                Kota
              </Link>
              {" |"}
              <br />
              {" "}
              <Link to="/citys/courses_in_varanasi.html">
                Varanasi
              </Link>
              {" | "}
              <Link to="/citys/courses_in_gurgaon.html">
                Gurgaon
              </Link>
              {" | "}
              <Link to="/citys/courses_in_patna.html">
                Patna
              </Link>
              {" | "}
              <Link to="/citys/courses_in_amritsar.html">
                Amritsar
              </Link>
              {" | "}
              <Link to="/citys/courses_in_thane.html">
                Thane
              </Link>
              {" | "}
              <Link to="/citys/courses_in_agra.html">
                Agra
              </Link>
              {" | "}
              <Link to="/citys/courses_in_srinagar.html">
                Srinagar
              </Link>
              {" | "}
              <Link to="/citys/courses_in_navi_mumbai.html">
                Navi Mumbai
              </Link>
              {" | "}
              <Link to="/citys/courses_in_vadodara.html">
                Vadodara
              </Link>
              {" | "}
              <Link to="/citys/courses_in_nashik.html">
                Nashik
              </Link>
            </p>
          </div>
        </footer>
      </div>
      {" "}
      <hr />
      {" "}
      {" "}
      <div className="footer-parttwo">
        <h3>
          {"Copyright © 2025 "}
          <a href="https://inforag.com/" target="_blank">
            Inforag Technology
          </a>
          {" All rights reserved"}
        </h3>
      </div>
      {" "}
      {" "}
      {" "}
    </PageFrame>
  );
}
