import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Target, BarChart, Users, TrendingUp,
  Search, MessageCircle, MousePointerClick, Mail, FileText,
  PieChart, CheckCircle, Rocket
} from 'lucide-react';
import { SiGoogleanalytics, SiGoogleads, SiSemrush, SiMailchimp, SiHubspot } from 'react-icons/si';
import { FaMeta } from 'react-icons/fa6';
import { useModal } from '../../context/ModalContext';
import homeRocketImg from '../../assets/home-rocket.png';

export default function Marketing() {
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
            <div className="eyebrow-heading">DIGITAL MARKETING</div>
            
            <h1 className="srv-hero-title">
              Digital Marketing <br/>That <span className="highlight-blue">Grows Your Business</span>
            </h1>
            
            <p className="srv-hero-desc">
              We create data-driven marketing strategies that increase visibility, attract the right audience, and deliver measurable growth for your business.
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
              <div className="float-up" style={{position: 'absolute', top: '0', right: '0', width: '360px', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', overflow: 'hidden', zIndex: 2}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 14px', borderBottom: '1px solid var(--border-color)'}}>
                  <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F57'}}></span>
                  <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E'}}></span>
                  <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#28C840'}}></span>
                  <div style={{flex: 1, marginLeft: '8px', height: '22px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', display: 'flex', alignItems: 'center', paddingLeft: '10px', fontSize: '10px', color: 'var(--accent-silver)'}}>Marketing Performance</div>
                </div>
                <div style={{padding: '20px'}}>
                   <div style={{display: 'flex', gap: '12px'}}>
                      <div style={{background: 'rgba(37,99,255,0.08)', border: '1px solid rgba(37,99,255,0.15)', padding: '12px', borderRadius: '8px', flex: 1}}>
                         <div style={{fontSize: '10px', color: '#94a3b8'}}>Users</div>
                         <div style={{fontSize: '18px', color: '#fff', fontWeight: 'bold'}}>24.8K</div>
                         <div style={{fontSize: '10px', color: '#10b981'}}>+18.6%</div>
                      </div>
                      <div style={{background: 'rgba(37,99,255,0.08)', border: '1px solid rgba(37,99,255,0.15)', padding: '12px', borderRadius: '8px', flex: 1}}>
                         <div style={{fontSize: '10px', color: '#94a3b8'}}>Conversions</div>
                         <div style={{fontSize: '18px', color: '#fff', fontWeight: 'bold'}}>1.6K</div>
                         <div style={{fontSize: '10px', color: '#10b981'}}>+24.3%</div>
                      </div>
                      <div style={{background: 'rgba(37,99,255,0.08)', border: '1px solid rgba(37,99,255,0.15)', padding: '12px', borderRadius: '8px', flex: 1}}>
                         <div style={{fontSize: '10px', color: '#94a3b8'}}>ROI</div>
                         <div style={{fontSize: '18px', color: '#fff', fontWeight: 'bold'}}>4.7x</div>
                         <div style={{fontSize: '10px', color: '#10b981'}}>+32.1%</div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Floating Badge */}
               <div className="float-side" style={{position: 'absolute', top: '55%', right: '-10px', background: 'linear-gradient(135deg, #2563FF, #6366f1)', color: '#fff', padding: '10px 18px', borderRadius: '12px', fontSize: '12px', fontWeight: '700', boxShadow: '0 10px 30px rgba(37,99,255,0.4)', zIndex: 4, display: 'flex', alignItems: 'center', gap: '8px'}}>
                 <TrendingUp size={16} /> Growth Focused
               </div>
            </div>
          </div>
        </div>
        
        <div className="container">
          <div className="stats-right" data-aos="fade-up" style={{width: '100%'}}>
            <div className="stat-card-light">
              <div className="scl-icon"><Target size={28} /></div>
              <h5>Result Driven</h5>
              <p>Focused on metrics that matter.</p>
            </div>
            <div className="stat-card-light">
              <div className="scl-icon"><BarChart size={28} /></div>
              <h5>Data Backed</h5>
              <p>Strategies powered by insights and analytics.</p>
            </div>
            <div className="stat-card-light">
              <div className="scl-icon"><Users size={28} /></div>
              <h5>Audience Focused</h5>
              <p>Reaching the right people with the right message.</p>
            </div>
            <div className="stat-card-light">
              <div className="scl-icon"><TrendingUp size={28} /></div>
              <h5>Growth Oriented</h5>
              <p>Continuous optimization for better results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="srv-section" data-aos="fade-up">
        <div className="container">
          <h2 className="srv-section-title">Our Digital Marketing <span className="highlight-blue">Services</span></h2>
          
          <div className="srv-grid">
            <div className="srv-card">
              <div className="srv-card-icon"><Search size={32} /></div>
              <h4>SEO (Search Engine Optimization)</h4>
              <p>Improve your search rankings and drive organic traffic that delivers real results.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><MessageCircle size={32} /></div>
              <h4>Social Media Marketing</h4>
              <p>Build your brand, engage your audience, and grow across social platforms.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><MousePointerClick size={32} /></div>
              <h4>Pay-Per-Click Advertising</h4>
              <p>Generate high-quality leads and sales with targeted paid campaigns.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><Mail size={32} /></div>
              <h4>Email Marketing</h4>
              <p>Nurture leads and retain customers with personalized email campaigns.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><FileText size={32} /></div>
              <h4>Content Marketing</h4>
              <p>Engage your audience with valuable content that builds trust and authority.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><PieChart size={32} /></div>
              <h4>Analytics & Reporting</h4>
              <p>Track performance, measure ROI, and make data-driven decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESS */}
      <section className="srv-section" data-aos="fade-up">
        <div className="container">
          <h2 className="srv-section-title">Our Marketing <span className="highlight-blue">Process</span></h2>
          
          <div className="srv-timeline" data-aos="fade-up">
            <div className="srv-timeline-line"></div>
            
            <div className="srv-step">
              <div className="srv-step-icon"><Users size={32} /></div>
              <h4><span>01.</span> Discover</h4>
              <p>We learn about your business, audience, goals, and challenges.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><Search size={32} /></div>
              <h4><span>02.</span> Research</h4>
              <p>We analyze your market, competitors, and audience behavior.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><Target size={32} /></div>
              <h4><span>03.</span> Strategy</h4>
              <p>We create a customized marketing strategy aligned with your goals.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><Rocket size={32} /></div>
              <h4><span>04.</span> Execute</h4>
              <p>We launch campaigns and optimize to ensure maximum performance.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><BarChart size={32} /></div>
              <h4><span>05.</span> Analyze & Grow</h4>
              <p>We track results, provide insights, and scale what works best.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="srv-section" data-aos="fade-up">
        <div className="container">
          <div className="srv-why-us">
            <div className="srv-why-box" style={{background: '#0f172a', borderColor: '#1e293b'}}>
              <h3 style={{color: '#fff'}}>Why Choose <span className="highlight-blue">Fenbrix?</span></h3>
              <ul className="srv-why-list">
                <li style={{color: '#cbd5e1'}}><CheckCircle size={20} color="#2563FF" /> Experienced marketing strategists and specialists</li>
                <li style={{color: '#cbd5e1'}}><CheckCircle size={20} color="#2563FF" /> Customized strategies tailored to your business goals</li>
                <li style={{color: '#cbd5e1'}}><CheckCircle size={20} color="#2563FF" /> Data-driven approach for maximum ROI</li>
                <li style={{color: '#cbd5e1'}}><CheckCircle size={20} color="#2563FF" /> Transparent reporting and real-time insights</li>
                <li style={{color: '#cbd5e1'}}><CheckCircle size={20} color="#2563FF" /> Dedicated support and continuous optimization</li>
              </ul>
            </div>
            
            <div className="srv-why-stats">
              <div className="srv-stat-card">
                <div className="srv-stat-icon"><Users size={32} /></div>
                <h3>150+</h3>
                <p>Projects Delivered</p>
              </div>
              <div className="srv-stat-card">
                <div className="srv-stat-icon"><TrendingUp size={32} /></div>
                <h3>98%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div className="srv-stat-card">
                <div className="srv-stat-icon"><Target size={32} /></div>
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="srv-stat-card">
                <div className="srv-stat-icon"><BarChart size={32} /></div>
                <h3>300%</h3>
                <p>Average ROI Increase</p>
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
                <div className="tech-card"><SiGoogleanalytics size={32} color="#F9AB00" /><span>Google Analytics</span></div>
                <div className="tech-card"><SiGoogleads size={32} color="#4285F4" /><span>Google Ads</span></div>
                <div className="tech-card"><SiSemrush size={32} color="#FF642D" /><span>SEMRush</span></div>
                <div className="tech-card"><FaMeta size={32} color="#0668E1" /><span>Meta</span></div>
                <div className="tech-card"><SiMailchimp size={32} color="#FFE01B" /><span>Mailchimp</span></div>
                <div className="tech-card"><SiHubspot size={32} color="#FF7A59" /><span>HubSpot</span></div>
              </div>
              <div className="tech-marquee-content">
                <div className="tech-card"><SiGoogleanalytics size={32} color="#F9AB00" /><span>Google Analytics</span></div>
                <div className="tech-card"><SiGoogleads size={32} color="#4285F4" /><span>Google Ads</span></div>
                <div className="tech-card"><SiSemrush size={32} color="#FF642D" /><span>SEMRush</span></div>
                <div className="tech-card"><FaMeta size={32} color="#0668E1" /><span>Meta</span></div>
                <div className="tech-card"><SiMailchimp size={32} color="#FFE01B" /><span>Mailchimp</span></div>
                <div className="tech-card"><SiHubspot size={32} color="#FF7A59" /><span>HubSpot</span></div>
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
                <h2>Ready to <span className="highlight-blue">Grow Your Business?</span></h2>
                <p>Let's build a powerful marketing strategy that brings more traffic, leads, and sales to your business.</p>
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
