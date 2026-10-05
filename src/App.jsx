import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import HomeProjects from './components/HomeProjects'
import ProjectsPage from './components/ProjectsPage'
import ExperiencePage from './components/ExperiencePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import ServicesPage from './components/ServicesPage'
import TechnologyCloud from './components/TechnologyCloud'
import './App.css'

/* ── Down-arrow SVG (no icon library) ─────────────── */
function Arrow({ open }) {
  return (
    <svg
      className={`nav-arrow${open ? ' nav-arrow-open' : ''}`}
      width="11" height="11"
      viewBox="0 0 11 11"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1.5 3.5L5.5 7.5L9.5 3.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Single reusable nav button ────────────────────── */
function NavItem({ label, to, id, active }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  return (
    <div className="nav-item-wrap" ref={ref}>
      <button
        id={id}
        className={`nav-btn${active ? ' active' : ''}`}
        onClick={() => navigate(to)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {label}
        <Arrow open={open} />
      </button>
    </div>
  );
}

/* ── Shared NavBar ─────────────────────────────────── */
function NavBar() {
  const location = useLocation();
  const p = location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);

  /* close drawer on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  /* lock body scroll while open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav className="minimal-nav">
      <Link to="/" className="logo">
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <div style={{
            width: '24px', height: '24px', 
            background: 'var(--accent-primary)', 
            transform: 'skewX(-15deg)', 
            borderRadius: '2px'
          }}></div>
          PORTFOLIO
        </div>
      </Link>

      {/* Hamburger toggle */}
      <button
        className={`hamburger ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
        id="hamburger-btn"
      >
        <span /><span /><span />
      </button>

      {/* Overlay */}
      {mobileOpen && <div className="nav-overlay" onClick={() => setMobileOpen(false)} />}

      <div className={`nav-links ${mobileOpen ? 'nav-links-open' : ''}`}>
        <NavItem label="Home"         to="/"           id="nav-home"       active={p === '/'} />
        <NavItem label="About"        to="/about"      id="nav-about"      active={p === '/about'} />
        <NavItem label="Services"     to="/services"   id="nav-services"   active={p === '/services'} />
        <NavItem label="Portfolio"    to="/projects"   id="nav-portfolio"  active={p === '/projects'} />
        <NavItem label="Page"         to="/page"       id="nav-page"       active={p === '/page'} />
        <NavItem label="Contact"      to="/contact"    id="nav-contact"    active={p === '/contact'} />
      </div>

      <div className="nav-cta">
        <button className="btn-primary" style={{borderRadius: '4px', textTransform: 'capitalize', padding: '0.6rem 1.25rem', fontSize: '0.85rem', fontWeight: 600, border: 'none'}} onClick={() => navigate('/contact')}>Get Free Consultant</button>
      </div>
    </nav>
  );
}

/* ── Home ─────────────────────────────────────────── */
function Home() {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollTop;
      const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(`${(total / max) * 100}%`);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="app">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: scrollProgress }} />
      </div>
      <NavBar />
      <main>
        <Hero />
        <Skills />
        <HomeProjects />
        <Experience />
        <About />
      </main>
      <Footer />
    </div>
  );
}

/* ── Page wrapper ─────────────────────────────────── */
function PageWrapper({ children }) {
  return (
    <div className="app">
      <NavBar />
      {children}
    </div>
  );
}

/* ── App ──────────────────────────────────────────── */
function App() {
  return (
    <BrowserRouter>
      <TechnologyCloud />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/projects"   element={<PageWrapper><ProjectsPage /></PageWrapper>} />
        <Route path="/experience" element={<PageWrapper><ExperiencePage /></PageWrapper>} />
        <Route path="/about"      element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/services"   element={<PageWrapper><ServicesPage /></PageWrapper>} />
        <Route path="/contact"    element={<PageWrapper><ContactPage /></PageWrapper>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
