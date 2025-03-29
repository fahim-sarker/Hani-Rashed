import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
  return (
    <div className="duration-500 hover:-translate-y-2">
      <div className="md:h-64 h-52 rounded w-full overflow-hidden">
        <img
          src={blog.thumbnail}
          alt="thumbnail"
          className=" h-full w-full object-cover"
        />
      </div>
      <span className="font-medium inline-block mb-1 mt-4 text-primaryGreen">
        {blog.category}
      </span>
      <h4 className="text-xl sm:text-2xl font-semibold mb-2 truncate">
        <Link to="/blogDetails">{blog.title}</Link>
      </h4>
      <p className="text-gray-500 mb-2">{blog.short_desc.slice(0, 50)}...</p>
      <div className="flex gap-3 items-center">
        <div className="w-10 h-10 rounded-full">
          <img
            src={blog.author_img}
            alt="author"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div className="">
          <h5 className="font-medium">{blog.author_name}</h5>
          <div className="flex gap-2 text-gray-500 items-center">
            <span>{blog.date}</span> .<span>{blog.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
