import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutCN() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/about/about-hero.jpg" alt="关于 AH Solutions" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">关于我们</h1>
            <p className="lead">青叶浩勤信息管理有限公司</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4 mb-5">
          <div className="col-lg-6">
            <img src="/images/about/about-team.jpg" alt="AH Solutions 团队" className="rounded shadow w-100" style={{ objectFit: 'cover', height: '280px' }} />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2>公司简介</h2>
            <p className="lead text-muted">专业 IT 顾问公司</p>
            <p>我们是一家专业的 IT 顾问公司，专门提供 CRM 及 ERP 解决方案。多年经验及专业团队，助您企业数码化转型及业务增长。</p>
            <p>我们的专业范畴涵盖 <strong>OdooERP</strong>、<strong>SugarCRM</strong>、<strong>SuiteCRM</strong> 及多个电子商务平台整合，服务范围覆盖香港及亚太地区。</p>
            <p>AH Solutions 由对科技及商业卓越充满热忱的专业人士创立，透过创新 IT 方案助各组织按其独特需求进行运营数码转型。</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <img src="/images/about/about-mission.jpg" alt="我们的使命" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h4 className="text-primary">我们的使命</h4>
                <p className="mb-0">为企业提供可靠、可扩展及具成本效益的 IT 方案，推动运营卓越及可持续增长。</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <img src="/images/about/about-vision.jpg" alt="我们的愿景" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h4 className="text-success">我们的愿景</h4>
                <p className="mb-0">成为大中华及亚太区企业数码转型最可信赖的科技合作伙伴。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-12">
            <h3 className="mb-4">为何选择 AH Solutions？</h3>
          </div>
          {[
            { title: '行业专业知识', desc: '深耕零售、医学美容、专业服务、协会及电子商务等行业，经验丰富。', icon: '🏆' },
            { title: '成熟平台技术', desc: '基于世界级 CRM 及 ERP 平台：SugarCRM、SuiteCRM、OdooERP，可靠且可扩展。', icon: '🛠️' },
            { title: '本地及区域覆盖', desc: '为香港、中国、澳门及亚太区企业提供专业支持服务。', icon: '🌏' },
            { title: '一站式方案', desc: '从顾问咨询、系统实施、培训到持续支持——我们全程陪伴您。', icon: '🤝' },
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
          <Link to="/cn/contact" className="btn btn-primary me-2">联系我们</Link>
          <Link to="/en/about" className="btn btn-outline-secondary">English</Link>
        </div>
      </div>
    </div>
  );
}

export default AboutCN;
