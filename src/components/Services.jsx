const services = [
  {
    id: 'web-design',
    icon: '🎨',
    title: 'Web Design',
    desc: 'Stunning, pixel-perfect web designs that captivate and convert. I create visually compelling interfaces that blend aesthetics with usability.',
    iconBg: 'linear-gradient(135deg, rgba(165, 0, 52, 0.2), rgba(165, 0, 52, 0.05))',
    iconBorder: 'rgba(165, 0, 52, 0.2)',
    features: [
      'Responsive & Mobile-first Design',
      'Brand Identity & Style Systems',
      'Landing Page Design',
      'Prototype & Wireframing',
      'Design System Creation',
    ],
  },
  {
    id: 'ui-ux',
    icon: '✏️',
    title: 'UI/UX Design',
    desc: 'User-centric design experiences that delight and retain. From research to high-fidelity prototypes, I craft journeys users love.',
    iconBg: 'linear-gradient(135deg, rgba(0, 91, 150, 0.2), rgba(0, 91, 150, 0.05))',
    iconBorder: 'rgba(0, 91, 150, 0.2)',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Interaction Design',
      'Usability Testing',
      'Figma / Adobe XD Designs',
    ],
  },
  {
    id: 'backend',
    icon: '⚙️',
    title: 'Backend Development',
    desc: 'Scalable, secure, and high-performance server-side solutions. RESTful APIs, databases, and cloud deployments that power your applications.',
    iconBg: 'linear-gradient(135deg, rgba(241, 196, 15, 0.2), rgba(241, 196, 15, 0.05))',
    iconBorder: 'rgba(241, 196, 15, 0.2)',
    features: [
      'Node.js & Python APIs',
      'Database Architecture (SQL/NoSQL)',
      'Authentication & Security',
      'Cloud Deployment (AWS/GCP)',
      'API Integration & Documentation',
    ],
  },
  {
    id: 'crm',
    icon: '🏪',
    title: 'CRM Development',
    desc: 'Custom CRM solutions tailored to your business workflows. Automate customer management, track leads, and boost sales productivity.',
    iconBg: 'linear-gradient(135deg, rgba(243, 156, 18, 0.2), rgba(243, 156, 18, 0.05))',
    iconBorder: 'rgba(243, 156, 18, 0.2)',
    features: [
      'Customer Management Dashboards',
      'Sales Pipeline Automation',
      'Inventory & Order Tracking',
      'Analytics & Reporting',
      'WhatsApp / Email Integration',
    ],
  },
  {
    id: 'ai',
    icon: '🤖',
    title: 'AI Integration',
    desc: 'Harness the power of artificial intelligence in your products. From NLP chatbots to ML prediction systems, I bring intelligence to your apps.',
    iconBg: 'linear-gradient(135deg, rgba(165, 0, 52, 0.2), rgba(0, 91, 150, 0.1))',
    iconBorder: 'rgba(165, 0, 52, 0.15)',
    features: [
      'Machine Learning Models',
      'NLP & Text Analysis',
      'AI Chatbot Development',
      'Data Science & Analytics',
      'OpenAI / LLM Integration',
    ],
  },
  {
    id: 'mobile',
    icon: '📱',
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile applications that deliver native-like performance on both iOS and Android. Fast, responsive, and beautifully crafted.',
    iconBg: 'linear-gradient(135deg, rgba(0, 91, 150, 0.2), rgba(241, 196, 15, 0.1))',
    iconBorder: 'rgba(0, 91, 150, 0.15)',
    features: [
      'React Native Apps',
      'Cross-platform Development',
      'Push Notifications',
      'Offline-first Architecture',
      'App Store Deployment',
    ],
  },
]

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-tag">What I Offer</span>
          <h2 className="section-title">My <span>Services</span></h2>
          <p className="section-desc">
            End-to-end digital solutions — from concept to deployment. I deliver premium quality at every step.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div
              className="service-card reveal"
              key={service.id}
              id={`service-card-${service.id}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div
                className="service-icon-wrapper"
                style={{
                  background: service.iconBg,
                  border: `1px solid ${service.iconBorder}`,
                }}
              >
                <span>{service.icon}</span>
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
              <ul className="service-features">
                {service.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="reveal"
          style={{
            marginTop: '4rem',
            background: 'linear-gradient(135deg, rgba(165, 0, 52, 0.12), rgba(0, 91, 150, 0.08))',
            border: '1px solid rgba(165, 0, 52, 0.2)',
            borderRadius: '24px',
            padding: '3rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 50% 0%, rgba(165, 0, 52, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}></div>
          <h3 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
            position: 'relative',
          }}>
            Ready to Build Something <span style={{ background: 'linear-gradient(135deg, #A50034, #F1C40F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Extraordinary?</span>
          </h3>
          <p style={{ color: 'var(--silver)', fontSize: '1.05rem', marginBottom: '2rem', position: 'relative' }}>
            Let's collaborate and bring your vision to life with cutting-edge technology.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
            <a
              href="#contact"
              className="btn-primary"
              id="services-cta-contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Start a Project 🚀
            </a>
            <a href="mailto:kdhinesh2005@gmail.com" className="btn-secondary" id="services-cta-email">
              Email Me Directly ✉️
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
