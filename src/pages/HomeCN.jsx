import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSlideshow from '../components/HeroSlideshow';

function HomeCN() {
  return (
    <div>
      {/* Hero Slideshow */}
      <HeroSlideshow />

      {/* Solutions Overview */}
      <div className="container py-5">
        <h2 className="text-center mb-4">我们的方案平台</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/tech1.jpg" alt="CRM" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">CRM 基础平台</h5>
                <p className="card-text">我们采用开源标准 CRM 平台，包括 SugarCRM、SuiteCRM 和 OdooCRM，并按您的行业需求进行配置定制。</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/tech2.jpg" alt="ERP" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">ERP 基础平台</h5>
                <p className="card-text">我们的 ERP 解决方案基于 OdooERP 平台，具备强大的功能模块和定制开发能力。</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/hero2.jpg" alt="电子商务" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">电子商务 B2C / B2B</h5>
                <p className="card-text">与 Shopify、WooCommerce、Magento 以及 Odoo 一体化零售方案无缝整合。</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/detail/pos-system.jpg" alt="零售收银系统" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">零售收银系统 (POS)</h5>
                <p className="card-text">ERP 方案配备收银系统整合，Odoo 一体化零售方案包含会员忠诚度和奖励计划。</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/detail/touchpoints.jpg" alt="全方位触点" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">全方位触点</h5>
                <p className="card-text">网页门户、移动网页、APP、WhatsApp、微信 — 连接您的客户、合作伙伴和员工。</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/detail/data-integration.jpg" alt="数据整合" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">数据整合</h5>
                <p className="card-text">通过 XML RPC、Restful、JSON 及 CSV 进行强大的数据整合，确保跨平台安全连接。</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4">最新资讯</h2>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card h-100">
                <img src="/images/hero2.jpg" alt="Odoo 广州路演" className="card-img-top" style={{ height: '120px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5>Odoo 广州路演</h5>
                  <p>A Solutions 很荣幸获邀担任活动分享嘉宾。</p>
                  <Link to="/cn/blog" className="btn btn-sm btn-outline-primary">阅读更多</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card h-100">
                <img src="/images/hero3.jpg" alt="InnoEX" className="card-img-top" style={{ height: '120px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5>InnoEX Aoba + Odoo 2023</h5>
                  <p>于创新科技博览会展示最新 ERP 及 CRM 解决方案。</p>
                  <Link to="/cn/blog" className="btn btn-sm btn-outline-primary">阅读更多</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/cn/blog" className="btn btn-primary">查看所有资讯</Link>
          </div>
        </div>
      </div>

      {/* Solution Showcase */}
      <div className="container py-5">
        <h2 className="text-center mb-4">方案展示</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100">
              <img src="/images/hero3.jpg" alt="会员 CRM" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5>零售会员 CRM</h5>
                <p>医学美容 CRM，适用于连锁服务中心。管理会员、服务券、预约日历和服务门户。</p>
                <Link to="/cn/solutions" className="btn btn-outline-primary">了解更多</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5>一体化零售 ERP</h5>
                <p>完整零售方案，包含会员管理、忠诚奖励、促销优惠、POS、网店及后台库存管理。</p>
                <Link to="/cn/solutions" className="btn btn-outline-primary">了解更多</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language Switcher */}
      <div className="text-center py-4 border-top">
        <Link to="/en" className="btn btn-outline-primary me-2">English</Link>
        <Link to="/zh" className="btn btn-outline-primary">繁體</Link>
      </div>
    </div>
  );
}

export default HomeCN;
