import PageFrame from "@/runtime/PageFrame.jsx";
import { Link } from "react-router-dom";

// Converted from index.html
const styles = [{ href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" }, { href: "/home_location.css" }, { href: "/header-footer.css" }, { href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" }, { href: "/style.css" }, { href: "/Style2.css" }, { css: "\n        * {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  padding-top: 20px;\n  overflow-x: hidden;\n}\n        .fs-img {\n            width: 100%;\n            display: flex;\n            justify-content: center;\n        }\n\n        .fs-img-wrap {\n            width: 100%;\n            max-width: 500px;\n            /* control max size */\n        }\n\n        .fs-img-wrap img {\n            width: 100%;\n            height: auto;\n            display: block;\n            object-fit: contain;\n            /* prevents cut */\n            border-radius: 10px;\n        }\n\n        .fs-img-wrap img {\n            width: 100%;\n            /* height: 370px;       fixed height */\n            object-fit: contain;\n            /* show full image */\n        }\n\n        @media (max-width: 768px) {\n            .fs-img-wrap {\n                max-width: 100%;\n            }\n\n            .fs-img-wrap img {\n                height: auto;\n            }\n        }\n\n        /* Home page student review css code */\n        /* ════════════════════════════════════════════════════════════════════════════\nI'll add the missing :root variables, the .section-sec wrapper rule, and update borders to white for the container and the boxes inside it.\ncss/* ════════════════════════════════════════════════════════════════════════════\n   ROOT VARIABLES\n   ════════════════════════════════════════════════════════════════════════════ */\n:root {\n  --border: rgba(255, 255, 255, 0.35);\n  --radius: 16px;\n  --shadow: 0 12px 28px rgba(0, 0, 0, 0.35);\n  --gold: #f5c518;\n  --ink-m: #d7dcf0;\n  --ink-l: #a8aecb;\n  --cream: rgba(255, 255, 255, 0.06);\n  --indigo: #a78bfa;\n  --indigo-xl: rgba(167, 139, 250, 0.18);\n  --display: 'Segoe UI', Arial, sans-serif;\n}\n\n/* ════════════════════════════════════════════════════════════════════════════\n   SECTION WRAPPER\n   ════════════════════════════════════════════════════════════════════════════ */\n.section-sec {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0px 0;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n/* ════════════════════════════════════════════════════════════════════════════\n   SECTION CARDS\n   ════════════════════════════════════════════════════════════════════════════ */\n.section-card {\n  background: radial-gradient(circle, rgba(110, 73, 184, 1) 0%, rgba(0, 0, 0, 1) 42%);\n  border: 1px solid #ffffff;\n  border-radius: var(--radius);\n  padding: 1.75rem;\n  margin-bottom: 1.25rem;\n  box-shadow: var(--shadow);\n  width: 91%;\n  box-sizing: border-box;\n  max-width: 100%;\n  overflow: hidden;\n}\n.section-card h2 {\n  font-size: 21px;\n  font-weight: 800;\n  letter-spacing: -.3px;\n  margin-bottom: 1.1rem;\n  color: #fffbeb;\n}\n\n/* ════════════════════════════════════════════════════════════════════════════\n   REVIEWS\n   ════════════════════════════════════════════════════════════════════════════ */\n.rating-summary { display: flex; gap: 2rem; align-items: center; margin-bottom: 2rem; flex-wrap: wrap; }\n.rating-big {\n  text-align: center; flex-shrink: 0;\n  padding: 1.25rem 1.75rem;\n  background: linear-gradient(135deg, #fffbeb, #e7b214);\n  border-radius: 12px; border: 1px solid #ffffff;\n}\n.rating-num   { font-family: var(--display); font-size: 52px; font-weight: 800; color: var(--gold); line-height: 1; }\n.stars-row    { font-size: 18px; color: var(--gold); letter-spacing: 2px; margin: .3rem 0; }\n.rating-count { font-size: 12px; color:rgb(18, 18, 44); }\n.rating-bars  { flex: 1; min-width: 180px; }\n.rating-bar-row { display: flex; align-items: center; gap: .7rem; margin-bottom: .5rem; }\n.bar-stars    { font-size: 12px; color:rgb(251, 251, 251); min-width: 28px; text-align: right; }\n.bar-track    { flex: 1; height: 8px; background: var(--border); border-radius: 4px; overflow: hidden; }\n.bar-fill     { height: 100%; background: var(--gold); border-radius: 4px; transition: width .8s ease; }\n.bar-pct      { font-size: 12px; color:rgb(245, 241, 241); min-width: 30px; }\n\n.reviews-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }\n.review-card {\n  background: var(--cream);\n  border: 1px solid #ffffff;\n  border-radius: 10px;\n  padding: 1.1rem;\n  min-width: 0;\n}\n.review-top    { display: flex; align-items: center; gap: .7rem; margin-bottom: .7rem; }\n.review-avatar {\n  width: 36px; height: 36px; border-radius: 50%;\n  background: var(--indigo-xl); color: var(--indigo);\n  display: flex; align-items: center; justify-content: center;\n  font-weight: 800; font-size: 13px; flex-shrink: 0;\n}\n.review-name  { font-weight: 700; font-size: 14px; color: wheat; }\n.review-stars { font-size: 12px; color: var(--gold); letter-spacing: 1px; }\n.review-date  { font-size: 11px; color: var(--ink-l); margin-top: 1px; }\n.review-text  { font-size: 13px; color: var(--ink-m); line-height: 1.7; word-wrap: break-word; }\n.helpful      { font-size: 11px; color: var(--ink-l); margin-top: .65rem; cursor: pointer; }\n.helpful span { color: var(--indigo); font-weight: 600; }\n\n/* ════════════════════════════════════════════════════════════════════════════\n   RESPONSIVE — TABLET\n   ════════════════════════════════════════════════════════════════════════════ */\n@media (max-width: 768px) {\n  .section-card {\n    width: 94%;\n    padding: 1.5rem;\n  }\n  .reviews-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n/* ════════════════════════════════════════════════════════════════════════════\n   RESPONSIVE — MOBILE\n   ════════════════════════════════════════════════════════════════════════════ */\n@media (max-width: 480px) {\n  .section-card {\n    width: 100%;\n    padding: 1.1rem;\n    border-radius: 14px;\n  }\n  .section-card h2 {\n    font-size: 18px;\n  }\n\n  .rating-summary {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .rating-big {\n    width: 100%;\n    box-sizing: border-box;\n    padding: 1rem;\n  }\n  .rating-num { font-size: 42px; }\n  .rating-bars { min-width: 0; width: 100%; }\n  .bar-stars { min-width: 24px; font-size: 11px; }\n\n  .reviews-grid { gap: .85rem; }\n  .review-card { padding: 1rem; }\n  .review-name { font-size: 13px; }\n  .review-text { font-size: 12.5px; }\n}\n    " }];
const scripts = [{ src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" }, { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" }, { src: "/script.js", names: {"fn":["showCourseList"],"vars":[],"lex":["faqs","cards","observer"],"consts":["faqs","cards","observer"]} }];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>Code Of School|Best Digital Marketing|Full Stack Course Indore</title>
          <meta name="description" content="Join Code Of School for the Best Digital Marketing Course and Full Stack Development Course in Indore. Learn from experts with live projects and career support." />
          <meta name="robots" content="index,follow" />
          <meta name="author" content="Ritendra Gour" />
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content="About Code of School, Programming training institute in Indore, Digital Marketing institute Indore, Coding classes Indore, Learn Java Python MERN React WordPress, Code of School About Page" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={"About Code of School — Leading Programming & Digital Marketing Training Institute in Indore"} />
          <meta property="og:description" content={"Discover Code of School’s mission and vision. We train students in programming, full-stack development, digital marketing, and more with live mentorship & certifications."} />
          <meta property="og:url" content="https://codeofschool.com/about-us" />
          <meta property="og:site_name" content="Code of School" />
          <meta property="og:image" content="https://codeofschool.com/img/cos-white-logo2.png" />
          <meta property="og:image:alt" content={"About Code of School — Best Programming & Digital Marketing Training Institute"} />
          <link rel="canonical" href="https://codeofschool.com/" />
          <meta name="twitter:card" content="https://codeofschool.com/img/cos-white-logo2.webp" />
          <meta name="twitter:site" content="@codeofschool" />
          <meta name="twitter:creator" content="Ritendra gour" />
          <meta name="twitter:title" content={"About Code of School — Best Programming & Digital Marketing Training Institute in Indore"} />
          <meta name="twitter:description" content={"Code Of School par shuru kare coding aur web \ndevelopment seekhna — Beginner friendly courses and tutorials."} />
          <meta name="twitter:image" content="https://codeofschool.com/img/cos-white-logo2.webp" />
          <link rel="icon" href="./img/cos-white-logo2.png" type="image/webp" />
          <meta itemProp="name" content="Code of School" />
          <meta itemProp="description" content="Code of School, Indore – your gateway to a successful tech career. Master in-demand skills like Java, Python, MERN, React, DSA, WordPress, and Digital Marketing with expert mentors, live projects, and job-oriented training." />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{ \n  \"@context\": \"https://schema.org\", \n  \"@type\": \"CollectionPage\", \n  \"name\": \"Courses - Code Of School\", \n  \"url\": \"https://codeofschool.com/courses\", \n  \"description\": \"Code Of School par coding, web development aur full stack development ke \nbeginner-friendly courses available hain.\", \n  \"about\": [ \n    \"HTML Course\", \n    \"CSS Course\", \n    \"JavaScript Course\", \n    \"React Course\", \n    \"Node.js Course\", \n    \"Python Course\", \n    \"Full Stack Development\" \n  ], \n  \"publisher\": { \n    \"@type\": \"Organization\", \n    \"name\": \"Code Of School\", \n    \"logo\": \"https://codeofschool.com/img/cos-white-logo2.png\", \n    \"url\": \"https://codeofschool.com/\" \n  } \n}" }} />
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
        {" "}
        <section className="hero-section">
          <div className="home-part-one">
            <div className="content-first-home-page">
              <p id="home-para-one">
                Training 20,000+ Students to Succeed in Tech
              </p>
            </div>
            {" "}
            <div className="home-head-one-content">
              <h1 id="home-head-one">
                {"Bridging the Gap Between Learning and Industry in "}
                <span>
                  {" Digital Marketing "}
                </span>
                {" & "}
                <span>
                  {" Full Stack Development "}
                </span>
              </h1>
            </div>
            {" "}
            <div>
              <p id="home-para-two">
                {"Welcome to Code Of School. We provide Digital Marketing and Full Stack Development courses through practical training, real-world projects, and career-focused guidance from experienced industry professionals. "}
              </p>
            </div>
            {" "}
            <a href="./contact-us.html" target="_blank">
              {" "}
              <button id="home-button-one">
                {" Get Started\u00a0 "}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"></path>
                </svg>
              </button>
              {" "}
            </a>
          </div>
        </section>
        {" "}
        <a href="https://wa.me/919977723584" className="whatsapp-float" id="whatsappButton" target="_blank">
          {" "}
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Chat" />
          {" "}
          <span className="notification-dot"></span>
          {" "}
        </a>
        {" "}
        {" "}
        <div className="fs-header">
          <div className="fs-eyebrow">
            <span className="fs-eyebrow-dot"></span>
            {" Why Choose Code of School "}
          </div>
          {" "}
          <h2>
            We don't just teach skills —
            <br />
            <em>
              we build careers.
            </em>
          </h2>
          {" "}
          <p>
            {" Expert mentorship, hands-on projects, and industry-relevant training designed to prepare you for real-world success and long-term career growth in IT and digital marketing. "}
          </p>
          {" "}
        </div>
        {" "}
        <div className="stats-container">
          <div className="stat-box">
            <h2>
              100+ Hrs
            </h2>
            {" "}
            <p>
              Hands on Learning
            </p>
          </div>
          {" "}
          <div className="stat-box">
            <h2>
              Live Projects
            </h2>
            {" "}
            <p>
              Hands-on practical learning
            </p>
          </div>
          {" "}
          <div className="stat-box">
            <h2>
              50+ Hrs
            </h2>
            {" "}
            <p>
              Practical Assignments
            </p>
          </div>
          {" "}
          <div className="stat-box">
            <h2>
              Lifetime
            </h2>
            {" "}
            <p>
              Community Support
            </p>
          </div>
          {" "}
          <div className="stat-box">
            <h2>
              8+
            </h2>
            {" "}
            <p>
              Experienced Faculties
            </p>
          </div>
          {" "}
          <div className="stat-box">
            <h2>
              300+
            </h2>
            {" "}
            <p>
              Learners Trained Each Year
            </p>
          </div>
        </div>
        {" "}
        {" "}
        {" "}
        {" "}
        <section className="gallery">
          <div className="left">
            <div className="left-paras">
              <p className="gallery-left-paraone">
                {"Features & Benefits"}
              </p>
            </div>
            {" "}
            <h1>
              Where Learning Translates Into Opportunity
            </h1>
            {" "}
            <p className="gallery-left-para">
              {" Develop in-demand Digital Marketing and Full Stack Development skills through expert-led training, hands-on projects, and a curriculum shaped by industry needs. "}
            </p>
            {" "}
            <div className="left-button">
              <Link to="/course.html">
                <button>
                  See All Features
                </button>
                {" "}
              </Link>
            </div>
          </div>
          {" "}
          <div className="right">
            <div className="edit-right">
              <div className="gallery-right-content">
                <h2 className="gallery-right-headone">
                  20+
                </h2>
                {" "}
                <h3 className="gallery-right-headthree">
                  Expert Mentors
                </h3>
                {" "}
                <p className="gallery-right-para">
                  {" Learn Digital Marketing and Full Stack Development from experienced industry professionals through hands-on guidance and personalized mentorship."}
                </p>
              </div>
              {" "}
              <div className="gallery-right-content">
                <h2 className="gallery-right-headone">
                  5+
                </h2>
                {" "}
                <h3 className="gallery-right-headthree">
                  Years of Expertise
                </h3>
                {" "}
                <p className="gallery-right-para">
                  {" Delivering quality Digital Marketing and Full Stack Development training aligned with current industry standards and employer expectations. "}
                </p>
              </div>
            </div>
            {" "}
            <div className="edit-right">
              <div className="gallery-right-content">
                <h2 className="gallery-right-headone">
                  20K+
                </h2>
                {" "}
                <h3 className="gallery-right-headthree">
                  Learners Trained
                </h3>
                {" "}
                <p className="gallery-right-para">
                  {" Thousands of students have enhanced their careers through our expert-led Digital Marketing and Full Stack Development programs."}
                </p>
              </div>
              {" "}
              <div className="gallery-right-content">
                <h2 className="gallery-right-headone">
                  15K+
                </h2>
                {" "}
                <h3 className="gallery-right-headthree">
                  Career Success Stories
                </h3>
                {" "}
                <p className="gallery-right-para">
                  {" From beginners to professionals, our Digital Marketing and Full Stack Development courses have helped learners achieve their career goals."}
                </p>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <div className="slider">
          <div className="slide-track">
            <div className="slide-item">
              Digital Marketing Course
            </div>
            {" "}
            <div className="slide-item">
              Web Development
            </div>
            {" "}
            <div className="slide-item">
              MERN Stack
            </div>
            {" "}
            <div className="slide-item">
              React JS
            </div>
            {" "}
            <div className="slide-item">
              Python
            </div>
            {" "}
            <div className="slide-item">
              Data Science
            </div>
            {" "}
            {" "}
            <div className="slide-item">
              Digital Marketing Course
            </div>
            {" "}
            <div className="slide-item">
              Web Development
            </div>
            {" "}
            <div className="slide-item">
              MERN Stack
            </div>
            {" "}
            <div className="slide-item">
              React JS
            </div>
            {" "}
            <div className="slide-item">
              Python
            </div>
            {" "}
            <div className="slide-item">
              Data Science
            </div>
            {" "}
            <div className="slide-item">
              Canva
            </div>
            {" "}
            <div className="slide-item">
              Email Marketing
            </div>
            {" "}
            <div className="slide-item">
              Scocial Media Marketing
            </div>
            {" "}
            <div className="slide-item">
              Performance Marketing
            </div>
            {" "}
            <div className="slide-item">
              Content Marketing
            </div>
            {" "}
            <div className="slide-item">
              Graphic Designing
            </div>
            {" "}
            <div className="slide-item">
              AI Automation In Digital Marketing
            </div>
          </div>
        </div>
        {" "}
        {" "}
        {" "}
        <section className="learning-format-section">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title">
                Choose Your Career Path
              </h2>
              {" "}
              <p className="section-subtitle">
                Flexible learning options designed for your goals.
              </p>
            </div>
            {" "}
            <div className="learning-format-row">
              {" "}
              <div className="learning-format-col">
                <div className="learning-format-card">
                  <img src="./img/course_img/classroom_1.JPG" alt="Offline Classroom" className="card-img" />
                  {" "}
                  <div className="card-content">
                    <h3 className="card-title">
                      {"Digital Marketing Diploma "}
                    </h3>
                    {" "}
                    <div className="meta-info">
                      <div>
                        <i className="fas fa-clock"></i>
                        {" 3 MONTHS"}
                      </div>
                      {" "}
                      <div>
                        <i className="fas fa-chalkboard-teacher"></i>
                        {" MODE - HYBRID CLASSES (OFFLINE + ONLINE)"}
                      </div>
                    </div>
                    {" "}
                    <p className="description">
                      {" Learn Digital Marketing through hands-on classroom training, live campaign execution, expert mentorship, and collaborative workshops. Perfect for students and professionals seeking practical, industry-focused learning. "}
                    </p>
                    {" "}
                    <ul className="features-list">
                      <li>
                        {" 3 Months Internship Free"}
                      </li>
                      {" "}
                      <li>
                        Get 100% Practical Training
                      </li>
                      {" "}
                      <li>
                        Internship with Live Marketing Projects
                      </li>
                      {" "}
                      <li>
                        Get 100% Job Placement Assistance
                      </li>
                      {" "}
                      <li>
                        {" Work on Real Business Campaigns"}
                      </li>
                    </ul>
                    {" "}
                    <Link to="/digital_marketing.html" className="view-more-btn">
                      {"View More "}
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {" "}
              {" "}
              <div className="learning-format-col">
                <div className="learning-format-card">
                  <img src="./img/course_img/classroom_2.JPG" alt="Online Class" className="card-img" />
                  {" "}
                  <div className="card-content">
                    <h3 className="card-title">
                      Fullstack Developer Course
                    </h3>
                    {" "}
                    <div className="meta-info">
                      <div>
                        <i className="fas fa-clock"></i>
                        {" 6 MONTHS"}
                      </div>
                      {" "}
                      <div>
                        <i className="fas fa-video"></i>
                        {" MODE - HYBRID CLASSES (OFFLINE + ONLINE)"}
                      </div>
                    </div>
                    {" "}
                    <p className="description">
                      {" Build real-world web development skills through classroom-based Full Stack Development training, live coding sessions, expert mentorship, and project-driven learning. Ideal for aspiring developers seeking practical experience. "}
                    </p>
                    {" "}
                    <ul className="features-list">
                      <li>
                        3 months intership free
                      </li>
                      {" "}
                      <li>
                        Get 100% Practical Training
                      </li>
                      {" "}
                      <li>
                        {" Internship with Live Projects"}
                      </li>
                      {" "}
                      <li>
                        {" Get 100% Job Placement Assistance"}
                      </li>
                      {" "}
                      <li>
                        {" Build Real-World Web Applications"}
                      </li>
                    </ul>
                    {" "}
                    <Link to="/python.html" className="view-more-btn">
                      {"View More "}
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        {" "}
        {" "}
        {" "}
        {" "}
        <section className="gallery-section">
          <h2>
            Tools You Will Learn
          </h2>
          {" "}
          {" "}
          <div className="tool-category">
            <h3>
              Digital Marketing Tools
            </h3>
            {" "}
            <div className="slider">
              <div className="slide-track track1">
                {" "}
                <div className="slide-group">
                  <div className="slide-item">
                    <img src="img/attachments1/analitics.png" alt="Best digital marketing course in Indore" />
                  </div>
                  {" "}
                  <div className="slide-item">
                    <img src="img/attachments1/get response.png" alt="Best digital marketing course in Indore" />
                  </div>
                  {" "}
                  <div className="slide-item">
                    <img src="img/attachments1/google trends.png" alt="Best digital marketing course in Indore" />
                  </div>
                  {" "}
                  <div className="slide-item">
                    <img src="img/attachments1/mailchimp.png" alt="Best digital marketing course in Indore" />
                  </div>
                  {" "}
                  <div className="slide-item">
                    <img src="img/attachments1/semrush.png" alt="Best digital marketing course in Indore" />
                  </div>
                  {" "}
                  <div className="slide-item">
                    <img src="img/attachments1/wordpress.png" alt="Best digital marketing course in Indore" />
                  </div>
                </div>
                {" "}
                {" "}
                <div className="slide-group">
                  <div className="slide-item">
                    <img src="img/attachments1/analitics.png" alt="Best digital marketing course in Indore" />
                  </div>
                  {" "}
                  <div className="slide-item">
                    <img src="img/attachments1/get response.png" alt="Best digital marketing course in Indore" />
                  </div>
                  {" "}
                  <div className="slide-item">
                    <img src="img/attachments1/google ads transperency center.png" alt="Best full-stack course in Indore" />
                  </div>
                  {" "}
                  <div className="slide-item">
                    <img src="img/attachments1/google trends.png" alt="Best digital marketing course in Indore" />
                  </div>
                  {" "}
                  <div className="slide-item">
                    <img src="img/attachments1/mailchimp.png" alt="Best digital marketing course in Indore" />
                  </div>
                  {" "}
                  <div className="slide-item">
                    <img src="img/attachments1/semrush.png" alt="Best digital marketing course in Indore" />
                  </div>
                  {" "}
                  <div className="slide-item">
                    <img src="img/attachments1/wordpress.png" alt="Best digital marketing course in Indore" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {" "}
          {" "}
          <div className="tool-category">
            <h3>
              Full Stack Development Languages And Framwork
            </h3>
            {" "}
            <div className="slider">
              <div className="slide-track track2">
                {" "}
                <div className="slide-group">
                  <div className="slide-item">
                    <img src="img/fullstack_images/angular.png" alt="Best full-stack course in Indore" />
                  </div>
                  {" "}
                  <div className="slide-item">
                    <img src="img/fullstack_images/cplus.png" alt="Best full-stack course in Indore" />
                  </div>
                  {" "}
                  <div className="slide-item">
                    <img src="img/fullstack_images/data_analytics.jpg" alt="Best full-stack course in Indore" />
                  </div>
                  {" "}
                  <div className="slide-item">
                    <img src="img/fullstack_images/mern.jpeg" alt="Best full-stack course in Indore" />
                  </div>
                  {" "}
                  <div className="slide-item">
                    <img src="img/fullstack_images/python.png" alt="Best full-stack course in Indore" />
                  </div>
                  {" "}
                  <div className="slide-item">
                    <img src="img/fullstack_images/git.png" alt="Best full-stack course in Indore" />
                  </div>
                </div>
                {" "}
                {" "}
                <div className="slide-group">
                  <div className="slide-item">
                    <img src="img/fullstack_images/angular.png" alt="Best full-stack course in Indore" />
                  </div>
                  {" "}
                  <div className="slide-item">
                    <img src="img/fullstack_images/cplus.png" alt="Best full-stack course in Indore" />
                  </div>
                  {" "}
                  <div className="slide-item">
                    <img src="img/fullstack_images/data_analytics.jpg" alt="Best full-stack course in Indore" />
                  </div>
                  {" "}
                  <div className="slide-item">
                    <img src="img/fullstack_images/mern.jpeg" alt="Best full-stack course in Indore" />
                  </div>
                  {" "}
                  <div className="slide-item">
                    <img src="img/fullstack_images/python.png" alt="Best full-stack course in Indore" />
                  </div>
                  {" "}
                  <div className="slide-item">
                    <img src="img/fullstack_images/git.png" alt="Best full-stack course in Indore" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="brochure-section">
          <div className="brochure-container">
            {" "}
            <div className="brochure-text">
              <h2 className="program-heading">
                {" Get a complete overview of the program. "}
              </h2>
              {" "}
              <p>
                {" Browse the curriculum, hands-on projects, certifications, and career opportunities in our brochure. "}
              </p>
            </div>
            {" "}
            {" "}
            <div className="brochure-btn">
              <a href="Digital_Marketing_Course_Content_Code_of_School.pdf" download="">
                {" "}
                <button>
                  Digital Marketing Brochure
                </button>
                {" "}
              </a>
              {" "}
              <a href="MERN_Development_Course.pdf" download="">
                {" "}
                <button>
                  Fullstack Developer Brochure
                </button>
                {" "}
              </a>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="highlights-section">
          <div className="highlights-header">
            <span className="highlights-badge">
              {" "}
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"></path>
              </svg>
              {" COURSE HIGHLIGHTS "}
            </span>
            {" "}
            <h2 className="highlights-title">
              {" Everything You Need to Become"}
              <br />
              {" "}
              <span className="accent">
                a Digital Marketing Professional
              </span>
            </h2>
            {" "}
            <p className="highlights-subtitle">
              {" Gain practical skills, industry certifications, live project experience, and career support through a program designed to make you job-ready. "}
            </p>
          </div>
          {" "}
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11l18-5v12L3 13v-2z"></path>
                  <path d="M11.6 16.8a3 3 0 11-5.8-1.6"></path>
                </svg>
              </div>
              {" "}
              <h3 className="card-title">
                Work on Real
                <br />
                Business Campaigns
              </h3>
              {" "}
              <div className="card-divider"></div>
              {" "}
              <p className="card-text">
                Get hands-on experience by working on live business campaigns.
              </p>
            </div>
            {" "}
            <div className="highlight-card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 7H3a1 1 0 00-1 1v9a1 1 0 001 1h18a1 1 0 001-1V8a1 1 0 00-1-1z"></path>
                  <path d="M16 12h3"></path>
                  <path d="M2 10h20"></path>
                </svg>
              </div>
              {" "}
              <h3 className="card-title">
                {"Nominal Fees &"}
                <br />
                Easy Installment Options
              </h3>
              {" "}
              <div className="card-divider"></div>
              {" "}
              <p className="card-text">
                Affordable fee structure with flexible installment options for everyone.
              </p>
            </div>
            {" "}
            <div className="highlight-card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 010 7.75"></path>
                </svg>
              </div>
              {" "}
              <h3 className="card-title">
                4900+ Students
                <br />
                Trained
              </h3>
              {" "}
              <div className="card-divider"></div>
              {" "}
              <p className="card-text">
                Join a community of 4900+ successfully trained students.
              </p>
            </div>
            {" "}
            <div className="highlight-card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"></path>
                  <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"></path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>
              </div>
              {" "}
              <h3 className="card-title">
                {"Freelancing &"}
                <br />
                Career Support
              </h3>
              {" "}
              <div className="card-divider"></div>
              {" "}
              <p className="card-text">
                Get complete support to build your freelance career or land your dream job.
              </p>
            </div>
            {" "}
            <div className="highlight-card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 12v9H4v-9"></path>
                  <path d="M2 7h20v5H2z"></path>
                  <path d="M12 22V7"></path>
                  <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"></path>
                  <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"></path>
                </svg>
              </div>
              {" "}
              <h3 className="card-title">
                {"Free Premium Tools &"}
                <br />
                Learning Resources
              </h3>
              {" "}
              <div className="card-divider"></div>
              {" "}
              <p className="card-text">
                Access premium tools and resources completely free of cost.
              </p>
            </div>
            {" "}
            <div className="highlight-card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              {" "}
              <h3 className="card-title">
                Digital Marketing
                <br />
                (Training + Internship)
              </h3>
              {" "}
              <div className="card-divider"></div>
              {" "}
              <p className="card-text">
                Comprehensive training with internship to give you real-world exposure.
              </p>
            </div>
            {" "}
            <div className="highlight-card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"></circle>
                  <path d="M9 14.5L7 22l5-3 5 3-2-7.5"></path>
                </svg>
              </div>
              {" "}
              <h3 className="card-title">
                Institute Certified
                <br />
                by MSME
              </h3>
              {" "}
              <div className="card-divider"></div>
              {" "}
              <p className="card-text">
                Proudly certified by MSME for quality training and excellence.
              </p>
            </div>
            {" "}
            <div className="highlight-card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"></circle>
                  <path d="M9 14.5L7 22l5-3 5 3-2-7.5"></path>
                </svg>
              </div>
              {" "}
              <h3 className="card-title">
                Institute Certified
                <br />
                by CCERT
              </h3>
              {" "}
              <div className="card-divider"></div>
              {" "}
              <p className="card-text">
                Certified by CCERT for industry-aligned and trusted education.
              </p>
            </div>
            {" "}
            <div className="highlight-card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18"></path>
                  <path d="M5 21V7l7-4 7 4v14"></path>
                  <path d="M9 9h1M9 13h1M14 9h1M14 13h1M10 21v-4h4v4"></path>
                </svg>
              </div>
              {" "}
              <h3 className="card-title">
                Industry-Oriented
                <br />
                Training Program
              </h3>
              {" "}
              <div className="card-divider"></div>
              {" "}
              <p className="card-text">
                Learn industry-relevant skills through a practical and updated curriculum.
              </p>
            </div>
            {" "}
            <div className="highlight-card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4"></circle>
                  <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7"></path>
                  <path d="M9 5l1 1 1-2M15 5l-1 1-1-2"></path>
                </svg>
              </div>
              {" "}
              <h3 className="card-title">
                Learn from Experienced
                <br />
                Digital Marketers
              </h3>
              {" "}
              <div className="card-divider"></div>
              {" "}
              <p className="card-text">
                Get trained by experts with years of real-world industry experience.
              </p>
            </div>
            {" "}
            <div className="highlight-card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"></path>
                </svg>
              </div>
              {" "}
              <h3 className="card-title">
                Lifetime Access to
                <br />
                Recorded Lectures
              </h3>
              {" "}
              <div className="card-divider"></div>
              {" "}
              <p className="card-text">
                Access all recorded lectures anytime, anywhere for lifetime.
              </p>
            </div>
            {" "}
            <div className="highlight-card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                  <path d="M16 2v4M8 2v4M3 10h18"></path>
                </svg>
              </div>
              {" "}
              <h3 className="card-title">
                1 Year Unlimited
                <br />
                Class Subscription
              </h3>
              {" "}
              <div className="card-divider"></div>
              {" "}
              <p className="card-text">
                Attend unlimited live classes for 1 year without any additional charges.
              </p>
            </div>
            {" "}
            <div className="highlight-card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="M21 21l-4.35-4.35"></path>
                </svg>
              </div>
              {" "}
              <h3 className="card-title">
                Master SEO (Search
                <br />
                Engine Optimization)
              </h3>
              {" "}
              <div className="card-divider"></div>
              {" "}
              <p className="card-text">
                Learn SEO from basics to advanced and rank websites on search engines.
              </p>
            </div>
            {" "}
            <div className="highlight-card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009.5 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 005.18 15a1.65 1.65 0 00-1.51-1H3.6a2 2 0 110-4h.09A1.65 1.65 0 005.18 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009.5 4.6a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09A1.65 1.65 0 0015.83 4.6a1.65 1.65 0 001.82.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9c.36.24.79.39 1.5.39H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"></path>
                </svg>
              </div>
              {" "}
              <h3 className="card-title">
                {"Learn Google Ads &"}
                <br />
                PPC Advertising
              </h3>
              {" "}
              <div className="card-divider"></div>
              {" "}
              <p className="card-text">
                Master Google Ads, PPC campaigns and drive real results.
              </p>
            </div>
            {" "}
            <div className="highlight-card">
              <div className="icon-wrap social-icons">
                <img src="https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/facebook.svg" alt="Facebook" />
                {" "}
                <img src="https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/instagram.svg" alt="Instagram" />
                {" "}
                <img src="https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/linkedin.svg" alt="LinkedIn" />
              </div>
              {" "}
              <h3 className="card-title">
                Social Media Marketing
                <br />
                {"(FB, Instagram & LinkedIn)"}
              </h3>
              {" "}
              <div className="card-divider"></div>
              {" "}
              <p className="card-text">
                Learn to grow brands on social platforms and build strong online presence.
              </p>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="partner-section">
          <div className="partner-wrapper">
            <h3 className="partner-heading">
              {" Our Hiring Partners Empowering Student Success Across Leading Companies "}
            </h3>
            {" "}
            <div className="partner-slider-container">
              <div className="partner-slider">
                <a href="https://www.braintree.in/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <img src="./img/braintree.jpg" alt="Braintree Technologies Logo" />
                  {" "}
                </a>
                {" "}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <img src="./img/art.jpg" alt="ART Logo" />
                  {" "}
                </a>
                {" "}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <img src="./img/cs.jpg" alt="CS Logo" />
                  {" "}
                </a>
                {" "}
                <a href="https://www.tcs.com/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <img src="./img/tcs.jpg" alt="TCS Logo" />
                  {" "}
                </a>
                {" "}
                <a href="https://www.jarvisdigitalmarketing.com/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <img src="./img/jarvs.jpg" alt="Jarvis Logo" />
                  {" "}
                </a>
                {" "}
                <a href="https://www.toshiba.com/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <img src="./img/toshiba.jpg" alt="Toshiba Logo" />
                  {" "}
                </a>
                {" "}
                <a href="https://www.technoindiauniversity.ac.in/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <img src="./img/techno.jpg" alt="Techno India University Logo" />
                  {" "}
                </a>
                {" "}
                <a href="https://www.infosys.com/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <img src="./img/info.jpg" alt="Infosys Logo" />
                  {" "}
                </a>
                {" "}
                <a href="https://tudip.com/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <img src="./img/tdj.jpg" alt="Tudip Digital Logo" />
                  {" "}
                </a>
                {" "}
                <a href="https://www.chitcode.in/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <img src="./img/chitcode.jpg" alt="Chitcode Technologies Logo" />
                  {" "}
                </a>
                {" "}
                <a href="https://www.flipkart.com/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <img src="./img/attachments/Flipkart-Logo-700x394.png" alt="Flipkart Logo" />
                  {" "}
                </a>
                {" "}
                <a href="https://paytm.com/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <img src="./img/attachments/paytm-logo-png_seeklogo-305549.png" alt="Paytm Logo" />
                  {" "}
                </a>
                {" "}
                <a href="https://razorpay.com/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <img src="./img/attachments/Razorpay.webp" alt="Razorpay Logo" />
                  {" "}
                </a>
                {" "}
                <a href="https://www.swiggy.com/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <img src="./img/attachments/swiggy logo.png" alt="Swiggy Logo" />
                  {" "}
                </a>
                {" "}
                <a href="https://www.techmahindra.com/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <img src="./img/attachments/TECHM.NS_BIG-281ab5b9.png" alt="Tech Mahindra Logo" />
                  {" "}
                </a>
                {" "}
                <a href="https://www.zoho.com/" target="_blank" rel="noopener noreferrer">
                  {" "}
                  <img src="./img/attachments/Zoho.jpg" alt="Zoho Logo" />
                  {" "}
                </a>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="brochure-section">
          <div className="brochure-container">
            {" "}
            <div className="brochure-text">
              <h2 className="program-heading">
                {" Experience Learning Before Making a Decision "}
              </h2>
              {" "}
              <p>
                {" Join a free demo session to understand the course, meet our trainers, and see how you'll learn. "}
              </p>
            </div>
            {" "}
            {" "}
            <div className="brochure-btn">
              <Link to="/contact-us.html">
                {" "}
                <button>
                  Book a Free Demo Class
                </button>
                {" "}
              </Link>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="certificate-gallery-section">
          <h2 className="certificate-gallery-title">
            {" Get a "}
            <span>
              Certificate
            </span>
            {" from a "}
            <span>
              Certified Institute
            </span>
          </h2>
          {" "}
          <h4>
            We provide industry-level,
            <span>
              {"ISO-certified "}
            </span>
            {" digital marketing "}
            <span>
              credentials
            </span>
            {" designed to strengthen your professional profile and resume. Throughout our 4-month program, you will earn multiple certifications—including completion diplomas, task-based, and excellence awards—that validate your skills and dedication to future employers."}
          </h4>
          {" "}
          <div className="certificate-gallery-grid">
            <div className="certificate-gallery-card">
              <img src="img/Certification/certification1.png" alt="Certificate 1" />
            </div>
            {" "}
            <div className="certificate-gallery-card">
              <img src="img/Certification/Certification2.png" alt="Certificate 2" />
            </div>
            {" "}
            <div className="certificate-gallery-card">
              <img src="img/Certification/Certification3.png" alt="Certificate 3" />
            </div>
            {" "}
            <div className="certificate-gallery-card">
              <img src="img/Certification/Certification4.png" alt="Certificate 4" />
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="student-gallery-section">
          <div className="student-gallery-slider">
            <div className="student-gallery-track">
              {" "}
              <div className="student-gallery-card">
                <img src="./img/stu/img(1).png" alt="student" />
              </div>
              {" "}
              <div className="student-gallery-card">
                <img src="./img/stu/img(2).png" alt="student" />
              </div>
              {" "}
              <div className="student-gallery-card">
                <img src="./img/stu/img(3).png" alt="student" />
              </div>
              {" "}
              <div className="student-gallery-card">
                <img src="./img/stu/img(4).png" alt="student" />
              </div>
              {" "}
              <div className="student-gallery-card">
                <img src="./img/stu/img(5).png" alt="student" />
              </div>
              {" "}
              {" "}
              <div className="student-gallery-card">
                <img src="./img/stu/img(1).png" alt="student" />
              </div>
              {" "}
              <div className="student-gallery-card">
                <img src="./img/stu/img(2).png" alt="student" />
              </div>
              {" "}
              <div className="student-gallery-card">
                <img src="./img/stu/img(3).png" alt="student" />
              </div>
              {" "}
              <div className="student-gallery-card">
                <img src="./img/stu/img(4).png" alt="student" />
              </div>
              {" "}
              <div className="student-gallery-card">
                <img src="./img/stu/img(5).png" alt="student" />
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        {" "}
        <section>
          <div className="section-sec">
            {" "}
            {" "}
            <div className="section-card" id="reviews">
              <h2>
                Student Reviews
              </h2>
              {" "}
              <div className="rating-summary">
                <div className="rating-big">
                  <div className="rating-num">
                    4.9
                  </div>
                  {" "}
                  <div className="stars-row">
                    ★★★★★
                  </div>
                  {" "}
                  <div className="rating-count">
                    Course Rating
                  </div>
                </div>
                {" "}
                <div className="rating-bars">
                  <div className="rating-bar-row">
                    <span className="bar-stars">
                      5 ★
                    </span>
                    {" "}
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: "88%" }}></div>
                    </div>
                    <span className="bar-pct">
                      88%
                    </span>
                  </div>
                  {" "}
                  <div className="rating-bar-row">
                    <span className="bar-stars">
                      4 ★
                    </span>
                    {" "}
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: "9%" }}></div>
                    </div>
                    <span className="bar-pct">
                      9%
                    </span>
                  </div>
                  {" "}
                  <div className="rating-bar-row">
                    <span className="bar-stars">
                      3 ★
                    </span>
                    {" "}
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: "2%" }}></div>
                    </div>
                    <span className="bar-pct">
                      2%
                    </span>
                  </div>
                  {" "}
                  <div className="rating-bar-row">
                    <span className="bar-stars">
                      2 ★
                    </span>
                    {" "}
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: "1%" }}></div>
                    </div>
                    <span className="bar-pct">
                      1%
                    </span>
                  </div>
                  {" "}
                  <div className="rating-bar-row">
                    <span className="bar-stars">
                      1 ★
                    </span>
                    {" "}
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: "0%" }}></div>
                    </div>
                    <span className="bar-pct">
                      0%
                    </span>
                  </div>
                </div>
              </div>
              {" "}
              <div className="reviews-grid">
                <div className="review-card">
                  <div className="review-top">
                    <div className="review-avatar" style={{ background: "#ede9fe", color: "#7c3aed" }}>
                      PR
                    </div>
                    {" "}
                    <div>
                      <div className="review-name">
                        Priya Rajput
                      </div>
                      {" "}
                      <div className="review-stars">
                        ★★★★★
                      </div>
                      {" "}
                      <div className="review-date">
                        November 2024
                      </div>
                    </div>
                  </div>
                  {" "}
                  <p className="review-text">
                    Best digital marketing course I've found. Arjun explains everything with real examples and live account walkthroughs. Got a job at a digital agency within 2 months of completing this. Worth every rupee!
                  </p>
                  {" "}
                  <div className="helpful">
                    {"👍 "}
                    <span>
                      142 people
                    </span>
                    {" found this helpful"}
                  </div>
                </div>
                {" "}
                <div className="review-card">
                  <div className="review-top">
                    <div className="review-avatar" style={{ background: "#dcfce7", color: "#059669" }}>
                      SK
                    </div>
                    {" "}
                    <div>
                      <div className="review-name">
                        Sanjay Kumar
                      </div>
                      {" "}
                      <div className="review-stars">
                        ★★★★★
                      </div>
                      {" "}
                      <div className="review-date">
                        October 2024
                      </div>
                    </div>
                  </div>
                  {" "}
                  <p className="review-text">
                    I run a small clothing business and this course completely changed how I approach online marketing. My Facebook ads are now profitable and organic traffic is up 300%. Highly practical content.
                  </p>
                  {" "}
                  <div className="helpful">
                    {"👍 "}
                    <span>
                      98 people
                    </span>
                    {" found this helpful"}
                  </div>
                </div>
                {" "}
                <div className="review-card">
                  <div className="review-top">
                    <div className="review-avatar" style={{ background: "#fef3c7", color: "#d97706" }}>
                      NS
                    </div>
                    {" "}
                    <div>
                      <div className="review-name">
                        Nisha Sharma
                      </div>
                      {" "}
                      <div className="review-stars">
                        ★★★★★
                      </div>
                      {" "}
                      <div className="review-date">
                        October 2024
                      </div>
                    </div>
                  </div>
                  {" "}
                  <p className="review-text">
                    The Google Ads section alone is worth 10x the price. Arjun goes deep into negative keywords, quality scores, and bidding strategies that nobody else teaches. I'm now managing ₹15L/month in ad spend.
                  </p>
                  {" "}
                  <div className="helpful">
                    {"👍 "}
                    <span>
                      76 people
                    </span>
                    {" found this helpful"}
                  </div>
                </div>
                {" "}
                <div className="review-card">
                  <div className="review-top">
                    <div className="review-avatar" style={{ background: "#dbeafe", color: "#2563eb" }}>
                      RG
                    </div>
                    {" "}
                    <div>
                      <div className="review-name">
                        Rohit Gupta
                      </div>
                      {" "}
                      <div className="review-stars">
                        ★★★★★
                      </div>
                      {" "}
                      <div className="review-date">
                        September 2024
                      </div>
                    </div>
                  </div>
                  {" "}
                  <p className="review-text">
                    Completed 4 other marketing courses before this one and none came close. The projects are real — you actually launch campaigns and see results. Now freelancing at ₹80K/month.
                  </p>
                  {" "}
                  <div className="helpful">
                    {"👍 "}
                    <span>
                      64 people
                    </span>
                    {" found this helpful"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="faq-section">
          <div className="faq-container">
            <h2>
              Your Commonly Asked Questions
            </h2>
            {" "}
            <details>
              <summary>
                Are these courses suitable for beginners?
              </summary>
              {" "}
              <p>
                {" Yes, both the Digital Marketing Course and Full Stack Development Course are designed for beginners as well as working professionals looking to upskill. "}
              </p>
            </details>
            {" "}
            <details>
              <summary>
                Do you provide placement assistance after course completion?
              </summary>
              {" "}
              <p>
                {" Yes, students receive career guidance, interview preparation, resume support, and placement assistance to help them secure relevant job opportunities. "}
              </p>
            </details>
            {" "}
            <details>
              <summary>
                Can I work on live projects during the course?
              </summary>
              {" "}
              <p>
                {" Yes, both courses include practical assignments and live projects to provide hands-on industry experience. "}
              </p>
            </details>
            {" "}
            <details>
              <summary>
                What career opportunities are available after completing these courses?
              </summary>
              {" "}
              <p>
                {" Students can pursue roles such as Digital Marketing Executive, SEO Specialist, Social Media Manager, Full Stack Developer, Frontend Developer, Backend Developer, and more. "}
              </p>
            </details>
            {" "}
            <details>
              <summary>
                What is the duration of the Digital Marketing and Full Stack Development courses?
              </summary>
              {" "}
              <p>
                {" The duration of our Digital Marketing and Full Stack Development courses varies based on the learning path and training format. Most students complete the program within 3 to 6 months through a structured curriculum that includes practical training, live projects, mentorship, and career support. "}
              </p>
            </details>
          </div>
        </section>
        {" "}
        {" "}
        {" "}
        <section className="offices">
          {" "}
          <p className="tag">
            Our Offices
          </p>
          {" "}
          <h2 className="h-main">
            Expanding Across Indore with Strategic Office Locations
          </h2>
          {" "}
          {" "}
          <div className="grid">
            {" "}
            <div className="card c-pink">
              <div className="card-lbl">
                <span className="lbl-pin">
                  <i className="fa-solid fa-location-dot" style={{ color: "#f228c9" }}></i>
                </span>
                {" "}
                <span className="lbl-txt">
                  Indore 1st Office
                </span>
              </div>
              {" "}
              <img className="photo" src="./img/Office(1).png" alt="Indore Head Office" onError={(event) => { event.currentTarget.style.display='none';event.currentTarget.nextElementSibling.style.display='flex'; }} />
              {" "}
              <div className="placeholder" style={{ display: "none" }}>
                🏢
              </div>
              {" "}
              <div className="card-body">
                <div className="o-title">
                  <span className="body-pin">
                    <i className="fa-solid fa-location-dot" style={{ color: "#f228c9" }}></i>
                  </span>
                  {" "}
                  <span className="title-txt">
                    Indore Head Office
                  </span>
                </div>
                {" "}
                <p className="o-addr">
                  {" Office No. 421 Fourth Floor, Shagun Tower,"}
                  <br />
                  {" Vijay Nagar, Indore, MP 452010 "}
                </p>
                {" "}
                <a className="map-btn" href={"https://www.google.com/maps/place/Code+Of+School/@22.7247256,75.8354956,13z/data=!4m10!1m2!2m1!1scode+of+school+indore!3m6!1s0x3962fd45228527cb:0x7622cac56fecc69d!8m2!3d22.7495525!4d75.8956164!15sChVjb2RlIG9mIHNjaG9vbCBpbmRvcmWSARtzb2Z0d2FyZV90cmFpbmluZ19pbnN0aXR1dGXgAQA!16s%2Fg%2F11xp6pw1j6?entry=ttu&g_ep=EgoyMDI2MDQxMy4wIKXMDSoASAFQAw%3D%3D"} target="_blank" rel="noopener">
                  VIEW MAP
                </a>
              </div>
            </div>
            {" "}
            {" "}
            <div className="card c-gold">
              <div className="card-lbl">
                <span className="lbl-pin">
                  <i className="fa-solid fa-location-dot" style={{ color: "#f4d612" }}></i>
                </span>
                {" "}
                <span className="lbl-txt">
                  Seoni Malwa 2nd Office
                </span>
              </div>
              {" "}
              {" "}
              <div className="placeholder">
                <img className="photo" src="./img/Office(2).png" alt="Indore 2nd Office" onError={(event) => { event.currentTarget.style.display='none';event.currentTarget.nextElementSibling.style.display='flex'; }} />
              </div>
              {" "}
              <div className="card-body">
                <div className="o-title">
                  <span className="body-pin">
                    <i className="fa-solid fa-location-dot" style={{ color: "#f4e812" }}></i>
                  </span>
                  {" "}
                  <span className="title-txt">
                    Seoni Malwa Office
                  </span>
                </div>
                {" "}
                <p className="o-addr">
                  {" Main Road, above SBI Main Branch,"}
                  <br />
                  {" near Geeta Talkies, Seoni Malwa. MP 461223 "}
                </p>
                {" "}
                <a className="map-btn" href={"https://www.google.com/maps/place/SBI+Branch+Seoni+Malwa/@22.456887,77.4745115,17z/data=!3m1!4b1!4m6!3m5!1s0x397d951da2d23db9:0xb53e632f76801d6f!8m2!3d22.456887!4d77.4745115!16s%2Fg%2F11pv83p_36?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"} target="_blank" rel="noopener">
                  VIEW MAP
                </a>
              </div>
            </div>
            {" "}
            {" "}
            <div className="card c-cyan">
              <div className="card-lbl">
                <span className="lbl-pin">
                  <i className="fa-solid fa-location-dot" style={{ color: "rgb(75, 237, 242)" }}></i>
                </span>
                {" "}
                <span className="lbl-txt">
                  Indore's 3th Office
                </span>
              </div>
              {" "}
              <img className="photo" src="./img/Office(3).png" alt="Indore 2nd Office" onError={(event) => { event.currentTarget.style.display='none';event.currentTarget.nextElementSibling.style.display='flex'; }} />
              {" "}
              <div className="placeholder" style={{ display: "none" }}>
                🏙️
              </div>
              {" "}
              <div className="card-body">
                <div className="o-title">
                  <span className="body-pin">
                    <i className="fa-solid fa-location-dot" style={{ color: "rgb(75, 237, 242)" }}></i>
                  </span>
                  {" "}
                  <span className="title-txt">
                    Indore Office
                  </span>
                </div>
                {" "}
                <p className="o-addr">
                  {" Office No.104 , Day Tower , Above Canara bank,"}
                  <br />
                  {" Behind Shekhar central , Palasia Square Indore "}
                </p>
                {" "}
                <a className="map-btn" href={"https://www.google.com/maps/place/CANARA+BANK+-+INDORE+PALASIA+POINT/@22.7229014,75.8875932,20.5z/data=!4m7!3m6!1s0x3962fd4ea8f55ef5:0xc0faeb545450efb5!4b1!8m2!3d22.7230581!4d75.8878384!16s%2Fg%2F1q62fh6ws?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D"} target="_blank" rel="noopener">
                  VIEW MAP
                </a>
              </div>
            </div>
          </div>
          {" "}
          {" "}
          <h3 className="h-bottom">
            Visit Our Offices - Serving Across Indore
          </h3>
          {" "}
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
    </PageFrame>
  );
}
