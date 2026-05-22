import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'CRM Shop Management System',
    desc: 'A comprehensive Customer Relationship Management system tailored for retail shops. Features inventory tracking, customer analytics, sales pipeline, and automated reporting — currently under active development.',
    category: 'fullstack',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    icon: '🏪',
    iconBg: 'rgba(165, 0, 52, 0.15)',
    cardBg: 'linear-gradient(135deg, rgba(165, 0, 52, 0.1), rgba(165, 0, 52, 0.02))',
    badge: 'wip',
    github: 'https://github.com/dhinesh0-bi/CRM_shop',
    demo: null,
    featured: true,
  },
  {
    id: 2,
    title: 'AI Fake Review Detection',
    desc: 'An intelligent ML-powered system that detects fake and manipulated product reviews using NLP techniques. Achieves high accuracy in identifying suspicious review patterns across e-commerce platforms.',
    category: 'ai',
    tech: ['Python', 'TensorFlow', 'NLP', 'Flask', 'scikit-learn'],
    icon: '🤖',
    iconBg: 'rgba(0, 91, 150, 0.15)',
    cardBg: 'linear-gradient(135deg, rgba(0, 91, 150, 0.1), rgba(0, 91, 150, 0.02))',
    badge: 'live',
    github: 'https://github.com/dhinesh0-bi/Ai-Fake-review-detection-system',
    demo: null,
  },
  {
    id: 3,
    title: 'AI Course Builder Platform',
    desc: 'A smart e-learning platform that leverages AI to automatically generate structured course content, quizzes, and learning paths. Empowers educators to create high-quality curricula in minutes.',
    category: 'ai',
    tech: ['React', 'Python', 'OpenAI API', 'Django', 'PostgreSQL'],
    icon: '🎓',
    iconBg: 'rgba(241, 196, 15, 0.15)',
    cardBg: 'linear-gradient(135deg, rgba(241, 196, 15, 0.08), rgba(241, 196, 15, 0.01))',
    badge: 'live',
    github: 'https://github.com/dhinesh0-bi/ai-course-builder',
    demo: null,
  },
  {
    id: 4,
    title: 'Personal Bookshelf App',
    desc: 'A beautiful digital bookshelf application that lets users discover, organize, and track their reading lists. Features a clean interface, book search via Open Library API, and personalized collections.',
    category: 'frontend',
    tech: ['React', 'Open Library API', 'LocalStorage', 'CSS3'],
    icon: '📚',
    iconBg: 'rgba(243, 156, 18, 0.15)',
    cardBg: 'linear-gradient(135deg, rgba(243, 156, 18, 0.08), rgba(243, 156, 18, 0.01))',
    badge: 'live',
    github: 'https://github.com/dhinesh0-bi/Personal-Bookshelf',
    demo: null,
  },
  {
    id: 5,
    title: 'Portfolio v1',
    desc: 'My previous portfolio website showcasing projects, skills and contact info. Built with React, featuring smooth animations and a responsive design. This version has been upgraded to what you see now!',
    category: 'frontend',
    tech: ['React', 'CSS3', 'Framer Motion', 'Vercel'],
    icon: '🌟',
    iconBg: 'rgba(165, 0, 52, 0.15)',
    cardBg: 'linear-gradient(135deg, rgba(165, 0, 52, 0.08), rgba(0, 91, 150, 0.04))',
    badge: 'live',
    github: 'https://github.com/dhinesh0-bi',
    demo: null
  },
]

const filters = [
  { label: 'All Projects', value: 'all' },
  { label: 'AI / ML', value: 'ai' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Frontend', value: 'frontend' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section className="section projects" id="projects">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-tag">What I've Built</span>
          <h2 className="section-title">My <span>Projects</span></h2>
          <p className="section-desc">
            A showcase of projects spanning AI, full-stack web development, and intuitive UI design.
          </p>
        </div>

        <div className="projects-filter reveal">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`filter-btn ${activeFilter === f.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
              id={`filter-btn-${f.value}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <div
              className="project-card reveal"
              key={project.id}
              style={{ animationDelay: `${i * 0.1}s`, transitionDelay: `${i * 0.05}s` }}
              id={`project-card-${project.id}`}
            >
              <div className="project-card-header">
                <div className="project-card-bg" style={{ background: project.cardBg }}></div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                  <div
                    className="project-badge"
                    style={{}}
                  >
                    {project.badge === 'wip' ? (
                      <span className="project-badge project-badge-wip">🚧 In Progress</span>
                    ) : (
                      <span className="project-badge project-badge-live">✅ Completed</span>
                    )}
                  </div>
                  {project.featured && (
                    <span style={{
                      fontSize: '0.7rem',
                      padding: '0.2rem 0.6rem',
                      background: 'rgba(241, 196, 15, 0.15)',
                      border: '1px solid rgba(241, 196, 15, 0.3)',
                      borderRadius: '9999px',
                      color: '#F1C40F',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      position: 'relative',
                      zIndex: 1,
                    }}>⭐ Featured</span>
                  )}
                </div>

                <div className="project-icon-wrapper" style={{ background: project.iconBg }}>
                  <span style={{ fontSize: '2rem' }}>{project.icon}</span>
                </div>
              </div>

              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech-stack">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>

              <div className="project-card-footer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-link-github"
                  id={`project-github-${project.id}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943"/>
                  </svg>
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-demo"
                    id={`project-demo-${project.id}`}
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="https://github.com/dhinesh0-bi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            id="view-all-github-btn"
          >
            View All on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
