import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function TouchpointsEN() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/touchpoints.jpg" alt="Extended Touchpoints" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">Extended Touchpoints</h1>
            <p className="lead">Connect with customers, partners and staff — anywhere, anytime</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>Overview</h2>
            <p className="lead">We extend our solutions with different touchpoints including Web Portal, Mobile Web, APP, and social channels including WhatsApp and WeChat.</p>
            <p>We connect our solution to your customers, partners and staff — creating a seamless experience across all communication and engagement channels.</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          {[
            { title: 'Web Portal', desc: 'Self-service portal for customers and partners to view orders, invoices, cases, and manage their accounts. Fully branded and customizable.', icon: '🌐' },
            { title: 'Mobile Web', desc: 'Responsive web applications optimized for smartphones. No app download required — access via browser with full functionality.', icon: '📱' },
            { title: 'Mobile APP', desc: 'Native and cross-platform mobile apps (iOS & Android) for field teams, service technicians, and customer-facing features. Push notifications included.', icon: '📲' },
            { title: 'WhatsApp Integration', desc: 'Connect WhatsApp Business with your CRM/ERP. Chatbot automation, message templates, conversation tracking, and CRM case creation.', icon: '💬' },
            { title: 'WeChat Integration', desc: 'WeChat Official Account and Mini Program integration. Customer identity verification, in-app purchases, and WeChat Pay connectivity.', icon: '💚' },
            { title: 'Customer Portal', desc: 'Dedicated portal for B2B customers to manage quotes, purchase orders, track shipments, and download invoices — all in real-time.', icon: '🔐' },
          ].map((item, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h4 className="mb-2">{item.icon} {item.title}</h4>
                  <p className="small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row align-items-center bg-light rounded p-4">
          <div className="col-md-8">
            <h4>Omnichannel Experience</h4>
            <p className="mb-0">All touchpoints are fully integrated with your central CRM/ERP. Whether a customer contacts you via WhatsApp, your website, or in-person — your team sees the complete interaction history and can respond consistently across all channels.</p>
          </div>
          <div className="col-md-4 text-center">
            <h2 className="text-primary">360°</h2>
            <p className="small mb-0">Customer View</p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/en/solutions" className="btn btn-outline-secondary me-2">← Back to Solutions</Link>
          <Link to="/en/contact" className="btn btn-primary">Enquire Now</Link>
          <Link to="/zh/solutions/touchpoints" className="btn btn-link ms-2">中文</Link>
        </div>
      </div>
    </div>
  );
}

export default TouchpointsEN;
