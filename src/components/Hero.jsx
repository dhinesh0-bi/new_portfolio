import { useState, useEffect, useRef } from 'react'

const roles = [
  'Full Stack Developer',
  'UI/UX Designer',
  'AI Solutions Builder',
  'CRM Specialist',
  'React Enthusiast',
]

const techOrbit = [
  { label: 'React', pos: { top: '0%', left: '50%' } },
  { label: 'Node', pos: { top: '25%', right: '0%' } },
  { label: 'AI/ML', pos: { bottom: '25%', right: '5%' } },
  { label: 'SQL', pos: { bottom: '0%', left: '45%' } },
  { label: 'CSS', pos: { bottom: '25%', left: '0%' } },
  { label: 'Git', pos: { top: '25%', left: '0%' } },
]

function TypedText({ roles }) {
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < currentRole.length) {
          setDisplayText(currentRole.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentRole.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setDeleting(false)
          setRoleIndex((roleIndex + 1) % roles.length)
        }
      }
    }, deleting ? 60 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex, roles])

  return (
    <div className="hero-typed">
      <span>✦</span>
      <span>{displayText}</span>
      <span className="typed-cursor"></span>
    </div>
  )
}

function FloatingCard({ className, icon, iconBg, title, subtitle, delay }) {
  return (
    <div className={`hero-floating-card ${className}`} style={{ animationDelay: `${delay}s` }}>
      <div className="floating-card-icon" style={{ background: iconBg }}>
        {icon}
      </div>
      <div className="floating-card-text">
        <span className="floating-card-title">{title}</span>
        <span className="floating-card-sub">{subtitle}</span>
      </div>
    </div>
  )
}

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.5
        this.speed = Math.random() * 0.4 + 0.1
        this.opacity = Math.random() * 0.5 + 0.1
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = -this.speed
        this.color = ['#A50034', '#005B96', '#F1C40F'][Math.floor(Math.random() * 3)]
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color + Math.floor(this.opacity * 255).toString(16).padStart(2, '0')
        ctx.fill()
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        this.opacity -= 0.002
        if (this.y < 0 || this.opacity <= 0) this.reset()
      }
    }

    for (let i = 0; i < 80; i++) {
      const p = new Particle()
      p.y = Math.random() * canvas.height
      particles.push(p)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const scrollToProjects = (e) => {
    e.preventDefault()
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <canvas ref={canvasRef} className="particles-canvas"></canvas>
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
      </div>

      <div className="hero-container">
        {/* Left: Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <div className="hero-badge-dot"></div>
            Available for Freelance & Full-time
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Dhinesh K</span>
            Building Digital Excellence
          </h1>

          <TypedText roles={roles} />

          <p className="hero-subtitle">
            Crafting scalable web apps, intelligent AI systems, and immersive digital experiences. 
            From pixel-perfect UIs to robust backends — I bring ideas to life.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary" id="hero-view-work-btn" onClick={scrollToProjects}>
              View My Work ✦
            </a>
            <a href="#contact" className="btn-secondary" id="hero-contact-btn" onClick={scrollToContact}>
              Let's Talk 💬
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">5<span>+</span></div>
              <div className="hero-stat-label">Projects</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">3<span>+</span></div>
              <div className="hero-stat-label">AI Systems</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">∞</div>
              <div className="hero-stat-label">Curiosity</div>
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="hero-visual">
          <div className="hero-avatar-wrapper">
            {/* Orbit Ring */}
            <div className="hero-avatar-ring"></div>

            {/* Center Avatar */}
            <div className="hero-avatar-inner">
              <div className="hero-avatar-letters">DK</div>
            </div>

            {/* Floating Cards */}
            <FloatingCard
              className="hero-floating-card-1"
              icon="🤖"
              iconBg="rgba(165, 0, 52, 0.2)"
              title="AI Developer"
              subtitle="ML & NLP Systems"
              delay={0}
            />
            <FloatingCard
              className="hero-floating-card-2"
              icon="⚡"
              iconBg="rgba(241, 196, 15, 0.2)"
              title="CRM Expert"
              subtitle="Shop Management"
              delay={1.5}
            />
            <FloatingCard
              className="hero-floating-card-3"
              icon="🎨"
              iconBg="rgba(0, 91, 150, 0.2)"
              title="UI/UX Design"
              subtitle="Premium Interfaces"
              delay={3}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll Down</span>
      </div>
    </section>
  )
}
