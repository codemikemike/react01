import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

function About() {
  const navigate = useNavigate();

  const handleJoinUs = () => {
    navigate('/contact');
  };

  const handleViewProjects = () => {
    navigate('/projects');
  };

  return (
    <div className="about">
      <section className="about-hero">
        <h1 className="page-title">About Us</h1>
        <p className="page-subtitle">Building the future, one line of code at a time</p>
      </section>

      <section className="about-content">
        <div className="content-container">
          <div className="about-section">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                We are passionate developers dedicated to creating exceptional web experiences. 
                Our mission is to push the boundaries of what's possible with modern web technologies 
                and deliver solutions that make a difference.
              </p>
              <p>
                With a focus on innovation, quality, and user experience, we craft digital products 
                that not only look great but perform exceptionally well.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span className="placeholder-icon">🎯</span>
              </div>
            </div>
          </div>

          <div className="about-section reverse">
            <div className="about-text">
              <h2>Our Vision</h2>
              <p>
                We envision a digital landscape where every interaction is meaningful, every 
                interface is intuitive, and every experience is memorable. Through cutting-edge 
                technology and thoughtful design, we're making this vision a reality.
              </p>
              <p>
                Our commitment to excellence drives us to continuously learn, adapt, and innovate 
                in the ever-evolving world of web development.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span className="placeholder-icon">🚀</span>
              </div>
            </div>
          </div>

          <div className="values-section">
            <h2 className="values-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">💎</div>
                <h3>Quality</h3>
                <p>Excellence in every detail</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h3>Collaboration</h3>
                <p>Together we achieve more</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🌟</div>
                <h3>Innovation</h3>
                <p>Always pushing forward</p>
              </div>
              <div className="value-item">
                <div className="value-icon">❤️</div>
                <h3>Passion</h3>
                <p>Love what we do</p>
              </div>
            </div>
          </div>

          <div className="about-cta">
            <h2>Ready to Work With Us?</h2>
            <p>Let's build something amazing together</p>
            <div className="cta-buttons">
              <button className="cta-btn primary" onClick={handleJoinUs}>Get In Touch</button>
              <button className="cta-btn secondary" onClick={handleViewProjects}>View Our Work</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
