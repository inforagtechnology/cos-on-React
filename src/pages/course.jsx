import PageFrame from "@/runtime/PageFrame.jsx";
import { Link } from "react-router-dom";

// Converted from course.html
const styles = [{ href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" }, { href: "/header-footer.css" }, { href: "/course.css" }, { css: "\n    /* ═══════════════════════════════════════════════════════════════\n       COURSES PAGE — dark theme matching Code of School site\n    ═══════════════════════════════════════════════════════════════ */\n    :root {\n        --cp-bg:     #000000;\n        --cp-bg2:    #07070f;\n        --cp-surf:   #0e0e18;\n        --cp-brd:    rgba(255,255,255,.09);\n        --cp-pur:    #b89e49;\n        --cp-pur-l:  #da9e07;\n        --cp-org:    #ff6b1a;\n        --cp-org-l:  #ff8c47;\n        --cp-wh:     #f0f0f5;\n        --cp-mut:    rgba(240,240,245,.55);\n        --cp-dim:    rgba(240,240,245,.28);\n        --cp-gp:     rgba(110,73,184,.22);\n        --cp-go:     rgba(255,107,26,.18);\n    }\n    body { background:var(--cp-bg); color:var(--cp-wh); }\n\n    /* ── Hero ─────────────────────────────────────────────────── */\n    .cp-hero {\n        background:\n            radial-gradient(ellipse 80% 60% at 50% 0%, var(--cp-gp) 0%, transparent 70%),\n            radial-gradient(ellipse 40% 40% at 80% 90%, var(--cp-go) 0%, transparent 60%),\n            var(--cp-bg2);\n        padding:5.5rem 2rem 4.5rem;\n        text-align:center; position:relative; overflow:hidden;\n    }\n    .cp-hero::before {\n        content:''; position:absolute; top:0; left:0; right:0; height:2px;\n        background:linear-gradient(90deg,transparent,var(--cp-pur),var(--cp-org),var(--cp-pur),transparent);\n    }\n    .cp-tag {\n        display:inline-flex; align-items:center; gap:7px;\n        padding:.35rem 1rem; border-radius:20px;\n        border:1px solid rgba(110,73,184,.45);\n        background:rgba(110,73,184,.12);\n        font-size:12px; font-weight:700; letter-spacing:.6px;\n        color:var(--cp-pur-l); margin-bottom:1.5rem; text-transform:uppercase;\n    }\n    .cp-tag span { width:6px; height:6px; border-radius:50%; background:var(--cp-org); animation:blink 2s infinite; }\n    @keyframes blink{0%,100%{opacity:1}50%{opacity:.25}}\n\n    .cp-hero h1 {\n        font-size:clamp(30px,5.5vw,60px); font-weight:800;\n        line-height:1.08; letter-spacing:-2px; margin-bottom:1rem; color:var(--cp-wh);\n    }\n    .cp-hero h1 em {\n        font-style:normal;\n        background:linear-gradient(135deg,var(--cp-org),var(--cp-pur-l));\n        -webkit-background-clip:text; -webkit-text-fill-color:transparent;\n    }\n    .cp-hero p {\n        font-size:16px; color:var(--cp-mut);\n        max-width:580px; margin:0 auto 2.5rem; line-height:1.85;\n    }\n\n    /* Search */\n    .cp-search {\n        display:flex; gap:.6rem; max-width:500px;\n        margin:0 auto 3rem; flex-wrap:wrap; justify-content:center;\n    }\n    .cp-search input {\n        flex:1; min-width:240px; padding:.85rem 1.25rem;\n        background:rgba(255,255,255,.06); border:1.5px solid rgba(255,255,255,.14);\n        border-radius:10px; color:var(--cp-wh); font-size:14px;\n        font-family:Arial,sans-serif; outline:none; transition:border-color .2s;\n    }\n    .cp-search input::placeholder{color:var(--cp-dim);}\n    .cp-search input:focus{border-color:rgba(110,73,184,.65);}\n    .cp-search button {\n        padding:.85rem 1.5rem;\n        background:linear-gradient(135deg,var(--cp-pur),var(--cp-org));\n        color:#fff; border:none; border-radius:10px;\n        font-size:14px; font-weight:700; cursor:pointer;\n        font-family:Arial,sans-serif; white-space:nowrap; transition:opacity .2s;\n    }\n    .cp-search button:hover{opacity:.87;}\n\n    /* Stats strip */\n    .cp-stats {\n        display:flex; justify-content:center; gap:3.5rem; flex-wrap:wrap;\n    }\n    .cp-stat strong {\n        display:block; font-size:28px; font-weight:800;\n        background:linear-gradient(135deg,var(--cp-wh),var(--cp-mut));\n        -webkit-background-clip:text; -webkit-text-fill-color:transparent; line-height:1;\n    }\n    .cp-stat span {\n        font-size:11px; color:var(--cp-dim);\n        text-transform:uppercase; letter-spacing:.8px;\n    }\n\n    /* ── Filter bar ───────────────────────────────────────────── */\n    .cp-filter {\n        background:rgba(0,0,0,.97);\n        border-bottom:1px solid var(--cp-brd);\n        position:sticky; top:80px; z-index:90;\n        overflow-x:auto; scrollbar-width:none;\n    }\n    .cp-filter::-webkit-scrollbar{display:none;}\n    .cp-filter-inner {\n        max-width:1320px; margin:0 auto; padding:0 2rem;\n        display:flex; gap:.4rem; height:56px;\n        align-items:center; white-space:nowrap;\n    }\n    .fbtn {\n        padding:.45rem 1.1rem; border-radius:20px; font-size:13px; font-weight:600;\n        border:1px solid rgba(255,255,255,.12); background:transparent;\n        color:var(--cp-mut); cursor:pointer; transition:all .2s;\n        font-family:Arial,sans-serif; flex-shrink:0;\n    }\n    .fbtn:hover{border-color:var(--cp-pur-l);color:var(--cp-pur-l);}\n    .fbtn.on{background:var(--cp-pur);color:#fff;border-color:var(--cp-pur);box-shadow:0 0 18px rgba(110,73,184,.4);}\n\n    /* ── Courses wrap ─────────────────────────────────────────── */\n    .cp-wrap { max-width:1320px; margin:0 auto; padding:2.5rem 2rem 5rem; }\n    .cp-topbar {\n        display:flex; align-items:center; justify-content:space-between;\n        margin-bottom:1.75rem; flex-wrap:wrap; gap:.75rem;\n    }\n    .cp-topbar span{font-size:14px;color:var(--cp-mut);}\n    .cp-topbar strong{color:var(--cp-wh);font-size:16px;}\n    .cp-sort {\n        padding:.5rem 1rem;\n        background:var(--cp-surf); border:1px solid var(--cp-brd);\n        border-radius:8px; color:var(--cp-mut);\n        font-size:13px; font-family:Arial,sans-serif; cursor:pointer; outline:none;\n    }\n\n    /* ── Grid ─────────────────────────────────────────────────── */\n    .cp-grid {\n        display:grid; grid-template-columns:repeat(auto-fill,minmax(295px,1fr));\n        gap:1.25rem;\n    }\n    .cc {\n        background:var(--cp-surf); border:1px solid var(--cp-brd);\n        border-radius:14px; overflow:hidden;\n        display:flex; flex-direction:column;\n        text-decoration:none; color:inherit;\n        transition:transform .25s,border-color .25s,box-shadow .25s;\n    }\n    .cc:hover{transform:translateY(-5px);border-color:rgba(110,73,184,.45);box-shadow:0 16px 48px rgba(0,0,0,.5);}\n    .cc.hidden{display:none;}\n\n    /* thumb */\n    .cc-thumb {\n        height:155px; position:relative;\n        display:flex; align-items:center; justify-content:center;\n        overflow:hidden; flex-shrink:0;\n    }\n    .cc-thumb img{\n        width: 100%;\n        height:100%;\n    }\n    /* .cc-thumb-bg{\n        position:absolute;inset:0;\n        background-image:radial-gradient(circle at 20% 80%,rgba(255,255,255,.08) 0%,transparent 50%),\n                         radial-gradient(circle at 80% 20%,rgba(255,255,255,.05) 0%,transparent 50%);\n    } */\n    .cc-emoji{font-size:50px;line-height:1;position:relative;z-index:1;filter:drop-shadow(0 4px 12px rgba(0,0,0,.4));}\n    .cc-dur{\n        position:absolute;top:10px;right:10px;\n        padding:.22rem .65rem;border-radius:20px;\n        font-size:10px;font-weight:700;letter-spacing:.3px;\n        background:rgba(0,0,0,.55);color:rgba(255,255,255,.85);\n        border:1px solid rgba(255,255,255,.12);backdrop-filter:blur(4px);\n    }\n    .cc-bdg{\n        position:absolute;top:10px;left:10px;\n        padding:.18rem .6rem;border-radius:4px;\n        font-size:9px;font-weight:800;letter-spacing:.8px;text-transform:uppercase;\n    }\n    .bhot{background:rgba(220,38,38,.85);color:#fff;}\n    .bnew{background:rgba(34,197,94,.85);color:#fff;}\n    .bpop{background:rgba(245,158,11,.85);color:#fff;}\n    .btrend{background:rgba(99,102,241,.85);color:#fff;}\n\n    /* body */\n    .cc-body{padding:1.1rem;flex:1;display:flex;flex-direction:column;}\n    .cc-cat{font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--cp-pur-l);margin-bottom:.35rem;}\n    .cc-name{font-size:16px;font-weight:700;line-height:1.3;color:var(--cp-wh);margin-bottom:.45rem;}\n    .cc-skills{font-size:12px;color:var(--cp-mut);line-height:1.6;margin-bottom:.85rem;flex:1;}\n    .cc-meta{display:flex;gap:1rem;margin-bottom:.85rem;flex-wrap:wrap;}\n    .cc-meta span{font-size:12px;color:var(--cp-dim);}\n    .cc-foot{display:flex;align-items:center;justify-content:space-between;padding-top:.75rem;border-top:1px solid var(--cp-brd);}\n    .cc-rating{font-size:13px;font-weight:700;color:#facc15;}\n    .cc-stu{font-size:12px;color:var(--cp-dim);}\n    .cc-btn{\n        display:block;width:100%;padding:.72rem;margin-top:.85rem;\n        background:linear-gradient(135deg,var(--cp-pur),#4f18a7);\n        color:#fff;border:none;border-radius:8px;\n        font-size:13px;font-weight:700;cursor:pointer;\n        font-family:Arial,sans-serif;\n        transition:opacity .2s,transform .2s;text-align:center;\n    }\n    .cc-btn:hover{opacity:.87;transform:translateY(-1px);}\n\n    /* no results */\n    .cp-none{\n        grid-column:1/-1;text-align:center;\n        padding:5rem 1rem;color:var(--cp-mut);display:none;\n    }\n    .cp-none.on{display:block;}\n\n    /* ── Why section ──────────────────────────────────────────── */\n    .cp-why {\n        background:\n            radial-gradient(ellipse 60% 50% at 50% 50%,var(--cp-gp) 0%,transparent 70%),\n            var(--cp-bg2);\n        padding:5rem 2rem;\n        border-top:1px solid var(--cp-brd);\n        border-bottom:1px solid var(--cp-brd);\n    }\n    .cp-why-in{max-width:1320px;margin:0 auto;}\n    .cp-why-in h2{\n        text-align:center;font-size:clamp(24px,3.5vw,40px);\n        font-weight:800;letter-spacing:-.5px;margin-bottom:.6rem;\n    }\n    .cp-why-in h2 em{\n        font-style:normal;\n        background:linear-gradient(135deg,var(--cp-org),var(--cp-pur-l));\n        -webkit-background-clip:text;-webkit-text-fill-color:transparent;\n    }\n    .cp-why-in>p{text-align:center;color:var(--cp-mut);font-size:15px;max-width:520px;margin:0 auto 3rem;line-height:1.85;}\n    .cp-why-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.25rem;}\n    .cp-why-card{\n        background:var(--cp-surf);border:1px solid var(--cp-brd);\n        border-radius:14px;padding:1.5rem;\n        display:flex;flex-direction:column;gap:.75rem;\n        transition:border-color .2s,transform .2s;\n    }\n    .cp-why-card:hover{border-color:rgba(110,73,184,.4);transform:translateY(-3px);}\n    .cp-why-icon{width:48px;height:48px;border-radius:12px;background:rgba(110,73,184,.15);display:flex;align-items:center;justify-content:center;font-size:22px;}\n    .cp-why-title{font-size:15px;font-weight:700;color:var(--cp-wh);}\n    .cp-why-desc{font-size:13px;color:var(--cp-mut);line-height:1.7;}\n\n    /* ── CTA ──────────────────────────────────────────────────── */\n    .cp-cta{\n        background:linear-gradient(135deg,#0e0518 0%,#1a0a00 100%);\n        padding:5rem 2rem;text-align:center;\n        position:relative;overflow:hidden;\n        border-top:1px solid var(--cp-brd);\n    }\n    .cp-cta::before{\n        content:'';position:absolute;top:-100px;left:50%;transform:translateX(-50%);\n        width:500px;height:500px;border-radius:50%;\n        background:radial-gradient(circle,rgba(110,73,184,.2) 0%,transparent 70%);\n        pointer-events:none;\n    }\n    .cp-cta h2{font-size:clamp(24px,4vw,46px);font-weight:800;letter-spacing:-1px;margin-bottom:.75rem;position:relative;}\n    .cp-cta h2 em{font-style:normal;background:linear-gradient(135deg,var(--cp-org),var(--cp-pur-l));-webkit-background-clip:text;-webkit-text-fill-color:transparent;}\n    .cp-cta p{color:var(--cp-mut);font-size:15px;max-width:480px;margin:0 auto 2rem;line-height:1.8;position:relative;}\n    .cp-cta-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;position:relative;}\n    .cta-p{\n        padding:.9rem 2.25rem;\n        background:linear-gradient(135deg,var(--cp-pur),var(--cp-org));\n        color:#fff;border:none;border-radius:10px;\n        font-size:15px;font-weight:700;cursor:pointer;\n        font-family:Arial,sans-serif;\n        box-shadow:0 8px 28px rgba(110,73,184,.4);\n        text-decoration:none;display:inline-block;transition:opacity .2s;\n    }\n    .cta-p:hover{opacity:.87;}\n    .cta-s{\n        padding:.9rem 2.25rem;\n        background:transparent;color:var(--cp-wh);\n        border:1.5px solid rgba(255,255,255,.2);border-radius:10px;\n        font-size:15px;font-weight:600;cursor:pointer;\n        font-family:Arial,sans-serif;\n        text-decoration:none;display:inline-block;transition:all .2s;\n    }\n    .cta-s:hover{border-color:rgba(255,255,255,.5);background:rgba(255,255,255,.05);}\n\n    /* ── Responsive ───────────────────────────────────────────── */\n    @media(max-width:768px){\n        .cp-hero,.cp-why,.cp-cta{padding:3.5rem 1.25rem;}\n        .cp-filter-inner,.cp-wrap{padding:0 1.25rem;}\n        .cp-wrap{padding:1.5rem 1.25rem 4rem;}\n        /* .cp-grid{grid-template-columns:1fr;} */\n        .cp-stats{gap:1.5rem;}\n        .cp-why-grid{grid-template-columns:1fr 1fr;}\n    }\n    @media(max-width:480px){\n        .cp-why-grid{grid-template-columns:1fr;}\n        .cp-topbar{flex-direction:column;align-items:flex-start;}\n    }\n    " }];
const scripts = [{ src: "/script.js", names: {"fn":["showCourseList"],"vars":[],"lex":["faqs","cards","observer"],"consts":["faqs","cards","observer"]} }, { code: "\n/* ── Filter ─────────────────────────────────────────────────────── */\nlet activeCat = 'all', searchQ = '';\n\ndocument.querySelectorAll('.fbtn').forEach(btn => {\n    btn.addEventListener('click', () => {\n        document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('on'));\n        btn.classList.add('on');\n        activeCat = btn.dataset.cat;\n        render();\n    });\n});\n\ndocument.getElementById('searchInput').addEventListener('input', function () {\n    searchQ = this.value.toLowerCase().trim();\n    render();\n});\ndocument.getElementById('searchInput').addEventListener('keydown', e => {\n    if (e.key === 'Enter') doSearch();\n});\nfunction doSearch() {\n    searchQ = document.getElementById('searchInput').value.toLowerCase().trim();\n    render();\n    document.querySelector('.cp-filter').scrollIntoView({ behavior:'smooth' });\n}\n\nfunction render() {\n    const cards = document.querySelectorAll('.cc');\n    let n = 0;\n    cards.forEach(c => {\n        const catOk  = activeCat === 'all' || c.dataset.cat === activeCat;\n        const nameOk = !searchQ || c.dataset.name.includes(searchQ);\n        const show   = catOk && nameOk;\n        c.classList.toggle('hidden', !show);\n        if (show) n++;\n    });\n    document.getElementById('cntShow').textContent = n;\n    document.getElementById('cpNone').classList.toggle('on', n === 0);\n}\n\n/* ── Sort ───────────────────────────────────────────────────────── */\nfunction doSort() {\n    const g = document.getElementById('cpGrid');\n    const cards = [...g.querySelectorAll('.cc')];\n    const t = document.getElementById('sortSel').value;\n    cards.sort((a,b) => {\n        if (t === 'popular') return Number(b.dataset.pop) - Number(a.dataset.pop);\n        if (t === 'az')      return a.querySelector('.cc-name').textContent.localeCompare(b.querySelector('.cc-name').textContent);\n        return 0;\n    });\n    cards.forEach(c => g.insertBefore(c, g.querySelector('.cp-none')));\n}\n", names: {"fn":["doSearch","render","doSort"],"vars":[],"lex":["activeCat","searchQ"],"consts":[]} }];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>All Courses | Code of School — Best IT Training Institute in Indore</title>
          <meta name="description" content="Explore all courses at Code of School — MERN Stack, Java Full Stack, Python, Data Science, Machine Learning, Digital Marketing, and 15+ more. Live classes, real projects, ISO certification." />
          <meta name="keywords" content="coding courses Indore, programming institute Indore, MERN stack course, Java Full Stack, Python course, Data Science, Digital Marketing, Code of School courses" />
          <meta name="robots" content="index,follow" />
          <meta name="author" content="Code of School" />
          <link rel="icon" href="./img/cos-white-logo2.png" type="image/webp" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={"All Courses | Code of School — 21+ IT & Programming Courses in Indore"} />
          <meta property="og:description" content="Explore all courses — MERN, Java Full Stack, Python, DSA, Machine Learning, Digital Marketing with live classes and ISO certification." />
          <meta property="og:url" content="https://codeofschool.com/course.html" />
          <meta property="og:image" content="https://codeofschool.com/img/cos-white-logo2.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@codeofschool" />
          <meta name="twitter:title" content={" All Courses | Code of School — 21+ IT & Programming Courses in Indore| Code Of School"} />
          <meta name="twitter:description" content="Explore all courses — MERN, Java Full Stack, Python, DSA, Machine Learning, Digital Marketing with live classes and ISO certification." />
          <meta name="twitter:image" content="https://codeofschool.com/img/cos-white-logo2.png" />
        </>
      }
    >
      <div className="main">
        {" "}
        <header>
          <nav>
            <div className="nav-image">
              <Link to="/">
                <img src="./img/cos-white-logo.webp" alt="Code of School Logo" />
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
                <i className="fa-solid fa-phone"></i>
                {" Enroll Now"}
              </a>
            </div>
            {" "}
            <div className="hamburger-menu" id="hamburger-icon">
              ☰
            </div>
          </nav>
        </header>
        {" "}
        <div className="dropdown-panel" id="dropdown-panel">
          <ul className="categories" id="category-list">
            <li data-category="all">
              All
            </li>
            <li data-category="web">
              Web Dev
            </li>
            {" "}
            <li data-category="language">
              Languages
            </li>
            <li data-category="app">
              Mobile.Dev
            </li>
            {" "}
            <li data-category="ai">
              {"Data & AI"}
            </li>
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
              <i className="fa-solid fa-phone"></i>
              {" Enroll Now"}
            </a>
          </div>
        </div>
        {" "}
        {" "}
        <section className="cp-hero">
          <div className="cp-tag">
            <span></span>
            {" ISO Certified Institute"}
          </div>
          {" "}
          <h1>
            {"All "}
            <em>
              Courses
            </em>
            {" at"}
            <br />
            Code of School
          </h1>
          {" "}
          <p>
            Hands-on, job-ready training in programming, full-stack development, data science, and digital marketing — taught by industry experts with live classes and real projects.
          </p>
          {" "}
          <div className="cp-search">
            <input type="text" id="searchInput" placeholder="Search — Python, React, Java, ML, Marketing…" />
            {" "}
            <button onClick={(event) => { doSearch(); }}>
              <i className="fa-solid fa-magnifying-glass"></i>
              {" \u00a0Search"}
            </button>
          </div>
          {" "}
          <div className="cp-stats">
            <div className="cp-stat">
              <strong>
                21+
              </strong>
              <span>
                Courses
              </span>
            </div>
            {" "}
            <div className="cp-stat">
              <strong>
                1,200+
              </strong>
              <span>
                Students
              </span>
            </div>
            {" "}
            <div className="cp-stat">
              <strong>
                4.8 ★
              </strong>
              <span>
                Avg Rating
              </span>
            </div>
            {" "}
            <div className="cp-stat">
              <strong>
                ISO
              </strong>
              <span>
                Certified
              </span>
            </div>
            {" "}
            <div className="cp-stat">
              <strong>
                98%
              </strong>
              <span>
                Placement
              </span>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <div className="cp-filter">
          <div className="cp-filter-inner">
            <button className="fbtn on" data-cat="all">
              🔥 All Courses
            </button>
            {" "}
            <button className="fbtn" data-cat="fullstack">
              ⚡ Full Stack
            </button>
            {" "}
            <button className="fbtn" data-cat="web">
              🌐 Web Dev
            </button>
            {" "}
            <button className="fbtn" data-cat="language">
              💻 Programming
            </button>
            {" "}
            <button className="fbtn" data-cat="ai">
              {"🤖 Data & AI"}
            </button>
            {" "}
            <button className="fbtn" data-cat="app">
              📱 Mobile
            </button>
            {" "}
            <button className="fbtn" data-cat="design">
              🎨 Design
            </button>
            {" "}
            <button className="fbtn" data-cat="other">
              📊 Other
            </button>
          </div>
        </div>
        {" "}
        {" "}
        <div className="cp-wrap">
          <div className="cp-topbar">
            <span>
              {"Showing "}
              <strong id="cntShow">
                21
              </strong>
              {" courses"}
            </span>
            {" "}
            <select className="cp-sort" id="sortSel" onChange={(event) => { doSort(); }}>
              <option value="default">
                Sort: Default
              </option>
              <option value="popular">
                Most Popular
              </option>
              <option value="az">
                Name A – Z
              </option>
            </select>
          </div>
          {" "}
          <div className="cp-grid" id="cpGrid">
            {" "}
            <Link to="/digital_marketing.html" className="cc" data-cat="other" data-name="digital marketing seo google ads social media email" data-pop="98">
              {" "}
              <div className="cc-thumb">
                <img src="./img/course_img/Marketing is all about offering solutions!.jpeg" />
                {" "}
                {" "}
                <span className="cc-bdg bhot">
                  🔥 Bestseller
                </span>
                <span className="cc-dur">
                  13 Weeks
                </span>
              </div>
              {" "}
              <div className="cc-body">
                <div className="cc-cat">
                  Digital Marketing
                </div>
                {" "}
                <div className="cc-name">
                  Digital Marketing with AI
                </div>
                {" "}
                <div className="cc-skills">
                  SEO, Google Ads, Meta Ads, Content Marketing, Email Marketing, Analytics
                </div>
                {" "}
                <div className="cc-meta">
                  <span>
                    🕐 68h Video
                  </span>
                  <span>
                    📚 78 Lessons
                  </span>
                  <span>
                    🏆 Certificate
                  </span>
                </div>
                {" "}
                <div className="cc-foot">
                  <span className="cc-rating">
                    ★ 4.9
                  </span>
                  <span className="cc-stu">
                    42,800+ students
                  </span>
                </div>
                {" "}
                <div className="cc-btn">
                  Explore Course →
                </div>
              </div>
              {" "}
            </Link>
            {" "}
            {" "}
            <Link to="/java_full_stack.html" className="cc" data-cat="fullstack" data-name="java full stack spring boot react mysql aws" data-pop="95">
              {" "}
              <div className="cc-thumb" style={{ background: "linear-gradient(135deg,#431407,#ea580c)" }}>
                <img src="./img/course_img/download.jpeg" />
                {" "}
                <span className="cc-bdg bhot">
                  🔥 Bestseller
                </span>
                <span className="cc-dur">
                  20 Weeks
                </span>
              </div>
              {" "}
              <div className="cc-body">
                <div className="cc-cat">
                  Full Stack
                </div>
                {" "}
                <div className="cc-name">
                  Java Full Stack Development
                </div>
                {" "}
                <div className="cc-skills">
                  Spring Boot, React, MySQL, REST APIs, Microservices, AWS Deployment
                </div>
                {" "}
                <div className="cc-meta">
                  <span>
                    🕐 110h Video
                  </span>
                  <span>
                    📚 220 Lessons
                  </span>
                  <span>
                    🏆 Certificate
                  </span>
                </div>
                {" "}
                <div className="cc-foot">
                  <span className="cc-rating">
                    ★ 4.9
                  </span>
                  <span className="cc-stu">
                    28,500+ students
                  </span>
                </div>
                {" "}
                <div className="cc-btn">
                  Explore Course →
                </div>
              </div>
              {" "}
            </Link>
            {" "}
            {" "}
            <Link to="/java_core_and_advanced.html" className="cc" data-cat="language" data-name="java core advanced oop collections multithreading" data-pop="90">
              {" "}
              <div className="cc-thumb" style={{ background: "linear-gradient(135deg,#7c2d12,#dc2626)" }}>
                <div className="cc-thumb-bg"></div>
                <img src="./img//course_img/Core Java Course Training Institute in Jaipur India.jpeg" />
                {" "}
                <span className="cc-bdg bpop">
                  ⭐ Popular
                </span>
                <span className="cc-dur">
                  16 Weeks
                </span>
              </div>
              {" "}
              <div className="cc-body">
                <div className="cc-cat">
                  Programming
                </div>
                {" "}
                <div className="cc-name">
                  {"Java Core & Advanced"}
                </div>
                {" "}
                <div className="cc-skills">
                  OOP, Collections, Multithreading, JDBC, Spring Framework, Design Patterns
                </div>
                {" "}
                <div className="cc-meta">
                  <span>
                    🕐 75h Video
                  </span>
                  <span>
                    📚 160 Lessons
                  </span>
                  <span>
                    🏆 Certificate
                  </span>
                </div>
                {" "}
                <div className="cc-foot">
                  <span className="cc-rating">
                    ★ 4.9
                  </span>
                  <span className="cc-stu">
                    21,000+ students
                  </span>
                </div>
                {" "}
                <div className="cc-btn">
                  Explore Course →
                </div>
              </div>
              {" "}
            </Link>
            {" "}
            {" "}
            <Link to="/mern_stack.html" className="cc" data-cat="fullstack" data-name="mern stack mongodb express react nodejs jwt" data-pop="97">
              {" "}
              <div className="cc-thumb" style={{ background: "linear-gradient(135deg,#064e3b,#059669)" }}>
                <div className="cc-thumb-bg"></div>
                <img src="./img/course_img/MERN.jpeg" />
                {" "}
                <span className="cc-bdg bhot">
                  🔥 Bestseller
                </span>
                <span className="cc-dur">
                  18 Weeks
                </span>
              </div>
              {" "}
              <div className="cc-body">
                <div className="cc-cat">
                  Full Stack
                </div>
                {" "}
                <div className="cc-name">
                  MERN Stack Development
                </div>
                {" "}
                <div className="cc-skills">
                  MongoDB, Express.js, React, Node.js, JWT Auth, REST APIs, AWS
                </div>
                {" "}
                <div className="cc-meta">
                  <span>
                    🕐 90h Video
                  </span>
                  <span>
                    📚 190 Lessons
                  </span>
                  <span>
                    🏆 Certificate
                  </span>
                </div>
                {" "}
                <div className="cc-foot">
                  <span className="cc-rating">
                    ★ 4.9
                  </span>
                  <span className="cc-stu">
                    32,400+ students
                  </span>
                </div>
                {" "}
                <div className="cc-btn">
                  Explore Course →
                </div>
              </div>
              {" "}
            </Link>
            {" "}
            {" "}
            <Link to="/frontend_with_react.html" className="cc" data-cat="web" data-name="frontend react angular typescript hooks redux" data-pop="91">
              {" "}
              <div className="cc-thumb" style={{ background: "linear-gradient(135deg,#0c4a6e,#0284c7)" }}>
                <div className="cc-thumb-bg"></div>
                <img src="./img/course_img/react_a.jpg" alt="course-img" />
                {" "}
                <span className="cc-bdg btrend">
                  📈 Trending
                </span>
                <span className="cc-dur">
                  16 Weeks
                </span>
              </div>
              {" "}
              <div className="cc-body">
                <div className="cc-cat">
                  Frontend
                </div>
                {" "}
                <div className="cc-name">
                  Frontend with React/Angular
                </div>
                {" "}
                <div className="cc-skills">
                  React Hooks, Redux Toolkit, Angular, TypeScript, REST APIs, Deployment
                </div>
                {" "}
                <div className="cc-meta">
                  <span>
                    🕐 80h Video
                  </span>
                  <span>
                    📚 170 Lessons
                  </span>
                  <span>
                    🏆 Certificate
                  </span>
                </div>
                {" "}
                <div className="cc-foot">
                  <span className="cc-rating">
                    ★ 4.8
                  </span>
                  <span className="cc-stu">
                    19,600+ students
                  </span>
                </div>
                {" "}
                <div className="cc-btn">
                  Explore Course →
                </div>
              </div>
              {" "}
            </Link>
            {" "}
            {" "}
            <Link to="/mobile_app_development.html" className="cc" data-cat="app" data-name="mobile app flutter dart firebase android ios" data-pop="85">
              {" "}
              <div className="cc-thumb" style={{ background: "linear-gradient(135deg,#1e1b4b,#4338ca)" }}>
                <div className="cc-thumb-bg"></div>
                <img src="./img/course_img/app_dev.jpg" alt="course-img" />
                {" "}
                <span className="cc-bdg bpop">
                  ⭐ Popular
                </span>
                <span className="cc-dur">
                  16 Weeks
                </span>
              </div>
              {" "}
              <div className="cc-body">
                <div className="cc-cat">
                  Mobile Development
                </div>
                {" "}
                <div className="cc-name">
                  Mobile App Development
                </div>
                {" "}
                <div className="cc-skills">
                  Flutter, Dart, Firebase, REST APIs, State Management, App Store Publishing
                </div>
                {" "}
                <div className="cc-meta">
                  <span>
                    🕐 85h Video
                  </span>
                  <span>
                    📚 175 Lessons
                  </span>
                  <span>
                    🏆 Certificate
                  </span>
                </div>
                {" "}
                <div className="cc-foot">
                  <span className="cc-rating">
                    ★ 4.8
                  </span>
                  <span className="cc-stu">
                    14,200+ students
                  </span>
                </div>
                {" "}
                <div className="cc-btn">
                  Explore Course →
                </div>
              </div>
              {" "}
            </Link>
            {" "}
            {" "}
            <Link to="/data_science.html" className="cc" data-cat="ai" data-name="data science python machine learning tensorflow deep learning nlp" data-pop="94">
              {" "}
              <div className="cc-thumb" style={{ background: "linear-gradient(135deg,#0c4a6e,#0ea5e9)" }}>
                <div className="cc-thumb-bg"></div>
                <img src="./img/course_img/dara_science.jpg" alt="course-img" />
                {" "}
                <span className="cc-bdg bhot">
                  🔥 Bestseller
                </span>
                <span className="cc-dur">
                  20 Weeks
                </span>
              </div>
              {" "}
              <div className="cc-body">
                <div className="cc-cat">
                  {"Data & AI"}
                </div>
                {" "}
                <div className="cc-name">
                  Data Science
                </div>
                {" "}
                <div className="cc-skills">
                  Python, NumPy, Pandas, scikit-learn, TensorFlow, Deep Learning, NLP, Projects
                </div>
                {" "}
                <div className="cc-meta">
                  <span>
                    🕐 120h Video
                  </span>
                  <span>
                    📚 240 Lessons
                  </span>
                  <span>
                    🏆 Certificate
                  </span>
                </div>
                {" "}
                <div className="cc-foot">
                  <span className="cc-rating">
                    ★ 4.9
                  </span>
                  <span className="cc-stu">
                    38,100+ students
                  </span>
                </div>
                {" "}
                <div className="cc-btn">
                  Explore Course →
                </div>
              </div>
              {" "}
            </Link>
            {" "}
            {" "}
            <Link to="/data_analysis.html" className="cc" data-cat="ai" data-name="data analysis excel sql power bi tableau pandas" data-pop="86">
              {" "}
              <div className="cc-thumb" style={{ background: "linear-gradient(135deg,#172554,#1d4ed8)" }}>
                <div className="cc-thumb-bg"></div>
                <img src="./img/course_img/data.jpg" alt="course-img" />
                {" "}
                <span className="cc-bdg btrend">
                  📈 Trending
                </span>
                <span className="cc-dur">
                  14 Weeks
                </span>
              </div>
              {" "}
              <div className="cc-body">
                <div className="cc-cat">
                  {"Data & AI"}
                </div>
                {" "}
                <div className="cc-name">
                  Data Analysis
                </div>
                {" "}
                <div className="cc-skills">
                  Excel, SQL, Python Pandas, Power BI, Tableau, Business Reporting
                </div>
                {" "}
                <div className="cc-meta">
                  <span>
                    🕐 70h Video
                  </span>
                  <span>
                    📚 155 Lessons
                  </span>
                  <span>
                    🏆 Certificate
                  </span>
                </div>
                {" "}
                <div className="cc-foot">
                  <span className="cc-rating">
                    ★ 4.8
                  </span>
                  <span className="cc-stu">
                    17,500+ students
                  </span>
                </div>
                {" "}
                <div className="cc-btn">
                  Explore Course →
                </div>
              </div>
              {" "}
            </Link>
            {" "}
            {" "}
            <Link to="/ui_ux_design.html" className="cc" data-cat="design" data-name="ui ux design figma adobe xd prototyping" data-pop="82">
              {" "}
              <div className="cc-thumb" style={{ background: "linear-gradient(135deg,#4c1d95,#a855f7)" }}>
                <div className="cc-thumb-bg"></div>
                <img src="./img/course_img/ui-ux.jpg" alt="course-img" />
                {" "}
                <span className="cc-bdg bnew">
                  ✨ New
                </span>
                <span className="cc-dur">
                  12 Weeks
                </span>
              </div>
              {" "}
              <div className="cc-body">
                <div className="cc-cat">
                  Design
                </div>
                {" "}
                <div className="cc-name">
                  UI/UX Design
                </div>
                {" "}
                <div className="cc-skills">
                  Figma, Adobe XD, Prototyping, User Research, Design Systems, Dev Handoff
                </div>
                {" "}
                <div className="cc-meta">
                  <span>
                    🕐 60h Video
                  </span>
                  <span>
                    📚 130 Lessons
                  </span>
                  <span>
                    🏆 Certificate
                  </span>
                </div>
                {" "}
                <div className="cc-foot">
                  <span className="cc-rating">
                    ★ 4.8
                  </span>
                  <span className="cc-stu">
                    9,800+ students
                  </span>
                </div>
                {" "}
                <div className="cc-btn">
                  Explore Course →
                </div>
              </div>
              {" "}
            </Link>
            {" "}
            {" "}
            <Link to="/python.html" className="cc" data-cat="language" data-name="python programming oop automation scripting" data-pop="96">
              {" "}
              <div className="cc-thumb" style={{ background: "linear-gradient(135deg,#14532d,#16a34a)" }}>
                <div className="cc-thumb-bg"></div>
                <img src="./img/course_img/python.jpg" alt="course-img" />
                {" "}
                <span className="cc-bdg bhot">
                  🔥 Bestseller
                </span>
                <span className="cc-dur">
                  12 Weeks
                </span>
              </div>
              {" "}
              <div className="cc-body">
                <div className="cc-cat">
                  Programming
                </div>
                {" "}
                <div className="cc-name">
                  Python Development
                </div>
                {" "}
                <div className="cc-skills">
                  Python OOP, File Handling, APIs, Automation, Web Scraping, Real Projects
                </div>
                {" "}
                <div className="cc-meta">
                  <span>
                    🕐 55h Video
                  </span>
                  <span>
                    📚 130 Lessons
                  </span>
                  <span>
                    🏆 Certificate
                  </span>
                </div>
                {" "}
                <div className="cc-foot">
                  <span className="cc-rating">
                    ★ 4.9
                  </span>
                  <span className="cc-stu">
                    44,200+ students
                  </span>
                </div>
                {" "}
                <div className="cc-btn">
                  Explore Course →
                </div>
              </div>
              {" "}
            </Link>
            {" "}
            {" "}
            <Link to="/python_full_stack.html" className="cc" data-cat="fullstack" data-name="python full stack django react postgresql docker aws" data-pop="90">
              {" "}
              <div className="cc-thumb" style={{ background: "linear-gradient(135deg,#1a2e05,#4d7c0f)" }}>
                <div className="cc-thumb-bg"></div>
                <img src="./img/course_img/py_full_stack.jpg" alt="course-img" />
                {" "}
                <span className="cc-bdg btrend">
                  📈 Trending
                </span>
                <span className="cc-dur">
                  16 Weeks
                </span>
              </div>
              {" "}
              <div className="cc-body">
                <div className="cc-cat">
                  Full Stack
                </div>
                {" "}
                <div className="cc-name">
                  Python Full Stack
                </div>
                {" "}
                <div className="cc-skills">
                  Python, Django, React, PostgreSQL, Redis, Docker, AWS Deployment
                </div>
                {" "}
                <div className="cc-meta">
                  <span>
                    🕐 100h Video
                  </span>
                  <span>
                    📚 200 Lessons
                  </span>
                  <span>
                    🏆 Certificate
                  </span>
                </div>
                {" "}
                <div className="cc-foot">
                  <span className="cc-rating">
                    ★ 4.8
                  </span>
                  <span className="cc-stu">
                    16,300+ students
                  </span>
                </div>
                {" "}
                <div className="cc-btn">
                  Explore Course →
                </div>
              </div>
              {" "}
            </Link>
            {" "}
            {" "}
            <Link to="/C_and_C++.html" className="cc" data-cat="language" data-name="c with c++ pointers oop stl data structures" data-pop="87">
              {" "}
              <div className="cc-thumb" style={{ background: "linear-gradient(135deg,#1e3a5f,#2563eb)" }}>
                <div className="cc-thumb-bg"></div>
                <img src="./img/course_img/c_cpp.jpg" alt="course-img" />
                {" "}
                <span className="cc-bdg bpop">
                  ⭐ Popular
                </span>
                <span className="cc-dur">
                  14 Weeks
                </span>
              </div>
              {" "}
              <div className="cc-body">
                <div className="cc-cat">
                  Programming
                </div>
                {" "}
                <div className="cc-name">
                  C with C++
                </div>
                {" "}
                <div className="cc-skills">
                  C Fundamentals, Pointers, Memory Management, OOP, STL, Data Structures
                </div>
                {" "}
                <div className="cc-meta">
                  <span>
                    🕐 60h Video
                  </span>
                  <span>
                    📚 140 Lessons
                  </span>
                  <span>
                    🏆 Certificate
                  </span>
                </div>
                {" "}
                <div className="cc-foot">
                  <span className="cc-rating">
                    ★ 4.8
                  </span>
                  <span className="cc-stu">
                    18,500+ students
                  </span>
                </div>
                {" "}
                <div className="cc-btn">
                  Explore Course →
                </div>
              </div>
              {" "}
            </Link>
            {" "}
            {" "}
            <a className="cc" href="./wordpress.html" data-cat="web" data-name="wordpress woocommerce elementor seo themes plugins" data-pop="76">
              {" "}
              <div className="cc-thumb" style={{ background: "linear-gradient(135deg,#1e3a5f,#2171b5)" }}>
                <div className="cc-thumb-bg"></div>
                <img src="./img/course_img/wordpress.jpg" alt="course-img" />
                {" "}
                <span className="cc-bdg bpop">
                  ⭐ Popular
                </span>
                <span className="cc-dur">
                  11 Weeks
                </span>
              </div>
              {" "}
              <div className="cc-body">
                <div className="cc-cat">
                  Web Development
                </div>
                {" "}
                <div className="cc-name">
                  WordPress
                </div>
                {" "}
                <div className="cc-skills">
                  {"Theme Customisation, Elementor, WooCommerce, SEO Plugins, Hosting & Security"}
                </div>
                {" "}
                <div className="cc-meta">
                  <span>
                    🕐 35h Video
                  </span>
                  <span>
                    📚 90 Lessons
                  </span>
                  <span>
                    🏆 Certificate
                  </span>
                </div>
                {" "}
                <div className="cc-foot">
                  <span className="cc-rating">
                    ★ 4.8
                  </span>
                  <span className="cc-stu">
                    14,200+ students
                  </span>
                </div>
                {" "}
                <div className="cc-btn">
                  Explore Course →
                </div>
              </div>
              {" "}
            </a>
            {" "}
            {" "}
            <a className="cc" href="./python_with_django.html" data-cat="web" data-name="python django rest api jwt postgresql celery aws" data-pop="87">
              {" "}
              <div className="cc-thumb" style={{ background: "linear-gradient(135deg,#064e3b,#059669)" }}>
                <div className="cc-thumb-bg"></div>
                <img src="./img/course_img/py_dj.jpg" alt="course-img" />
                {" "}
                <span className="cc-bdg bnew">
                  ✨ New
                </span>
                <span className="cc-dur">
                  14 Weeks
                </span>
              </div>
              {" "}
              <div className="cc-body">
                <div className="cc-cat">
                  Backend / Web
                </div>
                {" "}
                <div className="cc-name">
                  Python with Django
                </div>
                {" "}
                <div className="cc-skills">
                  Django MVT, REST APIs, JWT Auth, PostgreSQL, Celery, Redis, AWS Deploy
                </div>
                {" "}
                <div className="cc-meta">
                  <span>
                    🕐 70h Video
                  </span>
                  <span>
                    📚 160 Lessons
                  </span>
                  <span>
                    🏆 Certificate
                  </span>
                </div>
                {" "}
                <div className="cc-foot">
                  <span className="cc-rating">
                    ★ 4.8
                  </span>
                  <span className="cc-stu">
                    11,600+ students
                  </span>
                </div>
                {" "}
                <div className="cc-btn">
                  Explore Course →
                </div>
              </div>
              {" "}
            </a>
            {" "}
            {" "}
            <Link to="/video_editing.html" className="cc" data-cat="design" data-name="video editing premiere pro after effects davinci reels" data-pop="74">
              {" "}
              <div className="cc-thumb" style={{ background: "linear-gradient(135deg,#1c1917,#7c3aed)" }}>
                <div className="cc-thumb-bg"></div>
                <img src="./img/course_img/video-editing.jpg" alt="course-img" />
                {" "}
                <span className="cc-bdg bnew">
                  ✨ New
                </span>
                <span className="cc-dur">
                  10 Weeks
                </span>
              </div>
              {" "}
              <div className="cc-body">
                <div className="cc-cat">
                  {"Design & Media"}
                </div>
                {" "}
                <div className="cc-name">
                  Video Editing
                </div>
                {" "}
                <div className="cc-skills">
                  Adobe Premiere Pro, After Effects, DaVinci Resolve, Colour Grading, Reels
                </div>
                {" "}
                <div className="cc-meta">
                  <span>
                    🕐 40h Video
                  </span>
                  <span>
                    📚 90 Lessons
                  </span>
                  <span>
                    🏆 Certificate
                  </span>
                </div>
                {" "}
                <div className="cc-foot">
                  <span className="cc-rating">
                    ★ 4.7
                  </span>
                  <span className="cc-stu">
                    9,400+ students
                  </span>
                </div>
                {" "}
                <div className="cc-btn">
                  Explore Course →
                </div>
              </div>
              {" "}
            </Link>
            {" "}
            {" "}
            <a className="cc" href="./php_core_and_advanced.html" data-cat="language" data-name="php core advanced oop mysql pdo laravel security" data-pop="72">
              {" "}
              <div className="cc-thumb" style={{ background: "linear-gradient(135deg,#312e81,#6366f1)" }}>
                <div className="cc-thumb-bg"></div>
                <img src="./img/course_img/php.jpg" alt="course-img" />
                {" "}
                <span className="cc-bdg bpop">
                  ⭐ Popular
                </span>
                <span className="cc-dur">
                  13 Weeks
                </span>
              </div>
              {" "}
              <div className="cc-body">
                <div className="cc-cat">
                  Programming
                </div>
                {" "}
                <div className="cc-name">
                  {"PHP Core & Advanced"}
                </div>
                {" "}
                <div className="cc-skills">
                  PHP OOP, MySQL, PDO, Sessions, REST APIs, Laravel Basics, Security
                </div>
                {" "}
                <div className="cc-meta">
                  <span>
                    🕐 65h Video
                  </span>
                  <span>
                    📚 145 Lessons
                  </span>
                  <span>
                    🏆 Certificate
                  </span>
                </div>
                {" "}
                <div className="cc-foot">
                  <span className="cc-rating">
                    ★ 4.7
                  </span>
                  <span className="cc-stu">
                    10,800+ students
                  </span>
                </div>
                {" "}
                <div className="cc-btn">
                  Explore Course →
                </div>
              </div>
              {" "}
            </a>
            {" "}
            {" "}
            <a className="cc" href="./nextjs.html" data-cat="web" data-name="nextjs next.js app router ssr ssg prisma nextauth typescript" data-pop="88">
              {" "}
              <div className="cc-thumb" style={{ background: "linear-gradient(135deg,#0f172a,#1e293b)" }}>
                <div className="cc-thumb-bg"></div>
                <img src="./img/course_img/next.jpg" alt="course-img" />
                {" "}
                <span className="cc-bdg btrend">
                  📈 Trending
                </span>
                <span className="cc-dur">
                  13 Weeks
                </span>
              </div>
              {" "}
              <div className="cc-body">
                <div className="cc-cat">
                  Frontend / Full Stack
                </div>
                {" "}
                <div className="cc-name">
                  Next.js
                </div>
                {" "}
                <div className="cc-skills">
                  App Router, SSR, SSG, TypeScript, Prisma ORM, NextAuth.js, Vercel Deploy
                </div>
                {" "}
                <div className="cc-meta">
                  <span>
                    🕐 65h Video
                  </span>
                  <span>
                    📚 140 Lessons
                  </span>
                  <span>
                    🏆 Certificate
                  </span>
                </div>
                {" "}
                <div className="cc-foot">
                  <span className="cc-rating">
                    ★ 4.9
                  </span>
                  <span className="cc-stu">
                    8,200+ students
                  </span>
                </div>
                {" "}
                <div className="cc-btn">
                  Explore Course →
                </div>
              </div>
              {" "}
            </a>
            {" "}
            {" "}
            <a className="cc" href="./dsa_with_cpp.html" data-cat="language" data-name="dsa data structures algorithms c++ competitive coding trees graphs dp" data-pop="93">
              {" "}
              <div className="cc-thumb" style={{ background: "linear-gradient(135deg,#1c1917,#78350f)" }}>
                <div className="cc-thumb-bg"></div>
                <img src="./img/course_img/dsa.jpg" alt="course-img" />
                {" "}
                <span className="cc-bdg bhot">
                  🔥 Bestseller
                </span>
                <span className="cc-dur">
                  15 Weeks
                </span>
              </div>
              {" "}
              <div className="cc-body">
                <div className="cc-cat">
                  Programming / DSA
                </div>
                {" "}
                <div className="cc-name">
                  DSA with C++
                </div>
                {" "}
                <div className="cc-skills">
                  Arrays, Linked Lists, Trees, Graphs, DP, STL, Competitive Programming, FAANG Prep
                </div>
                {" "}
                <div className="cc-meta">
                  <span>
                    🕐 90h Video
                  </span>
                  <span>
                    📚 200 Lessons
                  </span>
                  <span>
                    🏆 Certificate
                  </span>
                </div>
                {" "}
                <div className="cc-foot">
                  <span className="cc-rating">
                    ★ 4.9
                  </span>
                  <span className="cc-stu">
                    16,300+ students
                  </span>
                </div>
                {" "}
                <div className="cc-btn">
                  Explore Course →
                </div>
              </div>
              {" "}
            </a>
            {" "}
            {" "}
            <a className="cc" href="./react_native.html" data-cat="app" data-name="react native mobile expo navigation redux firebase ios android" data-pop="84">
              {" "}
              <div className="cc-thumb" style={{ background: "linear-gradient(135deg,#0f2027,#2c5364)" }}>
                <div className="cc-thumb-bg"></div>
                <img src="./img/course_img/react_native.jpg" alt="course-img" />
                {" "}
                <span className="cc-bdg btrend">
                  📈 Trending
                </span>
                <span className="cc-dur">
                  13 Weeks
                </span>
              </div>
              {" "}
              <div className="cc-body">
                <div className="cc-cat">
                  Mobile
                </div>
                {" "}
                <div className="cc-name">
                  React Native
                </div>
                {" "}
                <div className="cc-skills">
                  React Native, Expo, Navigation, Redux Toolkit, Firebase, App Store Publish
                </div>
                {" "}
                <div className="cc-meta">
                  <span>
                    🕐 72h Video
                  </span>
                  <span>
                    📚 155 Lessons
                  </span>
                  <span>
                    🏆 Certificate
                  </span>
                </div>
                {" "}
                <div className="cc-foot">
                  <span className="cc-rating">
                    ★ 4.8
                  </span>
                  <span className="cc-stu">
                    7,900+ students
                  </span>
                </div>
                {" "}
                <div className="cc-btn">
                  Explore Course →
                </div>
              </div>
              {" "}
            </a>
            {" "}
            {" "}
            <a className="cc" href="./frontend_with_angular.html" data-cat="web" data-name="frontend angular typescript rxjs ngrx material" data-pop="87">
              {" "}
              <div className="cc-thumb" style={{ background: "linear-gradient(135deg,#3b0764,#7c3aed)" }}>
                <div className="cc-thumb-bg"></div>
                <img src="./img/course_img/angular.jpg" alt="course-img" />
                {" "}
                <span className="cc-bdg btrend">
                  📈 Trending
                </span>
                <span className="cc-dur">
                  14 Weeks
                </span>
              </div>
              {" "}
              <div className="cc-body">
                <div className="cc-cat">
                  Frontend
                </div>
                {" "}
                <div className="cc-name">
                  Frontend with Angular
                </div>
                {" "}
                <div className="cc-skills">
                  TypeScript, Angular Components, RxJS, NgRx, Angular Material, REST APIs
                </div>
                {" "}
                <div className="cc-meta">
                  <span>
                    🕐 75h Video
                  </span>
                  <span>
                    📚 165 Lessons
                  </span>
                  <span>
                    🏆 Certificate
                  </span>
                </div>
                {" "}
                <div className="cc-foot">
                  <span className="cc-rating">
                    ★ 4.8
                  </span>
                  <span className="cc-stu">
                    8,700+ students
                  </span>
                </div>
                {" "}
                <div className="cc-btn">
                  Explore Course →
                </div>
              </div>
              {" "}
            </a>
            {" "}
            {" "}
            <Link to="/machine_learning.html" className="cc" data-cat="ai" data-name="machine learning python tensorflow scikit-learn nlp cnn deep learning" data-pop="94">
              {" "}
              <div className="cc-thumb" style={{ background: "linear-gradient(135deg,#042f2e,#0d9488)" }}>
                <div className="cc-thumb-bg"></div>
                <img src="img/course_img/ml.jpg" alt="course-img" />
                {" "}
                <span className="cc-bdg bhot">
                  🔥 Bestseller
                </span>
                <span className="cc-dur">
                  16 Weeks
                </span>
              </div>
              {" "}
              <div className="cc-body">
                <div className="cc-cat">
                  {"Data & AI"}
                </div>
                {" "}
                <div className="cc-name">
                  Machine Learning
                </div>
                {" "}
                <div className="cc-skills">
                  Python, scikit-learn, TensorFlow, Neural Networks, NLP, Computer Vision, Projects
                </div>
                {" "}
                <div className="cc-meta">
                  <span>
                    🕐 110h Video
                  </span>
                  <span>
                    📚 220 Lessons
                  </span>
                  <span>
                    🏆 Certificate
                  </span>
                </div>
                {" "}
                <div className="cc-foot">
                  <span className="cc-rating">
                    ★ 4.9
                  </span>
                  <span className="cc-stu">
                    12,400+ students
                  </span>
                </div>
                {" "}
                <div className="cc-btn">
                  Explore Course →
                </div>
              </div>
              {" "}
            </Link>
            {" "}
            {" "}
            <div className="cp-none" id="cpNone">
              <p style={{ fontSize: "48px", marginBottom: "1rem" }}>
                🔍
              </p>
              {" "}
              <h3 style={{ fontSize: "18px", color: "var(--cp-wh)", marginBottom: ".5rem" }}>
                No courses found
              </h3>
              {" "}
              <p style={{ fontSize: "14px", color: "var(--cp-dim)" }}>
                Try a different search term or category.
              </p>
            </div>
          </div>
        </div>
        {" "}
        {" "}
        <section className="cp-why">
          <div className="cp-why-in">
            <h2>
              {"Why Choose "}
              <em>
                Code of School?
              </em>
            </h2>
            {" "}
            <p>
              India's most practical IT training institute — real mentors, real projects, real placements.
            </p>
            {" "}
            <div className="cp-why-grid">
              <div className="cp-why-card">
                <div className="cp-why-icon">
                  🎯
                </div>
                <div className="cp-why-title">
                  100% Job-Oriented
                </div>
                <div className="cp-why-desc">
                  Every course is designed around what companies actually hire for — with live projects and portfolio building.
                </div>
              </div>
              {" "}
              <div className="cp-why-card">
                <div className="cp-why-icon">
                  👨‍🏫
                </div>
                <div className="cp-why-title">
                  Industry Expert Faculty
                </div>
                <div className="cp-why-desc">
                  Learn from working engineers and senior developers with 8–12 years of real industry experience.
                </div>
              </div>
              {" "}
              <div className="cp-why-card">
                <div className="cp-why-icon">
                  🏆
                </div>
                <div className="cp-why-title">
                  ISO Certified Institute
                </div>
                <div className="cp-why-desc">
                  Earn multiple certifications — completion diploma, task-based, and excellence awards recognised by top companies.
                </div>
              </div>
              {" "}
              <div className="cp-why-card">
                <div className="cp-why-icon">
                  💼
                </div>
                <div className="cp-why-title">
                  Placement Assistance
                </div>
                <div className="cp-why-desc">
                  Resume building, mock interviews, coding round prep, and direct job referrals to 200+ hiring partners.
                </div>
              </div>
              {" "}
              <div className="cp-why-card">
                <div className="cp-why-icon">
                  📺
                </div>
                <div className="cp-why-title">
                  Live + Recorded Classes
                </div>
                <div className="cp-why-desc">
                  All live sessions are recorded and available lifetime so you can revise any lecture at your own pace.
                </div>
              </div>
              {" "}
              <div className="cp-why-card">
                <div className="cp-why-icon">
                  🤝
                </div>
                <div className="cp-why-title">
                  Lifetime Community
                </div>
                <div className="cp-why-desc">
                  Join our alumni network for job alerts, peer support, and industry updates forever — even after course completion.
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="cp-cta">
          <h2>
            {"Ready to "}
            <em>
              Start Your Tech Career?
            </em>
          </h2>
          {" "}
          <p>
            Talk to our counsellor, get a free demo class, and pick the course that's right for you — no commitment needed.
          </p>
          {" "}
          <div className="cp-cta-btns">
            <a href="tel:+919977723584" className="cta-p">
              📞 Call Now — Free Counselling
            </a>
            {" "}
            <a href={"https://wa.me/919977723584?text=Hi!%20I'd%20like%20to%20know%20more%20about%20your%20courses."} target="_blank" className="cta-s">
              💬 WhatsApp Us
            </a>
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
      {" "}
    </PageFrame>
  );
}
