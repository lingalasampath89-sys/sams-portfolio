import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, ExternalLink, X } from 'lucide-react';
import './Projects.css';

import { aiProjects, frontendProjects } from '../data/projectsData';

const ProjectCard = ({ project, activeProject, toggleProject, projectRefs, index }) => (
  <motion.div
    className="project-wrapper"
    key={project.id}
    ref={(el) => (projectRefs.current[project.id] = el)}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    {/* Thumbnail / Summary Card */}
    <div
      className={`project-card ${activeProject === project.id ? 'active' : ''}`}
      onClick={() => toggleProject(project.id)}
    >
      <div className="project-thumbnail">
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <div className="thumbnail-placeholder-text">
            <span>{project.title}</span>
            <span className="placeholder-sub">Click to view case study</span>
          </div>
        )}
      </div>
      <div className="project-meta">
        <div className="project-title-row">
          <h3 className="project-title">{project.title}</h3>
          {project.isDemo && (
            <span className="demo-badge">Demo</span>
          )}
        </div>
        <p className="project-tagline">{project.tagline}</p>
        {project.demoNote && (
          <p className="demo-note">⚠️ {project.demoNote}</p>
        )}
        <div className="project-tags-row">
          <div className="project-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="tag">{tag}</span>
            ))}
          </div>
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-live-btn"
              onClick={(e) => e.stopPropagation()}
              title="Open Live Demo"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>

    {/* Expanded Case Study */}
    <AnimatePresence>
      {activeProject === project.id && (
        <motion.div
          className="case-study"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="case-study-header">
            <h3>{project.title} — Case Study</h3>
            <button className="close-btn" onClick={() => toggleProject(project.id)}>
              <X size={18} /> Close
            </button>
          </div>

          <div className="cs-layout">
            <div className="cs-text-column">
              <div className="cs-section">
                <h4 className="cs-heading">The Problem</h4>
                <p className="cs-text">{project.problem}</p>
              </div>
              <div className="cs-section">
                <h4 className="cs-heading">The Solution</h4>
                <p className="cs-text">{project.solution}</p>
              </div>
              <div className="cs-section">
                <h4 className="cs-heading">Architecture & Tech Stack</h4>
                <p className="cs-text">{project.architecture}</p>
              </div>
              <div className="cs-section">
                <h4 className="cs-heading">Engineering Challenges</h4>
                <p className="cs-text">{project.challenges}</p>
              </div>
              <div className="cs-section">
                <h4 className="cs-heading">Measurable Results</h4>
                <p className="cs-text highlight">{project.results}</p>
              </div>
              <div className="cs-actions">
                {project.link && project.link !== "#" && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <ExternalLink size={16} style={{ marginRight: '8px' }} /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
                    <GitBranch size={16} style={{ marginRight: '8px' }} /> Source Code
                  </a>
                )}
              </div>
            </div>

            <div className="cs-visual-column">
              {project.image ? (
                <img src={project.image} alt={`${project.title} UI`} className="cs-img" loading="lazy" />
              ) : (
                <div className="cs-visual-placeholder">
                  <p>Architecture Diagram / Real Dashboard</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const projectRefs = React.useRef({});

  const toggleProject = (id) => {
    if (activeProject === id) {
      setActiveProject(null);
    } else {
      setActiveProject(id);
      setTimeout(() => {
        if (projectRefs.current[id]) {
          const y = projectRefs.current[id].getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <section className="projects section container" id="projects" style={{ position: 'relative' }}>
      <h2 className="section-title" style={{ position: 'relative', zIndex: 1 }}>Selected Work</h2>

      {/* ── AI / ML Projects ── */}
      <div className="projects-category-label" style={{ position: 'relative', zIndex: 1 }}>
        <span className="category-pill ai-pill">🤖 AI &amp; ML Projects</span>
      </div>
      <div className="projects-grid" style={{ position: 'relative', zIndex: 1 }}>
        {aiProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            activeProject={activeProject}
            toggleProject={toggleProject}
            projectRefs={projectRefs}
            index={index}
          />
        ))}
      </div>

      {/* ── Frontend Projects ── */}
      <div className="projects-category-label" style={{ marginTop: '4rem' }}>
        <span className="category-pill frontend-pill">🎨 Frontend Projects</span>
      </div>
      <div className="projects-grid">
        {frontendProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            activeProject={activeProject}
            toggleProject={toggleProject}
            projectRefs={projectRefs}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
