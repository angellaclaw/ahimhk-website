import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function TouchpointsCN() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/touchpoints.jpg" alt="全方位触点" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">全方位触点</h1>
            <p className="lead">通过任何渠道、任何时间联系客户、合作伙伴及员工</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>概述</h2>
            <p className="lead">我们通过不同触点扩展解决方案，包括网站门户、移动网页、APP，以及 WhatsApp 和微信等社交渠道。</p>
            <p>我们将解决方案与您的客户、合作伙伴及员工连接 — 在所有沟通及互动渠道创造无缝体验。</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          {[
            { title: '网站门户', desc: '客户及合作伙伴自助服务门户，可查看订单、发票、案例及管理帐户。全自订品牌设计。', icon: '🌐' },
            { title: '移动网页', desc: '为智能手机优化的响应式网页应用。无需下载应用 — 通过浏览器即可使用完整功能。', icon: '📱' },
            { title: '移动 APP', desc: '原生及跨平台移动应用（iOS 及 Android），适用于外勤团队、服务技师及客户面向功能，附带推送通知。', icon: '📲' },
            { title: 'WhatsApp 整合', desc: '将 WhatsApp Business 与 CRM/ERP 连接。聊天机械人自动化、讯息模板、对话追踪及 CRM 案例创建。', icon: '💬' },
            { title: '微信整合', desc: '微信公众号及小程序整合。客户身份认证、应用内购买及微信支付连接。', icon: '💚' },
            { title: '客户门户', desc: '专属 B2B 客户门户，管理报价、采购订单、货运追踪及发票下载 — 全部实时完成。', icon: '🔐' },
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
            <h4>全渠道体验</h4>
            <p className="mb-0">所有触点均与中央 CRM/ERP 全面整合。无论客户通过 WhatsApp、网站还是亲身联系您，您的团队都能看到完整的互动历史，并在所有渠道一致回应。</p>
          </div>
          <div className="col-md-4 text-center">
            <h2 className="text-primary">360°</h2>
            <p className="small mb-0">客户视图</p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/cn/solutions" className="btn btn-outline-secondary me-2">← 返回方案</Link>
          <Link to="/cn/contact" className="btn btn-primary">立即查询</Link>
          <Link to="/en/solutions/touchpoints" className="btn btn-link ms-2">English</Link>
        </div>
      </div>
    </div>
  );
}

export default TouchpointsCN;
