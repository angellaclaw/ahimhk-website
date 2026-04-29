import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ERPPlatformEN() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/erp-platform.jpg" alt="ERP Platform" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">ERP Base Platform</h1>
            <p className="lead">Built on OdooERP — sophisticated, user-friendly, and scalable</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>Overview</h2>
            <p className="lead">Our ERP based solutions are designed for customers in different industries. We use the OdooERP platform for further customizations.</p>
            <p>This approach allows us to provide you with a solution that is both <strong>sophisticated</strong> and <strong>user-friendly</strong>, catering to the unique needs of your business. Odoo ERP is a suite of integration applications that can manage your entire business.</p>
          </div>
        </div>

        <h3 className="mb-4">Core ERP Modules</h3>
        <div className="row g-4 mb-5">
          {[
            { title: 'Sales Team Management', desc: 'Lead management, opportunity tracking, sales pipeline, commission tracking, and performance analytics.' },
            { title: 'Service Team Management', desc: 'Service request handling, technician scheduling, job tracking, and service level agreements.' },
            { title: 'Quotation & Sales Orders', desc: 'Professional quotes, pricing rules, discounts, online approvals, and convert to invoices.' },
            { title: 'Purchase & Inventory', desc: 'Purchase requisitions, supplier management, stock control, multi-warehouse, and barcode scanning.' },
            { title: 'Finance & Accounting', desc: 'General ledger, accounts payable/receivable, bank reconciliation, and financial reporting.' },
            { title: 'Point of Sales (POS)', desc: 'Retail POS with touch screen, barcode scanning, loyalty cards, and real-time inventory sync.' },
            { title: 'eShop & Website Portal', desc: 'B2C and B2B online stores with product catalog, shopping cart, payment gateway integration.' },
            { title: 'Project Management', desc: 'Task planning, resource allocation, Gantt charts, timesheets, and milestone billing.' },
          ].map((item, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h6 className="text-primary">{item.title}</h6>
                  <p className="small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="alert alert-info">
          <strong>Odoo ERP</strong> — A complete, integrated suite of business applications trusted by thousands of companies worldwide. Our team specializes in Odoo customization and deployment across Hong Kong and the Asia-Pacific region.
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/en/solutions" className="btn btn-outline-secondary me-2">← Back to Solutions</Link>
          <Link to="/en/contact" className="btn btn-primary">Enquire Now</Link>
          <Link to="/zh/solutions/erp" className="btn btn-link ms-2">中文</Link>
        </div>
      </div>
    </div>
  );
}

export default ERPPlatformEN;
