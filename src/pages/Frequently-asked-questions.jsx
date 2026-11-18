import PageFrame from "@/runtime/PageFrame.jsx";
import { Link } from "react-router-dom";

// Converted from Frequently-asked-questions.html
const styles = [{ href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" }, { href: "/termsandcondition.css" }, { href: "/header-footer.css" }];
const scripts = [{ src: "/script.js", names: {"fn":["showCourseList"],"vars":[],"lex":["faqs","cards","observer"],"consts":["faqs","cards","observer"]} }];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>{"Terms & Conditions | Code of School"}</title>
          <meta name="description" content={"Read the Terms & Conditions of Code of School. Understand our policies regarding courses, fees, usage, privacy, and student responsibilities."} />
          <link rel="canonical" href="https://codeofschool.com/terms-and-conditions" />
          <meta name="keywords" content="Code of School terms, terms and conditions, policies, course terms, student guidelines" />
          <meta name="author" content="Ritendra Gour" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content={"Terms & Conditions | Code of School"} />
          <meta property="og:description" content={"Review the Terms & Conditions of Code of School, including course policies, usage rules, and student responsibilities."} />
          <meta property="og:url" content="https://codeofschool.com/terms-and-conditions" />
          <meta property="og:image" content="https://codeofschool.com/img/cos-white-logo2.png" />
          <meta name="twitter:title" content={"Terms & Conditions | Code of School"} />
          <meta name="twitter:description" content={"Learn about the Terms & Conditions of Code of School related to courses, privacy, and usage policies."} />
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
              Frequently Asked Questions
            </h1>
          </div>
          {" "}
          <div className="part-one-content">
            <div className="part-one-content-one">
              <h2 className="tandc-subheading">
                Frequently Asked Questions (FAQ)
              </h2>
              {" "}
              <p className="tandc-para">
                <strong>
                  Q1: What is Code of School?
                </strong>
              </p>
              {" "}
              <p className="tandc-para">
                Code of School is an IT training institute that provides courses in Digital Marketing, Web Development, Programming, and other technology fields.
              </p>
              {" "}
              <p className="tandc-para">
                <strong>
                  Q2: How can I enroll in a course?
                </strong>
              </p>
              {" "}
              <p className="tandc-para">
                You can enroll directly through our website or by contacting our support team. Once registered, you’ll receive confirmation and course details.
              </p>
              {" "}
              <p className="tandc-para">
                <strong>
                  Q3: Do I need to create an account?
                </strong>
              </p>
              {" "}
              <p className="tandc-para">
                Yes, creating an account is required to access course materials, track progress, and manage your learning experience.
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
              <p className="tandc-para">
                <strong>
                  Q4: What kind of courses are offered?
                </strong>
              </p>
              {" "}
              <p className="tandc-para">
                We offer courses in Full Stack Development, Digital Marketing, Python, ReactJS, PHP, C/C++, Mobile App Development, and UI/UX Design.
              </p>
              {" "}
              <p className="tandc-para">
                <strong>
                  Q5: How are classes conducted?
                </strong>
              </p>
              {" "}
              <p className="tandc-para">
                Classes are available in both online and offline modes, depending on the course and schedule.
              </p>
              {" "}
              <p className="tandc-para">
                <strong>
                  Q6: What is the fee structure?
                </strong>
              </p>
              {" "}
              <p className="tandc-para">
                Course fees vary depending on the program. Please visit the course page or contact us for detailed pricing.
              </p>
            </div>
            {" "}
            <div className="part-one-content-three">
              <p className="tandc-para">
                <strong>
                  Q7: Do you provide certificates?
                </strong>
              </p>
              {" "}
              <p className="tandc-para">
                Yes, upon successful completion of the course, students receive a recognized certificate from Code of School.
              </p>
              {" "}
              <p className="tandc-para">
                <strong>
                  Q8: Is there placement assistance?
                </strong>
              </p>
              {" "}
              <p className="tandc-para">
                Yes, we provide placement assistance, including resume building, interview preparation, and job referrals with our hiring partners.
              </p>
            </div>
          </div>
          {" "}
          <div className="part-one-content">
            <div className="part-one-content-two">
              <p className="tandc-para">
                <strong>
                  Q9: How can I contact support?
                </strong>
              </p>
              {" "}
              <p className="tandc-para">
                You can reach us through our website contact form, email, or by calling the phone numbers provided in the Contact Us section.
              </p>
            </div>
          </div>
          {" "}
          <div className="part-one-content">
            <div className="part-one-content-two">
              <p className="tandc-para">
                <strong>
                  {"Q10: Where Learning Translates Into Opportunity "}
                </strong>
              </p>
              {" "}
              <p className="tandc-para">
                {" Develop in-demand Digital Marketing and Full Stack Development skills through expert-led training, hands-on projects, and a curriculum shaped by industry needs. "}
              </p>
            </div>
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
      </section>
      {" "}
      {" "}
    </PageFrame>
  );
}
