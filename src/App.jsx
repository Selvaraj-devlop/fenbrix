import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Tools from './pages/Tools';
import Faq from './pages/Faq';
import Ecommerce from './pages/services/Ecommerce';
import Marketing from './pages/services/Marketing';
import UiUx from './pages/services/UiUx';
import MobileApp from './pages/services/MobileApp';
import GraphicDesign from './pages/services/GraphicDesign';
import WebDev from './pages/services/WebDev';
import Portfolio from './pages/Portfolio';
import Careers from './pages/Careers';
import Footer from './components/Footer';
import GlobalToast from './components/GlobalToast';
import { ModalProvider } from './context/ModalContext';
import LeadModal from './components/LeadModal';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <ModalProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />
          <Route path="/services/marketing" element={<Marketing />} />
          <Route path="/services/ui-ux" element={<UiUx />} />
          <Route path="/services/mobile" element={<MobileApp />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/web" element={<WebDev />} />
        </Routes>
        <Footer />
        <LeadModal />
        <GlobalToast />
      </Router>
    </ModalProvider>
  );
}

export default App;
