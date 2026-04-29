import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function CRMPlatformCN() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/crm-platform.jpg" alt="CRM 平台" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">CRM 基础平台</h1>
            <p className="lead">开源标准 CRM 平台，按行业需求配置定制</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>概述</h2>
            <p className="lead">我们采用开源标准 CRM 平台，并按您的行业需求进行配置及定制开发。</p>
            <p>我们精选的平台包括 <strong>SugarCRM</strong>、<strong>SuiteCRM</strong> 和 <strong>OdooCRM</strong>。CRM 基础平台是进行行业定制增强的优质基石，可与您的网站门户、客户 APP、合作伙伴 APP、WhatsApp 对话及内部 ERP 系统无缝整合。</p>
          </div>
          <div className="col-lg-4">
            <div className="card bg-light">
              <div className="card-body">
                <h5>平台选择</h5>
                <ul className="mb-0">
                  <li>SugarCRM</li>
                  <li>SuiteCRM</li>
                  <li>OdooCRM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row mt-5">
          <div className="col-12">
            <h3 className="mb-4">标准 CRM 模块</h3>
          </div>
          {[
            { title: '销售管理', desc: '从潜在客户到成交的完整销售周期，配备销售管线视图及预测功能。' },
            { title: '营销自动化', desc: '营销活动管理、电邮营销、潜在客户评分及培育工作流程。' },
            { title: '客户服务', desc: '案例管理、知识库及多渠道支持（电邮、电话、在线聊天）。' },
            { title: '分析与报告', desc: '实时仪表板、KPI 追踪及自定义报告生成器。' },
            { title: '文档管理', desc: '附加、存储及管理与任何 CRM 记录关联的文档。' },
            { title: '工作流程自动化', desc: '通过自定义业务规则及流程自动化处理重复性任务。' },
          ].map((item, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <div className="card h-100">
                <div className="card-body">
                  <h6>{item.title}</h6>
                  <p className="small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <h3>行业定制增强</h3>
            <p>我们根据医学美容、保险、零售、酒店等多个行业扩展 CRM 基础功能。自定义整合确保与现有系统的无缝数据流动。</p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/cn/solutions" className="btn btn-outline-secondary me-2">← 返回方案</Link>
          <Link to="/cn/contact" className="btn btn-primary">立即查询</Link>
          <Link to="/en/solutions/crm" className="btn btn-link ms-2">English</Link>
        </div>
      </div>
    </div>
  );
}

export default CRMPlatformCN;