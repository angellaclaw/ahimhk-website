import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function WechatEShopEN() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/wechat-eshop.jpg" alt="WeChat eShop" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">WeChat eShop / Social eShop</h1>
            <p className="lead">Tap into the massive China market with WeChat commerce</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>Overview</h2>
            <p className="lead">Our WeChat eShop / Social eShop provides a powerful selling tool for your products.</p>
            <p>The basic eShop includes <strong>product catalog</strong>, <strong>highlights and promotions</strong>, and <strong>logistics tracking</strong>. The enhanced eShop includes <strong>KOL marketing</strong>, <strong>video promotions</strong>, and <strong>agency levels</strong> for multi-tier distribution.</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <h5>Basic eShop Features</h5>
            <ul className="list-group mb-3">
              {[
                'Product catalog with images & descriptions',
                'Featured products & promotional banners',
                'Shopping cart & WeChat Pay checkout',
                'Order management & status tracking',
                'Logistics tracking (SF Express, JD, etc.)',
                'Customer order history',
                'Store locator / pickup points',
                'WeChat Official Account integration',
              ].map((f, i) => <li className="list-group-item small" key={i}>{f}</li>)}
            </ul>
          </div>
          <div className="col-md-6">
            <h5>Enhanced Social eShop Features</h5>
            <ul className="list-group mb-3">
              {[
                'KOL (Key Opinion Leader) marketing tools',
                'Video product promotions & live streaming',
                'Multi-tier agency distribution system',
                'Referral bonus & team commission tracking',
                'Social sharing with reward points',
                'WeChat Mini Program storefront',
                'Flash sales & group buying',
                'Customer tagging & behavior analytics',
              ].map((f, i) => <li className="list-group-item small" key={i}>{f}</li>)}
            </ul>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-8">
            <h4>WeChat Ecosystem Integration</h4>
            <p>Our WeChat eShop integrates deeply with the WeChat ecosystem: WeChat Pay for seamless payments, WeChat Official Account for customer engagement, WeChat Mini Program for lightweight app experience, and WeChat Work for internal team communication.</p>
          </div>
          <div className="col-md-4 text-center">
            <h2 className="text-success">1.3B+</h2>
            <p className="small mb-0">WeChat Active Users</p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/en/solutions" className="btn btn-outline-secondary me-2">← Back to Solutions</Link>
          <Link to="/en/contact" className="btn btn-primary">Enquire Now</Link>
          <Link to="/zh/solutions/wechat" className="btn btn-link ms-2">中文</Link>
        </div>
      </div>
    </div>
  );
}

export default WechatEShopEN;
