import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Users, TrendingUp, Briefcase, Award, 
  Heart, Gift, GraduationCap, ArrowUpRight, Upload
} from 'lucide-react';
import { FaUsers } from 'react-icons/fa';

import heroImg from '../assets/career-hero.png';
import chairImg from '../assets/empty-chair.png';
import envelopeImg from '../assets/resume-envelope.png';

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="careers-page page-animate">
      
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="container careers-hero-grid">
          <div className="careers-hero-left">
            <div className="eyebrow-heading">CAREERS</div>
            <h1 className="careers-hero-title">
              Build the Future <br/>With <span className="highlight-blue">Fenbrix</span>
            </h1>
            <p className="careers-hero-desc">
              We're a team of dreamers, creators, and problem solvers building digital solutions that make an impact. Join us and grow your career while creating something amazing together.
            </p>
            <div style={{ display: 'flex' }}>
              <button className="btn-outline-blue">
                <Users size={18} /> Join Our Team
              </button>
            </div>
          </div>
          <div className="careers-hero-right">
            <div className="careers-hero-img-container">
              <img src={heroImg} alt="Team collaborating" />
            </div>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="container" data-aos="fade-up">
        <h2 className="careers-section-title">Why Work <span className="highlight-blue">With Us?</span></h2>
        
        <div className="career-perks-grid">
          <div className="perk-card">
            <div className="perk-icon-wrapper"><TrendingUp size={28} /></div>
            <h4>Growth & Learning</h4>
            <p>Work on exciting projects and learn new technologies every day.</p>
          </div>
          <div className="perk-card">
            <div className="perk-icon-wrapper"><Users size={28} /></div>
            <h4>Collaborative Culture</h4>
            <p>We believe in teamwork, open communication and mutual respect.</p>
          </div>
          <div className="perk-card">
            <div className="perk-icon-wrapper"><Briefcase size={28} /></div>
            <h4>Flexible Work</h4>
            <p>Enjoy flexible working hours and a healthy work-life balance.</p>
          </div>
          <div className="perk-card">
            <div className="perk-icon-wrapper"><Award size={28} /></div>
            <h4>Career Development</h4>
            <p>We support your growth with training, mentorship and real challenges.</p>
          </div>
          <div className="perk-card">
            <div className="perk-icon-wrapper"><Heart size={28} /></div>
            <h4>Friendly Environment</h4>
            <p>Be part of a positive and inclusive environment where you belong.</p>
          </div>
          <div className="perk-card">
            <div className="perk-icon-wrapper"><Gift size={28} /></div>
            <h4>Perks & Benefits</h4>
            <p>Competitive benefits, celebrations and more goodies for the team.</p>
          </div>
        </div>
      </section>

      {/* Openings Section */}
      <section className="openings-section container" data-aos="fade-up">
        <h2 className="careers-section-title" style={{ marginBottom: '50px' }}>Current <span className="highlight-blue">Openings</span></h2>
        
        <div className="empty-state-card">
          <img src={chairImg} alt="Coming Soon" className="empty-state-img" />
          <h3>No Open Positions At The Moment</h3>
          <p>We're a growing team and always on the lookout for amazing talent. Please check back soon!</p>
        </div>

        <div className="career-side-cards">
          
          <div className="career-side-card">
            <div className="side-card-icon">
              <GraduationCap size={28} />
            </div>
            <div className="side-card-content">
              <h3>Internship Opportunities</h3>
              <span className="side-card-tag blue">Coming Soon</span>
              <p>We'll be opening internship opportunities for passionate learners who want to kickstart their career with real-world experience. Stay tuned!</p>
            </div>
          </div>
          
          <div className="career-side-card">
            <div className="side-card-icon green">
              <FaUsers size={28} />
            </div>
            <div className="side-card-content">
              <h3>Freelance Partnership</h3>
              <span className="side-card-tag green">Work With Us</span>
              <p>Are you a freelancer or agency looking to collaborate on exciting projects? We'd love to hear from you.</p>
              <button className="btn-outline-green">
                Let's Collaborate <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

        </div>

        <div className="hcta-box">
          <div className="hcta-left">
            <div className="hcta-image-wrapper">
              <img src={envelopeImg} alt="Resume Envelope" className="hcta-full-image" />
            </div>
          </div>
          <div className="hcta-right">
            <div className="hcta-text">
              <h2>Don't See the <span className="highlight-blue">Right Role?</span></h2>
              <p>We're always interested in talented people. Share your resume with us and we'll reach out when the right opportunity comes up.</p>
            </div>
            <div className="hcta-actions">
              <button className="btn-primary" onClick={() => window.location.href = 'mailto:careers@fenbrix.com'}>
                <Upload size={16} style={{marginRight: '8px'}}/> Submit Your Resume
              </button>
              <div className="hcta-email">
                Or email us at <a href="mailto:careers@fenbrix.com">careers@fenbrix.com</a>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
