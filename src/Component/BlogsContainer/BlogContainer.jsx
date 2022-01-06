import React from "react";
import "./BlogContainer.css";
const BlogContainer = ({ blogImg, desc, writerName }) => {
  return (
    <div className="blog-container">
      <img src={blogImg} alt="blogImage" className="blog-image" />
      <p className="blog-description">
        {desc} <span id="writer-name">~{writerName}</span>
      </p>
    </div>
  );
};

export default BlogContainer;
