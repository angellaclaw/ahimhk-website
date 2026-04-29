import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomeZH() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="position-relative" style={{ maxHeight: '400px', overflow: 'hidden' }}>
        <img src="/images/hero1.jpg" alt="企業形象" className="w-100" style={{ objectFit: 'cover', maxHeight: '400px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.45)' }}>
          <div className="container text-white text-center">
            <h1 className="display-4 fw-bold">Aoba Hopkins 資訊管理顧問</h1>
            <p className="lead">專業 CRM & ERP 企業解決方案</p>
            <Link to="/zh/contact" className="btn btn-light btn-lg mt-2">聯絡我們</Link>
          </div>
        </div>
      </div>

      {/* Solutions Overview */}
      <div className="container py-5">
        <h2 className="text-center mb-4">我們的方案平台</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/tech1.jpg" alt="CRM" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">CRM 基礎平台</h5>
                <p className="card-text">我們採用開源標準 CRM 平台，包括 SugarCRM、SuiteCRM 和 OdooCRM，並按您的行業需求進行配置定制。</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/tech2.jpg" alt="ERP" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">ERP 基礎平台</h5>
                <p className="card-text">我們的 ERP 解決方案建基於 OdooERP 平台，具備強大的功能模組和定制化開發能力。</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/hero2.jpg" alt="電子商務" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">電子商務 B2C / B2B</h5>
                <p className="card-text">與 Shopify、WooCommerce、Magento 以及 Odoo 一體化零售方案無縫整合。</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/detail/pos-system.jpg" alt="零售收銀系統" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">零售收銀系統 (POS)</h5>
                <p className="card-text">ERP 方案配備收銀系統整合，Odoo 一體化零售方案包含會員忠誠度和獎賞計劃。</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/detail/touchpoints.jpg" alt="全方位觸點" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">全方位觸點</h5>
                <p className="card-text">網頁門戶、流動網頁、APP、WhatsApp、微信 — 連接您的客戶、合作夥伴和員工。</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/detail/data-integration.jpg" alt="數據整合" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">數據整合</h5>
                <p className="card-text">透過 XML RPC、Restful、JSON 及 CSV 進行強大的數據整合，確保跨平台安全連接。</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4">最新資訊</h2>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5>Odoo 廣州路演</h5>
                  <p>Aoba Hopkins 很榮幸獲邀擔任活動分享嘉賓。</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5>InnoEX Aoba + Odoo 2023</h5>
                  <p>於創新科技博覽會展示最新 ERP 及 CRM 解決方案。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Showcase */}
      <div className="container py-5">
        <h2 className="text-center mb-4">方案展示</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100">
              <img src="/images/hero3.jpg" alt="會員 CRM" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5>零售會員 CRM</h5>
                <p>醫學美容 CRM，適用於連鎖服務中心。管理會員、服務券、預約日曆和服務門戶。</p>
                <Link to="/zh/solutions" className="btn btn-outline-primary">了解更多</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5>一體化零售 ERP</h5>
                <p>完整零售方案，包含會員管理、忠誠獎賞、促銷優惠、POS、網店及後台庫存管理。</p>
                <Link to="/zh/solutions" className="btn btn-outline-primary">了解更多</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language Switcher */}
      <div className="text-center py-4 border-top">
        <Link to="/en" className="btn btn-outline-primary">English</Link>
      </div>
    </div>
  );
}

export default HomeZH;
