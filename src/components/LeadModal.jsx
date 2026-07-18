import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';
import { X, Send, Calendar, CheckCircle2, ArrowLeft } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaArrowRight } from "react-icons/fa6";

const SERVICES = [
  { id: 'web', label: 'Website Development', icon: '🌐' },
  { id: 'mobile', label: 'Mobile App', icon: '📱' },
  { id: 'uiux', label: 'UI/UX Design', icon: '🎨' },
  { id: 'ecommerce', label: 'E-commerce', icon: '🛍️' },
  { id: 'marketing', label: 'Digital Marketing', icon: '📈' },
  { id: 'software', label: 'Custom Software', icon: '💻' },
  { id: 'branding', label: 'Branding', icon: '✨' },
  { id: 'other', label: 'Other', icon: '🤔' }
];

function LeadModal() {
  const { isModalOpen, closeModal } = useModal();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    description: '',
    timeline: '',
    budget: ''
  });

  if (!isModalOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      closeModal();
      // Reset after animation
      setTimeout(() => {
        setCurrentStep(1);
        setIsSuccess(false);
      }, 300);
    }
  };

  const nextStep = () => {
    if (currentStep === 1 && !formData.service) return; // Optional: enforce service selection
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return; 
    
    setIsSubmitting(true);
    // Mock API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleScheduleCall = () => {
    window.open('https://calendly.com/', '_blank');
  };

  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="step-content">
            <h3>What do you need help with?</h3>
            <div className="services-grid">
              {SERVICES.map(srv => (
                <div 
                  key={srv.id} 
                  className={`service-card ${formData.service === srv.id ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, service: srv.id})}
                >
                  <span className="service-icon">{srv.icon}</span>
                  <span className="service-label">{srv.label}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="step-content">
            <h3>Tell us about your project</h3>
            <div className="form-group">
              <label>💬 Project Description (Optional)</label>
              <textarea 
                rows="5" 
                placeholder="What are your main goals? Who is your target audience? Any specific features you need?" 
                value={formData.description} 
                onChange={e => setFormData({...formData, description: e.target.value})}
              ></textarea>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="step-content">
            <h3>Scope & Timing</h3>
            <div className="form-row">
              <div className="form-group">
                <label>📅 Expected Timeline</label>
                <select value={formData.timeline} onChange={e => setFormData({...formData, timeline: e.target.value})}>
                  <option value="">Select timeline...</option>
                  <option value="asap">ASAP</option>
                  <option value="1month">Within 1 Month</option>
                  <option value="3months">1–3 Months</option>
                  <option value="exploring">Just Exploring</option>
                </select>
              </div>
              <div className="form-group">
                <label>💰 Budget</label>
                <select value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})}>
                  <option value="">Select budget...</option>
                  <option value="under25k">Under ₹25k</option>
                  <option value="25to50k">₹25k–₹50k</option>
                  <option value="50to1L">₹50k–₹1L</option>
                  <option value="above1L">Above ₹1L</option>
                  <option value="discuss">Let's Discuss</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="step-content">
            <h3>Your Contact Details</h3>
            <div className="form-row">
              <div className="form-group">
                <label>👤 Full Name *</label>
                <input type="text" required placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="form-group">
                <label>📧 Email Address *</label>
                <input type="email" required placeholder="john@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
            </div>

            <div className="form-row" style={{ marginTop: '16px' }}>
              <div className="form-group">
                <label>📱 Phone Number</label>
                <input type="tel" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
              <div className="form-group">
                <label>🏢 Company Name</label>
                <input type="text" placeholder="Your Company" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content glass">
        <button className="modal-close" onClick={closeModal}><X size={24} /></button>
        
        {isSuccess ? (
          <div className="modal-success">
            <CheckCircle2 size={64} color="var(--primary-blue)" className="success-icon" />
            <h2>✅ Thank You!</h2>
            <p>We've received your enquiry.<br/>Our team will contact you within 24 hours.</p>
            <div className="modal-actions-success">
              <button className="btn-secondary" onClick={() => { setIsSuccess(false); setCurrentStep(1); closeModal(); }}>
                Back to Home
              </button>
              <a href="#" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                <FaWhatsapp size={18} /> WhatsApp Us
              </a>
            </div>
          </div>
        ) : (
          <div className="modal-form-container">
            <div className="modal-header">
              <h2>Let's Build Something Great 🚀</h2>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: `${(currentStep / 4) * 100}%` }}></div>
              </div>
              <p className="step-indicator">Step {currentStep} of 4</p>
            </div>
            
            <form onSubmit={handleSubmit} className="lead-form multi-step-form">
              
              <div className="step-wrapper">
                {renderStepContent()}
              </div>

              <div className="modal-actions multi-step-actions">
                {currentStep > 1 && (
                  <button type="button" className="btn-secondary flex-btn" onClick={prevStep}>
                    <ArrowLeft size={16} /> Back
                  </button>
                )}
                
                {currentStep < 4 ? (
                  <button type="button" className="btn-primary flex-btn" onClick={nextStep} disabled={currentStep === 1 && !formData.service}>
                    Next <FaArrowRight size={14} style={{ marginLeft: '6px' }} />
                  </button>
                ) : (
                  <button type="submit" className="btn-primary flex-btn" disabled={isSubmitting}>
                    <Send size={16} /> {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                  </button>
                )}
              </div>
              
              {currentStep === 1 && (
                <div style={{ textAlign: 'center', marginTop: '16px' }}>
                  <button type="button" className="text-link" onClick={handleScheduleCall} style={{ background: 'none', border: 'none', color: 'var(--accent-silver)', textDecoration: 'underline', cursor: 'pointer' }}>
                    Or Schedule a Call directly <FaArrowRight size={12} style={{ marginLeft: '6px' }} />
                  </button>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default LeadModal;
