import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus, Mail, ArrowRight, Headset } from 'lucide-react';

const faqData = [
  {
    id: 1,
    category: "Services",
    question: "What services does Fenbrix offer?",
    answer: "We offer a wide range of digital services including Web Development, Mobile App Development, UI/UX Design, DevOps, Cloud Solutions, and more. We tailor solutions to meet your business goals."
  },
  {
    id: 2,
    category: "Process",
    question: "How does your project development process work?",
    answer: "Our process begins with a detailed discovery phase to understand your requirements, followed by design, development, testing, and deployment. We maintain agile workflows and keep you updated at every sprint."
  },
  {
    id: 3,
    category: "Process",
    question: "How long does it take to complete a project?",
    answer: "The timeline varies significantly based on project scope, complexity, and feature requirements. A simple website might take 2-4 weeks, while a complex enterprise application could take 3-6 months."
  },
  {
    id: 4,
    category: "Support",
    question: "Do you work with startups and small businesses?",
    answer: "Absolutely! We love working with startups and small businesses to help them build their MVPs, scale their digital presence, and compete with larger industry players through smart technology."
  },
  {
    id: 5,
    category: "Services",
    question: "What technologies do you use?",
    answer: "We use modern, industry-standard technologies such as React, Node.js, Next.js, Python, AWS, Docker, and React Native to ensure scalable, secure, and highly performant applications."
  },
  {
    id: 6,
    category: "Process",
    question: "How do you ensure the security of our project?",
    answer: "Security is built into our core development cycle. We use encrypted communication, secure authentication protocols, proper access controls, and follow industry best practices to protect your data."
  },
  {
    id: 7,
    category: "Support",
    question: "Do you provide support after the project is completed?",
    answer: "Yes, we offer comprehensive post-launch support and maintenance packages. We'll monitor performance, apply security updates, and can implement new features as your business evolves."
  },
  {
    id: 8,
    category: "Pricing",
    question: "How is the pricing determined?",
    answer: "Pricing is determined based on the complexity of the project, required features, timeline, and the size of the team needed. We provide transparent, detailed proposals after our initial consultation."
  },
  {
    id: 9,
    category: "Process",
    question: "Can we request changes after the project has started?",
    answer: "Yes. Because we use an agile development methodology, we can accommodate changes or pivot direction during development sprints, ensuring the final product strictly aligns with your vision."
  }
];

const categories = ["All Questions", "Services", "Process", "Pricing", "Support"];

function Faq() {
  const [openIndex, setOpenIndex] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const navigate = useNavigate();

  const toggleFaq = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const filteredFaqs = activeCategory === "All Questions" 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  return (
    <div className="faq-page-wrapper">
      <div className="container faq-container">
        
        {/* Header Section */}
        <div className="faq-header-grid">
          {/* Left Dots */}
          <div className="faq-header-left">
            <div className="dot-grid">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="dot"></div>
              ))}
            </div>
          </div>
          
          {/* Center Text */}
          <div className="faq-header-center">
            <span className="section-badge">FAQS</span>
            <h1 className="faq-title">
              Frequently Asked<br/>
              <span className="highlight-blue">Questions</span>
            </h1>
            <p className="faq-subtitle">
              Find quick answers to common questions about our<br/>
              services, process, pricing, and support.
            </p>
          </div>
          
          {/* Right Graphics */}
          <div className="faq-header-right">
          </div>
        </div>

        {/* Category Filters */}
        <div className="faq-filters">
          {categories.map((cat) => (
            <button 
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List Container */}
        <div className="faq-list-container">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openIndex === faq.id;
              const formattedId = faq.id < 10 ? `0${faq.id}` : faq.id;
              
              return (
                <div 
                  key={faq.id} 
                  className={`faq-item ${isOpen ? 'active' : ''}`}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div className="faq-item-header">
                    <div className="faq-item-title-group">
                      <h3 className="faq-question">{faq.question}</h3>
                    </div>
                    <div className={`faq-toggle-icon ${isOpen ? 'open' : ''}`}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </div>
                  
                  <div className={`faq-item-body ${isOpen ? 'open' : ''}`}>
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="faq-no-results">
              <p>No questions found in this category.</p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="faq-bottom-cta">
          <div className="fcta-left">
            <div className="fcta-icon-wrapper">
              <Headset size={48} color="var(--primary-blue)" />
            </div>
            <div className="fcta-text">
              <h3>Still have a <span className="highlight-blue">question?</span></h3>
              <p>Can't find what you're looking for?<br/>We're here to help. Let's talk about your project.</p>
            </div>
          </div>
          
          <div className="fcta-right">
            <button className="btn-primary fcta-btn" onClick={() => navigate('/contact')}>
              <Mail size={18} /> Contact Us <ArrowRight size={18} />
            </button>
            <button className="btn-outline-dark fcta-btn-outline">
              <Headset size={18} /> Let's Talk <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Faq;
