import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow"></div>
        <div className="container hero-content">
          <h1 className="text-gradient hero-title">
            Transforming Ideas Into Powerful Digital Experiences
          </h1>
          <p className="hero-subtitle">
            We create websites, applications, brands, and digital products that help businesses grow faster through exceptional design and modern technology.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Start your project
            </Link>
            <Link to="/portfolio" className="btn-secondary" style={{ textDecoration: 'none', display: 'inline-block' }}>
              View our work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services-section container">
        <div className="section-header">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">Comprehensive digital solutions for forward-thinking brands.</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card glass">
            <div className="service-icon">🌐</div>
            <h3 className="service-title">Web Development</h3>
            <p className="service-desc">Lightning-fast, responsive, and accessible websites built with modern frameworks.</p>
          </div>
          <div className="service-card glass">
            <div className="service-icon">📱</div>
            <h3 className="service-title">Mobile Apps</h3>
            <p className="service-desc">Native and cross-platform mobile experiences that users love.</p>
          </div>
          <div className="service-card glass">
            <div className="service-icon">🎨</div>
            <h3 className="service-title">UI/UX Design</h3>
            <p className="service-desc">Intuitive, user-centered designs that drive engagement and conversions.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
