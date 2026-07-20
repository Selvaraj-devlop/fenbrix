import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Heart, Maximize, Target, Layers, 
  Layout, Smartphone, ShoppingBag, Grid, Component, Users,
  CheckCircle, PenTool, CheckSquare, Rocket, Monitor, Image
} from 'lucide-react';
import { SiFigma, SiSketch, SiMiro } from 'react-icons/si';
import { useModal } from '../../context/ModalContext';
import homeRocketImg from '../../assets/home-rocket.png';

export default function UiUx() {
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
            </div>
          </div>
          
          <div className="srv-hero-right">
             <div style={{position: 'relative', width: '100%', maxWidth: '480px', margin: '0 auto', height: '380px', marginBottom: '60px'}}>
               
               {/* Design Preview Card */}
               <div className="float-up" style={{position: 'absolute', top: '0', right: '0', width: '320px', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', overflow: 'hidden', zIndex: 2}}>
                 <div style={{display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 14px', borderBottom: '1px solid var(--border-color)'}}>
                   <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F57'}}></span>
                   <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E'}}></span>
                   <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#28C840'}}></span>
                   <div style={{flex: 1, marginLeft: '8px', height: '22px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', display: 'flex', alignItems: 'center', paddingLeft: '10px', fontSize: '10px', color: 'var(--accent-silver)'}}>Design Preview</div>
                 </div>
                 <div style={{padding: '20px'}}>
                   <div style={{display: 'flex', gap: '12px', marginBottom: '16px'}}>
                     <div style={{flex: 1, height: '80px', background: 'rgba(37,99,255,0.08)', borderRadius: '12px', border: '1px solid rgba(37,99,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Users size={24} color="#2563FF" /></div>
                     <div style={{flex: 1, height: '80px', background: 'rgba(99,102,241,0.08)', borderRadius: '12px', border: '1px solid rgba(99,102,241,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Layout size={24} color="#6366f1" /></div>
                   </div>
                   <div style={{height: '8px', background: 'var(--border-color)', borderRadius: '4px', width: '90%', marginBottom: '8px'}}></div>
                   <div style={{height: '8px', background: 'var(--border-color)', borderRadius: '4px', width: '60%'}}></div>
                 </div>
               </div>

               {/* Wireframe Card */}
               <div className="float-down" style={{position: 'absolute', bottom: '0', left: '0', width: '260px', background: '#0d1117', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 20px 50px rgba(0,0,0,0.4)', overflow: 'hidden', zIndex: 3, padding: '20px'}}>
                 <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px'}}>
                   <PenTool size={16} color="#2563FF" />
                   <span style={{fontSize: '12px', color: '#8b949e', fontWeight: '600'}}>Wireframe</span>
                 </div>
                 <div style={{width: '100%', height: '20px', background: 'rgba(37,99,255,0.2)', borderRadius: '4px', marginBottom: '12px'}}></div>
                 <div style={{display: 'flex', gap: '8px', marginBottom: '12px'}}>
                   <div style={{width: '40px', height: '40px', background: 'rgba(255,255,255,0.06)', borderRadius: '50%'}}></div>
                   <div style={{flex: 1}}>
                     <div style={{height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', marginBottom: '6px', width: '80%'}}></div>
                     <div style={{height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', width: '60%'}}></div>
                   </div>
                 </div>
                 <div style={{display: 'flex', gap: '8px'}}>
                   <div style={{flex: 1, height: '30px', background: 'rgba(37,99,255,0.15)', borderRadius: '6px'}}></div>
                   <div style={{flex: 1, height: '30px', background: 'rgba(255,255,255,0.04)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)'}}></div>
                 </div>
               </div>

               {/* Floating Badge */}
               <div className="float-side" style={{position: 'absolute', top: '55%', right: '-10px', background: 'linear-gradient(135deg, #2563FF, #6366f1)', color: '#fff', padding: '10px 18px', borderRadius: '12px', fontSize: '12px', fontWeight: '700', boxShadow: '0 10px 30px rgba(37,99,255,0.4)', zIndex: 4, display: 'flex', alignItems: 'center', gap: '8px'}}>
                 <PenTool size={16} /> Pixel Perfect
               </div>

             </div>
          </div>
        </div>
        
        <div className="container">
          <div className="stats-right" data-aos="fade-up" style={{width: '100%'}}>
            <div className="stat-card-light">
              <div className="scl-icon"><Heart size={28} /></div>
              <h5>User-Centered</h5>
              <p>We put your users first and design experiences they love.</p>
            </div>
            <div className="stat-card-light">
              <div className="scl-icon"><Maximize size={28} /></div>
              <h5>Pixel Perfect</h5>
              <p>Clean, modern and visually stunning designs.</p>
            </div>
            <div className="stat-card-light">
              <div className="scl-icon"><Target size={28} /></div>
              <h5>Conversion Focused</h5>
              <p>We design with a purpose — to convert and retain.</p>
            </div>
            <div className="stat-card-light">
              <div className="scl-icon"><Layers size={28} /></div>
              <h5>Consistent & Scalable</h5>
              <p>We create scalable design systems for your brand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="srv-section" data-aos="fade-up">
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
      <section className="srv-section" data-aos="fade-up">
        <div className="container">
          <h2 className="srv-section-title">Our UI/UX Design <span className="highlight-blue">Process</span></h2>
          
          <div className="srv-timeline" data-aos="fade-up">
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
      <section className="srv-section" data-aos="fade-up">
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
      <section className="srv-section" data-aos="fade-up">
        <div className="container">
          <h2 className="srv-section-title">Tools We <span className="highlight-blue">Use</span></h2>
          
          <div className="tech-marquee-wrapper">
            <div className="tech-marquee">
              <div className="tech-marquee-content">
                <div className="tech-card"><SiFigma size={32} color="#F24E1E" /><span>Figma</span></div>
                <div className="tech-card"><Layout size={32} color="#FF61F6" /><span>Adobe XD</span></div>
                <div className="tech-card"><SiSketch size={32} color="#F7B500" /><span>Sketch</span></div>
                <div className="tech-card"><Image size={32} color="#31A8FF" /><span>Photoshop</span></div>
                <div className="tech-card"><PenTool size={32} color="#FF9A00" /><span>Illustrator</span></div>
                <div className="tech-card"><Monitor size={32} color="#FF3366" /><span>InVision</span></div>
                <div className="tech-card"><SiMiro size={32} color="#050038" /><span>Miro</span></div>
              </div>
              <div className="tech-marquee-content">
                <div className="tech-card"><SiFigma size={32} color="#F24E1E" /><span>Figma</span></div>
                <div className="tech-card"><Layout size={32} color="#FF61F6" /><span>Adobe XD</span></div>
                <div className="tech-card"><SiSketch size={32} color="#F7B500" /><span>Sketch</span></div>
                <div className="tech-card"><Image size={32} color="#31A8FF" /><span>Photoshop</span></div>
                <div className="tech-card"><PenTool size={32} color="#FF9A00" /><span>Illustrator</span></div>
                <div className="tech-card"><Monitor size={32} color="#FF3366" /><span>InVision</span></div>
                <div className="tech-card"><SiMiro size={32} color="#050038" /><span>Miro</span></div>
              </div>
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
                <h2>Let's Design <span className="highlight-blue">Meaningful Experiences</span></h2>
                <p>Great design is more than just looks — it's about creating experiences that users love and businesses grow with.</p>
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
