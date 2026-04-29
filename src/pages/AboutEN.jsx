import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutEN() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/about/about-hero.jpg" alt="About AH Solutions" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">About Us</h1>
            <p className="lead">AH Solutions Limited</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        {/* Company Overview */}
        <div className="row g-4 mb-5">
          <div className="col-lg-6">
            <img src="/images/about/about-team.jpg" alt="AH Solutions Team" className="rounded shadow w-100" style={{ objectFit: 'cover', height: '280px' }} />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2>Who We Are</h2>
            <p className="lead text-muted">Professional IT Consulting Firm</p>
            <p>We are a professional IT consulting firm specializing in CRM and ERP solutions. With years of experience and a dedicated team, we help businesses digitalize their operations and achieve growth.</p>
            <p>Our expertise spans across multiple platforms including <strong>OdooERP</strong>, <strong>SugarCRM</strong>, <strong>SuiteCRM</strong>, and various e-commerce integrations. We serve clients across Hong Kong and the Asia-Pacific region.</p>
            <p>Founded with a passion for technology and business excellence, AH Solutions has been helping organizations transform their operations through innovative IT solutions tailored to their unique needs.</p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <img src="/images/about/about-mission.jpg" alt="Our Mission" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h4 className="text-primary">Our Mission</h4>
                <p className="mb-0">To empower businesses with reliable, scalable, and cost-effective IT solutions that drive operational excellence and sustainable growth.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <img src="/images/about/about-vision.jpg" alt="Our Vision" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h4 className="text-success">Our Vision</h4>
                <p className="mb-0">To be the trusted technology partner for businesses seeking digital transformation in the Greater China and Asia-Pacific region.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="row g-4 mb-5">
          <div className="col-12">
            <h3 className="mb-4">Why Choose AH Solutions?</h3>
          </div>
          {[
            { title: 'Industry Expertise', desc: 'Deep experience across retail, medical beauty, professional services, associations, and e-commerce sectors.', icon: '🏆' },
            { title: 'Proven Platforms', desc: 'Built on world-class CRM and ERP platforms: SugarCRM, SuiteCRM, OdooERP — proven and scalable.', icon: '🛠️' },
            { title: 'Local & Regional Presence', desc: 'Serving Hong Kong, China, Macau and the broader Asia-Pacific region with dedicated support.', icon: '🌏' },
            { title: 'End-to-End Solutions', desc: 'From consulting and implementation to training and ongoing support — we stay with you every step.', icon: '🤝' },
          ].map((item, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body">
                  <h2>{item.icon}</h2>
                  <h6 className="fw-bold">{item.title}</h6>
                  <p className="small text-muted mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/en/contact" className="btn btn-primary me-2">Contact Us</Link>
          <Link to="/zh/about" className="btn btn-outline-secondary">中文</Link>
        </div>
      </div>
    </div>
  );
}

export default AboutEN;
