import React, { useState } from 'react';
import { Mail, Phone, Clock, User, FileText, Send, MessageCircle } from 'lucide-react';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { FaArrowRight } from "react-icons/fa6";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="contact-page-wrapper">
      <div className="container contact-page-container">
        
        {/* Main Grid: Info + Form */}
        <div className="contact-grid">
          
          {/* Left Column: Info */}
          <div className="contact-info-col">
            <span className="contact-badge">CONTACT US</span>
            <h1 className="contact-title">
              Let's Build Something <br/> <span className="highlight-blue">Amazing Together</span>
            </h1>
            <p className="contact-desc">
              Have a project in mind or want to discuss an idea? We'd love to hear from you. Drop us a message and we'll get back to you soon.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-card">
                <div className="cd-icon"><Mail size={20} /></div>
                <div className="cd-text">
                  <h5>Email Us</h5>
                  <p>hello@fenbrix.com</p>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="cd-icon"><Phone size={20} /></div>
                <div className="cd-text">
                  <h5>Call Us</h5>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="cd-icon"><Clock size={20} /></div>
                <div className="cd-text">
                  <h5>Response Time</h5>
                  <p>We typically reply within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass">
              <h3>Send Us a Message</h3>
              
              {isSuccess ? (
                <div className="contact-success-msg">
                  <div className="success-icon-large">✅</div>
                  <h4>Message Sent Successfully!</h4>
                  <p>Thanks for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form className="contact-page-form" onSubmit={handleSubmit}>
                  <div className="form-grid-2">
                    <div className="input-with-icon">
                      <User size={18} className="input-icon" />
                      <input type="text" placeholder="Your Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div className="input-with-icon">
                      <Mail size={18} className="input-icon" />
                      <input type="email" placeholder="Your Email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="input-with-icon">
                      <Phone size={18} className="input-icon" />
                      <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                    </div>
                    <div className="input-with-icon">
                      <FileText size={18} className="input-icon" />
                      <input type="text" placeholder="Subject" required value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} />
                    </div>
                  </div>

                  <div className="input-with-icon textarea-icon-wrapper">
                    <MessageCircle size={18} className="input-icon textarea-icon" />
                    <textarea rows="5" placeholder="Your Message" required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                  </div>

                  <button type="submit" className="btn-primary submit-full-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} style={{ marginLeft: '8px' }} />
                  </button>
                </form>
              )}
            </div>
          </div>
          
        </div>

        {/* Bottom Section: Other Ways to Connect */}
        <div className="other-ways-section glass">
          <h3 className="other-ways-title">Other Ways to Connect</h3>
          
          <div className="other-ways-grid">
            
            <div className="other-way-card">
              <div className="ow-icon whatsapp-icon"><FaWhatsapp size={24} /></div>
              <div className="ow-text">
                <h5>WhatsApp</h5>
                <p>Chat with us instantly</p>
                <a href="#" className="ow-link">Chat Now <FaArrowRight size={12} /></a>
              </div>
            </div>
            
            <div className="ow-divider"></div>

            <div className="other-way-card">
              <div className="ow-icon linkedin-icon"><FaLinkedin size={24} /></div>
              <div className="ow-text">
                <h5>LinkedIn</h5>
                <p>Let's connect professionally</p>
                <a href="#" className="ow-link">Connect <FaArrowRight size={12} /></a>
              </div>
            </div>

            <div className="ow-divider"></div>

            <div className="other-way-card">
              <div className="ow-icon email-icon"><Mail size={24} /></div>
              <div className="ow-text">
                <h5>General Inquiries</h5>
                <p>For any other questions</p>
                <a href="#" className="ow-link">Send Email <FaArrowRight size={12} /></a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
