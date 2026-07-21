import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, MonitorSmartphone, Database, Wrench } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit size={22} />,
    skills: ["Generative AI", "Predictive Modeling", "NLP Workflows", "Intelligent Systems"]
  },
  {
    title: "Frontend Engineering",
    icon: <MonitorSmartphone size={22} />,
    skills: ["React.js", "HTML5/CSS3", "UI/UX Design", "Responsive Layouts"]
  },
  {
    title: "Backend & Data",
    icon: <Database size={22} />,
    skills: ["Python", "Node.js", "MySQL", "Pandas"]
  },
  {
    title: "Tools & Ecosystem",
    icon: <Wrench size={22} />,
    skills: ["Git/GitHub", "Prompt Engineering", "WordPress", "Vercel"]
  }
];

const Skills = () => {
  return (
    <section className="skills section container" id="skills">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="skills-eyebrow">TECHNICAL STACK ——</p>
        <h2 className="section-title">Technical Arsenal</h2>
        <p className="section-subtitle muted">The core technologies I use to build scalable, intelligent solutions.</p>
      </motion.div>

      <motion.div
        className="skills-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
        }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-card-wrap"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
          >
            {/* ── Solid orange backdrop (like hero image backdrop) ── */}
            <div className="skill-backdrop" aria-hidden="true" />

            {/* ── Dot grid (like hero-image-dots) ── */}
            <div className="skill-dots" aria-hidden="true" />

            {/* ── White card on top ── */}
            <div className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon-wrap">
                  <span className="skill-icon">{category.icon}</span>
                </span>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skill-divider" />

              <ul className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    <span className="skill-bullet" />
                    <span className="skill-name">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
