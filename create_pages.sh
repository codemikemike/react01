#!/bin/bash

# Create Contact.css
cat > src/pages/Contact.css << 'EOF'
.contact {
  width: 100%;
  background: #0f0f1e;
  min-height: 100vh;
}

.contact-hero {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 6rem 2rem 4rem;
  text-align: center;
}

.contact-content {
  padding: 4rem 2rem;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  animation: fadeInUp 1s ease-out;
}

.contact-info {
  animation: slideInLeft 0.8s ease-out;
}

.contact-info h2 {
  font-size: 2rem;
  color: #61dafb;
  margin-bottom: 1.5rem;
}

.contact-description {
  color: #b8b8d1;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.info-items {
  margin-bottom: 3rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 15px;
  border: 1px solid rgba(97, 218, 251, 0.1);
  transition: all 0.3s ease;
}

.info-item:hover {
  border-color: rgba(97, 218, 251, 0.3);
  transform: translateX(10px);
}

.info-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.info-text h3 {
  color: #61dafb;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.info-text p {
  color: #b8b8d1;
  font-size: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #61dafb;
  text-decoration: none;
  border-radius: 10px;
  border: 1px solid rgba(97, 218, 251, 0.2);
  transition: all 0.3s ease;
  font-weight: 500;
}

.social-link:hover {
  background: rgba(97, 218, 251, 0.1);
  border-color: #61dafb;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(97, 218, 251, 0.2);
}

.contact-form-wrapper {
  animation: slideInRight 0.8s ease-out;
}

.contact-form {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 3rem;
  border-radius: 20px;
  border: 1px solid rgba(97, 218, 251, 0.1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.form-group {
  margin-bottom: 2rem;
}

.form-group label {
  display: block;
  color: #61dafb;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.8rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  background: #0f0f1e;
  border: 2px solid rgba(97, 218, 251, 0.2);
  border-radius: 10px;
  color: #ffffff;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #61dafb;
  box-shadow: 0 0 20px rgba(97, 218, 251, 0.2);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #5a5a7d;
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
}

.submit-btn {
  width: 100%;
  padding: 1.2rem 2rem;
  background: linear-gradient(135deg, #61dafb 0%, #00d4ff 100%);
  color: #1a1a2e;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(97, 218, 251, 0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-btn.sending {
  background: linear-gradient(135deg, #4a4a6a 0%, #6a6a8a 100%);
}

.submit-btn.success {
  background: linear-gradient(135deg, #00ff88 0%, #00dd77 100%);
}

.success-message {
  margin-top: 1.5rem;
  padding: 1rem;
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: 10px;
  color: #00ff88;
  text-align: center;
  animation: slideDown 0.5s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 968px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .contact-form {
    padding: 2rem;
  }
}
EOF

# Create Projects page files
cat > src/pages/Projects.js << 'PROJJS'
import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with real-time inventory management and seamless checkout experience.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'Completed',
      icon: '🛒'
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media metrics across multiple platforms in real-time.',
      technologies: ['React', 'D3.js', 'Firebase', 'API Integration'],
      status: 'In Progress',
      icon: '📊'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration features.',
      technologies: ['React', 'TypeScript', 'WebSocket', 'PostgreSQL'],
      status: 'Completed',
      icon: '✅'
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with 7-day forecasts, maps, and severe weather alerts.',
      technologies: ['React', 'OpenWeather API', 'Mapbox', 'PWA'],
      status: 'Completed',
      icon: '🌤️'
    },
    {
      id: 5,
      title: 'Video Streaming Platform',
      description: 'Netflix-style streaming platform with user profiles, recommendations, and offline viewing.',
      technologies: ['React', 'AWS', 'Video.js', 'ML Recommendations'],
      status: 'In Progress',
      icon: '🎬'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Comprehensive fitness tracking app with workout plans, nutrition tracking, and progress analytics.',
      technologies: ['React Native', 'HealthKit', 'Chart.js', 'REST API'],
      status: 'Completed',
      icon: '💪'
    }
  ];

  return (
    <div className="projects">
      <section className="projects-hero">
        <h1 className="page-title">Our Projects</h1>
        <p className="page-subtitle">Showcasing our latest work and innovations</p>
      </section>

      <section className="projects-content">
        <div className="projects-container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-header">
                  <div className="project-icon">{project.icon}</div>
                  <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <button className="project-btn view-btn">View Details</button>
                  <button className="project-btn demo-btn">Live Demo</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
PROJJS

echo "All page files created successfully"
