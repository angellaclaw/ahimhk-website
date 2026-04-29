import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfessionalServicesCN() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/professional-services.jpg" alt="专业服务公司方案" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">专业服务公司方案</h1>
            <p className="lead">建基于 OdooERP — 适合会计师事务所、律师事务所及咨询公司</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>概述</h2>
            <p className="lead">我们的专业服务公司方案建基于 OdooERP，适合会计师事务所及律师事务所。</p>
            <p>强大的项目管理处理一次性项目、月费项目及咨询项目。项目里程碑监察进度及账单时间表，项目成本追踪员工时间、报销及外包费用。</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          {[
            { title: '项目管理', desc: '处理一次性项目、月费项目及咨询项目。分配任务给员工，设定截止日期及优先顺序。', icon: '📋' },
            { title: '项目里程碑', desc: '定义项目里程碑以监察进度及账单时间表。每个里程碑附带交付成果及审批工作流程。', icon: '🎯' },
            { title: '时间追踪', desc: '员工工时表链接至项目。可计费与非计费时间、超时追踪及生产力报告。', icon: '⏱️' },
            { title: '项目成本', desc: '追踪员工时间成本、报销及外包费用。实时比较预算与实际支出。', icon: '💰' },
            { title: '项目摘要', desc: '预算与实际分析以及在制品 (WIP) 分析。自动生成客户面向的进度报告。', icon: '📊' },
            { title: '账单及发票', desc: '里程碑式发票、进度账单及最终发票生成。与会计系统整合，自动生成会计分录。', icon: '🧾' },
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

        <div className="row align-items-center bg-light rounded p-4">
          <div className="col-md-8">
            <h4>适用行业</h4>
            <p className="mb-0">我们的专业服务 ERP 已获会计师事务所、律师事务所、建筑师事务所、工程咨询公司及管理咨询公司信任使用，帮助他们精确追踪项目盈利、员工利用率及客户账单。</p>
          </div>
          <div className="col-md-4 text-center">
            <h2 className="text-primary">100%</h2>
            <p className="small mb-0">项目可视性</p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/cn/solutions" className="btn btn-outline-secondary me-2">← 返回方案</Link>
          <Link to="/cn/contact" className="btn btn-primary">立即查询</Link>
          <Link to="/en/solutions/professional" className="btn btn-link ms-2">English</Link>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalServicesCN;