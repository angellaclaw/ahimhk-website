import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function MemberCRMRetailEN() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/member-crm.jpg" alt="Member CRM for Retail" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">Member CRM for Retail</h1>
            <p className="lead">CRM for Medical, Beauty & Wellness Chains</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>Overview</h2>
            <p className="lead">Our Medical and Beauty CRM helps you manage your chain medical beauty service centers.</p>
            <p>Members can purchase service coupons with multiple entitlements. With the booking calendar, they can book services with the available roster (room, equipment, service technician). Additionally, the service portal allows each service center to easily manage their operations.</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <h5>📋 Member Management</h5>
            <ul className="list-group mb-3">
              <li className="list-group-item">Member profiles with photo, contact & preferences</li>
              <li className="list-group-item">Multiple membership tiers (Gold, Silver, Bronze)</li>
              <li className="list-group-item">Member card with QR code / NFC</li>
              <li className="list-group-item">Link family members to one account</li>
              <li className="list-group-item">Membership expiry & renewal tracking</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>🎫 Service Coupons & Entitlements</h5>
            <ul className="list-group mb-3">
              <li className="list-group-item">Prepaid service packages</li>
              <li className="list-group-item">Multiple entitlements per coupon</li>
              <li className="list-group-item">Package validity tracking</li>
              <li className="list-group-item">Transferable / non-transferable options</li>
              <li className="list-group-item">Auto-reminder for unused packages</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>📅 Booking Calendar</h5>
            <ul className="list-group mb-3">
              <li className="list-group-item">Room, equipment & technician scheduling</li>
              <li className="list-group-item">Real-time availability display</li>
              <li className="list-group-item">Conflict detection & overlap prevention</li>
              <li className="list-group-item">SMS / WhatsApp booking confirmation</li>
              <li className="list-group-item">Walk-in & appointment booking</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>🖥️ Service Portal</h5>
            <ul className="list-group mb-3">
              <li className="list-group-item">Self-service booking for members</li>
              <li className="list-group-item">View treatment history</li>
              <li className="list-group-item">Purchase new packages online</li>
              <li className="list-group-item">eStatement & payment records</li>
              <li className="list-group-item">Member feedback & ratings</li>
            </ul>
          </div>
        </div>

        <div className="alert alert-primary">
          <strong>Industry Proven:</strong> Successfully deployed for chain medical beauty centers, dental clinics, hair salons, and wellness spas across Hong Kong and the region.
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/en/solutions" className="btn btn-outline-secondary me-2">← Back to Solutions</Link>
          <Link to="/en/contact" className="btn btn-primary">Enquire Now</Link>
          <Link to="/zh/solutions/member-crm" className="btn btn-link ms-2">中文</Link>
        </div>
      </div>
    </div>
  );
}

export default MemberCRMRetailEN;
