import PageFrame from "@/runtime/PageFrame.jsx";
import { Link } from "react-router-dom";

// Blog: Digital Marketing Strategy 2025 - Complete Beginner's Guide
const styles = [{ href: "/header-footer.css" }, { href: "/blogs/style.css" }];
const scripts = [
  { src: "/blogs/script.js", names: { fn: [], vars: [], lex: [], consts: [] } },
  { src: "/blogs/blogs-header.js", names: { fn: ["showCourseList"], vars: [], lex: ["faqs"], consts: ["faqs"] } },
];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>Digital Marketing Strategy 2025: Complete Beginner's Guide | Code Of School</title>
          <meta name="description" content="Learn how to build a powerful digital marketing strategy in 2025. This complete beginner's guide covers SEO, social media, content marketing, email marketing, and paid ads — by Code Of School Indore." />
          <meta name="keywords" content="digital marketing strategy 2025, digital marketing guide for beginners, SEO strategy, social media marketing, content marketing, email marketing, PPC ads, best digital marketing course in Indore, Code Of School" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Code Of School" />
          <meta property="og:title" content="Digital Marketing Strategy 2025: Complete Beginner's Guide | Code Of School" />
          <meta property="og:description" content="Learn how to build a powerful digital marketing strategy in 2025. Covers SEO, social media, content marketing, email marketing, and paid ads." />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Digital Marketing Strategy 2025: Complete Beginner's Guide | Code Of School" />
          <meta name="twitter:description" content="Learn how to build a powerful digital marketing strategy in 2025." />
          <link rel="icon" href="../../img/cos-white-logo2.png" type="image/webp" />
          <link rel="canonical" href="https://codeofschool.com/blogs/Digital-Marketing/digital-marketing-strategy-2025" />
        </>
      }
    >
      <div className="container">
        {/* ===== HEADER / NAV ===== */}
        <header>
          <nav>
            <div className="nav-image">
              <Link to="/">
                <img src="../../img/cos-white-logo.webp" alt="Code Of School Logo" />
              </Link>
            </div>
            {" "}
            <div className="nav-pg">
              <ul className="nav-page">
                <li>
                  <Link to="/">Home</Link>
                </li>
                {" "}
                <li>
                  <Link to="/about-us.html">About Us</Link>
                </li>
                {" "}
                <li>
                  <Link to="/course.html" id="courses-link">Courses ▼</Link>
                </li>
                {" "}
                <li>
                  <Link to="/placement.html">Our Placements</Link>
                </li>
                {" "}
                <li>
                  <Link to="/contact-us.html">Contact Us</Link>
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

        {/* ===== DROPDOWN PANEL ===== */}
        <div className="dropdown-panel" id="dropdown-panel">
          <ul className="categories" id="category-list">
            <li data-category="all">All</li>
            {" "}
            <li data-category="web">Web Dev</li>
            {" "}
            <li data-category="language">Languages</li>
            {" "}
            <li data-category="app">Mobile Dev</li>
            {" "}
            <li data-category="ai">{"Data & AI"}</li>
            {" "}
            <li data-category="other">Other</li>
          </ul>
          {" "}
          <ul className="courses" id="course-list"></ul>
        </div>
        {" "}

        {/* ===== MOBILE NAV OVERLAY ===== */}
        <div className="mobile-nav-overlay" id="mobile-nav-overlay">
          <div className="close-btn" id="close-mobile-nav">×</div>
          {" "}
          <ul className="mobile-nav-page">
            <li><Link to="/">Home</Link></li>
            {" "}
            <li><Link to="/about-us.html">About Us</Link></li>
            {" "}
            <li><Link to="/course.html" id="mobile-courses-link">Courses ▼</Link></li>
            {" "}
            <li><Link to="/placement.html">Our Placements</Link></li>
            {" "}
            <li><Link to="/contact-us.html">Contact Us</Link></li>
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

        {/* ===== HERO SECTION ===== */}
        <div className="hero-wrapper">
          {" "}
          <div className="hero-left">
            <div className="meta-info">
              Articles • Digital Marketing • 2025 Edition
            </div>
            {" "}
            <h1>
              Digital Marketing Strategy 2025: The Complete Beginner's Guide to Growing Online
            </h1>
            {" "}
            <span className="author-name">Published by Code Of School</span>
            {" "}
            <span className="publish-date" style={{ color: "#ccc", fontSize: "0.85rem", display: "block", marginTop: "4px" }}>
              {"Digital Marketing & Tech Career Experts"}
            </span>
            {" "}
            <div className="author-section">
              {" "}
              <img
                className="author-avatar"
                src={"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"}
                alt="Author Profile"
              />
              {" "}
              <div className="author-details">
                <span className="author-name">by Content Expert</span>
                {" "}
              </div>
            </div>
          </div>
          {" "}
          {" "}
          <div className="hero-right">
            {" "}
            <img
              className="hero-img"
              src={"https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80"}
              alt="Digital Marketing Strategy 2025 — Complete Guide by Code Of School Indore"
            />
          </div>
        </div>
        {" "}
        {" "}

        {/* ===== ARTICLE BODY ===== */}
        <section className="bp-content-section">
          {" "}
          <div className="bp-toc-wrapper">
            {" "}
            <button className="bp-toc-toggle" id="bpTocToggle" aria-expanded="false">
              <span>
                <i className="fas fa-list-ul"></i>
                {" Table of Contents"}
              </span>
              {" "}
              <i className="fas fa-chevron-down bp-toc-chevron"></i>
            </button>
            {" "}
            {" "}
            <aside className="bp-toc-sidebar" id="bpTocSidebar">
              <div className="bp-toc-inner">
                <h4 className="bp-toc-heading">
                  <i className="fas fa-list-ul"></i>
                  {" Table of Contents"}
                </h4>
                {" "}
                <ul className="bp-toc-list" id="bpTocList"></ul>
              </div>
            </aside>
          </div>
          {" "}
          {" "}
          {" "}
          <div className="bp-article-body">

            <p>
              {"The internet has completely changed the way businesses reach customers. Whether you're a student, a small business owner, a fresh graduate, or someone looking to switch careers, understanding digital marketing is one of the most valuable skills you can have in 2025."}
            </p>
            {" "}
            <p>
              {"But where do you begin? What channels matter most? What does a real digital marketing strategy look like?"}
            </p>
            {" "}
            <p>
              {"In this complete guide, published by "}
              <strong>Code Of School</strong>
              {" — one of the leading training institutes in Indore — we'll walk you through every important part of digital marketing and show you how to put together a strategy that actually works."}
            </p>
            {" "}

            {/* ===== MAIN BLOG IMAGE ===== */}
            <div style={{ margin: "2rem 0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
              <img
                src={"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"}
                alt="Digital Marketing Strategy 2025 - SEO, Social Media, Content, PPC — Code Of School Indore"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <p style={{ textAlign: "center", fontSize: "0.8rem", color: "#888", margin: "0.5rem 0 0", padding: "0 1rem 0.75rem" }}>
                A powerful digital marketing strategy combines multiple channels for maximum reach
              </p>
            </div>
            {" "}

            <h2>What Is Digital Marketing?</h2>
            {" "}
            <p>
              {"Digital marketing refers to all marketing activities that use the internet or electronic devices to promote products, services, or brands."}
            </p>
            {" "}
            <p>
              {"Unlike traditional marketing, which uses TV commercials, newspapers, or hoardings, digital marketing reaches people where they already spend most of their time — online."}
            </p>
            {" "}
            <p>
              {"It includes channels such as:"}
            </p>
            {" "}
            <ul>
              <li>Search Engine Optimization (SEO)</li>
              {" "}
              <li>Social Media Marketing</li>
              {" "}
              <li>Content Marketing</li>
              {" "}
              <li>Email Marketing</li>
              {" "}
              <li>Pay-Per-Click Advertising (PPC)</li>
              {" "}
              <li>Affiliate Marketing</li>
              {" "}
              <li>Influencer Marketing</li>
            </ul>
            {" "}
            <p>
              {"Each of these channels plays a unique role in a well-rounded digital marketing strategy."}
            </p>
            {" "}
            <p>
              {"If you want to learn all of these in depth, enroll in the "}
              <Link to="/digital_marketing.html" className="bp-article-body-link">
                best digital marketing course in Indore
              </Link>
              {" at Code Of School and start building a career that pays."}
            </p>
            {" "}

            <h2>Why Digital Marketing Matters in 2025</h2>
            {" "}
            <p>
              {"The digital landscape has never been more competitive. Over 5 billion people use the internet globally. Indian businesses — big and small — are now competing for attention online every single day."}
            </p>
            {" "}
            <p>{"Here's why digital marketing is non-negotiable in 2025:"}</p>
            {" "}
            <ul>
              <li>Consumers research online before every purchase</li>
              {" "}
              <li>Social media is the new word of mouth</li>
              {" "}
              <li>Digital ads are more targeted and cost-effective than print or TV</li>
              {" "}
              <li>Analytics allow you to measure every rupee spent</li>
              {" "}
              <li>AI tools are transforming how campaigns are planned and executed</li>
            </ul>
            {" "}
            <p>
              {"Businesses that ignore digital marketing are losing customers to competitors who don't. And professionals who lack digital skills are being left behind in the job market."}
            </p>
            {" "}

            <h2>Step 1 — Define Your Goals Clearly</h2>
            {" "}
            <p>
              {"Before launching any campaign, you must know exactly what you want to achieve. Vague goals lead to wasted budgets and unclear results."}
            </p>
            {" "}
            <p>{"Common digital marketing goals include:"}</p>
            {" "}
            <ul>
              <li>Increase website traffic by 50% in 6 months</li>
              {" "}
              <li>Generate 200 leads per month through Google Ads</li>
              {" "}
              <li>Grow Instagram followers from 1,000 to 10,000</li>
              {" "}
              <li>Improve email open rate from 15% to 25%</li>
              {" "}
              <li>Rank on the first page of Google for 5 keywords</li>
            </ul>
            {" "}
            <p>
              {"Use the SMART framework — Specific, Measurable, Achievable, Relevant, and Time-bound — to set goals you can actually track and hit."}
            </p>
            {" "}

            <h2>Step 2 — Know Your Target Audience</h2>
            {" "}
            <p>
              {"The biggest mistake in digital marketing is trying to reach everyone. The most successful campaigns are laser-focused on a specific audience."}
            </p>
            {" "}
            <p>{"Build a customer persona that includes:"}</p>
            {" "}
            <ul>
              <li>Age, gender, and location</li>
              {" "}
              <li>Education and income level</li>
              {" "}
              <li>Interests and hobbies</li>
              {" "}
              <li>Challenges and pain points</li>
              {" "}
              <li>What platforms they use</li>
              {" "}
              <li>What type of content they consume</li>
            </ul>
            {" "}
            <p>
              {"When you know exactly who your audience is, every marketing decision — from the words you use to the platforms you choose — becomes much easier and more effective."}
            </p>
            {" "}

            {/* ===== INLINE SECONDARY IMAGE ===== */}
            <div style={{ margin: "2rem 0", borderRadius: "10px", overflow: "hidden" }}>
              <img
                src={"https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80"}
                alt="Target audience research for digital marketing — Code Of School"
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "10px" }}
              />
            </div>
            {" "}

            <h2>Step 3 — Search Engine Optimization (SEO)</h2>
            {" "}
            <p>
              {"SEO is the foundation of any long-term digital marketing strategy. It is the process of optimizing your website so it appears on the first page of Google when potential customers search for topics related to your business."}
            </p>
            {" "}
            <p>{"SEO has three main pillars:"}</p>
            {" "}
            <h3>On-Page SEO</h3>
            {" "}
            <ul>
              <li>Using the right keywords in your content</li>
              {" "}
              <li>Writing compelling meta titles and descriptions</li>
              {" "}
              <li>Structuring pages with proper H1, H2, H3 headings</li>
              {" "}
              <li>Optimizing images with descriptive alt text</li>
              {" "}
              <li>Using internal links to guide visitors to related pages</li>
            </ul>
            {" "}
            <h3>Off-Page SEO</h3>
            {" "}
            <ul>
              <li>Building backlinks from authoritative websites</li>
              {" "}
              <li>Getting mentions in industry publications</li>
              {" "}
              <li>Social media signals</li>
            </ul>
            {" "}
            <h3>Technical SEO</h3>
            {" "}
            <ul>
              <li>Making your website fast (under 3 seconds loading time)</li>
              {" "}
              <li>Ensuring mobile responsiveness</li>
              {" "}
              <li>Setting up XML sitemaps</li>
              {" "}
              <li>Fixing broken links and 404 errors</li>
              {" "}
              <li>Using HTTPS for security</li>
            </ul>
            {" "}
            <p>
              {"Want to master SEO from scratch? Read our detailed guide on "}
              <Link to="/blogs/Digital-Marketing/seo-guide" className="bp-article-body-link">
                What Is SEO and How Does It Work?
              </Link>
              {" to understand the basics before building your strategy."}
            </p>
            {" "}

            <h2>Step 4 — Content Marketing</h2>
            {" "}
            <p>
              {"Content is the fuel that powers every digital marketing channel. Without valuable content, your SEO has nothing to rank, your social media has nothing to share, and your email campaigns have nothing to say."}
            </p>
            {" "}
            <p>{"Effective content marketing includes:"}</p>
            {" "}
            <ul>
              <li>Blog posts that answer your audience's questions</li>
              {" "}
              <li>Videos explaining your products or services</li>
              {" "}
              <li>Infographics that simplify complex information</li>
              {" "}
              <li>Case studies showcasing real results</li>
              {" "}
              <li>Ebooks and guides that build authority</li>
              {" "}
              <li>Podcasts for audiences on the go</li>
            </ul>
            {" "}
            <p>
              {"The key to content marketing success is consistency. Publishing one high-quality blog a week is far more effective than posting 10 mediocre blogs in a single month and then going silent."}
            </p>
            {" "}
            <p>
              {"Learn how to build a content strategy from scratch in our blog on "}
              <Link to="/blogs/Digital-Marketing/content-marketing-guide" className="bp-article-body-link">
                Content Marketing: The Complete Guide
              </Link>
              {"."}
            </p>
            {" "}

            <h2>Step 5 — Social Media Marketing</h2>
            {" "}
            <p>
              {"India has over 500 million active social media users. Platforms like Instagram, YouTube, LinkedIn, and Facebook offer unmatched access to your target audience."}
            </p>
            {" "}
            <p>{"Choosing the right platform matters:"}</p>
            {" "}
            <ul>
              <li><strong>Instagram</strong> — Fashion, food, travel, beauty, and lifestyle brands</li>
              {" "}
              <li><strong>YouTube</strong> — Education, tutorials, reviews, and entertainment</li>
              {" "}
              <li><strong>LinkedIn</strong> — B2B marketing, recruitment, and professional services</li>
              {" "}
              <li><strong>Facebook</strong> — Local businesses, communities, and older demographics</li>
              {" "}
              <li><strong>Twitter / X</strong> — News, tech, and trending discussions</li>
            </ul>
            {" "}
            <p>
              {"Don't try to be everywhere at once. Pick 2 platforms where your audience spends the most time and dominate those first."}
            </p>
            {" "}
            <p>
              {"Read our in-depth blog on "}
              <Link to="/blogs/Digital-Marketing/social-media-marketing-guide" className="bp-article-body-link">
                Social Media Marketing: A Complete Guide
              </Link>
              {" to understand organic and paid social strategies."}
            </p>
            {" "}

            <h2>Step 6 — Email Marketing</h2>
            {" "}
            <p>
              {"Email marketing is one of the highest ROI channels in digital marketing. For every ₹1 spent, email marketing generates an average return of ₹36."}
            </p>
            {" "}
            <p>{"A strong email marketing strategy includes:"}</p>
            {" "}
            <ul>
              <li>Building a quality email list with opt-in forms</li>
              {" "}
              <li>Segmenting your audience based on interests or behavior</li>
              {" "}
              <li>Writing compelling subject lines that boost open rates</li>
              {" "}
              <li>Personalizing content for each segment</li>
              {" "}
              <li>Automating welcome sequences and follow-ups</li>
              {" "}
              <li>Testing and optimizing campaigns regularly</li>
            </ul>
            {" "}
            <p>
              {"Never buy email lists. Focus on growing an organic list of people who actually want to hear from you."}
            </p>
            {" "}
            <p>
              {"Explore strategies in detail on our "}
              <Link to="/blogs/Digital-Marketing/email-marketing-guide" className="bp-article-body-link">
                Email Marketing Guide
              </Link>
              {"."}
            </p>
            {" "}

            <h2>Step 7 — Pay-Per-Click Advertising (PPC)</h2>
            {" "}
            <p>
              {"While SEO builds long-term organic traffic, PPC delivers immediate results. With platforms like Google Ads and Meta Ads, you can place your brand in front of thousands of potential customers today."}
            </p>
            {" "}
            <p>{"Key elements of successful PPC campaigns:"}</p>
            {" "}
            <ul>
              <li>Keyword research to find high-intent search terms</li>
              {" "}
              <li>Writing click-worthy ad copy</li>
              {" "}
              <li>Creating dedicated landing pages that convert</li>
              {" "}
              <li>Setting smart bidding strategies</li>
              {" "}
              <li>Tracking conversions with Google Tag Manager</li>
              {" "}
              <li>A/B testing ads to improve performance</li>
            </ul>
            {" "}
            <p>
              {"PPC without proper knowledge can burn through your budget quickly. That's why hands-on training is essential. The "}
              <Link to="/digital_marketing.html" className="bp-article-body-link">
                digital marketing course at Code Of School
              </Link>
              {" includes live Google Ads and Meta Ads campaign practice so students learn by doing, not just watching."}
            </p>
            {" "}

            <h2>Step 8 — Analytics and Measuring Results</h2>
            {" "}
            <p>
              {"You cannot improve what you don't measure. Analytics is what separates guesswork from strategy."}
            </p>
            {" "}
            <p>{"Essential tools every digital marketer must know:"}</p>
            {" "}
            <ul>
              <li><strong>Google Analytics 4</strong> — Track website traffic, user behavior, and conversions</li>
              {" "}
              <li><strong>Google Search Console</strong> — Monitor SEO performance and keyword rankings</li>
              {" "}
              <li><strong>Meta Business Suite</strong> — Analyze Facebook and Instagram campaigns</li>
              {" "}
              <li><strong>Semrush or Ahrefs</strong> — Competitor research and backlink analysis</li>
              {" "}
              <li><strong>Mailchimp or HubSpot</strong> — Email campaign reporting</li>
            </ul>
            {" "}
            <p>
              {"Review your analytics every week. Identify what's working, what's not, and adjust your strategy accordingly."}
            </p>
            {" "}
            <p>
              {"Understand how to analyze data with our guide on "}
              <Link to="/blogs/Digital-Marketing/digital-marketing-analytics" className="bp-article-body-link">
                Digital Marketing Analytics: Measure What Matters
              </Link>
              {"."}
            </p>
            {" "}

            <h2>Digital Marketing Career Opportunities in 2025</h2>
            {" "}
            <p>
              {"Digital marketing is one of the fastest-growing career fields in India. The demand for skilled professionals is outpacing supply, which means salaries are rising and job opportunities are plentiful."}
            </p>
            {" "}
            <p>{"Popular roles include:"}</p>
            {" "}
            <ul>
              <li>Digital Marketing Executive — ₹3–6 LPA starting</li>
              {" "}
              <li>SEO Specialist — ₹4–8 LPA</li>
              {" "}
              <li>Social Media Manager — ₹3.5–7 LPA</li>
              {" "}
              <li>Google Ads / PPC Specialist — ₹5–10 LPA</li>
              {" "}
              <li>Content Marketing Manager — ₹5–12 LPA</li>
              {" "}
              <li>Digital Marketing Manager — ₹8–18 LPA</li>
              {" "}
              <li>Freelance Digital Marketer — Unlimited earning potential</li>
            </ul>
            {" "}
            <p>
              {"Curious about which career path is right for you? Read our guide on "}
              <Link to="/blogs/Digital-Marketing/digital-marketing-career-guide" className="bp-article-body-link">
                Digital Marketing Career Guide: Roles, Salaries & Growth
              </Link>
              {"."}
            </p>
            {" "}

            <h2>Why Learn Digital Marketing from Code Of School?</h2>
            {" "}
            <p>
              {"Code Of School is one of the top-rated training institutes in Indore, offering practical, industry-focused digital marketing courses with 100% placement support."}
            </p>
            {" "}
            <p>{"What you get when you join:"}</p>
            {" "}
            <ul>
              <li>Live project experience on real campaigns</li>
              {" "}
              <li>Google, Meta, and HubSpot certification preparation</li>
              {" "}
              <li>Training from industry professionals</li>
              {" "}
              <li>Dedicated placement support</li>
              {" "}
              <li>Flexible batch timings (morning, evening, weekend)</li>
              {" "}
              <li>Both online and offline learning options</li>
            </ul>
            {" "}
            <p>
              {"Thousands of students have launched their careers in digital marketing through Code Of School. Join the "}
              <Link to="/digital_marketing.html" className="bp-article-body-link">
                best digital marketing course in Indore
              </Link>
              {" and start your journey today."}
            </p>
            {" "}

            <h2>Final Thoughts</h2>
            {" "}
            <p>
              {"Digital marketing in 2025 is not optional — it is essential. Whether you want to grow a business, land a high-paying job, or build a freelancing career, the skills covered in this guide are exactly what you need."}
            </p>
            {" "}
            <p>
              {"Start with one channel — SEO, social media, or content — master it, then expand your skills. Rome was not built in a day, and neither is a powerful digital marketing strategy."}
            </p>
            {" "}
            <p>
              {"The best time to start learning was yesterday. The second best time is right now. Explore our "}
              <Link to="/course.html" className="bp-article-body-link">
                complete course catalog
              </Link>
              {" and take the first step toward a career you love."}
            </p>
            {" "}
            <p>
              <em>
                Published by Code Of School — Empowering the next generation of digital marketers across India.
              </em>
            </p>

          </div>
          {" "}
        </section>
        {" "}
        {" "}

        {/* ===== STUDENT REVIEWS ===== */}
        <section className="reviews-section">
          <h2>Student Reviews</h2>
          {" "}
          <div className="rating-summary-wrapper">
            <div className="rating-badge-card">
              <div className="rating-score">4.9</div>
              {" "}
              <div className="rating-stars">★★★★★</div>
              {" "}
              <div className="rating-label">Course Rating</div>
            </div>
            {" "}
            <div className="breakdown-bars-container">
              <div className="bar-row">
                <span className="star-label">5 ★</span>
                {" "}
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: "88%" }}></div>
                </div>
                {" "}
                <span className="percentage-label">88%</span>
              </div>
              {" "}
              <div className="bar-row">
                <span className="star-label">4 ★</span>
                {" "}
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: "9%" }}></div>
                </div>
                {" "}
                <span className="percentage-label">9%</span>
              </div>
              {" "}
              <div className="bar-row">
                <span className="star-label">3 ★</span>
                {" "}
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: "2%" }}></div>
                </div>
                {" "}
                <span className="percentage-label">2%</span>
              </div>
              {" "}
              <div className="bar-row">
                <span className="star-label">2 ★</span>
                {" "}
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: "1%" }}></div>
                </div>
                {" "}
                <span className="percentage-label">1%</span>
              </div>
              {" "}
              <div className="bar-row">
                <span className="star-label">1 ★</span>
                {" "}
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: "0%" }}></div>
                </div>
                {" "}
                <span className="percentage-label">0%</span>
              </div>
            </div>
          </div>
          {" "}
          <div className="reviews-grid">
            <div className="review-item-card">
              <div>
                <div className="user-profile-header">
                  <div className="user-text-initials">AK</div>
                  {" "}
                  <div className="user-meta-info">
                    <h4>Amit Kumar</h4>
                    {" "}
                    <div className="rating-stars">★★★★★</div>
                    {" "}
                    <div className="review-date-stamp">November 2025</div>
                  </div>
                </div>
                {" "}
                <p className="review-body-text">
                  Code Of School completely changed my career. The digital marketing course is very practical — we worked on real campaigns from day one. I got placed in a reputed digital agency within 45 days of completing the course!
                </p>
              </div>
              {" "}
              <div className="feedback-interaction-bar">
                <span>👍 156 people found this helpful</span>
              </div>
            </div>
            {" "}
            <div className="review-item-card">
              <div>
                <div className="user-profile-header">
                  <div className="user-text-initials">PS</div>
                  {" "}
                  <div className="user-meta-info">
                    <h4>Priya Sharma</h4>
                    {" "}
                    <div className="rating-stars">★★★★★</div>
                    {" "}
                    <div className="review-date-stamp">October 2025</div>
                  </div>
                </div>
                {" "}
                <p className="review-body-text">
                  I was a housewife with zero experience in marketing. After joining Code Of School's digital marketing batch, I now run my own freelance social media agency and earn ₹50,000+ per month. Best decision of my life!
                </p>
              </div>
              {" "}
              <div className="feedback-interaction-bar">
                <span>👍 112 people found this helpful</span>
              </div>
            </div>
            {" "}
            <div className="review-item-card">
              <div>
                <div className="user-profile-header">
                  <div className="user-text-initials">RV</div>
                  {" "}
                  <div className="user-meta-info">
                    <h4>Rahul Verma</h4>
                    {" "}
                    <div className="rating-stars">★★★★★</div>
                    {" "}
                    <div className="review-date-stamp">September 2025</div>
                  </div>
                </div>
                {" "}
                <p className="review-body-text">
                  The Google Ads and Meta Ads training at Code Of School is incredibly detailed. We actually managed ₹10L+ in ad spend during training. My confidence in handling client campaigns is now at a completely different level.
                </p>
              </div>
              {" "}
              <div className="feedback-interaction-bar">
                <span>👍 94 people found this helpful</span>
              </div>
            </div>
            {" "}
            <div className="review-item-card">
              <div>
                <div className="user-profile-header">
                  <div className="user-text-initials">MS</div>
                  {" "}
                  <div className="user-meta-info">
                    <h4>Manisha Singh</h4>
                    {" "}
                    <div className="rating-stars">★★★★★</div>
                    {" "}
                    <div className="review-date-stamp">August 2025</div>
                  </div>
                </div>
                {" "}
                <p className="review-body-text">
                  I enrolled after completing my BBA. The course covered everything from SEO and content marketing to email automation and analytics. Landed a Digital Marketing Executive role in Indore with a great salary package!
                </p>
              </div>
              {" "}
              <div className="feedback-interaction-bar">
                <span>👍 78 people found this helpful</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      {" "}
      {" "}

      {/* ===== FOOTER ===== */}
      <footer>
        <div className="footer-partone">
          {" "}
          <div className="footer-inforag">
            <div className="footer-image">
              <Link to="/">
                {" "}
                <img src="../../img/cos-white-logo.webp" alt="Code of School Logo" />
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
                <img src="../../img/course_img/cmmi-removebg-preview-3.png" alt="CMMI" />
              </div>
              {" "}
              <div className="logo-box">
                <img src="../../img/course_img/iso-final-removebg-preview-1.png" alt="ISO" />
              </div>
              {" "}
              <div className="logo-box">
                <img src="../../img/course_img/iso-removebg-preview-1.png" alt="ISO" />
              </div>
              {" "}
              <div className="logo-box">
                <img src="../../img/course_img/msme-removebg-preview.png" alt="MSME" />
              </div>
            </div>
          </div>
          {" "}
          {" "}
          <div className="footer-quicklink">
            <ul>
              <h3 id="heading">Quick Links</h3>
              {" "}
              <li><Link to="/">Home</Link></li>
              {" "}
              <li><Link to="/about-us.html">About Us</Link></li>
              {" "}
              <li><Link to="/contact-us.html">Courses</Link></li>
              {" "}
              <li><Link to="/placement.html">Our Placement</Link></li>
              {" "}
              <li><Link to="/contact-us.html">Contact Us</Link></li>
              {" "}
              <li>
                <h3>{"Legal & Info"}</h3>
              </li>
              {" "}
              <li><Link to="/Frequently-asked-questions.html">FAQ</Link></li>
              {" "}
              <li><Link to="/privacy-policy.html">Privacy Policy</Link></li>
              {" "}
              <li><Link to="/termsandcondition.html">{"Terms & Conditions"}</Link></li>
            </ul>
          </div>
          {" "}
          {" "}
          <div className="footer-contact">
            <h3 id="heading-three">Connect With Us</h3>
            {" "}
            <div className="footer-contact-loc">
              <div className="footer-contact-logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"></path>
                </svg>
              </div>
              {" "}
              <div className="footer-contact-location">
                <a href={"https://www.google.com/maps/place/Code+Of+School/@22.7247256,75.8354956,13z"} target="_blank">
                  {" "}
                  <b>Head Office (Indore):</b>
                  {" Office No. 421 Fourth Floor, Shagun Tower, Rasoma Square, Vijay Nagar, Indore, MP 452010 "}
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
                  <li><a href="tel:9977723584">+91 9977-723-584 ,</a></li>
                  {" "}
                  <li><a href="tel:9165234695">+91 9165-234-695</a></li>
                </ul>
              </div>
            </div>
            {" "}
            <div className="footer-contact-mail">
              <div className="footer-contact-logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11Z"></path>
                </svg>
              </div>
              {" "}
              <div className="mail-add">
                <ul>
                  <li><a href="mailto:thecodeofschool@gmail.com">thecodeofschool@gmail.com</a></li>
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
                  <li><b>{"Office Time : "}</b>{"Mon–Sat \u00a010:00 AM – 8:00 PM"}</li>
                  {" "}
                  <li>{"Sunday \u00a0\u00a0Closed"}</li>
                </ul>
              </div>
            </div>
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
          {" "}
          {" "}
          <div className="footer-contact">
            <h3 id="heading-two">Get in Touch</h3>
            {" "}
            <img src="../../img/new-map.jpeg" alt="Code Of School Location Map" style={{ width: "100%", borderRadius: "8px", marginTop: "1rem" }} />
          </div>
        </div>
        {" "}
        {" "}
        <div className="footer-offer">
          <div className="footer-courses">
            {" "}
            <div className="footer-left">
              <h4>Courses We Offer Offline</h4>
              {" "}
              <div className="footer-coures">
                <Link to="/digital_marketing.html" style={{ textDecoration: "none" }}>{" "}<p>Digital Marketing Course |</p>{" "}</Link>
                {" "}
                <Link to="/ui_ux_design.html" style={{ textDecoration: "none" }}>{" "}<p>UI UX Design Course |</p>{" "}</Link>
                {" "}
                <Link to="/data_science.html" style={{ textDecoration: "none" }}>{" "}<p>Data Science Course |</p>{" "}</Link>
                {" "}
                <Link to="/mern_stack.html" style={{ textDecoration: "none" }}>{" "}<p>MERN Stack Course |</p>{" "}</Link>
                {" "}
                <Link to="/python_full_stack.html" style={{ textDecoration: "none" }}>{" "}<p>Python Full Stack Course |</p>{" "}</Link>
                {" "}
                <Link to="/python.html" style={{ textDecoration: "none" }}>{" "}<p>Python Programming Course |</p>{" "}</Link>
                {" "}
                <Link to="/machine_learning.html" style={{ textDecoration: "none" }}>{" "}<p>Machine Learning Course |</p>{" "}</Link>
                {" "}
                <Link to="/wordpress_development.html" style={{ textDecoration: "none" }}>{" "}<p>WordPress Development Course |</p>{" "}</Link>
              </div>
            </div>
            {" "}
            <hr />
            {" "}
            {" "}
            <div className="footer-right">
              <h4>Courses We Offer Online</h4>
              {" "}
              <div className="footer-coures">
                <Link to="/digital_marketing.html" style={{ textDecoration: "none" }}>{" "}<p>Online Digital Marketing Course |</p>{" "}</Link>
                {" "}
                <Link to="/data_science.html" style={{ textDecoration: "none" }}>{" "}<p>Online Data Science Course |</p>{" "}</Link>
                {" "}
                <Link to="/python_full_stack.html" style={{ textDecoration: "none" }}>{" "}<p>Online Python Full Stack Course |</p>{" "}</Link>
                {" "}
                <Link to="/mern_stack.html" style={{ textDecoration: "none" }}>{" "}<p>Online MERN Full Stack Course |</p>{" "}</Link>
              </div>
            </div>
          </div>
        </div>
        {" "}
        <hr />
        {" "}
        {" "}
        <div className="footer-parttwo">
          <h3>
            {"Copyright © 2025 "}
            <a href="https://inforag.com/" target="_blank">Inforag Technology</a>
            {" All rights reserved"}
          </h3>
        </div>
      </footer>
      {" "}
      {" "}
    </PageFrame>
  );
}
