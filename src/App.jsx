import React, { useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import SplitHero from './components/SplitHero';
import TechShowcase from './components/TechShowcase';
import SpecComparison from './components/SpecComparison';
import SynergySection from './components/SynergySection';
import ContactForm from './components/ContactForm';

function App() {
  useEffect(() => {
    // Scroll animation trigger using IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);

    const animElements = document.querySelectorAll('.scroll-anim');
    animElements.forEach((el) => observer.observe(el));

    return () => {
      animElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Background Interactive Neural Net */}
      <ParticleBackground />

      {/* Header / Navigation bar */}
      <header className="header">
        <div className="container nav-container">
          <a href="#" className="logo">
            <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span>AETHER BIONICS</span>
          </a>

          <nav>
            <ul className="nav-links">
              <li>
                <a href="#robotics-section" className="nav-link nav-link-robot">Humanoids</a>
              </li>
              <li>
                <a href="#rehab-section" className="nav-link nav-link-rehab">Rehabilitation</a>
              </li>
              <li>
                <a href="#synergy-section" className="nav-link">Synergy</a>
              </li>
              <li>
                <a href="#specs-section" className="nav-link">Specs</a>
              </li>
              <li>
                <a href="#contact-section" className="nav-link">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Sections */}
      <main>
        {/* Split Screen Hero Section */}
        <SplitHero />

        {/* Feature Grid Section */}
        <TechShowcase />

        {/* Shared Synergy Section */}
        <SynergySection />

        {/* Comparative Spec Section */}
        <SpecComparison />

        {/* Dynamic Inquiry Form Section */}
        <ContactForm />
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="grid footer-grid">
            <div>
              <a href="#" className="logo">
                <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span>AETHER BIONICS</span>
              </a>
              <p className="footer-desc">
                Merging robotic autonomy with biological systems to restore physical capability and expand human potential.
              </p>
            </div>

            <div>
              <h3 className="footer-title">Humanoid Robotics</h3>
              <ul className="footer-links">
                <li><a href="#robotics-section" className="footer-link">Aegis Androids</a></li>
                <li><a href="#robotics-section" className="footer-link">Cognitive AI Core</a></li>
                <li><a href="#robotics-section" className="footer-link">Dexterous Manipulators</a></li>
                <li><a href="#robotics-section" className="footer-link">Gait Locomotion</a></li>
              </ul>
            </div>

            <div>
              <h3 className="footer-title">Rehabilitation</h3>
              <ul className="footer-links">
                <li><a href="#rehab-section" className="footer-link footer-link-rehab">NeuroPulse Sleeves</a></li>
                <li><a href="#rehab-section" className="footer-link footer-link-rehab">Active Knee-Ortho</a></li>
                <li><a href="#rehab-section" className="footer-link footer-link-rehab">Sensory Gloves</a></li>
                <li><a href="#rehab-section" className="footer-link footer-link-rehab">EMG Translation Bus</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Aether Bionics Inc. All rights reserved.</p>
            <p>Designed with Advanced Bionics Systems &amp; Antigravity AI.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
