import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function SolutionsZH() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="position-relative" style={{ maxHeight: '300px', overflow: 'hidden' }}>
        <img src="/images/hero2.jpg" alt="方案" className="w-100" style={{ objectFit: 'cover', maxHeight: '300px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.45)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">我們的方案</h1>
            <p className="lead">為各行各業量身訂造的 IT 解決方案</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        {/* 方案平台 */}
        <h2 className="mb-3">我們的方案平台</h2>
        <p className="text-muted mb-4">為您的數碼轉型提供核心技術平台</p>
        <div className="row g-4 mb-5">
          {[
            {
              title: 'CRM 基礎平台',
              desc: '開源標準 CRM 平台，包括 SugarCRM、SuiteCRM 和 OdooCRM，按您的行業需求配置定制。',
              img: '/images/detail/crm-platform.jpg',
              link: '/zh/solutions/crm',
              tags: ['SugarCRM', 'SuiteCRM', 'OdooCRM'],
            },
            {
              title: 'ERP 基礎平台',
              desc: '建基於 OdooERP，核心模組涵蓋銷售、採購、庫存、財務、POS 及網店。',
              img: '/images/detail/erp-platform.jpg',
              link: '/zh/solutions/erp',
              tags: ['OdooERP', '銷售', '財務'],
            },
            {
              title: '零售收銀系統 (POS)',
              desc: 'ERP 方案配備收銀系統整合，Odoo 一體化零售方案包含會員忠誠度和獎賞計劃。',
              img: '/images/detail/pos-system.jpg',
              link: '/zh/solutions/pos',
              tags: ['零售POS', '會員忠誠', '多門店'],
            },
            {
              title: '電子商務 B2C / B2B',
              desc: '與 Shopify、WooCommerce、Magento 以及 Odoo 一體化零售方案無縫整合。',
              img: '/images/detail/eshop-b2b.jpg',
              link: '/zh/solutions/eshop',
              tags: ['Shopify', 'WooCommerce', 'Magento'],
            },
            {
              title: '全方位觸點',
              desc: '網頁門戶、流動網頁、APP、WhatsApp、微信 — 連接您的客戶、合作夥伴和員工。',
              img: '/images/detail/touchpoints.jpg',
              link: '/zh/solutions/touchpoints',
              tags: ['WhatsApp', '微信', '流動APP'],
            },
            {
              title: '數據整合',
              desc: '透過 XML RPC、Restful、JSON 及 CSV 進行強大的數據整合，確保跨平台安全連接。',
              img: '/images/detail/data-integration.jpg',
              link: '/zh/solutions/data',
              tags: ['API', 'XML RPC', 'JSON'],
            },
          ].map((item, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card h-100 shadow-sm">
                <Link to={item.link} className="text-decoration-none">
                  <img src={item.img} alt={item.title} className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title text-dark">{item.title}</h5>
                    <p className="card-text small text-muted">{item.desc}</p>
                    <div className="d-flex flex-wrap gap-1">
                      {item.tags.map((tag, j) => (
                        <span key={j} className="badge bg-secondary small">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 方案展示 */}
        <hr className="my-5" />
        <h2 className="mb-3">方案展示</h2>
        <p className="text-muted mb-4">行業定制方案，已獲香港及亞太區企業驗證</p>
        <div className="row g-4">
          {[
            {
              title: '零售會員 CRM',
              desc: '醫學美容 CRM，適用於連鎖服務中心。會員購買服務券、日曆預約及門戶自助管理。',
              img: '/images/detail/member-crm.jpg',
              link: '/zh/solutions/member-crm',
            },
            {
              title: '一體化零售 ERP',
              desc: '完整零售方案，包含會員管理、忠誠獎賞、促銷優惠、POS、網店及後台庫存管理。',
              img: '/images/detail/retail-erp.jpg',
              link: '/zh/solutions/retail-erp',
            },
            {
              title: '專業服務公司方案',
              desc: '建基於 OdooERP，適合會計師樓及律師事務所。項目管理含里程碑、工時追蹤、成本及帳單。',
              img: '/images/detail/professional-services.jpg',
              link: '/zh/solutions/professional',
            },
            {
              title: '協會 CRM 及活動管理',
              desc: '屢獲殊榮的會員管理方案，適用於協會及 NGO。活動門票、會員門戶、電子名片、通訊工具。',
              img: '/images/detail/association-crm.jpg',
              link: '/zh/solutions/association',
            },
            {
              title: '微信商城 / 社交商城',
              desc: '進軍中國市場。基礎版含產品目錄及微信支付，進階版含 KOL 營銷及多層代理分銷。',
              img: '/images/detail/wechat-eshop.jpg',
              link: '/zh/solutions/wechat',
            },
            {
              title: '會員目錄及電子名片',
              desc: '按行業篩選展示會員。二維碼掃描連接 WhatsApp，二維碼連接商業資料頁。',
              img: '/images/detail/member-crm.jpg',
              link: '/zh/solutions/association',
            },
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
          <Link to="/zh/contact" className="btn btn-primary me-2">聯絡我們</Link>
          <Link to="/en/solutions" className="btn btn-outline-secondary">English</Link>
        </div>
      </div>
    </div>
  );
}

export default SolutionsZH;
