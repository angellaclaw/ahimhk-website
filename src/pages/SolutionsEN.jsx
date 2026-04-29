import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function SolutionsEN() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="position-relative" style={{ maxHeight: '300px', overflow: 'hidden' }}>
        <img src="/images/hero2.jpg" alt="Solutions" className="w-100" style={{ objectFit: 'cover', maxHeight: '300px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.45)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">Our Solutions</h1>
            <p className="lead">Tailored IT solutions for every industry</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        {/* Solution Platforms */}
        <h2 className="mb-3">Our Solution Platforms</h2>
        <p className="text-muted mb-4">Core technology platforms powering your digital transformation</p>
        <div className="row g-4 mb-5">
          {[
            {
              title: 'CRM Base Platform',
              desc: 'Open standard CRM platforms including SugarCRM, SuiteCRM and OdooCRM — configured for your industry needs.',
              img: '/images/detail/crm-platform.jpg',
              link: '/en/solutions/crm',
              tags: ['SugarCRM', 'SuiteCRM', 'OdooCRM'],
            },
            {
              title: 'ERP Base Platform',
              desc: 'Built on OdooERP with core modules for sales, purchase, inventory, finance, POS and eShop.',
              img: '/images/detail/erp-platform.jpg',
              link: '/en/solutions/erp',
              tags: ['OdooERP', 'Sales', 'Finance'],
            },
            {
              title: 'Point of Sales',
              desc: 'ERP solution with ready POS integration. Odoo-based retail with member loyalty and rewards.',
              img: '/images/detail/pos-system.jpg',
              link: '/en/solutions/pos',
              tags: ['Retail POS', 'Loyalty', 'Multi-outlet'],
            },
            {
              title: 'eShop B2C / B2B',
              desc: 'Ready integration with Shopify, WooCommerce, Magento, and Odoo-based All-in-One retail solutions.',
              img: '/images/detail/eshop-b2b.jpg',
              link: '/en/solutions/eshop',
              tags: ['Shopify', 'WooCommerce', 'Magento'],
            },
            {
              title: 'Extended Touchpoints',
              desc: 'Web Portal, Mobile Web, APP, WhatsApp, WeChat — connecting you with customers, partners and staff.',
              img: '/images/detail/touchpoints.jpg',
              link: '/en/solutions/touchpoints',
              tags: ['WhatsApp', 'WeChat', 'Mobile APP'],
            },
            {
              title: 'Data Integration',
              desc: 'Strong integration via XML RPC, Restful, JSON, CSV with robust security for cross-platform connectivity.',
              img: '/images/detail/data-integration.jpg',
              link: '/en/solutions/data',
              tags: ['API', 'XML RPC', 'JSON'],
            },
          ].map((item, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card h-100 shadow-sm">
                <Link to={item.link} className="text-decoration-none">
                  <img src={item.img} alt={item.title} className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title text-dark">{item.title}</h5>
                    <p className="card-text small text-muted">{item.desc}</p>
                    <div className="d-flex flex-wrap gap-1">
                      {item.tags.map((tag, j) => (
                        <span key={j} className="badge bg-secondary small">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Showcase */}
        <hr className="my-5" />
        <h2 className="mb-3">Solution Showcase</h2>
        <p className="text-muted mb-4">Industry-specific solutions proven across Hong Kong and Asia-Pacific</p>
        <div className="row g-4">
          {[
            {
              title: 'Member CRM for Retail',
              desc: 'Medical and Beauty CRM for chain service centers. Members purchase service coupons, book via calendar, and manage via portal.',
              img: '/images/detail/member-crm.jpg',
              link: '/en/solutions/member-crm',
            },
            {
              title: 'All-in-One Retail ERP',
              desc: 'Complete retail solution with member management, loyalty rewards, promotion offers, POS, eShop and backend inventory.',
              img: '/images/detail/retail-erp.jpg',
              link: '/en/solutions/retail-erp',
            },
            {
              title: 'Professional Services Firm',
              desc: 'Built on OdooERP for CPA and Law Firms. Job management with milestones, time tracking, costing, and billing.',
              img: '/images/detail/professional-services.jpg',
              link: '/en/solutions/professional',
            },
            {
              title: 'Association CRM and Events',
              desc: 'Award-winning member management for associations and NGOs. Event ticketing, member portal, eBusiness Cards, newsletters.',
              img: '/images/detail/association-crm.jpg',
              link: '/en/solutions/association',
            },
            {
              title: 'WeChat eShop / Social eShop',
              desc: 'Tap into the China market. Basic eShop with product catalog and WeChat Pay, or enhanced with KOL and multi-tier agency.',
              img: '/images/detail/wechat-eshop.jpg',
              link: '/en/solutions/wechat',
            },
            {
              title: 'Member Directory & eBusiness Cards',
              desc: 'Showcase members with industry filter. eBusiness cards with NFC scan to WhatsApp and QR code to business profile.',
              img: '/images/detail/member-crm.jpg',
              link: '/en/solutions/association',
            },
          ].map((item, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card h-100 shadow-sm">
                <Link to={item.link} className="text-decoration-none">
                  <img src={item.img} alt={item.title} className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title text-dark">{item.title}</h5>
                    <p className="card-text small text-muted">{item.desc}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-3 border-top">
          <Link to="/en/contact" className="btn btn-primary me-2">Get in Touch</Link>
          <Link to="/zh/solutions" className="btn btn-outline-secondary">中文</Link>
        </div>
      </div>
    </div>
  );
}

export default SolutionsEN;
