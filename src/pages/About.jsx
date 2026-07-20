import React, { useEffect } from 'react';
import { 
  Rocket, Target, Users, 
  Smile, Code, Heart,
  Lightbulb, ShieldCheck, Handshake, TrendingUp,
  Box, User, Clock, Phone,
  Eye, Compass, ArrowRight
} from 'lucide-react';
import { FaArrowRight } from "react-icons/fa6";
import { useModal } from '../context/ModalContext';
import aboutImg from '../assets/about-img.png';
import homeRocketImg from '../assets/home-rocket.png';

function About() {
  const { openModal } = useModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-wrapper page-animate">
      {/* 1. HERO SECTION */}
      <section className="about-hero">
        <div className="container about-hero-container">
          <div className="ah-left" data-aos="fade-right" data-aos-duration="800">
            <span className="section-badge">ABOUT US</span>
            <h1 className="ah-title">
              We Build Digital Solutions That <span className="highlight-blue">Drive Your Business Forward</span>
            </h1>
            <p className="ah-desc">
              Fenbrix Tech Solution is a new-age digital partner helping businesses turn ideas into powerful digital products. We combine creativity, technology and strategy to build solutions that are modern, scalable and future-ready.
            </p>

            <div className="ah-points">
              <div className="ah-point">
                <div className="ah-icon-wrap"><Rocket size={20} /></div>
                <div className="ah-point-text">
                  <h5>Driven by Passion</h5>
                  <p>We're a young team of passionate developers, designers and strategists.</p>
                </div>
              </div>
              <div className="ah-point">
                <div className="ah-icon-wrap"><Target size={20} /></div>
                <div className="ah-point-text">
                  <h5>Focused on Impact</h5>
                  <p>Our goal is simple — create meaningful solutions that help businesses grow.</p>
                </div>
              </div>
              <div className="ah-point">
                <div className="ah-icon-wrap"><Users size={20} /></div>
                <div className="ah-point-text">
                  <h5>Built for Long-Term</h5>
                  <p>We focus on building strong relationships and delivering value that lasts.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="ah-right" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
            <div className="ah-image-container-new">
              <img src={aboutImg} alt="About Fenbrix" className="ah-real-image-new" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION (GETTING STARTED) */}
      <section className="about-stats-section" data-aos="fade-up">
        <div className="container stats-container">
          <div className="stats-left">
            <h2>We are <span className="highlight-blue">just getting started</span>, and we're ready to build something amazing with you.</h2>
            <p>We may be new, but our commitment is not. We bring fresh ideas, the latest technologies and 100% dedication to every project we take on.</p>
          </div>
          <div className="stats-right">
            <div className="stat-card-light">
              <div className="scl-icon"><Rocket size={28} /></div>
              <h3>0</h3>
              <h5>Projects</h5>
              <p>Our journey has just begun.</p>
            </div>
            <div className="stat-card-light">
              <div className="scl-icon"><Smile size={28} /></div>
              <h3>0</h3>
              <h5>Clients</h5>
              <p>Be the first to work with us.</p>
            </div>
            <div className="stat-card-light">
              <div className="scl-icon"><Code size={28} /></div>
              <h3>100%</h3>
              <h5>Dedication</h5>
              <p>Every project gets our best.</p>
            </div>
            <div className="stat-card-light">
              <div className="scl-icon"><Heart size={28} /></div>
              <h3 className="text-blue">Future<br />Ready</h3>
              <p>Focused on building long-term impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION SECTION */}
      <section className="about-vm-section">
        <div className="container">
          <div className="section-header-center" data-aos="fade-up">
            <span className="section-badge">OUR PURPOSE</span>
            <h2 className="section-title">Vision & Mission</h2>
            <div className="title-underline"></div>
          </div>

          <div className="vm-grid">
            <div className="vm-card vm-vision" data-aos="fade-up" data-aos-delay="100">
              <div className="vm-card-glow"></div>
              <div className="vm-icon-wrap">
                <Eye size={32} />
              </div>
              <h3>Our Vision</h3>
              <p className="vm-desc">
                To become a globally recognized digital innovation partner — empowering businesses of all sizes to thrive in the digital age with cutting-edge technology and creative solutions.
              </p>
              <ul className="vm-points">
                <li>Lead digital transformation across industries</li>
                <li>Set new standards in quality and innovation</li>
                <li>Build long-lasting client partnerships worldwide</li>
              </ul>
            </div>

            <div className="vm-card vm-mission" data-aos="fade-up" data-aos-delay="250">
              <div className="vm-card-glow"></div>
              <div className="vm-icon-wrap">
                <Compass size={32} />
              </div>
              <h3>Our Mission</h3>
              <p className="vm-desc">
                To deliver innovative, reliable and scalable digital solutions that help businesses achieve their goals — while maintaining integrity, quality and a client-first approach in everything we do.
              </p>
              <ul className="vm-points">
                <li>Deliver modern, future-ready digital products</li>
                <li>Put client success at the heart of every project</li>
                <li>Continuously learn, adapt and innovate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE STAND FOR SECTION */}
      <section className="about-stand-for">
        <div className="container">
          <div className="section-header-center" data-aos="fade-up">
            <h2 className="section-title">What We Stand For</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="stand-for-grid">
            <div className="stand-card" data-aos="fade-up" data-aos-delay="0">
              <div className="sc-icon"><Lightbulb size={32} /></div>
              <h4>Innovation</h4>
              <p>We explore new ideas and technologies to create smarter solutions.</p>
            </div>
            <div className="stand-card" data-aos="fade-up" data-aos-delay="100">
              <div className="sc-icon"><ShieldCheck size={32} /></div>
              <h4>Quality</h4>
              <p>We follow best practices to deliver high-quality solutions you can rely on.</p>
            </div>
            <div className="stand-card" data-aos="fade-up" data-aos-delay="200">
              <div className="sc-icon"><Handshake size={32} /></div>
              <h4>Integrity</h4>
              <p>We believe in transparency, honesty and building trust with our clients.</p>
            </div>
            <div className="stand-card" data-aos="fade-up" data-aos-delay="300">
              <div className="sc-icon"><TrendingUp size={32} /></div>
              <h4>Growth Together</h4>
              <p>We grow when our clients grow. Your success is our success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE FENBRIX SECTION */}
      <section className="about-why-choose">
        <div className="container">
          <div className="section-header-center" data-aos="fade-up">
            <h2 className="section-title">Why Choose Fenbrix?</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="why-choose-grid" data-aos="fade-up">
            <div className="why-item" data-aos="fade-up" data-aos-delay="0">
              <div className="wi-icon"><Box size={32} /></div>
              <div className="wi-text">
                <h5>Modern & Scalable</h5>
                <p>We build solutions that grow with your business.</p>
              </div>
            </div>
            <div className="why-item" data-aos="fade-up" data-aos-delay="100">
              <div className="wi-icon"><User size={32} /></div>
              <div className="wi-text">
                <h5>Client First Approach</h5>
                <p>We listen, understand and deliver what you need.</p>
              </div>
            </div>
            <div className="why-item" data-aos="fade-up" data-aos-delay="200">
              <div className="wi-icon"><Code size={32} /></div>
              <div className="wi-text">
                <h5>Latest Technologies</h5>
                <p>We use up-to-date tools and technologies for the best results.</p>
              </div>
            </div>
            <div className="why-item" data-aos="fade-up" data-aos-delay="300">
              <div className="wi-icon"><Clock size={32} /></div>
              <div className="wi-text">
                <h5>Fast & Reliable</h5>
                <p>We value time and deliver with speed and reliability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="home-cta-section">
        <div className="container" data-aos="fade-up">
          <div className="hcta-box">
            <div className="hcta-left" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, rgba(37,99,255,0.1), rgba(99,102,241,0.05))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(37,99,255,0.3)', boxShadow: '0 4px 12px rgba(37,99,255,0.08)' }}>
                <Phone size={54} color="var(--primary-blue)" />
              </div>
            </div>
            <div className="hcta-right">
              <div className="hcta-text">
                <h2>Let's Build Something Great Together</h2>
                <p>Have an idea or project in mind? Let's turn it into reality. Let's collaborate to build a scalable digital solution that drives real growth for your business.</p>
              </div>
              
              <div className="hcta-actions">
                <button className="btn-primary" onClick={openModal}>
                  Let's Talk <ArrowRight size={16} style={{marginLeft: '8px'}}/>
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

export default About;
