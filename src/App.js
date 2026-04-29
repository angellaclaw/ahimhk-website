import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import HomeEN from './pages/HomeEN';
import HomeZH from './pages/HomeZH';
import SolutionsEN from './pages/SolutionsEN';
import SolutionsZH from './pages/SolutionsZH';
import AboutEN from './pages/AboutEN';
import AboutZH from './pages/AboutZH';
import ContactEN from './pages/ContactEN';
import ContactZH from './pages/ContactZH';
import BlogEN from './pages/blog/BlogEN';
import BlogZH from './pages/blog/BlogZH';
import BlogPostEN from './pages/blog/BlogPostEN';
import BlogPostZH from './pages/blog/BlogPostZH';

// Platform Detail Pages
import CRMPlatformEN from './pages/solutions/CRMPlatformEN';
import CRMPlatformZH from './pages/solutions/CRMPlatformZH';
import ERPPlatformEN from './pages/solutions/ERPPlatformEN';
import ERPPlatformZH from './pages/solutions/ERPPlatformZH';
import POSRetailEN from './pages/solutions/POSRetailEN';
import POSRetailZH from './pages/solutions/POSRetailZH';
import EShopB2BEN from './pages/solutions/EShopB2BEN';
import EShopB2BZH from './pages/solutions/EShopB2BZH';
import TouchpointsEN from './pages/solutions/TouchpointsEN';
import TouchpointsZH from './pages/solutions/TouchpointsZH';
import DataIntegrationEN from './pages/solutions/DataIntegrationEN';
import DataIntegrationZH from './pages/solutions/DataIntegrationZH';

// Showcase Detail Pages
import MemberCRMRetailEN from './pages/solutions/MemberCRMRetailEN';
import MemberCRMRetailZH from './pages/solutions/MemberCRMRetailZH';
import RetailERPEN from './pages/solutions/RetailERPEN';
import RetailERPZH from './pages/solutions/RetailERPZH';
import ProfessionalServicesEN from './pages/solutions/ProfessionalServicesEN';
import ProfessionalServicesZH from './pages/solutions/ProfessionalServicesZH';
import AssociationCRMEN from './pages/solutions/AssociationCRMEN';
import AssociationCRMZH from './pages/solutions/AssociationCRMZH';
import WechatEShopEN from './pages/solutions/WechatEShopEN';
import WechatEShopZH from './pages/solutions/WechatEShopZH';

function Footer() {
  const location = useLocation();
  const isZh = location.pathname.startsWith('/zh');

  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <div className="container">
        <p className="mb-1">
          {isZh ? 'WhatsApp: +852 6588 4054  |  電郵: info@ahimhk.com.hk' : 'WhatsApp: +852 6588 4054  |  Email: info@ahimhk.com.hk'}
        </p>
        <small>© 2024 Aoba Hopkins Information Management Ltd. All Rights Reserved.</small>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomeEN />} />
            <Route path="/en" element={<HomeEN />} />
            <Route path="/zh" element={<HomeZH />} />
            <Route path="/en/solutions" element={<SolutionsEN />} />
            <Route path="/zh/solutions" element={<SolutionsZH />} />
            <Route path="/en/about" element={<AboutEN />} />
            <Route path="/zh/about" element={<AboutZH />} />
            <Route path="/en/contact" element={<ContactEN />} />
            <Route path="/zh/contact" element={<ContactZH />} />

            {/* Blog Pages */}
            <Route path="/en/blog" element={<BlogEN />} />
            <Route path="/zh/blog" element={<BlogZH />} />
            <Route path="/en/blog/:slug" element={<BlogPostEN />} />
            <Route path="/zh/blog/:slug" element={<BlogPostZH />} />

            {/* Platform Detail Pages */}
            <Route path="/en/solutions/crm" element={<CRMPlatformEN />} />
            <Route path="/zh/solutions/crm" element={<CRMPlatformZH />} />
            <Route path="/en/solutions/erp" element={<ERPPlatformEN />} />
            <Route path="/zh/solutions/erp" element={<ERPPlatformZH />} />
            <Route path="/en/solutions/pos" element={<POSRetailEN />} />
            <Route path="/zh/solutions/pos" element={<POSRetailZH />} />
            <Route path="/en/solutions/eshop" element={<EShopB2BEN />} />
            <Route path="/zh/solutions/eshop" element={<EShopB2BZH />} />
            <Route path="/en/solutions/touchpoints" element={<TouchpointsEN />} />
            <Route path="/zh/solutions/touchpoints" element={<TouchpointsZH />} />
            <Route path="/en/solutions/data" element={<DataIntegrationEN />} />
            <Route path="/zh/solutions/data" element={<DataIntegrationZH />} />

            {/* Showcase Detail Pages */}
            <Route path="/en/solutions/member-crm" element={<MemberCRMRetailEN />} />
            <Route path="/zh/solutions/member-crm" element={<MemberCRMRetailZH />} />
            <Route path="/en/solutions/retail-erp" element={<RetailERPEN />} />
            <Route path="/zh/solutions/retail-erp" element={<RetailERPZH />} />
            <Route path="/en/solutions/professional" element={<ProfessionalServicesEN />} />
            <Route path="/zh/solutions/professional" element={<ProfessionalServicesZH />} />
            <Route path="/en/solutions/association" element={<AssociationCRMEN />} />
            <Route path="/zh/solutions/association" element={<AssociationCRMZH />} />
            <Route path="/en/solutions/wechat" element={<WechatEShopEN />} />
            <Route path="/zh/solutions/wechat" element={<WechatEShopZH />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
