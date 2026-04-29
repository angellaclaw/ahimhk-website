import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function DataIntegrationEN() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/data-integration.jpg" alt="Data Integration" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">Data Integration</h1>
            <p className="lead">Connect, sync, and secure your business data across platforms</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>Overview</h2>
            <p className="lead">We have strong data integration capability with our projects. Our solutions ensure seamless data flow between your CRM, ERP, e-commerce platforms, and third-party systems.</p>
            <p>We also provide <strong>strong security</strong> when connecting with other platforms, ensuring your business data is protected at every integration point.</p>
          </div>
        </div>

        <h3 className="mb-4">Integration Protocols</h3>
        <div className="row g-4 mb-5">
          {[
            { title: 'XML RPC', desc: 'Remote procedure call protocol using XML for encoding calls. Widely supported by Odoo, SugarCRM, and other major ERP/CRM platforms.' },
            { title: 'RESTful API', desc: 'Modern, flexible API architecture using JSON. Ideal for web and mobile integrations. Supports OAuth 2.0 authentication.' },
            { title: 'JSON / REST', desc: 'Lightweight data interchange format. Easy to implement and widely compatible across systems and programming languages.' },
            { title: 'CSV Import/Export', desc: 'Bulk data exchange for large datasets. Scheduled import/export with validation rules and error reporting.' },
          ].map((item, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="text-primary">{item.title}</h6>
                  <p className="small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mb-4">Integration Scenarios</h3>
        <div className="row">
          {[
            { title: 'CRM ↔ ERP Sync', desc: 'Sync customers, sales orders, and inventory data bidirectionally between CRM and ERP systems.' },
            { title: 'eCommerce Integration', desc: 'Real-time product catalog updates, order imports, inventory levels, and shipment tracking.' },
            { title: 'Payment Gateway', desc: 'Connect with Stripe, PayPal, FPS, Alipay, WeChat Pay for seamless online payment processing.' },
            { title: 'Shipping & Logistics', desc: 'Integrate with SF Express, Kerry, DHL, UPS for automated shipping label generation and tracking.' },
            { title: 'Accounting Software', desc: 'Push invoices and payments to Xero, QuickBooks, or local accounting systems automatically.' },
            { title: 'IoT & Hardware', desc: 'Connect barcode scanners, weigh scales, and POS terminals via local network or Bluetooth.' },
          ].map((item, i) => (
            <div className="col-md-6 mb-3" key={i}>
              <div className="d-flex">
                <span className="me-2 text-primary fw-bold">›</span>
                <div>
                  <strong>{item.title}</strong>
                  <p className="small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="alert alert-warning mt-4">
          <strong>🔒 Security First:</strong> All integrations are implemented with industry-standard authentication (OAuth 2.0, API keys, IP whitelisting) and encrypted data transmission (TLS/SSL) to protect your business data.
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/en/solutions" className="btn btn-outline-secondary me-2">← Back to Solutions</Link>
          <Link to="/en/contact" className="btn btn-primary">Enquire Now</Link>
          <Link to="/zh/solutions/data" className="btn btn-link ms-2">中文</Link>
        </div>
      </div>
    </div>
  );
}

export default DataIntegrationEN;
