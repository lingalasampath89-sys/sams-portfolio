import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './HomeProjects.css';

const HomeProjects = () => {
  const navigate = useNavigate();

  return (
    <section className="hpj-section container" id="projects-home">
      {/* Header */}
      <div className="hpj-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="hpj-eyebrow">MY WORK ——</p>
          <h2 className="hpj-title">Projects Across Multiple<br />Technologies &amp; Stacks</h2>
          <p className="hpj-subtitle">
            From AI/ML pipelines to full-stack platforms and polished frontends —
            each project solves a real problem.
          </p>
        </motion.div>
      </div>

      {/* Single CTA */}
      <motion.div
        className="hpj-cta hpj-cta-solo"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="hpj-cta-text">Explore full case studies with architecture, challenges &amp; results.</p>
        <div className="hpj-cta-btns">
          <button className="hpj-btn-primary" onClick={() => navigate('/projects')} id="home-check-projects">
            Check My Projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeProjects;
