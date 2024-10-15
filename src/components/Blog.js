import React from 'react';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Repo Prompt",
    date: "2023-06-01",
    excerpt: "Learn how to set up and start using Repo Prompt for your development workflow.",
  },
  {
    id: 2,
    title: "Advanced Features of Repo Prompt",
    date: "2023-06-15",
    excerpt: "Discover the powerful advanced features that Repo Prompt offers for seamless code management.",
  },
  {
    id: 3,
    title: "Repo Prompt vs Traditional Version Control",
    date: "2023-07-01",
    excerpt: "Compare Repo Prompt with traditional version control systems and see how it can improve your workflow.",
  }
];

function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="blog-content">
        <h2>Latest from Our Blog</h2>
        <div className="blog-posts">
          {blogPosts.map(post => (
            <div key={post.id} className="blog-post">
              <h3>{post.title}</h3>
              <p className="post-date">{post.date}</p>
              <p>{post.excerpt}</p>
              <a href={`#blog-post-${post.id}`} className="read-more">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;