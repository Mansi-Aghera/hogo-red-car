
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { themes } from "../config/themeConfig";
import bg from "../assets/images/blogBanner.jpg";
import RollingButton from "../components/RollingButton";

export default function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [recent, setRecent] = useState([]);
  const [tags, setTags] = useState([]);

  const [loading, setLoading] = useState(true);

  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${BASE_URL}/blogs/`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const allBlogs = data.data;

          // current blog
          const foundBlog = allBlogs.find(
            (item) => String(item.id) === String(id),
          );
          setBlog(foundBlog);

          // last 5 blogs
          const sorted = [...allBlogs].reverse();
          setRecent(sorted.slice(0, 5));

          // 🔥 ALL TAGS FROM API (unique)
          const allTags = allBlogs.map((item) => item.tag).filter(Boolean);

          const uniqueTags = [...new Set(allTags)];

          setTags(uniqueTags);
        }

        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id, BASE_URL]);

  if (loading) return <div className="text-white p-10">Loading...</div>;
  // 🔥 Points from full content (split by lines / sentences)

  // 🔥 Dynamic tags from recent shortcontent
  const lastFive = recent;

  // const tags = lastFive.map((item) => item.tag).filter(Boolean);

  const points = lastFive;
  return (
    <section style={{ backgroundColor: themes.backgroundBlack }}>
      {/* HERO */}
      <section
        className="relative w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px]
        flex items-center justify-center text-center px-4 sm:px-6 pt-24 sm:pt-28 lg:pt-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-4xl w-full opacity-0 translate-y-8 animate-[fadeUp_0.8s_ease-out_forwards]">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{ color: themes.textWhite }}
          >
            {blog.title}
          </h1>

          <div className="w-full h-[1px] my-4 sm:my-6 bg-white/20" />

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm md:text-base">
            <Link
              to="/"
              className="font-bold"
              style={{ color: themes.backgroundGray }}
            >
              Home
            </Link>
            <span style={{ color: themes.textWhite }}>›</span>
            <Link
              to="/blog"
              className="font-bold"
              style={{ color: themes.backgroundGray }}
            >
              Blog
            </Link>
            <span style={{ color: themes.textWhite }}>›</span>
            <span className="font-bold" style={{ color: themes.textWhite }}>
              {blog.title}
            </span>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
        {/* LEFT */}
        <div className="lg:col-span-2 text-white">
          <img
            src={`${BASE_URL}${blog.image}`}
            className="rounded-xl mb-6 sm:mb-8 w-full opacity-0 translate-y-8 animate-[fadeUp_0.8s_ease-out_forwards]"
            alt=""
          />

          <p
            className="
    opacity-0 translate-y-8 animate-[fadeUp_0.8s_ease-out_forwards]
    opacity-80 leading-7 sm:leading-8 text-sm sm:text-base mb-8 sm:mb-10
    max-w-3xl mx-auto text-left break-words
  "
          >
            {blog.content}
          </p>

          <div className="space-y-6 sm:space-y-7 mb-10 sm:mb-12">
            {points.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-center sm:gap-5 opacity-0 translate-y-6 animate-[fadeUp_0.8s_ease-out_forwards]"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ backgroundColor: themes.primary }}
                >
                  {i + 1}
                </div>

                <div>
                  <h4 className="font-bold text-md">{item.title}</h4>
                  <p style={{ color: themes.backgroundGray }}>
                    {item.shortcontent}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FORM */}
          <div className="opacity-0 translate-y-8 animate-[fadeUp_0.8s_ease-out_forwards]">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Leave a Reply
            </h2>

            <form className="space-y-3 sm:space-y-4">
              <input
                type="text"
                placeholder="Name*"
                className="w-full p-3 rounded"
                style={{
                  background: "transparent",
                  border: `1px solid ${themes.primary}`,
                  color: themes.textWhite,
                }}
              />

              <input
                type="email"
                placeholder="Email*"
                className="w-full p-3 rounded"
                style={{
                  background: "transparent",
                  border: `1px solid ${themes.primary}`,
                  color: themes.textWhite,
                }}
              />

              <textarea
                placeholder="Comment"
                rows="5"
                className="w-full p-3 rounded"
                style={{
                  background: "transparent",
                  border: `1px solid ${themes.primary}`,
                  color: themes.textWhite,
                }}
              />

              <RollingButton text="Post Comment" />
            </form>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="text-white">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 opacity-0 translate-y-8 animate-[fadeUp_0.8s_ease-out_forwards]">
            Recent Posts
          </h3>

          <div className="space-y-4 sm:space-y-6 mb-10 sm:mb-12">
            {recent.map((item, i) => (
              <Link
                key={item.id}
                to={`/blog/${item.id}`}
                className="flex gap-3 sm:gap-4 items-center opacity-0 translate-y-6 animate-[fadeUp_0.8s_ease-out_forwards]"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <img
                  src={`${BASE_URL}${item.image}`}
                  className="w-16 sm:w-20 h-12 sm:h-16 object-contain rounded"
                  alt=""
                />

                <p className="text-xs sm:text-sm font-semibold">{item.title}</p>
              </Link>
            ))}
          </div>

          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 opacity-0 translate-y-8 animate-[fadeUp_0.8s_ease-out_forwards]">
            Popular Tags
          </h3>

          <div className="flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 text-[10px] sm:text-xs rounded font-bold opacity-0 translate-y-6 animate-[fadeUp_0.8s_ease-out_forwards]"
                style={{
                  backgroundColor: themes.backgroundGray,
                  animationDelay: `${i * 60}ms`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}
