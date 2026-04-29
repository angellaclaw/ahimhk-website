import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function SolutionsCN() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="position-relative" style={{ maxHeight: '300px', overflow: 'hidden' }}>
        <img src="/images/hero2.jpg" alt="方案" className="w-100" style={{ objectFit: 'cover', maxHeight: '300px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.45)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">我们的方案</h1>
            <p className="lead">为各行各业量身订造的 IT 解决方案</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="mb-3">我们的方案平台</h2>
        <p className="text-muted mb-4">为您的数码转型提供核心技术平台</p>
        <div className="row g-4 mb-5">
          {[
            { title: 'CRM 基础平台', desc: '开源标准 CRM 平台，包括 SugarCRM、SuiteCRM 和 OdooCRM，按您的行业需求配置定制。', img: '/images/detail/crm-platform.jpg', link: '/cn/solutions/crm', tags: ['SugarCRM', 'SuiteCRM', 'OdooCRM'] },
            { title: 'ERP 基础平台', desc: '基于 OdooERP，核心模块涵盖销售、采购、库存、财务、POS 及网店。', img: '/images/detail/erp-platform.jpg', link: '/cn/solutions/erp', tags: ['OdooERP', '销售', '财务'] },
            { title: '零售收银系统 (POS)', desc: 'ERP 方案配备收银系统整合，Odoo 一体化零售方案包含会员忠诚度和奖励计划。', img: '/images/detail/pos-system.jpg', link: '/cn/solutions/pos', tags: ['零售POS', '会员忠诚', '多门店'] },
            { title: '电子商务 B2C / B2B', desc: '与 Shopify、WooCommerce、Magento 以及 Odoo 一体化零售方案无缝整合。', img: '/images/detail/eshop-b2b.jpg', link: '/cn/solutions/eshop', tags: ['Shopify', 'WooCommerce', 'Magento'] },
            { title: '全方位触点', desc: '网页门户、移动网页、APP、WhatsApp、微信 — 连接您的客户、合作伙伴和员工。', img: '/images/detail/touchpoints.jpg', link: '/cn/solutions/touchpoints', tags: ['WhatsApp', '微信', '移动APP'] },
            { title: '数据整合', desc: '通过 XML RPC、Restful、JSON 及 CSV 进行强大的数据整合，确保跨平台安全连接。', img: '/images/detail/data-integration.jpg', link: '/cn/solutions/data', tags: ['API', 'XML RPC', 'JSON'] },
          ].map((item, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card h-100 shadow-sm">
                <Link to={item.link} className="text-decoration-none">
                  <img src={item.img} alt={item.title} className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title text-dark">{item.title}</h5>
                    <p className="card-text small text-muted">{item.desc}</p>
                    <div className="d-flex flex-wrap gap-1">
                      {item.tags.map((tag, j) => (<span key={j} className="badge bg-secondary small">{tag}</span>))}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <hr className="my-5" />
        <h2 className="mb-3">方案展示</h2>
        <p className="text-muted mb-4">行业定制方案，已获香港及亚太区企业验证</p>
        <div className="row g-4">
          {[
            { title: '零售会员 CRM', desc: '医学美容 CRM，适用于连锁服务中心。会员购买服务券、日历预约及门户自助管理。', img: '/images/detail/member-crm.jpg', link: '/cn/solutions/member-crm' },
            { title: '一体化零售 ERP', desc: '完整零售方案，包含会员管理、忠诚奖励、促销优惠、POS、网店及后台库存管理。', img: '/images/detail/retail-erp.jpg', link: '/cn/solutions/retail-erp' },
            { title: '专业服务公司方案', desc: '基于 OdooERP，适合会计师事务所及律师事务所。项目管理含里程碑、工时追踪、成本及账单。', img: '/images/detail/professional-services.jpg', link: '/cn/solutions/professional' },
            { title: '协会 CRM 及活动管理', desc: '屡获殊荣的会员管理方案，适用于协会及 NGO。活动门票、会员门户、电子名片、通讯工具。', img: '/images/detail/association-crm.jpg', link: '/cn/solutions/association' },
            { title: '微信商城 / 社交商城', desc: '进军中国市场。基础版含产品目录及微信支付，进阶版含 KOL 营销及多层代理分销。', img: '/images/detail/wechat-eshop.jpg', link: '/cn/solutions/wechat' },
            { title: '会员目录及电子名片', desc: '按行业筛选展示会员。二维码扫描连接 WhatsApp，二维码连接商业资料页。', img: '/images/detail/member-crm.jpg', link: '/cn/solutions/association' },
          ].map((item, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card h-100 shadow-sm">
                <Link to={item.link} className="text-decoration-none">
                  <img src={item.img} alt={item.title} className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title text-dark">{item.title}</h5>
                    <p className="card-text small text-muted">{item.desc}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-3 border-top">
          <Link to="/cn/contact" className="btn btn-primary me-2">联系我们</Link>
          <Link to="/en/solutions" className="btn btn-outline-secondary">English</Link>
        </div>
      </div>
    </div>
  );
}

export default SolutionsCN;
