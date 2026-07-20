import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Smartphone, Zap, ShieldCheck, Clock,
  Code, ShoppingBag, Grid, MessageSquare, PenTool, CheckSquare, Rocket,
  CheckCircle, Users, Activity, Briefcase
} from 'lucide-react';
import { SiSwift, SiKotlin, SiFlutter, SiReact, SiFirebase, SiNodedotjs, SiMongodb, SiDart } from 'react-icons/si';
import { useModal } from '../../context/ModalContext';
import homeRocketImg from '../../assets/home-rocket.png';

export default function MobileApp() {
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
            <div className="eyebrow-heading">MOBILE APP</div>
            
            <h1 className="srv-hero-title">
              Mobile App <br/><span className="highlight-blue">Development</span>
            </h1>
            
            <p className="srv-hero-desc">
              We build powerful, user-friendly mobile applications for iOS and Android that drive engagement, generate value, and help your business grow.
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
                {/* CSS Mobile Phones Mockup */}
                <div style={{display: 'flex', gap: '20px', alignItems: 'flex-end', justifyContent: 'center'}}>
                   <div className="float-down" style={{width: '180px', height: '360px', background: '#111', borderRadius: '30px', border: '6px solid #333', overflow: 'hidden', position: 'relative', boxShadow: '0 20px 50px rgba(0,0,0,0.5)'}}>
                      <div style={{position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80px', height: '20px', background: '#333', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', zIndex: 10}}></div>
                      <div style={{padding: '30px 15px', height: '100%', background: '#0f172a'}}>
                         <div style={{color: '#fff', fontSize: '12px', marginBottom: '10px'}}>Dashboard</div>
                         <div style={{background: '#1e293b', padding: '15px', borderRadius: '12px', marginBottom: '15px'}}>
                            <div style={{color: '#94a3b8', fontSize: '10px'}}>Total Balance</div>
                            <div style={{color: '#fff', fontSize: '20px', fontWeight: 'bold'}}>$24,680</div>
                         </div>
                         <div style={{display: 'flex', gap: '10px', marginBottom: '15px'}}>
                            <div style={{flex: 1, height: '40px', background: '#2563FF', borderRadius: '8px'}}></div>
                            <div style={{flex: 1, height: '40px', background: '#334155', borderRadius: '8px'}}></div>
                         </div>
                         <div style={{height: '80px', background: '#1e293b', borderRadius: '12px'}}></div>
                      </div>
                   </div>

                   <div className="float-up" style={{width: '200px', height: '400px', background: '#111', borderRadius: '30px', border: '6px solid #333', overflow: 'hidden', position: 'relative', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', zIndex: 5}}>
                      <div style={{position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '90px', height: '22px', background: '#333', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', zIndex: 10}}></div>
                      <div style={{padding: '40px 15px', height: '100%', background: '#050505'}}>
                         <div style={{color: '#fff', fontSize: '14px', marginBottom: '20px'}}>Statistics</div>
                         <div style={{width: '120px', height: '120px', borderRadius: '50%', border: '8px solid #2563FF', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '24px', fontWeight: 'bold'}}>
                            78%
                         </div>
                         <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#94a3b8', fontSize: '12px'}}>
                            <span>UI Design</span><span>78%</span>
                         </div>
                         <div style={{height: '6px', background: '#2563FF', borderRadius: '3px', marginBottom: '20px', width: '78%'}}></div>
                         
                         <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#94a3b8', fontSize: '12px'}}>
                            <span>Development</span><span>64%</span>
                         </div>
                         <div style={{height: '6px', background: '#2563FF', borderRadius: '3px', marginBottom: '20px', width: '64%'}}></div>
                      </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
        
        <div className="container">
          <div className="stats-right" data-aos="fade-up" style={{width: '100%'}}>
            <div className="stat-card-light">
              <div className="scl-icon"><Smartphone size={28} /></div>
              <h5>User-Centric Design</h5>
              <p>Beautiful & intuitive user experience.</p>
            </div>
            <div className="stat-card-light">
              <div className="scl-icon"><Zap size={28} /></div>
              <h5>High Performance</h5>
              <p>Optimized for speed and reliability.</p>
            </div>
            <div className="stat-card-light">
              <div className="scl-icon"><ShieldCheck size={28} /></div>
              <h5>Secure & Scalable</h5>
              <p>Built with best practices and clean architecture.</p>
            </div>
            <div className="stat-card-light">
              <div className="scl-icon"><Clock size={28} /></div>
              <h5>On-Time Delivery</h5>
              <p>We value your time and deliver on schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="srv-section" data-aos="fade-up">
        <div className="container">
          <h2 className="srv-section-title">What We <span className="highlight-blue">Build</span></h2>
          
          <div className="srv-grid">
            <div className="srv-card">
              <div className="srv-card-icon"><Smartphone size={32} /></div>
              <h4>Native iOS Apps</h4>
              <p>High-performance iOS apps built with Swift for iPhone & iPad.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><Smartphone size={32} /></div>
              <h4>Native Android Apps</h4>
              <p>Robust Android apps built with Kotlin for seamless performance.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><Code size={32} /></div>
              <h4>Cross-Platform Apps</h4>
              <p>Cost-effective solutions using Flutter & React Native for both platforms.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><ShoppingBag size={32} /></div>
              <h4>E-Commerce Apps</h4>
              <p>Secure, scalable and feature-rich e-commerce mobile applications.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><Grid size={32} /></div>
              <h4>Custom Mobile Apps</h4>
              <p>Tailored mobile solutions to meet your unique business requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESS */}
      <section className="srv-section" data-aos="fade-up">
        <div className="container">
          <h2 className="srv-section-title">Our App Development <span className="highlight-blue">Process</span></h2>
          
          <div className="srv-timeline" data-aos="fade-up">
            <div className="srv-timeline-line"></div>
            
            <div className="srv-step">
              <div className="srv-step-icon"><MessageSquare size={32} /></div>
              <h4><span>01.</span> Discovery</h4>
              <p>We understand your business goals, target audience, and requirements.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><PenTool size={32} /></div>
              <h4><span>02.</span> Planning & Design</h4>
              <p>We create wireframes and UI/UX designs focused on user experience.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><Code size={32} /></div>
              <h4><span>03.</span> Development</h4>
              <p>We build clean, scalable and secure code using modern technologies.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><CheckSquare size={32} /></div>
              <h4><span>04.</span> Testing</h4>
              <p>We perform rigorous testing to ensure quality, performance and bug-free apps.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><Rocket size={32} /></div>
              <h4><span>05.</span> Deployment</h4>
              <p>We deploy your app to the App Store & Play Store and provide support.</p>
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
                <li style={{color: '#cbd5e1'}}><CheckCircle size={20} color="#2563FF" /> <strong>Experienced Team:</strong> Skilled developers with hands-on experience in mobile technologies.</li>
                <li style={{color: '#cbd5e1'}}><CheckCircle size={20} color="#2563FF" /> <strong>Agile Approach:</strong> We follow agile methodology to ensure flexibility and transparency.</li>
                <li style={{color: '#cbd5e1'}}><CheckCircle size={20} color="#2563FF" /> <strong>Modern Technologies:</strong> We use the latest tools and frameworks to build future-ready apps.</li>
                <li style={{color: '#cbd5e1'}}><CheckCircle size={20} color="#2563FF" /> <strong>Post-Launch Support:</strong> We provide continuous support and maintenance after launch.</li>
              </ul>
            </div>
            
            <div className="srv-why-stats">
              <div className="srv-stat-card">
                <div className="srv-stat-icon"><Smartphone size={32} /></div>
                <h3>50+</h3>
                <p>Apps Delivered</p>
              </div>
              <div className="srv-stat-card">
                <div className="srv-stat-icon"><Users size={32} /></div>
                <h3>98%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div className="srv-stat-card">
                <div className="srv-stat-icon"><Briefcase size={32} /></div>
                <h3>30+</h3>
                <p>Industries Served</p>
              </div>
              <div className="srv-stat-card">
                <div className="srv-stat-icon"><Clock size={32} /></div>
                <h3>100%</h3>
                <p>On-Time Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TOOLS */}
      <section className="srv-section" data-aos="fade-up">
        <div className="container">
          <h2 className="srv-section-title">Technologies We <span className="highlight-blue">Use</span></h2>
          
          <div className="tech-marquee-wrapper">
            <div className="tech-marquee">
              <div className="tech-marquee-content">
                <div className="tech-card"><SiSwift size={32} color="#F05138" /><span>Swift</span></div>
                <div className="tech-card"><SiKotlin size={32} color="#7F52FF" /><span>Kotlin</span></div>
                <div className="tech-card"><SiFlutter size={32} color="#02569B" /><span>Flutter</span></div>
                <div className="tech-card"><SiReact size={32} color="#61DAFB" /><span>React Native</span></div>
                <div className="tech-card"><SiFirebase size={32} color="#FFCA28" /><span>Firebase</span></div>
                <div className="tech-card"><SiNodedotjs size={32} color="#339933" /><span>Node.js</span></div>
                <div className="tech-card"><SiMongodb size={32} color="#47A248" /><span>MongoDB</span></div>
                <div className="tech-card"><SiDart size={32} color="#0175C2" /><span>Dart</span></div>
              </div>
              <div className="tech-marquee-content">
                <div className="tech-card"><SiSwift size={32} color="#F05138" /><span>Swift</span></div>
                <div className="tech-card"><SiKotlin size={32} color="#7F52FF" /><span>Kotlin</span></div>
                <div className="tech-card"><SiFlutter size={32} color="#02569B" /><span>Flutter</span></div>
                <div className="tech-card"><SiReact size={32} color="#61DAFB" /><span>React Native</span></div>
                <div className="tech-card"><SiFirebase size={32} color="#FFCA28" /><span>Firebase</span></div>
                <div className="tech-card"><SiNodedotjs size={32} color="#339933" /><span>Node.js</span></div>
                <div className="tech-card"><SiMongodb size={32} color="#47A248" /><span>MongoDB</span></div>
                <div className="tech-card"><SiDart size={32} color="#0175C2" /><span>Dart</span></div>
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
                <h2>Have an App <span className="highlight-blue">Idea in Mind?</span></h2>
                <p>Let's turn your idea into a powerful mobile app that delivers real value to your users and grows your business.</p>
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
