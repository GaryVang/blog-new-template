import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="bg-square">
        {/* Write a Blog Post */}
        <text className='blog-title'>Write a Blog Post</text>
        <textarea></textarea>
        <div className="button-wrapper">
          <button className='button-cancel'>Cancel</button>
          <button className='button-submit'>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
