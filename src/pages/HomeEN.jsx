import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomeEN() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="position-relative" style={{ maxHeight: '400px', overflow: 'hidden' }}>
        <img src="/images/hero1.jpg" alt="Corporate Hero" className="w-100" style={{ objectFit: 'cover', maxHeight: '400px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.45)' }}>
          <div className="container text-white text-center">
            <h1 className="display-4 fw-bold">Aoba Hopkins Information Management</h1>
            <p className="lead">Professional CRM & ERP Solutions for Your Business</p>
            <Link to="/en/contact" className="btn btn-light btn-lg mt-2">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Solutions Overview */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Our Solution Platforms</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/tech1.jpg" alt="CRM" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">CRM Base Platform</h5>
                <p className="card-text">We work with open standard CRM platforms including SugarCRM, SuiteCRM and OdooCRM, configured for your industry needs.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/tech2.jpg" alt="ERP" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">ERP Base Platform</h5>
                <p className="card-text">Our ERP solutions are built on the OdooERP platform with strong functionality modules and custom enhancements.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/hero2.jpg" alt="eShop" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">eShop B2C / B2B</h5>
                <p className="card-text">Ready integration with Shopify, WooCommerce, Magento, and Odoo-based All-in-One retail solutions.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/detail/pos-system.jpg" alt="Point of Sales" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Point of Sales</h5>
                <p className="card-text">ERP solution with ready POS integration. Odoo-based All-in-One retail with member loyalty and rewards.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/detail/touchpoints.jpg" alt="Extended Touchpoints" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Extended Touchpoints</h5>
                <p className="card-text">Web Portal, Mobile Web, APP, WhatsApp, WeChat — connecting you with customers, partners and staff.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/detail/data-integration.jpg" alt="Data Integration" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Data Integration</h5>
                <p className="card-text">Strong integration via XML RPC, Restful, JSON, and CSV with robust security for cross-platform connectivity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4">Latest News</h2>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card h-100">
                <img src="/images/hero2.jpg" alt="Odoo Roadshow" className="card-img-top" style={{ height: '120px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5>Odoo Roadshow Guangzhou</h5>
                  <p>Aoba Hopkins was honored to be invited as session sharing speaker for the event.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card h-100">
                <img src="/images/hero3.jpg" alt="InnoEX" className="card-img-top" style={{ height: '120px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5>InnoEX Aoba + Odoo 2023</h5>
                  <p>Showcasing our latest ERP and CRM solutions at the innovation expo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Showcase */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Solution Showcase</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100">
              <img src="/images/hero3.jpg" alt="Member CRM" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5>Member CRM for Retail</h5>
                <p>Medical and Beauty CRM for chain service centers. Manage members, service coupons, booking calendars, and service portals.</p>
                <Link to="/en/solutions" className="btn btn-outline-primary">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5>All-in-One Retail ERP</h5>
                <p>Complete retail solution with member management, loyalty rewards, promotion offers, POS, eShop and backend inventory.</p>
                <Link to="/en/solutions" className="btn btn-outline-primary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language Switcher */}
      <div className="text-center py-4 border-top">
        <Link to="/zh" className="btn btn-outline-primary">中文</Link>
      </div>
    </div>
  );
}

export default HomeEN;
