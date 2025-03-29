import { useEffect, useState } from "react";
import BlogItem from "../blog/BlogItem";
import { Link } from "react-router-dom";

const RelatedPost = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <section className="mb-20 container">
      <div className="mb-10 text-center">
        <h3 className="text-3xl font-semibold mb-3">Related posts</h3>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
      </div>
      <div className="grid mb-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 xl:gap-x-10 gap-y-14 sm:px-10 xl:px-20">
        {blogs.slice(0, 3).map((blog) => (
          <BlogItem blog={blog} key={blog.id}></BlogItem>
        ))}
      </div>
      <div className="text-center">
        <Link
          to="/blog"
          className="px-5 border-gray-300 py-2 bg-slate-100 border rounded font-medium"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default RelatedPost;
