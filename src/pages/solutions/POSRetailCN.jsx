import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function POSRetailCN() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/pos-system.jpg" alt="零售收银系统" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">零售收银系统 (POS)</h1>
            <p className="lead">POS 与 ERP 无缝整合，轻松管理零售营运</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>概述</h2>
            <p className="lead">我们的 ERP 解决方案与收银系统 (POS) 无缝整合。您亦可使用我们基于 Odoo 的一体化零售方案，配备强大的会员忠诚度及奖赏功能。</p>
            <p>无论您经营单一店铺或连锁零售门店，我们的 POS 解决方案都能简化结帐流程、实时追踪库存，提供卓越的顾客体验。</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <h4>POS 功能</h4>
            <ul className="list-group">
              {[
                '触摸屏优化界面',
                '条码及二维码扫描',
                '多元支付支持（现金、信用卡、FPS、支付宝、微信支付）',
                '实时库存同步',
                '收据打印及电邮收据',
                '班次管理及现金抽屉追踪',
                '折扣及促销应用',
                '退货及换货处理',
              ].map((f, i) => <li className="list-group-item" key={i}><small>{f}</small></li>)}
            </ul>
          </div>
          <div className="col-md-6">
            <h4>整合优势</h4>
            <ul className="list-group">
              {[
                '直接连结 ERP 销售订单',
                '销售时自动扣减库存',
                '会员忠诚积分累计',
                '中央 ERP 促销规则',
                '跨门店销售查询',
                '全部门店集中报告',
                '礼品卡及店铺信用支持',
                '餐饮业台位管理',
              ].map((f, i) => <li className="list-group-item" key={i}><small>{f}</small></li>)}
            </ul>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="/images/detail/retail-erp.jpg" alt="POS 系统" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <h4>适用于零售及餐饮</h4>
            <p>我们的 POS 系统适用于各类零售环境，包括时装、电子产品、超市，以及配有台位管理及厨房显示系统 (KDS) 整合的餐厅及咖啡室。</p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/cn/solutions" className="btn btn-outline-secondary me-2">← 返回方案</Link>
          <Link to="/cn/contact" className="btn btn-primary">立即查询</Link>
          <Link to="/en/solutions/pos" className="btn btn-link ms-2">English</Link>
        </div>
      </div>
    </div>
  );
}

export default POSRetailCN;