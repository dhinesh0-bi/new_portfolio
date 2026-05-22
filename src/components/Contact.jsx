import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

// ─── EmailJS Configuration ────────────────────────────────────────────────────
// To make the form send real emails:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an Email Service (Gmail) → copy the Service ID
// 3. Create an Email Template using the variables below → copy the Template ID
// 4. Go to Account → API Keys → copy the Public Key
// 5. Replace the placeholder values below with your real IDs
//
// Template variables used: {{from_name}}, {{from_email}}, {{subject}}, {{message}}, {{to_email}}
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_f4hneca'   // ← replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'template_ulyx2zt'    // ← replace with your Template ID
const EMAILJS_PUBLIC_KEY  = 'YuDjyEKyTJjdoNP8e'     // ← replace with your Public Key
const MY_EMAIL = 'kdhinesh2005@gmail.com'

const contactCards = [
  {
    id: 'email',
    icon: '✉️',
    iconBg: 'linear-gradient(135deg, rgba(165, 0, 52, 0.25), rgba(165, 0, 52, 0.05))',
    label: 'Email',
    value: MY_EMAIL,
    href: '#contact',
  },
  {
    id: 'location',
    icon: '📍',
    iconBg: 'linear-gradient(135deg, rgba(0, 91, 150, 0.25), rgba(0, 91, 150, 0.05))',
    label: 'Location',
    value: 'Vellore,Tamil Nadu, India',
    href: null,
  },
  {
    id: 'linkedin',
    icon: '💼',
    iconBg: 'linear-gradient(135deg, rgba(0, 91, 150, 0.25), rgba(0, 91, 150, 0.05))',
    label: 'LinkedIn',
    value: 'linkedin.com/in/dhinesh-k',
    href: 'https://www.linkedin.com/in/1-dhinesh-k/',
  },
  {
    id: 'github',
    icon: '💻',
    iconBg: 'linear-gradient(135deg, rgba(241, 196, 15, 0.2), rgba(241, 196, 15, 0.04))',
    label: 'GitHub',
    value: 'github.com/dhinesh0-bi',
    href: 'https://github.com/dhinesh0-bi',
  },
]

const socialLinks = [
  {
    id: 'github-social',
    label: 'GitHub',
    href: 'https://github.com/dhinesh0-bi',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943"/>
      </svg>
    ),
  },
  {
    id: 'linkedin-social',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/1-dhinesh-k/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    id: 'email-social',
    label: 'Email',
    href: '#contact',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
]

// Status states: idle | sending | success | error
function SubmitStatus({ status }) {
  if (status === 'success') {
    return (
      <div className="form-status form-status-success">
        <span className="form-status-icon">🎉</span>
        <div>
          <strong>Message Sent Successfully!</strong>
          <p>Thanks for reaching out! I'll get back to you within 24 hours.</p>
        </div>
      </div>
    )
  }
  if (status === 'error') {
    return (
      <div className="form-status form-status-error">
        <span className="form-status-icon">⚠️</span>
        <div>
          <strong>Oops! Something went wrong.</strong>
          <p>
            Please try emailing me directly at{' '}
            <a href={`mailto:${MY_EMAIL}`} style={{ color: '#FF4D6D' }}>{MY_EMAIL}</a>
          </p>
        </div>
      </div>
    )
  }
  return null
}

export default function Contact() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      setFormData({ from_name: '', from_email: '', subject: '', message: '' })
      // Reset back to idle after 6 seconds
      setTimeout(() => setStatus('idle'), 6000)
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  const isSending = status === 'sending'

  return (
    <section className="section contact" id="contact">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <p className="section-desc">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          {/* ── Left: Info ── */}
          <div className="contact-info reveal">
            <h2>
              Let's Build Something <span>Amazing</span> Together
            </h2>
            <p>
              Whether you need a stunning website, a powerful CRM, an AI-powered application,
              or a mobile app — I'm here to help turn your vision into reality. Let's talk!
            </p>

            <div className="contact-cards">
              {contactCards.map((card) => {
                const content = (
                  <>
                    <div className="contact-card-icon" style={{ background: card.iconBg }}>
                      {card.icon}
                    </div>
                    <div className="contact-card-text">
                      <span className="contact-card-label">{card.label}</span>
                      <span className="contact-card-value">{card.value}</span>
                    </div>
                  </>
                )

                return card.href ? (
                  <a
                    key={card.id}
                    href={card.href}
                    className="contact-card"
                    id={`contact-card-${card.id}`}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={card.id}
                    className="contact-card"
                    id={`contact-card-${card.id}`}
                    style={{ cursor: 'default' }}
                  >
                    {content}
                  </div>
                )
              })}
            </div>

            <div>
              <p style={{
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: 600,
              }}>
                Follow Me
              </p>
              <div className="contact-social">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className="social-link"
                    id={link.id}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="contact-form-wrapper reveal">
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 800,
              color: 'white',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}>
              Send Me a Message 💬
            </h3>

            {/* Status messages */}
            <SubmitStatus status={status} />

            <form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
              id="contact-form"
            >
              {/* Hidden field so EmailJS knows the destination */}
              <input type="hidden" name="to_email" value={MY_EMAIL} />

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    className="form-input"
                    type="text"
                    name="from_name"
                    placeholder="Dhinesh K"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    disabled={isSending}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Your Email</label>
                  <input
                    id="contact-email"
                    className="form-input"
                    type="email"
                    name="from_email"
                    placeholder="you@email.com"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    disabled={isSending}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  className="form-input"
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry / Collaboration / Hello!"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSending}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  name="message"
                  placeholder="Tell me about your project, idea, or just say hello..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSending}
                />
              </div>

              <button
                type="submit"
                className={`btn-submit ${isSending ? 'btn-submit-loading' : ''}`}
                id="contact-submit-btn"
                disabled={isSending}
              >
                {isSending ? (
                  <span className="btn-loading-content">
                    <span className="spinner"></span>
                    Sending…
                  </span>
                ) : (
                  'Send Message →'
                )}
              </button>
            </form>

            {/* Setup note — only visible in dev / if public key not set */}
            {EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY' && (
              <div style={{
                marginTop: '1rem',
                padding: '0.75rem 1rem',
                background: 'rgba(241, 196, 15, 0.08)',
                border: '1px solid rgba(241, 196, 15, 0.2)',
                borderRadius: '10px',
                fontSize: '0.78rem',
                color: 'var(--gold)',
                lineHeight: 1.6,
              }}>
                ⚙️ <strong>Setup required:</strong> Add your EmailJS credentials in{' '}
                <code style={{ background: 'rgba(0,0,0,0.3)', padding: '0 4px', borderRadius: 4 }}>
                  src/components/Contact.jsx
                </code>{' '}
                — see the comment block at the top of the file.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
