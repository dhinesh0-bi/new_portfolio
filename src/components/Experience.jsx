const timeline = [
  {
    id: 1,
    date: '2026 – Present',
    title: 'Full Stack Developer',
    company: 'Independent & Freelance Projects',
    desc: 'Building advanced CRM systems, AI-powered applications, and custom web solutions for clients and open-source. Currently developing the CRM Shop Management System with real-time analytics and multi-user support.',
    dotColor: '#A50034',
  },
  {
    id: 2,
    date: '2025',
    title: 'AI Solutions Developer',
    company: 'Academic & Research Projects',
    desc: 'Developed the AI Fake Review Detection System using TensorFlow and NLP. Created the AI Course Builder Platform with OpenAI integration. Explored machine learning in real-world e-commerce and education domains.',
    dotColor: '#005B96',
  },
  {
    id: 3,
    date: '2024',
    title: 'Frontend Developer',
    company: 'Personal Projects',
    desc: 'Built responsive, production-ready web apps including the Personal Bookshelf app (React + Open Library API) and the first-generation portfolio site deployed on Vercel. Focused heavily on UX and animation quality.',
    dotColor: '#F1C40F',
  },
  {
    id: 4,
    date: '2022 – 2024',
    title: 'Computer Science Student',
    company: 'B.Sc. Computer Science',
    desc: 'Deepened expertise in data structures, algorithms, database management, and software engineering. Started self-learning React, Node.js, and Python, applying them in personal and academic projects.',
    dotColor: '#F39C12',
  },
]

const techStack = [
  { label: 'JavaScript', icon: '⚡', color: '#F1C40F' },
  { label: 'Python', icon: '🐍', color: '#005B96' },
  { label: 'React', icon: '⚛️', color: '#4DB8FF' },
  { label: 'Node.js', icon: '🟢', color: '#10B981' },
  { label: 'Django', icon: '🔮', color: '#A50034' },
  { label: 'MongoDB', icon: '🍃', color: '#10B981' },
  { label: 'PostgreSQL', icon: '🐘', color: '#005B96' },
  { label: 'TensorFlow', icon: '🧠', color: '#F39C12' },
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
                <div className="timeline-dot" style={{ background: item.dotColor, boxShadow: `0 0 0 3px ${item.dotColor}, 0 0 20px ${item.dotColor}44` }}></div>
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
              background: 'linear-gradient(135deg, rgba(165, 0, 52, 0.1), rgba(0, 91, 150, 0.06))',
              border: '1px solid rgba(165, 0, 52, 0.2)',
              borderRadius: '24px',
              padding: '2rem',
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                📊 At a Glance
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: 'Projects Completed', value: '5+', color: '#A50034' },
                  { label: 'AI Systems Built', value: '3', color: '#005B96' },
                  { label: 'Technologies Used', value: '15+', color: '#F1C40F' },
                  { label: 'GitHub Repositories', value: '10+', color: '#F39C12' },
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
              background: 'rgba(241, 196, 15, 0.05)',
              border: '1px solid rgba(241, 196, 15, 0.2)',
              borderRadius: '20px',
              padding: '1.5rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F1C40F', animation: 'pulse-dot 2s ease infinite' }}></div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#F1C40F', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Currently Working On</span>
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
