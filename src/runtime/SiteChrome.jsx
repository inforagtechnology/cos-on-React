import { useState } from "react";
import { Link } from "react-router-dom";

const navigation = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/course", label: "Courses" },
  { to: "/placement", label: "Our Placements" },
  { to: "/contact-us", label: "Contact Us" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header>
        <nav>
          <div className="nav-image">
            <Link to="/">
              <img src="/img/cos-white-logo.webp" alt="Code Of School" />
            </Link>
          </div>
          <div className="nav-pg">
            <ul className="nav-page">
              {navigation.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to}>{label === "Courses" ? "Courses ▼" : label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-but">
            <Link to="/contact-us" className="call-btn">Enroll Now</Link>
          </div>
          <button
            aria-label="Open navigation"
            className="hamburger-menu"
            onClick={() => setMobileOpen(true)}
            type="button"
          >
            ☰
          </button>
        </nav>
      </header>
      <div className={`mobile-nav-overlay${mobileOpen ? " active" : ""}`}>
        <button
          aria-label="Close navigation"
          className="close-btn"
          onClick={() => setMobileOpen(false)}
          type="button"
        >
          ×
        </button>
        <ul className="mobile-nav-page">
          {navigation.map(({ to, label }) => (
            <li key={label}>
              <Link onClick={() => setMobileOpen(false)} to={to}>{label}</Link>
            </li>
          ))}
        </ul>
        <div className="mobile-nav-button">
          <Link className="call-btn" onClick={() => setMobileOpen(false)} to="/contact-us">
            Enroll Now
          </Link>
        </div>
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-partone">
        <div className="footer-inforag">
          <div className="footer-image">
            <Link to="/">
              <img src="/img/cos-white-logo.webp" alt="Code Of School Logo" />
            </Link>
          </div>
          <div className="footer-dis">
            <p>
              Code of School by Inforag Technology empowers future tech innovators
              through practical training, real-world projects, and career-focused guidance.
            </p>
          </div>
          <div className="footer-log">
            <div className="logo-box"><img src="/img/course_img/cmmi-removebg-preview-3.png" alt="CMMI" /></div>
            <div className="logo-box"><img src="/img/course_img/iso-final-removebg-preview-1.png" alt="ISO" /></div>
            <div className="logo-box"><img src="/img/course_img/iso-removebg-preview-1.png" alt="ISO" /></div>
            <div className="logo-box"><img src="/img/course_img/msme-removebg-preview.png" alt="MSME" /></div>
          </div>
        </div>

        <div className="footer-quicklink">
          <ul>
            <h3 id="heading">Quick Links</h3>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/course">Courses</Link></li>
            <li><Link to="/placement">Our Placement</Link></li>
            <li><Link to="/blogs">Blog</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3 id="heading-three">Connect With Us</h3>
          <div className="footer-contact-loc">
            <div className="footer-contact-location">
              <a href="https://maps.google.com/?q=Code+Of+School+Indore" target="_blank" rel="noreferrer">
                <b>Head Office (Indore):</b> Office No. 421, Shagun Tower, Vijay Nagar, Indore, MP
              </a>
            </div>
          </div>
          <div className="footer-contact-phoneno">
            <div className="contact-no">
              <ul className="phone-list">
                <li><a href="tel:+919977723584">+91 9977-723-584</a></li>
                <li><a href="tel:+919165234695">+91 9165-234-695</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-contact">
          <h3 id="heading-two">Get in Touch</h3>
          <div className="footer-contact-mail">
            <div className="contact-mail">
              <a href="mailto:thecodeofschool@gmail.com">thecodeofschool@gmail.com</a>
            </div>
          </div>
          <div className="footer-contact-time">
            <div className="contact-time">
              <ul>
                <li>Mon–Sat 10:00 AM – 8:00 PM</li>
                <li>Sunday Closed</li>
              </ul>
            </div>
          </div>
          <div className="footer-logo">
            <a href="https://www.instagram.com/codeofschool/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/company/code-of-school" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.facebook.com/codeofschool" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
      </div>

      <div className="footer-offer">
        <div className="footer-coures">
          <h4>Courses We Offer</h4>
          <div className="coures-location">
            <p>
              <Link to="/digital_marketing">Digital Marketing</Link>
              <Link to="/mern_stack">MERN Stack</Link>
              <Link to="/python_full_stack">Python Full Stack</Link>
              <Link to="/data_science">Data Science</Link>
              <Link to="/frontend_with_react">Frontend Development</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-parttwo">
        <h3>
          Copyright © 2025 <a href="https://inforag.com/" target="_blank" rel="noreferrer">Inforag Technology</a>
          {" "}All rights reserved
        </h3>
      </div>
    </footer>
  );
}
