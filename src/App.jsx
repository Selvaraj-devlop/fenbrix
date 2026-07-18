import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Tools from './pages/Tools';
import Faq from './pages/Faq';
import Footer from './components/Footer';
import GlobalToast from './components/GlobalToast';
import { ModalProvider } from './context/ModalContext';
import LeadModal from './components/LeadModal';

function App() {
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
          {/* We will add other routes here */}
        </Routes>
        <Footer />
        <LeadModal />
        <GlobalToast />
      </Router>
    </ModalProvider>
  );
}

export default App;
