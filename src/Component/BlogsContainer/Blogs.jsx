import React from "react";
import blogsArr from "./blogsArrayUse";
import BlogContainer from "./BlogContainer";
const Blogs = () => {
  return (
    <div className="all-blog-container">
      {blogsArr.map((blog) => {
        return (
          <BlogContainer
            writerName={blog.WriterName}
            blogImg={blog.img}
            desc={blog.desc}
            id={blog.id}
          />
        );
      })}
    </div>
  );
};

export default Blogs;
