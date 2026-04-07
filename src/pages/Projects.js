import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with real-time inventory management and seamless checkout experience.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'Completed',
      icon: '🛒',
      demoUrl: 'https://example.com/ecommerce',
      details: 'Full-featured e-commerce platform with user authentication, shopping cart, payment processing, and admin dashboard.'
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media metrics across multiple platforms in real-time.',
      technologies: ['React', 'D3.js', 'Firebase', 'API Integration'],
      status: 'In Progress',
      icon: '📊',
      demoUrl: 'https://example.com/dashboard',
      details: 'Real-time analytics dashboard with beautiful data visualizations, custom reports, and automated insights.'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration features.',
      technologies: ['React', 'TypeScript', 'WebSocket', 'PostgreSQL'],
      status: 'Completed',
      icon: '✅',
      demoUrl: 'https://example.com/tasks',
      details: 'Kanban-style task manager with drag-and-drop, real-time collaboration, notifications, and time tracking.'
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with 7-day forecasts, maps, and severe weather alerts.',
      technologies: ['React', 'OpenWeather API', 'Mapbox', 'PWA'],
      status: 'Completed',
      icon: '🌤️',
      demoUrl: 'https://example.com/weather',
      details: 'Progressive web app with offline support, location-based forecasts, interactive maps, and weather alerts.'
    },
    {
      id: 5,
      title: 'Video Streaming Platform',
      description: 'Netflix-style streaming platform with user profiles, recommendations, and offline viewing.',
      technologies: ['React', 'AWS', 'Video.js', 'ML Recommendations'],
      status: 'In Progress',
      icon: '🎬',
      demoUrl: 'https://example.com/streaming',
      details: 'Video streaming service with adaptive bitrate streaming, personalized recommendations, and content management.'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Comprehensive fitness tracking app with workout plans, nutrition tracking, and progress analytics.',
      technologies: ['React Native', 'HealthKit', 'Chart.js', 'REST API'],
      status: 'Completed',
      icon: '💪',
      demoUrl: 'https://example.com/fitness',
      details: 'Mobile fitness app with workout logging, meal planning, progress charts, and social features.'
    }
  ];

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleDemo = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
                  <button 
                    className="project-btn view-btn"
                    onClick={() => handleViewDetails(project)}
                  >
                    View Details
                  </button>
                  <button 
                    className="project-btn demo-btn"
                    onClick={() => handleDemo(project.demoUrl)}
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>&times;</button>
            <div className="modal-header">
              <div className="modal-icon">{selectedProject.icon}</div>
              <h2>{selectedProject.title}</h2>
              <span className={`modal-status ${selectedProject.status.toLowerCase().replace(' ', '-')}`}>
                {selectedProject.status}
              </span>
            </div>
            <div className="modal-body">
              <p className="modal-description">{selectedProject.description}</p>
              <div className="modal-details">
                <h3>Project Details</h3>
                <p>{selectedProject.details}</p>
              </div>
              <div className="modal-tech">
                <h3>Technologies Used</h3>
                <div className="modal-tech-tags">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                className="modal-btn demo-btn"
                onClick={() => handleDemo(selectedProject.demoUrl)}
              >
                View Live Demo →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
