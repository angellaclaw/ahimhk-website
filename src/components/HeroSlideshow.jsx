import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const slidesEN = [
  {
    image: '/images/slide-crm.jpg',
    title: 'Professional CRM & ERP Solutions',
    subtitle: 'Empowering Your Business with Intelligent Management',
    cta: 'Contact Us',
    link: '/en/contact',
  },
  {
    image: '/images/slide-erp.jpg',
    title: 'Powerful ERP Solutions',
    subtitle: 'OdooERP Platform • Custom Development • Seamless Integration',
    cta: 'Learn More',
    link: '/en/solutions',
  },
  {
    image: '/images/slide-retail.jpg',
    title: 'Complete Retail Solutions',
    subtitle: 'POS • Member CRM • eShop Integration',
    cta: 'View Solutions',
    link: '/en/solutions',
  },
];

const slidesZH = [
  {
    image: '/images/slide-crm.jpg',
    title: '專業 CRM & ERP 解決方案',
    subtitle: '以智能化管理賦能您的企業',
    cta: '聯絡我們',
    link: '/zh/contact',
  },
  {
    image: '/images/slide-erp.jpg',
    title: '強大 ERP 解決方案',
    subtitle: 'OdooERP 平台 • 定制開發 • 無縫整合',
    cta: '了解更多',
    link: '/zh/solutions',
  },
  {
    image: '/images/slide-retail.jpg',
    title: '一體化零售解決方案',
    subtitle: 'POS • 會員 CRM • 網店整合',
    cta: '查看方案',
    link: '/zh/solutions',
  },
];

function HeroSlideshow({ language = 'EN' }) {
  const slides = language === 'ZH' ? slidesZH : slidesEN;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === current ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: index === current ? 2 : 1,
            pointerEvents: index === current ? 'auto' : 'none',
          }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: 'rgba(0,0,0,0.45)' }}
          >
            <div className="container text-white text-center">
              <h1 className="display-4 fw-bold">{slide.title}</h1>
              <p className="lead">{slide.subtitle}</p>
              <Link to={slide.link} className="btn btn-light btn-lg mt-2">
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div
        className="position-absolute bottom-0 start-0 w-100 d-flex justify-content-center gap-2 pb-3"
        style={{ zIndex: 10 }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`btn btn-sm rounded-circle ${
              index === current ? 'btn-light' : 'btn-outline-light'
            }`}
            style={{ width: '12px', height: '12px', padding: 0 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="position-absolute top-50 start-0 translate-middle-y btn btn-link text-white p-3"
        style={{ zIndex: 10 }}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="position-absolute top-50 end-0 translate-middle-y btn btn-link text-white p-3"
        style={{ zIndex: 10 }}
        aria-label="Next slide"
      >
        ›
      </button>
    </div>
  );
}

export default HeroSlideshow;
