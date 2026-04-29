import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { blogPostsZH } from '../../data/blogData';

function BlogZH() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="position-relative" style={{ maxHeight: '300px', overflow: 'hidden' }}>
        <img src="/images/hero1.jpg" alt="新聞資訊" className="w-100" style={{ objectFit: 'cover', maxHeight: '300px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.45)' }}>
          <div className="container text-white text-center">
            <h1 className="display-4 fw-bold">新聞資訊</h1>
            <p className="lead">AH Solutions 資訊管理最新消息</p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="container py-5">
        <div className="row g-4">
          {blogPostsZH.map((post) => (
            <div className="col-md-6 col-lg-4" key={post.id}>
              <div className="card h-100 shadow-sm">
                <img src={post.image} alt={post.title} className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} />
                <div className="card-body">
                  <small className="text-muted">{post.date}</small>
                  <h5 className="card-title mt-2">{post.title}</h5>
                  <p className="card-text">{post.excerpt}</p>
                  <div className="mb-2">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="badge bg-secondary me-1">{tag}</span>
                    ))}
                  </div>
                  <Link to={`/zh/blog/${post.slug}`} className="btn btn-outline-primary">閱讀更多</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Language Switcher */}
      <div className="text-center py-4 border-top">
        <Link to="/en/blog" className="btn btn-outline-primary">English</Link>
      </div>
    </div>
  );
}

export default BlogZH;
