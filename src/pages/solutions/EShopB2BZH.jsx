import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function EShopB2BZH() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/eshop-b2b.jpg" alt="電子商務 B2C B2B" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">電子商務 B2C / B2B</h1>
            <p className="lead">將您的網店與 ERP 無縫連接</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>概述</h2>
            <p className="lead">我們的方案平台與多個行業電子商務方案無縫整合，包括 Shopify、WooCommerce 和 Magento。</p>
            <p>您亦可使用我們<strong>基於 Odoo 的一體化零售方案</strong>，集產品目錄、庫存管理、訂單處理、支付網關及物流整合於單一統一平台。</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h3 className="text-primary">Shopify</h3>
                <p className="small">預設連接器，同步產品、訂單、庫存及客戶數據。適合時裝、美容及生活品牌。</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h3 className="text-primary">WooCommerce</h3>
                <p className="small">WordPress 電子商務系統，與 ERP 全面整合，支援產品管理、訂單追蹤及自動化會計分錄。</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h3 className="text-primary">Magento</h3>
                <p className="small">企業級電子商務平台，具備 B2B 功能。與 ERP 整合，定價規則、報價管理及客戶細分一應俱全。</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mb-3">一體化 Odoo 網店功能</h3>
        <div className="row">
          <div className="col-md-6">
            {[
              '產品目錄（含變體及屬性）',
              '動態定價及折扣規則',
              'B2B 客戶專屬定價',
              '購物車及願望清單',
              '多元支付網關',
              '多元物流方式整合',
            ].map((f, i) => <div key={i} className="mb-2"><small>✓ {f}</small></div>)}
          </div>
          <div className="col-md-6">
            {[
              '實時庫存同步',
              '銷售訂單自動生成',
              '客戶帳戶管理',
              '訂單歷史及再次訂購',
              '禮品包裝及促銷碼',
              '多語言及多貨幣',
            ].map((f, i) => <div key={i} className="mb-2"><small>✓ {f}</small></div>)}
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/zh/solutions" className="btn btn-outline-secondary me-2">← 返回方案</Link>
          <Link to="/zh/contact" className="btn btn-primary">立即查詢</Link>
          <Link to="/en/solutions/eshop" className="btn btn-link ms-2">English</Link>
        </div>
      </div>
    </div>
  );
}

export default EShopB2BZH;
