import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  // Detect language from path
  const isZh = path.startsWith('/zh');
  const isCn = path.startsWith('/cn');

  // Helper to get equivalent path in another language
  const getLangPath = (lang) => {
    // If already on EN root, go to correct page
    if (path === '/') {
      if (lang === 'zh') return '/zh';
      if (lang === 'cn') return '/cn';
    }
    // Normal replacement
    if (lang === 'en') return path.replace(/^\/(zh|cn)/, '/');
    if (lang === 'zh') return path.replace(/^\/(en|cn)/, '/zh');
    if (lang === 'cn') return path.replace(/^\/(en|zh)/, '/cn');
    return path;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to={isCn ? '/cn' : isZh ? '/zh' : '/'}>
          <img src="/images/ahimhk-logo.svg" alt="AH Solutions" height="38" />
        </Link>
        <div className="navbar-nav ms-auto">
          {isCn ? (
            <>
              <Link className="nav-link text-dark" to="/cn">首页</Link>
              <Link className="nav-link text-dark" to="/cn/solutions">方案</Link>
              <Link className="nav-link text-dark" to="/cn/blog">新闻资讯</Link>
              <Link className="nav-link text-dark" to="/cn/about">关于我们</Link>
              <Link className="nav-link text-dark" to="/cn/contact">联系我们</Link>
              <Link className="nav-link badge bg-secondary ms-2 text-white" to={getLangPath('en')}>EN</Link>
              <Link className="nav-link badge bg-primary ms-1 text-white" to={getLangPath('zh')}>繁體</Link>
            </>
          ) : isZh ? (
            <>
              <Link className="nav-link text-dark" to="/zh">首頁</Link>
              <Link className="nav-link text-dark" to="/zh/solutions">方案</Link>
              <Link className="nav-link text-dark" to="/zh/blog">新聞資訊</Link>
              <Link className="nav-link text-dark" to="/zh/about">關於我們</Link>
              <Link className="nav-link text-dark" to="/zh/contact">聯絡我們</Link>
              <Link className="nav-link badge bg-secondary ms-2 text-white" to={getLangPath('en')}>EN</Link>
              <Link className="nav-link badge bg-success ms-1 text-white" to={getLangPath('cn')}>简体</Link>
            </>
          ) : (
            <>
              <Link className="nav-link text-dark" to="/">Home</Link>
              <Link className="nav-link text-dark" to="/en/solutions">Solutions</Link>
              <Link className="nav-link text-dark" to="/en/blog">News</Link>
              <Link className="nav-link text-dark" to="/en/about">About</Link>
              <Link className="nav-link text-dark" to="/en/contact">Contact</Link>
              <Link className="nav-link badge bg-primary ms-2 text-white" to={getLangPath('zh')}>中文</Link>
              <Link className="nav-link badge bg-success ms-1 text-white" to={getLangPath('cn')}>简体</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
