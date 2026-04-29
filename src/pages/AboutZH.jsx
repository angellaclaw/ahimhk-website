import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutZH() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/about/about-hero.jpg" alt="關於 AHIMHK" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">關於我們</h1>
            <p className="lead">青葉浩勤信息管理有限公司</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        {/* 公司概覽 */}
        <div className="row g-4 mb-5">
          <div className="col-lg-6">
            <img src="/images/about/about-team.jpg" alt="AHIMHK 團隊" className="rounded shadow w-100" style={{ objectFit: 'cover', height: '280px' }} />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2>公司簡介</h2>
            <p className="lead text-muted">專業 IT 顧問公司</p>
            <p>我們是一家專業的 IT 顧問公司，專門提供 CRM 及 ERP 解決方案。多年經驗及專業團隊，助您企業數碼化轉型及業務增長。</p>
            <p>我們的專業範疇涵蓋 <strong>OdooERP</strong>、<strong>SugarCRM</strong>、<strong>SuiteCRM</strong> 及多個電子商務平台整合，服務範圍覆蓋香港及亞太地區。</p>
            <p>AHIMHK 由對科技及商業卓越充滿熱情的專業人士創立，透過創新 IT 方案助各組織按其獨特需求進行營運數碼轉型。</p>
          </div>
        </div>

        {/* 使命及願景 */}
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <img src="/images/about/about-mission.jpg" alt="我們的使命" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h4 className="text-primary">我們的使命</h4>
                <p className="mb-0">為企業提供可靠、可擴展及具成本效益的 IT 方案，推動營運卓越及可持續增長。</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <img src="/images/about/about-vision.jpg" alt="我們的願景" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h4 className="text-success">我們的願景</h4>
                <p className="mb-0">成為大中華及亞太區企業數碼轉型最可信賴的科技合作夥伴。</p>
              </div>
            </div>
          </div>
        </div>

        {/* 為何選擇我們 */}
        <div className="row g-4 mb-5">
          <div className="col-12">
            <h3 className="mb-4">為何選擇 AHIMHK？</h3>
          </div>
          {[
            { title: '行業專業知識', desc: '深耕零售、醫學美容、專業服務、協會及電子商務等行業，經驗豐富。', icon: '🏆' },
            { title: '成熟平台技術', desc: '建基於世界級 CRM 及 ERP 平台：SugarCRM、SuiteCRM、OdooERP，可靠且可擴展。', icon: '🛠️' },
            { title: '本地及區域覆蓋', desc: '為香港、中國、澳門及亞太區企業提供專業支援服務。', icon: '🌏' },
            { title: '一站式方案', desc: '從顧問咨詢、系統實施、培訓到持續支援——我們全程陪伴您。', icon: '🤝' },
          ].map((item, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body">
                  <h2>{item.icon}</h2>
                  <h6 className="fw-bold">{item.title}</h6>
                  <p className="small text-muted mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/zh/contact" className="btn btn-primary me-2">聯絡我們</Link>
          <Link to="/en/about" className="btn btn-outline-secondary">English</Link>
        </div>
      </div>
    </div>
  );
}

export default AboutZH;
