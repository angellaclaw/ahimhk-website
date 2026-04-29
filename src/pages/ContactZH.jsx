import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactZH() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="position-relative" style={{ maxHeight: '300px', overflow: 'hidden' }}>
        <img src="/images/contact/contact-hero.jpg" alt="聯絡 AH Solutions" className="w-100" style={{ objectFit: 'cover', maxHeight: '300px' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="container text-white">
            <h1 className="display-5 fw-bold">聯絡我們</h1>
            <p className="lead">歡迎展開對話</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          {/* 聯絡資料 */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm h-100">
              <img src="/images/contact/contact-office.jpg" alt="AH Solutions 辦公室" className="card-img-top" style={{ height: '220px', objectFit: 'cover' }} />
              <div className="card-body">
                <h4 className="fw-bold">與我們聯絡</h4>
                <p className="text-muted">我們樂意協助您完成數碼轉型旅程。</p>

                <div className="mb-4">
                  <h6 className="fw-bold text-primary">📱 WhatsApp</h6>
                  <p className="mb-0 ms-3"><a href="https://wa.me/85265884054" target="_blank" rel="noreferrer">+852 6588 4054</a></p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold text-primary">📧 電郵</h6>
                  <p className="mb-0 ms-3"><a href="mailto:info@ahimhk.com.hk">info@ahimhk.com.hk</a></p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold text-primary">🌐 網站</h6>
                  <p className="mb-0 ms-3"><a href="https://www.ahimhk.com" target="_blank" rel="noreferrer">www.ahimhk.com</a></p>
                </div>

                <div className="mb-3">
                  <h6 className="fw-bold text-primary">💼 公司</h6>
                  <p className="mb-0 ms-3 text-muted small">青葉浩勤信息管理有限公司</p>
                  <p className="mb-0 ms-3 text-muted small">AH Solutions Limited</p>
                </div>

                <div className="alert alert-light border small">
                  <strong>服務範圍：</strong>香港 · 中國 · 澳門 · 亞太區
                </div>
              </div>
            </div>
          </div>

          {/* 聯絡表格 */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-3">發送訊息</h4>
                <p className="text-muted small mb-4">填寫以下表格，我們將於 1 個工作天內回覆。</p>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">您的姓名 *</label>
                      <input type="text" className="form-control" placeholder="王小明" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">公司名稱</label>
                      <input type="text" className="form-control" placeholder="您的公司有限公司" />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">電郵地址 *</label>
                      <input type="email" className="form-control" placeholder="john@company.com" required />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">有興趣的方案</label>
                      <select className="form-select">
                        <option value="">-- 請選擇方案 --</option>
                        <option>CRM 解決方案（SugarCRM / SuiteCRM / OdooCRM）</option>
                        <option>ERP 解決方案（OdooERP）</option>
                        <option>零售 POS 及忠誠獎賞方案</option>
                        <option>電子商務（B2C / B2B / 微信商城）</option>
                        <option>協會 / NGO 會員 CRM</option>
                        <option>數據整合及 API</option>
                        <option>其他 / 一般查詢</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">您的訊息 *</label>
                      <textarea className="form-control" rows="4" placeholder="告訴我們您的項目或挑戰..." required></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100 fw-semibold">發送訊息</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top">
          <Link to="/en/contact" className="btn btn-outline-secondary">English</Link>
        </div>
      </div>
    </div>
  );
}

export default ContactZH;
