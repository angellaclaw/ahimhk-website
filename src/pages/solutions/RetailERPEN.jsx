import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function RetailERPEN() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/retail-erp.jpg" alt="All-in-One Retail ERP" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">All-in-One Retail ERP</h1>
            <p className="lead">Complete retail solution — from POS to back-office</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>Overview</h2>
            <p className="lead">Our All-in-One Retail ERP is a complete and ready retail solution to help your business.</p>
            <p>It features <strong>strong member management</strong>, <strong>loyalty rewards</strong>, <strong>promotion offers</strong>. It also includes <strong>POS</strong>, <strong>eShop</strong> and <strong>backend inventory management</strong> too!</p>
          </div>
        </div>

        <div className="row g-4 mb-4">
          {[
            { title: 'Member Management', desc: 'Track member profiles, tiers, purchase history, and preferences. Supports physical cards and digital eCards.', icon: '👥' },
            { title: 'Loyalty & Rewards', desc: 'Points accumulation, redemption, birthday rewards, tier-based benefits, and referral bonuses.', icon: '🎁' },
            { title: 'Promotion Engine', desc: 'Buy-one-get-one, bundle discounts, time-limited offers, member-exclusive pricing, and coupon management.', icon: '🏷️' },
            { title: 'Point of Sales', desc: 'Touch-screen POS with barcode scanning, multi-payment, shift management, and real-time sales sync.', icon: '🖥️' },
            { title: 'eShop (B2C)', desc: 'Online store with responsive design, shopping cart, secure checkout, and same inventory as physical store.', icon: '🛒' },
            { title: 'Inventory Management', desc: 'Stock tracking across multiple outlets, reorder alerts, barcode management, and supplier portal.', icon: '📦' },
          ].map((item, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card h-100">
                <div className="card-body">
                  <h5>{item.icon} {item.title}</h5>
                  <p className="small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <h3>Ready Integrations</h3>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-light rounded text-center">
              <strong>Shopify</strong>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-light rounded text-center">
              <strong>WooCommerce</strong>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-light rounded text-center">
              <strong>Magento</strong>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-light rounded text-center">
              <strong>OdooPOS</strong>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/en/solutions" className="btn btn-outline-secondary me-2">← Back to Solutions</Link>
          <Link to="/en/contact" className="btn btn-primary">Enquire Now</Link>
          <Link to="/zh/solutions/retail-erp" className="btn btn-link ms-2">中文</Link>
        </div>
      </div>
    </div>
  );
}

export default RetailERPEN;
