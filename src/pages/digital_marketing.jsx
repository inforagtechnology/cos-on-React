import PageFrame from "@/runtime/PageFrame.jsx";
import { Link } from "react-router-dom";

// Converted from digital_marketing.html
const styles = [{ href: "/blogs/Blog-main.css" }, { href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" }, { href: "/header-footer.css" }, { href: "/course.css" }, { css: "\n\n    " }];
const scripts = [{ src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" }, { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" }, { src: "/script.js", names: {"fn":["showCourseList"],"vars":[],"lex":["faqs","cards","observer"],"consts":["faqs","cards","observer"]} }];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>Digital Marketing Course in Indore | Digital Maketing in Seoni Malwa | Code of School</title>
          <meta name="description" content="Learn SEO, Google Ads, Social Media Marketing, and more. Become a job-ready digital marketer with hands-on projects and certifications." />
          <link rel="canonical" href="https://codeofschool.com/courses/digital-marketing" />
          <meta name="robots" content="index,follow" />
          <meta name="author" content="Ritendra Gour" />
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content="About Code of School, 100% Job Assurance ,digital marketing course, Online digital marketing course, SEO Course, PPC Training,SMM Course, Programming training institute in Indore, programming training institute in Seoni Malwa, Digital Marketing institute in Indore, Digital Marketing Institute in Seoni Malwa, Coding classes in Indore, Coding Classes in Seoni Malwa, Learn Java Python MERN React WordPress, Code of School About Page" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={"Digital Marketing Course | Code Of School — Learn & Get Certified in Indore and Seoni Malwa"} />
          <meta property="og:description" content="Join Code Of School’s digital marketing course and learn SEO, social media, Google Ads, and more with practical training, live projects, and certification." />
          <meta property="og:url" content="https://codeofschool.com/digital_marketing.html" />
          <meta property="og:site_name" content="Code of School" />
          <meta property="og:image" content="https://codeofschool.com/img/cos-white-logo2.png" />
          <meta property="og:image:alt" content={"About Code of School — Best Programming & Digital Marketing Training Institute"} />
          <meta name="twitter:card" content="https://codeofschool.com/img/cos-white-logo2.png" />
          <meta name="twitter:site" content="@codeofschool" />
          <meta name="twitter:creator" content="Ritendra gour" />
          <meta name="twitter:title" content={"About Code of School — Best Programming & Digital Marketing Training Institute in Indore and Seoni Malwa"} />
          <meta name="twitter:description" content="Code Of School helps beginners learn coding, Digital Marketing and web development with easy-to-follow courses, practical projects, and industry-relevant skills." />
          <meta name="twitter:image" content="https://codeofschool.com/img/cos-white-logo2.png" />
          <meta itemProp="name" content="Code Of School" />
          <meta itemProp="description" content="Master SEO, Google Ads, Social Media Marketing, and more. Get hands-on training, work on live projects, and earn certifications to become a job-ready digital marketer." />
          <meta itemProp="image" content="./img/cos-white-logo2.png" />
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo2.png" type="image/webp" />
        </>
      }
    >
      <div className="main">
        {" "}
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
        <section className="course-sec-one">
          <div className="hero">
            <div className="hero-grid">
              {" "}
              <div>
                <div className="hero-breadcrumb">
                  <a href="#">
                    Home
                  </a>
                  <span>
                    ›
                  </span>
                  {" "}
                  <a href="#">
                    Marketing
                  </a>
                  <span>
                    ›
                  </span>
                  {" "}
                  <span style={{ color: "rgba(255,255,255,.8)" }}>
                    Digital Marketing
                  </span>
                </div>
                {" "}
                <div className="course-badges">
                  <span className="badge badge-gold">
                    ⭐ Bestseller
                  </span>
                  {" "}
                  <span className="badge badge-green">
                    ✓ Updated Nov 2024
                  </span>
                  {" "}
                  <span className="badge badge-blue">
                    🎓 Certificate Included
                  </span>
                </div>
                {" "}
                <h1>
                  Master Digital Marketing
                  <br />
                  <em>
                    From Zero to Expert
                  </em>
                </h1>
                {" "}
                <p className="hero-desc">
                  {" The most comprehensive digital marketing course in India. Learn SEO, Google Ads, Meta Ads, content marketing, email automation, analytics, and build a complete campaign from scratch. "}
                </p>
                {" "}
                <div className="hero-meta">
                  <div className="meta-item">
                    <span className="meta-icon">
                      ⭐
                    </span>
                    <strong>
                      4.9
                    </strong>
                    {"\u00a0rating "}
                  </div>
                  {" "}
                  <div className="meta-item">
                    <span className="meta-icon">
                      👥
                    </span>
                    <strong>
                      42,800+
                    </strong>
                    {"\u00a0students"}
                  </div>
                  {" "}
                  <div className="meta-item">
                    <span className="meta-icon">
                      🕐
                    </span>
                    <strong>
                      68 hours
                    </strong>
                    {"\u00a0of video "}
                  </div>
                  {" "}
                  <div className="meta-item">
                    <span className="meta-icon">
                      🌐
                    </span>
                    English · Hindi subtitles
                  </div>
                  {" "}
                  <div className="meta-item">
                    <span className="meta-icon">
                      📱
                    </span>
                    {"Mobile & Desktop"}
                  </div>
                </div>
                {" "}
                {" "}
                <div className="hero-action-btns">
                  {" "}
                  <a href="./CoursePdf/Digital Marketing Course Content Code of School (1) (1).pdf" className="hero-btn-download" download="">
                    {" "}
                    <span className="btn-icon">
                      ⬇
                    </span>
                    {" Download Brochure "}
                  </a>
                  {" "}
                  {" "}
                  <a href="./CoursePdf/Digital Marketing Course Content Code of School (1) (1).pdf" className="hero-btn-syllabus" target="_blank">
                    {" "}
                    <span className="btn-icon">
                      📄
                    </span>
                    {" See Syllabus "}
                  </a>
                </div>
                {" > "}
                <div className="hero-stats-row">
                  <div className="hero-stat">
                    <strong>
                      68h
                    </strong>
                    <span>
                      Video Content
                    </span>
                  </div>
                  {" "}
                  <div className="hero-stat">
                    <strong>
                      12
                    </strong>
                    <span>
                      Real Projects
                    </span>
                  </div>
                  {" "}
                  <div className="hero-stat">
                    <strong>
                      180+
                    </strong>
                    <span>
                      Lectures
                    </span>
                  </div>
                  {" "}
                  <div className="hero-stat">
                    <strong>
                      Lifetime
                    </strong>
                    <span>
                      Access
                    </span>
                  </div>
                </div>
              </div>
              {" "}
              {" "}
              <div>
                <div className="enroll-card">
                  <img style={{ height: "350px" }} src="./img/CodeOfSchoolCertificate.png" alt="Course Preview" className="course-preview-img" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {" "}
      <section>
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
      </section>
      {" "}
      <section className="cert-section">
        <h2 className="cert-title">
          Get a
          <span>
            {" Certificates "}
          </span>
          {"from a "}
          <span>
            Certified Institute
          </span>
        </h2>
        {" "}
        <div className="cert-slider">
          <div className="cert-track">
            <div className="cert-card">
              <img src="./img/stu/img(1).png" alt="certificate" />
            </div>
            {" "}
            <div className="cert-card">
              <img src="./img/stu/img(2).png" alt="certificate" />
            </div>
            {" "}
            <div className="cert-card">
              <img src="./img/stu/img(3).png" alt="certificate" />
            </div>
            {" "}
            <div className="cert-card">
              <img src="./img/stu/img(4).png" alt="certificate" />
            </div>
            {" "}
            <div className="cert-card">
              <img src="./img/stu/img(5).png" alt="certificate" />
            </div>
            {" "}
            <div className="cert-card">
              <img src="./img/stu/img(2).png" alt="certificate" />
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="text-section">
        <h3>
          We provide industry-level,
          <span>
            {"ISO-certified "}
          </span>
          {" digital marketing "}
          <span>
            credentials
          </span>
          {" designed to strengthen your professional profile and resume. Throughout our 4-month program, you will earn multiple certifications—including completion diplomas, task-based, and excellence awards—that validate your skills and dedication to future employers."}
        </h3>
      </section>
      {" "}
      <section className="gallery">
        <div className="left">
          <div className="sec-two-left-partthree">
            <h1 className="sec-two-left-partthree-headone">
              {"What you'll Learn at Our "}
              <span>
                {" Digital Marketing "}
              </span>
              course
            </h1>
            {" "}
            <div className="sec-two-left-partfour">
              <h2 className="sec-two-left-partthree-headtwo">
                {"SEO fundamentals "}
              </h2>
              {" "}
              <h2 className="sec-two-left-partthree-headtwo">
                {"Social media marketing "}
              </h2>
              {" "}
              <h2 className="sec-two-left-partthree-headtwo">
                {"Google Ads & PPC "}
              </h2>
              {" "}
              <h2 className="sec-two-left-partthree-headtwo">
                Email marketing
              </h2>
              {" "}
              <h2 className="sec-two-left-partthree-headtwo">
                {"Web analytics "}
              </h2>
              {" "}
              <h2 className="sec-two-left-partthree-headtwo">
                {"Marketing funnels "}
              </h2>
              {" "}
              <h2 className="sec-two-left-partthree-headtwo">
                {"Brand positioning "}
              </h2>
              {" "}
              <h2 className="sec-two-left-partthree-headtwo">
                Content creation strategies
              </h2>
            </div>
          </div>
          {" "}
          <div className="sec-two-left-partone">
            <div className="sec-two-left-partone-one">
              <h3 className="sec-two-left-partone-headone">
                0 - 4 Week
              </h3>
              {" "}
              <h3 className="sec-two-left-partone-headtwo">
                0 - 24 Lessons
              </h3>
            </div>
            {" "}
            <h1 className="sec-two-left-partone-headthree">
              Beginner (Marketing Basics)
            </h1>
            {" "}
            <h2 className="sec-two-left-partone-headfour">
              {"Understand digital channels and key terms. "}
            </h2>
            {" "}
            <div className="sec-two-left-parttwo">
              <ul>
                <li className="sec-two-left-parttwo-li">
                  {"SEO & SEM Basics"}
                </li>
                {" "}
                <li className="sec-two-left-parttwo-li">
                  Audience Research
                </li>
              </ul>
            </div>
          </div>
          {" "}
          <div className="sec-two-left-partone">
            <div className="sec-two-left-partone-one">
              <h3 className="sec-two-left-partone-headone">
                4 - 8 Week
              </h3>
              {" "}
              <h3 className="sec-two-left-partone-headtwo">
                24 - 48 Lessons
              </h3>
            </div>
            {" "}
            <h1 className="sec-two-left-partone-headthree">
              Campaign Strategy
            </h1>
            {" "}
            <h2 className="sec-two-left-partone-headfour">
              {"Run real campaigns across platforms. "}
            </h2>
            {" "}
            <div className="sec-two-left-parttwo">
              <ul>
                <li className="sec-two-left-parttwo-li">
                  Google Ads
                </li>
                {" "}
                <li className="sec-two-left-parttwo-li">
                  Social Media Management
                </li>
              </ul>
            </div>
          </div>
          {" "}
          <div className="sec-two-left-partone">
            <div className="sec-two-left-partone-one">
              <h3 className="sec-two-left-partone-headone">
                8 - 13 Week
              </h3>
              {" "}
              <h3 className="sec-two-left-partone-headtwo">
                48 - 78 Lessons
              </h3>
            </div>
            {" "}
            <h1 className="sec-two-left-partone-headthree">
              {"Analytics & Funnels"}
            </h1>
            {" "}
            <h2 className="sec-two-left-partone-headfour">
              {"Learn conversion optimization and reporting. "}
            </h2>
            {" "}
            <div className="sec-two-left-parttwo">
              <ul>
                <li className="sec-two-left-parttwo-li">
                  Google Analytics
                </li>
                {" "}
                <li className="sec-two-left-parttwo-li">
                  {"Email & Funnel Tactics"}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {" "}
        <div className="right">
          <div className="sec-two-right-partone">
            <h1 className="sec-two-right-partone-head">
              Course Duration
            </h1>
            {" "}
            <div className="sec-two-right-card">
              <h1 className="right-card-head">
                Duration
              </h1>
              {" "}
              <h2 className="right-card-headtwo">
                13 Weeks
              </h2>
            </div>
            {" "}
            <div className="sec-two-right-card">
              <h1 className="right-card-head">
                Lessons
              </h1>
              {" "}
              <h2 className="right-card-headtwo">
                78 Lessons
              </h2>
            </div>
            {" "}
            <div className="sec-two-right-card">
              <h1 className="right-card-head">
                Language
              </h1>
              {" "}
              <h2 className="right-card-headtwo">
                English+Hindi
              </h2>
            </div>
            {" "}
            <div className="sec-two-right-card">
              <h1 className="right-card-head">
                Certificate
              </h1>
              {" "}
              <h2 className="right-card-headtwo">
                Yes
              </h2>
            </div>
            {" "}
            <div className="sec-two-right-card">
              <h1 className="right-card-head">
                Live Classes
              </h1>
              {" "}
              <h2 className="right-card-headtwo">
                Yes
              </h2>
            </div>
            {" "}
            <div className="sec-two-right-button">
              <a href={"https://wa.me/919977723584?text=Hi!%20I’m%20interested%20in%20learning%20more%20about%20your%20Digital%20Marketing%20coding%20courses.%20Could%20you%20please%20share%20more%20details%3F\n"} target="_blank">
                <button>
                  Enroll Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <div className="dashboard-container">
        <h1 className="blog-header">
          Digital Marketing Blog
        </h1>
        {" "}
        <div className="filter-tags-cloud">
          <a className="tag-pill active">
            All Articles
          </a>
          {" "}
          <a className="tag-pill">
            Digital Strategy
          </a>
          {" "}
          <a className="tag-pill">
            Content Marketing
          </a>
          {" "}
          <a className="tag-pill">
            Search Engine Optimization
          </a>
          {" "}
          <a className="tag-pill">
            Email Marketing
          </a>
          {" "}
          <a className="tag-pill">
            Social Media Marketing
          </a>
          {" "}
          <a className="tag-pill">
            E-Commerce
          </a>
          {" "}
          <a className="tag-pill">
            Data and Analytics
          </a>
          {" "}
          <a className="tag-pill">
            Customer Experience
          </a>
          {" "}
          <a className="tag-pill">
            Digital Management and Leadership
          </a>
          {" "}
          <a className="tag-pill">
            Display and Video Advertising
          </a>
          {" "}
          <a className="tag-pill">
            PPC and Paid Search
          </a>
          {" "}
          <a className="tag-pill">
            Web Design, CRO and UX
          </a>
          {" "}
          <a className="tag-pill">
            AI Digital Marketing
          </a>
        </div>
        {" "}
        {" "}
        <div className="blog-grid">
          <Link to="/blogs/Digital-Marketing/complete-guidance.html" className="blog-card-link">
            {" "}
            <div className="blog-card">
              <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80"} alt="Sustainable Fashion Workflow" />
              {" "}
              <div className="card-overlay">
                <h2 className="card-title">
                  The Future of Fashion: Sustainable Practices in the Industry
                </h2>
              </div>
            </div>
            {" "}
          </Link>
          {" "}
          <a href="./blogs/Digital-Marketing/dm-blog-4.html" className="blog-card-link">
            {" "}
            <div className="blog-card">
              <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"} alt="AI Brand Security Analysis" />
              {" "}
              <div className="card-overlay">
                <h2 className="card-title">
                  Is AI Slop the New Brand Risk?
                </h2>
              </div>
            </div>
            {" "}
          </a>
          {" "}
          <a href="./blogs/Digital-Marketing/dm-blog-5.html" className="blog-card-link">
            {" "}
            <div className="blog-card">
              <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80"} alt="Performance Max Optimization Concept" />
              {" "}
              <div className="card-overlay">
                <h2 className="card-title">
                  Is Performance Max Right for Your Campaign? A Practical Guide
                </h2>
              </div>
            </div>
            {" "}
          </a>
          {" "}
          <a href="./blogs/Digital-Marketing/dm-blog-6.html" className="blog-card-link">
            {" "}
            <div className="blog-card">
              <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80"} alt="AI Optimization Processing Node" />
              {" "}
              <div className="card-overlay">
                <h2 className="card-title">
                  AI Agents vs Automation: Choose the Right Approach for Your Marketing Tasks
                </h2>
              </div>
            </div>
            {" "}
          </a>
          {" "}
          <a href="./blogs/Digital-Marketing/dm-blog-7.html" className="blog-card-link">
            {" "}
            <div className="blog-card">
              <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=400&q=80"} alt="Email Marketing Vector Matrix Layout" />
              {" "}
              <div className="card-overlay">
                <h2 className="card-title">
                  Creating Accessible Emails: A Practical Guide for Marketers
                </h2>
              </div>
            </div>
            {" "}
          </a>
          {" "}
          <a href="./blogs/Digital-Marketing/dm-blog-8.html" className="blog-card-link">
            {" "}
            <div className="blog-card">
              <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"} alt="Smart Bidding Strategy Graphics" />
              {" "}
              <div className="card-overlay">
                <h2 className="card-title">
                  Which Google Ads Smart Bidding Strategy Is Right for Your Campaign?
                </h2>
              </div>
            </div>
            {" "}
          </a>
          {" "}
          <a href="./blogs/Digital-Marketing/dm-blog-9.html" className="blog-card-link">
            {" "}
            <div className="blog-card">
              <div className="premium-badge">
                ★ Premium
              </div>
              {" "}
              <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80"} alt="Data Analytics Metric Presentation Layer" />
              {" "}
              <div className="card-overlay">
                <h2 className="card-title">
                  Data Visualization: Tools and Tips for Marketers
                </h2>
              </div>
            </div>
            {" "}
          </a>
          {" "}
          <a href="./blogs/Digital-Marketing/dm-blog-10.html" className="blog-card-link">
            {" "}
            <div className="blog-card">
              <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"} alt="Agile Marketing Professionals Framework Setup" />
              {" "}
              <div className="card-overlay">
                <h2 className="card-title">
                  Agile Marketing Metrics That Matter: Leading vs. Lagging
                </h2>
              </div>
            </div>
            {" "}
          </a>
        </div>
      </div>
      {" "}
      {" "}
      <section className="faq-section">
        <h2>
          {"Frequently Asked "}
          <span>
            Questions
          </span>
        </h2>
        {" "}
        <div className="faq">
          <div className="faq-item">
            <div className="faq-question">
              <p>
                What is Digital Marketing?
              </p>
              {" "}
              <span className="icon">
                +
              </span>
            </div>
            {" "}
            <div className="faq-answer">
              <p>
                Digital Marketing is the promotion of products or services using online platforms like search engines, social media, websites, and email to reach potential customers.
              </p>
            </div>
          </div>
          {" "}
          <div className="faq-item">
            <div className="faq-question">
              <p>
                Who can join the Digital Marketing course?
              </p>
              {" "}
              <span className="icon">
                +
              </span>
            </div>
            {" "}
            <div className="faq-answer">
              <p>
                {"Anyone can join—students, job seekers, business owners, freelancers, or working professionals. No technical background is required. "}
              </p>
            </div>
          </div>
          {" "}
          <div className="faq-item">
            <div className="faq-question">
              <p>
                What topics are covered in the Digital Marketing course?
              </p>
              {" "}
              <span className="icon">
                +
              </span>
            </div>
            {" "}
            <div className="faq-answer">
              <p>
                The course includes SEO, Social Media Marketing, Google Ads (PPC), Content Marketing, Email Marketing, Affiliate Marketing, and Google Analytics.
              </p>
            </div>
          </div>
          {" "}
          <div className="faq-item">
            <div className="faq-question">
              <p>
                {"What is the duration of the Digital Marketing course? "}
              </p>
              {" "}
              <span className="icon">
                +
              </span>
            </div>
            {" "}
            <div className="faq-answer">
              <p>
                {"The duration typically ranges from 3 to 5 months depending on the course level (basic to advanced). "}
              </p>
            </div>
          </div>
          {" "}
          <div className="faq-item">
            <div className="faq-question">
              <p>
                Will I get a certificate after completing the course?
              </p>
              {" "}
              <span className="icon">
                +
              </span>
            </div>
            {" "}
            <div className="faq-answer">
              <p>
                Yes, you will receive 3 certification from the institute after successfully completing the course.
              </p>
            </div>
          </div>
          {" "}
          <div className="faq-item">
            <div className="faq-question">
              <p>
                Are there any placement opportunities after the course?
              </p>
              {" "}
              <span className="icon">
                +
              </span>
            </div>
            {" "}
            <div className="faq-answer">
              <p>
                Yes, we provide placement assistance including resume building, interview preparation, and job referrals, along with internship opportunities for practical experience.
              </p>
            </div>
          </div>
          {" "}
          <div className="faq-item">
            <div className="faq-question">
              <p>
                What are the career options after Digital Marketing?
              </p>
              {" "}
              <span className="icon">
                +
              </span>
            </div>
            {" "}
            <div className="faq-answer">
              <p>
                You can become an SEO Executive, Social Media Manager, PPC Expert, Content Marketer, Digital Marketing Manager, or Freelancer.
              </p>
            </div>
          </div>
          {" "}
          <div className="faq-item">
            <div className="faq-question">
              <p>
                Do I need coding knowledge for Digital Marketing?
              </p>
              {" "}
              <span className="icon">
                +
              </span>
            </div>
            {" "}
            <div className="faq-answer">
              <p>
                No, coding is not mandatory. Basic knowledge of computers and the internet is enough to start.
              </p>
            </div>
          </div>
          {" "}
          <div className="faq-item">
            <div className="faq-question">
              <p>
                What is the salary after completing a Digital Marketing course?
              </p>
              {" "}
              <span className="icon">
                +
              </span>
            </div>
            {" "}
            <div className="faq-answer">
              <p>
                {"Completing the course, you can start your career in roles like SEO, social media, and advertising, with growth based on your skills and experience. "}
              </p>
            </div>
          </div>
          {" "}
          <div className="faq-item">
            <div className="faq-question">
              <p>
                Can I start my own business after learning Digital Marketing?
              </p>
              {" "}
              <span className="icon">
                +
              </span>
            </div>
            {" "}
            <div className="faq-answer">
              <p>
                {"Yes, you can promote your own business, generate leads, and grow your brand online using digital marketing strategies. "}
              </p>
            </div>
          </div>
        </div>
      </section>
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
      </footer>
      {" "}
      {" "}
      {" "}
    </PageFrame>
  );
}
