import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isSupabaseConfigured, supabase } from "./supabase.js";
import "./admin.css";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const IMAGE_EXTENSIONS = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};
const EMPTY_FORM = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  category: "digital-marketing",
  cover_image_url: "",
  cover_image_path: "",
};

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function AdminPanel() {
  const [session, setSession] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [adminStatus, setAdminStatus] = useState("checking");
  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingPost, setEditingPost] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setAuthLoading(false);
      return undefined;
    }

    let active = true;
    supabase.auth.getSession().then(({ data, error: sessionError }) => {
      if (!active) return;
      if (sessionError) setError(sessionError.message);
      setSession(data.session);
      setAuthLoading(false);
    }).catch((sessionError) => {
      if (!active) return;
      setError(sessionError.message || "Could not check the current sign-in session.");
      setAuthLoading(false);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setAdminStatus("checking");
      setError("");
      setAuthLoading(false);
    });

    return () => {
      active = false;
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!session) {
      setAdminStatus("signed-out");
      setPosts([]);
      return undefined;
    }

    let active = true;
    setAdminStatus("checking");
    supabase
      .from("blog_admins")
      .select("user_id")
      .eq("user_id", session.user.id)
      .maybeSingle()
      .then(({ data, error: adminError }) => {
        if (!active) return;
        if (adminError) {
          setError(adminError.message);
          setAdminStatus("error");
        } else {
          setAdminStatus(data ? "allowed" : "denied");
        }
      })
      .catch((adminError) => {
        if (!active) return;
        setError(adminError.message || "Could not verify admin access.");
        setAdminStatus("error");
      });

    return () => {
      active = false;
    };
  }, [session]);

  useEffect(() => {
    if (adminStatus !== "allowed") return undefined;

    let active = true;
    setPostsLoading(true);
    supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data, error: postsError }) => {
        if (!active) return;
        if (postsError) setError(postsError.message);
        else setPosts(data || []);
        setPostsLoading(false);
      })
      .catch((postsError) => {
        if (!active) return;
        setError(postsError.message || "Could not load articles.");
        setPostsLoading(false);
      });

    return () => {
      active = false;
    };
  }, [adminStatus]);

  async function handleSignIn(event) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const formData = new FormData(event.currentTarget);
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: formData.get("email"),
        password: formData.get("password"),
      });
      if (signInError) setError(signInError.message);
    } catch (signInError) {
      setError(signInError.message || "Could not sign in. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function handleSignOut() {
    setBusy(true);
    setError("");
    try {
      const { error: signOutError } = await supabase.auth.signOut();
      if (signOutError) setError(signOutError.message);
    } catch (signOutError) {
      setError(signOutError.message || "Could not sign out. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  function resetEditor() {
    setForm(EMPTY_FORM);
    setEditingPost(null);
    setImageFile(null);
    setError("");
    setNotice("");
  }

  function editPost(post) {
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || "",
      content: post.content,
      category: post.category,
      cover_image_url: post.cover_image_url || "",
      cover_image_path: post.cover_image_path || "",
    });
    setEditingPost(post);
    setImageFile(null);
    setError("");
    setNotice("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleImageChange(event) {
    const file = event.target.files?.[0];
    setError("");
    if (!file) {
      setImageFile(null);
      return;
    }
    if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
      setError("Choose a JPG, PNG, or WebP image.");
      event.target.value = "";
      return;
    }
    if (file.size > MAX_IMAGE_SIZE) {
      setError("The cover image must be 5 MB or smaller.");
      event.target.value = "";
      return;
    }
    setImageFile(file);
  }

  async function savePost(status) {
    if (!form.title.trim() || !form.slug.trim() || !form.content.trim()) {
      setError("Title, URL slug, and article content are required.");
      return;
    }
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(form.slug)) {
      setError("Use lowercase letters, numbers, and hyphens for the URL slug.");
      return;
    }

    setBusy(true);
    setError("");
    setNotice("");
    let uploadedPath = "";

    try {
      let coverImageUrl = form.cover_image_url;
      let coverImagePath = form.cover_image_path;
      if (imageFile) {
        const extension = IMAGE_EXTENSIONS[imageFile.type];
        uploadedPath = `${session.user.id}/${form.slug}-${Date.now()}.${extension}`;
        const { error: uploadError } = await supabase.storage
          .from("blog-images")
          .upload(uploadedPath, imageFile, {
            cacheControl: "3600",
            contentType: imageFile.type,
            upsert: false,
          });
        if (uploadError) throw uploadError;

        coverImageUrl = supabase.storage.from("blog-images").getPublicUrl(uploadedPath).data.publicUrl;
        coverImagePath = uploadedPath;
      }

      const postData = {
        title: form.title.trim(),
        slug: form.slug.trim(),
        excerpt: form.excerpt.trim(),
        content: form.content.trim(),
        category: form.category,
        cover_image_url: coverImageUrl || null,
        cover_image_path: coverImagePath || null,
        status,
        published_at:
          status === "published"
            ? editingPost?.published_at || new Date().toISOString()
            : null,
      };

      const result = editingPost
        ? await supabase
            .from("blog_posts")
            .update(postData)
            .eq("id", editingPost.id)
            .select()
            .single()
        : await supabase
            .from("blog_posts")
            .insert({ ...postData, author_id: session.user.id })
            .select()
            .single();

      if (result.error) throw result.error;
      let cleanupNotice = "";
      if (uploadedPath && editingPost?.cover_image_path) {
        const { error: oldImageError } = await supabase.storage
          .from("blog-images")
          .remove([editingPost.cover_image_path]);
        if (oldImageError) {
          cleanupNotice = `Article saved, but the previous cover image could not be removed: ${oldImageError.message}`;
        }
      }
      setPosts((current) =>
        editingPost
          ? current.map((post) => (post.id === result.data.id ? result.data : post))
          : [result.data, ...current]
      );
      setNotice(
        cleanupNotice || (status === "published" ? "Article published." : "Draft saved.")
      );
      setForm(EMPTY_FORM);
      setEditingPost(null);
      setImageFile(null);
    } catch (saveError) {
      if (uploadedPath) {
        const { error: cleanupError } = await supabase.storage
          .from("blog-images")
          .remove([uploadedPath]);
        if (cleanupError) {
          setError(`${saveError.message} The uploaded cover image also could not be removed: ${cleanupError.message}`);
          setBusy(false);
          return;
        }
      }
      setError(saveError.message || "The article could not be saved.");
    }
    setBusy(false);
  }

  async function deletePost(post) {
    if (!window.confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    setBusy(true);
    setError("");
    setNotice("");
    let deleteError;
    try {
      ({ error: deleteError } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", post.id));
    } catch (requestError) {
      setError(requestError.message || "The article could not be deleted.");
      setBusy(false);
      return;
    }

    if (deleteError) {
      setError(deleteError.message);
      setBusy(false);
      return;
    }

    setPosts((current) => current.filter((item) => item.id !== post.id));
    if (post.cover_image_path) {
      const { error: imageError } = await supabase.storage
        .from("blog-images")
        .remove([post.cover_image_path]);
      if (imageError) {
        setNotice(`Article deleted, but its cover image could not be removed: ${imageError.message}`);
      } else {
        setNotice("Article deleted.");
      }
    } else {
      setNotice("Article deleted.");
    }
    if (editingPost?.id === post.id) resetEditor();
    setBusy(false);
  }

  if (!isSupabaseConfigured) {
    return (
      <main className="admin-setup">
        <div className="admin-setup__card">
          <p className="admin-brand__eyebrow">Code Of School</p>
          <h1>Connect Supabase</h1>
          <p>Set <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> in your environment to enable the blog admin.</p>
          <Link to="/">Back to website</Link>
        </div>
      </main>
    );
  }

  if (authLoading || (session && adminStatus === "checking")) {
    return <main className="admin-loading">Checking admin access…</main>;
  }

  if (!session) {
    return (
      <main className="admin-login">
        <form className="admin-login__card" onSubmit={handleSignIn}>
          <Link className="admin-brand" to="/">
            <span className="admin-brand__mark">C</span>
            <span>
              <strong>Code Of School</strong>
              <small>Content administration</small>
            </span>
          </Link>
          <p className="admin-brand__eyebrow">SECURE ACCESS</p>
          <h1>Admin sign in</h1>
          <p className="admin-login__intro">Sign in with an authorized admin account to manage blog articles.</p>
          {error && <p className="admin-alert admin-alert--error" role="alert">{error}</p>}
          <label className="admin-field">
            Email
            <input name="email" type="email" autoComplete="username" required />
          </label>
          <label className="admin-field">
            Password
            <input name="password" type="password" autoComplete="current-password" required />
          </label>
          <button className="admin-button admin-button--primary admin-login__submit" disabled={busy}>
            {busy ? "Signing in…" : "Sign in"}
          </button>
          <Link className="admin-login__back" to="/">Return to website</Link>
        </form>
      </main>
    );
  }

  if (adminStatus !== "allowed") {
    return (
      <main className="admin-login">
        <section className="admin-login__card">
          <p className="admin-brand__eyebrow">ADMIN ACCESS</p>
          <h1>{adminStatus === "error" ? "Could not verify access" : "Not an admin account"}</h1>
          <p className="admin-login__intro">
            {adminStatus === "error"
              ? error
              : "This signed-in account is not authorized to manage blog articles."}
          </p>
          <button className="admin-button admin-button--secondary" onClick={handleSignOut} disabled={busy}>
            Sign out
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="admin-dashboard">
      <header className="admin-topbar">
        <Link className="admin-brand" to="/">
          <span className="admin-brand__mark">C</span>
          <span>
            <strong>Code Of School</strong>
            <small>Blog admin</small>
          </span>
        </Link>
        <div className="admin-topbar__actions">
          <span>{session.user.email}</span>
          <Link className="admin-button admin-button--secondary" to="/">View website</Link>
          <button className="admin-button admin-button--secondary" onClick={handleSignOut} disabled={busy}>
            Sign out
          </button>
        </div>
      </header>

      <div className="admin-dashboard__content">
        <div className="admin-page-heading">
          <div>
            <p className="admin-brand__eyebrow">CONTENT STUDIO</p>
            <h1>Blog articles</h1>
            <p>Create, edit, and publish articles on your website.</p>
          </div>
          <span className="admin-count">{posts.length} {posts.length === 1 ? "article" : "articles"}</span>
        </div>

        {error && <p className="admin-alert admin-alert--error" role="alert">{error}</p>}
        {notice && <p className="admin-alert admin-alert--success" role="status">{notice}</p>}

        <section className="admin-editor">
          <div className="admin-section-heading">
            <div>
              <p className="admin-brand__eyebrow">{editingPost ? "UPDATE ARTICLE" : "NEW ARTICLE"}</p>
              <h2>{editingPost ? "Edit article" : "Write an article"}</h2>
            </div>
            {editingPost && (
              <button className="admin-button admin-button--secondary" onClick={resetEditor}>
                Cancel edit
              </button>
            )}
          </div>

          <div className="admin-editor__grid">
            <label className="admin-field">
              Article title
              <input
                value={form.title}
                onChange={(event) => setForm((current) => ({
                  ...current,
                  title: event.target.value,
                  slug: current.slug || slugify(event.target.value),
                }))}
                maxLength={180}
                required
              />
            </label>
            <label className="admin-field">
              URL slug
              <input
                value={form.slug}
                onChange={(event) => setForm((current) => ({ ...current, slug: slugify(event.target.value) }))}
                maxLength={120}
                required
              />
              <small>Public URL: /blogs/posts/{form.slug || "your-article"}</small>
            </label>
            <label className="admin-field">
              Category
              <select
                value={form.category}
                onChange={(event) => setForm((current) => ({ ...current, category: event.target.value }))}
              >
                <option value="digital-marketing">Digital Marketing</option>
                <option value="full-stack">Full Stack Development</option>
              </select>
            </label>
            <label className="admin-field">
              Cover image <span className="admin-field__hint">JPG, PNG, or WebP · up to 5 MB</span>
              <input type="file" accept="image/jpeg,image/png,image/webp" onChange={handleImageChange} />
              {imageFile && <small>Selected: {imageFile.name}</small>}
              {!imageFile && form.cover_image_url && (
                <img className="admin-image-preview" src={form.cover_image_url} alt="Current cover" />
              )}
            </label>
            <label className="admin-field admin-field--wide">
              Short summary
              <textarea
                value={form.excerpt}
                onChange={(event) => setForm((current) => ({ ...current, excerpt: event.target.value }))}
                rows={3}
                maxLength={320}
                placeholder="A short introduction shown on the blog listing."
              />
            </label>
            <label className="admin-field admin-field--wide">
              Article content
              <textarea
                value={form.content}
                onChange={(event) => setForm((current) => ({ ...current, content: event.target.value }))}
                rows={14}
                placeholder="Write your article here. Separate paragraphs with a blank line."
                required
              />
              <small>Plain text is used for safety. Separate paragraphs with a blank line.</small>
            </label>
          </div>
          <div className="admin-editor__actions">
            <button className="admin-button admin-button--secondary" onClick={() => savePost("draft")} disabled={busy}>
              {busy ? "Saving…" : "Save draft"}
            </button>
            <button className="admin-button admin-button--primary" onClick={() => savePost("published")} disabled={busy}>
              {busy ? "Saving…" : editingPost?.status === "published" ? "Save & publish" : "Publish article"}
            </button>
          </div>
        </section>

        <section className="admin-posts">
          <div className="admin-section-heading">
            <div>
              <p className="admin-brand__eyebrow">LIBRARY</p>
              <h2>All articles</h2>
            </div>
          </div>
          {postsLoading && <p className="admin-empty">Loading articles…</p>}
          {!postsLoading && posts.length === 0 && (
            <p className="admin-empty">No articles yet. Create your first post above.</p>
          )}
          {!postsLoading && posts.length > 0 && (
            <div className="admin-post-list">
              {posts.map((post) => (
                <article className="admin-post-row" key={post.id}>
                  {post.cover_image_url ? (
                    <img src={post.cover_image_url} alt="" className="admin-post-row__image" />
                  ) : (
                    <div className="admin-post-row__placeholder">COS</div>
                  )}
                  <div className="admin-post-row__details">
                    <div className="admin-post-row__title">
                      <h3>{post.title}</h3>
                      <span className={`admin-status admin-status--${post.status}`}>
                        {post.status === "published" ? "Published" : "Draft"}
                      </span>
                    </div>
                    <p>{post.category === "full-stack" ? "Full Stack Development" : "Digital Marketing"} · /{post.slug}</p>
                    {post.status === "published" && (
                      <Link to={`/blogs/posts/${post.slug}`} target="_blank" rel="noreferrer">
                        View published article
                      </Link>
                    )}
                  </div>
                  <div className="admin-post-row__actions">
                    <button className="admin-button admin-button--secondary" onClick={() => editPost(post)} disabled={busy}>
                      Edit
                    </button>
                    <button className="admin-button admin-button--danger" onClick={() => deletePost(post)} disabled={busy}>
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
