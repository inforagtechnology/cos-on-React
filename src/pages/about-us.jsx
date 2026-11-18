import PageFrame from "@/runtime/PageFrame.jsx";
import { Link } from "react-router-dom";

// Converted from about-us.html
const styles = [{ href: "/aboutus.css" }, { href: "/header-footer.css" }, { href: "/course.css" }, { href: "/style.css" }, { href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" }, { href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" }, { css: "\n        /* body {\n            margin: 0;\n            padding: 0;\n            background: #e5e5e5;\n            font-family: Arial, sans-serif;\n        } */\n\n        /* Gallery container */\n        /* .gallery { */\n        /* position: relative;\n            width: 100%;\n            max-width: 900px;\n            margin: 30px auto;\n            height: 470px;\n            background: transparent; */\n        /* }\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n            gap: 10px;\n            max-width: 900px;\n            margin: 10px auto;\n            padding: 10px;\n            background: transparent;\n        }\n\n        /* Card style (polaroid effect) \n        .card {\n            /* position: absolute;\n            width: 180px; \n            background: white;\n            padding: 5px;\n            border-radius: 8px;\n            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n            transition: 0.3s;\n        }\n\n        .card img {\n            /* width: 100%; \n            width: auto;\n            height: 200px;\n            border-radius: 5px;\n        } */\n\n        /* Hover effect */\n        /* .card:hover {\n            transform: scale(1.1) rotate(0deg) !important;\n            z-index: 10;\n        } */\n\n        /* Positions + Rotations */\n        /* .rotate1 {\n            top: 0;\n            left: 10px;\n            transform: rotate(-10deg);\n        }\n\n\n        .rotate3 {\n            top: 0;\n            right: 30px;\n            transform: rotate(12deg);\n        }\n\n        .rotate4 {\n            top: 110px;\n            left: 80px;\n            transform: rotate(8deg);\n        }\n\n        .rotate5 {\n            top: 120px;\n            left: 280px;\n            transform: rotate(-6deg);\n        }\n\n        .rotate6 {\n            top: 180px;\n            right: 100px;\n            transform: rotate(6deg);\n        }\n\n\n\n        .rotate1 {\n            transform: rotate(-5deg);\n        }\n\n        .rotate3 {\n            transform: rotate(6deg);\n        }\n\n        .rotate4 {\n            transform: rotate(4deg);\n        }\n\n        .rotate5 {\n            transform: rotate(14deg);\n        }\n\n        .rotate6 {\n            transform: rotate(-15deg);\n        }\n\n        .rotate7 {\n            transform: rotate(3deg);\n        }\n\n\n\n        @media (max-width: 600px) {\n            .gallery {\n                grid-template-columns: repeat(2, 1fr);\n            }\n\n            .card {\n                transform: rotate(3 deg) !important;\n            }\n        }\n\n        @media (max-width:469px) {\n            .card img {\n                height: 100px;\n            }\n        } */\n    " }];
const scripts = [{ src: "/script.js", names: {"fn":["showCourseList"],"vars":[],"lex":["faqs","cards","observer"],"consts":["faqs","cards","observer"]} }];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>About Us - Code Of School</title>
          <meta name="title" content="About Us - Code Of School" />
          <meta name="description" content={"Code Of School ek leading platform hai jahan students aur \nbeginners coding, web development, full stack development aur technology skills seekhte hain. \nHamara mission hai learning ko simple aur accessible banana."} />
          <meta name="keywords" content={"About Code Of School, coding platform, learn programming, \nweb development, full stack development, coding education"} />
          <meta name="author" content="Ritendra Gour" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://codeofschool.com/about-us" />
          <meta property="og:title" content="About Us - Code Of School" />
          <meta property="og:description" content="Code Of School’s mission is to make coding and technology education simple, practical, and accessible to everyone." />
          <meta property="og:image" content="https://codeofschool.com/img/cos-main/cos- white-logo2.png" />
          <meta property="og:url" content="https://codeofschool.com/about-us.html" />
          <meta property="og:type" content="website" />
          <meta property="og:image:alt" content={"About Code of School — Best Programming & Digital Marketing Training Institute"} />
          <meta property="og:site_name" content="Code of School" />
          <meta itemProp="name" content="Code Of School" />
          <meta itemProp="description" content="Code Of School ek trusted learning platform hai jahan students coding, web development, full stack development aur modern tech skills seekhte hain. Hamara mission hai learning ko simple, practical aur accessible banana, taaki har learner apna career confidently start kar sake." />
          <meta name="twitter:card" content="https://codeofschool.com/img/cos-white-logo2.webp" />
          <meta name="twitter:site" content="@codeofschool" />
          <meta name="twitter:creator" content="Ritendra gour" />
          <meta name="twitter:title" content={"About Code of School — Best Programming & Digital Marketing Training Institute in Indore"} />
          <meta name="twitter:description" content={"Learn about Code of School and how we help students master programming, digital marketing, and full-stack development with expert-led training & live projects."} />
          <meta name="twitter:image" content="https://codeofschool.com/img/cos-white-logo2.png" />
          <meta itemProp="image" content="https://codeofschool.com/img/cos-white-logo2.png" />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{ \n  \"@context\": \"https://schema.org\", \n  \"@type\": \"AboutPage\", \n  \"name\": \"About Us - Code Of School\", \n  \"url\": \"https://codeofschool.com/about-us.html\", \n  \"description\": \"Code Of School ek educational platform hai jo coding aur web development ko \neasy tutorials ke through sikhata hai.\", \n  \"publisher\": { \n    \"@type\": \"Organization\", \n    \"name\": \"Code Of School\", \n    \"logo\": \"https://codeofschool.com/img/cos-white-logo2.png\", \n    \"url\": \"https://codeofschool.com/\" \n  } \n}" }} />
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
            {" "}
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
            <button>
              Connect Us
            </button>
          </div>
        </div>
        {" "}
        {" "}
        <section className="about-faculty">
          <h1 id="heading-about">
            About Us
          </h1>
          {" "}
          <div className="aboutpage-partone">
            <div className="aboutpage-partone-one">
              <h2>
                We cultivate tech talent starting on day one.
              </h2>
              {" "}
              <img src="./img/stu/ChatGPT PM.png" alt="" />
              {" "}
            </div>
            {" "}
            <div className="aboutpage-partone-two">
              <h4 id="aboutpage-head-two">
                Welcome to
                <em>
                  {" Code of School"}
                </em>
                {", your ultimate launchpad to tech excellence! "}
              </h4>
              {" "}
              <p className="about-content">
                At Code of School, we deliver industry-aligned tech education specifically designed for the rapidly changing demands of digital careers. Powered by Inforag Technology, our programs integrate practical skills, seasoned mentorship, and hands-on project-based learning. This approach empowers our students to excel in fields like software development, data science, and various other tech domains.
              </p>
              {" "}
              <h2 id="aboutpage-head-three">
                Who We Are
              </h2>
              {" "}
              <p className="about-content">
                Code of School is an innovative tech coaching center focused on full-stack development, data science, and career-centric training. Our experienced mentors merge exceptional teaching with practical industry expertise to provide impactful learning experiences and cultivate strong student success narratives.
              </p>
            </div>
          </div>
        </section>
        {" "}
        <section className="fs">
          <div className="fs-inner">
            {" "}
            <div className="fs-row">
              <div className="fs-img">
                <div className="fs-img-wrap">
                  <img src="./img/stu/chat.png" alt="Students learning at Code of School" />
                </div>
                {" "}
                <div className="fs-badge">
                  <div className="fs-badge-icon">
                    <i className="fa-solid fa-rocket" style={{ fontSize: "15px" }}></i>
                  </div>
                  {" "}
                  <div className="fs-badge-text">
                    <strong>
                      20,000+ students
                    </strong>
                    {" "}
                    <span>
                      launched their tech careers
                    </span>
                  </div>
                </div>
              </div>
              {" "}
              <div className="fs-text">
                <div className="fs-label">
                  <span className="fs-label-line"></span>
                  {" Mission & Vision "}
                </div>
                {" "}
                <h2>
                  {"Turning ambition into "}
                  <span>
                    achievement
                  </span>
                </h2>
                {" "}
                <p>
                  {" Our mission is to equip every learner with job-ready IT and digital marketing skills through practical training, expert mentorship, and real-world projects. Our vision is a future where every student from any background can build a thriving career in tech. "}
                </p>
                {" "}
                <ul className="fs-list">
                  <li>
                    <span className="fs-check">
                      {" "}
                      <svg viewBox="0 0 12 12">
                        <polyline points="2,6 5,9 10,3"></polyline>
                      </svg>
                      {" "}
                    </span>
                    {" Industry-aligned curriculum updated every quarter "}
                  </li>
                  {" "}
                  <li>
                    <span className="fs-check">
                      {" "}
                      <svg viewBox="0 0 12 12">
                        <polyline points="2,6 5,9 10,3"></polyline>
                      </svg>
                      {" "}
                    </span>
                    {" Live projects with real client briefs, not mock exercises "}
                  </li>
                  {" "}
                  <li>
                    <span className="fs-check">
                      {" "}
                      <svg viewBox="0 0 12 12">
                        <polyline points="2,6 5,9 10,3"></polyline>
                      </svg>
                      {" "}
                    </span>
                    {" One-on-one mentorship from working industry professionals "}
                  </li>
                  {" "}
                  <li>
                    <span className="fs-check">
                      {" "}
                      <svg viewBox="0 0 12 12">
                        <polyline points="2,6 5,9 10,3"></polyline>
                      </svg>
                      {" "}
                    </span>
                    {" Placement support from day one, not just at graduation "}
                  </li>
                </ul>
                {" "}
                <Link to="/placement.html">
                  {" "}
                  <button className="fs-btn">
                    {" See our placements "}
                    <svg viewBox="0 0 16 16">
                      <line x1="2" y1="8" x2="14" y2="8"></line>
                      <polyline points="9,3 14,8 9,13"></polyline>
                    </svg>
                  </button>
                  {" "}
                </Link>
              </div>
            </div>
            {" "}
            {" "}
            <div className="fs-row rev">
              <div className="fs-img">
                <div className="fs-img-wrap">
                  <img src="./img/stu/our_values.png" alt="Code of School values in practice" />
                </div>
                {" "}
                <div className="fs-badge">
                  <div className="fs-badge-icon" style={{ background: "rgba(249,115,22,0.18)", color: "#fb923c" }}>
                    <i className="fa-solid fa-certificate" style={{ fontSize: "15px" }}></i>
                  </div>
                  {" "}
                  <div className="fs-badge-text">
                    <strong>
                      ISO Certified
                    </strong>
                    {" "}
                    <span>
                      {"institute & curriculum"}
                    </span>
                  </div>
                </div>
              </div>
              {" "}
              <div className="fs-text">
                <div className="fs-label" style={{ color: "#f97316" }}>
                  <span className="fs-label-line" style={{ background: "#f97316" }}></span>
                  {" Our Values "}
                </div>
                {" "}
                <h2>
                  Excellence, integrity,
                  <br />
                  <span>
                    and real impact
                  </span>
                </h2>
                {" "}
                <p>
                  {" At Code of School we believe great training goes beyond textbooks. We foster a culture of curiosity, collaboration, and continuous growth — helping every student not just learn, but truly excel in a competitive digital world. "}
                </p>
                {" "}
                <ul className="fs-list">
                  <li>
                    <span className="fs-check" style={{ background: "rgba(249,115,22,0.18)" }}>
                      {" "}
                      <svg viewBox="0 0 12 12" style={{ stroke: "#fb923c" }}>
                        <polyline points="2,6 5,9 10,3"></polyline>
                      </svg>
                      {" "}
                    </span>
                    {" Practical-first approach — build before you graduate "}
                  </li>
                  {" "}
                  <li>
                    <span className="fs-check" style={{ background: "rgba(249,115,22,0.18)" }}>
                      {" "}
                      <svg viewBox="0 0 12 12" style={{ stroke: "#fb923c" }}>
                        <polyline points="2,6 5,9 10,3"></polyline>
                      </svg>
                      {" "}
                    </span>
                    {" Transparency in fees, schedules, and outcomes "}
                  </li>
                  {" "}
                  <li>
                    <span className="fs-check" style={{ background: "rgba(249,115,22,0.18)" }}>
                      {" "}
                      <svg viewBox="0 0 12 12" style={{ stroke: "#fb923c" }}>
                        <polyline points="2,6 5,9 10,3"></polyline>
                      </svg>
                      {" "}
                    </span>
                    {" Inclusive classrooms — beginners welcome, no gatekeeping "}
                  </li>
                  {" "}
                  <li>
                    <span className="fs-check" style={{ background: "rgba(249,115,22,0.18)" }}>
                      {" "}
                      <svg viewBox="0 0 12 12" style={{ stroke: "#fb923c" }}>
                        <polyline points="2,6 5,9 10,3"></polyline>
                      </svg>
                      {" "}
                    </span>
                    {" Lifetime alumni community and continued career support "}
                  </li>
                </ul>
                {" "}
                <Link to="/about-us.html">
                  {" "}
                  <button className="fs-btn orange">
                    {" Learn about us "}
                    <svg viewBox="0 0 16 16">
                      <line x1="2" y1="8" x2="14" y2="8"></line>
                      <polyline points="9,3 14,8 9,13"></polyline>
                    </svg>
                  </button>
                  {" "}
                </Link>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="about-faculty">
          <h1 id="aboutpage-head-four">
            <u>
              Our Teams
            </u>
          </h1>
          {" "}
          <p className="about-content-two">
            {"Our expert team of mentors, instructors, and tech professionals collaborate to provide hands-on learning experiences. We specialize in coding bootcamps, AI training, and career-focused programs designed to help students thrive in the tech industry. "}
          </p>
          {" "}
          <div className="aboutpage-parttwo">
            {" "}
            <div className="member-one">
              <img src="./img/Ritendra_gour_sir.png" alt="" />
              {" "}
              <ul>
                <li>
                  {"Mr. Ritendra Gour "}
                </li>
                {" "}
                <li>
                  {"Managing Director & Technical Trainer "}
                </li>
              </ul>
            </div>
            {" "}
            <div className="member-two">
              <img src="./img/avinash-sir-2.png" alt="" />
              {" "}
              <ul>
                <li>
                  {"Mr. Avinash Gour "}
                </li>
                {" "}
                <li>
                  {"CEO & Career Consultant "}
                </li>
              </ul>
            </div>
            {" "}
            <div className="member-three">
              <img src="./img/Rishabh.png" alt="" />
              {" "}
              <ul>
                <li>
                  {"Mr. Rishabh Raghuwanshi "}
                </li>
                {" "}
                <li>
                  Digital Marketing Expert
                </li>
              </ul>
            </div>
            {" "}
            <div className="member-two">
              <img src="./img/stu/Nishant-sir.png" alt="" />
              {" "}
              <ul>
                <li>
                  {"Mr. Nishant Gour "}
                </li>
                {" "}
                <li>
                  SEO Expert
                </li>
              </ul>
            </div>
            {" "}
            {" "}
            <div className="member-one">
              <img src="./img/Nakul photo.png" alt="" />
              {" "}
              <ul>
                <li>
                  {"Mr. Nakul Chohan "}
                </li>
                {" "}
                <li>
                  {"Authorized Franchise "}
                  <br />
                  {"Partner Palasia "}
                </li>
              </ul>
            </div>
            {" "}
            <div className="member-two">
              <img src="./img/ayush.png" alt="" />
              {" "}
              <ul>
                <li>
                  {"Mr. Ayush Loushal "}
                </li>
                {" "}
                <li>
                  Authorized Franchise
                  <br />
                  {" Partner Palasia"}
                </li>
              </ul>
            </div>
            {" "}
            <div className="member-three">
              <img src="./img/pankaj.png" alt="" />
              {" "}
              <ul>
                <li>
                  {"Mr. Pankaj Yadav "}
                </li>
                {" "}
                <li>
                  {"Authorized Franchise "}
                  <br />
                  Partner Seoni Malwa
                </li>
              </ul>
            </div>
            {" "}
            <div className="member-one">
              <img src="./img/abhishek-chandra.jpg" alt="" />
              {" "}
              <ul>
                <li>
                  {"Mr. Abhishek Chandravanshi "}
                </li>
                {" "}
                <li>
                  {"Server Administrator "}
                </li>
              </ul>
            </div>
            {" "}
            {" "}
            <div className="member-one">
              <img src={"./img/jagruti_ma'am.png"} alt="" />
              {" "}
              <ul>
                <li>
                  {"Ms. Jagruti Hiwase "}
                </li>
                {" "}
                <li>
                  {"Senior HR Career Counselor "}
                </li>
              </ul>
            </div>
            {" "}
            <div className="member-two">
              <img src="./img/Akshay_Patel.png" alt="" />
              {" "}
              <ul>
                <li>
                  Mr. Akshay Patel
                </li>
                {" "}
                <li>
                  MERN Stack Developer
                </li>
              </ul>
            </div>
            {" "}
            <div className="member-three">
              <img src="./img/sudha-maam.jpeg" alt="" />
              {" "}
              <ul>
                <li>
                  {"Ms. Sudha Patidar "}
                </li>
                {" "}
                <li>
                  Shopify/Wordpress Developer
                </li>
              </ul>
            </div>
            {" "}
            <div className="member-one">
              <img src="./img/saloni.jpeg" alt="" />
              {" "}
              <ul>
                <li>
                  Ms. Saloni Gurjar
                </li>
                {" "}
                <li>
                  Frontend Developer
                </li>
              </ul>
            </div>
            {" "}
            <div className="member-three">
              <img src="./img/deepanshu.jpeg" alt="" />
              {" "}
              <ul>
                <li>
                  {"Mr. Deepanshu Rode "}
                </li>
                {" "}
                <li>
                  Digital Marketing Executive
                </li>
              </ul>
            </div>
            {" "}
            <div className="member-one">
              <img src="./img/vani_jain.jpeg" alt="" />
              {" "}
              <ul>
                <li>
                  {"Ms. Vani Jain "}
                </li>
                {" "}
                <li>
                  Junior HR Career Counselor
                </li>
              </ul>
            </div>
            {" "}
            <div className="member-two">
              <img src="./img/Pratham Singh Pawar.jpeg" alt="" />
              {" "}
              <ul>
                <li>
                  Mr. Pratham Singh Pawar
                </li>
                {" "}
                <li>
                  {"Graphic Designer & Video Editor"}
                </li>
              </ul>
            </div>
            {" "}
            <div className="member-one">
              <img src={"./img/ranu-ma'am.jpeg"} alt="" />
              {" "}
              <ul>
                <li>
                  {"Ms. Ranu Namdev "}
                </li>
                {" "}
                <li>
                  {" HR Intern "}
                </li>
              </ul>
            </div>
            {" "}
            {" "}
            <div className="member-one">
              <img src={"./img/saloni-ma'am.jpeg"} alt="" />
              {" "}
              <ul>
                <li>
                  Ms. Saloni Jaiswal
                </li>
                {" "}
                <li>
                  Digital Marketing Intern
                </li>
              </ul>
            </div>
            {" "}
            <div className="member-two">
              <img src="./img/Sam.png" alt="" />
              {" "}
              <ul>
                <li>
                  Ms. Sam Kingrani
                </li>
                {" "}
                <li>
                  Digital Marketing Intern
                </li>
              </ul>
            </div>
          </div>
        </section>
        {" "}
        <a href="https://wa.me/919977723584?text=Hi%20I%20need%20help" className="whatsapp-float" id="whatsappButton" target="_blank">
          {" "}
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Chat" />
          {" "}
          <span className="notification-dot"></span>
          {" "}
        </a>
        {" "}
        <div className="aboutpage-partthree">
          <h2>
            Why Choose Us?
          </h2>
          {" "}
          <ul>
            <li>
              <b>
                Student-Centered –
              </b>
              {" Your success shapes our teaching."}
            </li>
            {" "}
            <li>
              <b>
                Future-Focused –
              </b>
              {" Learn in-demand skills for tomorrow’s tech world."}
            </li>
            {" "}
            <li>
              <b>
                Expert Mentors –
              </b>
              {" Industry professionals guiding every step."}
            </li>
            {" "}
            <li>
              <b>
                Career-Driven –
              </b>
              {" We focus on real skills and job outcomes."}
            </li>
          </ul>
        </div>
        {" "}
        <div className="vmv">
          <div className="aboutpage-partfour">
            <div className="partfour-one">
              <h1 className="partfour-head">
                Our Values
              </h1>
              {" "}
              <img src="./img/value.jpg" alt="" />
              {" "}
              <p className="partfour-para">
                At Code of School, we uphold transparency for clear learning paths, foster innovation to impart cutting-edge skills, maintain a student-first focus to support every learner, strive for excellence in curriculum and delivery, ensure integrity in mentorship, encourage collaboration to build a strong community, embrace adaptability to meet evolving tech trends, and provide performance-focused training to guarantee genuine career growth.Deep Research Canvas Image.
              </p>
            </div>
            {" "}
            <div className="partfour-two">
              <h1 className="partfour-head">
                Our Mission
              </h1>
              {" "}
              <img src="./img/mission.jpg" alt="" />
              {" "}
              <p className="partfour-para">
                Our mission is to transform passionate learners into skilled tech professionals through innovative, impactful education that cultivates real-world expertise, enhances career readiness, and provides long-term value. We aim to equip students with future-ready skills, grounded in a foundation of integrity, collaboration, and a strong commitment to personal growth and success.
              </p>
            </div>
            {" "}
            <div className="partfour-three">
              <h1 className="partfour-head">
                Our Vision
              </h1>
              {" "}
              <img src="./img/vision.jpg" alt="" />
              {" "}
              <p className="partfour-para">
                Our vision is to be a global leader in providing education-first, career-driven programs that empower learners from all backgrounds. We aim to be recognized for our high-quality training, teaching excellence, transparent mentorship, and a student-first approach that fosters genuine skill development, career readiness, real-world confidence, and continuous growth in an ever-evolving technological landscape.
              </p>
            </div>
          </div>
        </div>
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
              {"| "}
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
    </PageFrame>
  );
}
