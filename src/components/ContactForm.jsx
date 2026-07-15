import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    domain: 'robotics', // 'robotics', 'rehab'
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName.trim()) tempErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) tempErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) tempErrors.message = 'Inquiry message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API submit delay
      setTimeout(() => {
        setIsSubmitted(true);
      }, 400);
    }
  };

  return (
    <section id="contact-section">
      <div className="container">
        <h2 className="section-title scroll-anim">Request Systems Access</h2>
        <p className="section-subtitle scroll-anim">
          Consult with our biomechanical and bionic engineers to integrate autonomous solutions or clinical bionic therapies.
        </p>

        <div className="grid contact-grid glass-panel scroll-anim">
          {/* Left Panel: Contact info */}
          <div className="contact-info">
            <div>
              <h3>Nexus Hub</h3>
              <p>Aether Bionics International Headquarters</p>
              <ul className="contact-info-list">
                <li className="contact-info-item">
                  <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div>
                    <h4>Silicon Valley Campus</h4>
                    <p>800 Bionic Parkway, Suite 100<br />Palo Alto, CA 94304</p>
                  </div>
                </li>
                <li className="contact-info-item violet">
                  <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/>
                  </svg>
                  <div>
                    <h4>Direct Communications</h4>
                    <p>inquiries@aetherbionics.tech<br />+1 (650) 555-0199</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="contact-socials">
              <a href="#" className="contact-social-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" className="contact-social-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="#" className="contact-social-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2H2v10h10V2zM22 12h-10v10h10V12zM12 12H2v10h10V12zM22 2h-10v10h10V2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Panel: The form */}
          <div className="contact-form-panel" style={{ borderLeft: '1px solid var(--border-color)' }}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <div className="domain-selection">
                  <label className="domain-radio-label">
                    <input 
                      type="radio" 
                      name="domain" 
                      value="robotics"
                      checked={formData.domain === 'robotics'}
                      onChange={handleChange}
                      className="domain-radio-input"
                    />
                    <span className="domain-radio-custom"></span>
                    <span>Humanoid Robotics</span>
                  </label>
                  <label className="domain-radio-label">
                    <input 
                      type="radio" 
                      name="domain" 
                      value="rehab"
                      checked={formData.domain === 'rehab'}
                      onChange={handleChange}
                      className="domain-radio-input"
                    />
                    <span className="domain-radio-custom"></span>
                    <span>Rehabilitation</span>
                  </label>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="firstName">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="e.g. Elena"
                      style={errors.firstName ? { borderColor: 'rgba(239, 68, 68, 0.5)' } : {}}
                    />
                    {errors.firstName && <span style={{ color: '#f87171', fontSize: '0.75rem', position: 'absolute', bottom: '-1.25rem', left: 0 }}>{errors.firstName}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="lastName">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="e.g. Vance"
                      style={errors.lastName ? { borderColor: 'rgba(239, 68, 68, 0.5)' } : {}}
                    />
                    {errors.lastName && <span style={{ color: '#f87171', fontSize: '0.75rem', position: 'absolute', bottom: '-1.25rem', left: 0 }}>{errors.lastName}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Security Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. elena@blackmesa.org"
                    style={errors.email ? { borderColor: 'rgba(239, 68, 68, 0.5)' } : {}}
                  />
                  {errors.email && <span style={{ color: '#f87171', fontSize: '0.75rem', position: 'absolute', bottom: '-1.25rem', left: 0 }}>{errors.email}</span>}
                </div>

                <div className="form-group" style={{ marginBottom: '2.5rem' }}>
                  <label className="form-label" htmlFor="message">Inquiry Specifications</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Describe your research, integration, or patient requirements..."
                    style={{ resize: 'none', ...(errors.message ? { borderColor: 'rgba(239, 68, 68, 0.5)' } : {}) }}
                  />
                  {errors.message && <span style={{ color: '#f87171', fontSize: '0.75rem', position: 'absolute', bottom: '-1.25rem', left: 0 }}>{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className={`btn ${formData.domain === 'robotics' ? 'btn-cyan' : 'btn-violet'}`}
                  style={{ width: '100%' }}
                >
                  <span>Transmit Request</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </form>
            ) : (
              <div className={`success-overlay ${formData.domain === 'rehab' ? 'rehab-success' : ''}`}>
                <div className="success-icon-wrapper">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3>Transmission Success</h3>
                <p style={{ maxWidth: '360px', margin: '0 auto', fontSize: '0.95rem' }}>
                  Your secure inquiry regarding <strong>{formData.domain === 'robotics' ? 'Humanoid Robotics' : 'Rehabilitation Devices'}</strong> has been encrypted and routed. A bionics specialist will contact you within 24 hours.
                </p>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ firstName: '', lastName: '', email: '', domain: formData.domain, message: '' });
                  }} 
                  className="btn btn-cyan"
                  style={{ marginTop: '2rem', padding: '0.6rem 1.5rem', fontSize: '0.8rem' }}
                >
                  Send another request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
