import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import HomeEN from './pages/HomeEN';
import HomeZH from './pages/HomeZH';
import HomeCN from './pages/HomeCN';
import SolutionsEN from './pages/SolutionsEN';
import SolutionsZH from './pages/SolutionsZH';
import SolutionsCN from './pages/SolutionsCN';
import AboutEN from './pages/AboutEN';
import AboutZH from './pages/AboutZH';
import AboutCN from './pages/AboutCN';
import ContactEN from './pages/ContactEN';
import ContactZH from './pages/ContactZH';
import ContactCN from './pages/ContactCN';
import BlogEN from './pages/blog/BlogEN';
import BlogZH from './pages/blog/BlogZH';
import BlogCN from './pages/blog/BlogCN';
import BlogPostEN from './pages/blog/BlogPostEN';
import BlogPostZH from './pages/blog/BlogPostZH';
import BlogPostCN from './pages/blog/BlogPostCN';

// Platform Detail Pages
import CRMPlatformEN from './pages/solutions/CRMPlatformEN';
import CRMPlatformZH from './pages/solutions/CRMPlatformZH';
import CRMPlatformCN from './pages/solutions/CRMPlatformCN';
import ERPPlatformEN from './pages/solutions/ERPPlatformEN';
import ERPPlatformZH from './pages/solutions/ERPPlatformZH';
import ERPPlatformCN from './pages/solutions/ERPPlatformCN';
import POSRetailEN from './pages/solutions/POSRetailEN';
import POSRetailZH from './pages/solutions/POSRetailZH';
import POSRetailCN from './pages/solutions/POSRetailCN';
import EShopB2BEN from './pages/solutions/EShopB2BEN';
import EShopB2BZH from './pages/solutions/EShopB2BZH';
import EShopB2BCN from './pages/solutions/EShopB2BCN';
import TouchpointsEN from './pages/solutions/TouchpointsEN';
import TouchpointsZH from './pages/solutions/TouchpointsZH';
import TouchpointsCN from './pages/solutions/TouchpointsCN';
import DataIntegrationEN from './pages/solutions/DataIntegrationEN';
import DataIntegrationZH from './pages/solutions/DataIntegrationZH';
import DataIntegrationCN from './pages/solutions/DataIntegrationCN';

// Showcase Detail Pages
import MemberCRMRetailEN from './pages/solutions/MemberCRMRetailEN';
import MemberCRMRetailZH from './pages/solutions/MemberCRMRetailZH';
import MemberCRMRetailCN from './pages/solutions/MemberCRMRetailCN';
import RetailERPEN from './pages/solutions/RetailERPEN';
import RetailERPZH from './pages/solutions/RetailERPZH';
import RetailERPCN from './pages/solutions/RetailERPCN';
import ProfessionalServicesEN from './pages/solutions/ProfessionalServicesEN';
import ProfessionalServicesZH from './pages/solutions/ProfessionalServicesZH';
import ProfessionalServicesCN from './pages/solutions/ProfessionalServicesCN';
import AssociationCRMEN from './pages/solutions/AssociationCRMEN';
import AssociationCRMZH from './pages/solutions/AssociationCRMZH';
import AssociationCRMCN from './pages/solutions/AssociationCRMCN';
import WechatEShopEN from './pages/solutions/WechatEShopEN';
import WechatEShopZH from './pages/solutions/WechatEShopZH';
import WechatEShopCN from './pages/solutions/WechatEShopCN';

function Footer() {
  const location = useLocation();
  const path = location.pathname;
  const isZh = path.startsWith('/zh');
  const isCn = path.startsWith('/cn');

  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <div className="container">
        <p className="mb-1">
          {isCn ? 'WhatsApp: +852 6588 4054  |  邮箱: info@ahimhk.com.hk' : isZh ? 'WhatsApp: +852 6588 4054  |  電郵: info@ahimhk.com.hk' : 'WhatsApp: +852 6588 4054  |  Email: info@ahimhk.com.hk'}
        </p>
        <small>© 2024 AH Solutions Limited. All Rights Reserved.</small>
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
            <Route path="/cn" element={<HomeCN />} />
            <Route path="/en/solutions" element={<SolutionsEN />} />
            <Route path="/zh/solutions" element={<SolutionsZH />} />
            <Route path="/cn/solutions" element={<SolutionsCN />} />
            <Route path="/en/about" element={<AboutEN />} />
            <Route path="/zh/about" element={<AboutZH />} />
            <Route path="/cn/about" element={<AboutCN />} />
            <Route path="/en/contact" element={<ContactEN />} />
            <Route path="/zh/contact" element={<ContactZH />} />
            <Route path="/cn/contact" element={<ContactCN />} />

            {/* Blog Pages */}
            <Route path="/en/blog" element={<BlogEN />} />
            <Route path="/zh/blog" element={<BlogZH />} />
            <Route path="/cn/blog" element={<BlogCN />} />
            <Route path="/en/blog/:slug" element={<BlogPostEN />} />
            <Route path="/zh/blog/:slug" element={<BlogPostZH />} />
            <Route path="/cn/blog/:slug" element={<BlogPostCN />} />

            {/* Platform Detail Pages */}
            <Route path="/en/solutions/crm" element={<CRMPlatformEN />} />
            <Route path="/zh/solutions/crm" element={<CRMPlatformZH />} />
            <Route path="/cn/solutions/crm" element={<CRMPlatformCN />} />
            <Route path="/en/solutions/erp" element={<ERPPlatformEN />} />
            <Route path="/zh/solutions/erp" element={<ERPPlatformZH />} />
            <Route path="/cn/solutions/erp" element={<ERPPlatformCN />} />
            <Route path="/en/solutions/pos" element={<POSRetailEN />} />
            <Route path="/zh/solutions/pos" element={<POSRetailZH />} />
            <Route path="/cn/solutions/pos" element={<POSRetailCN />} />
            <Route path="/en/solutions/eshop" element={<EShopB2BEN />} />
            <Route path="/zh/solutions/eshop" element={<EShopB2BZH />} />
            <Route path="/cn/solutions/eshop" element={<EShopB2BCN />} />
            <Route path="/en/solutions/touchpoints" element={<TouchpointsEN />} />
            <Route path="/zh/solutions/touchpoints" element={<TouchpointsZH />} />
            <Route path="/cn/solutions/touchpoints" element={<TouchpointsCN />} />
            <Route path="/en/solutions/data" element={<DataIntegrationEN />} />
            <Route path="/zh/solutions/data" element={<DataIntegrationZH />} />
            <Route path="/cn/solutions/data" element={<DataIntegrationCN />} />

            {/* Showcase Detail Pages */}
            <Route path="/en/solutions/member-crm" element={<MemberCRMRetailEN />} />
            <Route path="/zh/solutions/member-crm" element={<MemberCRMRetailZH />} />
            <Route path="/cn/solutions/member-crm" element={<MemberCRMRetailCN />} />
            <Route path="/en/solutions/retail-erp" element={<RetailERPEN />} />
            <Route path="/zh/solutions/retail-erp" element={<RetailERPZH />} />
            <Route path="/cn/solutions/retail-erp" element={<RetailERPCN />} />
            <Route path="/en/solutions/professional" element={<ProfessionalServicesEN />} />
            <Route path="/zh/solutions/professional" element={<ProfessionalServicesZH />} />
            <Route path="/cn/solutions/professional" element={<ProfessionalServicesCN />} />
            <Route path="/en/solutions/association" element={<AssociationCRMEN />} />
            <Route path="/zh/solutions/association" element={<AssociationCRMZH />} />
            <Route path="/cn/solutions/association" element={<AssociationCRMCN />} />
            <Route path="/en/solutions/wechat" element={<WechatEShopEN />} />
            <Route path="/zh/solutions/wechat" element={<WechatEShopZH />} />
            <Route path="/cn/solutions/wechat" element={<WechatEShopCN />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
