import PageFrame from "@/runtime/PageFrame.jsx";
import { PublishedBlogCards } from "@/runtime/PublishedBlogs.jsx";

// Converted from blogs/Fullstack-Developer/Full-stack-blog.html
const styles = [];
const scripts = [{ src: "/blogs/script.js", names: {"fn":[],"vars":[],"lex":[],"consts":[]} }, { src: "/script.js", names: {"fn":["showCourseList"],"vars":[],"lex":["faqs","cards","observer"],"consts":["faqs","cards","observer"]} }];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>Full Stack MERN Development Dashboard</title>
        </>
      }
    >
      <div className="dashboard-container">
        {" "}
        <h1 className="blog-header">
          MERN Full Stack Development
        </h1>
        <PublishedBlogCards category="full-stack" />
        {" "}
        {" "}
        <div className="filter-tags-cloud">
          <a className="tag-pill active">
            All Modules
          </a>
          {" "}
          <a className="tag-pill">
            Web Foundations
          </a>
          {" "}
          <a className="tag-pill">
            JavaScript Architecture
          </a>
          {" "}
          <a className="tag-pill">
            React.js Frontend
          </a>
          {" "}
          <a className="tag-pill">
            {"Node & Express Backend"}
          </a>
          {" "}
          <a className="tag-pill">
            {"Databases & Advanced APIs"}
          </a>
          {" "}
          <a className="tag-pill">
            {"Security & Deployment"}
          </a>
        </div>
        {" "}
        {" "}
        <div className="results-counter">
          Showing 1-30 Specialized Topics
        </div>
        {" "}
        {" "}
        <div className="blog-grid">
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 01
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"} alt="Full Stack Dev" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                Introduction to Full Stack Development
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 02
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=400&q=80"} alt="Internet Infrastructure" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                How the Internet Works
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 03
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=400&q=80"} alt="VS Code Environment" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                {"VS Code Setup & Extensions"}
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 04
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&w=400&q=80"} alt="HTML5 Basics" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                {"HTML Basics & Semantic Elements"}
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 05
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80"} alt="Forms Collection" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                {"HTML Forms & Validation"}
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 06
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=400&q=80"} alt="CSS Core rules" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                {"CSS Fundamentals & Selectors"}
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 07
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80"} alt="Flexbox Layouts" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                Flexbox Layout System
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 08
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80"} alt="Responsive Grid System" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                {"CSS Grid & Responsive Design"}
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 09
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1556075798-482a6a685322?auto=format&fit=crop&w=400&q=80"} alt="Git Control Flow" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                {"Git & GitHub Integration"}
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 10
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1541462608141-ad4979e408c9?auto=format&fit=crop&w=400&q=80"} alt="Landing Page layout" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                Build a Responsive Landing Page
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 11
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=400&q=80"} alt="JS Engine" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                {"JavaScript Basics (Logic & Conditionals)"}
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 12
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&w=400&q=80"} alt="Functional Arrays" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                {"Functions, Arrays & Objects"}
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 13
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=400&q=80"} alt="DOM Trees" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                {"DOM Manipulation & Event Handling"}
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 14
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=400&q=80"} alt="ES6 Engine" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                ES6+ Modern Features
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 15
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80"} alt="Async Await loops" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                Asynchronous JavaScript (Promises / Async-Await)
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 16
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&q=80"} alt="React Virtual DOM" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                {"React Introduction & Architecture"}
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 17
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=400&q=80"} alt="JSX Tree" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                {"JSX & Component Workflows"}
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 18
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=400&q=80"} alt="Props State Mutation" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                {"Props & State Re-rendering Management"}
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 19
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=400&q=80"} alt="React Custom Lifecycle hooks" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                React Hooks (useState, useEffect)
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 20
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=400&q=80"} alt="React Client Multi routes" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                React Router Dynamic Navigation
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 21
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&w=400&q=80"} alt="API Fetch processing node" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                {"Axios & API Data Fetching Lifecycle"}
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 22
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80"} alt="Node JS runtime servers" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                {"Node.js Basics & V8 Engine Runtime"}
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 23
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80"} alt="Express Framework Routes" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                {"Express.js Framework & Middleware"}
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 24
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80"} alt="REST API Pipelines" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                RESTful APIs Architecture Patterns
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 25
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=400&q=80"} alt="NoSQL MongoDB Clustering" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                {"MongoDB & NoSQL Databases Architecture"}
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 26
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=400&q=80"} alt="CRUD App Operations" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                Building a Complete Full Stack CRUD Application
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 27
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80"} alt="JWT Tokens Cryptography" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                JSON Web Tokens (JWT) Secure Authentication Flow
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 28
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=400&q=80"} alt="Multer Media processing stream" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                {"File Uploads & Binary Stream Storage"}
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 29
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1484662021336-3d45149f3172?auto=format&fit=crop&w=400&q=80"} alt="Production Pipeline Deployment Vercel Render" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                Deploying Full Stack MERN Apps to Cloud Platforms
              </h2>
            </div>
          </div>
          {" "}
          {" "}
          <div className="blog-card">
            <div className="premium-badge">
              Topic 30
            </div>
            {" "}
            <img className="card-thumbnail" src={"https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=400&q=80"} alt="MERN Mock Code Interview Optimization" />
            {" "}
            <div className="card-overlay">
              <h2 className="card-title">
                {"Portfolio Structuring, Engineering Mock Interviews & Next Steps"}
              </h2>
            </div>
          </div>
        </div>
      </div>
      {" "}
      {" "}
    </PageFrame>
  );
}
