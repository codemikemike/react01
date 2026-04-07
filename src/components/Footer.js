import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>React01</h3>
            <p>Building beautiful web experiences</p>
          </div>
          <div className="footer-nav">
            <h4>Quick Links</h4>
            <Link to="/" onClick={scrollToTop}>Home</Link>
            <Link to="/about" onClick={scrollToTop}>About</Link>
            <Link to="/projects" onClick={scrollToTop}>Projects</Link>
            <Link to="/contact" onClick={scrollToTop}>Contact</Link>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                <span className="social-icon">🐙</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                <span className="social-icon">🐦</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <span className="social-icon">💼</span>
              </a>
              <a href="mailto:hello@react01.com" title="Email">
                <span className="social-icon">📧</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} React01. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#privacy" className="footer-link">Privacy Policy</a>
            <a href="#terms" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
      <button className="back-to-top" onClick={scrollToTop} title="Back to top">
        ↑
      </button>
    </footer>
  );
}

export default Footer;
