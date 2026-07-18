import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Code, Zap, ShieldCheck, Search, Globe, 
  Layout, ShoppingBag, Settings, Smartphone, MessageSquare, 
  PenTool, CheckSquare, Rocket, Clock, Heart, HeadphonesIcon
} from 'lucide-react';
import { 
  SiHtml5, SiJavascript, SiReact, SiNextdotjs, 
  SiNodedotjs, SiPhp, SiWordpress 
} from 'react-icons/si';
import { useModal } from '../../context/ModalContext';

export default function WebDev() {
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
            <div className="eyebrow-heading">WEB DEVELOPMENT</div>
            
            <h1 className="srv-hero-title">
              Web <span className="highlight-blue">Development</span>
            </h1>
            
            <p className="srv-hero-desc">
              We build fast, secure, and scalable websites and web applications that help businesses grow and deliver incredible digital experiences.
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
                <div className="ml-screen" style={{background: '#0a0f1c'}}>
                  <div className="ml-header" style={{background: '#151e32'}}>
                    <span className="ml-dot red"></span>
                    <span className="ml-dot yellow"></span>
                    <span className="ml-dot green"></span>
                  </div>
                  <div className="ml-body" style={{flexDirection: 'column', position: 'relative', overflow: 'hidden'}}>
                     {/* Abstract Code UI */}
                     <div style={{position: 'absolute', top: '10%', left: '5%', width: '60px', height: '60px', background: 'rgba(37,99,255,0.1)', border: '1px solid rgba(37,99,255,0.3)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563FF', fontWeight: 'bold', fontSize: '20px'}}>
                        {`{...}`}
                     </div>
                     <div style={{position: 'absolute', top: '20%', right: '10%', width: '200px', height: '140px', background: '#1e293b', borderRadius: '12px', padding: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '16px'}}>
                           <div style={{color: '#fff', fontWeight: 'bold'}}>{`</>`}</div>
                        </div>
                        <div style={{width: '100%', height: '60px', background: '#2563FF', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px'}}>
                           <div style={{width: '30px', height: '20px', background: 'rgba(255,255,255,0.3)', borderRadius: '4px'}}></div>
                        </div>
                        <div style={{display: 'flex', gap: '8px'}}>
                           <div style={{flex: 1, height: '6px', background: '#334155', borderRadius: '3px'}}></div>
                           <div style={{flex: 2, height: '6px', background: '#334155', borderRadius: '3px'}}></div>
                        </div>
                     </div>
                     <div style={{position: 'absolute', bottom: '20%', left: '30%', width: '120px'}}>
                        <div style={{height: '6px', background: '#334155', borderRadius: '3px', marginBottom: '8px', width: '100%'}}></div>
                        <div style={{height: '6px', background: '#334155', borderRadius: '3px', marginBottom: '8px', width: '80%'}}></div>
                        <div style={{height: '6px', background: '#334155', borderRadius: '3px', marginBottom: '8px', width: '60%'}}></div>
                        <div style={{height: '6px', background: '#2563FF', borderRadius: '3px', marginBottom: '8px', width: '40%'}}></div>
                     </div>
                  </div>
                </div>
                <div className="ml-base" style={{background: '#151e32'}}>
                  <div className="ml-trackpad" style={{background: '#0a0f1c'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container">
          <div className="srv-features-strip">
            <div className="srv-feature-item">
              <div className="srv-feature-icon"><Layout size={24} /></div>
              <h4>Modern & Responsive</h4>
              <p>Pixel-perfect across all devices.</p>
            </div>
            <div className="srv-feature-item">
              <div className="srv-feature-icon"><Zap size={24} /></div>
              <h4>High Performance</h4>
              <p>Optimized for speed and performance.</p>
            </div>
            <div className="srv-feature-item">
              <div className="srv-feature-icon"><ShieldCheck size={24} /></div>
              <h4>Secure & Scalable</h4>
              <p>Built with best practices and clean code.</p>
            </div>
            <div className="srv-feature-item">
              <div className="srv-feature-icon"><Search size={24} /></div>
              <h4>SEO Friendly</h4>
              <p>Structured for better visibility and ranking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="srv-section alt-bg">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '48px'}}>
             <h2 className="srv-section-title" style={{marginBottom: '16px'}}>What We Build</h2>
             <p style={{color: 'var(--accent-silver)', maxWidth: '600px', margin: '0 auto'}}>
                From business websites to complex web applications, we build tailored solutions that solve real problems and drive real results.
             </p>
          </div>
          
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center'}}>
            <div className="srv-card" style={{flex: '1 1 250px', maxWidth: '300px'}}>
              <div className="srv-card-icon"><Globe size={32} /></div>
              <h4>Business Websites</h4>
              <p>Professional, responsive websites that represent your brand and convert visitors into customers.</p>
            </div>
            <div className="srv-card" style={{flex: '1 1 250px', maxWidth: '300px'}}>
              <div className="srv-card-icon"><Layout size={32} /></div>
              <h4>Web Applications</h4>
              <p>Custom web applications built to automate processes and improve efficiency.</p>
            </div>
            <div className="srv-card" style={{flex: '1 1 250px', maxWidth: '300px'}}>
              <div className="srv-card-icon"><ShoppingBag size={32} /></div>
              <h4>E-Commerce Solutions</h4>
              <p>Secure and scalable online stores with seamless shopping experiences and payment integration.</p>
            </div>
            <div className="srv-card" style={{flex: '1 1 250px', maxWidth: '300px'}}>
              <div className="srv-card-icon"><Settings size={32} /></div>
              <h4>CMS Development</h4>
              <p>User-friendly CMS solutions that help you manage your content easily.</p>
            </div>
            <div className="srv-card" style={{flex: '1 1 250px', maxWidth: '300px'}}>
              <div className="srv-card-icon"><Smartphone size={32} /></div>
              <h4>Progressive Web Apps</h4>
              <p>Fast, reliable and engaging experiences with offline capabilities and app-like features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESS */}
      <section className="srv-section">
        <div className="container">
          <h2 className="srv-section-title">Our Web Development <span className="highlight-blue">Process</span></h2>
          
          <div className="srv-timeline">
            <div className="srv-timeline-line"></div>
            
            <div className="srv-step">
              <div className="srv-step-icon"><MessageSquare size={32} /></div>
              <h4><span>01.</span> Requirement</h4>
              <p>We understand your business goals and project requirements.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><Layout size={32} /></div>
              <h4><span>02.</span> Planning & Design</h4>
              <p>We plan the structure and design intuitive UI/UX for your solution.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><Code size={32} /></div>
              <h4><span>03.</span> Development</h4>
              <p>We build clean, scalable and high-performance web solutions.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><CheckSquare size={32} /></div>
              <h4><span>04.</span> Testing</h4>
              <p>We test thoroughly for quality, performance and cross-browser compatibility.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><Rocket size={32} /></div>
              <h4><span>05.</span> Deployment</h4>
              <p>We deploy your project and ensure a smooth go-live experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TOOLS */}
      <section className="srv-section alt-bg">
        <div className="container">
          <h2 className="srv-section-title">Technologies We <span className="highlight-blue">Use</span></h2>
          
          <div className="srv-tools-grid">
            <div className="srv-tool-logo">
              <SiHtml5 size={48} color="#E34F26" />
              <span>HTML5</span>
            </div>
            <div className="srv-tool-logo">
              <Code size={48} color="#1572B6" />
              <span>CSS3</span>
            </div>
            <div className="srv-tool-logo">
              <SiJavascript size={48} color="#F7DF1E" />
              <span>JavaScript</span>
            </div>
            <div className="srv-tool-logo">
              <SiReact size={48} color="#61DAFB" />
              <span>React</span>
            </div>
            <div className="srv-tool-logo">
              <SiNextdotjs size={48} color="#000" style={{background: '#fff', borderRadius: '50%', padding: '2px'}} />
              <span>Next.js</span>
            </div>
            <div className="srv-tool-logo">
              <SiNodedotjs size={48} color="#339933" />
              <span>Node.js</span>
            </div>
            <div className="srv-tool-logo">
              <SiPhp size={48} color="#777BB4" />
              <span>PHP</span>
            </div>
            <div className="srv-tool-logo">
              <SiWordpress size={48} color="#21759B" />
              <span>WordPress</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="srv-section" style={{paddingBottom: '40px'}}>
        <div className="container">
          <div className="hcta-box">
             <div className="hcta-left" style={{flex: '0 0 25%'}}>
               <div style={{width: '120px', height: '100px', background: '#1e293b', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)'}}>
                  <Globe size={48} color="#2563FF" />
               </div>
            </div>
            <div className="hcta-right">
              <h2>Ready to Build Your <br/>Next <span className="highlight-blue">Web Project?</span></h2>
              <p>Let's create a powerful web solution that drives growth for your business.</p>
              
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
      
      {/* 6. EXTRA HIGHLIGHTS STRIP */}
      <section className="srv-section" style={{paddingTop: '0', paddingBottom: '80px'}}>
         <div className="container">
            <div className="srv-features-strip" style={{borderTop: 'none', paddingTop: 0}}>
               <div className="srv-feature-item" style={{flexDirection: 'row', alignItems: 'center'}}>
                  <div className="srv-feature-icon" style={{width: '40px', height: '40px', border: 'none', background: 'transparent'}}><Clock size={24} /></div>
                  <div>
                     <h4 style={{fontSize: '0.9rem'}}>On-Time Delivery</h4>
                     <p style={{fontSize: '0.75rem'}}>We value your time and deliver on schedule.</p>
                  </div>
               </div>
               <div className="srv-feature-item" style={{flexDirection: 'row', alignItems: 'center'}}>
                  <div className="srv-feature-icon" style={{width: '40px', height: '40px', border: 'none', background: 'transparent'}}><MessageSquare size={24} /></div>
                  <div>
                     <h4 style={{fontSize: '0.9rem'}}>Transparent Communication</h4>
                     <p style={{fontSize: '0.75rem'}}>You'll always know the status of your project.</p>
                  </div>
               </div>
               <div className="srv-feature-item" style={{flexDirection: 'row', alignItems: 'center'}}>
                  <div className="srv-feature-icon" style={{width: '40px', height: '40px', border: 'none', background: 'transparent'}}><HeadphonesIcon size={24} /></div>
                  <div>
                     <h4 style={{fontSize: '0.9rem'}}>Dedicated Support</h4>
                     <p style={{fontSize: '0.75rem'}}>We're here to support you even after delivery.</p>
                  </div>
               </div>
               <div className="srv-feature-item" style={{flexDirection: 'row', alignItems: 'center'}}>
                  <div className="srv-feature-icon" style={{width: '40px', height: '40px', border: 'none', background: 'transparent'}}><Heart size={24} /></div>
                  <div>
                     <h4 style={{fontSize: '0.9rem'}}>Satisfaction Guaranteed</h4>
                     <p style={{fontSize: '0.75rem'}}>Your satisfaction is our number one priority.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </main>
  );
}
