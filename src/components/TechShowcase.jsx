import React, { useEffect, useRef } from 'react';

const TechShowcase = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    const cards = cardsRef.current;
    cards.forEach(card => {
      if (!card) return;
      const listener = (e) => handleMouseMove(e, card);
      card.addEventListener('mousemove', listener);
      card._mouseMoveListener = listener;
    });

    return () => {
      cards.forEach(card => {
        if (!card || !card._mouseMoveListener) return;
        card.removeEventListener('mousemove', card._mouseMoveListener);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="showcase-section">
      <div className="container">
        <h2 className="section-title scroll-anim">Technological Domain Highlights</h2>
        <p className="section-subtitle scroll-anim">
          Pioneering the future of physical and cognitive assistance through unified biomechanical frameworks.
        </p>

        <div className="grid showcase-grid">
          {/* Left Column: Humanoid Robotics */}
          <div className="showcase-column robot-tech scroll-anim" id="robotics-section">
            <div className="showcase-header">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4M8 5h8M8 15h.01M16 15h.01" />
              </svg>
              <h2>Humanoid Robotics</h2>
            </div>

            <div ref={addToRefs} className="glass-panel feature-card">
              <div className="feature-card-content">
                <div className="feature-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <h3>Aegis Cognitive Core</h3>
                <p>
                  Integrated AI models processing real-time spatial mapping, natural language interaction, and dynamic path planning in unmapped environments.
                </p>
              </div>
            </div>

            <div ref={addToRefs} className="glass-panel feature-card">
              <div className="feature-card-content">
                <div className="feature-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 5V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1M3 8v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8H3zm3 4h12" />
                  </svg>
                </div>
                <h3>24-DoF Dexterous Hands</h3>
                <p>
                  High-resolution tactile feedback sensors on every fingertip coupled with custom micro-actuators enabling delicate material manipulation and heavy lifting.
                </p>
              </div>
            </div>

            <div ref={addToRefs} className="glass-panel feature-card">
              <div className="feature-card-content">
                <div className="feature-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                </div>
                <h3>Dynamic All-Terrain Locomotion</h3>
                <p>
                  High-bandwidth torque control at bionic joints coupled with predictive modeling for stable balance on shifting surfaces, slopes, and stairs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Rehabilitation Devices */}
          <div className="showcase-column rehab-tech scroll-anim" id="rehab-section">
            <div className="showcase-header">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <h2>Rehabilitation Devices</h2>
            </div>

            <div ref={addToRefs} className="glass-panel feature-card">
              <div className="feature-card-content">
                <div className="feature-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>NeuroPulse Control Sleeve</h3>
                <p>
                  Ultra-low-latency surface EMG sensor bands tracking and filtering neuro-electrical motor intent to drive prosthetics and orthotics seamlessly.
                </p>
              </div>
            </div>

            <div ref={addToRefs} className="glass-panel feature-card">
              <div className="feature-card-content">
                <div className="feature-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m10 15 5-3-5-3v6z" />
                  </svg>
                </div>
                <h3>Active-Assist Bio-Orthoses</h3>
                <p>
                  Wearable exoskeletons for upper and lower extremities providing precision motorized assistance to re-train neural pathways and restore limb movement.
                </p>
              </div>
            </div>

            <div ref={addToRefs} className="glass-panel feature-card">
              <div className="feature-card-content">
                <div className="feature-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5" />
                    <path d="M12 2a5 5 0 0 0-5 5v3a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z" />
                  </svg>
                </div>
                <h3>Intelligent Tactile Biofeedback</h3>
                <p>
                  Localized haptic feedback actuators stimulating skin surfaces, giving patients artificial physical sensation to rebuild spatial and limb awareness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
