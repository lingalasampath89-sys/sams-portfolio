import React, { useState } from 'react';
import { ExternalLink, GitBranch } from 'lucide-react';
import './ProjectsPage.css';

/* custom chevron — no icon lib */
function ChevronSVG() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6L8 10L12 6"/>
    </svg>
  );
}

import { aiProjects, frontendProjects, allProjects } from '../data/projectsData';

const ProjectsPage = () => {
  const [activeId, setActiveId] = useState(null);
  const [filter, setFilter] = useState('All');

  const filters = ['All', '🤖 AI & ML', '🎨 Frontend'];

  const filtered = filter === 'All'
    ? allProjects
    : filter === '🤖 AI & ML'
      ? aiProjects
      : frontendProjects;

  const toggle = (id) => setActiveId(activeId === id ? null : id);

  return (
    <div className="pp-page" style={{ position: 'relative' }}>
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Back button */}
        <a href="/" className="pp-back-btn" id="btn-back-home-projects">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back to Portfolio
        </a>

        <div className="pp-header">
        <p className="pp-eyebrow">MY WORK ——</p>
        <h1 className="pp-title">All Projects</h1>
        <p className="pp-desc">
          A collection of AI/ML systems and frontend builds — each solving a real problem.
        </p>

        {/* Filter pills */}
        <div className="pp-filters">
          {filters.map(f => (
            <button
              key={f}
              className={`pp-filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Projects list */}
      <div className="pp-list">
        {filtered.map((project, i) => (
          <div key={project.id} className="pp-item">
            {/* ── Card Row ── */}
            <div
              className={`pp-card-row ${activeId === project.id ? 'open' : ''}`}
              onClick={() => toggle(project.id)}
              id={`project-row-${project.id}`}
            >
              <div className="pp-card-left">
                <span className={`pp-cat-dot ${project.category === 'Frontend' ? 'dot-frontend' : 'dot-ai'}`}></span>
                <div className="pp-card-info">
                  <div className="pp-card-title-row">
                    <h3 className="pp-card-title">{project.title}</h3>
                    {project.isDemo && <span className="pp-demo-badge">Demo</span>}
                  </div>
                  <p className="pp-card-tagline">{project.tagline}</p>
                </div>
              </div>

              <div className="pp-card-right">
                <div className="pp-tags">
                  {project.tags.map((t, idx) => <span key={idx} className="pp-tag">{t}</span>)}
                </div>
                {project.link && project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pp-live-btn"
                    onClick={e => e.stopPropagation()}
                  >
                    <ExternalLink size={13} /> Live
                  </a>
                )}
                <span className={`pp-chevron ${activeId === project.id ? 'rotated' : ''}`}>
                  <ChevronSVG />
                </span>
              </div>
            </div>

            {/* ── Expanded Detail ── */}
            {activeId === project.id && (
              <div className="pp-detail">
                <div className="pp-detail-inner">
                  {/* Left: Project image */}
                  <div className="pp-detail-img-col">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="pp-project-img" />
                    ) : (
                      <div className="pp-img-placeholder">
                        <span>{project.title}</span>
                      </div>
                    )}
                    {project.demoNote && (
                      <p className="pp-demo-note">⚠️ {project.demoNote}</p>
                    )}
                    <div className="pp-detail-actions">
                      {project.link && project.link !== '#' && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="pp-btn-primary">
                          <ExternalLink size={15} /> Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="pp-btn-secondary">
                          <GitBranch size={15} /> Source Code
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right: Case study text */}
                  <div className="pp-detail-text-col">
                    <div className="pp-cs-block">
                      <h4 className="pp-cs-label">The Problem</h4>
                      <p className="pp-cs-text">{project.problem}</p>
                    </div>
                    <div className="pp-cs-block">
                      <h4 className="pp-cs-label">The Solution</h4>
                      <p className="pp-cs-text">{project.solution}</p>
                    </div>
                    <div className="pp-cs-block">
                      <h4 className="pp-cs-label">Architecture & Tech</h4>
                      <p className="pp-cs-text">{project.architecture}</p>
                    </div>
                    <div className="pp-cs-block">
                      <h4 className="pp-cs-label">Challenges</h4>
                      <p className="pp-cs-text">{project.challenges}</p>
                    </div>
                    <div className="pp-cs-block result-block">
                      <h4 className="pp-cs-label">Results</h4>
                      <p className="pp-cs-text result-text">{project.results}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
