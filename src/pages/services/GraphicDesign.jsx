import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, PenTool, Layout, Box, Monitor, ThumbsUp, Star,
  CheckCircle, ShieldCheck, Clock, Type, Paintbrush, 
  MessageSquare, Edit3, Lightbulb, CheckSquare, Send, Image
} from 'lucide-react';
import { SiFigma } from 'react-icons/si';
import { useModal } from '../../context/ModalContext';

export default function GraphicDesign() {
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
            <div className="eyebrow-heading">GRAPHIC DESIGN</div>
            
            <h1 className="srv-hero-title">
              Graphic Design<br/>That Communicates.<br/><span className="highlight-blue">Design That Converts.</span>
            </h1>
            
            <p className="srv-hero-desc">
              We create stunning visual designs that capture attention, communicate your message, and leave a lasting impression. From logos to marketing materials – we design it all.
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
             <div className="hero-mockup-container" style={{transform: 'scale(0.8)'}}>
              <div className="mockup-laptop">
                <div className="ml-screen" style={{background: '#0f172a'}}>
                  <div className="ml-header">
                    <span className="ml-dot red"></span>
                    <span className="ml-dot yellow"></span>
                    <span className="ml-dot green"></span>
                  </div>
                  <div className="ml-body" style={{flexDirection: 'column', background: 'url("https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop") center/cover'}}>
                     <div style={{background: 'rgba(15, 23, 42, 0.8)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <h3 style={{color: '#fff', fontSize: '24px', fontWeight: 'bold'}}>Empowering<br/>Ideas. Building<br/>Brands.</h3>
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
              <div className="srv-feature-icon"><PenTool size={24} /></div>
              <h4>Creative & Unique</h4>
              <p>Fresh, original designs tailored to your brand</p>
            </div>
            <div className="srv-feature-item">
              <div className="srv-feature-icon"><ShieldCheck size={24} /></div>
              <h4>Brand Focused</h4>
              <p>Designs that reflect your brand identity</p>
            </div>
            <div className="srv-feature-item">
              <div className="srv-feature-icon"><Star size={24} /></div>
              <h4>High Quality</h4>
              <p>Pixel-perfect designs for every platform</p>
            </div>
            <div className="srv-feature-item">
              <div className="srv-feature-icon"><Clock size={24} /></div>
              <h4>Fast Turnaround</h4>
              <p>Timely delivery without compromising quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="srv-section alt-bg">
        <div className="container">
          <h2 className="srv-section-title">Our Graphic Design <span className="highlight-blue">Services</span></h2>
          
          <div className="srv-grid">
            <div className="srv-card">
              <div className="srv-card-icon"><Type size={32} /></div>
              <h4>Logo Design</h4>
              <p>Memorable logos that represent your brand identity and values.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><Layout size={32} /></div>
              <h4>Brand Identity</h4>
              <p>Complete brand identity design including colors, typography & guidelines.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><Layout size={32} /></div>
              <h4>Marketing Materials</h4>
              <p>Brochures, flyers, posters & print designs that make an impact.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><ThumbsUp size={32} /></div>
              <h4>Social Media Design</h4>
              <p>Engaging posts, banners & ads that grow your online presence.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><Box size={32} /></div>
              <h4>Packaging Design</h4>
              <p>Creative packaging that stands out on shelves and builds trust.</p>
            </div>
            <div className="srv-card">
              <div className="srv-card-icon"><Monitor size={32} /></div>
              <h4>Presentation Design</h4>
              <p>Professional slide decks that deliver your message with clarity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESS */}
      <section className="srv-section">
        <div className="container">
          <h2 className="srv-section-title">Our Design <span className="highlight-blue">Process</span></h2>
          
          <div className="srv-timeline">
            <div className="srv-timeline-line"></div>
            
            <div className="srv-step">
              <div className="srv-step-icon"><MessageSquare size={32} /></div>
              <h4><span>01.</span> Understand</h4>
              <p>We learn about your brand, goals, and target audience.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><Edit3 size={32} /></div>
              <h4><span>02.</span> Research</h4>
              <p>We analyze your industry and competitors for better insights.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><Lightbulb size={32} /></div>
              <h4><span>03.</span> Design</h4>
              <p>We create unique concepts that align with your brand and objectives.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><CheckSquare size={32} /></div>
              <h4><span>04.</span> Review</h4>
              <p>We share drafts and refine based on your feedback.</p>
            </div>
            <div className="srv-step">
              <div className="srv-step-icon"><Send size={32} /></div>
              <h4><span>05.</span> Deliver</h4>
              <p>We deliver final designs in all required formats, ready to use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR WORK (Portfolio Grid specifically for Graphic Design) */}
      <section className="srv-section alt-bg">
        <div className="container">
          <h2 className="srv-section-title">Our <span className="highlight-blue">Work</span></h2>
          
          <div className="srv-work-grid">
            <div className="srv-work-item">
               <img src="https://images.unsplash.com/photo-1626785779199-a204d09292a9?w=400&h=300&fit=crop" alt="Logo Design" />
            </div>
            <div className="srv-work-item">
               <img src="https://images.unsplash.com/photo-1542382103-605bb16e53a2?w=400&h=300&fit=crop" alt="Brand Identity" />
            </div>
            <div className="srv-work-item">
               <img src="https://images.unsplash.com/photo-1581417537389-9a2f7c00e572?w=400&h=300&fit=crop" alt="Packaging Design" />
            </div>
            <div className="srv-work-item">
               <img src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=400&h=300&fit=crop" alt="Marketing Materials" />
            </div>
          </div>
          <div style={{textAlign: 'center'}}>
             <Link to="/portfolio" className="btn-outline-blue" style={{display: 'inline-flex', width: 'auto'}}>View More Work <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="srv-section">
        <div className="container">
          <div className="srv-why-us">
            <div className="srv-why-box" style={{background: '#0f172a', borderColor: '#1e293b'}}>
              <h3 style={{color: '#fff'}}>Why Choose <span className="highlight-blue">Fenbrix?</span></h3>
              <ul className="srv-why-list">
                <li style={{color: '#cbd5e1'}}><CheckCircle size={20} color="#2563FF" /> <strong>Experienced and creative design team</strong></li>
                <li style={{color: '#cbd5e1'}}><CheckCircle size={20} color="#2563FF" /> <strong>100% original and custom designs</strong></li>
                <li style={{color: '#cbd5e1'}}><CheckCircle size={20} color="#2563FF" /> <strong>Unlimited revisions until you're satisfied</strong></li>
                <li style={{color: '#cbd5e1'}}><CheckCircle size={20} color="#2563FF" /> <strong>On-time delivery and reliable communication</strong></li>
                <li style={{color: '#cbd5e1'}}><CheckCircle size={20} color="#2563FF" /> <strong>Designs that help you stand out and grow</strong></li>
              </ul>
            </div>
            
            <div className="srv-why-stats" style={{gridTemplateColumns: '1fr 1fr'}}>
               <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
                  <div className="srv-stat-card">
                     <div className="srv-stat-icon"><Layout size={32} /></div>
                     <h3>500+</h3>
                     <p>Projects Completed</p>
                  </div>
                  <div className="srv-stat-card">
                     <div className="srv-stat-icon"><Rocket size={32} /></div>
                     <h3>5+</h3>
                     <p>Years of Experience</p>
                  </div>
               </div>
               <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
                  <div className="srv-stat-card" style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                     <div className="srv-stat-icon"><Star size={32} /></div>
                     <h3>98%</h3>
                     <p>Client Satisfaction</p>
                  </div>
                  <div className="srv-stat-card">
                     <div className="srv-stat-icon"><Clock size={32} /></div>
                     <h3>24/7</h3>
                     <p>Support Available</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TOOLS */}
      <section className="srv-section alt-bg">
        <div className="container">
          <h2 className="srv-section-title">Tools We <span className="highlight-blue">Use</span></h2>
          
          <div className="srv-tools-grid">
            <div className="srv-tool-logo">
              <Image size={48} color="#31A8FF" />
              <span>Adobe Photoshop</span>
            </div>
            <div className="srv-tool-logo">
              <PenTool size={48} color="#FF9A00" />
              <span>Adobe Illustrator</span>
            </div>
            <div className="srv-tool-logo">
              <Layout size={48} color="#FF3366" />
              <span>Adobe InDesign</span>
            </div>
            <div className="srv-tool-logo">
              <SiFigma size={48} color="#F24E1E" />
              <span>Figma</span>
            </div>
            <div className="srv-tool-logo">
              <Monitor size={48} color="#00C4CC" />
              <span>Canva</span>
            </div>
          </div>
          <p style={{textAlign: 'center', marginTop: '32px', color: 'var(--accent-silver)'}}>
             We use industry-leading tools to deliver high-quality, creative, and professional designs.
          </p>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="srv-section" style={{paddingBottom: '100px'}}>
        <div className="container">
          <div className="hcta-box">
             <div className="hcta-left" style={{flex: '0 0 25%'}}>
               <div style={{width: '120px', height: '100px', background: '#2563FF', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(37,99,255,0.4)'}}>
                  <Paintbrush size={64} color="#fff" />
               </div>
            </div>
            <div className="hcta-right">
              <h2>Let's Bring Your <span className="highlight-blue">Ideas to Life</span></h2>
              <p>Great design is more than just looks — it's about creating a connection and making a lasting impact.</p>
              
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
