import PageFrame from "@/runtime/PageFrame.jsx";
import { Link } from "react-router-dom";

// Converted from contact-us.html
const styles = [{ href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" }, { href: "/contactustwo.css" }, { href: "/header-footer.css" }, { css: "\n        .section-two {\n            display: flex;\n            gap: 10px;\n            padding: 10px;\n        }\n\n        /* Each map container */\n        .map {\n            flex: 1;\n            overflow: hidden;\n            border-radius: 10px;\n            text-align: center;\n        }\n\n        /* Make iframe responsive */\n        .map iframe {\n            width: 100%;\n            height: 400px;\n            border: 0;\n        }\n\n        .map h3 {\n            font-style: italic;\n            color: aliceblue;\n        }\n\n        .contact-head-four a {\n            font-size: 17px;\n            font-weight: 400px;\n        }\n\n\n        /* Tablet */\n        @media (max-width: 900px) {\n            .section-two {\n                flex-direction: column;\n            }\n\n            .map iframe {\n                height: 350px;\n            }\n        }\n\n        /* Mobile */\n        @media (max-width: 600px) {\n            .map iframe {\n                height: 300px;\n            }\n\n        }\n\n        .contact-head-four b {\n            font-style: normal;\n            background: linear-gradient(135deg, #fcd34d, #f97316);\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n        }\n\n        .contact-part-one {\n           margin-top: -20px; /* adjust this value up/down to taste */\n}\n        \n    " }];
const scripts = [{ src: "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js" }, { src: "/contact-us.js", names: {"fn":["sendEmail"],"vars":[],"lex":[],"consts":[]} }, { src: "/script.js", names: {"fn":["showCourseList"],"vars":[],"lex":["faqs","cards","observer"],"consts":["faqs","cards","observer"]} }];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>Contact Us | Code Of School – Get in Touch Today</title>
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo2.png" type="image/webp" />
          <meta name="description" content="Get in touch with Code Of School for programming, web development, and digital marketing courses. Contact us for admissions, support, and career guidance." />
          <meta name="robots" content="index,follow" />
          <meta name="author" content="Ritendra Gour" />
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content="About Code of School, 100% Job Assurance ,Contact Code Of School, get in touch Code Of School, Code Of School inquiry, Programming training institute in Indore, programming training institute in Seoni Malwa, Digital Marketing institute in Indore, Digital Marketing Institute in Seoni Malwa, Coding classes in Indore, Coding Classes in Seoni Malwa, Learn Java Python MERN React WordPress, Code of School About Page" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Contact Us | Code Of School — Get in Touch in Indore and Seoni Malwa" />
          <meta property="og:description" content="Get in touch with Code Of School for course details, admissions, and career guidance. Contact our team for quick support and expert assistance." />
          <meta property="og:url" content="https://codeofschool.com/contact-us.html" />
          <meta property="og:site_name" content="Code of School" />
          <meta property="og:image" content="https://codeofschool.com/img/cos-white-logo2.png" />
          <meta property="og:image:alt" content={"About Code of School — Best Programming & Digital Marketing Training Institute"} />
          <meta itemProp="name" content="Code Of School" />
          <meta itemProp="description" content="Connect with Code Of School for programming, web development, and digital marketing courses. Reach out for admissions, support, and expert career guidance" />
          <meta itemProp="image" content="./img/cos-white-logo2.png" />
          <meta name="twitter:card" content="https://codeofschool.com/img/cos-white-logo2.png" />
          <meta name="twitter:site" content="@codeofschool" />
          <meta name="twitter:creator" content="Ritendra gour" />
          <meta name="twitter:title" content={"About Code of School — Best Programming & Digital Marketing Training Institute in Indore and Seoni Malwa"} />
          <meta name="twitter:description" content="Code Of School helps beginners learn coding, Digital Marketing and web development with easy-to-follow courses, practical projects, and industry-relevant skills." />
          <meta name="twitter:image" content="https://codeofschool.com/img/cos-white-logo2.png" />
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo2.png" type="image/webp" />
          <link rel="icon" href="./img/cos-white-logo2.png" type="image/webp" />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{ \n  \"@context\": \"https://schema.org\", \n  \"@type\": \"ContactPage\", \n  \"name\": \"Contact Us - Code Of School\", \n  \"url\": \"https://codeofschool.com/contact-us.html\", \n  \"description\": \"Code Of School se support, queries, feedback aur partnership ke liye contact \nkarein. Hamari team aapki madad ke liye uplabdh hai.\", \n  \"publisher\": { \n    \"@type\": \"Organization\", \n    \"name\": \"Code Of School\", \n    \"logo\": \"https://codeofschool.com/img/cos-white-logo2.png\", \n    \"url\": \"https://codeofschool.com/\" \n  } \n}" }} />
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
        <section className="contact-part-one">
          <div className="">
            <h1 className="contact-head-one">
              <u>
                Contact Us
              </u>
            </h1>
          </div>
          {" "}
          <div className="form-part">
            <div className="editing">
              <div className="left-one">
                <div className="form-left-part">
                  <div className="contact-medium">
                    <h3 className="contact-head-two">
                      <div className="contact-add-label">
                        {" Phone : \u00a0 "}
                        <a href="tel:+919977723584">
                          {" "}
                          <h3>
                            9977723584 , 9165234695
                          </h3>
                          {" "}
                        </a>
                      </div>
                    </h3>
                    {" "}
                    <h3 className="contact-head-three">
                      <div className="contact-add-label">
                        {" Email : \u00a0 "}
                        <a href="mailto:thecodeofschool@gmail.com" target="_blank">
                          thecodeofschool@gmail.com
                        </a>
                      </div>
                    </h3>
                    {" "}
                    <h3 className="contact-head-four">
                      <a href="https://maps.app.goo.gl/KjbKsYDWKZPCFACv9" target="_blank" style={{ lineHeight: "1.5" }}>
                        <b>
                          {"Indore(Head Office): "}
                        </b>
                        Office No. 421 Fourth Floor, Shagun Tower, Rasoma Square, Vijay Nagar, Ratna Lok Colony Indore. MP 452010
                      </a>
                    </h3>
                    {" "}
                    <h3 className="contact-head-four">
                      <a href={"https://www.google.com/maps/place/CANARA+BANK+-+INDORE+PALASIA+POINT/@22.7229014,75.8875932,20.5z/data=!4m7!3m6!1s0x3962fd4ea8f55ef5:0xc0faeb545450efb5!4b1!8m2!3d22.7230581!4d75.8878384!16s%2Fg%2F1q62fh6ws?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D"} target="_blank" style={{ lineHeight: "1.5" }}>
                        <b>
                          Indore (Branch office) :
                        </b>
                        {" Office No.104 , Day Tower , Above Canara bank, Behind Shekhar central , Palasia Square Indore. MP 452010 "}
                      </a>
                    </h3>
                    {" "}
                    <a className="map-btn" href={"https://www.google.com/maps/place/CANARA+BANK+-+INDORE+PALASIA+POINT/@22.7229014,75.8875932,20.5z/data=!4m7!3m6!1s0x3962fd4ea8f55ef5:0xc0faeb545450efb5!4b1!8m2!3d22.7230581!4d75.8878384!16s%2Fg%2F1q62fh6ws?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D"} target="_blank" rel="noopener">
                      VIEW MAP
                    </a>
                    {" "}
                    <h3 className="contact-head-four">
                      <a href={"https://www.google.com/maps/place/SBI+Branch+Seoni+Malwa/@22.456887,77.4745115,17z/data=!3m1!4b1!4m6!3m5!1s0x397d951da2d23db9:0xb53e632f76801d6f!8m2!3d22.456887!4d77.4745115!16s%2Fg%2F11pv83p_36?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"} target="_blank" style={{ lineHeight: "1.5" }}>
                        <b>
                          Seoni Malwa (Branch Office) :
                        </b>
                        {" Main Road, above SBI Main Branch, near Geeta Talkies, Seoni Malwa. MP 461223"}
                      </a>
                    </h3>
                  </div>
                  {" "}
                </div>
              </div>
              {" "}
              <div className="form-part-two">
                <a href="mailto:thecodeofschool@gmail.com" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"></path>
                  </svg>
                </a>
                {" "}
                <a href="https://wa.me/+919977723584" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path>
                  </svg>
                </a>
                {" "}
                <a href="https://www.linkedin.com/company/code-of-school/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path>
                  </svg>
                </a>
                {" "}
                <a href="https://www.instagram.com/codeofschool" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path>
                  </svg>
                </a>
                {" "}
                <a href="https://www.facebook.com/codeofschool/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                  </svg>
                </a>
                {" "}
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
                  </svg>
                </a>
              </div>
            </div>
            {" "}
            <div className="form-right-part">
              <form id="contactForm" onSubmit={(event) => { sendEmail(event); }}>
                <div className="for-inp">
                  <label id="for-label" htmlFor="name">
                    Name:
                  </label>
                  {" "}
                  <input type="text" name="name" id="name" className="for-inp-field" />
                </div>
                {" "}
                {" "}
                <div className="for-inp">
                  <label id="for-label" htmlFor="course">
                    Course:
                  </label>
                  {" "}
                  <select name="course" id="course" className="for-inp-field">
                    <option value="">
                      {" -Select Course- "}
                    </option>
                    <option value="mern">
                      MERN Stack Development
                    </option>
                    <option value="java">
                      Java Full Stack
                    </option>
                    <option value="nextjs">
                      Next.js
                    </option>
                    <option value="c_cpp">
                      C with C++
                    </option>
                    <option value="wordpress">
                      WordPress
                    </option>
                    <option value="python">
                      Python
                    </option>
                    <option value="dsa_cpp">
                      DSA and C++
                    </option>
                    <option value="php">
                      {"PHP Core & Advanced"}
                    </option>
                    <option value="java">
                      {"Java Core & Advanced"}
                    </option>
                    <option value="frontend">
                      Frontend (React/Angular)
                    </option>
                    <option value="django">
                      Python with Django
                    </option>
                    <option value="reactnative">
                      React Native
                    </option>
                    <option value="pythonfs">
                      Python Full Stack
                    </option>
                    <option value="analysis">
                      Data Analysis
                    </option>
                    <option value="datascience">
                      Data Science
                    </option>
                    <option value="marketing">
                      Digital Marketing
                    </option>
                    <option value="uiux">
                      UI/UX Development
                    </option>
                    <option value="mobileapp">
                      Mobile App Development
                    </option>
                    <option value="mobileapp">
                      Business Development Executive
                    </option>
                  </select>
                </div>
                {" "}
                <div className="for-inp">
                  <label id="for-label" htmlFor="email">
                    E-mail:
                  </label>
                  {" "}
                  <input type="email" name="Email" id="email" className="for-inp-field" />
                </div>
                {" "}
                <div className="for-inp">
                  <label id="for-label" htmlFor="phone">
                    Phone:
                  </label>
                  {" "}
                  <input type="tel" name="phone" id="phone" className="for-inp-field" />
                </div>
                {" "}
                {" "}
                <div className="btn">
                  <button>
                    Submit
                  </button>
                </div>
              </form>
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
        <section className="section-two">
          <div className="map">
            {" "}
            <h3 style={{ color: "#454545", fontSize: "22px", fontWeight: "600", marginBottom: "10px", textTransform: "uppercase" }}>
              {" Indore Head Office "}
            </h3>
            {" "}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.432186622996!2d75.89285919968663!3d22.749336952942723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd45228527cb%3A0x7622cac56fecc69d!2sCode%20Of%20School%20-%20AI%20Powered%20Learning!5e0!3m2!1sen!2sin!4v1755786200858!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          {" "}
        </section>
        {" "}
        <section className="section-two">
          <div className="map">
            <h3 style={{ color: "#454545", fontSize: "22px", fontWeight: "600", marginBottom: "10px", textTransform: "uppercase" }}>
              {" Indore Branch Office "}
            </h3>
            {" "}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d685.3486176028283!2d75.88745465461223!3d22.722828985012132!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd39d398cd9b%3A0x342da573984560e7!2s14%20Day%20Tower%2C%20palasia%20point%2C%2019%2F1%2C%20below%20Canara%20Bank%2C%20Manorama%20Ganj%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1781180603427!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            {" "}
          </div>
          {" "}
          <div className="map">
            <h3 style={{ color: "#454545", fontSize: "22px", fontWeight: "600", marginBottom: "10px", textTransform: "uppercase" }}>
              {" Seoni Malwa Branch Office "}
            </h3>
            {" "}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.2593313466723!2d77.47193657440057!3d22.456886979574264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397d951da2d23db9%3A0xb53e632f76801d6f!2sSBI%20Branch%20Seoni%20Malwa!5e0!3m2!1sen!2sin!4v1773811493590!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} margin="10px 30px" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            {" "}
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
    </PageFrame>
  );
}
