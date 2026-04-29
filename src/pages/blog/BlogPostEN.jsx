import React from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { blogPostsEN } from '../../data/blogData';

function BlogPostEN() {
  const { slug } = useParams();
  const post = blogPostsEN.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container py-5 text-center">
        <h2>Post not found</h2>
        <Link to="/en/blog" className="btn btn-primary mt-3">Back to News</Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Banner */}
      <div className="position-relative" style={{ maxHeight: '350px', overflow: 'hidden' }}>
        <img src={post.image} alt={post.title} className="w-100" style={{ objectFit: 'cover', maxHeight: '350px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.45)' }}>
          <div className="container text-white text-center">
            <h1 className="display-5 fw-bold">{post.title}</h1>
            <p className="lead">{post.date}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="mb-3">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="badge bg-secondary me-1">{tag}</span>
              ))}
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <hr className="my-4" />
            <Link to="/en/blog" className="btn btn-outline-primary">← Back to News</Link>
          </div>
        </div>
      </div>

      {/* Language Switcher */}
      <div className="text-center py-4 border-top">
        <Link to="/zh/blog" className="btn btn-outline-primary">中文</Link>
      </div>
    </div>
  );
}

export default BlogPostEN;
