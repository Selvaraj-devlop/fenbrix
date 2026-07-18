import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { FaArrowRight } from "react-icons/fa6";
import logoLightText from '../assets/fenbrix-logo.png';
import logoDarkText from '../assets/fenbrix-logo-dark.png';
import ThemeToggle from './ThemeToggle';
import { useModal } from '../context/ModalContext';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { openModal } = useModal();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleComingSoon = (e, name) => {
    e.preventDefault();
    const msg = name === 'Blog' ? 'blog will be soon' : `${name} will be soon`;
    window.dispatchEvent(new CustomEvent('show-toast', { detail: msg }));
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '#', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Web Development', path: '/services/web' },
        { name: 'Mobile App Development', path: '/services/mobile' },
        { name: 'UI/UX Design', path: '/services/ui-ux' },
        { name: 'E-commerce Solutions', path: '/services/ecommerce' },
        { name: 'Graphic Design', path: '/services/graphic-design' },
        { name: 'Digital Marketing', path: '/services/marketing' },
      ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '#', isComingSoon: true },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="navbar glass">
      <div className="navbar-container container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={scrollToTop} style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logoDarkText} alt="Fenbrix Logo" className="logo-for-dark-bg" style={{ height: '52px', display: 'block' }} />
          <img src={logoLightText} alt="Fenbrix Logo" className="logo-for-light-bg" style={{ height: '52px', display: 'block' }} />
        </Link>

        {/* Desktop Links */}
        <nav className="navbar-links desktop-links">
          {navLinks.map((link) => (
            link.hasDropdown ? (
              <div key={link.name} className={`nav-item-dropdown ${location.pathname.startsWith('/services') ? 'active' : ''}`}>
                <div className={`nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                  {link.name}
                  <ChevronDown size={14} className="dropdown-icon" style={{ marginLeft: '4px' }} />
                </div>
                <div className="dropdown-menu">
                  {link.dropdownItems.map((item) => (
                    <Link key={item.name} to={item.path} className="dropdown-item" onClick={scrollToTop}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={(e) => link.isComingSoon ? handleComingSoon(e, link.name) : scrollToTop()}
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>

        {/* Desktop/Tablet Actions */}
        <div className="navbar-actions">
          <ThemeToggle />
          
          <button className="btn-outline-blue desktop-btn" onClick={openModal} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            Let's Talk <FaArrowRight style={{ marginLeft: '6px' }} />
          </button>

          {/* Hamburger Toggle */}
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Menu */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <button className="mobile-menu-close" onClick={toggleMobileMenu} aria-label="Close mobile menu">
            <X size={32} />
          </button>
          
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.name} className="mobile-nav-dropdown-group">
                  <div 
                    className="mobile-nav-link" 
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    {link.name}
                    <ChevronDown size={20} style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                  </div>
                  {mobileServicesOpen && (
                    <div className="mobile-dropdown-container">
                      {link.dropdownItems.map((item) => (
                        <Link key={item.name} to={item.path} className="mobile-dropdown-item" onClick={() => { toggleMobileMenu(); scrollToTop(); }}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="mobile-nav-link" 
                  onClick={(e) => {
                    if (link.isComingSoon) {
                      handleComingSoon(e, link.name);
                      setIsMobileMenuOpen(false);
                    } else {
                      setIsMobileMenuOpen(false);
                      scrollToTop();
                    }
                  }}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          <div className="mobile-menu-footer">
            <button className="btn-outline-blue mobile-btn" onClick={() => { toggleMobileMenu(); openModal(); }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Let's Talk <FaArrowRight style={{ marginLeft: '6px' }} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
