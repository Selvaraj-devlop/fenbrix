import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, FolderOpen, Image as ImageIcon,
  Code, Smartphone, PenTool, ShoppingCart, Megaphone, Paintbrush,
  Search, PenLine, Layout, Code2, CheckCircle, Send,
  Smile, Lightbulb, Headset, ArrowRight
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function Portfolio() {
  const { openModal } = useModal();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="srv-page page-animate">
      {/* 1. HERO SECTION */}
      <section className="srv-hero" style={{paddingBottom: '80px'}}>
        <div className="container srv-hero-grid">
          <div className="srv-hero-left">
            <div className="eyebrow-heading">OUR PORTFOLIO</div>
            
            <h1 className="srv-hero-title">
              Our Portfolio<br/>
              <span className="highlight-blue">In Progress.<br/>The Best Is Coming.</span>
            </h1>
            
            <div style={{width: '60px', height: '3px', background: 'var(--primary-blue)', margin: '24px 0'}}></div>
            
            <p className="srv-hero-desc">
              We're a new team with big ideas and even bigger passion. We haven't completed any projects yet, but we're working hard to build powerful digital solutions for amazing clients.
            </p>
            
            <div style={{background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '16px', maxWidth: '450px'}}>
               <div style={{color: 'var(--primary-blue)', flexShrink: 0}}><Rocket size={28} /></div>
               <div>
                  <h4 style={{fontSize: '1rem', fontWeight: 'bold', marginBottom: '4px'}}>Great things take time.</h4>
                  <p style={{fontSize: '0.85rem', color: 'var(--accent-silver)'}}>Our portfolio is under construction while we turn ideas into impactful digital experiences.</p>
               </div>
            </div>
          </div>
          
          <div className="srv-hero-right" style={{justifyContent: 'center'}}>
             <div style={{width: '100%', maxWidth: '450px', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)'}}>
                <div style={{height: '32px', background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', padding: '0 16px', gap: '6px'}}>
                   <div style={{width: '8px', height: '8px', borderRadius: '50%', background: 'var(--border-color)'}}></div>
                   <div style={{width: '8px', height: '8px', borderRadius: '50%', background: 'var(--border-color)'}}></div>
                   <div style={{width: '8px', height: '8px', borderRadius: '50%', background: 'var(--border-color)'}}></div>
                </div>
                <div style={{padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                   <div style={{position: 'relative', marginBottom: '24px'}}>
                      <FolderOpen size={80} color="#334155" strokeWidth={1} />
                      <div style={{position: 'absolute', top: '-10px', right: '-10px', background: 'var(--card-bg)', borderRadius: '8px', padding: '4px', transform: 'rotate(15deg)'}}>
                         <ImageIcon size={40} color="var(--primary-blue)" strokeWidth={1.5} />
                      </div>
                   </div>
                   <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '8px'}}>No Projects Yet</h3>
                   <p style={{color: 'var(--accent-silver)', fontSize: '0.95rem'}}>But amazing work is on the way!</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE'RE WORKING ON (Services Grid) */}
      <section className="home-services-section" data-aos="fade-up">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
             <h2 className="section-title">What We're <span className="highlight-blue">Working On</span></h2>
             <p className="section-subtitle" style={{margin: '0 auto', maxWidth: '600px'}}>We are building solutions across different domains to help businesses grow and succeed.</p>
          </div>
          
          <div className="services-6-grid">
            <div className="svc-card">
              <div className="svc-icon"><Code size={24} /></div>
              <h4>Web Development</h4>
              <p>Fast, secure, and scalable websites and web applications.</p>
            </div>
            <div className="svc-card">
              <div className="svc-icon"><Smartphone size={24} /></div>
              <h4>Mobile App Development</h4>
              <p>User-friendly mobile apps for iOS and Android platforms.</p>
            </div>
            <div className="svc-card">
              <div className="svc-icon"><ShoppingCart size={24} /></div>
              <h4>E-Commerce Solutions</h4>
              <p>Powerful online stores that increase sales and simplify management.</p>
            </div>
            <div className="svc-card">
              <div className="svc-icon"><PenTool size={24} /></div>
              <h4>UI/UX Design</h4>
              <p>Beautiful, intuitive designs that create amazing user experiences.</p>
            </div>
            <div className="svc-card">
              <div className="svc-icon"><Megaphone size={24} /></div>
              <h4>Digital Marketing</h4>
              <p>Data-driven strategies to grow your brand and reach the right audience.</p>
            </div>
            <div className="svc-card">
              <div className="svc-icon"><Paintbrush size={24} /></div>
              <h4>Graphic Design</h4>
              <p>Creative designs that communicate your brand and leave a lasting impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS BAR */}
      <div className="container" style={{ position: 'relative', zIndex: 10, margin: '40px auto 80px' }}>
        <div className="home-stats-bar" style={{marginTop: 0}} data-aos="fade-up">
          <div className="stat-item">
            <div className="stat-icon-wrapper"><Rocket size={24} color="var(--primary-blue)" /></div>
            <div className="stat-text">
              <h3>0+</h3>
              <p>Projects Completed</p>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon-wrapper"><Smile size={24} color="var(--primary-blue)" /></div>
            <div className="stat-text">
              <h3>100%</h3>
              <p>Passion & Dedication</p>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon-wrapper"><Lightbulb size={24} color="var(--primary-blue)" /></div>
            <div className="stat-text">
              <h3>5+</h3>
              <p>Services We Offer</p>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon-wrapper"><Headset size={24} color="var(--primary-blue)" /></div>
            <div className="stat-text">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. OUR APPROACH */}
      <section className="home-approach-section" style={{background: 'transparent', padding: '40px 0 100px'}} data-aos="fade-up">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <h2 className="section-title">Our <span className="highlight-blue">Approach</span></h2>
          </div>
          
          <div className="approach-timeline">
            <div className="timeline-line"></div>
            
            <div className="timeline-step">
              <div className="ts-icon"><Search size={24} /></div>
              <h4>Discover</h4>
              <p>We understand your requirements and business goals.</p>
            </div>
            <div className="timeline-step">
              <div className="ts-icon"><PenLine size={24} /></div>
              <h4>Plan</h4>
              <p>We plan the right strategy tailored to your needs.</p>
            </div>
            <div className="timeline-step">
              <div className="ts-icon"><Layout size={24} /></div>
              <h4>Design</h4>
              <p>We craft stunning designs that align with your vision.</p>
            </div>
            <div className="timeline-step">
              <div className="ts-icon"><Code2 size={24} /></div>
              <h4>Develop</h4>
              <p>We build high-quality, scalable and secure solutions.</p>
            </div>
            <div className="timeline-step">
              <div className="ts-icon"><CheckCircle size={24} /></div>
              <h4>Test</h4>
              <p>We test thoroughly to ensure performance and security.</p>
            </div>
            <div className="timeline-step">
              <div className="ts-icon"><Rocket size={24} /></div>
              <h4>Launch</h4>
              <p>We deploy and support your product for continuous growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="home-cta-section" style={{background: 'transparent'}}>
        <div className="container">
          <div className="hcta-box" style={{background: 'linear-gradient(135deg, #050505 0%, #0a0f1c 100%)'}}>
            <div className="hcta-left" style={{flex: '0 0 20%'}}>
               <div style={{width: '100px', height: '100px', border: '2px dashed rgba(37,99,255,0.4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Send size={48} color="var(--primary-blue)" style={{transform: 'rotate(-45deg)', marginLeft: '10px', marginTop: '-10px'}} />
               </div>
            </div>
            <div className="hcta-right">
              <h2 style={{fontSize: '2rem'}}>Have a project in mind?</h2>
              <p>Let's create something amazing together.<br/>We're ready when you are!</p>
              
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
