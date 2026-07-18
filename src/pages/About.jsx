import React, { useEffect } from 'react';
import { 
  Rocket, Target, Users, 
  Smile, Code, Heart,
  Lightbulb, ShieldCheck, Handshake, TrendingUp,
  Box, User, Clock, Phone
} from 'lucide-react';
import { FaArrowRight } from "react-icons/fa6";
import { useModal } from '../context/ModalContext';
import aboutImg from '../assets/about-img.png';

function About() {
  const { openModal } = useModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="about-hero">
        <div className="container about-hero-container">
          <div className="ah-left">
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
          
          <div className="ah-right">
            <div className="ah-image-container-new">
              <img src={aboutImg} alt="About Fenbrix" className="ah-real-image-new" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION (GETTING STARTED) */}
      <section className="about-stats-section">
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

      {/* 3. WHAT WE STAND FOR SECTION */}
      <section className="about-stand-for">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title">What We Stand For</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="stand-for-grid">
            <div className="stand-card">
              <div className="sc-icon"><Lightbulb size={32} /></div>
              <h4>Innovation</h4>
              <p>We explore new ideas and technologies to create smarter solutions.</p>
            </div>
            <div className="stand-card">
              <div className="sc-icon"><ShieldCheck size={32} /></div>
              <h4>Quality</h4>
              <p>We follow best practices to deliver high-quality solutions you can rely on.</p>
            </div>
            <div className="stand-card">
              <div className="sc-icon"><Handshake size={32} /></div>
              <h4>Integrity</h4>
              <p>We believe in transparency, honesty and building trust with our clients.</p>
            </div>
            <div className="stand-card">
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
          <div className="section-header-center">
            <h2 className="section-title">Why Choose Fenbrix?</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="why-choose-grid">
            <div className="why-item">
              <div className="wi-icon"><Box size={32} /></div>
              <div className="wi-text">
                <h5>Modern & Scalable</h5>
                <p>We build solutions that grow with your business.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="wi-icon"><User size={32} /></div>
              <div className="wi-text">
                <h5>Client First Approach</h5>
                <p>We listen, understand and deliver what you need.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="wi-icon"><Code size={32} /></div>
              <div className="wi-text">
                <h5>Latest Technologies</h5>
                <p>We use up-to-date tools and technologies for the best results.</p>
              </div>
            </div>
            <div className="why-item">
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
      <section className="about-cta-new">
        <div className="container">
          <div className="cta-banner-new">
            <div className="cta-icon-new">
              <Phone size={28} />
            </div>
            <div className="cta-text-new">
              <h3>Let's Build Something Great Together</h3>
              <p>Have an idea or project in mind? Let's turn it into reality.</p>
            </div>
            <button className="btn-light" onClick={openModal}>
              Let's Talk <FaArrowRight style={{ marginLeft: '6px' }} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
