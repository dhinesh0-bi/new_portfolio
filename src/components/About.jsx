import { useEffect, useRef, useState } from 'react'

const skills = [
  { name: 'React / Next.js', pct: 90, gradient: 'linear-gradient(90deg, #A50034, #CC0044)' },
  { name: 'Node.js / Express', pct: 82, gradient: 'linear-gradient(90deg, #005B96, #0077C2)' },
  { name: 'Python / AI/ML', pct: 78, gradient: 'linear-gradient(90deg, #F1C40F, #F39C12)' },
  { name: 'Database (SQL/NoSQL)', pct: 80, gradient: 'linear-gradient(90deg, #A50034, #005B96)' },
  { name: 'UI/UX Design', pct: 85, gradient: 'linear-gradient(90deg, #F39C12, #F1C40F)' },
]

const techTags = [
  { label: 'React', type: 'crimson' },
  { label: 'Node.js', type: 'ocean' },
  { label: 'Python', type: 'gold' },
  { label: 'Django', type: 'ocean' },
  { label: 'TensorFlow', type: 'amber' },
  { label: 'MongoDB', type: 'ocean' },
  { label: 'PostgreSQL', type: 'crimson' },
  { label: 'Docker', type: 'ocean' },
  { label: 'Git', type: 'amber' },
  { label: 'REST API', type: 'gold' },
  { label: 'Figma', type: 'crimson' },
  { label: 'Tailwind', type: 'ocean' },
]

function AnimatedSkill({ skill, inView }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(skill.pct), 200)
      return () => clearTimeout(timer)
    }
  }, [inView, skill.pct])

  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-pct">{width ? `${skill.pct}%` : '0%'}</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{
            width: `${width}%`,
            background: skill.gradient,
          }}
        ></div>
      </div>
    </div>
  )
}

export default function About() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section about" id="about" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-tag">Who I Am</span>
          <h2 className="section-title">About <span>Me</span></h2>
          <p className="section-desc">
            A passionate developer who turns complex ideas into elegant, high-performance digital products.
          </p>
        </div>

        <div className="about-grid">
          {/* Left: Profile Card */}
          <div className="about-image-wrapper reveal">
            <div className="about-image-card">
              <div className="about-avatar-large">DK</div>
              <div className="about-name-tag">
                <h3>Dhinesh K</h3>
                <p>Full Stack Developer & AI Engineer</p>
              </div>
              <ul className="about-contact-list">
                <li>
                  <span>📍</span>
                  <span>Tamil Nadu, India</span>
                </li>
                <li>
                  <span>✉️</span>
                  <a href="mailto:kdhinesh2005@gmail.com">kdhinesh2005@gmail.com</a>
                </li>
                <li>
                  <span>💼</span>
                  <a href="https://github.com/dhinesh0-bi" target="_blank" rel="noopener noreferrer">
                    github.com/dhinesh0-bi
                  </a>
                </li>
                <li>
                  <span>🔗</span>
                  <a href="https://linkedin.com/in/dhinesh-k" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/dhinesh-k
                  </a>
                </li>
              </ul>

              <a
                href="/Dhinesh.pdf"
                download="Dhinesh_K_Resume.pdf"
                className="btn-primary"
                id="download-resume-btn"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}
              >
                ⬇ Download Resume
              </a>
            </div>
          </div>

          {/* Right: Content */}
          <div className="about-content reveal">
            <h2>
              Crafting Digital <span>Experiences</span> with Code & Creativity
            </h2>

            <p>
              I'm <strong>Dhinesh K</strong>, a results-driven Full Stack Developer and AI Engineer based in Tamil Nadu, India. 
              My passion lies in building intelligent, scalable applications that solve real-world problems with elegant solutions.
            </p>

            <p>
              From architecting robust CRM systems to building AI-powered applications, I bring a holistic approach 
              to software development — combining technical excellence with a sharp eye for design. Currently working 
              on a cutting-edge <strong style={{color: 'var(--gold)'}}>CRM Shop Management System</strong> and exploring 
              the frontiers of AI integration.
            </p>

            <div className="about-skills">
              {skills.map((skill) => (
                <AnimatedSkill key={skill.name} skill={skill} inView={inView} />
              ))}
            </div>

            <div className="about-tags">
              {techTags.map((tag) => (
                <span key={tag.label} className={`tag tag-${tag.type}`}>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
