import React, { useState } from 'react';

const SpecComparison = () => {
  const [activeTab, setActiveTab] = useState('architecture'); // 'architecture', 'sensors', 'safety'

  const specData = {
    architecture: [
      { param: 'Degrees of Freedom', robot: '44-DoF Actuated Joints', rehab: 'Up to 12-DoF Active Assist' },
      { param: 'Processing Unit', robot: 'Edge AI TPU + Dual-Board ARM', rehab: 'Wearable ARM Cortex Micro-Controller' },
      { param: 'Power Source', robot: 'Liquid-Cooled Li-Po (4 Hours)', rehab: 'Hot-Swappable Li-Ion (8 Hours)' },
      { param: 'Primary Actuation', robot: 'High-Torque Brushless Motors', rehab: 'Series Elastic Micro-Actuators' },
    ],
    sensors: [
      { param: 'Translation Latency', robot: '< 2.5ms (Real-Time Kinematics)', rehab: '< 1.2ms (Direct Myoelectric translation)' },
      { param: 'Tactile Sensor Density', robot: '250 Sensels/cm² (Silicon fingers)', rehab: '120 Sensels/cm² (Dynamic Haptics)' },
      { param: 'Spatial Mapping', robot: 'Dual-Stereo Depth + LiDAR (360°)', rehab: 'Distributed IMU + Foot Gait Trackers' },
      { param: 'Signal Damping', robot: 'Kalman Filter Sensor Fusion', rehab: 'Adaptive Wavelet EMG Noise Filters' },
    ],
    safety: [
      { param: 'Fail-Safe Behavior', robot: 'Controlled Soft-Drop Collapse', rehab: 'Instant Motor Decouple / Passive Assist' },
      { param: 'Motion Envelope Limits', robot: 'Force-Limited Co-bot Envelope', rehab: 'Biological Range-of-Motion Software Locks' },
      { param: 'Critical Braking', robot: 'Electromagnetic Joint Locks', rehab: 'Friction Breakway Slippage Joints' },
      { param: 'Human Interface', robot: 'FDA-Exempt (Industrial Grade)', rehab: 'FDA Class II Medical Compliance Standards' },
    ],
  };

  return (
    <section id="specs-section" style={{ background: 'var(--bg-darker)' }}>
      <div className="container">
        <h2 className="section-title scroll-anim">Technical Specifications Comparison</h2>
        <p className="section-subtitle scroll-anim">
          A side-by-side engineering breakdown illustrating bionic hardware parity across industrial robotics and healthcare devices.
        </p>

        {/* Tab Controls */}
        <div className="spec-tabs scroll-anim">
          <button 
            className={`spec-tab-btn ${activeTab === 'architecture' ? 'active cyan' : ''}`}
            onClick={() => setActiveTab('architecture')}
          >
            System Architecture
          </button>
          <button 
            className={`spec-tab-btn ${activeTab === 'sensors' ? 'active cyan' : ''}`}
            onClick={() => setActiveTab('sensors')}
          >
            Sensor Processing
          </button>
          <button 
            className={`spec-tab-btn ${activeTab === 'safety' ? 'active violet' : ''}`}
            onClick={() => setActiveTab('safety')}
          >
            Safety Protocols
          </button>
        </div>

        {/* Spec Table */}
        <div className="spec-table-container glass-panel scroll-anim">
          <table className="spec-table">
            <thead>
              <tr>
                <th>Technical Parameter</th>
                <th>Humanoid Robotics (Aegis Platform)</th>
                <th>Rehabilitation Devices (NeuroPulse)</th>
              </tr>
            </thead>
            <tbody>
              {specData[activeTab].map((item, index) => (
                <tr key={index}>
                  <td className="spec-param">{item.param}</td>
                  <td className="cyan-cell">{item.robot}</td>
                  <td className="violet-cell">{item.rehab}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SpecComparison;
