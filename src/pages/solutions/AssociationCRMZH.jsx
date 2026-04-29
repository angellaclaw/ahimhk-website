import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AssociationCRMZH() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/association-crm.jpg" alt="協會 CRM 及活動管理" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">協會 CRM 及活動管理</h1>
            <p className="lead">屢獲殊榮的 CRM — 適用於協會、NGO 及非牟利組織</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>概述</h2>
            <p className="lead">我們的會員 CRM 解決方案非常適合管理您的組織或協會。</p>
            <p>保存每位會員的詳細資料、活動記錄、資歷、服務記錄及委員會工作。此外，亦提供活動日曆、門票購買、行業目錄（附會員資料頁及電子名片）。</p>
          </div>
        </div>

        <div className="row g-4 mb-4">
          {[
            { title: '會員資料', desc: '追蹤會員資料、資歷、參與小組及服務歷史。支援個人及企業會員。', icon: '🪪' },
            { title: '會籍管理', desc: '多個會員類型、自動續會提醒、會員卡發放（實體 + 數碼二維碼）及有效期追蹤。', icon: '🎫' },
            { title: '活動記錄', desc: '記錄活動出席、捐贈、會議、通話、電郵及 WhatsApp 訊息 — 全部連結至會員記錄。', icon: '📝' },
            { title: '發票及付款', desc: '為會費及捐贈生成發票。支援 FPS、支付寶、微信支付等多種線上/線下付款方式。', icon: '💳' },
            { title: '活動管理', desc: '活動資料設定、門票類型、定價層次、二維碼門票，及同步至會員門戶供報名。', icon: '🎟️' },
            { title: '會員門戶', desc: '會員自助服務：收件箱訊息、活動報名、門票購買、資料管理及捐贈追蹤。', icon: '🖥️' },
            { title: '電子名片', desc: '數碼名片附有二維碼及 NFC 掃描連接 WhatsApp。會員資料頁用於行業目錄。', icon: '💼' },
            { title: '通訊工具', desc: '透過電郵、WhatsApp 聊天機械人、SMS 或 VOIP 廣播發送通訊及公告。', icon: '📣' },
          ].map((item, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div className="card h-100">
                <div className="card-body">
                  <h6>{item.icon} {item.title}</h6>
                  <p className="small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="alert alert-success mt-4">
          <strong>🏆 屢獲殊榮：</strong>會員 CRM 是協會、NGO 及非牟利組織管理的獲獎工具。建基於 SugarCRM，配備記錄管理、儀表板及報告的現成工具。
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/zh/solutions" className="btn btn-outline-secondary me-2">← 返回方案</Link>
          <Link to="/zh/contact" className="btn btn-primary">立即查詢</Link>
          <Link to="/en/solutions/association" className="btn btn-link ms-2">English</Link>
        </div>
      </div>
    </div>
  );
}

export default AssociationCRMZH;
