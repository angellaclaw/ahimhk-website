import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function DataIntegrationZH() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/data-integration.jpg" alt="數據整合" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">數據整合</h1>
            <p className="lead">跨平台連接、同步及保護您的業務數據</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>概述</h2>
            <p className="lead">我們的項目具備強大的數據整合能力。我們的解決方案確保 CRM、ERP、電子商務平台及第三方系統之間的無縫數據流動。</p>
            <p>我們同時提供<strong>強大的安全機制</strong>，確保在連接其他平台時保護您的業務數據。</p>
          </div>
        </div>

        <h3 className="mb-4">整合協議</h3>
        <div className="row g-4 mb-5">
          {[
            { title: 'XML RPC', desc: '使用 XML 編碼呼叫的遠程過程調用協議。Odoo、SugarCRM 等主要 ERP/CRM 平台廣泛支援。' },
            { title: 'RESTful API', desc: '使用 JSON 的現代靈活 API 架構，適合網頁及流動整合，支援 OAuth 2.0 認證。' },
            { title: 'JSON / REST', desc: '輕量級數據交換格式，易於實施，跨系統及程式語言廣泛兼容。' },
            { title: 'CSV 導入/導出', desc: '大型數據集的批量數據交換，配備驗證規則及錯誤報告的定期導入/導出功能。' },
          ].map((item, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="text-primary">{item.title}</h6>
                  <p className="small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mb-4">整合場景</h3>
        <div className="row">
          {[
            { title: 'CRM ↔ ERP 同步', desc: '在 CRM 與 ERP 系統之間雙向同步客戶、銷售訂單及庫存數據。' },
            { title: '電子商務整合', desc: '實時產品目錄更新、訂單導入、庫存水平及貨運追蹤。' },
            { title: '支付網關', desc: '連接 Stripe、PayPal、FPS、支付寶、微信支付，實現無縫網上支付處理。' },
            { title: '物流及快遞', desc: '整合順豐、嘉里、DHL、UPS，自動生成運單及追蹤。' },
            { title: '會計軟件', desc: '自動將發票及付款推送至 Xero、QuickBooks 或本地會計系統。' },
            { title: '物聯網及硬件', desc: '透過區域網絡或藍牙連接條碼掃描器、磅秤及 POS 終端機。' },
          ].map((item, i) => (
            <div className="col-md-6 mb-3" key={i}>
              <div className="d-flex">
                <span className="me-2 text-primary fw-bold">›</span>
                <div>
                  <strong>{item.title}</strong>
                  <p className="small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="alert alert-warning mt-4">
          <strong>🔒 安全優先：</strong> 所有整合均採用行業標準認證（OAuth 2.0、API 密鑰、IP 白名單）及加密數據傳輸（TLS/SSL），保護您的業務數據。
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/zh/solutions" className="btn btn-outline-secondary me-2">← 返回方案</Link>
          <Link to="/zh/contact" className="btn btn-primary">立即查詢</Link>
          <Link to="/en/solutions/data" className="btn btn-link ms-2">English</Link>
        </div>
      </div>
    </div>
  );
}

export default DataIntegrationZH;
