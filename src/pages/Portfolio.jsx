import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, FolderOpen, Image as ImageIcon,
  Code, Smartphone, PenTool, ShoppingCart, Megaphone, Paintbrush,
  Search, PenLine, Layout, Code2, CheckCircle, Send,
  Smile, Lightbulb, Headset, ArrowRight
} from 'lucide-react';
import { useModal } from '../context/ModalContext';
import headsetImg from '../assets/portfolio-headset.png';
export default function Portfolio() {
  const { openModal } = useModal();
  const [activeTab, setActiveTab] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const portfolioTabs = [
    {
      color: '#ff5f56',
      icon1: <FolderOpen size={80} color="#334155" strokeWidth={1} />,
      icon2: <ImageIcon size={40} color="var(--primary-blue)" strokeWidth={1.5} />,
      title: 'Masterpieces in the Making',
      desc: 'Our digital canvas is currently being painted with extraordinary experiences.'
    },
    {
      color: '#ffbd2e',
      icon1: <Code2 size={80} color="#334155" strokeWidth={1} />,
      icon2: <Smartphone size={40} color="var(--primary-blue)" strokeWidth={1.5} />,
      title: 'Innovative Solutions',
      desc: 'We craft powerful, scalable applications to solve complex problems and deliver seamless user experiences.'
    },
    {
      color: '#27c93f',
      icon1: <Rocket size={80} color="#334155" strokeWidth={1} />,
      icon2: <Search size={40} color="var(--primary-blue)" strokeWidth={1.5} />,
      title: 'Launching Soon',
      desc: 'Stay tuned for the grand reveal of our finest projects. We are finalizing case studies that showcase our design brilliance and technical expertise.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % portfolioTabs.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [portfolioTabs.length]);

  return (
    <div className="srv-page page-animate">
      {/* 1. HERO SECTION */}
      <section className="srv-hero" style={{paddingBottom: '20px'}}>
        <div className="container srv-hero-grid">
          <div className="srv-hero-left">
            <div className="eyebrow-heading" style={{fontSize: '0.75rem'}}>OUR PORTFOLIO</div>
            
            <h1 className="srv-hero-title" style={{fontSize: '1.5rem'}}>
              Our Portfolio<br/>
              <span className="highlight-blue">In Progress.<br/>The Best Is Coming.</span>
            </h1>
            
            <div style={{width: '60px', height: '3px', background: 'var(--primary-blue)', margin: '24px 0'}}></div>
            
            <p className="srv-hero-desc" style={{fontSize: '0.8rem'}}>
              We're a new team with big ideas and even bigger passion. We haven't completed any projects yet, but we're working hard to build powerful digital solutions for amazing clients.
            </p>
            
            <div style={{background: 'rgba(37, 99, 255, 0.12)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(37, 99, 255, 0.25)', borderRadius: '12px', padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '16px', maxWidth: '450px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)'}}>
               <div style={{color: 'var(--primary-blue)', flexShrink: 0}}><Rocket size={28} /></div>
               <div>
                  <h4 style={{fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '4px'}}>Great things take time.</h4>
                  <p style={{fontSize: '0.7rem', color: 'var(--accent-silver)'}}>Our portfolio is under construction while we turn ideas into impactful digital experiences.</p>
               </div>
            </div>
          </div>
          
          <div className="srv-hero-right" style={{justifyContent: 'center'}}>
             <div className="portfolio-preview-box" style={{display: 'flex', flexDirection: 'column', background: 'rgba(37, 99, 255, 0.12)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(37, 99, 255, 0.25)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.2)'}}>
                <div style={{height: '32px', flexShrink: 0, background: 'rgba(37, 99, 255, 0.05)', borderBottom: '1px solid rgba(37, 99, 255, 0.25)', display: 'flex', alignItems: 'center', padding: '0 16px', gap: '8px'}}>
                   {portfolioTabs.map((tab, idx) => (
                      <div 
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        style={{
                           width: '12px', height: '12px', borderRadius: '50%', background: tab.color,
                           cursor: 'pointer',
                           opacity: activeTab === idx ? 1 : 0.4,
                           transform: activeTab === idx ? 'scale(1.2)' : 'scale(1)',
                           transition: 'all 0.3s ease'
                        }}
                      ></div>
                   ))}
                </div>
                <div style={{flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', transition: 'all 0.3s ease'}}>
                   <div style={{position: 'relative', marginBottom: '24px'}}>
                      {portfolioTabs[activeTab].icon1}
                      <div style={{position: 'absolute', top: '-10px', right: '-10px', background: 'var(--card-bg)', borderRadius: '8px', padding: '4px', transform: 'rotate(15deg)'}}>
                         {portfolioTabs[activeTab].icon2}
                      </div>
                   </div>
                   <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '8px'}}>{portfolioTabs[activeTab].title}</h3>
                   <p style={{color: 'var(--accent-silver)', fontSize: '0.95rem'}}>{portfolioTabs[activeTab].desc}</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE'RE WORKING ON (Services Grid) */}
      <section className="home-services-section" data-aos="fade-up">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '30px'}}>
             <h2 className="section-title">What We're <span className="highlight-blue">Working On</span></h2>
             <p className="section-subtitle" style={{margin: '0 auto', maxWidth: '600px'}}>We are building solutions across different domains to help businesses grow and succeed.</p>
          </div>
          
          <div className="services-6-grid">
            <div className="svc-card">
              <div className="svc-icon"><Code size={24} /></div>
              <h4>Web Development</h4>
              <p>Fast, secure, and scalable websites and web applications.</p>
              <Link to="/services/web" className="svc-link">Learn More <ArrowRight size={14} /></Link>
            </div>
            <div className="svc-card">
              <div className="svc-icon"><Smartphone size={24} /></div>
              <h4>Mobile App Development</h4>
              <p>User-friendly mobile apps for iOS and Android platforms.</p>
              <Link to="/services/mobile" className="svc-link">Learn More <ArrowRight size={14} /></Link>
            </div>
            <div className="svc-card">
              <div className="svc-icon"><ShoppingCart size={24} /></div>
              <h4>E-Commerce Solutions</h4>
              <p>Powerful online stores that increase sales and simplify management.</p>
              <Link to="/services/ecommerce" className="svc-link">Learn More <ArrowRight size={14} /></Link>
            </div>
            <div className="svc-card">
              <div className="svc-icon"><PenTool size={24} /></div>
              <h4>UI/UX Design</h4>
              <p>Beautiful, intuitive designs that create amazing user experiences.</p>
              <Link to="/services/ui-ux" className="svc-link">Learn More <ArrowRight size={14} /></Link>
            </div>
            <div className="svc-card">
              <div className="svc-icon"><Megaphone size={24} /></div>
              <h4>Digital Marketing</h4>
              <p>Data-driven strategies to grow your brand and reach the right audience.</p>
              <Link to="/services/marketing" className="svc-link">Learn More <ArrowRight size={14} /></Link>
            </div>
            <div className="svc-card">
              <div className="svc-icon"><Paintbrush size={24} /></div>
              <h4>Graphic Design</h4>
              <p>Creative designs that communicate your brand and leave a lasting impact.</p>
              <Link to="/services/graphic-design" className="svc-link">Learn More <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS BAR */}
      <div className="container" style={{ position: 'relative', zIndex: 10, margin: '20px auto 40px' }}>
        <div className="stats-right" data-aos="fade-up">
          <div className="stat-card-light">
            <div className="scl-icon"><Rocket size={28} /></div>
            <h3>0+</h3>
            <h5>Projects</h5>
            <p>Completed</p>
          </div>
          <div className="stat-card-light">
            <div className="scl-icon"><Smile size={28} /></div>
            <h3>100%</h3>
            <h5>Passion</h5>
            <p>& Dedication</p>
          </div>
          <div className="stat-card-light">
            <div className="scl-icon"><Lightbulb size={28} /></div>
            <h3>5+</h3>
            <h5>Services</h5>
            <p>We Offer</p>
          </div>
          <div className="stat-card-light">
            <div className="scl-icon"><Headset size={28} /></div>
            <h3>24/7</h3>
            <h5>Support</h5>
            <p>Available</p>
          </div>
        </div>
      </div>

      {/* 4. OUR APPROACH */}
      <section className="home-approach-section" style={{background: 'transparent', padding: '20px 0 40px'}} data-aos="fade-up">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '30px'}}>
            <h2 className="section-title">Our <span className="highlight-blue">Approach</span></h2>
          </div>
          
          <div className="portfolio-process">
            <div className="pp-step" data-aos="fade-up">
              <div className="pp-num">01</div>
              <div className="pp-icon-wrapper"><Search size={28} /></div>
              <div className="pp-content">
                <h4>Discover</h4>
                <p>We understand your requirements and business goals.</p>
              </div>
            </div>
            
            <div className="pp-step" data-aos="fade-up">
              <div className="pp-num">02</div>
              <div className="pp-icon-wrapper"><PenLine size={28} /></div>
              <div className="pp-content">
                <h4>Plan</h4>
                <p>We plan the right strategy tailored to your needs.</p>
              </div>
            </div>
            
            <div className="pp-step" data-aos="fade-up">
              <div className="pp-num">03</div>
              <div className="pp-icon-wrapper"><Layout size={28} /></div>
              <div className="pp-content">
                <h4>Design</h4>
                <p>We craft stunning designs that align with your vision.</p>
              </div>
            </div>
            
            <div className="pp-step" data-aos="fade-up">
              <div className="pp-num">04</div>
              <div className="pp-icon-wrapper"><Code2 size={28} /></div>
              <div className="pp-content">
                <h4>Develop</h4>
                <p>We build high-quality, scalable and secure solutions.</p>
              </div>
            </div>
            
            <div className="pp-step" data-aos="fade-up">
              <div className="pp-num">05</div>
              <div className="pp-icon-wrapper"><CheckCircle size={28} /></div>
              <div className="pp-content">
                <h4>Test</h4>
                <p>We test thoroughly to ensure performance and security.</p>
              </div>
            </div>
            
            <div className="pp-step" data-aos="fade-up">
              <div className="pp-num">06</div>
              <div className="pp-icon-wrapper"><Rocket size={28} /></div>
              <div className="pp-content">
                <h4>Launch</h4>
                <p>We deploy and support your product for continuous growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="home-cta-section" style={{background: 'transparent'}}>
        <div className="container">
          <div className="hcta-box">
            <div className="hcta-left" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <div style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, rgba(37,99,255,0.1), rgba(99,102,241,0.05))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(37,99,255,0.3)', boxShadow: '0 4px 12px rgba(37,99,255,0.08)' }}>
                  <img src={headsetImg} alt="Headset" style={{width: '65px', height: '65px', objectFit: 'contain'}} />
               </div>
            </div>
            <div className="hcta-right">
              <div className="hcta-text">
                <h2>Have a project <span className="highlight-blue">in mind?</span></h2>
                <p>Let's create something amazing together.<br/>We're ready when you are!</p>
              </div>
              
              <div className="hcta-actions">
                <button className="btn-primary" onClick={openModal}>
                  Start Your Project <ArrowRight size={16} style={{marginLeft: '8px'}} />
                </button>
                <div className="hcta-email">
                  Or email us at <a href="mailto:hello@fenbrix.com">hello@fenbrix.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
