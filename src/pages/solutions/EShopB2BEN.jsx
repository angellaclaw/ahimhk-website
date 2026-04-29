import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function EShopB2BEN() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/eshop-b2b.jpg" alt="eShop B2C B2B" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">eShop B2C / B2B</h1>
            <p className="lead">Connect your online store with your ERP — seamlessly</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>Overview</h2>
            <p className="lead">Our solution platform has ready integration with many industry solutions including Shopify, WooCommerce and Magento.</p>
            <p>You can also use our <strong>Odoo based All-in-One retail solution</strong> which features product catalog, inventory management, order processing, payment gateway, and shipping integration — all within a single unified platform.</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h3 className="text-primary">Shopify</h3>
                <p className="small">Ready connector to sync products, orders, inventory, and customer data with your ERP. Perfect for fashion, beauty, and lifestyle brands.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h3 className="text-primary">WooCommerce</h3>
                <p className="small">WordPress-based e-commerce with full ERP integration for product management, order tracking, and automated accounting entries.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h3 className="text-primary">Magento</h3>
                <p className="small">Enterprise-grade e-commerce platform with B2B features. Integrates with ERP for pricing rules, quote management, and customer segmentation.</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mb-3">All-in-One Odoo eShop Features</h3>
        <div className="row">
          <div className="col-md-6">
            {[
              'Product catalog with variants & attributes',
              'Dynamic pricing & discount rules',
              'Customer-specific pricing for B2B',
              'Shopping cart & wishlist',
              'Multiple payment gateways',
              'Shipping method integration',
            ].map((f, i) => <div key={i} className="mb-2"><small>✓ {f}</small></div>)}
          </div>
          <div className="col-md-6">
            {[
              'Real-time inventory sync',
              'Sales order auto-creation',
              'Customer account management',
              'Order history & reorder',
              'Gift wrapping & promo codes',
              'Multi-language & multi-currency',
            ].map((f, i) => <div key={i} className="mb-2"><small>✓ {f}</small></div>)}
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/en/solutions" className="btn btn-outline-secondary me-2">← Back to Solutions</Link>
          <Link to="/en/contact" className="btn btn-primary">Enquire Now</Link>
          <Link to="/zh/solutions/eshop" className="btn btn-link ms-2">中文</Link>
        </div>
      </div>
    </div>
  );
}

export default EShopB2BEN;
