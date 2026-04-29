import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactEN() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="position-relative" style={{ maxHeight: '300px', overflow: 'hidden' }}>
        <img src="/images/contact/contact-hero.jpg" alt="Contact AH Solutions" className="w-100" style={{ objectFit: 'cover', maxHeight: '300px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">Contact Us</h1>
            <p className="lead">Let's start a conversation</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm h-100">
              <img src="/images/contact/contact-office.jpg" alt="AH Solutions Office" className="card-img-top" style={{ height: '220px', objectFit: 'cover' }} />
              <div className="card-body">
                <h4 className="fw-bold">Get in Touch</h4>
                <p className="text-muted">We're here to help you with your digital transformation journey.</p>

                <div className="mb-4">
                  <h6 className="fw-bold text-primary">📱 WhatsApp</h6>
                  <p className="mb-0 ms-3"><a href="https://wa.me/85265884054" target="_blank" rel="noreferrer">+852 6588 4054</a></p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold text-primary">📧 Email</h6>
                  <p className="mb-0 ms-3"><a href="mailto:info@ahimhk.com.hk">info@ahimhk.com.hk</a></p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold text-primary">🌐 Website</h6>
                  <p className="mb-0 ms-3"><a href="https://www.ahimhk.com" target="_blank" rel="noreferrer">www.ahimhk.com</a></p>
                </div>

                <div className="mb-3">
                  <h6 className="fw-bold text-primary">💼 Company</h6>
                  <p className="mb-0 ms-3 text-muted small">AH Solutions Limited</p>
                </div>

                <div className="alert alert-light border small">
                  <strong>Serving:</strong> Hong Kong · China · Macau · Asia-Pacific
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-3">Send Us a Message</h4>
                <p className="text-muted small mb-4">Fill in the form below and we'll get back to you within 1 business day.</p>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Your Name *</label>
                      <input type="text" className="form-control" placeholder="John Smith" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Company</label>
                      <input type="text" className="form-control" placeholder="Your Company Ltd." />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">Email Address *</label>
                      <input type="email" className="form-control" placeholder="john@company.com" required />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">Interested In</label>
                      <select className="form-select">
                        <option value="">-- Select a solution --</option>
                        <option>CRM Solutions (SugarCRM / SuiteCRM / OdooCRM)</option>
                        <option>ERP Solutions (OdooERP)</option>
                        <option>Retail POS &amp; Loyalty Solutions</option>
                        <option>eCommerce (B2C / B2B / WeChat)</option>
                        <option>Member CRM for Associations / NGOs</option>
                        <option>Data Integration &amp; API</option>
                        <option>Other / General Enquiry</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">Your Message *</label>
                      <textarea className="form-control" rows="4" placeholder="Tell us about your project or challenges..." required></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100 fw-semibold">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/zh/contact" className="btn btn-outline-secondary">中文</Link>
        </div>
      </div>
    </div>
  );
}

export default ContactEN;
