import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AssociationCRMCN() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/association-crm.jpg" alt="协会 CRM 及活动管理" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">协会 CRM 及活动管理</h1>
            <p className="lead">屡获殊荣的 CRM — 适用于协会、NGO 及非盈利组织</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>概述</h2>
            <p className="lead">我们的会员 CRM 解决方案非常适合管理您的组织或协会。</p>
            <p>保存每位会员的详细资料、活动记录、资历、服务记录及委员会工作。此外，亦提供活动日历、门票购买、行业目录（附会员资料页及电子名片）。</p>
          </div>
        </div>

        <div className="row g-4 mb-4">
          {[
            { title: '会员资料', desc: '追踪会员资料、资历、参与小组及服务历史。支持个人及企业会员。', icon: '🪪' },
            { title: '会籍管理', desc: '多个会员类型、自动续会提醒、会员卡发放（实体 + 数码二维码）及有效期追踪。', icon: '🎫' },
            { title: '活动记录', desc: '记录活动出席、捐赠、会议、通话、电邮及 WhatsApp 讯息 — 全部链接至会员记录。', icon: '📝' },
            { title: '发票及付款', desc: '为会费及捐赠生成发票。支持 FPS、支付宝、微信支付等多种线上/线下付款方式。', icon: '💳' },
            { title: '活动管理', desc: '活动资料设定、门票类型、定价层次、二维码门票，及同步至会员门户供报名。', icon: '🎟️' },
            { title: '会员门户', desc: '会员自助服务：收件箱讯息、活动报名、门票购买、资料管理及捐赠追踪。', icon: '🖥️' },
            { title: '电子名片', desc: '数码名片附有二维码及 NFC 扫描连接 WhatsApp。会员资料页用于行业目录。', icon: '💼' },
            { title: '通讯工具', desc: '通过电邮、WhatsApp 聊天机器人、SMS 或 VOIP 广播发送通讯及公告。', icon: '📣' },
          ].map((item, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div className="card h-100">
                <div className="card-body">
                  <h6>{item.icon} {item.title}</h6>
                  <p className="small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="alert alert-success mt-4">
          <strong>🏆 屡获殊荣：</strong>会员 CRM 是协会、NGO 及非盈利组织管理的获奖工具。建基于 SugarCRM，配备记录管理、仪表板及报告的现成工具。
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/cn/solutions" className="btn btn-outline-secondary me-2">← 返回方案</Link>
          <Link to="/cn/contact" className="btn btn-primary">立即查询</Link>
          <Link to="/en/solutions/association" className="btn btn-link ms-2">English</Link>
        </div>
      </div>
    </div>
  );
}

export default AssociationCRMCN;