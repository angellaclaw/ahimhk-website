import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function TouchpointsZH() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/touchpoints.jpg" alt="全方位觸點" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">全方位觸點</h1>
            <p className="lead">透過任何渠道、任何時間聯繫客戶、合作夥伴及員工</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>概述</h2>
            <p className="lead">我們透過不同觸點擴展解決方案，包括網站門戶、流動網頁、APP，以及 WhatsApp 和微信等社交渠道。</p>
            <p>我們將解決方案與您的客戶、合作夥伴及員工連接 — 在所有溝通及互動渠道創造無縫體驗。</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          {[
            { title: '網站門戶', desc: '客戶及合作夥伴自助服務門戶，可查看訂單、發票、案例及管理帳戶。全自訂品牌設計。', icon: '🌐' },
            { title: '流動網頁', desc: '為智能手機優化的響應式網頁應用。無需下載應用 — 透過瀏覽器即可使用完整功能。', icon: '📱' },
            { title: '流動 APP', desc: '原生及跨平台流動應用（iOS 及 Android），適用於外勤團隊、服務技師及客戶面向功能，附帶推送通知。', icon: '📲' },
            { title: 'WhatsApp 整合', desc: '將 WhatsApp Business 與 CRM/ERP 連接。聊天機械人自動化、訊息範本、對話追蹤及 CRM 案例創建。', icon: '💬' },
            { title: '微信整合', desc: '微信公眾號及小程序整合。客戶身份驗證、應用內購買及微信支付連接。', icon: '💚' },
            { title: '客戶門戶', desc: '專屬 B2B 客戶門戶，管理報價、採購訂單、貨運追蹤及發票下載 — 全部實時完成。', icon: '🔐' },
          ].map((item, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h4 className="mb-2">{item.icon} {item.title}</h4>
                  <p className="small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row align-items-center bg-light rounded p-4">
          <div className="col-md-8">
            <h4>全渠道體驗</h4>
            <p className="mb-0">所有觸點均與中央 CRM/ERP 全面整合。無論客戶透過 WhatsApp、網站還是親身聯繫您，您的團隊都能看到完整的互動歷史，並在所有渠道一致回應。</p>
          </div>
          <div className="col-md-4 text-center">
            <h2 className="text-primary">360°</h2>
            <p className="small mb-0">客戶視圖</p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/zh/solutions" className="btn btn-outline-secondary me-2">← 返回方案</Link>
          <Link to="/zh/contact" className="btn btn-primary">立即查詢</Link>
          <Link to="/en/solutions/touchpoints" className="btn btn-link ms-2">English</Link>
        </div>
      </div>
    </div>
  );
}

export default TouchpointsZH;
