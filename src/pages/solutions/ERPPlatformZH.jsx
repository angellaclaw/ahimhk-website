import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ERPPlatformZH() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/erp-platform.jpg" alt="ERP 平台" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">ERP 基礎平台</h1>
            <p className="lead">建基於 OdooERP — 功能完善、易用且可擴展</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>概述</h2>
            <p className="lead">我們的 ERP 解決方案專為不同行業的客戶而設計，採用 OdooERP 平台進行定制開發。</p>
            <p>這種方式使我們能夠為您提供既<strong>功能完善</strong>又<strong>易於使用</strong>的解決方案，滿足您企業的獨特需求。Odoo ERP 是一套整合性應用套件，能夠管理您的整個業務。</p>
          </div>
        </div>

        <h3 className="mb-4">核心 ERP 模組</h3>
        <div className="row g-4 mb-5">
          {[
            { title: '銷售團隊管理', desc: '潛在客戶管理、機會追蹤、銷售管線、佣金追蹤及績效分析。' },
            { title: '服務團隊管理', desc: '服務請求處理、技術員排程、工作追蹤及服務級別協議。' },
            { title: '報價及銷售訂單', desc: '專業報價、定價規則、折扣、網上審批及轉換發票。' },
            { title: '採購及庫存', desc: '採購申請、供應商管理、庫存控制、多倉庫及條碼掃描。' },
            { title: '財務及會計', desc: '總帳、應付帳款/應收帳款、銀行對帳及財務報告。' },
            { title: '零售收銀系統 (POS)', desc: '觸摸屏零售收銀、條碼掃描、會員卡及實時庫存同步。' },
            { title: '網店及網站門戶', desc: 'B2C 及 B2B 網店，包含產品目錄、購物車及支付網關整合。' },
            { title: '項目管理', desc: '任務規劃、資源分配、甘特圖、工時表及里程碑帳單。' },
          ].map((item, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h6 className="text-primary">{item.title}</h6>
                  <p className="small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="alert alert-info">
          <strong>Odoo ERP</strong> — 完整整合的商業應用套件，全球數千家企業信賴使用。我們的團隊專門提供 Odoo 定制及部署服務，覆蓋香港及亞太地區。
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/zh/solutions" className="btn btn-outline-secondary me-2">← 返回方案</Link>
          <Link to="/zh/contact" className="btn btn-primary">立即查詢</Link>
          <Link to="/en/solutions/erp" className="btn btn-link ms-2">English</Link>
        </div>
      </div>
    </div>
  );
}

export default ERPPlatformZH;
