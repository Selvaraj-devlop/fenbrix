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
import homeRocketImg from '../../assets/home-rocket.png';

export default function WebDev() {
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
            </div>
          </div>
          
          <div className="srv-hero-right">
             <div style={{position: 'relative', width: '100%', maxWidth: '480px', margin: '0 auto', height: '380px', marginBottom: '60px'}}>
               
               {/* Browser Window */}
               <div className="float-up" style={{position: 'absolute', top: '0', right: '0', width: '320px', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', overflow: 'hidden', zIndex: 2}}>
                 <div style={{display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 14px', borderBottom: '1px solid var(--border-color)'}}>
                   <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F57'}}></span>
                   <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E'}}></span>
                   <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#28C840'}}></span>
                   <div style={{flex: 1, marginLeft: '8px', height: '22px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', display: 'flex', alignItems: 'center', paddingLeft: '10px', fontSize: '10px', color: 'var(--accent-silver)'}}>fenbrix.com</div>
                 </div>
                 <div style={{padding: '20px'}}>
                   <div style={{width: '100%', height: '24px', background: 'linear-gradient(90deg, #2563FF, #6366f1)', borderRadius: '6px', marginBottom: '16px'}}></div>
                   <div style={{display: 'flex', gap: '12px', marginBottom: '16px'}}>
                     <div style={{flex: 1, height: '60px', background: 'rgba(37,99,255,0.08)', borderRadius: '8px', border: '1px solid rgba(37,99,255,0.15)'}}></div>
                     <div style={{flex: 1, height: '60px', background: 'rgba(37,99,255,0.08)', borderRadius: '8px', border: '1px solid rgba(37,99,255,0.15)'}}></div>
                   </div>
                   <div style={{height: '8px', background: 'var(--border-color)', borderRadius: '4px', width: '90%', marginBottom: '8px'}}></div>
                   <div style={{height: '8px', background: 'var(--border-color)', borderRadius: '4px', width: '70%', marginBottom: '8px'}}></div>
                   <div style={{height: '8px', background: 'var(--border-color)', borderRadius: '4px', width: '50%'}}></div>
                 </div>
               </div>

               {/* Code Editor Card */}
               <div className="float-down" style={{position: 'absolute', bottom: '0', left: '0', width: '280px', background: '#0d1117', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 20px 50px rgba(0,0,0,0.4)', overflow: 'hidden', zIndex: 3}}>
                 <div style={{display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)'}}>
                   <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F57'}}></span>
                   <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E'}}></span>
                   <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#28C840'}}></span>
                   <span style={{marginLeft: '8px', fontSize: '11px', color: '#8b949e'}}>App.jsx</span>
                 </div>
                 <div style={{padding: '14px', fontFamily: 'monospace', fontSize: '12px', lineHeight: '1.8'}}>
                   <div><span style={{color: '#ff7b72'}}>import</span> <span style={{color: '#79c0ff'}}>React</span> <span style={{color: '#ff7b72'}}>from</span> <span style={{color: '#a5d6ff'}}>'react'</span>;</div>
                   <div style={{marginTop: '4px'}}><span style={{color: '#ff7b72'}}>const</span> <span style={{color: '#d2a8ff'}}>App</span> = () =&gt; {'{'}</div>
                   <div style={{paddingLeft: '16px'}}><span style={{color: '#ff7b72'}}>return</span> (</div>
                   <div style={{paddingLeft: '32px'}}><span style={{color: '#8b949e'}}>&lt;</span><span style={{color: '#7ee787'}}>div</span><span style={{color: '#8b949e'}}>&gt;</span></div>
                   <div style={{paddingLeft: '48px'}}><span style={{color: '#a5d6ff'}}>Hello World</span></div>
                   <div style={{paddingLeft: '32px'}}><span style={{color: '#8b949e'}}>&lt;/</span><span style={{color: '#7ee787'}}>div</span><span style={{color: '#8b949e'}}>&gt;</span></div>
                   <div style={{paddingLeft: '16px'}}>);</div>
                   <div>{'}'};</div>
                 </div>
               </div>

               {/* Floating Badge */}
               <div className="float-side" style={{position: 'absolute', top: '55%', right: '-10px', background: 'linear-gradient(135deg, #2563FF, #6366f1)', color: '#fff', padding: '10px 18px', borderRadius: '12px', fontSize: '12px', fontWeight: '700', boxShadow: '0 10px 30px rgba(37,99,255,0.4)', zIndex: 4, display: 'flex', alignItems: 'center', gap: '8px'}}>
                 <Rocket size={16} /> Deploy Ready
               </div>

             </div>
          </div>
        </div>
        
        <div className="container">
          <div className="stats-right" data-aos="fade-up" style={{width: '100%'}}>
            <div className="stat-card-light">
              <div className="scl-icon"><Layout size={28} /></div>
              <h5>Modern & Responsive</h5>
              <p>Pixel-perfect across all devices.</p>
            </div>
            <div className="stat-card-light">
              <div className="scl-icon"><Zap size={28} /></div>
              <h5>High Performance</h5>
              <p>Optimized for speed and performance.</p>
            </div>
            <div className="stat-card-light">
              <div className="scl-icon"><ShieldCheck size={28} /></div>
              <h5>Secure & Scalable</h5>
              <p>Built with best practices and clean code.</p>
            </div>
            <div className="stat-card-light">
              <div className="scl-icon"><Search size={28} /></div>
              <h5>SEO Friendly</h5>
              <p>Structured for better visibility and ranking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="srv-section" data-aos="fade-up">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '48px'}}>
             <h2 className="srv-section-title" style={{marginBottom: '16px'}}>What We <span className="highlight-blue">Build</span></h2>
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
      <section className="srv-section" data-aos="fade-up">
        <div className="container">
          <h2 className="srv-section-title">Our Web Development <span className="highlight-blue">Process</span></h2>
          
          <div className="srv-timeline" data-aos="fade-up">
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

      {/* 4. TOOLS - Marquee Style */}
      <section className="srv-section" data-aos="fade-up">
        <div className="container">
          <h2 className="srv-section-title">Technologies We <span className="highlight-blue">Use</span></h2>
          
          <div className="tech-marquee-wrapper">
            <div className="tech-marquee">
              <div className="tech-marquee-content">
                <div className="tech-card"><SiHtml5 size={32} color="#E34F26" /><span>HTML5</span></div>
                <div className="tech-card"><Code size={32} color="#1572B6" /><span>CSS3</span></div>
                <div className="tech-card"><SiJavascript size={32} color="#F7DF1E" /><span>JavaScript</span></div>
                <div className="tech-card"><SiReact size={32} color="#61DAFB" /><span>React</span></div>
                <div className="tech-card"><SiNextdotjs size={32} color="#000" style={{background: '#fff', borderRadius: '50%', padding: '2px'}} /><span>Next.js</span></div>
                <div className="tech-card"><SiNodedotjs size={32} color="#339933" /><span>Node.js</span></div>
                <div className="tech-card"><SiPhp size={32} color="#777BB4" /><span>PHP</span></div>
                <div className="tech-card"><SiWordpress size={32} color="#21759B" /><span>WordPress</span></div>
              </div>
              <div className="tech-marquee-content">
                <div className="tech-card"><SiHtml5 size={32} color="#E34F26" /><span>HTML5</span></div>
                <div className="tech-card"><Code size={32} color="#1572B6" /><span>CSS3</span></div>
                <div className="tech-card"><SiJavascript size={32} color="#F7DF1E" /><span>JavaScript</span></div>
                <div className="tech-card"><SiReact size={32} color="#61DAFB" /><span>React</span></div>
                <div className="tech-card"><SiNextdotjs size={32} color="#000" style={{background: '#fff', borderRadius: '50%', padding: '2px'}} /><span>Next.js</span></div>
                <div className="tech-card"><SiNodedotjs size={32} color="#339933" /><span>Node.js</span></div>
                <div className="tech-card"><SiPhp size={32} color="#777BB4" /><span>PHP</span></div>
                <div className="tech-card"><SiWordpress size={32} color="#21759B" /><span>WordPress</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
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
                <h2>Ready to Build Your <br/>Next <span className="highlight-blue">Web Project?</span></h2>
                <p>Let's create a powerful web solution that drives growth for your business.</p>
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
      {/* (Extra Highlights Strip removed per user request) */}

    </main>
  );
}
