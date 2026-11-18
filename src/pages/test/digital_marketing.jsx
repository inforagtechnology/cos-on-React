import PageFrame from "@/runtime/PageFrame.jsx";
import { Link } from "react-router-dom";

// Converted from test/digital_marketing.html
const styles = [{ href: "/header-footer.css" }, { href: "/test/main.css" }];
const scripts = [{ src: "/script.js", names: {"fn":["showCourseList"],"vars":[],"lex":["faqs","cards","observer"],"consts":["faqs","cards","observer"]} }, { src: "/test/main.js", names: {"fn":["ELanguage","HLanguage","toggleSection"],"vars":["english","hindi"],"lex":[],"consts":[]} }];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>Digital Marketing Course in Indore | Code of School</title>
          <meta property="og:title" content="Digital Marketing Course in Indore | Code of School" />
          <meta property="og:description" content={"Become a digital marketing expert with real-time campaigns & certifications."} />
          <meta property="og:url" content="https://codeofschool.com/courses/digital-marketing" />
          <meta property="og:image" content="https://codeofschool.com/img/cos-white-logo.webp" />
          <meta name="twitter:title" content="Digital Marketing Course | Code of School" />
          <meta name="twitter:description" content="Learn SEO, PPC, SMM, Email Marketing, and become job-ready." />
          <meta name="twitter:image" content="https://codeofschool.com/img/cos-white-logo.webp" />
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo.webp" type="image/webp" sizes="32x32" />
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo.webp" type="image/webp" sizes="48x48" />
          <link rel="apple-touch-icon" href="https://codeofschool.com/img/cos-white-logo.webp" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo.webp" type="image/webp" />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Article\",\n\n  \"headline\": \"Digital Marketing Tutorial – Learn SEO, Social Media & Google Ads\",\n  \"description\": \"Beginner-friendly digital marketing guide including SEO, Google Ads, social media marketing, email marketing, content creation, and analytics.\",\n\n  \"image\": \"https://codeofschool.com/images/digital-marketing-banner.png\",\n  /*  UPDATE THIS IMAGE URL */\n\n  \"author\": {\n    \"@type\": \"Person\",\n    \"name\": \"\"\n    /*  CHANGE NAME IF NEEDED */\n  },\n\n  \"publisher\": {\n    \"@type\": \"Organization\",\n    \"name\": \"CodeOfSchool\",\n    /*  CHANGE TO YOUR BRAND NAME */\n    \"logo\": {\n      \"@type\": \"ImageObject\",\n      \"url\": \"https://codeofschool.com/logo.png\"\n      /*  UPDATE LOGO URL */\n    }\n  },\n\n  \"mainEntityOfPage\": \"https://codeofschool.com/test/digital_marketing.html\",\n\n  \"datePublished\": \"2025-01-14\",\n  /* CHANGE DATE IF NEEDED */\n  \"dateModified\": \"2025-01-14\"\n}" }} />
        </>
      }
    >
      {"\n     "}
      <div className="main">
        {"\n          "}
        <header>
          {"\n               "}
          <nav>
            {"\n                    "}
            <div className="nav-image">
              {"\n                         "}
              <Link to="/">
                <img src="../img/cos-white-logo.webp" alt="Code OF School" />
              </Link>
              {"\n                    "}
            </div>
            {"\n\n                    "}
            <div className="nav-pg">
              {"\n\n                         "}
              <ul className="nav-page">
                {"\n                              "}
                <li>
                  <Link to="/">
                    {"Home"}
                  </Link>
                </li>
                {"\n                              "}
                <li>
                  <Link to="/about-us.html">
                    {"About Us"}
                  </Link>
                </li>
                {"\n                              "}
                <li>
                  <Link to="/placement.html">
                    {"Our Placements"}
                  </Link>
                </li>
                {"\n                              "}
                <li>
                  <Link to="/contact-us.html">
                    {"Contact Us"}
                  </Link>
                </li>
                {"\n                         "}
              </ul>
              {"\n                    "}
            </div>
            {"\n\n                    "}
            <div className="nav-but">
              {"\n                         "}
              <a href="./scholarship.html" target="_blank">
                {"\n                              "}
                <button>
                  {"Scholarship"}
                </button>
                {"\n                         "}
              </a>
              {"\n                    "}
            </div>
            {"\n\n                    "}
            <div className="hamburger-menu" id="hamburger-icon">
              {"\n                         ☰ "}
            </div>
            {"\n               "}
          </nav>
          {"\n          "}
        </header>
        {"\n          "}
        <div className="dropdown-panel" id="dropdown-panel">
          {"\n               "}
          <ul className="categories" id="category-list">
            {"\n                    "}
            <li data-category="all">
              {"All"}
            </li>
            {"\n                    "}
            <li data-category="web">
              {"Web Dev"}
            </li>
            {"\n                    "}
            <li data-category="language">
              {"Languages"}
            </li>
            {"\n                    "}
            <li data-category="app">
              {"Mobile.Dev"}
            </li>
            {"\n                    "}
            <li data-category="ai">
              {"Data & AI"}
            </li>
            {"\n                    "}
            <li data-category="other">
              {"Other"}
            </li>
            {"\n               "}
          </ul>
          {"\n               "}
          <ul className="courses" id="course-list">
            {"\n               "}
          </ul>
          {"\n          "}
        </div>
        {"\n\n          "}
        <div className="mobile-nav-overlay" id="mobile-nav-overlay">
          {"\n               "}
          <div className="close-btn" id="close-mobile-nav">
            {"×"}
          </div>
          {"\n               "}
          <ul className="mobile-nav-page">
            {"\n                    "}
            <li>
              <Link to="/">
                {"Home"}
              </Link>
            </li>
            {"\n                    "}
            <li>
              <Link to="/about-us.html">
                {"About Us"}
              </Link>
            </li>
            {"\n                    "}
            {"\n                    "}
            <li>
              <Link to="/placement.html">
                {"Our Placements"}
              </Link>
            </li>
            {"\n                    "}
            <li>
              <Link to="/contact-us.html">
                {"Contact Us"}
              </Link>
            </li>
            {"\n               "}
          </ul>
          {"\n               "}
          <div className="mobile-nav-button">
            {"\n                    "}
            <a href="./scholarship.html" target="_blank">
              {"\n                         "}
              <button>
                {"Scholarship"}
              </button>
              {"\n                    "}
            </a>
            {"\n               "}
          </div>
          {"\n          "}
        </div>
        {"\n     "}
      </div>
      {"\n     "}
      {"\n\n     \n\n\n     "}
      <div className="container">
        {"\n          "}
        {"\n          "}
        <div className="top">
          {"\n               "}
          <h1>
            {"Digital Marketing"}
          </h1>
          {"\n          "}
        </div>
        {"\n          "}
        {"\n          "}
        <div className="language-toggle">
          {"\n               "}
          <button className="lang-btn" onClick={(event) => { ELanguage(); }}>
            {"\n                    English\n               "}
          </button>
          {"\n               "}
          <button className="lang-btn" onClick={(event) => { HLanguage(); }}>
            {"\n                    "}
            {"Hindi\n               "}
          </button>
          {"\n          "}
        </div>
        {"\n\n\n          "}
        {"\n          "}
        <section className="section-one">
          {"\n               "}
          <div className="notice">
            {"\n                    "}
            <h2>
              {"📌 Important Notice & Guidelines"}
            </h2>
            {"\n                    "}
            <ul>
              {"\n                         "}
              <li>
                <strong>
                  {"Scholarship Rule:"}
                </strong>
                {" The percentage of marks you score in the test will\n                              be equal to the percentage of scholarship you receive."}
              </li>
              {"\n                         "}
              <li>
                <strong>
                  {"Weekly Test:"}
                </strong>
                {" Tests will be conducted every Friday."}
              </li>
              {"\n                         "}
              <li>
                <strong>
                  {"Result Update:"}
                </strong>
                {" Your marks/results will be updated on the WhatsApp\n                              Channel every Saturday."}
              </li>
              {"\n                         "}
              <li>
                <strong>
                  {"New Batches:"}
                </strong>
                {" New batches will start every Monday."}
              </li>
              {"\n                    "}
            </ul>
            {"\n               "}
          </div>
          {"\n          "}
        </section>
        {"\n\n          "}
        {"\n\n\n          "}
        {"\n\n          "}
        {"\n          "}
        {"\n          "}
        <div id="englishContent">
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"1. Introduction"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container-h1">
              {"\n\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <div>
                  {"\n                                   "}
                  <p>
                    {"“Digital Marketing is the art of promoting products and services through\n                                        online\n                                        platforms like search engines, social media, emails, and websites. It\n                                        connects\n                                        businesses\n                                        with\n                                        the\n                                        right audience at the right time, offering cost-effective, measurable, and\n                                        impactful\n                                        results in today’s digital-first world.”"}
                  </p>
                  {"\n                              "}
                </div>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              {"\n                         "}
              <div className="image-box">
                {"\n                              "}
                <img src="digital_images/DM1.jpg" alt="img" />
                {"\n                         "}
              </div>
              {"\n\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"2. Traditional Marketing vs Digital Marketing"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container-h1">
              {"\n\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <p>
                  {"Traditional marketing uses offline methods like TV, radio, newspapers, and\n                                   billboards\n                                   to\n                                   reach\n                                   people."}
                </p>
                {"\n                              "}
                <p>
                  {"On the other hand, digital marketing focuses on online platforms like social\n                                   media,\n                                   search engines, and email. It allows businesses to connect with the right\n                                   audience at\n                                   the\n                                   right\n                                   time."}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              {"\n                         "}
              <div className="image-box">
                {"\n                              "}
                <img src="digital_images/DM2c.jpg" alt="img" />
                {"\n                         "}
              </div>
              {"\n\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"3. Digital Marketing Components"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container">
              {"\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"SEO (Search Engine Optimization):"}
                    </strong>
                    {" Improve website ranking on\n                                        search\n                                        engines."}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"SEM (Search Engine Marketing):"}
                    </strong>
                    {" Paid campaigns for visibility.\n                                   "}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"SMM (Social Media Marketing):"}
                    </strong>
                    {" Promote products on platforms like\n                                        Facebook,\n                                        Instagram, LinkedIn."}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Content Marketing:"}
                    </strong>
                    {" Blogs, videos, articles for engagement."}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Email Marketing:"}
                    </strong>
                    {" Personalized messages for customers."}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Affiliate Marketing:"}
                    </strong>
                    {" Promoting products for commission."}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Influencer Marketing:"}
                    </strong>
                    {" Collaborating with influencers."}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n                         "}
              {"\n                         "}
              <div className="image-box">
                {"\n                              "}
                <img src="digital_images/DM3.png" alt="img" />
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"4. SEO (Search Engine Optimization)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container-h1">
              {"\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <p>
                  <strong>
                    {"Definition:"}
                  </strong>
                  {" SEO means optimizing a website to appear on top of search\n                                   engine results."}
                </p>
                {"\n                              "}
                <h3>
                  {"Types of SEO:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"On-Page SEO:"}
                    </strong>
                    {" Optimizing titles, keywords, content, images."}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Off-Page SEO:"}
                    </strong>
                    {" Building backlinks and domain authority."}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Technical SEO:"}
                    </strong>
                    {" Improving website speed, security, and\n                                        mobile-friendliness."}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="image-box">
                {"\n                              "}
                <img src="digital_images/DM4a.jpg" alt="" />
                {"\n                         "}
              </div>
              {"\n\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"5. SEM (Search Engine Marketing)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container">
              {"\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <p>
                  <strong>
                    {"Definition:"}
                  </strong>
                  {" SEM is paid advertising on search engines to gain instant\n                                   visibility."}
                </p>
                {"\n                              "}
                <h3>
                  {"Tools:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Google Ads"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Bing Ads"}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                              "}
                <h3>
                  {"Key Features:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Quick results:"}
                    </strong>
                    {" Ads appear instantly at the top."}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Highly targeted:"}
                    </strong>
                    {" You can filter by location, age, device, or\n                                        interest."}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Pay only for clicks:"}
                    </strong>
                    {" You pay when someone clicks your ad."}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Performance tracking:"}
                    </strong>
                    {" Google Ads provides detailed analytics.\n                                   "}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="image-box" id="points">
                {"\n                              "}
                <img src="digital_images/DM5.webp" alt="img" />
                {"\n                         "}
              </div>
              {"\n\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"6. Social Media Marketing (SMM)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container">
              {"\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <p>
                  {"SMM means promoting a brand, product, or service through social platforms like\n                                   Facebook,\n                                   Instagram, LinkedIn, and Twitter."}
                </p>
                {"\n                              "}
                <h3>
                  {"Benefits:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"High engagement:"}
                    </strong>
                    {" Likes, shares, and comments build trust."}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Brand awareness:"}
                    </strong>
                    {" Reach millions globally."}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Cost-effective:"}
                    </strong>
                    {" Organic posts and ads are cheaper."}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Customer interaction:"}
                    </strong>
                    {" Direct chat and feedback."}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                              "}
                <h3>
                  {"Strategies:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Regular posting of valuable content."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Using trending hashtags."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Paid campaigns for targeted users."}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="image-box">
                {"\n                              "}
                <img src="digital_images/DM6.png" />
                {"\n                         "}
              </div>
              {"\n\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"7. Content Marketing"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container-h7">
              {"\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <p>
                  {"Content Marketing is creating and sharing valuable, relevant, and consistent content to\n                                   attract\n                                   and engage customers."}
                </p>
                {"\n                              "}
                <h3>
                  {"Forms of Content:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Blog posts"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Infographics"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"E-books & Guides"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Videos & Reels"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Podcasts"}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                              "}
                <h3>
                  {"Benefits:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Builds authority and trust."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Improves SEO rankings."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Increases website traffic."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Educates and converts customers."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Works long-term even without ads."}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="image-box">
                {"\n                              "}
                <img src="digital_images/DM7a.jpg" />
                {"\n                         "}
              </div>
              {"\n\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"8. Email Marketing"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container-h8">
              {"\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <p>
                  {"Email marketing is sending promotional or informative messages directly to customers\n                                   via\n                                   email."}
                </p>
                {"\n                              "}
                <h3>
                  {"Advantages:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Personalized communication."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Cost-effective."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Measurable results (open & click rate)."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Builds loyalty."}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                              "}
                <h3>
                  {"Examples:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Welcome emails."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Newsletters."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Festive offers."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Product updates."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Feedback requests."}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="image-box">
                {"\n                              "}
                <img src="digital_images/DM8.png" alt="img" />
                {"\n                         "}
              </div>
              {"\n\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"9. Affiliate & Influencer Marketing"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container-h9">
              {"\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <p>
                  {"Affiliate marketing means promoting products through partners who earn commission on\n                                   sales.\n                                   Influencer marketing involves collaboration with social media personalities."}
                </p>
                {"\n                              "}
                <h3>
                  {"Benefits:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Low risk (pay only when sales happen)."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Wider reach through influencers."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Increases credibility."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Boosts sales quickly."}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                              "}
                <h3>
                  {"How It Works:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Affiliate signs up."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Gets unique tracking link."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Promotes product online."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Earns commission on each sale."}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="image-box">
                {"\n                              "}
                <img src="digital_images/DM9b.webp" alt="img" />
                {"\n                         "}
              </div>
              {"\n\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"10. Mobile Marketing"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container-h10">
              {"\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <p>
                  <strong>
                    {"Definition:"}
                  </strong>
                  {" Mobile marketing is promoting products or services through\n                                   smartphones, tablets, and mobile apps. It includes SMS, push notifications, in-app\n                                   ads,\n                                   and mobile-friendly websites."}
                </p>
                {"\n                              "}
                <h3>
                  {"Key Features:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Personalized marketing:"}
                    </strong>
                    {" Send offers directly to mobile."}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"High reach:"}
                    </strong>
                    {" Almost everyone uses a smartphone."}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Location-based targeting:"}
                    </strong>
                    {" Send ads according to user’s location.\n                                   "}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Cost-effective:"}
                    </strong>
                    {" SMS and push notifications are cheaper than TV\n                                        ads.\n                                   "}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                              "}
                <h3>
                  {"Strategies in Mobile Marketing:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"SMS & WhatsApp marketing."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"App-based promotions."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Mobile-friendly websites."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Push notifications."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Location-based offers."}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="image-box">
                {"\n                              "}
                <img src="digital_images/DM10.jpg" alt="img" />
                {"\n                         "}
              </div>
              {"\n\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"11. Online Reputation Management (ORM)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container-h11">
              {"\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <p>
                  <strong>
                    {"Definition:"}
                  </strong>
                  {" ORM is the practice of managing and improving how a brand,\n                                   business, or individual is perceived online. It includes handling reviews, comments,\n                                   and\n                                   public\n                                   feedback."}
                </p>
                {"\n                              "}
                <h3>
                  {"Importance:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Builds trust:"}
                    </strong>
                    {" Positive reviews attract new customers."}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Protects brand image:"}
                    </strong>
                    {" Negative comments, if ignored, can harm.\n                                   "}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Customer loyalty:"}
                    </strong>
                    {" Responding politely builds relationships."}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Competitive edge:"}
                    </strong>
                    {" A good reputation brings more business."}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                              "}
                <h3>
                  {"Techniques:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Monitoring reviews on Google, Justdial, etc."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Replying professionally to negative comments."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Encouraging satisfied customers to post feedback."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Publishing positive news, blogs, and PR articles."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Using social listening tools."}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="image-box">
                {"\n                              "}
                <img src="digital_images/DM11d.png" alt="img" />
                {"\n                         "}
              </div>
              {"\n\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"12. Future of Digital Marketing"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container-h12">
              {"\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <p>
                  <strong>
                    {"Definition:"}
                  </strong>
                  {" The future of digital marketing is shaped by AI,\n                                   automation,\n                                   personalization, and new technologies like AR/VR. Businesses must adapt to remain\n                                   competitive."}
                </p>
                {"\n                              "}
                <h3>
                  {"Trends:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"AI & Chatbots:"}
                    </strong>
                    {" Provide 24/7 customer support."}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Voice Search Optimization:"}
                    </strong>
                    {" People use Alexa, Siri, Google\n                                        Assistant.\n                                   "}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Personalization:"}
                    </strong>
                    {" Customized ads for each user."}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Video Marketing:"}
                    </strong>
                    {" Short videos and reels dominate."}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"AR/VR Marketing:"}
                    </strong>
                    {" Virtual try-on for fashion or furniture."}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"Data-driven marketing:"}
                    </strong>
                    {" Using analytics for better decisions.\n                                   "}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                              "}
                <h3>
                  {"Conclusion:"}
                </h3>
                {"\n                              "}
                <p>
                  {"The future is digital-first. Businesses that adopt modern strategies will stay ahead.\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="image-box">
                {"\n                              "}
                <img src="digital_images/DM12c.png" alt="img" />
                {"\n                         "}
              </div>
              {"\n\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n          "}
        </div>
        {"\n          "}
        {"\n          "}
        {"\n          "}
        <div id="hindiContent" className="hidden">
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"1. परिचय"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container-h1">
              {"\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <p>
                  {"“डिजिटल मार्केटिंग वह कला है जिसके माध्यम से उत्पादों और सेवाओं को ऑनलाइन प्लेटफ़ॉर्म\n                                   जैसे\n                                   सर्च\n                                   इंजन, सोशल मीडिया, ईमेल और वेबसाइट्स के जरिए बढ़ावा दिया जाता है। यह व्यवसायों को सही\n                                   समय\n                                   पर\n                                   सही दर्शकों से जोड़ता है, लागत-प्रभावी, मापनीय और प्रभावशाली परिणाम प्रदान करता है।”\n                              "}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              {"\n                         "}
              <div className="image-box">
                {"\n                              "}
                <img src="digital_images/DM1.jpg" alt="img" />
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"2. पारंपरिक मार्केटिंग बनाम डिजिटल मार्केटिंग"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container">
              {"\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <p>
                  {"पारंपरिक मार्केटिंग में टीवी, रेडियो, समाचार पत्र और बिलबोर्ड जैसी ऑफ़लाइन विधियों का\n                                   उपयोग\n                                   लोगों\n                                   तक पहुँचने के लिए किया जाता है।"}
                </p>
                {"\n                              "}
                <p>
                  {"इसके विपरीत, डिजिटल मार्केटिंग ऑनलाइन प्लेटफ़ॉर्म जैसे सोशल मीडिया, सर्च इंजन और ईमेल\n                                   पर\n                                   केंद्रित\n                                   होती है। यह व्यवसायों को सही समय पर सही दर्शकों से जोड़ने में मदद करती है।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              {"\n                         "}
              <div className="image-box">
                {"\n                              "}
                <img src="digital_images/DM2c.jpg" alt="img" />
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"3. डिजिटल मार्केटिंग के घटक"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container">
              {"\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"SEO (सर्च इंजन ऑप्टिमाइजेशन):"}
                    </strong>
                    {" वेबसाइट की रैंकिंग सुधारना।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"SEM (सर्च इंजन मार्केटिंग):"}
                    </strong>
                    {" दृश्यता के लिए पेड कैंपेन।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"SMM (सोशल मीडिया मार्केटिंग):"}
                    </strong>
                    {" फेसबुक, इंस्टाग्राम, लिंक्डइन जैसे\n                                        प्लेटफ़ॉर्म पर उत्पादों का प्रचार।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"कॉन्टेंट मार्केटिंग:"}
                    </strong>
                    {" ब्लॉग, वीडियो, आर्टिकल्स के माध्यम से\n                                        जुड़ाव।\n                                   "}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"ईमेल मार्केटिंग:"}
                    </strong>
                    {" ग्राहकों के लिए व्यक्तिगत संदेश।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"एफ़िलिएट मार्केटिंग:"}
                    </strong>
                    {" कमीशन के लिए उत्पादों को प्रचारित करना।\n                                   "}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"इन्फ्लुएंसर मार्केटिंग:"}
                    </strong>
                    {" इन्फ्लुएंसर्स के साथ सहयोग।"}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n                         "}
              {"\n                         "}
              <div className="image-box">
                {"\n                              "}
                <img src="digital_images/DM3.png" alt="img" />
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"4. SEO (सर्च इंजन ऑप्टिमाइजेशन)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container">
              {"\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <p>
                  <strong>
                    {"परिभाषा:"}
                  </strong>
                  {" SEO का मतलब है वेबसाइट को इस तरह ऑप्टिमाइज करना कि वह सर्च\n                                   इंजन\n                                   परिणामों में ऊपर दिखाई दे।"}
                </p>
                {"\n                              "}
                <h3>
                  {"SEO के प्रकार:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"ऑन-पेज SEO:"}
                    </strong>
                    {" शीर्षक, कीवर्ड, कंटेंट और इमेजेज़ को ऑप्टिमाइज करना।\n                                   "}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"ऑफ-पेज SEO:"}
                    </strong>
                    {" बैकलिंक्स और डोमेन अथॉरिटी बनाना।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"तकनीकी SEO:"}
                    </strong>
                    {" वेबसाइट की स्पीड, सुरक्षा और मोबाइल फ्रेंडलीनेस\n                                        सुधारना।\n                                   "}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n                         "}
              {"\n                         "}
              <div className="image-box">
                {"\n                              "}
                <img src="digital_images/DM4a.jpg" alt="img" />
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"5. SEM (सर्च इंजन मार्केटिंग)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container">
              {"\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <p>
                  <strong>
                    {"परिभाषा:"}
                  </strong>
                  {" SEM का मतलब है सर्च इंजन पर भुगतान करके विज्ञापन देना ताकि\n                                   तुरंत\n                                   दृश्यता मिले।"}
                </p>
                {"\n                              "}
                <h3>
                  {"उपकरण:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Google Ads"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Bing Ads"}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                              "}
                <h3>
                  {"मुख्य विशेषताएँ:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"तुरंत परिणाम:"}
                    </strong>
                    {" विज्ञापन तुरंत ऊपर दिखाई देते हैं।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"लक्षित दर्शक:"}
                    </strong>
                    {" आप स्थान, उम्र, डिवाइस या रुचि के अनुसार फ़िल्टर\n                                        कर\n                                        सकते\n                                        हैं।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"सिर्फ क्लिक के लिए भुगतान:"}
                    </strong>
                    {" आप तभी भुगतान करते हैं जब कोई आपके\n                                        विज्ञापन पर\n                                        क्लिक करे।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"प्रदर्शन ट्रैकिंग:"}
                    </strong>
                    {" Google Ads विस्तृत एनालिटिक्स प्रदान करता है।\n                                   "}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n                         "}
              {"\n                         "}
              <div className="image-box">
                {"\n                              "}
                <img src="digital_images/DM5.webp" alt="img" />
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"6. सोशल मीडिया मार्केटिंग (SMM)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container">
              {"\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <p>
                  {"SMM का मतलब है किसी ब्रांड, उत्पाद या सेवा को फेसबुक, इंस्टाग्राम, लिंक्डइन और ट्विटर\n                                   जैसे\n                                   सोशल\n                                   प्लेटफ़ॉर्म के माध्यम से प्रचारित करना।"}
                </p>
                {"\n                              "}
                <h3>
                  {"फायदे:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"उच्च जुड़ाव:"}
                    </strong>
                    {" लाइक्स, शेयर और कमेंट्स भरोसा बढ़ाते हैं।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"ब्रांड जागरूकता:"}
                    </strong>
                    {" वैश्विक स्तर पर पहुंच।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"लागत-कुशल:"}
                    </strong>
                    {" ऑर्गेनिक पोस्ट और विज्ञापन सस्ते हैं।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"ग्राहक इंटरैक्शन:"}
                    </strong>
                    {" सीधे चैट और फीडबैक।"}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                              "}
                <h3>
                  {"रणनीतियाँ:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"मूल्यवान कंटेंट का नियमित पोस्टिंग।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"ट्रेंडिंग हैशटैग का उपयोग।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"लक्षित उपयोगकर्ताओं के लिए पेड कैंपेन।"}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n                         "}
              {"\n                         "}
              <div className="image-box">
                {"\n                              "}
                <img src="digital_images/DM6.png" alt="img" />
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"7. कंटेंट मार्केटिंग"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container">
              {"\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <p>
                  {"कंटेंट मार्केटिंग का मतलब है मूल्यवान, प्रासंगिक और सुसंगत कंटेंट बनाना और साझा करना\n                                   ताकि\n                                   ग्राहक\n                                   आकर्षित और जुड़ें।"}
                </p>
                {"\n                              "}
                <h3>
                  {"कंटेंट के प्रकार:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"ब्लॉग पोस्ट"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"इन्फोग्राफिक्स"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"ई-बुक्स और गाइड्स"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"वीडियो और रील्स"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"पॉडकास्ट"}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                              "}
                <h3>
                  {"फायदे:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"विश्वसनीयता और भरोसा बढ़ाता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"SEO रैंकिंग सुधारता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"वेबसाइट ट्रैफ़िक बढ़ाता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"ग्राहकों को शिक्षित और कन्वर्ट करता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"बिना विज्ञापन के भी लंबे समय तक काम करता है।"}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n                         "}
              {"\n                         "}
              <div className="image-box">
                {"\n                              "}
                <img src="digital_images/DM7a.jpg" alt="img" />
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"8. ईमेल मार्केटिंग"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="text-box" id="points">
              {"\n                         "}
              <p>
                {"ईमेल मार्केटिंग का मतलब है ग्राहकों को सीधे ईमेल के माध्यम से प्रचारक या सूचनात्मक संदेश\n                              भेजना।\n                         "}
              </p>
              {"\n                         "}
              <h3>
                {"फायदे:"}
              </h3>
              {"\n                         "}
              <ul>
                {"\n                              "}
                <li>
                  {"व्यक्तिगत संचार।"}
                </li>
                {"\n                              "}
                <li>
                  {"लागत-कुशल।"}
                </li>
                {"\n                              "}
                <li>
                  {"परिणाम मापने योग्य (ओपन और क्लिक रेट)।"}
                </li>
                {"\n                              "}
                <li>
                  {"ग्राहक वफादारी बनाता है।"}
                </li>
                {"\n                         "}
              </ul>
              {"\n                         "}
              <h3>
                {"उदाहरण:"}
              </h3>
              {"\n                         "}
              <ul>
                {"\n                              "}
                <li>
                  {"वेलकम ईमेल"}
                </li>
                {"\n                              "}
                <li>
                  {"न्यूज़लेटर"}
                </li>
                {"\n                              "}
                <li>
                  {"त्योहारी ऑफ़र"}
                </li>
                {"\n                              "}
                <li>
                  {"उत्पाद अपडेट"}
                </li>
                {"\n                              "}
                <li>
                  {"फीडबैक अनुरोध"}
                </li>
                {"\n                         "}
              </ul>
              {"\n\n                         "}
              {"\n                         "}
              <div className="image-box">
                {"\n                             "}
                <img src="digital_images/DM8.png" alt="img" />
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"9. एफिलिएट और इन्फ्लुएंसर मार्केटिंग"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container">
              {"\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <p>
                  {"एफिलिएट मार्केटिंग का मतलब है उत्पादों को पार्टनर्स के माध्यम से प्रमोट करना जो बिक्री\n                                   पर\n                                   कमीशन\n                                   कमाते हैं। इन्फ्लुएंसर मार्केटिंग में सोशल मीडिया व्यक्तित्वों के साथ सहयोग शामिल है।\n                              "}
                </p>
                {"\n                              "}
                <h3>
                  {"फायदे:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"कम जोखिम (सिर्फ बिक्री होने पर भुगतान)।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"इन्फ्लुएंसर्स के माध्यम से अधिक पहुँच।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"विश्वसनीयता बढ़ाता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"बेहतर बिक्री में तेजी लाता है।"}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                              "}
                <h3>
                  {"कैसे काम करता है:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"एफिलिएट साइन अप करता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"यूनिक ट्रैकिंग लिंक प्राप्त करता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"ऑनलाइन उत्पाद का प्रचार करता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"प्रत्येक बिक्री पर कमीशन कमाता है।"}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n                         "}
              {"\n                         "}
              <div className="image-box">
                {"\n                              "}
                <img src="digital_images/DM9b.webp" alt="img" />
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"10. मोबाइल मार्केटिंग"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container">
              {"\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <p>
                  <strong>
                    {"परिभाषा:"}
                  </strong>
                  {" मोबाइल मार्केटिंग का मतलब है स्मार्टफोन, टैबलेट और मोबाइल\n                                   ऐप्स के\n                                   माध्यम से उत्पादों या सेवाओं को प्रचारित करना। इसमें SMS, पुश नोटिफ़िकेशन, इन-ऐप\n                                   विज्ञापन\n                                   और\n                                   मोबाइल-फ्रेंडली वेबसाइट्स शामिल हैं।"}
                </p>
                {"\n                              "}
                <h3>
                  {"मुख्य विशेषताएँ:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"व्यक्तिगत मार्केटिंग:"}
                    </strong>
                    {" सीधे मोबाइल पर ऑफ़र भेजना।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"उच्च पहुँच:"}
                    </strong>
                    {" लगभग सभी स्मार्टफोन का उपयोग करते हैं।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"स्थान-आधारित लक्ष्यीकरण:"}
                    </strong>
                    {" उपयोगकर्ता के स्थान के अनुसार विज्ञापन\n                                        भेजना।\n                                   "}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"लागत-कुशल:"}
                    </strong>
                    {" SMS और पुश नोटिफ़िकेशन टीवी विज्ञापनों की तुलना में\n                                        सस्ते\n                                        हैं।\n                                   "}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                              "}
                <h3>
                  {"मोबाइल मार्केटिंग की रणनीतियाँ:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"SMS और WhatsApp मार्केटिंग"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"ऐप-आधारित प्रचार"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"मोबाइल-फ्रेंडली वेबसाइट्स"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"पुश नोटिफ़िकेशन"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"स्थान-आधारित ऑफ़र"}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n                         "}
              {"\n                         "}
              <div className="image-box">
                {"\n                              "}
                <img src="digital_images/DM10.jpg" alt="img" />
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"11. ऑनलाइन प्रतिष्ठा प्रबंधन (ORM)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container">
              {"\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <p>
                  <strong>
                    {"परिभाषा:"}
                  </strong>
                  {" ORM का मतलब है किसी ब्रांड, व्यवसाय या व्यक्ति की ऑनलाइन छवि\n                                   को\n                                   मैनेज\n                                   और सुधारना। इसमें रिव्यू, कमेंट और पब्लिक फीडबैक को संभालना शामिल है।"}
                </p>
                {"\n                              "}
                <h3>
                  {"महत्व:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"भरोसा बनाना:"}
                    </strong>
                    {" सकारात्मक रिव्यू नए ग्राहकों को आकर्षित करते हैं।\n                                   "}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"ब्रांड छवि की सुरक्षा:"}
                    </strong>
                    {" नकारात्मक टिप्पणियाँ, यदि अनदेखी की जाए,\n                                        तो\n                                        नुकसान\n                                        पहुँचा सकती हैं।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"ग्राहक वफादारी:"}
                    </strong>
                    {" विनम्र प्रतिक्रिया देने से संबंध मजबूत होते हैं।\n                                   "}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"प्रतिस्पर्धात्मक लाभ:"}
                    </strong>
                    {" अच्छी प्रतिष्ठा अधिक व्यवसाय लाती है।"}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                              "}
                <h3>
                  {"तकनीकें:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Google, Justdial आदि पर रिव्यू की निगरानी"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"नकारात्मक टिप्पणियों का पेशेवर उत्तर देना"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"संतुष्ट ग्राहकों को फीडबैक पोस्ट करने के लिए प्रोत्साहित करना"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"सकारात्मक समाचार, ब्लॉग और PR आर्टिकल्स प्रकाशित करना"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"सोशल लिसनिंग टूल्स का उपयोग"}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n                         "}
              {"\n                         "}
              <div className="image-box">
                {"\n                              "}
                <img src="digital_images/Reputation Guards.jpg" alt="img" />
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"12. डिजिटल मार्केटिंग का भविष्य"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Show"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content" id="container">
              {"\n                         "}
              <div className="text-box" id="points">
                {"\n                              "}
                <p>
                  <strong>
                    {"परिभाषा:"}
                  </strong>
                  {" डिजिटल मार्केटिंग का भविष्य AI, ऑटोमेशन, व्यक्तिगत विज्ञापन\n                                   और\n                                   AR/VR\n                                   जैसी नई तकनीकों द्वारा आकार ले रहा है। व्यवसायों को प्रतिस्पर्धी बने रहने के लिए\n                                   अनुकूल\n                                   होना\n                                   चाहिए।"}
                </p>
                {"\n                              "}
                <h3>
                  {"रुझान:"}
                </h3>
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"AI और चैटबॉट्स:"}
                    </strong>
                    {" 24/7 ग्राहक सहायता प्रदान करना।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"वॉइस सर्च ऑप्टिमाइजेशन:"}
                    </strong>
                    {" लोग Alexa, Siri, Google Assistant का\n                                        उपयोग\n                                        करते\n                                        हैं।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"व्यक्तिगत विज्ञापन:"}
                    </strong>
                    {" प्रत्येक उपयोगकर्ता के लिए कस्टमाइज्ड\n                                        विज्ञापन।\n                                   "}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"वीडियो मार्केटिंग:"}
                    </strong>
                    {" छोटे वीडियो और रील्स प्रमुख हैं।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"AR/VR मार्केटिंग:"}
                    </strong>
                    {" फैशन या फर्नीचर के लिए वर्चुअल ट्राय-ऑन।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    <strong>
                      {"डेटा-आधारित मार्केटिंग:"}
                    </strong>
                    {" बेहतर निर्णयों के लिए एनालिटिक्स का\n                                        उपयोग।\n                                   "}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                              "}
                <h3>
                  {"निष्कर्ष:"}
                </h3>
                {"\n                              "}
                <p>
                  {"भविष्य डिजिटल-फर्स्ट है। आधुनिक रणनीतियाँ अपनाने वाले व्यवसाय आगे रहेंगे।"}
                </p>
                {"\n                         "}
              </div>
              {"\n                         "}
              {"\n                         "}
              <div className="image-box">
                {"\n                              "}
                <img src="digital_images/DM12c.png" alt="img" />
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          {"\n\n               "}
          {"\n\n          "}
        </div>
        {"\n     "}
      </div>
      {"\n     "}
      <section className="section-final">
        {"\n          "}
        <h1>
          {"Best of Luck to All Students! "}
        </h1>
        {"\n          "}
        <p>
          {"Give your best in the test, stay focused, and keep learning something new every day. Believe in\n               yourself,\n               and let each lesson make you stronger and smarter."}
        </p>
        {"\n     "}
      </section>
      {"\n\n  "}
      {"\n        "}
      <a href="https://wa.me/919977723584?text=Hi%20I%20need%20help" className="whatsapp-float" id="whatsappButton" target="_blank">
        {"\n            "}
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Chat" />
        {"\n            "}
        <span className="notification-dot"></span>
        {"\n        "}
      </a>
      {"\n\n     "}
      <footer>
        {"\n\n          "}
        <div className="footer-partone">
          {"\n\n               "}
          <div className="footer-inforag">
            {"\n                    "}
            <div className="footer-image">
              <img src="../img/cos-white-logo.webp" alt="Code OF School" />
            </div>
            {"\n                    "}
            <div className="footer-dis">
              {"\n                         "}
              <p>
                {"\n                              Code of School by Inforag Technology empowers future tech innovators through hands-on\n                              training in coding, data science, AI, and full-stack development. Our practical,\n                              industry-driven curriculum ensures students gain job-ready skills and real-world project\n                              experience."}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="footer-logo">
              {"\n                         "}
              <a href="https://www.instagram.com/codeofschool/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path>
                </svg>
              </a>
              {"\n\n                         "}
              <a href="https://www.linkedin.com/company/code-of-school" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path>
                </svg>
              </a>
              {"\n\n                         "}
              <a href="https://www.facebook.com/codeofschool" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                </svg>
              </a>
              {"\n\n                         "}
              <a href="https://x.com/codeofschool" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
                </svg>
              </a>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          <div className="footer-quicklink">
            {"\n                    "}
            <ul>
              {"\n                         "}
              <h3 id="heading">
                {"Quick Links"}
              </h3>
              {"\n                         "}
              <li>
                <Link to="/">
                  {"Home"}
                </Link>
              </li>
              {"\n                         "}
              <li>
                <Link to="/about-us.html">
                  {"About Us"}
                </Link>
              </li>
              {"\n                         "}
              <li>
                <Link to="/contact-us.html">
                  {"Contact Us"}
                </Link>
              </li>
              {"\n                         "}
              <li>
                {"\n                              "}
                <h3>
                  {"Legal & Info "}
                </h3>
                {"\n                         "}
              </li>
              {"\n                         "}
              <li>
                <Link to="/Frequently-asked-questions.html">
                  {"FAQ"}
                </Link>
              </li>
              {"\n                         "}
              <li>
                <Link to="/privacy-policy.html">
                  {"Privacy Policy"}
                </Link>
              </li>
              {"\n                         "}
              <li>
                <Link to="/termsandcondition.html">
                  {"Terms & Conditions"}
                </Link>
              </li>
              {"\n                    "}
            </ul>
            {"\n                    "}
            <div className="footer-login-btn">
              <Link to="/login.html">
                <button>
                  {"Login"}
                </button>
              </Link>
            </div>
            {"\n               "}
          </div>
          {"\n\n               "}
          <div className="footer-service">
            {"\n                    "}
            <h3 id="heading-two">
              {"Courses Offered"}
            </h3>
            {"\n                    "}
            <ul>
              {"\n                    "}
              <li>
                <a href="./marketing.html">
                  {"Digital Marketing with AI"}
                </a>
              </li>
              {"\n                    "}
              <li>
                <a href="./frontend.html">
                  {"Full Stack Development"}
                </a>
              </li>
              {"\n                    "}
              <li>
                <a href="./mern.html">
                  {"MERN Stack Development"}
                </a>
              </li>
              {"\n                    "}
              <li>
                <a href="./frontend.html">
                  {"Frontend Development"}
                </a>
              </li>
              {"\n                    "}
              <li>
                <a href="./mobile_app.html">
                  {"Mobile App Development"}
                </a>
              </li>
              {"\n                    "}
              <li>
                <Link to="/test/data_science.html">
                  {"Data Science"}
                </Link>
              </li>
              {"\n                    "}
              <li>
                <a href="./analysis.html">
                  {"Data Analysis"}
                </a>
              </li>
              {"\n                    "}
              <li>
                <a href="./ui_ux.html">
                  {"UI/UX Design"}
                </a>
              </li>
              {"\n                    "}
              <li>
                <Link to="/test/python.html">
                  {"Python"}
                </Link>
              </li>
              {"\n                    "}
              <li>
                <Link to="/test/c.html">
                  {"C & C++"}
                </Link>
              </li>
              {"\n                "}
            </ul>
            {"\n               "}
          </div>
          {"\n\n               "}
          <div className="footer-contact">
            {"\n                    "}
            <h3 id="heading-three">
              {"Contact Us"}
            </h3>
            {"\n\n                    "}
            <div className="footer-contact-loc">
              {"\n                         "}
              <div className="footer-contact-logo">
                {"\n                              "}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"></path>
                </svg>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="footer-contact-location">
                {"\n                              "}
                <a href={"https://www.google.com/maps/place/Inforag+Technology+-+Web+%7C+App+%7C+Digital+Marketing+%7C+Software+Company+in+Indore/@22.7496616,75.8953251,3a,75y/data=!3m8!1e2!3m6!1sAF1QipP1gRwG7pwN49gQMMzKXwBFGqWpqR2oBXTp7Kna!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipP1gRwG7pwN49gQMMzKXwBFGqWpqR2oBXTp7Kna%3Dw114-h86-k-no!7i4160!8i3120!4m7!3m6!1s0x3962fd13477b7e61:0x8cfc2e3f59b0c1b3!8m2!3d22.749631!4d75.8954539!10e5!16s%2Fg%2F11x1jbjxtj?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"} target="_blank">
                  {"Office No. 421 Fourth Floor, Shagun Tower, Rasoma Square, Vijay\n                                   Nagar,\n                                   Ratna Lok Colony, Indore, Madhya Pradesh 452010"}
                </a>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n\n                    "}
            <div className="footer-contact-phoneno">
              {"\n                         "}
              <div className="footer-contact-logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path>
                </svg>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="contact-no">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    <a href="tel:9977723584">
                      {"+91 99777-23-584"}
                    </a>
                  </li>
                  {"\n                                   "}
                  <li>
                    <a href="tel:9977701948">
                      {"+91 99777-019-48"}
                    </a>
                  </li>
                  {"\n                                   "}
                  <li>
                    <a href="tel:9165234695">
                      {"+91 9165-234-695"}
                    </a>
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n\n                    "}
            <div className="footer-contact-mail">
              {"\n                         "}
              <div className="footer-contact-logo">
                {"\n                              "}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"></path>
                </svg>
                {"\n                         "}
              </div>
              {"\n                         "}
              <div className="mail-add">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    <a href="mailto:thecodeofschool@gmail.com">
                      {"thecodeofschool@gmail.com"}
                    </a>
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n\n                    "}
            <div className="footer-contact-time">
              {"\n                         "}
              <div className="footer-contact-logo">
                {"\n                              "}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"></path>
                </svg>
                {"\n                         "}
              </div>
              {"\n\n                         "}
              <div className="office">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Mon-Sat : 10:00 - 20:00 "}
                  </li>
                  {"\n                                   "}
                  {"\n                                   "}
                  <li>
                    {"Sunday : Closed "}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n\n\n          "}
        </div>
        {"\n          "}
        <div className="footer-parttwo">
          {"\n               "}
          <h3>
            {"Copyright © 2025 "}
            <a href="https://inforag.com/" target="_blank">
              {"Inforag Technology"}
            </a>
            {" All\n                    rights reserved"}
          </h3>
          {"\n          "}
        </div>
        {"\n\n     "}
      </footer>
      {"\n\n     "}
      {"\n\n\n\n\n\n"}
    </PageFrame>
  );
}
