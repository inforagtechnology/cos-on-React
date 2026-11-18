import PageFrame from "@/runtime/PageFrame.jsx";
import { Link } from "react-router-dom";

// Converted from blogs/Digital-Marketing/digital-marketing-training-comparison.html
const styles = [{ href: "/header-footer.css" }, { href: "/blogs/style.css" }];
const scripts = [{ src: "/blogs/script.js", names: {"fn":[],"vars":[],"lex":[],"consts":[]} }, { src: "/blogs/blogs-header.js", names: {"fn":["showCourseList"],"vars":[],"lex":["faqs"],"consts":["faqs"]} }];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>Online vs Offline Digital Marketing Training: Which Is Better</title>
          <meta name="description" content="Online or offline digital marketing training? Code Of School breaks down the honest comparison to help you find the best digital marketing course in Indore." />
          <meta name="keywords" content={"Online vs Offline Digital Marketing Training, Best Digital Marketing Course in Indore, Digital Marketing Training Indore, Code Of School Indore, Online Digital Marketing Course India, Offline Digital Marketing Training Indore, Digital Marketing Career India, Best Digital Marketing Institute Indore, Digital Marketing Course Comparison India\n"} />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Code Of School" />
          <meta property="og:title" content="Online vs Offline Digital Marketing Training: Which Is Better" />
          <meta property="og:description" content="Online or offline digital marketing training? Code Of School breaks down the honest comparison to help you find the best digital marketing course in Indore." />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Online vs Offline Digital Marketing Training: Which Is Better" />
          <meta name="twitter:description" content="Online or offline digital marketing training? Code Of School breaks down the honest comparison to help you find the best digital marketing course in Indore." />
          <link rel="icon" href="../../img/cos-white-logo2.png" type="image/webp" />
        </>
      }
    >
      <div className="container">
        <header>
          <nav>
            <div className="nav-image">
              <Link to="/">
                <img src="../../img/cos-white-logo.webp" alt="Company Logo" />
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
              <a href="#" id="mobile-courses-link">
                Courses ▼
              </a>
            </li>
            {" "}
            <li>
              <a href="placement.html">
                Our Placements
              </a>
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
        <div className="hero-wrapper">
          {" "}
          <div className="hero-left">
            <div className="meta-info">
              Articles • Freshers Guide • New Edition
            </div>
            {" "}
            <h1>
              {"Online vs Offline Digital Marketing Training: Which One Actually Gets You Hired? "}
            </h1>
            {" "}
            <h2>
              {"Here is a question that almost every aspiring digital marketer asks at some point. "}
            </h2>
            {" "}
            <span className="author-name">
              Published by Code Of School
            </span>
            {" "}
            <span className="publish-date" style={{ color: "#ccc", fontSize: "0.85rem", display: "block", marginTop: "4px" }}>
              {"Digital marketing and Tech Career Experts "}
            </span>
            {" "}
            <div className="author-section">
              {" "}
              <img className="author-avatar" src={"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"} alt="Author Profile" />
              {" "}
              <div className="author-details">
                <span className="author-name">
                  by Content Expert
                </span>
                {" "}
              </div>
            </div>
          </div>
          {" "}
          {" "}
          <div className="hero-right">
            {" "}
            <img className="hero-img" src="../../img/course_img/Marketing is all about offering solutions!.jpeg" alt="Best digital marketing course in Indore" />
          </div>
        </div>
        {" "}
        {" "}
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
              Should I Learn Digital Marketing Online or in a Classroom?
            </p>
            {" "}
            <p>
              It sounds simple. But the more you research it, the more confusing it gets. Online platforms promise flexibility and affordability. Offline institutes promise structure and mentorship. YouTube comments are full of people insisting one is better than the other. And somewhere in the middle of all that noise, you are just trying to figure out which choice will actually help you get a job, land a client, or start a career you are genuinely excited about.
            </p>
            {" "}
            <p>
              This blog cuts through all of that. No agenda. No hidden sales pitch wrapped in fake objectivity. Just an honest breakdown of what online and offline digital marketing training each deliver, where each falls short, and how to make the decision that is right for your specific situation.
            </p>
            {" "}
            <p>
              {"At "}
              <strong>
                Code Of School
              </strong>
              {" , we have worked with students who came from purely online learning backgrounds and students who had never opened a digital marketing platform before walking into a classroom. The patterns in their experiences tell a very clear story. And the"}
              <Link to="/" className="bp-article-body-link">
                {" best digital marketing course in Indore"}
              </Link>
              {" is the one that understands those patterns and builds around them."}
            </p>
            {" "}
            <h2>
              What Online Digital Marketing Training Actually Looks Like
            </h2>
            {" "}
            <p>
              Online digital marketing training has genuinely improved over the past several years. Platforms like Coursera, Udemy, HubSpot Academy, Google Digital Garage, and LinkedIn Learning offer well-structured content across every area of digital marketing. Some of it is excellent. Some of it is outdated. Most of it is passive.
            </p>
            {" "}
            <p>
              Here is what online training does well.
            </p>
            {" "}
            <p>
              <strong>
                Accessibility and flexibility
              </strong>
              {" are real advantages. You can learn at your own pace, on your own schedule, from anywhere with an internet connection. For someone juggling a job or family responsibilities, this flexibility is genuinely valuable."}
            </p>
            {" "}
            <p>
              <strong>
                Cost
              </strong>
              {" is often significantly lower than offline programs. Many of the best foundational courses from Google and HubSpot are completely free. Paid platforms like Coursera and Udemy offer comprehensive content at a fraction of what classroom training costs."}
            </p>
            {" "}
            <p>
              <strong>
                Breadth of content
              </strong>
              {" is unmatched. Whatever specific topic you want to explore, there is almost certainly an online course that covers it. The range of available content is simply wider than any single offline institute can match."}
            </p>
            {" "}
            <p>
              Here is where online training consistently falls short.
            </p>
            {" "}
            <p>
              <strong>
                Accountability is almost entirely absent
              </strong>
              {" . Nobody knows whether you are watching the videos or not. Nobody follows up when you fall behind. Nobody pushes you when the material gets difficult. The dropout rates for online courses globally are extraordinarily high because motivation alone is rarely enough to sustain learning through difficulty."}
            </p>
            {" "}
            <p>
              <strong>
                Practical application is rarely real.
              </strong>
              {" Most online courses teach you about digital marketing rather than making you do digital marketing. The assignments, where they exist, are often theoretical rather than requiring you to actually manage a campaign, analyse real data, or produce work that reflects genuine professional standards. "}
            </p>
            {" "}
            <p>
              <strong>
                Feedback is generic or nonexistent.
              </strong>
              {" A quiz that tells you whether your multiple choice answer was right or wrong is not the same as a mentor who looks at the Google Ads campaign you built and tells you specifically why your keyword strategy is wrong and exactly how to fix it."}
            </p>
            {" "}
            <p>
              <strong>
                Community and network are thin.
              </strong>
              {" Learning alongside other serious students, building relationships with classmates who become professional contacts, and being introduced to an industry network through your institute, none of this exists in meaningful form in most online training environments."}
            </p>
            {" "}
            <h2>
              {"What Offline "}
              <Link to="/" className="bp-article-body-link">
                Digital Marketing Training
              </Link>
              {" Actually Looks Like"}
            </h2>
            {" "}
            <p>
              Offline or classroom-based digital marketing training in Indore ranges from excellent to mediocre, just like online training. The format alone does not determine quality. What matters is what happens inside the classroom.
            </p>
            {" "}
            <p>
              Here is what good offline training does that online cannot replicate.
            </p>
            {" "}
            <p>
              <strong>
                Accountability is built into the structure.
              </strong>
              {" You have a scheduled class to attend. An instructor who notices when you are absent. Assignments with real deadlines and real consequences. Classmates who expect you to show up and contribute. This structure is not a minor benefit. For most people, it is the difference between finishing and not finishing."}
            </p>
            {" "}
            <p>
              <strong>
                Practical training with real supervision.
              </strong>
              {" In a well-run offline program, you do not just learn that Google Ads exists. You open Google Ads, set up a campaign, make mistakes, get immediate feedback from someone watching what you are doing, fix those mistakes, and develop actual operational capability. That experience is qualitatively different from watching a tutorial about how Google Ads works."}
            </p>
            {" "}
            <p>
              <strong>
                Personalised mentorship changes outcomes.
              </strong>
              {" When a trainer can see your specific work, understand your specific confusions, and give you feedback that is relevant to exactly what you are building, your learning accelerates in ways that no online platform can match at scale."}
            </p>
            {" "}
            <p>
              <strong>
                Human connection and real networks matter.
              </strong>
              {" The relationships you build with classmates, trainers, and the institute's alumni network are career assets. Referrals, introductions, and job opportunities flow through relationships. Offline training builds those relationships. Online training generally does not. "}
            </p>
            {" "}
            <p>
              Here is where offline training can fall short.
            </p>
            {" "}
            <p>
              <strong>
                Quality varies enormously.
              </strong>
              {" Not every classroom program delivers what the marketing promises. A physical classroom is not a guarantee of good training. The quality of the trainers, the curriculum, the practical components, and the placement support still need to be evaluated carefully before you commit. "}
            </p>
            {" "}
            <p>
              <strong>
                Flexibility is limited.
              </strong>
              {" Fixed schedules may not work for everyone. If you are managing other commitments alongside your training, a rigid timetable can be genuinely difficult."}
            </p>
            {" "}
            <p>
              <strong>
                Access requires proximity.
              </strong>
              {" If the best institute in your city is far from where you live, the daily travel can become a significant friction point."}
            </p>
            {" "}
            <h2>
              The Honest Comparison
            </h2>
            {" "}
            <p>
              {"Let us put both options side by side across the dimensions that actually matter for career outcomes. "}
            </p>
            {" "}
            <p>
              <strong>
                For learning the basics:
              </strong>
              {" Both work. Google's free certification courses are genuinely educational for foundational knowledge. A quality offline program covers the same ground with better structure and accountability."}
            </p>
            {" "}
            <p>
              <strong>
                For building practical skills:
              </strong>
              {" Offline wins clearly. Hands-on supervision, real feedback, and structured project work in a classroom environment consistently produces stronger practical capability than self-directed online learning."}
            </p>
            {" "}
            <p>
              <strong>
                For accountability:
              </strong>
              {" Offline wins significantly. The structure of scheduled classes and the social accountability of a cohort of classmates is difficult to replicate online."}
            </p>
            {" "}
            <p>
              <strong>
                For flexibility:
              </strong>
              {" Online wins. There is no contest here. If your schedule genuinely cannot accommodate fixed classroom hours, online learning is the realistic option."}
            </p>
            {" "}
            <p>
              <strong>
                For building a network:
              </strong>
              {" Offline wins. The relationships built in a classroom environment have genuine career value. Online learning communities rarely develop the same depth of connection."}
            </p>
            {" "}
            <p>
              <strong>
                For cost:
              </strong>
              {" Online wins at the entry level. Quality offline training costs more, but the investment is justified by significantly better practical outcomes."}
            </p>
            {" "}
            <p>
              <strong>
                For placement outcomes:
              </strong>
              {" Offline wins when the institute has real placement infrastructure. No online platform has an equivalent to an institute with established relationships with hiring companies in your city."}
            </p>
            {" "}
            <h2>
              The Hybrid Approach That Most Successful Students Use
            </h2>
            {" "}
            <p>
              Here is what the most career-ready digital marketing students actually do.
            </p>
            {" "}
            <p>
              They do not choose between online and offline. They use both strategically.
            </p>
            {" "}
            <p>
              {"They pursue the "}
              <Link to="/course.html" className="bp-article-body-link">
                best digital marketing course in Indore
              </Link>
              {" as their primary structured training, building practical skills, real portfolio work, and professional relationships through the offline program. Simultaneously, they use free online resources from Google, HubSpot, and Meta to earn certifications that complement their portfolio and signal foundational knowledge to employers."}
            </p>
            {" "}
            <p>
              The offline program builds the skills and the network. The online certifications document specific competencies in formats that employers recognise. Together, they create a profile that is significantly stronger than either approach alone.
            </p>
            {" "}
            <h2>
              What to Look for in an Offline Digital Marketing Program in Indore
            </h2>
            {" "}
            <p>
              If you decide that offline training is the right primary investment, the quality of the specific program matters enormously. Here is what to evaluate before you commit.
            </p>
            {" "}
            <ul>
              <li>
                {"Do trainers actively work in digital marketing professionally or are they full-time educators? "}
              </li>
              {" "}
              <li>
                Will you work on real campaigns with real tools or primarily observe demos?
              </li>
              {" "}
              <li>
                What does the placement support infrastructure actually look like, not the promise but the process?
              </li>
              {" "}
              <li>
                What have recent graduates gone on to do and what were their starting salaries?
              </li>
              {" "}
              <li>
                How large are the batches and how is individual attention managed?
              </li>
            </ul>
            {" "}
            <p>
              These questions will tell you more about the real value of any program than any brochure or website ever will.
            </p>
            {" "}
            <h2>
              How Code Of School Approaches This Question
            </h2>
            {" "}
            <p>
              {"At "}
              <strong>
                Code Of School
              </strong>
              {" , we are transparent about the fact that we believe structured offline training with the right practical components produces better career outcomes for most students than online self-study alone. "}
            </p>
            {" "}
            <p>
              That belief is reflected in how we have built our program. Small batches. Industry-active trainers. Hands-on tool access. Live project work from the first week. Placement support built on real company relationships. And a curriculum that is updated continuously to reflect what the market actually values right now.
            </p>
            {" "}
            <p>
              <Link to="/course.html" className="bp-article-body-link">
                best digital marketing course in Indore
              </Link>
              {" is not the one with the most videos or the most modules. It is the one that produces graduates who walk into interviews with real skills, real portfolio work, and real confidence."}
            </p>
            {" "}
            <p>
              {"At "}
              <strong>
                Code Of School
              </strong>
              {" , that is the only outcome we build toward."}
            </p>
            {" "}
            <p>
              If you are trying to decide between online and offline training, come and attend a free demo session with us. See what structured, practically focused digital marketing education actually looks and feels like. Ask every question on the list above. And make your decision based on what you see, not on what anyone promises.
            </p>
            {" "}
            <p>
              <em>
                Published by Code of School, Empowering the next generation of digital marketers and full-stack developers.
              </em>
            </p>
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="reviews-section">
          <h2>
            Student Reviews
          </h2>
          {" "}
          <div className="rating-summary-wrapper">
            <div className="rating-badge-card">
              <div className="rating-score">
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
            <div className="breakdown-bars-container">
              <div className="bar-row">
                <span className="star-label">
                  5 ★
                </span>
                {" "}
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: "88%" }}></div>
                </div>
                {" "}
                <span className="percentage-label">
                  88%
                </span>
              </div>
              {" "}
              <div className="bar-row">
                <span className="star-label">
                  4 ★
                </span>
                {" "}
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: "9%" }}></div>
                </div>
                {" "}
                <span className="percentage-label">
                  9%
                </span>
              </div>
              {" "}
              <div className="bar-row">
                <span className="star-label">
                  3 ★
                </span>
                {" "}
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: "2%" }}></div>
                </div>
                {" "}
                <span className="percentage-label">
                  2%
                </span>
              </div>
              {" "}
              <div className="bar-row">
                <span className="star-label">
                  2 ★
                </span>
                {" "}
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: "1%" }}></div>
                </div>
                {" "}
                <span className="percentage-label">
                  1%
                </span>
              </div>
              {" "}
              <div className="bar-row">
                <span className="star-label">
                  1 ★
                </span>
                {" "}
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: "0%" }}></div>
                </div>
                {" "}
                <span className="percentage-label">
                  0%
                </span>
              </div>
            </div>
          </div>
          {" "}
          <div className="reviews-grid">
            <div className="review-item-card">
              <div>
                <div className="user-profile-header">
                  <div className="user-text-initials">
                    PR
                  </div>
                  {" "}
                  <div className="user-meta-info">
                    <h4>
                      Priya Rajput
                    </h4>
                    {" "}
                    <div className="rating-stars">
                      ★★★★★
                    </div>
                    {" "}
                    <div className="review-date-stamp">
                      November 2025
                    </div>
                  </div>
                </div>
                {" "}
                <p className="review-body-text">
                  Best digital marketing course I've found. Arjun explains everything with real examples and live account walkthroughs. Got a job at a digital agency within 2 months of completing this. Worth every rupee!
                </p>
              </div>
              {" "}
              <div className="feedback-interaction-bar">
                <span>
                  👍 142 people found this helpful
                </span>
              </div>
            </div>
            {" "}
            <div className="review-item-card">
              <div>
                <div className="user-profile-header">
                  <div className="user-text-initials">
                    SK
                  </div>
                  {" "}
                  <div className="user-meta-info">
                    <h4>
                      Sanjay Kumar
                    </h4>
                    {" "}
                    <div className="rating-stars">
                      ★★★★★
                    </div>
                    {" "}
                    <div className="review-date-stamp">
                      October 2025
                    </div>
                  </div>
                </div>
                {" "}
                <p className="review-body-text">
                  I run a small clothing business and this course completely changed how I approach online marketing. My Facebook ads are now profitable and organic traffic is up 300%. Highly practical content.
                </p>
              </div>
              {" "}
              <div className="feedback-interaction-bar">
                <span>
                  👍 88 people found this helpful
                </span>
              </div>
            </div>
            {" "}
            <div className="review-item-card">
              <div>
                <div className="user-profile-header">
                  <div className="user-text-initials">
                    NS
                  </div>
                  {" "}
                  <div className="user-meta-info">
                    <h4>
                      Nisha Sharma
                    </h4>
                    {" "}
                    <div className="rating-stars">
                      ★★★★★
                    </div>
                    {" "}
                    <div className="review-date-stamp">
                      October 2024
                    </div>
                  </div>
                </div>
                {" "}
                <p className="review-body-text">
                  The Google Ads section alone is worth 10x the price. Arjun goes deep into negative keywords, quality scores, and bidding strategies that nobody else teaches. I'm now managing ₹15L/month in ad spend.
                </p>
              </div>
              {" "}
              <div className="feedback-interaction-bar">
                <span>
                  👍 78 people found this helpful
                </span>
              </div>
            </div>
            {" "}
            <div className="review-item-card">
              <div>
                <div className="user-profile-header">
                  <div className="user-text-initials">
                    RG
                  </div>
                  {" "}
                  <div className="user-meta-info">
                    <h4>
                      Rohit Gupta
                    </h4>
                    {" "}
                    <div className="rating-stars">
                      ★★★★★
                    </div>
                    {" "}
                    <div className="review-date-stamp">
                      September 2024
                    </div>
                  </div>
                </div>
                {" "}
                <p className="review-body-text">
                  Completed 4 other marketing courses before this one and none came close. The projects are real — you actually launch campaigns and see results. Now freelancing at ₹80K/month.
                </p>
              </div>
              {" "}
              <div className="feedback-interaction-bar">
                <span>
                  👍 84 people found this helpful
                </span>
              </div>
            </div>
          </div>
        </section>
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
                  <br />
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
            <img src="../../img/new-map.jpeg" alt="Courses Image" style={{ width: "100%", borderRadius: "8px", marginTop: "1rem" }} />
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
                <a href="./ui_ux_design.html" style={{ textDecoration: "none" }}>
                  {" "}
                  <p>
                    Online UI UX Development Course |
                  </p>
                  {" "}
                </a>
                {" "}
                <a href="./data_science.html" style={{ textDecoration: "none" }}>
                  {" "}
                  <p>
                    {" Online Data Science Course |"}
                  </p>
                  {" "}
                </a>
                {" "}
                <a href="./video_editing.html" style={{ textDecoration: "none" }}>
                  {" "}
                  <p>
                    Online Video Editing Course |
                  </p>
                  {" "}
                </a>
                {" "}
                <a href="./python_full_stack.html" style={{ textDecoration: "none" }}>
                  {" "}
                  <p>
                    {" Online Python Full Stack Course |"}
                  </p>
                  {" "}
                </a>
                {" "}
                <a href="./python.html" style={{ textDecoration: "none" }}>
                  {" "}
                  <p>
                    {" Online Python Programming Course |"}
                  </p>
                  {" "}
                </a>
                {" "}
                <a href="./frontend_with_react.html" style={{ textDecoration: "none" }}>
                  {" "}
                  <p>
                    {" Online React & Angular Course |"}
                  </p>
                  {" "}
                </a>
                {" "}
                <a href="./wordpress_development.html" style={{ textDecoration: "none" }}>
                  {" "}
                  <p>
                    {" Online WordPress Development Course |"}
                  </p>
                  {" "}
                </a>
                {" "}
                <a href="./django.html" style={{ textDecoration: "none" }}>
                  {" "}
                  <p>
                    {" Online Django Web Development Course |"}
                  </p>
                  {" "}
                </a>
                {" "}
                <a href="./mern_stack.html" style={{ textDecoration: "none" }}>
                  {" "}
                  <p>
                    Online MERN Full Stack Course |
                  </p>
                  {" "}
                </a>
                {" "}
                <a href="./reactnative.html" style={{ textDecoration: "none" }}>
                  {" "}
                  <p>
                    {" Online Mobile App Development Course |"}
                  </p>
                  {" "}
                </a>
                {" "}
                <a href="./business_development_executive.html" style={{ textDecoration: "none" }}>
                  {" "}
                  <p>
                    {" Business Development & Sales Training Course |"}
                  </p>
                  {" "}
                </a>
                {" "}
                <a href="./dsa.html" style={{ textDecoration: "none" }}>
                  {" "}
                  <p>
                    {"Data Structures & Algorithms Course |"}
                  </p>
                  {" "}
                </a>
                {" "}
                <a href="./data_science.html" style={{ textDecoration: "none" }}>
                  {" "}
                  <p>
                    Online Data Science Course |
                  </p>
                  {" "}
                </a>
                {" "}
                <a href="./machine_learning.html" style={{ textDecoration: "none" }}>
                  {" "}
                  <p>
                    {" Online ML & Deep Learning Course |"}
                  </p>
                  {" "}
                </a>
                {" "}
                <a href="./reactnative.html" style={{ textDecoration: "none" }}>
                  {" "}
                  <p>
                    {" Frontend Development Course Online |"}
                  </p>
                  {" "}
                </a>
                {" "}
                <a href="./php.html" style={{ textDecoration: "none" }}>
                  {" "}
                  <p>
                    {" Online PHP Core & Advanced Course "}
                  </p>
                  {" "}
                </a>
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
    </PageFrame>
  );
}
