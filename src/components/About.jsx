import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, Rocket, Zap, Heart } from 'lucide-react';
import './About.css';

const About = () => {

  return (
    <section className="about section container" id="about">
      <motion.div
        className="about-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        <motion.div className="about-bio" variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
          <h2 className="section-title">My Philosophy</h2>
          <p className="bio-text">
            I believe that great technology is <strong>purposeful by design</strong> — built not just to function, but to create genuine impact. My approach centers on understanding the problem deeply before writing a single line of code.
          </p>
          <p className="bio-text">
            Every system I build is guided by three core principles: <strong>clarity</strong> in architecture, <strong>precision</strong> in execution, and <strong>measurable outcomes</strong> in delivery. Whether it's an NLP pipeline reducing manual effort by 60% or a frontend loaded in under a second — the numbers tell the story.
          </p>
          <p className="bio-text">
            I'm a lifelong learner who thrives at the intersection of <strong>Generative AI</strong>, data engineering, and full-stack development. I don't just follow trends — I study them, break them down, and build on top of what actually matters.
          </p>

        </motion.div>

        <motion.div className="about-highlights" variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}>
          <div className="highlight-card">
            <div className="highlight-icon"><Lightbulb size={24} /></div>
            <div>
              <h3 className="highlight-title">Problem Solver First</h3>
              <p className="highlight-text">I dig into ambiguous challenges and reframe them as structured, data-driven opportunities — before opening any editor.</p>
            </div>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon"><Code2 size={24} /></div>
            <div>
              <h3 className="highlight-title">Clean, Scalable Architecture</h3>
              <p className="highlight-text">Writing code that a team can read, extend, and maintain is not optional — it's the baseline. I enforce strict engineering principles on every project.</p>
            </div>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon"><Rocket size={24} /></div>
            <div>
              <h3 className="highlight-title">Outcomes Over Output</h3>
              <p className="highlight-text">I focus relentlessly on real results: improved accuracy, reduced effort, higher ROI. Shipping features is easy — shipping impact is the goal.</p>
            </div>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon"><Zap size={24} /></div>
            <div>
              <h3 className="highlight-title">Speed Without Sacrifice</h3>
              <p className="highlight-text">I move fast and iterate often, but never at the cost of quality. The best solutions are both elegant and efficient.</p>
            </div>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon"><Heart size={24} /></div>
            <div>
              <h3 className="highlight-title">Continuous Growth Mindset</h3>
              <p className="highlight-text">Every project, every mistake, every collaboration is a learning opportunity. I actively seek out challenges that push me beyond my current limits.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
