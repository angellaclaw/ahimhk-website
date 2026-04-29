import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function POSRetailZH() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/pos-system.jpg" alt="零售收銀系統" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">零售收銀系統 (POS)</h1>
            <p className="lead">POS 與 ERP 無縫整合，輕鬆管理零售營運</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>概述</h2>
            <p className="lead">我們的 ERP 解決方案與收銀系統 (POS) 無縫整合。您亦可使用我們基於 Odoo 的一體化零售方案，配備強大的會員忠誠度及獎賞功能。</p>
            <p>無論您經營單一店鋪或連鎖零售門店，我們的 POS 解決方案都能簡化結帳流程、實時追蹤庫存，提供卓越的顧客體驗。</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <h4>POS 功能</h4>
            <ul className="list-group">
              {[
                '觸摸屏優化界面',
                '條碼及二維碼掃描',
                '多元支付支援（現金、信用卡、FPS、支付寶、微信支付）',
                '實時庫存同步',
                '收據打印及電郵收據',
                '班次管理及現金抽屜追蹤',
                '折扣及促銷應用',
                '退貨及換貨處理',
              ].map((f, i) => <li className="list-group-item" key={i}><small>{f}</small></li>)}
            </ul>
          </div>
          <div className="col-md-6">
            <h4>整合優勢</h4>
            <ul className="list-group">
              {[
                '直接連結 ERP 銷售訂單',
                '銷售時自動扣減庫存',
                '會員忠誠積分累計',
                '中央 ERP 促銷規則',
                '跨店鋪銷售查詢',
                '全部門店集中報告',
                '禮品卡及店鋪信用支援',
                '餐飲業檯位管理',
              ].map((f, i) => <li className="list-group-item" key={i}><small>{f}</small></li>)}
            </ul>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="/images/detail/retail-erp.jpg" alt="POS 系統" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <h4>適用於零售及餐飲</h4>
            <p>我們的 POS 系統適用於各類零售環境，包括時裝、電子產品、超市，以及配有檯位管理及廚房顯示系統 (KDS) 整合的餐廳及咖啡室。</p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/zh/solutions" className="btn btn-outline-secondary me-2">← 返回方案</Link>
          <Link to="/zh/contact" className="btn btn-primary">立即查詢</Link>
          <Link to="/en/solutions/pos" className="btn btn-link ms-2">English</Link>
        </div>
      </div>
    </div>
  );
}

export default POSRetailZH;
