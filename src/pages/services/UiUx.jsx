import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Heart, Maximize, Target, Layers, 
  Layout, Smartphone, ShoppingBag, Grid, Component, Users,
  CheckCircle, PenTool, CheckSquare, Rocket, Monitor, Image
} from 'lucide-react';
import { SiFigma, SiSketch, SiMiro } from 'react-icons/si';
import { useModal } from '../../context/ModalContext';

export default function UiUx() {
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
            <div className="eyebrow-heading">UI / UX DESIGN</div>
            
            <h1 className="srv-hero-title">
              UI/UX <br/><span className="highlight-blue">Design</span>
            </h1>
            
            <p className="srv-hero-desc">
              We design intuitive, engaging, and user-centered experiences that not only look beautiful but also drive results for your business.
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
             <div className="hero-mockup-container" style={{transform: 'scale(0.85)'}}>
              <div className="mockup-laptop">
                <div className="ml-screen" style={{background: '#fff'}}>
                  <div className="ml-header">
                    <span className="ml-dot red"></span>
                    <span className="ml-dot yellow"></span>
                    <span className="ml-dot green"></span>
                  </div>
                  <div className="ml-body" style={{flexDirection: 'column'}}>
                     <div style={{display: 'flex', height: '100%'}}>
                        <div style={{width: '60px', background: '#2563FF', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px', gap: '20px'}}>
                           <div style={{width: '30px', height: '30px', background: '#fff', borderRadius: '4px'}}></div>
                           <div style={{width: '30px', height: '30px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px'}}></div>
                           <div style={{width: '30px', height: '30px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px'}}></div>
                        </div>
                        <div style={{flex: 1, padding: '20px', background: '#f8fafc'}}>
                           <div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
                              <div style={{flex: 1, background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)'}}>
                                 <div style={{fontSize: '10px', color: '#64748b'}}>Total Users</div>
                                 <div style={{fontSize: '18px', fontWeight: 'bold', color: '#0f172a'}}>12,540</div>
                              </div>
                              <div style={{flex: 1, background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)'}}>
                                 <div style={{fontSize: '10px', color: '#64748b'}}>Sessions</div>
                                 <div style={{fontSize: '18px', fontWeight: 'bold', color: '#0f172a'}}>8,430</div>
                              </div>
                           </div>
                           <div style={{height: '100px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)'}}></div>
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
        
        <div className="container">
          <div className="srv-features-strip">
            <div className="srv-feature-item">
              <div className="srv-feature-icon"><Heart size={24} /></div>
              <h4>User-Centered</h4>
              <p>We put your users first and design experiences they love.</p>
            </div>
            <div className="srv-feature-item">
              <div className="srv-feature-icon"><Maximize size={24} /></div>
              <h4>Pixel Perfect</h4>
              <p>Clean, modern and visually stunning designs.</p>
            </div>
            <div className="srv-feature-item">
              <div className="srv-feature-icon"><Target size={24} /></div>
              <h4>Conversion Focused</h4>
              <p>We design with a purpose — to convert and retain.</p>
            </div>
            <div className="srv-feature-item">
              <div className="srv-feature-icon"><Layers size={24} /></div>
              <h4>Consistent & Scalable</h4>
              <p>We create scalable design systems for your brand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="srv-section alt-bg">
        <div className="container">
          <h2 className="srv-section-title">What We <span className="highlight-blue">Design</span></h2>
          
          <div className="srv-grid">
            <div className="srv-card">
              <div className="srv-card-icon"><Layout size={32} /></div>
              <h4>Web UI/UX Design</h4>
              <p>Modern and responsive website designs that deliver exceptional user experiences.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><Smartphone size={32} /></div>
              <h4>Mobile App UI/UX</h4>
              <p>Intuitive and engaging mobile app designs for iOS and Android platforms.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><ShoppingBag size={32} /></div>
              <h4>E-Commerce Design</h4>
              <p>Designs that simplify the shopping experience and boost conversions.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><Grid size={32} /></div>
              <h4>Dashboard Design</h4>
              <p>Clean and data-rich dashboard designs for web and mobile applications.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><Component size={32} /></div>
              <h4>Design Systems</h4>
              <p>Consistent design systems and UI kits to scale your product efficiently.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><Users size={32} /></div>
              <h4>User Research & UX</h4>
              <p>We research, analyze and create meaningful experiences that solve real user problems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESS */}
      <section className="srv-section">
        <div className="container">
          <h2 className="srv-section-title">Our UI/UX Design <span className="highlight-blue">Process</span></h2>
          
          <div className="srv-timeline">
            <div className="srv-timeline-line"></div>
            
            <div className="srv-step">
              <div className="srv-step-icon"><Users size={32} /></div>
              <h4><span>01.</span> Understand</h4>
              <p>We understand your business, users, goals and challenges through research.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><Target size={32} /></div>
              <h4><span>02.</span> Define</h4>
              <p>We define user personas, user flows, information architecture and strategy.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><PenTool size={32} /></div>
              <h4><span>03.</span> Design</h4>
              <p>We create wireframes, prototypes and high-fidelity UI designs.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><CheckSquare size={32} /></div>
              <h4><span>04.</span> Test</h4>
              <p>We test usability and gather feedback to refine the experience.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><Rocket size={32} /></div>
              <h4><span>05.</span> Deliver</h4>
              <p>We hand off pixel-perfect designs and assets for seamless development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="srv-section alt-bg">
        <div className="container">
          <div className="srv-why-us">
            <div className="srv-why-box" style={{background: '#0f172a', borderColor: '#1e293b'}}>
              <h3 style={{color: '#fff'}}>Why Choose Fenbrix for <span className="highlight-blue">UI/UX Design?</span></h3>
              <ul className="srv-why-list">
                <li style={{color: '#cbd5e1'}}><CheckCircle size={20} color="#2563FF" /> <strong>Experienced Designers:</strong> Our designers bring creativity, experience and strategy to every project.</li>
                <li style={{color: '#cbd5e1'}}><CheckCircle size={20} color="#2563FF" /> <strong>User-Centered Approach:</strong> We create designs that are intuitive, accessible and user-friendly.</li>
                <li style={{color: '#cbd5e1'}}><CheckCircle size={20} color="#2563FF" /> <strong>Business Driven Designs:</strong> We align design with your business goals to drive growth.</li>
                <li style={{color: '#cbd5e1'}}><CheckCircle size={20} color="#2563FF" /> <strong>End-to-End Support:</strong> From research to final delivery, we're with you at every step.</li>
              </ul>
            </div>
            
            <div className="srv-why-stats">
              <div className="srv-stat-card">
                <div className="srv-stat-icon"><Users size={32} /></div>
                <h3>100+</h3>
                <p>Projects Delivered</p>
              </div>
              <div className="srv-stat-card">
                <div className="srv-stat-icon"><Heart size={32} /></div>
                <h3>98%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div className="srv-stat-card">
                <div className="srv-stat-icon"><Rocket size={32} /></div>
                <h3>5+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="srv-stat-card">
                <div className="srv-stat-icon"><Target size={32} /></div>
                <h3>40%</h3>
                <p>Better Conversion*</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TOOLS */}
      <section className="srv-section">
        <div className="container">
          <h2 className="srv-section-title">Tools We <span className="highlight-blue">Use</span></h2>
          
          <div className="srv-tools-grid">
            <div className="srv-tool-logo">
              <SiFigma size={48} color="#F24E1E" />
              <span>Figma</span>
            </div>
            <div className="srv-tool-logo">
              <Layout size={48} color="#FF61F6" />
              <span>Adobe XD</span>
            </div>
            <div className="srv-tool-logo">
              <SiSketch size={48} color="#F7B500" />
              <span>Sketch</span>
            </div>
            <div className="srv-tool-logo">
              <Image size={48} color="#31A8FF" />
              <span>Photoshop</span>
            </div>
            <div className="srv-tool-logo">
              <PenTool size={48} color="#FF9A00" />
              <span>Illustrator</span>
            </div>
            <div className="srv-tool-logo">
              <Monitor size={48} color="#FF3366" />
              <span>InVision</span>
            </div>
            <div className="srv-tool-logo">
              <SiMiro size={48} color="#050038" />
              <span>Miro</span>
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
                  <PenTool size={64} color="#fff" />
               </div>
            </div>
            <div className="hcta-right">
              <h2>Let's Design <span className="highlight-blue">Meaningful Experiences</span></h2>
              <p>Great design is more than just looks — it's about creating experiences that users love and businesses grow with.</p>
              
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
