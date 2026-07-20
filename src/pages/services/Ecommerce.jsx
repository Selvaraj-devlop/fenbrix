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
import homeRocketImg from '../../assets/home-rocket.png';

export default function Ecommerce() {
  const { openModal } = useModal();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="srv-page page-animate">
      {/* 1. HERO SECTION */}
      <section className="srv-hero">
        <div className="container srv-hero-grid" data-aos="fade-up">
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
             <div style={{position: 'relative', width: '100%', maxWidth: '480px', margin: '0 auto', height: '380px', marginBottom: '60px'}}>
              
              <div className="float-up" style={{position: 'absolute', top: '0', right: '0', width: '320px', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', overflow: 'hidden', zIndex: 2}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 14px', borderBottom: '1px solid var(--border-color)'}}>
                  <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F57'}}></span>
                  <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E'}}></span>
                  <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#28C840'}}></span>
                  <div style={{flex: 1, marginLeft: '8px', height: '22px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', display: 'flex', alignItems: 'center', paddingLeft: '10px', fontSize: '10px', color: 'var(--accent-silver)'}}>Store Admin</div>
                </div>
                <div style={{padding: '20px'}}>
                  <div style={{display: 'flex', gap: '12px', marginBottom: '16px'}}>
                    <div style={{flex: 1, height: '80px', background: 'rgba(37,99,255,0.08)', borderRadius: '12px', border: '1px solid rgba(37,99,255,0.15)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                       <ShoppingCart size={24} color="#2563FF" style={{marginBottom: '4px'}}/>
                       <span style={{fontSize: '12px', fontWeight: 'bold', color: '#fff'}}>142</span>
                    </div>
                    <div style={{flex: 1, height: '80px', background: 'rgba(40,200,64,0.08)', borderRadius: '12px', border: '1px solid rgba(40,200,64,0.15)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                       <CreditCard size={24} color="#28C840" style={{marginBottom: '4px'}}/>
                       <span style={{fontSize: '12px', fontWeight: 'bold', color: '#fff'}}>$8.4K</span>
                    </div>
                  </div>
                  <div style={{height: '8px', background: 'var(--border-color)', borderRadius: '4px', width: '90%', marginBottom: '8px'}}></div>
                  <div style={{height: '8px', background: 'var(--border-color)', borderRadius: '4px', width: '60%'}}></div>
                </div>
              </div>

              <div className="float-down" style={{position: 'absolute', bottom: '0', left: '0', width: '260px', background: '#0d1117', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 20px 50px rgba(0,0,0,0.4)', overflow: 'hidden', zIndex: 3, padding: '20px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
                  <div style={{width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Package size={20} color="#fff" />
                  </div>
                  <div>
                    <div style={{fontSize: '12px', color: '#fff', fontWeight: 'bold', marginBottom: '4px'}}>New Order #8942</div>
                    <div style={{fontSize: '10px', color: '#8b949e'}}>Just now • $124.00</div>
                  </div>
                </div>
                <div style={{display: 'flex', gap: '8px'}}>
                  <div style={{flex: 1, height: '24px', background: 'rgba(37,99,255,0.15)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#79c0ff', fontWeight: 'bold'}}>Fulfill</div>
                  <div style={{flex: 1, height: '24px', background: 'rgba(255,255,255,0.04)', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#8b949e'}}>Details</div>
                </div>
              </div>

               <div className="float-side" style={{position: 'absolute', top: '55%', right: '-10px', background: 'linear-gradient(135deg, #2563FF, #6366f1)', color: '#fff', padding: '10px 18px', borderRadius: '12px', fontSize: '12px', fontWeight: '700', boxShadow: '0 10px 30px rgba(37,99,255,0.4)', zIndex: 4, display: 'flex', alignItems: 'center', gap: '8px'}}>
                 <TrendingUp size={16} /> Sales Growth
               </div>

            </div>
          </div>
        </div>
        
        {/* Features Strip */}
        <div className="container">
          <div className="stats-right" data-aos="fade-up" style={{width: '100%'}}>
            <div className="stat-card-light">
              <div className="scl-icon"><ShieldCheck size={28} /></div>
              <h5>Secure & Reliable</h5>
              <p>Secure payments and data protection.</p>
            </div>
            <div className="stat-card-light">
              <div className="scl-icon"><Zap size={28} /></div>
              <h5>High Performance</h5>
              <p>Optimized for speed and conversions.</p>
            </div>
            <div className="stat-card-light">
              <div className="scl-icon"><Smartphone size={28} /></div>
              <h5>Mobile Friendly</h5>
              <p>Seamless experience across all devices.</p>
            </div>
            <div className="stat-card-light">
              <div className="scl-icon"><TrendingUp size={28} /></div>
              <h5>Growth Focused</h5>
              <p>Built to scale with your business growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE OFFER */}
      <section className="srv-section" data-aos="fade-up">
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
      <section className="srv-section" data-aos="fade-up">
        <div className="container">
          <h2 className="srv-section-title">Platforms We <span className="highlight-blue">Work With</span></h2>
          
          <div className="srv-tools-grid" data-aos="fade-up">
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
      <section className="srv-section" data-aos="fade-up">
        <div className="container">
          <h2 className="srv-section-title">Our E-Commerce Development <span className="highlight-blue">Process</span></h2>
          
          <div className="srv-timeline" data-aos="fade-up">
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
      <section className="srv-section" data-aos="fade-up">
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
      <section className="srv-section" data-aos="fade-up" style={{paddingBottom: '40px'}}>
        <div className="container">
          <div className="hcta-box">
            <div className="hcta-left">
              <div className="hcta-image-wrapper">
                <img src={homeRocketImg} alt="Have a project in mind" className="hcta-full-image" />
              </div>
            </div>
            <div className="hcta-right">
              <div className="hcta-text">
                <h2>Ready to Build Your <span className="highlight-blue">Online Store?</span></h2>
                <p>Let's build a powerful e-commerce solution that helps you attract more customers and increase sales.</p>
              </div>
              <div className="hcta-actions">
                <button className="btn-primary" onClick={openModal}>
                  Let's Discuss Your Project <ArrowRight size={16} style={{marginLeft: '8px'}}/>
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
