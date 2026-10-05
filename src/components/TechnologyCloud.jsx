import React from 'react';
import './TechnologyCloud.css';

const TechnologyCloud = () => {
  return (
    <div className="tech-cloud-bg" aria-hidden="true">
      <div className="tech-cloud-grid">
        <span className="tc-item">React.js</span>
        <span className="tc-item">Node.js</span>
        <span className="tc-item">Python</span>
        <span className="tc-item">Generative AI</span>
        <span className="tc-item">Machine Learning</span>
        <span className="tc-item">NLP</span>
        <span className="tc-item">MySQL</span>
        <span className="tc-item">Vercel</span>
        <span className="tc-item">Tailwind</span>
        <span className="tc-item">HTML5/CSS3</span>
        <span className="tc-item">Prompt Engineering</span>
        <span className="tc-item">Framer Motion</span>
      </div>
      <div className="tech-cloud-overlay"></div>
    </div>
  );
};

export default TechnologyCloud;
