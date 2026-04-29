import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactCN() {
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const form = e.target;
    const data = {
      name: form.name.value,
      company: form.company.value,
      email: form.email.value,
      interest: form.interest.value,
      message: form.message.value,
    };

    try {
      const res = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setStatus({ type: 'success', message: result.message });
        form.reset();
      } else {
        setStatus({ type: 'danger', message: result.message || '提交失敗，請稍後再試。' });
      }
    } catch (err) {
      setStatus({ type: 'danger', message: '網絡錯誤，請檢查網絡連線後再試。' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="position-relative" style={{ maxHeight: '300px', overflow: 'hidden' }}>
        <img src="/images/contact/contact-hero.jpg" alt="联络 AH Solutions" className="w-100" style={{ objectFit: 'cover', maxHeight: '300px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">联系我们</h1>
            <p className="lead">欢迎展开对话</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm h-100">
              <img src="/images/contact/contact-office.jpg" alt="AH Solutions 办公室" className="card-img-top" style={{ height: '220px', objectFit: 'cover' }} />
              <div className="card-body">
                <h4 className="fw-bold">与我们联络</h4>
                <p className="text-muted">我们乐意协助您完成数码转型旅程。</p>
                <div className="mb-4">
                  <h6 className="fw-bold text-primary">📱 WhatsApp</h6>
                  <p className="mb-0 ms-3"><a href="https://wa.me/85265884054" target="_blank" rel="noreferrer">+852 6588 4054</a></p>
                </div>
                <div className="mb-4">
                  <h6 className="fw-bold text-primary">📧 邮箱</h6>
                  <p className="mb-0 ms-3"><a href="mailto:info@ahimhk.com.hk">info@ahimhk.com.hk</a></p>
                </div>
                <div className="mb-4">
                  <h6 className="fw-bold text-primary">🌐 网站</h6>
                  <p className="mb-0 ms-3"><a href="https://www.ahimhk.com" target="_blank" rel="noreferrer">www.ahimhk.com</a></p>
                </div>
                <div className="mb-3">
                  <h6 className="fw-bold text-primary">💼 公司</h6>
                  <p className="mb-0 ms-3 text-muted small">青叶浩勤信息管理有限公司</p>
                  <p className="mb-0 ms-3 text-muted small">AH Solutions Limited</p>
                </div>
                <div className="alert alert-light border small">
                  <strong>服务范围：</strong>香港 · 中国 · 澳门 · 亚太区
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-3">发送讯息</h4>
                <p className="text-muted small mb-4">填写以下表格，我们将于 1 个工作天内回复。</p>

                {status.message && (
                  <div className={`alert alert-${status.type === 'success' ? 'success' : 'danger'} alert-dismissible fade show`} role="alert">
                    {status.message}
                    <button type="button" className="btn-close" onClick={() => setStatus({ type: '', message: '' })} aria-label="Close"></button>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">您的姓名 *</label>
                      <input type="text" name="name" className="form-control" placeholder="王小明" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">公司名称</label>
                      <input type="text" name="company" className="form-control" placeholder="您的公司有限公司" />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">邮箱地址 *</label>
                      <input type="email" name="email" className="form-control" placeholder="john@company.com" required />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">有兴趣的方案</label>
                      <select name="interest" className="form-select">
                        <option value="">-- 请选择方案 --</option>
                        <option>CRM 解决方案（SugarCRM / SuiteCRM / OdooCRM）</option>
                        <option>ERP 解决方案（OdooERP）</option>
                        <option>零售 POS 及忠诚奖励方案</option>
                        <option>电子商务（B2C / B2B / 微信商城）</option>
                        <option>协会 / NGO 会员 CRM</option>
                        <option>数据整合及 API</option>
                        <option>其他 / 一般查询</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">您的讯息 *</label>
                      <textarea name="message" className="form-control" rows="4" placeholder="告诉我们您的项目或挑战..." required></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100 fw-semibold" disabled={loading}>
                        {loading ? (
                          <span>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            发送中...
                          </span>
                        ) : '发送讯息'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/en/contact" className="btn btn-outline-secondary me-2">English</Link>
          <Link to="/zh/contact" className="btn btn-outline-secondary">繁體</Link>
        </div>
      </div>
    </div>
  );
}

export default ContactCN;
