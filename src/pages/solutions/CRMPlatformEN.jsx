import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function CRMPlatformEN() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/crm-platform.jpg" alt="CRM Platform" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">CRM Base Platform</h1>
            <p className="lead">Open standard CRM platforms, configured for your industry</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>Overview</h2>
            <p className="lead">We work with open standard CRM platforms and then further configure / customize for your industry requirements.</p>
            <p>Our selected platforms include <strong>SugarCRM</strong>, <strong>SuiteCRM</strong> and <strong>OdooCRM</strong>. The CRM base is a good platform for further industry enhancements. It can be integrated with your website portal, customer APP, partner APP, WhatsApp conversations, and your internal ERP systems.</p>
          </div>
          <div className="col-lg-4">
            <div className="card bg-light">
              <div className="card-body">
                <h5>Platform Options</h5>
                <ul className="mb-0">
                  <li>SugarCRM</li>
                  <li>SuiteCRM</li>
                  <li>OdooCRM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row mt-5">
          <div className="col-12">
            <h3 className="mb-4">Ready CRM Modules</h3>
          </div>
          {[
            { title: 'Sales Management', desc: 'Full sales cycle from lead to close, with pipeline visualization and forecasting.' },
            { title: 'Marketing Automation', desc: 'Campaign management, email marketing, lead scoring, and nurturing workflows.' },
            { title: 'Customer Service', desc: 'Case management, knowledge base, and multi-channel support (email, phone, chat).' },
            { title: 'Analytics & Reporting', desc: 'Real-time dashboards, KPI tracking, and custom report builder.' },
            { title: 'Document Management', desc: 'Attach, store, and manage documents linked to any CRM record.' },
            { title: 'Workflow Automation', desc: 'Automate repetitive tasks with custom business rules and process automation.' },
          ].map((item, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <div className="card h-100">
                <div className="card-body">
                  <h6>{item.title}</h6>
                  <p className="small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <h3>Industry-Specific Enhancements</h3>
            <p>We extend the CRM base with industry-specific modules for Medical & Beauty, Insurance, Retail, Hospitality, and more. Custom integrations with your existing systems ensure seamless data flow across your organization.</p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/en/solutions" className="btn btn-outline-secondary me-2">← Back to Solutions</Link>
          <Link to="/en/contact" className="btn btn-primary">Enquire Now</Link>
          <Link to="/zh/solutions/crm" className="btn btn-link ms-2">中文</Link>
        </div>
      </div>
    </div>
  );
}

export default CRMPlatformEN;
