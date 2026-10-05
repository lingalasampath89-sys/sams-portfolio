import React from 'react';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page section container">
      <div className="services-header">
        <h1 className="section-title">My Services</h1>
        <p className="services-desc">What I can do for you and your business.</p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">🤖</div>
          <h3>AI & ML Solutions</h3>
          <p>Building predictive models, generative AI applications, and intelligent systems to automate workflows and solve complex business challenges.</p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3>Frontend Development</h3>
          <p>Creating responsive, accessible, and highly interactive user interfaces using modern frameworks like React and Vite.</p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">📝</div>
          <h3>Prompt Engineering</h3>
          <p>Optimizing and designing prompts for Large Language Models to ensure highly accurate and context-aware responses.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
