import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfessionalServicesEN() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/professional-services.jpg" alt="Professional Services Firm" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">Professional Services Firm</h1>
            <p className="lead">Built on OdooERP — for CPA, Law Firms & Consultancies</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>Overview</h2>
            <p className="lead">Our Professional Firm solution is built on OdooERP. It is well suited for CPA and Law Firms.</p>
            <p>The strong Job management handles one time jobs, monthly recurring jobs and other consultancy projects. Job milestones are used to monitor progress as well as billing schedules. Job costing tracks your employee time costs, expense claims, and even external contracting.</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          {[
            { title: 'Job Management', desc: 'Handle one-time jobs, monthly recurring jobs, and consultancy projects. Assign tasks to staff with deadlines and priorities.', icon: '📋' },
            { title: 'Job Milestones', desc: 'Define project milestones to monitor progress and billing schedules. Attach deliverables and approval workflows to each milestone.', icon: '🎯' },
            { title: 'Time Tracking', desc: 'Employee timesheets linked to jobs and projects. Billable vs non-billable time, overtime tracking, and productivity reports.', icon: '⏱️' },
            { title: 'Job Costing', desc: 'Track employee time costs, expense claims, and external contracting fees. Compare budget vs actuals in real-time.', icon: '💰' },
            { title: 'Project Summary', desc: 'Budget vs actuals analysis and WIP (Work-in-Progress) analysis. Generate client-facing progress reports automatically.', icon: '📊' },
            { title: 'Billing & Invoicing', desc: 'Milestone-based invoicing, progress billing, and final invoice generation. Integration with accounting for automatic entries.', icon: '🧾' },
          ].map((item, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card h-100">
                <div className="card-body">
                  <h5>{item.icon} {item.title}</h5>
                  <p className="small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row align-items-center bg-light rounded p-4">
          <div className="col-md-8">
            <h4>Who is it for?</h4>
            <p className="mb-0">Our Professional Services ERP is trusted by CPA firms, law offices, architectural practices, engineering consultancies, and management advisory firms who need to track project profitability, staff utilization, and client billing with precision.</p>
          </div>
          <div className="col-md-4 text-center">
            <h2 className="text-primary">100%</h2>
            <p className="small mb-0">Project Visibility</p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/en/solutions" className="btn btn-outline-secondary me-2">← Back to Solutions</Link>
          <Link to="/en/contact" className="btn btn-primary">Enquire Now</Link>
          <Link to="/zh/solutions/professional" className="btn btn-link ms-2">中文</Link>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalServicesEN;
