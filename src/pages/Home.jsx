import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, Mail, Smile, Award, Headset, 
  Code, Smartphone, PenTool, ShoppingCart, Megaphone, Paintbrush,
  Search, PenLine, Layout, Code2, CheckCircle, Rocket,
  MessageSquare, Cpu, Eye, Clock, ImageIcon, Zap
} from 'lucide-react';
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiLaravel, 
  SiFlutter, SiFirebase, SiMongodb, SiFigma, 
  SiSketch, SiPython, SiDjango, SiPostgresql, 
  SiRedis, SiGit, SiGithub, SiDocker, SiNginx, 
  SiJira, SiNotion, SiTrello, SiAsana 
} from 'react-icons/si';
import { FaAws, FaSlack } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { useModal } from '../context/ModalContext';
import homeRocketImg from '../assets/home-rocket.png';
import heroDarkImg from '../assets/hero-dark.png';
import heroLightImg from '../assets/hero-light.png';
import whyChooseImg from '../assets/why-choose.png';
import hero3dImg from '../assets/hero_3d.png';

const marqueeTools = [
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Adobe XD", Icon: Layout, color: "#FF61F6" },
  { name: "Photoshop", Icon: ImageIcon, color: "#31A8FF" },
  { name: "Illustrator", Icon: PenTool, color: "#FF9A00" },
  { name: "Sketch", Icon: SiSketch, color: "#F7B500" },
  { name: "VS Code", Icon: VscVscode, color: "#007ACC" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Django", Icon: SiDjango, color: "#092E20" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Redis", Icon: SiRedis, color: "#DC382D" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Nginx", Icon: SiNginx, color: "#009639" },
  { name: "Slack", Icon: FaSlack, color: "#4A154B" },
  { name: "Jira", Icon: SiJira, color: "#0052CC" },
  { name: "Notion", Icon: SiNotion, color: "#FFFFFF" },
  { name: "Trello", Icon: SiTrello, color: "#0052CC" },
  { name: "Asana", Icon: SiAsana, color: "#273347" }
];

function Home() {
  const { openModal } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    setMousePos({
      x: clientX - rect.left,
      y: clientY - rect.top,
    });
  };

  const TITLE_PHRASES = ["Drive Growth", "Scale Faster", "Create Impact"];
  const [titleIndex, setTitleIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("slide-in");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeClass("slide-out");
      setTimeout(() => {
        setTitleIndex((current) => (current + 1) % TITLE_PHRASES.length);
        setFadeClass("slide-in");
      }, 400); // Wait for rotateOut to finish
    }, 3500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home-page-new page-animate">
      
      {/* 1. HERO SECTION (Dark) */}
      <section className="home-hero-section" onMouseMove={handleMouseMove} style={{ '--mouse-x': `${mousePos.x}px`, '--mouse-y': `${mousePos.y}px` }}>
        
        <div className="hero-bg-animations">
          <div className="animated-grid"></div>
          <div className="floating-particle particle-1"></div>
          <div className="floating-particle particle-2"></div>
          <div className="floating-particle particle-3"></div>
          <div className="floating-particle particle-4"></div>
          <div className="floating-particle particle-5"></div>
        </div>

        <div className="container home-hero-grid" data-aos="fade-up">
          {/* Left Content */}
          <div className="hh-left">
            <div className="hh-badge">
              Transforming Ideas Into Powerful Digital Experiences
            </div>
            
            <h1 className="hh-title">
              We Build Digital Solutions That <br className="mobile-break" />
              <span className={`highlight-blue text-rotate-animation ${fadeClass}`}>
                {TITLE_PHRASES[titleIndex]}
              </span>
            </h1>
            
            <p className="hh-desc">
              Fenbrix helps startups and businesses turn ideas into scalable digital products. We design, develop, and market solutions that create real impact.
            </p>
            
            <div className="hh-actions">
              <button className="btn-glass-blue" onClick={openModal}>
                Start Your Project <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FLOATING STATS BAR */}
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="home-stats-bar">
          <div className="stat-item">
            <div className="stat-icon-wrapper"><Rocket size={24} className="stat-icon-svg" /></div>
            <div className="stat-text">
              <h3>Rapid Delivery</h3>
              <p>Agile sprints & fast MVP launches</p>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon-wrapper"><CheckCircle size={24} className="stat-icon-svg" /></div>
            <div className="stat-text">
              <h3>100% Transparent</h3>
              <p>Clear comms, zero hidden costs</p>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon-wrapper"><Code2 size={24} className="stat-icon-svg" /></div>
            <div className="stat-text">
              <h3>Modern Stack</h3>
              <p>Built with latest technologies</p>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon-wrapper"><Headset size={24} className="stat-icon-svg" /></div>
            <div className="stat-text">
              <h3>24/7 Support</h3>
              <p>Dedicated maintenance & updates</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. OUR SERVICES */}
      <section className="home-services-section">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2 className="section-title">Our <span className="highlight-blue">Services</span></h2>
            <p className="section-subtitle">End-to-end digital services to help your business grow online.</p>
          </div>
          
          <div className="services-6-grid">
            {/* Service 1 */}
            <div className="svc-card">
              <div className="svc-icon"><Code size={24} /></div>
              <h4>Web Development</h4>
              <p>Fast, secure, and scalable websites and web apps built for performance.</p>
              <Link to="/services/web" className="svc-link">Learn More <ArrowRight size={14} /></Link>
            </div>
            {/* Service 2 */}
            <div className="svc-card">
              <div className="svc-icon"><Smartphone size={24} /></div>
              <h4>Mobile App Development</h4>
              <p>User-friendly mobile apps for iOS & Android that people love to use.</p>
              <Link to="/services/mobile" className="svc-link">Learn More <ArrowRight size={14} /></Link>
            </div>
            {/* Service 3 */}
            <div className="svc-card">
              <div className="svc-icon"><PenTool size={24} /></div>
              <h4>UI/UX Design</h4>
              <p>Beautiful, intuitive interfaces that enhance user engagement and retention.</p>
              <Link to="/services/ui-ux" className="svc-link">Learn More <ArrowRight size={14} /></Link>
            </div>
            {/* Service 4 */}
            <div className="svc-card">
              <div className="svc-icon"><ShoppingCart size={24} /></div>
              <h4>E-Commerce Solutions</h4>
              <p>Custom online stores designed to maximize conversions and sales.</p>
              <Link to="/services/ecommerce" className="svc-link">Learn More <ArrowRight size={14} /></Link>
            </div>
            {/* Service 5 */}
            <div className="svc-card">
              <div className="svc-icon"><Megaphone size={24} /></div>
              <h4>Digital Marketing</h4>
              <p>Data-driven SEO, SEM, and social media campaigns for rapid growth.</p>
              <Link to="/services/marketing" className="svc-link">Learn More <ArrowRight size={14} /></Link>
            </div>
            {/* Service 6 */}
            <div className="svc-card">
              <div className="svc-icon"><Paintbrush size={24} /></div>
              <h4>Graphic Design</h4>
              <p>Creative designs that communicate your brand and leave a lasting impact.</p>
              <Link to="/services/ui-ux" className="svc-link">Learn More <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR APPROACH */}
      <section id="approach" className="home-approach-section">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2 className="section-title">Our <span className="highlight-blue">Approach</span></h2>
            <p className="section-subtitle">A proven process that ensures quality, transparency, and on-time delivery.</p>
          </div>
          
          <div className="zz-timeline">
            <div className="zz-line" data-aos="fade-down" data-aos-duration="1000"></div>
            
            <div className="zz-step zz-left" data-aos="fade-right">
              <div className="zz-dot"></div>
              <div className="zz-content">
                <div className="zz-icon"><Search size={24} /></div>
                <div className="zz-text">
                  <div className="zz-num">01</div>
                  <h4>Discover</h4>
                  <p>We understand your business, goals, and target audience.</p>
                </div>
              </div>
            </div>
            
            <div className="zz-step zz-right" data-aos="fade-left">
              <div className="zz-dot"></div>
              <div className="zz-content">
                <div className="zz-icon"><PenLine size={24} /></div>
                <div className="zz-text">
                  <div className="zz-num">02</div>
                  <h4>Plan</h4>
                  <p>We research and create a clear plan for your project.</p>
                </div>
              </div>
            </div>
            
            <div className="zz-step zz-left" data-aos="fade-right">
              <div className="zz-dot"></div>
              <div className="zz-content">
                <div className="zz-icon"><Layout size={24} /></div>
                <div className="zz-text">
                  <div className="zz-num">03</div>
                  <h4>Design</h4>
                  <p>We design wireframes and UI/UX that align with your vision.</p>
                </div>
              </div>
            </div>
            
            <div className="zz-step zz-right" data-aos="fade-left">
              <div className="zz-dot"></div>
              <div className="zz-content">
                <div className="zz-icon"><Code2 size={24} /></div>
                <div className="zz-text">
                  <div className="zz-num">04</div>
                  <h4>Develop</h4>
                  <p>We build scalable, secure, and high-performance solutions.</p>
                </div>
              </div>
            </div>
            
            <div className="zz-step zz-left" data-aos="fade-right">
              <div className="zz-dot"></div>
              <div className="zz-content">
                <div className="zz-icon"><CheckCircle size={24} /></div>
                <div className="zz-text">
                  <div className="zz-num">05</div>
                  <h4>Test</h4>
                  <p>We test thoroughly to ensure quality, speed, and security.</p>
                </div>
              </div>
            </div>
            
            <div className="zz-step zz-right" data-aos="fade-left">
              <div className="zz-dot"></div>
              <div className="zz-content">
                <div className="zz-icon"><Rocket size={24} /></div>
                <div className="zz-text">
                  <div className="zz-num">06</div>
                  <h4>Launch</h4>
                  <p>We deploy and support your product for continuous growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section id="why-us" className="home-why-us-section">
        <div className="container" data-aos="fade-up">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Why Choose <span className="highlight-blue">Fenbrix?</span></h2>
            <p className="section-subtitle">
              We architect high-performance digital solutions tailored to scale seamlessly with your business. Our technical expertise and deep industry insight help craft future-proof products that don't just meet expectations, but drive measurable, long-term growth.
            </p>
          </div>
          
          <div className="wu-3x2-grid" data-aos="fade-up">
            <div className="wu-feature-card">
              <div className="wu-feature-header">
                <div className="wu-icon-wrapper"><MessageSquare size={18} /></div>
                <h4>Client-Focused Approach</h4>
              </div>
              <p className="wu-feature-desc">We listen, understand, and deliver solutions that precisely match your long-term business goals. Your success is our primary metric, and we build every feature with your end-users in mind.</p>
            </div>

            <div className="wu-feature-card">
              <div className="wu-feature-header">
                <div className="wu-icon-wrapper"><Cpu size={18} /></div>
                <h4>Modern Tech Stack</h4>
              </div>
              <p className="wu-feature-desc">We leverage the latest frameworks, robust cloud infrastructure, and best coding practices to build scalable, secure, and future-ready applications that never hold you back.</p>
            </div>

            <div className="wu-feature-card">
              <div className="wu-feature-header">
                <div className="wu-icon-wrapper"><Eye size={18} /></div>
                <h4>100% Transparent</h4>
              </div>
              <p className="wu-feature-desc">Stay updated at every step with clear, honest communication and agile sprint reviews. No hidden costs or surprises.</p>
            </div>

            <div className="wu-feature-card">
              <div className="wu-feature-header">
                <div className="wu-icon-wrapper"><Headset size={18} /></div>
                <h4>Long-Term Support</h4>
              </div>
              <p className="wu-feature-desc">Our relationship doesn't end at delivery. We're here to support, maintain, and scale your product as your user base grows. Consider us your dedicated technical partners.</p>
            </div>

            <div className="wu-feature-card">
              <div className="wu-feature-header">
                <div className="wu-icon-wrapper"><Clock size={18} /></div>
                <h4>On-Time Delivery</h4>
              </div>
              <p className="wu-feature-desc">We value your time, strictly adhering to project milestones and delivery schedules without compromising on quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGIES */}
      <section className="home-tech-section">
        <div className="container" data-aos="fade-up">
          <div className="section-header-center">
            <h2 className="section-title">Technologies We <span className="highlight-blue">Work With</span></h2>
          </div>
          
          <div className="tech-marquee-wrapper">
            <div className="tech-marquee">
              <div className="tech-marquee-content">
                {marqueeTools.slice(0, 10).map((t, i) => (
                  <div key={i} className="tech-card">
                    <t.Icon size={32} color={t.color} />
                    <span>{t.name}</span>
                  </div>
                ))}
              </div>
              <div className="tech-marquee-content">
                {marqueeTools.slice(0, 10).map((t, i) => (
                  <div key={`dup-${i}`} className="tech-card">
                    <t.Icon size={32} color={t.color} />
                    <span>{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="tech-marquee-wrapper">
            <div className="tech-marquee">
              <div className="tech-marquee-content reverse">
                {marqueeTools.slice(10).map((t, i) => (
                  <div key={i} className="tech-card">
                    <t.Icon size={32} color={t.color} />
                    <span>{t.name}</span>
                  </div>
                ))}
              </div>
              <div className="tech-marquee-content reverse">
                {marqueeTools.slice(10).map((t, i) => (
                  <div key={`dup-${i}`} className="tech-card">
                    <t.Icon size={32} color={t.color} />
                    <span>{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="home-cta-section">
        <div className="container" data-aos="fade-up">
          <div className="hcta-box">
            <div className="hcta-left">
              <div className="hcta-image-wrapper">
                <img src={homeRocketImg} alt="Have a project in mind" className="hcta-full-image" />
              </div>
            </div>
            <div className="hcta-right">
              <div className="hcta-text">
                <h2>Let's start something great!</h2>
                <p>Drop us a message, we reply fast. Let's collaborate to build a scalable digital solution that drives real growth for your business.</p>
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

    </div>
  );
}

export default Home;
