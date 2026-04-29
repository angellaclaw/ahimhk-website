import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function RetailERPCN() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/retail-erp.jpg" alt="一体化零售 ERP" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">一体化零售 ERP</h1>
            <p className="lead">完整零售方案 — 从 POS 到后台管理</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>概述</h2>
            <p className="lead">我们的一体化零售 ERP 是完整的零售解决方案，助您轻松管理业务。</p>
            <p>配备<strong>强大会员管理</strong>、<strong>忠诚奖赏</strong>、<strong>促销优惠</strong>，同时包含<strong>POS</strong>、<strong>网店</strong>及<strong>后台库存管理</strong>！</p>
          </div>
        </div>

        <div className="row g-4 mb-4">
          {[
            { title: '会员管理', desc: '追踪会员资料、等级、购买历史及偏好。支持实体卡及电子会员卡。', icon: '👥' },
            { title: '忠诚奖赏', desc: '积分累计、积分兑换、生日奖赏、等级福利及推荐奖金。', icon: '🎁' },
            { title: '促销引擎', desc: '买一送一、套餐折扣、限时优惠、会员专属价及优惠券管理。', icon: '🏷️' },
            { title: '零售收银 (POS)', desc: '触摸屏 POS、条码扫描、多元支付、班次管理及实时销售同步。', icon: '🖥️' },
            { title: '网店 (B2C)', desc: '响应式设计网店、购物车、安全结帐，与实体店共享同一库存。', icon: '🛒' },
            { title: '库存管理', desc: '跨多门店库存追踪、补货提醒、条码管理及供应商门户。', icon: '📦' },
          ].map((item, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card h-100">
                <div className="card-body">
                  <h5>{item.icon} {item.title}</h5>
                  <p className="small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <h3>预设整合</h3>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-light rounded text-center">
              <strong>Shopify</strong>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-light rounded text-center">
              <strong>WooCommerce</strong>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-light rounded text-center">
              <strong>Magento</strong>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-light rounded text-center">
              <strong>OdooPOS</strong>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/cn/solutions" className="btn btn-outline-secondary me-2">← 返回方案</Link>
          <Link to="/cn/contact" className="btn btn-primary">立即查询</Link>
          <Link to="/en/solutions/retail-erp" className="btn btn-link ms-2">English</Link>
        </div>
      </div>
    </div>
  );
}

export default RetailERPCN;
