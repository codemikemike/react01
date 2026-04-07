import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Send to backend API
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          
          setTimeout(() => {
            setStatus('');
          }, 5000);
        } else {
          setStatus('error');
          setTimeout(() => {
            setStatus('');
          }, 3000);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setStatus('error');
        setTimeout(() => {
          setStatus('');
        }, 3000);
      });
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-subtitle">We'd love to hear from you</p>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p className="contact-description">
              Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible.
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-text">
                  <h3>Email</h3>
                  <p>hello@react01.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">📱</div>
                <div className="info-text">
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-text">
                  <h3>Location</h3>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/codemikemike" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${status}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent! ✓' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="success-message">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {status === 'error' && (
                <div className="error-message">
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
