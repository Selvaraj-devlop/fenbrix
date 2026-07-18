import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Building2, Settings, BookOpen, Rocket,
  Phone, Mail, MapPin, ShieldCheck, Heart, ChevronRight
} from 'lucide-react';
import { IoIosPaperPlane } from "react-icons/io";
import { FaArrowUp, FaInstagram, FaLinkedinIn, FaTwitter, FaDribbble } from "react-icons/fa";

import logoLightText from '../assets/fenbrix-logo.png';
import logoDarkText from '../assets/fenbrix-logo-dark.png';

const DribbbleIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.83-16.01 5.85m15.87 5.05c-3.77-1.39-8.49-1.57-11.5-.75"></path>
  </svg>
);

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleHashLink = (e, hash) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleComingSoon = (e, name) => {
    e.preventDefault();
    const msg = name === 'Blog' ? 'blog will be soon' : 
                name === 'Guides' ? 'guide will be soon' : 
                name === 'Case Studies' ? 'case studies will be soon' : `${name} will be soon`;
    window.dispatchEvent(new CustomEvent('show-toast', { detail: msg }));
  };

  return (
    <footer className="new-footer">
      <div className="container">
        <div className="footer-top-grid">
          
          {/* Brand Column */}
          <div className="footer-brand-col">
            <Link to="/" className="navbar-logo" onClick={scrollToTop} style={{ display: 'flex', alignItems: 'center' }}>
              <img src={logoDarkText} alt="Fenbrix Logo" className="logo-for-dark-bg" style={{ height: '110px', display: 'block' }} />
              <img src={logoLightText} alt="Fenbrix Logo" className="logo-for-light-bg" style={{ height: '110px', display: 'block' }} />
            </Link>
            <p className="brand-desc">
              We help startups and freelancers turn ideas into powerful digital solutions with creativity and modern technology. By combining innovative design with robust engineering, we deliver custom platforms built to scale and drive real business growth.
            </p>
            <div className="brand-dots">
              <span className="dot line"></span>
              <span className="dot small"></span>
              <span className="dot small"></span>
            </div>
            <div className="social-links">
              <a href="#" className="social-btn instagram" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="social-btn linkedin" aria-label="LinkedIn">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="social-btn twitter" aria-label="Twitter">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="social-btn dribbble" aria-label="Dribbble">
                <FaDribbble size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="footer-links-col with-divider">
            <div className="col-header">
              <h4 className="header-title">COMPANY</h4>
            </div>
            <div className="header-dots">
              <span className="dot line"></span>
              <span className="dot small"></span>
              <span className="dot small"></span>
            </div>
            <ul className="links-list">
              <li><Link to="/about" onClick={scrollToTop}>About Us <ChevronRight size={14} className="chevron" /></Link></li>
              <li><a href="/#approach" onClick={(e) => handleHashLink(e, 'approach')}>Our Approach <ChevronRight size={14} className="chevron" /></a></li>
              <li><a href="/#why-us" onClick={(e) => handleHashLink(e, 'why-us')}>Why Us <ChevronRight size={14} className="chevron" /></a></li>
              <li><Link to="/careers" onClick={scrollToTop}>Careers <ChevronRight size={14} className="chevron" /></Link></li>
              <li><Link to="" onClick={(e) => handleComingSoon(e, 'Blog')}>Blog <ChevronRight size={14} className="chevron" /></Link></li>
              <li><Link to="/contact" onClick={scrollToTop}>Contact Us <ChevronRight size={14} className="chevron" /></Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-links-col with-divider">
            <div className="col-header">
              <h4 className="header-title">SERVICES</h4>
            </div>
            <div className="header-dots">
              <span className="dot line"></span>
              <span className="dot small"></span>
              <span className="dot small"></span>
            </div>
            <ul className="links-list">
              <li><Link to="/services/web" onClick={scrollToTop}>Web Development <ChevronRight size={14} className="chevron" /></Link></li>
              <li><Link to="/services/mobile" onClick={scrollToTop}>Mobile App Development <ChevronRight size={14} className="chevron" /></Link></li>
              <li><Link to="/services/ui-ux" onClick={scrollToTop}>UI/UX Design <ChevronRight size={14} className="chevron" /></Link></li>
              <li><Link to="/services/ecommerce" onClick={scrollToTop}>E-commerce Solutions <ChevronRight size={14} className="chevron" /></Link></li>
              <li><Link to="/services/graphic-design" onClick={scrollToTop}>Graphic Design <ChevronRight size={14} className="chevron" /></Link></li>
              <li><Link to="/services/marketing" onClick={scrollToTop}>Digital Marketing <ChevronRight size={14} className="chevron" /></Link></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="footer-links-col with-divider">
            <div className="col-header">
              <h4 className="header-title">RESOURCES</h4>
            </div>
            <div className="header-dots">
              <span className="dot line"></span>
              <span className="dot small"></span>
              <span className="dot small"></span>
            </div>
            <ul className="links-list">
              <li><Link to="" onClick={(e) => handleComingSoon(e, 'Blog')}>Blog <ChevronRight size={14} className="chevron" /></Link></li>
              <li><Link to="" onClick={(e) => handleComingSoon(e, 'Guides')}>Guides <ChevronRight size={14} className="chevron" /></Link></li>
              <li><Link to="/faqs" onClick={scrollToTop}>FAQs <ChevronRight size={14} className="chevron" /></Link></li>
              <li><Link to="/tools" onClick={scrollToTop}>Tools <ChevronRight size={14} className="chevron" /></Link></li>
              <li><Link to="" onClick={(e) => handleComingSoon(e, 'Case Studies')}>Case Studies <ChevronRight size={14} className="chevron" /></Link></li>
            </ul>
          </div>

          {/* Column 5: Get In Touch */}
          <div className="footer-contact-col">
            <div className="col-header">
              <h4 className="header-title">GET IN TOUCH</h4>
            </div>
            <div className="header-dots">
              <span className="dot line"></span>
              <span className="dot small"></span>
              <span className="dot small"></span>
            </div>
            
            <div className="contact-info-list">
              <div className="contact-item">
                <div className="contact-icon"><Phone size={16} /></div>
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Mail size={16} /></div>
                <span>hello@fenbrix.com</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={16} /></div>
                <span>123, Tech Park,<br/>Bangalore, India - 560001</span>
              </div>
            </div>
          </div>

          {/* CTA Box spanning grid columns */}
          <div className="cta-box-wrapper">
            <div className="cta-box">
              <div className="cta-icon">
                <IoIosPaperPlane size={44} color="var(--primary-blue)" />
              </div>
              <div className="cta-content">
                <h5>Let's start something great!</h5>
                <p>Drop us a <a href="mailto:hello@fenbrix.com" className="cta-link">message</a>, we reply fast.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Separator */}
      <div className="footer-separator">
        <div className="notch"></div>
      </div>

      {/* Footer Bottom */}
      <div className="container">
        <div className="footer-bottom-flex">
          <div className="bottom-left">
            <div className="icon-box"><ShieldCheck size={20} /></div>
            <div className="copyright-text">
              <p>&copy; {new Date().getFullYear()} Fenbrix Tech Solution.</p>
              <p>All rights reserved.</p>
            </div>
          </div>
          
          <div className="fancy-divider hide-on-tablet"></div>

          <div className="bottom-center hide-on-tablet">
            <div className="icon-box"><Heart size={20} /></div>
            <div className="passion-text">
              <p>Made with passion</p>
              <p>for solutions that <span className="highlight">grow.</span></p>
            </div>
          </div>
          
          <div className="fancy-divider hide-on-tablet"></div>

          <div className="bottom-right">
            <Link to="/privacy" className="footer-bottom-link" onClick={scrollToTop}>Privacy Policy</Link>
            <span className="divider">|</span>
            <Link to="/terms" className="footer-bottom-link" onClick={scrollToTop}>Terms & Conditions</Link>
            <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
              <FaArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="bottom-corner-accent"></div>
    </footer>
  );
}

export default Footer;
