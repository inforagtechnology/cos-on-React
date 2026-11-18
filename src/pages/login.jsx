import PageFrame from "@/runtime/PageFrame.jsx";
import { Link } from "react-router-dom";

// Converted from login.html
const styles = [{ css: "\n    .update-notice {\n      max-width: 600px;\n      margin: 100px auto;\n      padding: 30px;\n      background-color: #f5f5f5;\n      border-left: 6px solid #4CAF50;\n      border-radius: 10px;\n      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n      text-align: center;\n    }\n\n    .update-notice h2 {\n      color: #2e7d32;\n      margin-bottom: 15px;\n      font-size: 1.6em;\n    }\n\n    .update-notice p {\n      color: #333;\n      font-size: 1em;\n      line-height: 1.6;\n    }\n\n    .update-notice .emoji {\n      font-size: 2rem;\n    }\n  " }];
const scripts = [];

export default function Page() {
  return (
    <PageFrame
      styles={styles}
      scripts={scripts}
      head={
        <>
          <title>Placement Page Update Notice</title>
        </>
      }
    >
      <div className="update-notice">
        <div className="emoji">
          🚀
        </div>
        {" "}
        <h2>
          We’re currently working on this page.
        </h2>
        {" "}
        <Link to="/" style={{ textDecoration: "none", color: "Black" }}>
          <button style={{ padding: "5px 10px", borderRadius: "5%", backgroundColor: "rgb(106, 106, 235)" }}>
            Code of School
          </button>
        </Link>
      </div>
    </PageFrame>
  );
}
