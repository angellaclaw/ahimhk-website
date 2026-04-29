import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function EShopB2BCN() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/eshop-b2b.jpg" alt="电子商务 B2C B2B" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">电子商务 B2C / B2B</h1>
            <p className="lead">将您的网店与 ERP 无缝连接</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>概述</h2>
            <p className="lead">我们的方案平台与多个行业电子商务方案无缝整合，包括 Shopify、WooCommerce 和 Magento。</p>
            <p>您亦可使用我们<strong>基于 Odoo 的一体化零售方案</strong>，集产品目录、库存管理、订单处理、支付网关及物流整合于单一统一平台。</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h3 className="text-primary">Shopify</h3>
                <p className="small">预设连接器，同步产品、订单、库存及客户数据。适合时装、美容及生活品牌。</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h3 className="text-primary">WooCommerce</h3>
                <p className="small">WordPress 电子商务系统，与 ERP 全面整合，支持产品管理、订单追踪及自动化会计分录。</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h3 className="text-primary">Magento</h3>
                <p className="small">企业级电子商务平台，具备 B2B 功能。与 ERP 整合，定价规则、报价管理及客户细分一应俱全。</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mb-3">一体化 Odoo 网店功能</h3>
        <div className="row">
          <div className="col-md-6">
            {[
              '产品目录（含变体及属性）',
              '动态定价及折扣规则',
              'B2B 客户专属定价',
              '购物车及心愿清单',
              '多元支付网关',
              '多元物流方式整合',
            ].map((f, i) => <div key={i} className="mb-2"><small>✓ {f}</small></div>)}
          </div>
          <div className="col-md-6">
            {[
              '实时库存同步',
              '销售订单自动生成',
              '客户帐户管理',
              '订单历史及再次订购',
              '礼品包装及促销码',
              '多语言及多货币',
            ].map((f, i) => <div key={i} className="mb-2"><small>✓ {f}</small></div>)}
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/cn/solutions" className="btn btn-outline-secondary me-2">← 返回方案</Link>
          <Link to="/cn/contact" className="btn btn-primary">立即查询</Link>
          <Link to="/en/solutions/eshop" className="btn btn-link ms-2">English</Link>
        </div>
      </div>
    </div>
  );
}

export default EShopB2BCN;