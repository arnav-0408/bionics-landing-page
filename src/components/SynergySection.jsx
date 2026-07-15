import React from 'react';

const SynergySection = () => {
  return (
    <section id="synergy-section">
      <div className="container">
        <div className="glass-panel synergy-box scroll-anim">
          <div className="synergy-header">
            <h2>Unified Bionics Platform</h2>
            <p>
              By utilizing a shared engineering core, breakthroughs in humanoid locomotion directly accelerate recovery timelines in healthcare, while biological data from patient therapy refines autonomous robot dexterity.
            </p>
          </div>

          <div className="grid synergy-grid">
            <div className="synergy-card">
              <h3 style={{ borderBottom: '2px solid var(--cyan)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                Actuation Synthesis
              </h3>
              <p>
                Highly efficient harmonic motor gearboxes designed for industrial humanoid legs are scaled down into ultra-lightweight wearable knee and hip exoskeletons, reducing muscle fatigue in rehabilitation patients.
              </p>
            </div>

            <div className="synergy-card">
              <h3 style={{ borderBottom: '2px solid #a855f7', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                Spatial Navigation
              </h3>
              <p>
                LiDAR mapping models and obstacle avoidance algorithms created for autonomous android route navigation are utilized in assistive walking aids, warning visually impaired users of physical hazards.
              </p>
            </div>

            <div className="synergy-card">
              <h3 style={{ borderBottom: '2px solid var(--violet)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                Sensory Convergence
              </h3>
              <p>
                Carbon-fiber tactile arrays originally engineered to give android hands delicate grip control are integrated into bionic rehabilitation gloves, providing electrical skin pulses that recreate physical touch sensations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SynergySection;
