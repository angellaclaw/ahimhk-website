import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function POSRetailEN() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/pos-system.jpg" alt="Point of Sales" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">Point of Sales (POS)</h1>
            <p className="lead">Seamless retail operations with POS & ERP integration</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>Overview</h2>
            <p className="lead">Our ERP solution has ready integration with your POS system. You can also use our Odoo based All-in-One retail solution which features strong member loyalty, promotion and rewards.</p>
            <p>Whether you operate a single store or a chain of retail outlets, our POS solutions are designed to streamline checkout, track inventory in real-time, and deliver an exceptional customer experience.</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <h4>POS Features</h4>
            <ul className="list-group">
              {[
                'Touch screen optimized interface',
                'Barcode & QR code scanning',
                'Multi-payment support (Cash, Card, FPS, Alipay, WeChat Pay)',
                'Real-time inventory synchronization',
                'Receipt printing & email receipts',
                'Shift management & cash drawer tracking',
                'Discount & promotion application',
                'Return & exchange handling',
              ].map((f, i) => <li className="list-group-item" key={i}><small>{f}</small></li>)}
            </ul>
          </div>
          <div className="col-md-6">
            <h4>Integration Benefits</h4>
            <ul className="list-group">
              {[
                'Direct link to ERP for sales orders',
                'Automatic stock deduction on sale',
                'Member loyalty points accumulation',
                'Promotion rules from central ERP',
                'Cross-store sales lookup',
                'Centralized reporting across all outlets',
                'Gift card & store credit support',
                'Table ordering for food & beverage',
              ].map((f, i) => <li className="list-group-item" key={i}><small>{f}</small></li>)}
            </ul>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="/images/detail/retail-erp.jpg" alt="POS System" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <h4>Ready for Retail & Food & Beverage</h4>
            <p>Our POS systems are suitable for a wide range of retail environments including fashion, electronics, groceries, as well as restaurants and cafés with table management and kitchen display system (KDS) integration.</p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/en/solutions" className="btn btn-outline-secondary me-2">← Back to Solutions</Link>
          <Link to="/en/contact" className="btn btn-primary">Enquire Now</Link>
          <Link to="/zh/solutions/pos" className="btn btn-link ms-2">中文</Link>
        </div>
      </div>
    </div>
  );
}

export default POSRetailEN;
