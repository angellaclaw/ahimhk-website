import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfessionalServicesZH() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/professional-services.jpg" alt="專業服務公司方案" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">專業服務公司方案</h1>
            <p className="lead">建基於 OdooERP — 適合會計師樓、律師事務所及顧問公司</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>概述</h2>
            <p className="lead">我們的專業服務公司方案建基於 OdooERP，適合會計師樓及律師事務所。</p>
            <p>強大的項目管理處理一次性項目、月費項目及顧問項目。項目里程碑監察進度及帳單時間表，項目成本追蹤員工時間、報銷及外判費用。</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          {[
            { title: '項目管理', desc: '處理一次性項目、月費項目及顧問項目。分配任務給員工，設定截止日期及優先順序。', icon: '📋' },
            { title: '項目里程碑', desc: '定義項目里程碑以監察進度及帳單時間表。每個里程碑附帶交付成果及審批工作流程。', icon: '🎯' },
            { title: '時間追蹤', desc: '員工工時表連結至項目。可計費與非計費時間、超時追蹤及生產力報告。', icon: '⏱️' },
            { title: '項目成本', desc: '追蹤員工時間成本、報銷及外判費用。實時比較預算與實際支出。', icon: '💰' },
            { title: '項目摘要', desc: '預算與實際分析以及在製品 (WIP) 分析。自動生成客戶面向的進度報告。', icon: '📊' },
            { title: '帳單及發票', desc: '里程碑式發票、進度帳單及最終發票生成。與會計系統整合，自動生成會計分錄。', icon: '🧾' },
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
            <h4>適用行業</h4>
            <p className="mb-0">我們的專業服務 ERP 已獲會計師樓、律師事務所、建築師事務所、工程顧問公司及管理諮詢公司信任使用，協助他們精確追蹤項目盈利、員工利用率及客戶帳單。</p>
          </div>
          <div className="col-md-4 text-center">
            <h2 className="text-primary">100%</h2>
            <p className="small mb-0">項目可視性</p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/zh/solutions" className="btn btn-outline-secondary me-2">← 返回方案</Link>
          <Link to="/zh/contact" className="btn btn-primary">立即查詢</Link>
          <Link to="/en/solutions/professional" className="btn btn-link ms-2">English</Link>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalServicesZH;
