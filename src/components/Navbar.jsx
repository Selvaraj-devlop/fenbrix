import React, { useState, useEffect } from 'react';
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
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useModal();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu on window resize (if resized to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
    return () => { 
      document.body.style.overflow = 'unset'; 
      document.documentElement.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

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
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '#', isComingSoon: true },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`navbar glass ${scrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
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
          
          <button className="btn-outline-blue desktop-btn" onClick={openModal} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            Let's Talk <FaArrowRight style={{ marginLeft: '6px' }} />
          </button>

          <ThemeToggle />
          
          {/* Hamburger Toggle */}
          <button className={`hamburger-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Menu */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-backdrop" onClick={toggleMobileMenu}></div>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <span className="mobile-menu-brand">FEN<span className="brand-blue">BRIX</span></span>
            <button className="mobile-menu-close" onClick={toggleMobileMenu} aria-label="Close mobile menu">
              <X size={24} />
            </button>
          </div>
          
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.name} className="mobile-nav-dropdown-group">
                  <div 
                    className={`mobile-nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`} 
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    {link.name}
                    <ChevronDown size={20} style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                  </div>
                  <div className={`mobile-dropdown-container ${mobileServicesOpen ? 'open' : ''}`}>
                    {link.dropdownItems.map((item) => (
                      <Link key={item.name} to={item.path} className="mobile-dropdown-item" onClick={() => { toggleMobileMenu(); scrollToTop(); }}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`} 
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

          <div className="mobile-menu-footer" style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
            <button className="btn-glass-blue mobile-btn" onClick={() => { toggleMobileMenu(); openModal(); }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '85%', padding: '10px 0', fontSize: '0.8rem' }}>
              Let's Talk <FaArrowRight style={{ marginLeft: '8px' }} />
            </button>
            <Link to="/contact" className="btn-glass-blue mobile-btn" onClick={() => { toggleMobileMenu(); scrollToTop(); }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '85%', padding: '10px 0', textDecoration: 'none', fontSize: '0.8rem', marginBottom: '20px' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
