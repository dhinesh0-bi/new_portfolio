const timeline = [
  {
    id: 1,
    date: '2026 – Present',
    title: 'Full Stack Developer',
    company: 'Independent & Freelance Projects',
    desc: 'Building advanced CRM systems, AI-powered applications, and custom web solutions for clients and open-source. Currently developing the CRM Shop Management System with real-time analytics and multi-user support.',
    dotColor: '#ffffff',
  },
  {
    id: 2,
    date: '2025',
    title: 'AI Solutions Developer',
    company: 'Academic & Research Projects',
    desc: 'Developed the AI Fake Review Detection System using TensorFlow and NLP. Created the AI Course Builder Platform with OpenAI integration. Explored machine learning in real-world e-commerce and education domains.',
    dotColor: '#d4d4d8',
  },
  {
    id: 3,
    date: '2025',
    title: 'Python Fullstack Intern',
    company: 'Femtosoft Technologies, Chennai',
    desc: 'Completed a one-month internship as a Python Fullstack Intern at Femtosoft Technologies, Chennai. Worked on building and maintaining web applications using Python and modern full-stack frameworks, gaining hands-on industry experience in real-world software development.',
    dotColor: '#a1a1aa',
  },
  {
    id: 4,
    date: '2022 – 2026',
    title: 'Computer Science Student',
    company: 'B.E. Computer Science',
    desc: 'Deepened expertise in data structures, algorithms, database management, and software engineering. Started self-learning React, Node.js, and Python, applying them in personal and academic projects.',
    dotColor: '#71717a',
  },
]

const techStack = [
  { label: 'JavaScript', icon: '⚡', color: '#ffffff' },
  { label: 'Python', icon: '🐍', color: '#e4e4e7' },
  { label: 'React', icon: '⚛️', color: '#d4d4d8' },
  { label: 'Node.js', icon: '🟢', color: '#a1a1aa' },
  { label: 'Django', icon: '🔮', color: '#ffffff' },
  { label: 'MongoDB', icon: '🍃', color: '#e4e4e7' },
  { label: 'PostgreSQL', icon: '🐘', color: '#d4d4d8' },
  { label: 'TensorFlow', icon: '🧠', color: '#a1a1aa' },
]

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-tag">My Journey</span>
          <h2 className="section-title">Experience & <span>Education</span></h2>
          <p className="section-desc">
            A timeline of growth, learning, and building impactful digital products.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Timeline */}
          <div className="timeline reveal">
            {timeline.map((item) => (
              <div className="timeline-item" key={item.id} id={`timeline-item-${item.id}`}>
                <div className="timeline-dot" style={{ background: item.dotColor, boxShadow: `0 0 0 3px ${item.dotColor}, 0 0 20px rgba(255,255,255,0.2)` }}></div>
                <div className="timeline-content">
                  <span className="timeline-date">{item.date}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-company">@ <span>{item.company}</span></p>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side: Stack & Stats */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Tech Arsenal */}
            <div style={{
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '24px',
              padding: '2rem',
              backdropFilter: 'blur(20px)',
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                ⚡ Tech Arsenal
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {techStack.map((tech) => (
                  <div
                    key={tech.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.6rem 0.75rem',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '10px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: tech.color,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '24px',
              padding: '2rem',
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                📊 At a Glance
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: 'Projects Completed', value: '5+', color: '#ffffff' },
                  { label: 'AI Systems Built', value: '3', color: '#e4e4e7' },
                  { label: 'Technologies Used', value: '15+', color: '#d4d4d8' },
                  { label: 'Internship', value: '1', color: '#a1a1aa' },
                ].map((stat) => (
                  <div key={stat.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0', borderBottom: '1px solid var(--border-subtle)' }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--silver)' }}>{stat.label}</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: 800, color: stat.color, fontFamily: 'var(--font-secondary)' }}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently Working On */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '20px',
              padding: '1.5rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffffff', boxShadow: '0 0 10px rgba(255,255,255,0.8)', animation: 'pulse-dot 2s ease infinite' }}></div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Currently Working On</span>
              </div>
              <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'white', marginBottom: '0.35rem' }}>CRM Shop Management System</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--silver)', lineHeight: 1.6 }}>
                Building a full-featured CRM with inventory management, customer analytics, and multi-user roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
