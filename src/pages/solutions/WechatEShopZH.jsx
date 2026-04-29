import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function WechatEShopZH() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/wechat-eshop.jpg" alt="微信商城" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">微信商城 / 社交商城</h1>
            <p className="lead">透過微信電商輕鬆進軍龐大中國市場</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>概述</h2>
            <p className="lead">我們的微信商城及社交商城為您的產品提供強大的銷售工具。</p>
            <p>基礎商城包含<strong>產品目錄</strong>、<strong>精選推薦及促銷</strong>以及<strong>物流追蹤</strong>。進階商城則包含<strong>KOL 營銷</strong>、<strong>視頻推廣</strong>及<strong>代理層級制度</strong>的多層分銷功能。</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <h5>基礎商城功能</h5>
            <ul className="list-group mb-3">
              {[
                '含圖片及描述的產品目錄',
                '精選產品及推廣橫幅',
                '購物車及微信支付結帳',
                '訂單管理及狀態追蹤',
                '物流追蹤（順豐、京東等）',
                '客戶訂單歷史',
                '門店定位/自取點',
                '微信公眾號整合',
              ].map((f, i) => <li className="list-group-item small" key={i}>{f}</li>)}
            </ul>
          </div>
          <div className="col-md-6">
            <h5>進階社交商城功能</h5>
            <ul className="list-group mb-3">
              {[
                'KOL（關鍵意見領袖）營銷工具',
                '視頻產品推廣及直播',
                '多層代理分銷系統',
                '推薦獎金及團隊佣金追蹤',
                '社交分享獎勵積分',
                '微信小程序商城',
                '閃購及團購',
                '客戶標籤及行為分析',
              ].map((f, i) => <li className="list-group-item small" key={i}>{f}</li>)}
            </ul>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-8">
            <h4>微信生態系統整合</h4>
            <p>我們的微信商城與微信生態系統深度整合：微信支付實現無縫付款、微信公眾號用於客戶互動、微信小程序提供輕量級應用體驗、微信企業版用於內部團隊溝通。</p>
          </div>
          <div className="col-md-4 text-center">
            <h2 className="text-success">13億+</h2>
            <p className="small mb-0">微信活躍用戶</p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/zh/solutions" className="btn btn-outline-secondary me-2">← 返回方案</Link>
          <Link to="/zh/contact" className="btn btn-primary">立即查詢</Link>
          <Link to="/en/solutions/wechat" className="btn btn-link ms-2">English</Link>
        </div>
      </div>
    </div>
  );
}

export default WechatEShopZH;
