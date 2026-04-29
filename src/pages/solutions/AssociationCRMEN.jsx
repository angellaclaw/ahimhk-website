import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AssociationCRMEN() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/association-crm.jpg" alt="Association CRM and Events" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">Association CRM & Events</h1>
            <p className="lead">The award-winning CRM for Associations, NGOs & Non-Profits</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>Overview</h2>
            <p className="lead">Our Member CRM solution is perfect to manage your organization / association.</p>
            <p>It keeps detailed information of each member, their activities, credentials, service records, and committee work. Additionally, it also provides an event calendar, ticket purchase, and industry directory with member profile pages and eBusiness Card.</p>
          </div>
        </div>

        <div className="row g-4 mb-4">
          {[
            { title: 'Member Profiles', desc: 'Track member information, credentials, group participation, and service history. Support for individual and corporate members.', icon: '🪪' },
            { title: 'Membership Management', desc: 'Multiple membership types, auto-renewal reminders, member card issuance (physical + digital QR), and expiry tracking.', icon: '🎫' },
            { title: 'Activity Tracking', desc: 'Log event attendance, donations, meetings, calls, emails, and WhatsApp messages — all linked to member records.', icon: '📝' },
            { title: 'Invoice & Payments', desc: 'Generate invoices for membership dues and donations. Accept online/offline payments including FPS, Alipay, WeChat Pay.', icon: '💳' },
            { title: 'Event Management', desc: 'Event profile setup, ticket types, pricing tiers, QR code tickets, and sync to member portal for registration.', icon: '🎟️' },
            { title: 'Member Portal', desc: 'Self-service for members: inbox messages, event registration, ticket purchase, profile management, and donation tracking.', icon: '🖥️' },
            { title: 'eBusiness Cards', desc: 'Digital business cards with QR code and NFC scan to WhatsApp. Member profile page for industry directory.', icon: '💼' },
            { title: 'Newsletter Tools', desc: 'Send newsletters and announcements via email, WhatsApp chatbot, SMS, or VOIP broadcast.', icon: '📣' },
          ].map((item, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div className="card h-100">
                <div className="card-body">
                  <h6>{item.icon} {item.title}</h6>
                  <p className="small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="alert alert-success mt-4">
          <strong>🏆 Award-Winning:</strong> Membership CRM is the award-winning tool for associations, NGOs and non-profit organizations to manage members. Built on SugarCRM with ready tools for record management, dashboards and reporting.
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/en/solutions" className="btn btn-outline-secondary me-2">← Back to Solutions</Link>
          <Link to="/en/contact" className="btn btn-primary">Enquire Now</Link>
          <Link to="/zh/solutions/association" className="btn btn-link ms-2">中文</Link>
        </div>
      </div>
    </div>
  );
}

export default AssociationCRMEN;
