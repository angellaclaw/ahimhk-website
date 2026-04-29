import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isZh = location.pathname.startsWith('/zh');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to={isZh ? '/zh' : '/'}>
          <img src="/images/ahimhk-logo.svg" alt="AHIMHK" height="38" />
        </Link>
        <div className="navbar-nav ms-auto">
          {isZh ? (
            <>
              <Link className="nav-link text-dark" to="/zh">首頁</Link>
              <Link className="nav-link text-dark" to="/zh/solutions">方案</Link>
              <Link className="nav-link text-dark" to="/zh/about">關於我們</Link>
              <Link className="nav-link text-dark" to="/zh/contact">聯絡我們</Link>
              <Link className="nav-link badge bg-primary ms-2 text-white" to="/en">EN</Link>
            </>
          ) : (
            <>
              <Link className="nav-link text-dark" to="/en">Home</Link>
              <Link className="nav-link text-dark" to="/en/solutions">Solutions</Link>
              <Link className="nav-link text-dark" to="/en/about">About</Link>
              <Link className="nav-link text-dark" to="/en/contact">Contact</Link>
              <Link className="nav-link badge bg-primary ms-2 text-white" to="/zh">中文</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
