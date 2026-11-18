import PageFrame from "@/runtime/PageFrame.jsx";
import { Link } from "react-router-dom";

// Converted from privacy-policy.html
const styles = [{ href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" }, { href: "/termsandcondition.css" }, { href: "/header-footer.css" }];
const scripts = [{ src: "/script.js", names: {"fn":["showCourseList"],"vars":[],"lex":["faqs","cards","observer"],"consts":["faqs","cards","observer"]} }];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>Privacy Policy</title>
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo2.png" type="image/webp" />
          <meta name="description" content={" Code of School, Indore’s leading programming and digital marketing training institute. Our mission is to provide job-ready skills in Java, Python, MERN, React, DSA, WordPress & more with expert mentorship."} />
          <link rel="canonical" href="https://codeofschool.com/about-us" />
          <meta name="robots" content="index,follow" />
          <meta name="author" content="Ritendra Gour" />
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content=" Code of School, Programming training institute in Indore, Digital Marketing institute Indore, Coding classes Indore, Learn Java Python MERN React WordPress, Code of School About Page" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={"Code of School — Leading Programming & Digital Marketing Training Institute in Indore"} />
          <meta property="og:description" content={"Discover Code of School’s mission and vision. We train students in programming, full-stack development, digital marketing, and more with live mentorship & certifications."} />
          <meta property="og:url" content="https://codeofschool.com/about-us" />
          <meta property="og:site_name" content="Code of School" />
          <meta property="og:image" content="https://codeofschool.com/img/cos-white-logo2.png" />
          <meta property="og:image:alt" content={"About Code of School — Best Programming & Digital Marketing Training Institute"} />
          <meta name="twitter:card" content="https://codeofschool.com/img/cos-white-logo2.png" />
          <meta name="twitter:site" content="@codeofschool" />
          <meta name="twitter:creator" content="Ritendra gour" />
          <meta name="twitter:title" content={"About Code of School — Best Programming & Digital Marketing Training Institute in Indore"} />
          <meta name="twitter:description" content={"Learn about Code of School and how we help students master programming, digital marketing, and full-stack development with expert-led training & live projects."} />
          <meta name="twitter:image" content="https://codeofschool.com/img/cos-white-logo2.png" />
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo2.png" type="image/webp" sizes="32x32" />
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo2.png" type="image/webp" sizes="48x48" />
          <link rel="apple-touch-icon" href="https://codeofschool.com/img/cos-white-logo2.png" />
          <link rel="manifest" href="/site.webmanifest" />
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
            <button>
              Connect Us
            </button>
          </div>
        </div>
        {" "}
        {" "}
        <section className="tandc-first-section">
          <div className="tandc-first-part">
            <div className="tandc-mainhead">
              <h1>
                Privacy Policy
              </h1>
            </div>
            {" "}
            <div className="part-one-content">
              <div className="part-one-content-one">
                <p className="tandc-para">
                  At Code of School, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you access or use our website and services.
                </p>
                {" "}
                <h2 className="tandc-subheading">
                  Information We Collect
                </h2>
                {" "}
                <p className="tandc-para">
                  We may collect personal information such as your name, email address, phone number, payment details, and other information you provide while enrolling in courses or interacting with our website.
                </p>
                {" "}
                <h2 className="tandc-subheading">
                  How We Use Your Information
                </h2>
                {" "}
                <p className="tandc-para">
                  We use your information to provide our educational services, process payments, send important updates, and improve the overall learning experience at Code of School.
                </p>
              </div>
              {" "}
              <div className="part-one-content-image">
                <img src="./img/closeup-business-woman-making-notes-document-1536x1025.jpg" alt="" />
              </div>
            </div>
            {" "}
            <div className="part-one-content">
              <div className="part-one-content-two">
                <h2 className="tandc-subheading">
                  Data Security
                </h2>
                {" "}
                <p className="tandc-para">
                  {"We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no online platform can guarantee 100% security. "}
                </p>
              </div>
              {" "}
              <div className="part-one-content-three">
                <h2 className="tandc-subheading">
                  Sharing of Information
                </h2>
                {" "}
                <p className="tandc-para">
                  We do not sell or trade your personal data. Information may be shared only with trusted service providers for payment processing, course delivery, or when required by law.
                </p>
              </div>
            </div>
            {" "}
            <div className="part-one-content">
              <div className="part-one-content-two">
                <h2 className="tandc-subheading">
                  {"Cookies & Tracking"}
                </h2>
                {" "}
                <p className="tandc-para">
                  Our website may use cookies and similar technologies to enhance your browsing experience, analyze traffic, and improve our services. You can manage cookie preferences through your browser settings.
                </p>
              </div>
            </div>
            {" "}
            <div className="part-one-content">
              <div className="part-one-content-two">
                <h2 className="tandc-subheading">
                  Your Rights
                </h2>
                {" "}
                <p className="tandc-para">
                  You have the right to access, update, or request deletion of your personal information. To exercise these rights, please contact us using the details provided on our website.
                </p>
              </div>
              {" "}
              <div className="part-one-content-three">
                <h2 className="tandc-subheading">
                  Changes to Privacy Policy
                </h2>
                {" "}
                <p className="tandc-para">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically to stay informed.
                </p>
              </div>
            </div>
            {" "}
            {" "}
            <a href="https://wa.me/919977723584?text=Hi%20I%20need%20help" className="whatsapp-float" id="whatsappButton" target="_blank">
              {" "}
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Chat" />
              {" "}
              <span className="notification-dot"></span>
              {" "}
            </a>
          </div>
        </section>
        {" "}
        {" "}
        <footer>
          <div className="footer-partone">
            <div className="footer-inforag">
              <div className="footer-image">
                <img src="./img/cos-white-logo.webp" alt="" />
              </div>
              {" "}
              <div className="footer-dis">
                <p>
                  {" Code of School by Inforag Technology empowers future tech innovators through hands-on training in coding, data science, AI, and full-stack development. Our practical, industry-driven curriculum ensures students gain job-ready skills and real-world project experience."}
                </p>
              </div>
              {" "}
              <div className="footer-logo">
                <a href="https://www.instagram.com/codeofschool/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path>
                  </svg>
                </a>
                {" "}
                <a href="https://www.linkedin.com/company/code-of-school" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path>
                  </svg>
                </a>
                {" "}
                <a href="https://www.facebook.com/codeofschool" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                  </svg>
                </a>
                {" "}
                <a href="https://x.com/codeofschool" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
                  </svg>
                </a>
              </div>
            </div>
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
                    Contact Us
                  </Link>
                </li>
                {" "}
                <li>
                  <h3>
                    {"Legal & Info "}
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
            <div className="footer-service">
              <ul>
                <li>
                  <Link to="/digital_marketing.html">
                    Digital Marketing with AI
                  </Link>
                </li>
                {" "}
                <li>
                  <Link to="/java_full_stack.html">
                    Java Full Stack Development
                  </Link>
                </li>
                {" "}
                <li>
                  <Link to="/java_core_and_advanced.html">
                    {"Java Core & Advanced"}
                  </Link>
                </li>
                {" "}
                <li>
                  <Link to="/mern_stack.html">
                    MERN Stack Development
                  </Link>
                </li>
                {" "}
                <li>
                  <Link to="/frontend_with_react.html">
                    Frontend Development
                  </Link>
                </li>
                {" "}
                <li>
                  <Link to="/mobile_app_development.html">
                    Mobile App Development
                  </Link>
                </li>
                {" "}
                <li>
                  <Link to="/data_science.html">
                    Data Science
                  </Link>
                </li>
                {" "}
                <li>
                  <Link to="/data_analysis.html">
                    Data Analysis
                  </Link>
                </li>
                {" "}
                <li>
                  <Link to="/ui_ux_design.html">
                    UI/UX Design
                  </Link>
                </li>
                {" "}
                <li>
                  <Link to="/python.html">
                    Python Development
                  </Link>
                </li>
                {" "}
                <li>
                  <Link to="/python_full_stack.html">
                    Python Full-Stack
                  </Link>
                </li>
                {" "}
                <li>
                  <Link to="/C_and_C++.html">
                    {"C & C++"}
                  </Link>
                </li>
              </ul>
            </div>
            {" "}
            <div className="footer-contact">
              <h3 id="heading-three">
                Contact Us
              </h3>
              {" "}
              <div className="footer-contact-loc">
                <div className="footer-contact-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"></path>
                  </svg>
                </div>
                {" "}
                <div className="footer-contact-location">
                  <a href={"https://www.google.com/maps/place/Code+Of+School/@22.7247256,75.8354956,13z/data=!4m10!1m2!2m1!1scode+of+school+indore!3m6!1s0x3962fd45228527cb:0x7622cac56fecc69d!8m2!3d22.7495525!4d75.8956164!15sChVjb2RlIG9mIHNjaG9vbCBpbmRvcmWSARtzb2Z0d2FyZV90cmFpbmluZ19pbnN0aXR1dGXgAQA!16s%2Fg%2F11xp6pw1j6?entry=ttu&g_ep=EgoyMDI2MDQxMy4wIKXMDSoASAFQAw%3D%3D+-+Web+%7C+App+%7C+Digital+Marketing+%7C+Software+Company+in+Indore/@22.7496616,75.8953251,3a,75y/data=!3m8!1e2!3m6!1sAF1QipP1gRwG7pwN49gQMMzKXwBFGqWpqR2oBXTp7Kna!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipP1gRwG7pwN49gQMMzKXwBFGqWpqR2oBXTp7Kna%3Dw114-h86-k-no!7i4160!8i3120!4m7!3m6!1s0x3962fd13477b7e61:0x8cfc2e3f59b0c1b3!8m2!3d22.749631!4d75.8954539!10e5!16s%2Fg%2F11x1jbjxtj?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"} target="_blank">
                    <b>
                      Indore (Head Office):
                    </b>
                    {" Office No. 421 Fourth Floor, Shagun Tower, Rasoma Square, Vijay Nagar, Ratna Lok Colony, Indore, MP 452010"}
                  </a>
                </div>
              </div>
              {" "}
              <div className="footer-contact-phoneno">
                <div className="footer-contact-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path>
                  </svg>
                </div>
                {" "}
                <div className="contact-no">
                  <ul>
                    <li>
                      <a href="tel:9977723584">
                        +91 9977-723-584
                      </a>
                    </li>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"></path>
                  </svg>
                </div>
                {" "}
                <div className="footer-contact-location">
                  <a href={"https://www.google.com/maps/place/SBI+Branch+Seoni+Malwa/@22.456887,77.4745115,17z/data=!3m1!4b1!4m6!3m5!1s0x397d951da2d23db9:0xb53e632f76801d6f!8m2!3d22.456887!4d77.4745115!16s%2Fg%2F11pv83p_36?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"} target="_blank">
                    <b>
                      Seoni Malwa Office :
                    </b>
                    {" Main Road, above SBI Main Branch, near Geeta Talkies, Seoni Malwa. MP 461223"}
                  </a>
                </div>
              </div>
              {" "}
              <div className="footer-contact-phoneno">
                <div className="footer-contact-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path>
                  </svg>
                </div>
                {" "}
                <div className="contact-no">
                  <ul>
                    <li>
                      <a href="tel:6263945418">
                        +91 6263-945-418
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {" "}
              <div className="footer-contact-mail">
                <div className="footer-contact-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"></path>
                  </svg>
                </div>
                {" "}
                <div className="office">
                  <ul>
                    <li>
                      {"Mon-Sat : 10:00 AM - 8:00 PM "}
                    </li>
                    {" "}
                    {" "}
                    <li>
                      {"Sunday : Closed "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
      </div>
      {" "}
    </PageFrame>
  );
}
