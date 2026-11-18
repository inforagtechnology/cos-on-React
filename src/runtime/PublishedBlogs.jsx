import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import PageFrame from "./PageFrame.jsx";
import { SiteFooter, SiteHeader } from "./SiteChrome.jsx";
import { isSupabaseConfigured, supabase } from "./supabase.js";
import "./admin.css";

const BLOG_PAGE_STYLES = [
  { href: "/blogs/Blog-main.css" },
  { href: "/header-footer.css" },
];

const CATEGORY_LABELS = {
  "digital-marketing": "Digital Marketing",
  "full-stack": "Full Stack Development",
};

const CATEGORY_PATHS = {
  "digital-marketing": "/blogs/Digital-Marketing/digital-marketing-blog",
  "full-stack": "/blogs/Fullstack-Developer/Full-stack-blog",
};

function BlogLayout({ title, description, canonical, children }) {
  return (
    <PageFrame
      styles={BLOG_PAGE_STYLES}
      scripts={[]}
      head={
        <>
          <title>{title}</title>
          {description && <meta name="description" content={description} />}
          {canonical && <link rel="canonical" href={canonical} />}
          <link rel="icon" href="/img/cos-white-logo2.png" type="image/webp" />
        </>
      }
    >
      <SiteHeader />
      {children}
      <SiteFooter />
    </PageFrame>
  );
}

export function PublishedBlogCards({ category }) {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let active = true;

    async function loadPosts() {
      if (!isSupabaseConfigured) {
        setStatus("unavailable");
        return;
      }

      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, slug, title, excerpt, cover_image_url, category, published_at")
        .eq("status", "published")
        .eq("category", category)
        .order("published_at", { ascending: false })
        .limit(6);

      if (!active) return;
      if (error) {
        setStatus("error");
        return;
      }

      setPosts(data || []);
      setStatus("ready");
    }

    loadPosts();
    return () => {
      active = false;
    };
  }, [category]);

  if (status === "ready" && posts.length === 0) return null;

  return (
    <section className="published-blogs" aria-labelledby={`published-${category}`}>
      <div className="published-blogs__heading">
        <div>
          <p className="published-blogs__eyebrow">From our team</p>
          <h2 id={`published-${category}`}>Latest articles</h2>
        </div>
        <Link className="published-blogs__all" to={CATEGORY_PATHS[category]}>
          Browse this category
        </Link>
      </div>

      {status === "loading" && <p className="published-blogs__message">Loading articles…</p>}
      {status === "unavailable" && (
        <p className="published-blogs__message">New articles are temporarily unavailable.</p>
      )}
      {status === "error" && (
        <p className="published-blogs__message" role="status">
          We couldn’t load the latest articles. Please try again later.
        </p>
      )}
      {status === "ready" && (
        <div className="published-blogs__grid">
          {posts.map((post) => (
            <Link
              className="blog-card blog-card-link published-blog-card"
              key={post.id}
              to={`/blogs/posts/${post.slug}`}
            >
              {post.cover_image_url ? (
                <img src={post.cover_image_url} alt="" className="card-thumbnail" />
              ) : (
                <div className="published-blog-card__placeholder card-thumbnail" aria-hidden="true">
                  COS
                </div>
              )}
              <div className="card-overlay">
                <span className="published-blog-card__category">
                  {CATEGORY_LABELS[post.category]}
                </span>
                <h2 className="card-title">{post.title}</h2>
                {post.excerpt && <p className="published-blog-card__excerpt">{post.excerpt}</p>}
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export function PublishedBlogIndex() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let active = true;

    async function loadPosts() {
      if (!isSupabaseConfigured) {
        setStatus("unavailable");
        return;
      }

      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, slug, title, excerpt, cover_image_url, category, published_at")
        .eq("status", "published")
        .order("published_at", { ascending: false })
        .limit(100);

      if (!active) return;
      if (error) {
        setStatus("error");
        return;
      }

      setPosts(data || []);
      setStatus("ready");
    }

    loadPosts();
    return () => {
      active = false;
    };
  }, []);

  const visiblePosts = category === "all"
    ? posts
    : posts.filter((post) => post.category === category);

  const canonical = `${window.location.origin}/blogs`;
  return (
    <BlogLayout
      title="Blogs & Articles | Code Of School"
      description="Explore digital marketing and full stack development articles from Code Of School."
      canonical={canonical}
    >
      <main className="dashboard-container published-blog-index">
        <h1 className="blog-header">Blogs &amp; Articles</h1>
        <p className="published-blog-index__intro">
          Practical guides and insights from the Code Of School team.
        </p>

        <div className="filter-tags-cloud" aria-label="Filter blog articles">
          {[
            ["all", "All Articles"],
            ["digital-marketing", "Digital Marketing"],
            ["full-stack", "Full Stack Development"],
          ].map(([value, label]) => (
            <button
              className={`tag-pill${category === value ? " active" : ""}`}
              key={value}
              onClick={() => setCategory(value)}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>

        {status === "loading" && <p className="published-blog-index__message">Loading articles…</p>}
        {status === "unavailable" && (
          <p className="published-blog-index__message">Published articles are temporarily unavailable.</p>
        )}
        {status === "error" && (
          <p className="published-blog-index__message" role="status">
            We couldn’t load the published articles. Please try again later.
          </p>
        )}
        {status === "ready" && visiblePosts.length === 0 && (
          <p className="published-blog-index__message">No published articles in this category yet.</p>
        )}
        {status === "ready" && visiblePosts.length > 0 && (
          <>
            <p className="results-counter">Showing {visiblePosts.length} published articles</p>
            <div className="blog-grid">
              {visiblePosts.map((post) => (
                <Link
                  className="blog-card blog-card-link published-blog-card"
                  key={post.id}
                  to={`/blogs/posts/${post.slug}`}
                >
                  {post.cover_image_url ? (
                    <img src={post.cover_image_url} alt="" className="card-thumbnail" />
                  ) : (
                    <div className="published-blog-card__placeholder card-thumbnail" aria-hidden="true">
                      COS
                    </div>
                  )}
                  <div className="card-overlay">
                    <span className="published-blog-card__category">
                      {CATEGORY_LABELS[post.category]}
                    </span>
                    <h2 className="card-title">{post.title}</h2>
                    {post.excerpt && <p className="published-blog-card__excerpt">{post.excerpt}</p>}
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </main>
    </BlogLayout>
  );
}

export function PublishedBlogPage() {
  const { slug } = useParams();
  const location = useLocation();
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let active = true;

    async function loadPost() {
      if (!isSupabaseConfigured) {
        setStatus("unavailable");
        return;
      }

      const { data, error } = await supabase
        .from("blog_posts")
        .select("slug, title, excerpt, content, cover_image_url, category, published_at")
        .eq("slug", slug)
        .eq("status", "published")
        .maybeSingle();

      if (!active) return;
      if (error) {
        setErrorMessage(error.message);
        setStatus("error");
      } else if (!data) {
        setStatus("missing");
      } else {
        setPost(data);
        setStatus("ready");
      }
    }

    loadPost();
    return () => {
      active = false;
    };
  }, [slug]);

  if (status !== "ready") {
    const message = {
      loading: "Loading article…",
      unavailable: "Articles are temporarily unavailable.",
      error: `We couldn’t load this article. ${errorMessage}`,
      missing: "This article could not be found.",
    }[status];

    return (
      <BlogLayout title="Blog Article | Code Of School">
        <main className="published-article-state">
          <p>{message}</p>
          <Link to="/blogs">Back to blogs</Link>
        </main>
      </BlogLayout>
    );
  }

  const categoryPath = CATEGORY_PATHS[post.category] || "/";
  const paragraphs = post.content.split(/\n{2,}/).filter(Boolean);

  return (
    <BlogLayout
      title={`${post.title} | Code Of School`}
      description={post.excerpt}
      canonical={`${window.location.origin}${location.pathname}`}
    >
      <main className="container published-article">
        <article>
          <Link className="published-article__back" to={categoryPath}>
            ← {CATEGORY_LABELS[post.category] || "Blog"}
          </Link>
          <p className="published-article__eyebrow">
            {CATEGORY_LABELS[post.category] || "Article"}
          </p>
          <h1>{post.title}</h1>
          {post.excerpt && <p className="published-article__excerpt">{post.excerpt}</p>}
          <p className="published-article__date">
            {new Date(post.published_at).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          {post.cover_image_url && (
            <img className="published-article__cover" src={post.cover_image_url} alt="" />
          )}
          <div className="published-article__content">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
    </BlogLayout>
  );
}
