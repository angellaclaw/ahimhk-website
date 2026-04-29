import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function RetailERPZH() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/retail-erp.jpg" alt="一體化零售 ERP" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">一體化零售 ERP</h1>
            <p className="lead">完整零售方案 — 從 POS 到後台管理</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>概述</h2>
            <p className="lead">我們的一體化零售 ERP 是完整的零售解決方案，助您輕鬆管理業務。</p>
            <p>配備<strong>強大會員管理</strong>、<strong>忠誠獎賞</strong>、<strong>促銷優惠</strong>，同時包含<strong>POS</strong>、<strong>網店</strong>及<strong>後台庫存管理</strong>！</p>
          </div>
        </div>

        <div className="row g-4 mb-4">
          {[
            { title: '會員管理', desc: '追蹤會員資料、等級、購買歷史及偏好。支援實體卡及電子會員卡。', icon: '👥' },
            { title: '忠誠獎賞', desc: '積分累計、積分兌換、生日獎賞、等級福利及推薦獎金。', icon: '🎁' },
            { title: '促銷引擎', desc: '買一送一、套餐折扣、限時優惠、會員專屬價及優惠券管理。', icon: '🏷️' },
            { title: '零售收銀 (POS)', desc: '觸摸屏 POS、條碼掃描、多元支付、班次管理及實時銷售同步。', icon: '🖥️' },
            { title: '網店 (B2C)', desc: '響應式設計網店、購物車、安全結帳，與實體店共享同一庫存。', icon: '🛒' },
            { title: '庫存管理', desc: '跨多門店庫存追蹤、補貨提醒、條碼管理及供應商門戶。', icon: '📦' },
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

        <div className="row mt-4">
          <div className="col-12">
            <h3>預設整合</h3>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-light rounded text-center">
              <strong>Shopify</strong>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-light rounded text-center">
              <strong>WooCommerce</strong>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-light rounded text-center">
              <strong>Magento</strong>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-light rounded text-center">
              <strong>OdooPOS</strong>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/zh/solutions" className="btn btn-outline-secondary me-2">← 返回方案</Link>
          <Link to="/zh/contact" className="btn btn-primary">立即查詢</Link>
          <Link to="/en/solutions/retail-erp" className="btn btn-link ms-2">English</Link>
        </div>
      </div>
    </div>
  );
}

export default RetailERPZH;
