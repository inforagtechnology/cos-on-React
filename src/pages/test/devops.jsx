import PageFrame from "@/runtime/PageFrame.jsx";
import { Link } from "react-router-dom";

// Converted from test/devops.html
const styles = [{ href: "/header-footer.css" }, { href: "/test/main.css" }];
const scripts = [{ src: "/script.js", names: {"fn":["showCourseList"],"vars":[],"lex":["faqs","cards","observer"],"consts":["faqs","cards","observer"]} }, { src: "/test/main.js", names: {"fn":["ELanguage","HLanguage","toggleSection"],"vars":["english","hindi"],"lex":[],"consts":[]} }];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>DevOps Course in Indore | Code of School</title>
          <meta name="description" content="Learn DevOps tools and practices including Docker, Kubernetes, CI/CD, Jenkins, Ansible, and cloud deployment with hands-on projects." />
          <link rel="canonical" href="https://codeofschool.com/courses/devops" />
          <meta name="keywords" content="DevOps course Indore, DevOps training Indore, Docker Indore, Kubernetes Indore, CI/CD Indore" />
          <meta property="og:title" content="DevOps Course in Indore | Code of School" />
          <meta property="og:description" content="Hands-on DevOps training with Docker, Kubernetes, Jenkins, and cloud deployment." />
          <meta property="og:url" content="https://codeofschool.com/courses/devops" />
          <meta property="og:image" content="https://codeofschool.com/img/cos-white-logo.webp" />
          <meta name="twitter:title" content="DevOps Course | Code of School" />
          <meta name="twitter:description" content="Master DevOps with practical training in CI/CD, Docker, Kubernetes, and cloud tools." />
          <meta name="twitter:image" content="https://codeofschool.com/img/cos-white-logo.webp" />
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo.webp" type="image/webp" sizes="32x32" />
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo.webp" type="image/webp" sizes="48x48" />
          <link rel="apple-touch-icon" href="https://codeofschool.com/img/cos-white-logo.webp" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="icon" href="https://codeofschool.com/img/cos-white-logo.webp" type="image/webp" />
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
            {"DevOps"}
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
        {"\n\n\n          "}
        {"\n          "}
        <div id="englishContent">
          {"\n               "}
          {"\n               "}
          <div className="section">
            {"\n                    "}
            <div className="section-header" onClick={(event) => { toggleSection(event.currentTarget); }}>
              {"\n                         "}
              <h2>
                {"1. Introduction to DevOps"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"DevOps ek cultural aur technical approach hai jo development aur operations ko\n                                        integrate karta hai."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Goal: Software delivery fast aur reliable banana."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Collaboration aur communication ko promote karta hai."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Benefits: Faster releases, fewer errors, aur better efficiency."}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"2. Software Development Life Cycle (SDLC)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {" \n                         "}
              <div className="points">
                {" \n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"SDLC software development ke process ko define karta hai: requirement, design,\n                                        development, testing, deployment."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Models: Waterfall, Agile, aur DevOps approach."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Structured development aur predictable outcomes ensure karta hai."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"DevOps me SDLC ko Continuous Delivery improve karta hai."}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"3. Version Control Systems (Git & GitHub)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Version control code changes track karne aur team collaboration me help karta\n                                        hai.\n                                   "}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Git commands: git init, git add, git commit."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Branching allow karta hai alag features pe kaam karne ke liye."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Remote repositories (GitHub) code share aur collaborate karne me help karte hain.\n                                   "}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"4. Continuous Integration (CI)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"CI har code change ko automatically test aur integrate karta hai."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Automation tools: Jenkins, GitHub Actions, GitLab CI."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Early bug detection ensure karta hai."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Outcome: Stable aur production-ready code."}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"5. Continuous Delivery (CD)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"CD release process automate karta hai taki applications kabhi bhi deploy ho sake.\n                                   "}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Pipeline code ko testing se production tak automatically move karta hai."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Reliability: Consistent release process."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Advantage: Faster time-to-market."}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"6. Containerization (Docker)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Docker applications ko dependencies ke sath package karta hai."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Containers lightweight hote hain aur VMs se fast hote hain."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Dockerfile define karta hai image ka structure."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Portability aur efficiency improve hoti hai."}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"7. Container Orchestration (Kubernetes)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Kubernetes multiple containers ko manage karta hai across clusters."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Scaling: Automatically container resources adjust karta hai."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Load balancing: Traffic distribute karta hai containers ke beech."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Self-healing: Failed containers restart ho jate hain automatically."}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"8. Infrastructure as Code (IaC)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"IaC infrastructure ko code ke through manage karta hai."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Tools: Terraform, Ansible, CloudFormation."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Automation: Servers configure karna faster aur consistent hota hai."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Advantage: Easy scaling aur reproducible environments."}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"9. Configuration Management"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Systems ko consistently configure karna."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Tools: Ansible, Puppet, Chef, SaltStack."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Automation reduce karta hai manual errors."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Scalability: Thousands of servers easily manage ho jate hain."}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"10. Cloud Computing & DevOps"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Cloud platforms scalable environment provide karte hain DevOps ke liye."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Platforms: AWS, Azure, Google Cloud."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Services: Compute, storage, databases, CI/CD tools."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Integration: Works seamlessly with DevOps tools."}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"11. Monitoring & Logging"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Monitoring ensure karta hai applications aur servers healthy hain."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Logging events track karta hai for troubleshooting."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Tools: Prometheus, Grafana, ELK Stack."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Real-time alerts aur performance metrics provide karta hai."}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"12. Security in DevOps (DevSecOps)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Security integrate karna har stage me."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Shift-left approach: Early security checks."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Tools: SonarQube, Snyk, OWASP."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Automation: Security scans in CI/CD pipelines."}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"13. Case Studies & Mini Projects"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Practical tasks DevOps concepts ko apply karne ke liye."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"CI/CD Pipeline setup using Jenkins."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Docker + Kubernetes: Microservices deployment."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Infrastructure Automation with Terraform."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Monitoring dashboard with Grafana."}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"14. Automation & Scripting in DevOps"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Automation reduces manual effort, ensures consistency, and speeds up the delivery\n                                        process."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Scripting tools like Bash, Python, or PowerShell are used to automate repetitive\n                                        tasks."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Automated testing, deployment, and infrastructure provisioning improve\n                                        reliability.\n                                   "}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Integration with CI/CD pipelines ensures end-to-end automation of software\n                                        delivery.\n                                   "}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"15. Observability & Metrics in DevOps"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Observability is the ability to understand system performance through logs,\n                                        metrics,\n                                        and traces."}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Metrics like uptime, latency, and error rates help teams detect issues\n                                        proactively.\n                                   "}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Tools like Prometheus, Grafana, and ELK Stack provide visualization and alerting.\n                                   "}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Good observability practices improve reliability and accelerate incident\n                                        resolution.\n                                   "}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n                    "}
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
                {"1. DevOps का परिचय"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"DevOps एक सांस्कृतिक और तकनीकी दृष्टिकोण है जो विकास और संचालन को एकीकृत करता है।\n                                   "}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"उद्देश्य: सॉफ़्टवेयर डिलीवरी को तेज़ और विश्वसनीय बनाना।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"टीम सहयोग और संचार को बढ़ावा देता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"लाभ: तेज़ रिलीज़, कम त्रुटियाँ और बेहतर दक्षता।"}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"2. सॉफ़्टवेयर विकास जीवनचक्र (SDLC)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"SDLC सॉफ़्टवेयर विकास की प्रक्रिया को परिभाषित करता है: आवश्यकताएँ, डिज़ाइन,\n                                        विकास, परीक्षण, परिनियोजन।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"मॉडल्स: Waterfall, Agile और DevOps दृष्टिकोण।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"संरचित विकास और पूर्वानुमेय परिणाम सुनिश्चित करता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"DevOps में SDLC को Continuous Delivery द्वारा सुधारा जाता है।"}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"3. संस्करण नियंत्रण प्रणाली (Git & GitHub)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"संस्करण नियंत्रण कोड परिवर्तनों को ट्रैक करता है और टीम सहयोग में मदद करता है।\n                                   "}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Git कमांड्स: git init, git add, git commit।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Branching अलग-अलग फीचर्स पर काम करने की अनुमति देता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Remote repositories (GitHub) कोड साझा करने और सहयोग करने में मदद करते हैं।"}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"4. लगातार एकीकरण (CI)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"CI हर कोड परिवर्तन को स्वतः परीक्षण और एकीकृत करता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Automation tools: Jenkins, GitHub Actions, GitLab CI।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"जल्दी बग पता लगाने में मदद करता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"परिणाम: स्थिर और प्रोडक्शन-तैयार कोड।"}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"5. लगातार वितरण (CD)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"CD रिलीज़ प्रक्रिया को स्वचालित करता है ताकि एप्लिकेशन कभी भी तैनात हो सके।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Pipeline कोड को परीक्षण से प्रोडक्शन तक स्वचालित रूप से ले जाता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"विश्वसनीयता: सुसंगत रिलीज़ प्रक्रिया।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"लाभ: तेज़ समय-से-बाज़ार।"}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"6. कंटेनरीकरण (Docker)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Docker एप्लिकेशन को सभी निर्भरताओं के साथ पैकेज करता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Containers हल्के और VMs की तुलना में तेज़ होते हैं।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Dockerfile इमेज बनाने की संरचना को परिभाषित करता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"पोर्टेबिलिटी और दक्षता में सुधार।"}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"7. कंटेनर ऑर्केस्ट्रेशन (Kubernetes)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Kubernetes क्लस्टर में कई कंटेनरों को प्रबंधित करता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Scaling: कंटेनर संसाधनों को स्वचालित रूप से समायोजित करता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Load balancing: ट्रैफ़िक को कंटेनरों के बीच वितरित करता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Self-healing: विफल कंटेनर स्वचालित रूप से पुनरारंभ हो जाते हैं।"}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"8. कोड के रूप में इंफ्रास्ट्रक्चर (IaC)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"IaC कोड के माध्यम से इन्फ्रास्ट्रक्चर को प्रबंधित करता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Tools: Terraform, Ansible, CloudFormation।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Automation: सर्वर कॉन्फ़िगरेशन तेज़ और सुसंगत बनता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"लाभ: आसान स्केलिंग और पुनरुत्पादन योग्य वातावरण।"}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"9. कॉन्फ़िगरेशन प्रबंधन"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"सिस्टम को सुसंगत रूप से कॉन्फ़िगर करना।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Tools: Ansible, Puppet, Chef, SaltStack।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Automation मैनुअल त्रुटियों को कम करता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Scalability: हजारों सर्वरों का आसान प्रबंधन।"}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"10. क्लाउड कम्प्यूटिंग और DevOps"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"क्लाउड प्लेटफ़ॉर्म DevOps के लिए स्केलेबल वातावरण प्रदान करते हैं।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Platforms: AWS, Azure, Google Cloud।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Services: Compute, Storage, Databases, CI/CD tools।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Integration: DevOps tools के साथ seamless काम करता है।"}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"11. मॉनिटरिंग और लॉगिंग"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Monitoring सुनिश्चित करता है कि एप्लिकेशन और सर्वर स्वस्थ हैं।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Logging घटनाओं को ट्रैक करता है और समस्या निवारण में मदद करता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Tools: Prometheus, Grafana, ELK Stack।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Real-time alerts और performance metrics प्रदान करता है।"}
                  </li>
                  {"\n                         "}
                </ul>
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
                {"12. DevOps में सुरक्षा (DevSecOps)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"सुरक्षा को प्रत्येक चरण में एकीकृत करना।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Shift-left approach: सुरक्षा जाँच को जल्दी लागू करना।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Tools: SonarQube, Snyk, OWASP।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Automation: CI/CD pipelines में सुरक्षा स्कैन स्वचालित करना।"}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"13. केस स्टडीज़ और मिनी प्रोजेक्ट्स"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"DevOps अवधारणाओं को लागू करने के लिए व्यावहारिक कार्य।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"CI/CD Pipeline सेटअप Jenkins का उपयोग करके।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Docker + Kubernetes: माइक्रोसर्विसेज़ की तैनाती।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Terraform के साथ Infrastructure Automation।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Grafana के साथ मॉनिटरिंग डैशबोर्ड।"}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"14. ऑटोमेशन और स्क्रिप्टिंग"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"ऑटोमेशन मैनुअल प्रयास को कम करता है, स्थिरता सुनिश्चित करता है और डिलीवरी\n                                        प्रक्रिया तेज़ करता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Bash, Python या PowerShell जैसी स्क्रिप्टिंग टूल्स का उपयोग दोहराए जाने वाले\n                                        कार्यों को स्वचालित करने के लिए।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"स्वचालित परीक्षण, परिनियोजन और इंफ्रास्ट्रक्चर प्रोविजनिंग विश्वसनीयता बढ़ाते\n                                        हैं।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"CI/CD पाइपलाइनों के साथ एकीकरण से सॉफ़्टवेयर डिलीवरी पूरी तरह से स्वचालित होती\n                                        है।"}
                  </li>
                  {"\n                              "}
                </ul>
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
                {"15. अवलोकन क्षमता और मेट्रिक्स (Observability & Metrics)"}
              </h2>
              {"\n                         "}
              <button className="toggle-btn">
                {"Hide"}
              </button>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className="section-content">
              {"\n                         "}
              <div className="points">
                {"\n                              "}
                <ul>
                  {"\n                                   "}
                  <li>
                    {"Observability सिस्टम प्रदर्शन को लॉग्स, मेट्रिक्स और ट्रेस के माध्यम से समझने की\n                                        क्षमता है।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"उपयोगी मेट्रिक्स: uptime, latency और error rates, जो टीम को समस्याओं का पता पहले\n                                        ही लगाने में मदद करते हैं।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"Tools: Prometheus, Grafana, ELK Stack; विज़ुअलाइज़ेशन और अलर्टिंग प्रदान करते\n                                        हैं।"}
                  </li>
                  {"\n                                   "}
                  <li>
                    {"अच्छी observability प्रथाएँ विश्वसनीयता बढ़ाती हैं और incident resolution को तेज़\n                                        करती हैं।"}
                  </li>
                  {"\n                              "}
                </ul>
                {"\n                         "}
              </div>
              {"\n                    "}
            </div>
            {"\n               "}
          </div>
          {"\n\n\n          "}
        </div>
        {"\n          "}
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
      {"\n  "}
      {"\n        "}
      <a href="https://wa.me/919977723584?text=Hi%20I%20need%20help" className="whatsapp-float" id="whatsappButton" target="_blank">
        {"\n            "}
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Chat" />
        {"\n            "}
        <span className="notification-dot"></span>
        {"\n        "}
      </a>
      {"\n\n\n     "}
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
