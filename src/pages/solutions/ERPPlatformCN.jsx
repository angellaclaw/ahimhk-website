import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ERPPlatformCN() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/erp-platform.jpg" alt="ERP 平台" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">ERP 基础平台</h1>
            <p className="lead">建基于 OdooERP — 功能完善、易用且可扩展</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>概述</h2>
            <p className="lead">我们的 ERP 解决方案专为不同行业的客户而设计，采用 OdooERP 平台进行定制开发。</p>
            <p>这种方式使我们能够为您提供既<strong>功能完善</strong>又<strong>易于使用</strong>的解决方案，满足您企业的独特需求。Odoo ERP 是一套整合性应用套件，能够管理您的整个业务。</p>
          </div>
        </div>

        <h3 className="mb-4">核心 ERP 模块</h3>
        <div className="row g-4 mb-5">
          {[
            { title: '销售团队管理', desc: '潜在客户管理、机会追踪、销售管线、佣金追踪及绩效分析。' },
            { title: '服务团队管理', desc: '服务请求处理、技术员排程、工作追踪及服务级别协议。' },
            { title: '报价及销售订单', desc: '专业报价、定价规则、折扣、网上审批及转换发票。' },
            { title: '采购及库存', desc: '采购申请、供应商管理、库存控制、多仓库及条码扫描。' },
            { title: '财务及会计', desc: '总帐、应付帐款/应收帐款、银行对帐及财务报告。' },
            { title: '零售收银系统 (POS)', desc: '触摸屏零售收银、条码扫描、会员卡及实时库存同步。' },
            { title: '网店及网站门户', desc: 'B2C 及 B2B 网店，包含产品目录、购物车及支付网关整合。' },
            { title: '项目管理', desc: '任务规划、资源分配、甘特图、工时表及里程碑帐单。' },
          ].map((item, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h6 className="text-primary">{item.title}</h6>
                  <p className="small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="alert alert-info">
          <strong>Odoo ERP</strong> — 完整整合的商业应用套件，全球数千家企业信赖使用。我们的团队专门提供 Odoo 定制及部署服务，覆盖香港及亚太地区。
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/cn/solutions" className="btn btn-outline-secondary me-2">← 返回方案</Link>
          <Link to="/cn/contact" className="btn btn-primary">立即查询</Link>
          <Link to="/en/solutions/erp" className="btn btn-link ms-2">English</Link>
        </div>
      </div>
    </div>
  );
}

export default ERPPlatformCN;