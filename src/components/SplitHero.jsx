import React, { useState } from 'react';
import robotImg from '../assets/robot.png';
import rehabImg from '../assets/rehab.png';

const SplitHero = () => {
  const [hoverState, setHoverState] = useState('none'); // 'none', 'left', 'right'

  return (
    <div 
      className={`split-hero-container ${
        hoverState === 'left' ? 'hover-left' : hoverState === 'right' ? 'hover-right' : ''
      }`}
    >
      {/* Left Panel: Humanoid Robotics */}
      <div 
        className="hero-panel left-robot"
        onMouseEnter={() => setHoverState('left')}
        onMouseLeave={() => setHoverState('none')}
      >
        <img 
          src={robotImg} 
          alt="Humanoid Robotics" 
          className="hero-bg-img" 
        />
        <div className="hero-content">
          <span className="hero-tagline">Project: Aegis Androids</span>
          <h1 className="hero-title">
            Humanoid <br />
            <span className="gradient-text">Robotics</span>
          </h1>
          <p className="hero-desc">
            Developing cognitive autonomous systems with biological agility, natural speech, and adaptive dexterity for complex human environments.
          </p>
          <a href="#robotics-section" className="btn btn-cyan">
            <span>Explore Humanoids</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Center Divider */}
      <div className="split-divider"></div>

      {/* Right Panel: Rehabilitation Devices */}
      <div 
        className="hero-panel right-rehab"
        onMouseEnter={() => setHoverState('right')}
        onMouseLeave={() => setHoverState('none')}
      >
        <img 
          src={rehabImg} 
          alt="Bionic Rehabilitation" 
          className="hero-bg-img" 
        />
        <div className="hero-content">
          <span className="hero-tagline">Project: NeuroPulse</span>
          <h1 className="hero-title">
            Rehabilitation <br />
            <span className="gradient-text-violet">Devices</span>
          </h1>
          <p className="hero-desc">
            Empowering human recovery through neural interfaces, myoelectric bionic orthotics, and lightweight wearable gait trainers.
          </p>
          <a href="#rehab-section" className="btn btn-violet">
            <span>Explore Rehabilitation</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll Down mouse animation indicator */}
      <div className="scroll-indicator">
        <span>Scroll to Explore</span>
        <div className="mouse"></div>
      </div>
    </div>
  );
};

export default SplitHero;
