import PageFrame from "@/runtime/PageFrame.jsx";
import { Link } from "react-router-dom";

// Converted from newdigital.html
const styles = [{ href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600;700&display=swap" }, { href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" }, { href: "/newdigital.css" }];
const scripts = [{ code: "\n        // Select all cards that need scroll animations\n        const cards = document.querySelectorAll('.animated-card');\n\n        // Configuration for the Intersection Observer\n        const observerOptions = {\n            root: null,         // Uses the browser viewport\n            threshold: 0.15,    // Trigger animation when 15% of the card is visible\n            rootMargin: \"0px 0px -50px 0px\" // Triggers slightly before the card hits the bottom view\n        };\n\n        const cardObserver = new IntersectionObserver((entries, observer) => {\n            entries.forEach(entry => {\n                // If the card enters the viewport area\n                if (entry.isIntersecting) {\n                    entry.target.classList.add('show'); // Adds the CSS class to trigger the transition\n                    observer.unobserve(entry.target);   // Stops tracking once animated (keeps it on screen)\n                }\n            });\n        }, observerOptions);\n\n        // Tell the observer to watch each individual card\n        cards.forEach(card => {\n            cardObserver.observe(card);\n        });\n\n        const careerCards = document.querySelectorAll('.career-card');\n\n        const animationOptions = {\n            root: null,\n            threshold: 0.15, // Triggers animation when 15% of the card is visible\n            rootMargin: \"0px 0px -20px 0px\"\n        };\n\n        const scrollObserver = new IntersectionObserver((entries, observer) => {\n            entries.forEach(entry => {\n                if (entry.isIntersecting) {\n                    entry.target.classList.add('visible');\n                    observer.unobserve(entry.target); // Keeps them animated on screen once fired\n                }\n            });\n        }, animationOptions);\n\n        careerCards.forEach(card => scrollObserver.observe(card));\n    ", names: {"fn":[],"vars":[],"lex":["cards","observerOptions","cardObserver","careerCards","animationOptions","scrollObserver"],"consts":["cards","observerOptions","cardObserver","careerCards","animationOptions","scrollObserver"]} }, { code: "\n  // Mobile nav\n  const ham = document.getElementById('hamburger');\n  const overlay = document.getElementById('mobileOverlay');\n  const close = document.getElementById('mobClose');\n  ham.addEventListener('click', () => overlay.classList.add('open'));\n  close.addEventListener('click', () => overlay.classList.remove('open'));\n\n  // FAQ accordion\n  document.querySelectorAll('.faq-q').forEach(btn => {\n    btn.addEventListener('click', () => {\n      const item = btn.parentElement;\n      const isOpen = item.classList.contains('open');\n      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));\n      if (!isOpen) item.classList.add('open');\n    });\n  });\n", names: {"fn":[],"vars":[],"lex":["ham","overlay","close"],"consts":["ham","overlay","close"]} }];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>{"Digital Marketing Course | Code of School — Indore & Seoni Malwa"}</title>
          <meta name="description" content="Learn SEO, Google Ads, Social Media Marketing, and more. Become a job-ready digital marketer with hands-on projects and certifications." />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Ritendra Gour" />
          <link rel="canonical" href="https://codeofschool.com/courses/digital-marketing" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Digital Marketing Course | Code Of School" />
          <meta property="og:description" content={"Join Code Of School's digital marketing course and learn SEO, social media, Google Ads, and more."} />
          <meta property="og:url" content="https://codeofschool.com/digital_marketing.html" />
          <meta property="og:site_name" content="Code of School" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        </>
      }
    >
      {" "}
      {" "}
      {" "}
      {" "}
      {" "}
      <section className="hero">
        <div className="hero-wrap">
          {" "}
          <div className="breadcrumb">
            <Link to="/">
              Home
            </Link>
            {" "}
            <span className="bc-sep">
              ›
            </span>
            {" "}
            <Link to="/course.html">
              Courses
            </Link>
            {" "}
            <span className="bc-sep">
              ›
            </span>
            {" "}
            <span>
              Digital Marketing
            </span>
          </div>
          {" "}
          <div className="hero-grid">
            {" "}
            <div className="hero-left">
              <div className="badges">
                <span className="badge badge-gold">
                  ⭐ Bestseller
                </span>
                {" "}
                <span className="badge badge-green">
                  ✓ Updated Nov 2024
                </span>
                {" "}
                <span className="badge badge-orange">
                  🎓 Certificate Included
                </span>
              </div>
              {" "}
              <h1 className="hero-title">
                Best Digital Marketing Institute in Indore
                <br />
                <em>
                  {" Complete Guide for Students."}
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
                  {"\u00a0rating"}
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
                  {"\u00a0video"}
                </div>
                {" "}
                <div className="meta-item">
                  <span className="meta-icon">
                    🌐
                  </span>
                  English · Hindi
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
              <div className="hero-btns">
                <a href="./CoursePdf/Digital Marketing Course Content Code of School (1) (1).pdf" className="btn-primary" download="">
                  {" "}
                  <i className="fa-solid fa-download"></i>
                  {" Download Brochure "}
                </a>
                {" "}
                <a href="./CoursePdf/Digital Marketing Course Content Code of School (1) (1).pdf" className="btn-outline" target="_blank">
                  {" "}
                  <i className="fa-solid fa-file-lines"></i>
                  {" See Syllabus "}
                </a>
              </div>
              {" "}
              <div className="hero-stats">
                <div className="h-stat">
                  <strong>
                    68h
                  </strong>
                  <span>
                    Video
                  </span>
                </div>
                {" "}
                <div className="h-stat">
                  <strong>
                    12
                  </strong>
                  <span>
                    Projects
                  </span>
                </div>
                {" "}
                <div className="h-stat">
                  <strong>
                    180+
                  </strong>
                  <span>
                    Lectures
                  </span>
                </div>
                {" "}
                <div className="h-stat">
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
            <div className="hero-right">
              <div className="enroll-card">
                <img src="./img/CodeOfSchoolCertificate.png" alt="Course Certificate" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <div className="ticker">
        <div className="ticker-track">
          <span>
            Digital Marketing
          </span>
          <span className="dot">
            ●
          </span>
          {" "}
          <span>
            SEO
          </span>
          <span className="dot">
            ●
          </span>
          {" "}
          <span>
            Google Ads
          </span>
          <span className="dot">
            ●
          </span>
          {" "}
          <span>
            Social Media Marketing
          </span>
          <span className="dot">
            ●
          </span>
          {" "}
          <span>
            Content Marketing
          </span>
          <span className="dot">
            ●
          </span>
          {" "}
          <span>
            Email Marketing
          </span>
          <span className="dot">
            ●
          </span>
          {" "}
          <span>
            Performance Marketing
          </span>
          <span className="dot">
            ●
          </span>
          {" "}
          <span>
            Graphic Designing
          </span>
          <span className="dot">
            ●
          </span>
          {" "}
          <span>
            AI Automation
          </span>
          <span className="dot">
            ●
          </span>
          {" "}
          <span>
            Canva
          </span>
          <span className="dot">
            ●
          </span>
          {" "}
          {" "}
          <span>
            Digital Marketing
          </span>
          <span className="dot">
            ●
          </span>
          {" "}
          <span>
            SEO
          </span>
          <span className="dot">
            ●
          </span>
          {" "}
          <span>
            Google Ads
          </span>
          <span className="dot">
            ●
          </span>
          {" "}
          <span>
            Social Media Marketing
          </span>
          <span className="dot">
            ●
          </span>
          {" "}
          <span>
            Content Marketing
          </span>
          <span className="dot">
            ●
          </span>
          {" "}
          <span>
            Email Marketing
          </span>
          <span className="dot">
            ●
          </span>
          {" "}
          <span>
            Performance Marketing
          </span>
          <span className="dot">
            ●
          </span>
          {" "}
          <span>
            Graphic Designing
          </span>
          <span className="dot">
            ●
          </span>
          {" "}
          <span>
            AI Automation
          </span>
          <span className="dot">
            ●
          </span>
          {" "}
          <span>
            Canva
          </span>
          <span className="dot">
            ●
          </span>
        </div>
      </div>
      {" "}
      {" "}
      <section className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item">
            <h2>
              100+ Hrs
            </h2>
            <p>
              Hands-on Learning
            </p>
          </div>
          {" "}
          <div className="stat-item">
            <h2>
              Live Projects
            </h2>
            <p>
              Practical Experience
            </p>
          </div>
          {" "}
          <div className="stat-item">
            <h2>
              50+ Hrs
            </h2>
            <p>
              Practical Assignments
            </p>
          </div>
          {" "}
          <div className="stat-item">
            <h2>
              Lifetime
            </h2>
            <p>
              Community Support
            </p>
          </div>
          {" "}
          <div className="stat-item">
            <h2>
              8+
            </h2>
            <p>
              Expert Faculties
            </p>
          </div>
          {" "}
          <div className="stat-item">
            <h2>
              300+
            </h2>
            <p>
              Learners Per Year
            </p>
          </div>
        </div>
      </section>
      {" "}
      {" "}
      <div className="article-layout">
        {" "}
        <main className="article-main">
          {" "}
          <div className="post-meta-bar">
            <span>
              <i className="fa-regular fa-calendar"></i>
              {" Updated November 2024"}
            </span>
            {" "}
            <span>
              <i className="fa-regular fa-clock"></i>
              {" 13-Week Program"}
            </span>
            {" "}
            <span>
              <i className="fa-solid fa-location-dot"></i>
              {" Indore & Seoni Malwa"}
            </span>
          </div>
          {" "}
          <p className="intro-text">
            {" Digital marketing is the backbone of every modern business. Our "}
            <strong>
              hands-on, industry-led course
            </strong>
            {" is designed for absolute beginners and working professionals alike — no coding background required. You'll learn every core channel, run real campaigns, and graduate with a portfolio that proves your skills. "}
          </p>
          {" "}
          {" "}
          <section className="curriculum-enroll-section">
            <div className="curriculum-section-container">
              <div className="curriculum-left-column">
                <h2 className="section-heading">
                  <span className="heading-label">
                    Curriculum
                  </span>
                  {"What You'll Learn "}
                </h2>
                {" "}
                <div className="learn-grid">
                  <div className="learn-item">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    {" SEO Fundamentals"}
                  </div>
                  {" "}
                  <div className="learn-item">
                    <i className="fa-brands fa-instagram"></i>
                    {" Social Media Marketing"}
                  </div>
                  {" "}
                  <div className="learn-item">
                    <i className="fa-brands fa-google"></i>
                    {" Google Ads & PPC"}
                  </div>
                  {" "}
                  <div className="learn-item">
                    <i className="fa-regular fa-envelope"></i>
                    {" Email Marketing"}
                  </div>
                  {" "}
                  <div className="learn-item">
                    <i className="fa-solid fa-chart-line"></i>
                    {" Web Analytics"}
                  </div>
                  {" "}
                  <div className="learn-item">
                    <i className="fa-solid fa-funnel-dollar"></i>
                    {" Marketing Funnels"}
                  </div>
                  {" "}
                  <div className="learn-item">
                    <i className="fa-solid fa-bullseye"></i>
                    {" Brand Positioning"}
                  </div>
                  {" "}
                  <div className="learn-item">
                    <i className="fa-solid fa-pen-nib"></i>
                    {" Content Creation Strategies"}
                  </div>
                </div>
              </div>
              {" "}
              <div className="curriculum-right-column">
                <div className="sidebar-card sticky-card">
                  <h3 className="sidebar-title">
                    Quick Enroll
                  </h3>
                  {" "}
                  <div className="sidebar-row">
                    <span>
                      Duration
                    </span>
                    <strong>
                      13 Weeks
                    </strong>
                  </div>
                  {" "}
                  <div className="sidebar-row">
                    <span>
                      Lessons
                    </span>
                    <strong>
                      78 Lessons
                    </strong>
                  </div>
                  {" "}
                  <div className="sidebar-row">
                    <span>
                      Language
                    </span>
                    <strong>
                      English + Hindi
                    </strong>
                  </div>
                  {" "}
                  <div className="sidebar-row">
                    <span>
                      Certificate
                    </span>
                    <strong>
                      Yes (3 Certs)
                    </strong>
                  </div>
                  {" "}
                  <div className="sidebar-row">
                    <span>
                      Live Classes
                    </span>
                    <strong>
                      Yes
                    </strong>
                  </div>
                  {" "}
                  <a href={"https://wa.me/919977723584?text=Hi!%20I'm%20interested%20in%20the%20Digital%20Marketing%20course."} target="_blank" className="sidebar-btn">
                    {" "}
                    <i className="fa-brands fa-whatsapp"></i>
                    {" Enroll on WhatsApp "}
                  </a>
                </div>
              </div>
            </div>
          </section>
          {" "}
          {" "}
          <h2 className="section-heading">
            <span className="heading-label">
              Roadmap
            </span>
            Course Modules
          </h2>
          {" "}
          <div className="module-card">
            <div className="module-header">
              <div className="module-week">
                Week 0 – 4
              </div>
              {" "}
              <div className="module-lessons">
                0 – 24 Lessons
              </div>
            </div>
            {" "}
            <h3 className="module-title">
              Beginner — Marketing Basics
            </h3>
            {" "}
            <p className="module-desc">
              Understand digital channels and key terms. Build the foundation every marketer needs before running a single campaign.
            </p>
            {" "}
            <ul className="module-list">
              <li>
                {"SEO & SEM Basics"}
              </li>
              {" "}
              <li>
                {"Audience Research & Persona Building"}
              </li>
            </ul>
          </div>
          {" "}
          <div className="module-card">
            <div className="module-header">
              <div className="module-week">
                Week 4 – 8
              </div>
              {" "}
              <div className="module-lessons">
                24 – 48 Lessons
              </div>
            </div>
            {" "}
            <h3 className="module-title">
              Campaign Strategy
            </h3>
            {" "}
            <p className="module-desc">
              Run real campaigns across platforms. Move from theory to live ad accounts and tangible results.
            </p>
            {" "}
            <ul className="module-list">
              <li>
                Google Ads (Search, Display, Shopping)
              </li>
              {" "}
              <li>
                {"Social Media Management & Meta Ads"}
              </li>
            </ul>
          </div>
          {" "}
          <div className="module-card">
            <div className="module-header">
              <div className="module-week">
                Week 8 – 13
              </div>
              {" "}
              <div className="module-lessons">
                48 – 78 Lessons
              </div>
            </div>
            {" "}
            <h3 className="module-title">
              {"Analytics & Funnels"}
            </h3>
            {" "}
            <p className="module-desc">
              Learn conversion optimization and reporting. Turn data into decisions that grow revenue.
            </p>
            {" "}
            <ul className="module-list">
              <li>
                {"Google Analytics 4 & Data Studio"}
              </li>
              {" "}
              <li>
                {"Email Automations & Funnel Tactics"}
              </li>
            </ul>
          </div>
          {" "}
          {" "}
          <h2 className="section-heading">
            <span className="heading-label">
              Credentials
            </span>
            Certifications You'll Earn
          </h2>
          {" "}
          <p className="body-text">
            {" We provide "}
            <strong>
              ISO-certified digital marketing credentials
            </strong>
            {" designed to strengthen your professional profile and resume. Throughout the 13-week program, you will earn "}
            <strong>
              3 certifications
            </strong>
            {" — including a completion diploma, task-based awards, and an excellence certificate — that validate your skills to future employers. "}
          </p>
          {" "}
          <section className="skills-development-section">
            <div className="skills-container">
              <div className="skills-header">
                <span className="section-tag">
                  Core Competencies
                </span>
                {" "}
                <h2>
                  Skills You Will Learn During a Professional Digital Marketing Course
                </h2>
                {" "}
                <p>
                  A comprehensive, industry-aligned course develops both core technical operations and real-world high-value business skills. These skill sets remain highly valuable regardless of your target industry.
                </p>
              </div>
              {" "}
              <div className="skills-category-grid">
                <div className="skills-pillar-card blueprint-blue">
                  <div className="pillar-header">
                    <div className="pillar-icon">
                      ⚡
                    </div>
                    {" "}
                    <h3>
                      Technical Skills
                    </h3>
                  </div>
                  {" "}
                  <p className="pillar-desc">
                    The algorithmic and platforms-driven execution skills needed to optimize engineering metrics and run performance tools.
                  </p>
                  {" "}
                  <ul className="skills-list">
                    <li>
                      <strong>
                        Search Engine Optimization (SEO)
                      </strong>
                      {" "}
                      <span className="skill-subtxt">
                        Mastering organic Google ranking algorithms.
                      </span>
                    </li>
                    {" "}
                    <li>
                      <strong>
                        Google Ads (PPC)
                      </strong>
                      {" "}
                      <span className="skill-subtxt">
                        Deploying and optimizing paid keyword intent traffic.
                      </span>
                    </li>
                    {" "}
                    <li>
                      <strong>
                        Website Optimization
                      </strong>
                      {" "}
                      <span className="skill-subtxt">
                        Improving user experience, site speeds, and structure.
                      </span>
                    </li>
                    {" "}
                    <li>
                      <strong>
                        Social Media Marketing (SMM)
                      </strong>
                      {" "}
                      <span className="skill-subtxt">
                        Configuring pixel data and multi-channel audiences.
                      </span>
                    </li>
                    {" "}
                    <li>
                      <strong>
                        {"Analytics & Tracking"}
                      </strong>
                      {" "}
                      <span className="skill-subtxt">
                        Reading user journeys in Google Analytics 4.
                      </span>
                    </li>
                    {" "}
                    <li>
                      <strong>
                        Conversion Tracking
                      </strong>
                      {" "}
                      <span className="skill-subtxt">
                        Setting up clean tag management event funnels.
                      </span>
                    </li>
                  </ul>
                </div>
                {" "}
                <div className="skills-pillar-card blueprint-purple">
                  <div className="pillar-header">
                    <div className="pillar-icon">
                      🎯
                    </div>
                    {" "}
                    <h3>
                      Marketing Skills
                    </h3>
                  </div>
                  {" "}
                  <p className="pillar-desc">
                    The psychology-driven design frameworks used to capture human attention, create desire, and scale brand loyalty.
                  </p>
                  {" "}
                  <ul className="skills-list">
                    <li>
                      <strong>
                        Consumer Psychology
                      </strong>
                      {" "}
                      <span className="skill-subtxt">
                        Understanding behavioral buying drivers and hooks.
                      </span>
                    </li>
                    {" "}
                    <li>
                      <strong>
                        Lead Generation Systems
                      </strong>
                      {" "}
                      <span className="skill-subtxt">
                        Capturing scalable databases of warm prospects.
                      </span>
                    </li>
                    {" "}
                    <li>
                      <strong>
                        Content Creation
                      </strong>
                      {" "}
                      <span className="skill-subtxt">
                        Writing high-converting copy and media strategies.
                      </span>
                    </li>
                    {" "}
                    <li>
                      <strong>
                        Brand Building Architecture
                      </strong>
                      {" "}
                      <span className="skill-subtxt">
                        Formulating unified brand positions and trust profiles.
                      </span>
                    </li>
                    {" "}
                    <li>
                      <strong>
                        Funnel Design Logic
                      </strong>
                      {" "}
                      <span className="skill-subtxt">
                        Structuring multi-layer landing page conversion flows.
                      </span>
                    </li>
                  </ul>
                </div>
                {" "}
                <div className="skills-pillar-card blueprint-green">
                  <div className="pillar-header">
                    <div className="pillar-icon">
                      💼
                    </div>
                    {" "}
                    <h3>
                      Business Skills
                    </h3>
                  </div>
                  {" "}
                  <p className="pillar-desc">
                    The high-income communication and operational execution skills required to handle international clients and manage agencies.
                  </p>
                  {" "}
                  <ul className="skills-list">
                    <li>
                      <strong>
                        Client Communication
                      </strong>
                      {" "}
                      <span className="skill-subtxt">
                        Handling corporate pitches, retention, and monthly reporting.
                      </span>
                    </li>
                    {" "}
                    <li>
                      <strong>
                        Project Management
                      </strong>
                      {" "}
                      <span className="skill-subtxt">
                        Coordinating tasks across creative and structural teams.
                      </span>
                    </li>
                    {" "}
                    <li>
                      <strong>
                        Sales Techniques
                      </strong>
                      {" "}
                      <span className="skill-subtxt">
                        Closing high-ticket retainers and managing pipeline structures.
                      </span>
                    </li>
                    {" "}
                    <li>
                      <strong>
                        Business Growth Strategies
                      </strong>
                      {" "}
                      <span className="skill-subtxt">
                        Formulating scalable expansion frameworks for startups.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {" "}
          <section className="career-opportunities-section">
            <div className="section-container">
              <div className="section-header">
                <h2>
                  Career Opportunities After Completing a Digital Marketing Course
                </h2>
                {" "}
                <p>
                  One reason digital marketing is so popular is the incredible variety of career options available to freshers and professionals alike.
                </p>
              </div>
              {" "}
              <div className="career-cards-grid">
                <div className="career-card slide-from-top">
                  <div className="card-body">
                    <h3>
                      SEO Executive
                    </h3>
                    {" "}
                    <p>
                      Responsible for analyzing, reviewing, and implementing structural website changes to improve organic search rankings and drive high-intent web traffic.
                    </p>
                  </div>
                  {" "}
                  <div className="card-footer">
                    <span className="salary-label">
                      Average Salary
                    </span>
                    {" "}
                    <span className="salary-value">
                      ₹2.5 – ₹6 LPA
                    </span>
                  </div>
                </div>
                {" "}
                <div className="career-card slide-from-bottom">
                  <div className="card-body">
                    <h3>
                      Social Media Manager
                    </h3>
                    {" "}
                    <p>
                      Manages multi-channel social networks, shapes public brand perception, and builds high-engagement growth strategies to connect with audiences.
                    </p>
                  </div>
                  {" "}
                  <div className="card-footer">
                    <span className="salary-label">
                      Average Salary
                    </span>
                    {" "}
                    <span className="salary-value">
                      ₹3 – ₹8 LPA
                    </span>
                  </div>
                </div>
                {" "}
                <div className="career-card slide-from-top">
                  <div className="card-body">
                    <h3>
                      Google Ads Specialist
                    </h3>
                    {" "}
                    <p>
                      Creates, executes, and scales paid acquisition campaigns across search, display, and video networks while managing ad spends efficiently to boost ROI.
                    </p>
                  </div>
                  {" "}
                  <div className="card-footer">
                    <span className="salary-label">
                      Average Salary
                    </span>
                    {" "}
                    <span className="salary-value">
                      ₹4 – ₹10 LPA
                    </span>
                  </div>
                </div>
                {" "}
                <div className="career-card slide-from-bottom">
                  <div className="card-body">
                    <h3>
                      Content Marketer
                    </h3>
                    {" "}
                    <p>
                      Develops inbound content strategies across blogs, copy, and visual media to attract target customer personas and generate high-quality business leads.
                    </p>
                  </div>
                  {" "}
                  <div className="card-footer">
                    <span className="salary-label">
                      Average Salary
                    </span>
                    {" "}
                    <span className="salary-value">
                      ₹3 – ₹8 LPA
                    </span>
                  </div>
                </div>
                {" "}
                <div className="career-card slide-from-top">
                  <div className="card-body">
                    <h3>
                      Digital Marketing Executive
                    </h3>
                    {" "}
                    <p>
                      A versatile, multi-disciplined professional who handles various execution arms of online marketing, tracking, and campaign cross-coordination.
                    </p>
                  </div>
                  {" "}
                  <div className="card-footer">
                    <span className="salary-label">
                      Average Salary
                    </span>
                    {" "}
                    <span className="salary-value">
                      ₹3 – ₹7 LPA
                    </span>
                  </div>
                </div>
                {" "}
                <div className="career-card slide-from-bottom">
                  <div className="card-body">
                    <h3>
                      Digital Marketing Manager
                    </h3>
                    {" "}
                    <p>
                      Leads comprehensive multi-channel digital marketing operations, budgets, data analysis reporting, and sets strategy for internal execution teams.
                    </p>
                  </div>
                  {" "}
                  <div className="card-footer">
                    <span className="salary-label">
                      Average Salary
                    </span>
                    {" "}
                    <span className="salary-value">
                      ₹8 – ₹20+ LPA
                    </span>
                  </div>
                </div>
                {" "}
                <div className="career-card slide-from-top custom-premium-card">
                  <div className="card-body">
                    <h3>
                      Freelancer
                    </h3>
                    {" "}
                    <p>
                      Works independently with flexible hours, consulting for businesses and brands worldwide on dedicated performance projects.
                    </p>
                  </div>
                  {" "}
                  <div className="card-footer">
                    <span className="salary-label">
                      Income Potential
                    </span>
                    {" "}
                    <span className="salary-value highlight-green">
                      Unlimited
                    </span>
                  </div>
                </div>
                {" "}
                <div className="career-card slide-from-bottom custom-premium-card">
                  <div className="card-body">
                    <h3>
                      Agency Owner
                    </h3>
                    {" "}
                    <p>
                      Starts, automates, and scales an independent digital marketing firm. Successful agency owners earn significantly more than corporate salaried professionals.
                    </p>
                  </div>
                  {" "}
                  <div className="card-footer">
                    <span className="salary-label">
                      Income Potential
                    </span>
                    {" "}
                    <span className="salary-value highlight-green">
                      Massive Scalability
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {" "}
          <section className="why-marketing-section">
            <div className="marketing-section-container">
              <div className="marketing-section-header">
                <span className="heading-label">
                  Career Insights
                </span>
                {" "}
                <h2>
                  Why Digital Marketing Is One of the Best Career Options
                </h2>
                {" "}
                <p className="section-intro-text">
                  {" The internet has become the backbone of modern business. Companies of all sizes—from local stores to multinational brands—are investing heavily in digital marketing to reach their target audience. "}
                </p>
              </div>
              {" "}
              <div className="marketing-content-grid">
                <div className="demand-panel-card">
                  <h3>
                    The Industry Demand
                  </h3>
                  {" "}
                  <p>
                    As a result of rapid internet adoption, modern businesses completely rely on skilled professionals who can execute high-value strategic growth campaigns. You will be trained to:
                  </p>
                  {" "}
                  <ul className="demand-roles-list">
                    <li>
                      <i className="fa-solid fa-arrow-trend-up"></i>
                      {" Generate profitable leads online"}
                    </li>
                    {" "}
                    <li>
                      <i className="fa-solid fa-globe"></i>
                      {" Substantially increase website traffic"}
                    </li>
                    {" "}
                    <li>
                      <i className="fa-solid fa-arrow-up-9-1"></i>
                      {" Improve organic search engine rankings"}
                    </li>
                    {" "}
                    <li>
                      <i className="fa-solid fa-rectangle-ad"></i>
                      {" Run highly profitable advertising campaigns"}
                    </li>
                    {" "}
                    <li>
                      <i className="fa-solid fa-hashtag"></i>
                      {" Build a bulletproof, strong social media presence"}
                    </li>
                    {" "}
                    <li>
                      <i className="fa-solid fa-cart-shopping"></i>
                      {" Maximize conversion sales through digital channels"}
                    </li>
                  </ul>
                  {" "}
                  <div className="industry-report-callout">
                    <p>
                      According to current global industry reports, digital marketing jobs continue to grow faster than many traditional career choices, making it one of the safest and most rewarding career paths for students in 2026.
                    </p>
                  </div>
                </div>
                {" "}
                <div className="benefits-panel-card">
                  <h3>
                    Key Career Benefits
                  </h3>
                  {" "}
                  <p>
                    Unlike traditional professions, entering the digital ecosystem provides unique long-term personal and financial competitive advantages:
                  </p>
                  {" "}
                  <div className="benefits-checklist-matrix">
                    <div className="benefit-check-item">
                      <span className="check-icon">
                        ✓
                      </span>
                      {" "}
                      <div className="benefit-item-text">
                        <strong>
                          High Demand Across Industries
                        </strong>
                        {" "}
                        <span>
                          Every modern brand requires custom online channels.
                        </span>
                      </div>
                    </div>
                    {" "}
                    <div className="benefit-check-item">
                      <span className="check-icon">
                        ✓
                      </span>
                      {" "}
                      <div className="benefit-item-text">
                        <strong>
                          Multiple Career Paths
                        </strong>
                        {" "}
                        <span>
                          Diversify into analytics, creative copy, design, or strategy.
                        </span>
                      </div>
                    </div>
                    {" "}
                    <div className="benefit-check-item">
                      <span className="check-icon">
                        ✓
                      </span>
                      {" "}
                      <div className="benefit-item-text">
                        <strong>
                          Work-from-Home Opportunities
                        </strong>
                        {" "}
                        <span>
                          Operate remotely without physical geolocation barriers.
                        </span>
                      </div>
                    </div>
                    {" "}
                    <div className="benefit-check-item">
                      <span className="check-icon">
                        ✓
                      </span>
                      {" "}
                      <div className="benefit-item-text">
                        <strong>
                          Freelancing Potential
                        </strong>
                        {" "}
                        <span>
                          Consult for international businesses on independent project values.
                        </span>
                      </div>
                    </div>
                    {" "}
                    <div className="benefit-check-item">
                      <span className="check-icon">
                        ✓
                      </span>
                      {" "}
                      <div className="benefit-item-text">
                        <strong>
                          Entrepreneurship Benefits
                        </strong>
                        {" "}
                        <span>
                          Launch or scale your family operations with zero traditional agency cost.
                        </span>
                      </div>
                    </div>
                    {" "}
                    <div className="benefit-check-item">
                      <span className="check-icon">
                        ✓
                      </span>
                      {" "}
                      <div className="benefit-item-text">
                        <strong>
                          Attractive Salary Packages
                        </strong>
                        {" "}
                        <span>
                          Command aggressive increments based directly on execution performance.
                        </span>
                      </div>
                    </div>
                    {" "}
                    <div className="benefit-check-item">
                      <span className="check-icon">
                        ✓
                      </span>
                      {" "}
                      <div className="benefit-item-text">
                        <strong>
                          Global Career Opportunities
                        </strong>
                        {" "}
                        <span>
                          Serve borderless corporate clients inside foreign tech ecosystems.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {" "}
          {" "}
          {" "}
          <h2 className="section-heading">
            <span className="heading-label">
              Reviews
            </span>
            What Students Say
          </h2>
          {" "}
          <div className="rating-banner">
            <div className="rating-big">
              <div className="rating-num">
                4.9
              </div>
              {" "}
              <div className="rating-stars">
                ★★★★★
              </div>
              {" "}
              <div className="rating-label">
                Course Rating
              </div>
            </div>
            {" "}
            <div className="rating-bars">
              <div className="rbar-row">
                <span>
                  5 ★
                </span>
                <div className="rbar-track">
                  <div className="rbar-fill" style={{ width: "88%" }}></div>
                </div>
                <span>
                  88%
                </span>
              </div>
              {" "}
              <div className="rbar-row">
                <span>
                  4 ★
                </span>
                <div className="rbar-track">
                  <div className="rbar-fill" style={{ width: "9%" }}></div>
                </div>
                <span>
                  9%
                </span>
              </div>
              {" "}
              <div className="rbar-row">
                <span>
                  3 ★
                </span>
                <div className="rbar-track">
                  <div className="rbar-fill" style={{ width: "2%" }}></div>
                </div>
                <span>
                  2%
                </span>
              </div>
              {" "}
              <div className="rbar-row">
                <span>
                  2 ★
                </span>
                <div className="rbar-track">
                  <div className="rbar-fill" style={{ width: "1%" }}></div>
                </div>
                <span>
                  1%
                </span>
              </div>
              {" "}
              <div className="rbar-row">
                <span>
                  1 ★
                </span>
                <div className="rbar-track">
                  <div className="rbar-fill" style={{ width: "0%" }}></div>
                </div>
                <span>
                  0%
                </span>
              </div>
            </div>
          </div>
          {" "}
          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-top">
                <div className="review-avatar" style={{ background: "#fef3c7", color: "#d97706" }}>
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
              <p>
                Best digital marketing course I've found. Got a job at a digital agency within 2 months of completing this. Worth every rupee!
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
              <p>
                My Facebook ads are now profitable and organic traffic is up 300%. Highly practical content for business owners.
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
                <div className="review-avatar" style={{ background: "#ede9fe", color: "#7c3aed" }}>
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
              <p>
                The Google Ads section alone is worth 10x the price. I'm now managing ₹15L/month in ad spend confidently.
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
              <p>
                Completed 4 other marketing courses before this one and none came close. Now freelancing at ₹80K/month.
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
          {" "}
          {" "}
          <h2 className="section-heading">
            <span className="heading-label">
              FAQ
            </span>
            Frequently Asked Questions
          </h2>
          {" "}
          <div className="faq-wrap">
            <div className="faq-item">
              <button className="faq-q">
                {"What is Digital Marketing? "}
                <span className="faq-icon">
                  +
                </span>
              </button>
              {" "}
              <div className="faq-a">
                <p>
                  Digital Marketing is the promotion of products or services using online platforms like search engines, social media, websites, and email to reach potential customers.
                </p>
              </div>
            </div>
            {" "}
            <div className="faq-item">
              <button className="faq-q">
                {"Who can join this course? "}
                <span className="faq-icon">
                  +
                </span>
              </button>
              {" "}
              <div className="faq-a">
                <p>
                  Anyone can join — students, job seekers, business owners, freelancers, or working professionals. No technical background is required.
                </p>
              </div>
            </div>
            {" "}
            <div className="faq-item">
              <button className="faq-q">
                {"What topics are covered? "}
                <span className="faq-icon">
                  +
                </span>
              </button>
              {" "}
              <div className="faq-a">
                <p>
                  The course includes SEO, Social Media Marketing, Google Ads (PPC), Content Marketing, Email Marketing, Affiliate Marketing, and Google Analytics 4.
                </p>
              </div>
            </div>
            {" "}
            <div className="faq-item">
              <button className="faq-q">
                {"What is the course duration? "}
                <span className="faq-icon">
                  +
                </span>
              </button>
              {" "}
              <div className="faq-a">
                <p>
                  The duration is 13 weeks (3 months). Classes are held online with live sessions and recorded access for lifetime review.
                </p>
              </div>
            </div>
            {" "}
            <div className="faq-item">
              <button className="faq-q">
                {"Will I receive a certificate? "}
                <span className="faq-icon">
                  +
                </span>
              </button>
              {" "}
              <div className="faq-a">
                <p>
                  Yes — you will receive 3 certifications from the institute after successfully completing the course, including an ISO-certified credential.
                </p>
              </div>
            </div>
            {" "}
            <div className="faq-item">
              <button className="faq-q">
                {"Are there placement opportunities? "}
                <span className="faq-icon">
                  +
                </span>
              </button>
              {" "}
              <div className="faq-a">
                <p>
                  Yes. We provide placement assistance including resume building, interview preparation, job referrals, and internship opportunities for hands-on experience.
                </p>
              </div>
            </div>
            {" "}
            <div className="faq-item">
              <button className="faq-q">
                {"Do I need coding knowledge? "}
                <span className="faq-icon">
                  +
                </span>
              </button>
              {" "}
              <div className="faq-a">
                <p>
                  No. Basic knowledge of computers and the internet is enough to start. Everything else is taught from scratch.
                </p>
              </div>
            </div>
            {" "}
            <div className="faq-item">
              <button className="faq-q">
                {"Can I start my own business after this course? "}
                <span className="faq-icon">
                  +
                </span>
              </button>
              {" "}
              <div className="faq-a">
                <p>
                  Absolutely. You can promote your own business, generate leads, and grow your brand online using the digital marketing strategies you'll learn.
                </p>
              </div>
            </div>
          </div>
        </main>
        {" "}
      </div>
      {" "}
      {" "}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <Link to="/">
              <img src="./img/cos-white-logo.webp" alt="Code of School" />
            </Link>
            {" "}
            <p>
              Code of School by Inforag Technology empowers future tech innovators through hands-on training in coding, digital marketing, data science, and full-stack development.
            </p>
            {" "}
            <div className="footer-logos">
              <img src="./img/course_img/cmmi-removebg-preview-3.png" alt="CMMI" />
              {" "}
              <img src="./img/course_img/iso-final-removebg-preview-1.png" alt="ISO" />
              {" "}
              <img src="./img/course_img/msme-removebg-preview.png" alt="MSME" />
            </div>
          </div>
          {" "}
          <div className="footer-links">
            <h4>
              Quick Links
            </h4>
            {" "}
            <ul>
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
                <Link to="/course.html">
                  Courses
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
          <div className="footer-courses">
            <h4>
              Online Courses
            </h4>
            {" "}
            <ul>
              <li>
                <Link to="/digital_marketing.html">
                  Digital Marketing
                </Link>
              </li>
              {" "}
              <li>
                <Link to="/ui_ux_design.html">
                  UI UX Design
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
                <Link to="/python_full_stack.html">
                  Python Full Stack
                </Link>
              </li>
              {" "}
              <li>
                <Link to="/frontend_with_react.html">
                  {"React & Angular"}
                </Link>
              </li>
              {" "}
              <li>
                <Link to="/mern_stack.html">
                  MERN Full Stack
                </Link>
              </li>
              {" "}
              <li>
                <Link to="/machine_learning.html">
                  {"ML & Deep Learning"}
                </Link>
              </li>
              {" "}
              <li>
                <Link to="/wordpress_development.html">
                  WordPress Development
                </Link>
              </li>
            </ul>
          </div>
          {" "}
          <div className="footer-contact-col">
            <h4>
              Connect With Us
            </h4>
            {" "}
            <p>
              <i className="fa-solid fa-phone"></i>
              {" "}
              <a href="tel:+919977723584">
                +91 99777 23584
              </a>
            </p>
            {" "}
            <p>
              <i className="fa-solid fa-envelope"></i>
              {" "}
              <a href="mailto:info@codeofschool.com">
                info@codeofschool.com
              </a>
            </p>
            {" "}
            <p>
              <i className="fa-solid fa-location-dot"></i>
              {" Seoni Malwa, Madhya Pradesh"}
            </p>
            {" "}
            <div className="social-icons">
              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              {" "}
              <a href="#" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>
              {" "}
              <a href="#" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              {" "}
              <a href="#" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        {" "}
        <div className="footer-cities">
          <h4>
            Cities We Serve Online
          </h4>
          {" "}
          <p>
            <a href="#">
              Delhi
            </a>
            {" · "}
            <a href="#">
              Bhopal
            </a>
            {" · "}
            <a href="#">
              Pune
            </a>
            {" · "}
            <a href="#">
              Mumbai
            </a>
            {" · "}
            <a href="#">
              Lucknow
            </a>
            {" · "}
            <a href="#">
              Indore
            </a>
            {" · "}
            <a href="#">
              Ujjain
            </a>
            {" · "}
            <a href="#">
              Seoni Malwa
            </a>
            {" · "}
            <a href="#">
              Sehore
            </a>
            {" · "}
            <a href="#">
              Jabalpur
            </a>
            {" · "}
            <a href="#">
              Gwalior
            </a>
            {" · "}
            <a href="#">
              Jaipur
            </a>
            {" · "}
            <a href="#">
              Chennai
            </a>
            {" · "}
            <a href="#">
              Nagpur
            </a>
            {" · "}
            <a href="#">
              Noida
            </a>
            {" · "}
            <a href="#">
              Chandigarh
            </a>
          </p>
        </div>
        {" "}
        <div className="footer-copy">
          <p>
            {"Copyright © 2025 "}
            <a href="https://inforag.com/" target="_blank">
              Inforag Technology
            </a>
            . All rights reserved.
          </p>
        </div>
      </footer>
      {" "}
    </PageFrame>
  );
}
