import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function MemberCRMRetailCN() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/member-crm.jpg" alt="零售会员 CRM" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">零售会员 CRM</h1>
            <p className="lead">医学、美容及健康连锁店客户关系管理</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>概述</h2>
            <p className="lead">我们的医学美容 CRM 助您管理连锁医学美容服务中心。</p>
            <p>会员可购买具多重权益的服务券。配合预约日历，会员可按可用时段预约房间、设备及服务技师。此外，服务门户让各服务中心轻松管理营运。</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <h5>📋 会员管理</h5>
            <ul className="list-group mb-3">
              <li className="list-group-item">含照片、联系方式及偏好的会员资料</li>
              <li className="list-group-item">多个会员级别（金、银、铜）</li>
              <li className="list-group-item">附有二维码 / NFC 的会员卡</li>
              <li className="list-group-item">将家庭成员连接至同一帐户</li>
              <li className="list-group-item">会籍有效期及续会追踪</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>🎫 服务券及权益</h5>
            <ul className="list-group mb-3">
              <li className="list-group-item">预付式服务套票</li>
              <li className="list-group-item">每张券多种权益</li>
              <li className="list-group-item">套票有效期追踪</li>
              <li className="list-group-item">可转让/不可转让选项</li>
              <li className="list-group-item">未使用套票自动提醒</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>📅 预约日历</h5>
            <ul className="list-group mb-3">
              <li className="list-group-item">房间、设备及技师排程</li>
              <li className="list-group-item">实时可用时段显示</li>
              <li className="list-group-item">冲突检测及重叠预防</li>
              <li className="list-group-item">SMS / WhatsApp 预约确认</li>
              <li className="list-group-item">即场及预约服务</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>🖥️ 服务门户</h5>
            <ul className="list-group mb-3">
              <li className="list-group-item">会员自助预约</li>
              <li className="list-group-item">查看护理历史</li>
              <li className="list-group-item">网上购买新套票</li>
              <li className="list-group-item">电子帐单及付款记录</li>
              <li className="list-group-item">会员反馈及评分</li>
            </ul>
          </div>
        </div>

        <div className="alert alert-primary">
          <strong>行业验证：</strong>已成功部署于香港及区内多间连锁医学美容中心、牙科诊所、美容发廊及健康水疗中心。
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/cn/solutions" className="btn btn-outline-secondary me-2">← 返回方案</Link>
          <Link to="/cn/contact" className="btn btn-primary">立即查询</Link>
          <Link to="/en/solutions/member-crm" className="btn btn-link ms-2">English</Link>
        </div>
      </div>
    </div>
  );
}

export default MemberCRMRetailCN;
