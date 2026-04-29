import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function WechatEShopCN() {
  return (
    <div>
      <div className="position-relative" style={{ maxHeight: '320px', overflow: 'hidden' }}>
        <img src="/images/detail/wechat-eshop.jpg" alt="微信商城" className="w-100" style={{ objectFit: 'cover', maxHeight: '320px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">微信商城 / 社交商城</h1>
            <p className="lead">通过微信电商轻松进军庞大中国市场</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2>概述</h2>
            <p className="lead">我们的微信商城及社交商城为您的产品提供强大的销售工具。</p>
            <p>基础商城包含<strong>产品目录</strong>、<strong>精选推荐及促销</strong>以及<strong>物流追踪</strong>。进阶商城则包含<strong>KOL 营销</strong>、<strong>视频推广</strong>及<strong>代理层级制度</strong>的多层分销功能。</p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <h5>基础商城功能</h5>
            <ul className="list-group mb-3">
              {[
                '含图片及描述的产品目录',
                '精选产品及推广横幅',
                '购物车及微信支付结帐',
                '订单管理及状态追踪',
                '物流追踪（顺丰、京东等）',
                '客户订单历史',
                '门店定位/自取点',
                '微信公众号整合',
              ].map((f, i) => <li className="list-group-item small" key={i}>{f}</li>)}
            </ul>
          </div>
          <div className="col-md-6">
            <h5>进阶社交商城功能</h5>
            <ul className="list-group mb-3">
              {[
                'KOL（关键意见领袖）营销工具',
                '视频产品推广及直播',
                '多层代理分销系统',
                '推荐奖金及团队佣金追踪',
                '社交分享奖励积分',
                '微信小程序商城',
                '闪购及团购',
                '客户标签及行为分析',
              ].map((f, i) => <li className="list-group-item small" key={i}>{f}</li>)}
            </ul>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-8">
            <h4>微信生态系统整合</h4>
            <p>我们的微信商城与微信生态系统深度整合：微信支付实现无缝付款、微信公众号用于客户互动、微信小程序提供轻量级应用体验、微信企业版用于内部团队沟通。</p>
          </div>
          <div className="col-md-4 text-center">
            <h2 className="text-success">13亿+</h2>
            <p className="small mb-0">微信活跃用户</p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/cn/solutions" className="btn btn-outline-secondary me-2">← 返回方案</Link>
          <Link to="/cn/contact" className="btn btn-primary">立即查询</Link>
          <Link to="/en/solutions/wechat" className="btn btn-link ms-2">English</Link>
        </div>
      </div>
    </div>
  );
}

export default WechatEShopCN;