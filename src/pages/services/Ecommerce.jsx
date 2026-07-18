import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, Zap, Smartphone, TrendingUp, 
  Store, ShoppingCart, CreditCard, Package, Tag, BarChart2,
  FileText, PenTool, Code, CheckSquare, Rocket, CheckCircle
} from 'lucide-react';
import { SiShopify, SiWoocommerce } from 'react-icons/si';
import { FaOpencart, FaCode } from 'react-icons/fa6';
import { useModal } from '../../context/ModalContext';

export default function Ecommerce() {
  const { openModal } = useModal();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="srv-page page-animate">
      {/* 1. HERO SECTION */}
      <section className="srv-hero">
        <div className="container srv-hero-grid">
          <div className="srv-hero-left">
            <div className="eyebrow-heading">E-COMMERCE</div>
            
            <h1 className="srv-hero-title">
              E-Commerce <br/><span className="highlight-blue">Solutions</span>
            </h1>
            
            <p className="srv-hero-desc">
              We build secure, scalable, and feature-rich e-commerce platforms that drive sales, enhance customer experiences, and grow your business online.
            </p>
            
            <div className="srv-hero-actions">
              <button className="btn-primary" onClick={openModal}>
                Start Your Project <ArrowRight size={16} />
              </button>
              <button className="btn-outline-blue">
                View Our Work
              </button>
            </div>
          </div>
          
          <div className="srv-hero-right">
            {/* CSS Laptop Mockup for E-commerce */}
            <div className="hero-mockup-container" style={{transform: 'scale(0.85)'}}>
              <div className="mockup-laptop">
                <div className="ml-screen" style={{background: '#fff'}}>
                  <div className="ml-header">
                    <span className="ml-dot red"></span>
                    <span className="ml-dot yellow"></span>
                    <span className="ml-dot green"></span>
                  </div>
                  <div className="ml-body" style={{background: '#f9fafb', flexDirection: 'column'}}>
                    <div style={{padding: '12px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', color: '#333'}}>
                      <span style={{fontWeight: 'bold', fontSize: '14px'}}>ShopKart</span>
                      <div style={{display: 'flex', gap: '12px', fontSize: '10px'}}>
                        <span>Home</span><span>Shop</span><span>Categories</span><span>Blog</span>
                      </div>
                    </div>
                    <div style={{display: 'flex', padding: '20px', gap: '20px'}}>
                      <div style={{flex: 1}}>
                        <h3 style={{color: '#111', fontSize: '18px', marginBottom: '8px'}}>Discover Products<br/>That Inspire</h3>
                        <p style={{color: '#666', fontSize: '10px', marginBottom: '16px'}}>Premium quality. Best prices. Great experience.</p>
                        <button style={{background: '#2563FF', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', fontSize: '10px'}}>Shop Now</button>
                      </div>
                      <div style={{width: '120px', height: '100px', background: '#e0e7ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Store size={40} color="#2563FF" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-base">
                  <div className="ml-trackpad"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Strip */}
        <div className="container">
          <div className="srv-features-strip">
            <div className="srv-feature-item">
              <div className="srv-feature-icon"><ShieldCheck size={24} /></div>
              <h4>Secure & Reliable</h4>
              <p>Secure payments and data protection</p>
            </div>
            <div className="srv-feature-item">
              <div className="srv-feature-icon"><Zap size={24} /></div>
              <h4>High Performance</h4>
              <p>Optimized for speed and conversions</p>
            </div>
            <div className="srv-feature-item">
              <div className="srv-feature-icon"><Smartphone size={24} /></div>
              <h4>Mobile Friendly</h4>
              <p>Seamless experience across all devices</p>
            </div>
            <div className="srv-feature-item">
              <div className="srv-feature-icon"><TrendingUp size={24} /></div>
              <h4>Growth Focused</h4>
              <p>Built to scale with your business growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE OFFER */}
      <section className="srv-section alt-bg">
        <div className="container">
          <h2 className="srv-section-title">What We <span className="highlight-blue">Offer</span></h2>
          
          <div className="srv-grid">
            <div className="srv-card">
              <div className="srv-card-icon"><Store size={32} /></div>
              <h4>Custom E-Commerce Development</h4>
              <p>Tailored online stores built to match your brand and business goals.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><ShoppingCart size={32} /></div>
              <h4>Shopping Cart & Checkout</h4>
              <p>Smooth and secure checkout process for higher conversions.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><CreditCard size={32} /></div>
              <h4>Payment Gateway Integration</h4>
              <p>Integrated with trusted payment gateways for safe transactions.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><Package size={32} /></div>
              <h4>Inventory & Order Management</h4>
              <p>Manage products, stock, orders and shipments efficiently.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><Tag size={32} /></div>
              <h4>Discounts & Promotions</h4>
              <p>Boost sales with coupons, offers, and dynamic pricing rules.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><BarChart2 size={32} /></div>
              <h4>Analytics & Reports</h4>
              <p>Get real-time insights and reports to make smarter decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLATFORMS WE WORK WITH */}
      <section className="srv-section">
        <div className="container">
          <h2 className="srv-section-title">Platforms We <span className="highlight-blue">Work With</span></h2>
          
          <div className="srv-tools-grid">
            <div className="srv-tool-logo">
              <SiShopify size={48} color="#95BF47" />
              <span>Shopify</span>
            </div>
            <div className="srv-tool-logo">
              <SiWoocommerce size={48} color="#96588A" />
              <span>WooCommerce</span>
            </div>
            <div className="srv-tool-logo">
              <ShoppingCart size={48} color="#EE672F" />
              <span>Magento</span>
            </div>
            <div className="srv-tool-logo">
              <FaOpencart size={48} color="#2DB0ED" />
              <span>OpenCart</span>
            </div>
            <div className="srv-tool-logo">
              <FaCode size={48} color="#2563FF" />
              <span>Custom Solution</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS TIMELINE */}
      <section className="srv-section alt-bg">
        <div className="container">
          <h2 className="srv-section-title">Our E-Commerce Development <span className="highlight-blue">Process</span></h2>
          
          <div className="srv-timeline">
            <div className="srv-timeline-line"></div>
            
            <div className="srv-step">
              <div className="srv-step-icon"><FileText size={32} /></div>
              <h4><span>01.</span> Discovery</h4>
              <p>We understand your business, goals, and target audience to plan the right strategy.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><PenTool size={32} /></div>
              <h4><span>02.</span> Planning & Design</h4>
              <p>We create wireframes and stunning UI/UX designs focused on conversions.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><Code size={32} /></div>
              <h4><span>03.</span> Development</h4>
              <p>We build a fast, secure, and scalable e-commerce store with clean code.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><CheckSquare size={32} /></div>
              <h4><span>04.</span> Testing</h4>
              <p>We test thoroughly for functionality, performance, and security.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><Rocket size={32} /></div>
              <h4><span>05.</span> Launch & Support</h4>
              <p>We deploy your store and provide continuous support for your growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="srv-section">
        <div className="container">
          <div className="srv-why-us">
            <div className="srv-why-box">
              <h3>Why Choose <span className="highlight-blue">Fenbrix?</span></h3>
              <ul className="srv-why-list">
                <li><CheckCircle size={20} /> Experienced developers and e-commerce experts</li>
                <li><CheckCircle size={20} /> Custom solutions tailored to your business needs</li>
                <li><CheckCircle size={20} /> On-time delivery and transparent communication</li>
                <li><CheckCircle size={20} /> Ongoing support and maintenance</li>
                <li><CheckCircle size={20} /> Focus on performance, security, and scalability</li>
              </ul>
            </div>
            
            <div className="srv-why-stats">
              <div className="srv-stat-card">
                <div className="srv-stat-icon"><ShoppingCart size={32} /></div>
                <h3>50+</h3>
                <p>Stores Delivered</p>
              </div>
              <div className="srv-stat-card">
                <div className="srv-stat-icon"><CheckCircle size={32} /></div>
                <h3>98%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div className="srv-stat-card">
                <div className="srv-stat-icon"><TrendingUp size={32} /></div>
                <h3>40%+</h3>
                <p>Average Sales Growth*</p>
              </div>
              <div className="srv-stat-card">
                <div className="srv-stat-icon"><ShieldCheck size={32} /></div>
                <h3>24/7</h3>
                <p>Support Available</p>
              </div>
              <p className="srv-why-note">*Based on client reports and case studies</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="srv-section alt-bg" style={{paddingBottom: '100px'}}>
        <div className="container">
          <div className="hcta-box">
            <div className="hcta-left" style={{flex: '0 0 25%'}}>
               <div style={{width: '120px', height: '100px', background: '#2563FF', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(37,99,255,0.4)'}}>
                  <ShoppingCart size={64} color="#fff" />
               </div>
            </div>
            <div className="hcta-right">
              <h2>Ready to Build Your <br/><span className="highlight-blue">Online Store?</span></h2>
              <p>Let's build a powerful e-commerce solution that helps you attract more customers and increase sales.</p>
              
              <div className="hcta-actions">
                <button className="btn-primary" onClick={openModal}>
                  Let's Discuss Your Project <ArrowRight size={16} />
                </button>
                <div className="hcta-email">
                  Or email us at <a href="mailto:hello@fenbrix.com">hello@fenbrix.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
