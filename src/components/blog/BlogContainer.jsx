import { useEffect, useState } from "react";
import BlogItem from "./BlogItem";

const BlogContainer = () => {
  const [activeBtn, setActiveBtn] = useState("all");
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <section className="container my-20">
      <div className="flex flex-wrap gap-5 lg:gap-10 justify-center items-center mb-10">
        <button
          onClick={() => setActiveBtn("all")}
          className={`font-medium px-3 border border-gray-100 py-[5px] rounded ${
            activeBtn === "all" && "text-primaryGreen border-primaryGreen"
          }`}
        >
          View All
        </button>
        <button
          onClick={() => setActiveBtn("one")}
          className={`font-medium px-3 border border-gray-100 py-[5px] rounded ${
            activeBtn === "one" && "text-primaryGreen border-primaryGreen"
          }`}
        >
          Category one
        </button>
        <button
          onClick={() => setActiveBtn("two")}
          className={`font-medium border border-gray-100 px-3 py-[5px] rounded ${
            activeBtn === "two" && "text-primaryGreen border-primaryGreen"
          }`}
        >
          Category two
        </button>
        <button
          onClick={() => setActiveBtn("three")}
          className={`font-medium border border-gray-100 px-3 py-[5px] rounded ${
            activeBtn === "three" && "text-primaryGreen border-primaryGreen"
          }`}
        >
          Category three
        </button>
        <button
          onClick={() => setActiveBtn("four")}
          className={`font-medium border border-gray-100 px-3 py-[5px] rounded ${
            activeBtn === "four" && "text-primaryGreen border-primaryGreen"
          }`}
        >
          Category four
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 xl:gap-x-10 gap-y-14 sm:px-10 xl:px-20">
        {blogs.map((blog) => (
          <BlogItem blog={blog} key={blog.id}></BlogItem>
        ))}
      </div>
    </section>
  );
};

export default BlogContainer;
