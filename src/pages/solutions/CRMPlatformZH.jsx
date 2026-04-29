import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function CRMPlatformZH() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/crm-platform.jpg" alt="CRM 平台" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">CRM 基礎平台</h1>
            <p className="lead">開源標準 CRM 平台，按行業需求配置定制</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>概述</h2>
            <p className="lead">我們採用開源標準 CRM 平台，並按您的行業需求進行配置及定制開發。</p>
            <p>我們精選的平台包括 <strong>SugarCRM</strong>、<strong>SuiteCRM</strong> 和 <strong>OdooCRM</strong>。CRM 基礎平台是進行行業定制增強的優質基石，可與您的網站門戶、客戶 APP、合作夥伴 APP、WhatsApp 對話及內部 ERP 系統無縫整合。</p>
          </div>
          <div className="col-lg-4">
            <div className="card bg-light">
              <div className="card-body">
                <h5>平台選擇</h5>
                <ul className="mb-0">
                  <li>SugarCRM</li>
                  <li>SuiteCRM</li>
                  <li>OdooCRM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row mt-5">
          <div className="col-12">
            <h3 className="mb-4">標準 CRM 模組</h3>
          </div>
          {[
            { title: '銷售管理', desc: '從潛在客戶到成交的完整銷售週期，配備銷售管線視圖及預測功能。' },
            { title: '營銷自動化', desc: '營銷活動管理、電郵營銷、潛在客戶評分及培育工作流程。' },
            { title: '客戶服務', desc: '案例管理、知識庫及多渠道支援（電郵、電話、在線聊天）。' },
            { title: '分析與報告', desc: '實時儀表板、KPI 追蹤及自訂報告生成器。' },
            { title: '文檔管理', desc: '附加、儲存及管理與任何 CRM 記錄關聯的文檔。' },
            { title: '工作流程自動化', desc: '透過自訂業務規則及流程自動化處理重複性任務。' },
          ].map((item, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <div className="card h-100">
                <div className="card-body">
                  <h6>{item.title}</h6>
                  <p className="small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <h3>行業定制增強</h3>
            <p>我們根據醫學美容、保險、零售、酒店等多個行業擴展 CRM 基礎功能。自訂整合確保與現有系統的無縫數據流動。</p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/zh/solutions" className="btn btn-outline-secondary me-2">← 返回方案</Link>
          <Link to="/zh/contact" className="btn btn-primary">立即查詢</Link>
          <Link to="/en/solutions/crm" className="btn btn-link ms-2">English</Link>
        </div>
      </div>
    </div>
  );
}

export default CRMPlatformZH;
