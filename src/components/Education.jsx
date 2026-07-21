import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech - Computer Science Engineering (AI & ML)",
      institution: "KKR & KSR Institute of Technology & Sciences",
      score: "CGPA: 8.2/10"
    },
    {
      degree: "Intermediate (12th)",
      institution: "Narayana Junior College, Guntur",
      score: "Percentage: 94%"
    },
    {
      degree: "SSC (10th)",
      institution: "Adithya High School",
      score: "Percentage: 99.1%"
    }
  ];

  const certifications = [
    "Employability Skills Job Ready Virtual Internship",
    "Generative AI Fundamentals Certification"
  ];

  return (
    <section className="education section container" id="education">
      <div className="edu-cert-container">
        <div className="edu-section">
          <h2 className="section-title" style={{ textAlign: 'left' }}>Education</h2>
          
          <div className="edu-list">
            {educationData.map((edu, index) => (
              <div className="edu-item glass-card animate-fade-in" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="edu-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                </div>
                <div className="edu-content">
                  <h3 className="degree">{edu.degree}</h3>
                  <h4 className="institution">{edu.institution}</h4>
                  <span className="score badge">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="cert-section">
          <h2 className="section-title" style={{ textAlign: 'left' }}>Certifications</h2>
          
          <div className="cert-list">
            {certifications.map((cert, index) => (
              <div className="cert-item glass-card animate-fade-in" key={index} style={{ animationDelay: `${(index + 3) * 0.1}s` }}>
                <div className="cert-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                </div>
                <h3 className="cert-title">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
