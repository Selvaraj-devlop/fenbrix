import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { X, ArrowLeft, ArrowRight, MessageSquare, Check, ShieldCheck, Clock, Headset, Code2, Smartphone, PenTool, Megaphone, MoreHorizontal, Mail, Phone, User, ShoppingBag } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

function LeadModal() {
  const { isModalOpen, closeModal } = useModal();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    service: 'web',
    project: '',
    name: '',
    email: '',
    phone: '',
    contactMethod: 'email'
  });

  const location = useLocation();

  // Close modal when user navigates (e.g. clicks browser back button)
  useEffect(() => {
    if (isModalOpen) {
      closeModal();
      setCurrentStep(1);
    }
  }, [location.pathname]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('body-lock');
      document.documentElement.classList.add('body-lock');
    } else {
      document.body.classList.remove('body-lock');
      document.documentElement.classList.remove('body-lock');
    }
    return () => {
      document.body.classList.remove('body-lock');
      document.documentElement.classList.remove('body-lock');
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      closeModal();
      setTimeout(() => {
        setCurrentStep(1);
      }, 300);
    }
  };

  const isNextDisabled = () => {
    if (currentStep === 3 && !formData.project.trim()) return true;
    if (currentStep === 4 && (!formData.name.trim() || !formData.email.trim())) return true;
    if (isSubmitting) return true;
    return false;
  };

  const nextStep = () => {
    if (isNextDisabled()) return;

    if (currentStep === 5) {
      submitForm();
    } else {
      setCurrentStep(prev => Math.min(prev + 1, 6));
    }
  };

  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const submitForm = () => {
    setIsSubmitting(true);
    // Mock API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep(6);
    }, 1000);
  };

  const handleClose = () => {
    closeModal();
    setTimeout(() => {
      setCurrentStep(1);
    }, 300);
  };

  const renderStepDots = () => {
    return (
      <div className="wizard-progress">
        <div className="wizard-dots">
          {[1, 2, 3, 4, 5, 6].map(step => (
            <React.Fragment key={step}>
              <div className={`wizard-dot ${currentStep >= step ? 'active' : ''} ${currentStep === step ? 'current' : ''}`}>
                 {currentStep > step ? <Check size={10} strokeWidth={4} /> : ''}
                 {currentStep === step ? <div className="dot-inner"></div> : ''}
              </div>
              {step < 6 && <div className={`wizard-line ${currentStep > step ? 'active' : ''}`}></div>}
            </React.Fragment>
          ))}
        </div>
        <p className="wizard-step-text">Step {currentStep} of 6</p>
      </div>
    );
  };

  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="wizard-step-content center-align">
            <div className="wizard-chat-icon">
              <MessageSquare size={36} color="#fff" fill="rgba(255,255,255,0.2)" />
              <div className="chat-dots">
                <span></span><span></span><span></span>
              </div>
            </div>
            <h2>Let's Start a Conversation</h2>
            <p>Tell us what you want to do and<br/>we'll help you get there.</p>
          </div>
        );
      case 2:
        return (
          <div className="wizard-step-content">
            <h3>What can we help you with?</h3>
            <p className="wizard-subtitle">Choose the service you're interested in.</p>
            <div className="wizard-options-grid">
              {[
                { id: 'web', icon: <Code2 size={20} />, label: 'Web Development' },
                { id: 'mobile', icon: <Smartphone size={20} />, label: 'Mobile App' },
                { id: 'uiux', icon: <PenTool size={20} />, label: 'UI/UX Design' },
                { id: 'marketing', icon: <Megaphone size={20} />, label: 'Marketing' },
                { id: 'ecommerce', icon: <ShoppingBag size={20} />, label: 'E-Commerce' },
                { id: 'other', icon: <MoreHorizontal size={20} />, label: 'Other' }
              ].map(opt => (
                <div 
                  key={opt.id} 
                  className={`wizard-option grid-style ${formData.service === opt.id ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, service: opt.id})}
                >
                  <div className="opt-left">
                    <span className="opt-icon">{opt.icon}</span>
                    <span className="opt-label">{opt.label}</span>
                  </div>
                  <div className={`wizard-radio ${formData.service === opt.id ? 'checked' : ''}`}>
                    {formData.service === opt.id && <Check size={12} strokeWidth={4} />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="wizard-step-content">
            <h3>Tell us about your project</h3>
            <p className="wizard-subtitle">This helps us understand your needs better.</p>
            <div className="wizard-textarea-wrapper">
              <textarea 
                placeholder="Briefly describe your project or idea..." 
                value={formData.project} 
                onChange={e => setFormData({...formData, project: e.target.value})}
                maxLength={500}
                rows={6}
              ></textarea>
              <div className="char-count">{formData.project.length}/500</div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="wizard-step-content">
            <h3>Share your details</h3>
            <p className="wizard-subtitle">We'll use this to get in touch with you.</p>
            <div className="wizard-input-group">
               <div className="wizard-input-wrapper">
                 <User size={18} className="input-icon" />
                 <input type="text" placeholder="Your Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
               </div>
               <div className="wizard-input-wrapper">
                 <Mail size={18} className="input-icon" />
                 <input type="email" placeholder="Your Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
               </div>
               <div className="wizard-input-wrapper">
                 <Phone size={18} className="input-icon" />
                 <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
               </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="wizard-step-content">
            <h3>How would you prefer to connect?</h3>
            <p className="wizard-subtitle">Select your preferred communication method.</p>
            <div className="wizard-options-list">
              {[
                { id: 'email', icon: <Mail size={22} color="#3b82f6" />, title: 'Email', desc: 'We will reply to your email' },
                { id: 'whatsapp', icon: <FaWhatsapp size={22} color="#22c55e" />, title: 'WhatsApp', desc: 'We will message you on WhatsApp' },
                { id: 'phone', icon: <Phone size={22} color="#94a3b8" />, title: 'Phone Call', desc: 'We will call you' }
              ].map(opt => (
                <div 
                  key={opt.id} 
                  className={`wizard-option double-line ${formData.contactMethod === opt.id ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, contactMethod: opt.id})}
                >
                  <div className="opt-left">
                    <span className="opt-icon">{opt.icon}</span>
                    <div className="opt-text">
                      <span className="opt-title">{opt.title}</span>
                      <span className="opt-desc">{opt.desc}</span>
                    </div>
                  </div>
                  <div className={`wizard-radio ${formData.contactMethod === opt.id ? 'checked' : ''}`}>
                    {formData.contactMethod === opt.id && <Check size={12} strokeWidth={4} />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 6:
        return (
          <div className="wizard-step-content success-step">
            <div className="success-confetti">
              <div className="success-icon-wrapper">
                <Check size={48} color="#fff" strokeWidth={3} />
              </div>
            </div>
            <h2>Message Sent!</h2>
            <p>Thanks for reaching out. We've received your information and will get back to you soon.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      
      <div className="modal-content wizard-modal">
        <button className="modal-close" onClick={handleClose}><X size={20} color="#94a3b8" /></button>
        
        {renderStepDots()}
        
        <div className="wizard-body">
          {renderStepContent()}
        </div>

        {currentStep < 6 ? (
          <div className="wizard-footer">
            {currentStep > 1 ? (
              <button className="wizard-btn-back" onClick={prevStep}>
                <ArrowLeft size={16} /> Back
              </button>
            ) : <div></div>}
            
            <button className={`wizard-btn-next ${isNextDisabled() ? 'disabled' : ''}`} onClick={nextStep} disabled={isNextDisabled()}>
              {isSubmitting ? 'Sending...' : 'Next'} <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <div className="wizard-footer single-btn">
            <button className="wizard-btn-full" onClick={handleClose}>
              Close
            </button>
          </div>
        )}
      </div>

      {/* Bottom Features outside modal */}
      <div className="wizard-global-footer">
        <div className="wg-feature"><ShieldCheck size={16} /> Your information is safe with us</div>
        <div className="wg-feature"><Clock size={16} /> Usually reply within 24 hours</div>
        <div className="wg-feature"><Headset size={16} /> We're here to help you succeed</div>
      </div>

    </div>
  );
}

export default LeadModal;
