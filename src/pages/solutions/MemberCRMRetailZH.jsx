import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function MemberCRMRetailZH() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/member-crm.jpg" alt="零售會員 CRM" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">零售會員 CRM</h1>
            <p className="lead">醫學、美容及健康連鎖店客戶關係管理</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>概述</h2>
            <p className="lead">我們的醫學美容 CRM 助您管理連鎖醫學美容服務中心。</p>
            <p>會員可購買具多重權益的服務券。配合預約日曆，會員可按可用時段預約房間、設備及服務技師。此外，服務門戶讓各服務中心輕鬆管理營運。</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <h5>📋 會員管理</h5>
            <ul className="list-group mb-3">
              <li className="list-group-item">含照片、聯繫方式及偏好的會員資料</li>
              <li className="list-group-item">多個會員級別（金、銀、銅）</li>
              <li className="list-group-item">附有二維碼 / NFC 的會員卡</li>
              <li className="list-group-item">將家庭成員連接至同一帳戶</li>
              <li className="list-group-item">會籍有效期及續會追蹤</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>🎫 服務券及權益</h5>
            <ul className="list-group mb-3">
              <li className="list-group-item">預付式服務套票</li>
              <li className="list-group-item">每張券多種權益</li>
              <li className="list-group-item">套票有效期追蹤</li>
              <li className="list-group-item">可轉讓/不可轉讓選項</li>
              <li className="list-group-item">未使用套票自動提醒</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>📅 預約日曆</h5>
            <ul className="list-group mb-3">
              <li className="list-group-item">房間、設備及技師排程</li>
              <li className="list-group-item">實時可用時段顯示</li>
              <li className="list-group-item">衝突檢測及重疊預防</li>
              <li className="list-group-item">SMS / WhatsApp 預約確認</li>
              <li className="list-group-item">即場及預約服務</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>🖥️ 服務門戶</h5>
            <ul className="list-group mb-3">
              <li className="list-group-item">會員自助預約</li>
              <li className="list-group-item">查看護理歷史</li>
              <li className="list-group-item">網上購買新套票</li>
              <li className="list-group-item">電子帳單及付款記錄</li>
              <li className="list-group-item">會員反饋及評分</li>
            </ul>
          </div>
        </div>

        <div className="alert alert-primary">
          <strong>行業驗證：</strong>已成功部署於香港及區內多間連鎖醫學美容中心、牙科診所、美容髮廊及健康水療中心。
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/zh/solutions" className="btn btn-outline-secondary me-2">← 返回方案</Link>
          <Link to="/zh/contact" className="btn btn-primary">立即查詢</Link>
          <Link to="/en/solutions/member-crm" className="btn btn-link ms-2">English</Link>
        </div>
      </div>
    </div>
  );
}

export default MemberCRMRetailZH;
