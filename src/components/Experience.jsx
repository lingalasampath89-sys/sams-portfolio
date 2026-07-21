import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Intern — Web Developer",
      company: "Jersey Perfumes",
      period: "2023 - Present",
      achievements: [
        "Designed, developed, and maintained responsive web pages to enhance product visibility, user engagement, and brand credibility.",
        "Implemented modern UI/UX principles including intuitive navigation, visual hierarchy, and accessible design patterns to improve the overall customer experience.",
        "Optimized website performance through lazy loading, image compression, and code minification — achieving fast load times and seamless cross-browser compatibility.",
        "Collaborated with the business team to manage content updates, seasonal promotions, and product presentation, ensuring smooth day-to-day operations.",
        "Integrated SEO best practices including semantic HTML, meta tags, and structured data to improve organic discoverability."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React.js"]
    }
  ];

  return (
    <section className="experience section container" id="experience">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Professional Experience</h2>
      </motion.div>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            className="timeline-item" 
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="timeline-dot">
              <Briefcase size={16} color="var(--bg-primary)" />
            </div>
            <div className="timeline-content">
              <div className="experience-header">
                <div>
                  <h3 className="role">{exp.role}</h3>
                  <h4 className="company">{exp.company}</h4>
                </div>
                <div className="period">
                  <span className="period-badge">{exp.period}</span>
                </div>
              </div>
              
              <ul className="achievements-list">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>
                    <svg className="bullet-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                    {achievement}
                  </li>
                ))}
              </ul>
              
              <div className="tech-stack">
                <span className="tech-label">Technologies Used:</span>
                <div className="tech-tags">
                  {exp.technologies.map((tech, idx) => (
                    <span className="tech-tag" key={idx}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
