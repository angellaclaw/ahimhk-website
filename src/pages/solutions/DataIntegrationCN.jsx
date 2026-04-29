import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function DataIntegrationCN() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/data-integration.jpg" alt="数据整合" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">数据整合</h1>
            <p className="lead">跨平台连接、同步及保护您的业务数据</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>概述</h2>
            <p className="lead">我们的项目具备强大的数据整合能力。我们的解决方案确保 CRM、ERP、电子商务平台及第三方系统之间的无缝数据流动。</p>
            <p>我们同时提供<strong>强大的安全机制</strong>，确保在连接其他平台时保护您的业务数据。</p>
          </div>
        </div>

        <h3 className="mb-4">整合协议</h3>
        <div className="row g-4 mb-5">
          {[
            { title: 'XML RPC', desc: '使用 XML 编码调用的远程过程调用协议。Odoo、SugarCRM 等主要 ERP/CRM 平台广泛支援。' },
            { title: 'RESTful API', desc: '使用 JSON 的现代灵活 API 架构，适合网页及移动整合，支持 OAuth 2.0 认证。' },
            { title: 'JSON / REST', desc: '轻量级数据交换格式，易于实施，跨系统及程序语言广泛兼容。' },
            { title: 'CSV 导入/导出', desc: '大型数据集的批量数据交换，配备验证规则及错误报告的定期导入/导出功能。' },
          ].map((item, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="text-primary">{item.title}</h6>
                  <p className="small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mb-4">整合场景</h3>
        <div className="row">
          {[
            { title: 'CRM ↔ ERP 同步', desc: '在 CRM 与 ERP 系统之间双向同步客户、销售订单及库存数据。' },
            { title: '电子商务整合', desc: '实时产品目录更新、订单导入、库存水平及货运追踪。' },
            { title: '支付网关', desc: '连接 Stripe、PayPal、FPS、支付宝、微信支付，实现无缝网上支付处理。' },
            { title: '物流及快递', desc: '整合顺丰、嘉里、DHL、UPS，自动生成运单及追踪。' },
            { title: '会计软件', desc: '自动将发票及付款推送至 Xero、QuickBooks 或本地会计系统。' },
            { title: '物联网及硬件', desc: '透过区域网络或蓝牙连接条码扫描器、磅秤及 POS 终端机。' },
          ].map((item, i) => (
            <div className="col-md-6 mb-3" key={i}>
              <div className="d-flex">
                <span className="me-2 text-primary fw-bold">›</span>
                <div>
                  <strong>{item.title}</strong>
                  <p className="small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="alert alert-warning mt-4">
          <strong>🔒 安全优先：</strong> 所有整合均采用行业标准认证（OAuth 2.0、API 密钥、IP 白名单）及加密数据传输（TLS/SSL），保护您的业务数据。
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/cn/solutions" className="btn btn-outline-secondary me-2">← 返回方案</Link>
          <Link to="/cn/contact" className="btn btn-primary">立即查询</Link>
          <Link to="/en/solutions/data" className="btn btn-link ms-2">English</Link>
        </div>
      </div>
    </div>
  );
}

export default DataIntegrationCN;
