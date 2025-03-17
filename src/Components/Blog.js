import React from "react";
import "../styles.css";
import Image1 from '../assests/blog_post.jpeg'
const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "My First Blog Post",
      date: "March 10, 2025",
      content: "This is my first blog post. I'm excited to share my journey!",
      image:Image1
    },
    {
      id: 2,
      title: "Learning React",
      date: "March 12, 2025",
      content: "React has been an amazing library to build my portfolio!"
    },
    {
        id: 3,
        title: "Best Font Styles",
        date: "March 15, 2025",
        content: "This is my blog post with the required fonts and styles to enhance the webpage"
      },
      {
        id: 1,
        title: "My Art work",
        date: "March 10, 2025",
        content: "This is my first blog post. I'm excited to share my journey!"
      },  
  ];
 
  return (
    <div className="section-box">
      <h1>My Blog</h1>
      {posts.map((post) => (
        <div key={post.id} className="blog-post" style={{backgroundImage:`url(${Image1})`}}>
          <h2>{post.title}</h2>
          <p><em>{post.date}</em></p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;