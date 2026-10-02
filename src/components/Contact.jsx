import { useState, useEffect } from 'react'
import { Mail, Linkedin, Github, ArrowRight, MessageSquare } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rafliauliya1@gmail.com',
    href: 'mailto:rafliauliya1@gmail.com',
    color: '#10b981',
    desc: 'Best for detailed inquiries',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/muhamad-rafli-auliya',
    href: 'https://www.linkedin.com/in/muhamad-rafli-auliya-816112237/',
    color: '#06b6d4',
    desc: 'Professional profile & network',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/rafliauliy',
    href: 'https://github.com/rafliauliy',
    color: '#10b981',
    desc: 'Code repositories & projects',
  },
]

const topics = [
  'Software Engineering',
  'Industrial Technology',
  'Automation Systems',
  'Digital Transformation',
  'IT/OT Integration',
  'Industrial Data Science',
]

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 640)
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const isSmall     = isMobile || isTablet
  const sectionPad  = isMobile ? '64px 0'  : '96px 0'
  const innerPad    = isMobile ? '0 20px'  : isTablet ? '0 28px' : '0 32px'
  const headingSize = isMobile ? '32px'    : isTablet ? '42px'   : '52px'
  const ctaPad      = isMobile ? '36px 24px' : isTablet ? '56px 40px' : '80px 64px'
  const gridCols    = isSmall  ? '1fr'     : 'repeat(3, 1fr)'

  return (
    <section id="contact" style={{ padding: sectionPad }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: innerPad }}>

        {/* ── CTA Block ── */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '24px',
          backgroundColor: 'rgba(15,23,42,0.8)',
          border: '1px solid #1e293b',
          padding: ctaPad,
          marginBottom: '32px',
        }}>
          {/* Glow top-right */}
          <div style={{
            position: 'absolute', top: '-100px', right: '-100px',
            width: '400px', height: '400px', borderRadius: '50%',
            backgroundColor: 'rgba(16,185,129,0.04)',
            filter: 'blur(60px)', pointerEvents: 'none',
          }} />
          {/* Glow bottom-left */}
          <div style={{
            position: 'absolute', bottom: '-80px', left: '-80px',
            width: '300px', height: '300px', borderRadius: '50%',
            backgroundColor: 'rgba(6,182,212,0.04)',
            filter: 'blur(60px)', pointerEvents: 'none',
          }} />
          {/* Grid overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(16,185,129,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.015) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
          }} />

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px' }}>

            {/* Label */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              marginBottom: isMobile ? '16px' : '20px',
            }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '8px',
                backgroundColor: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <MessageSquare size={14} color="#10b981" />
              </div>
              <p style={{
                color: '#10b981', fontSize: '12px', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>
                Get In Touch
              </p>
            </div>

            {/* Headline */}
            <h2 style={{
              fontSize: headingSize, fontWeight: 900,
              color: '#f1f5f9', lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: isMobile ? '16px' : '20px',
            }}>
              Let's Build Something{' '}
              <span style={{ color: '#10b981' }}>Useful.</span>
            </h2>

            {/* Description */}
            <p style={{
              color: '#94a3b8',
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: 1.8,
              marginBottom: isMobile ? '20px' : '28px',
            }}>
              Open to conversations around software engineering, industrial technology,
              automation, digital transformation, and data. Whether you're a recruiter,
              engineering manager, or fellow engineer — feel free to reach out.
            </p>

            {/* Topic tags */}
            <div style={{
              display: 'flex', flexWrap: 'wrap',
              gap: isMobile ? '6px' : '8px',
              marginBottom: isMobile ? '28px' : '36px',
            }}>
              {topics.map(t => (
                <span key={t} style={{
                  padding: isMobile ? '5px 10px' : '6px 14px',
                  borderRadius: '999px',
                  border: '1px solid #334155',
                  backgroundColor: 'rgba(30,41,59,0.4)',
                  color: '#94a3b8',
                  fontSize: isMobile ? '12px' : '13px',
                  fontWeight: 500,
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="mailto:rafliauliya1@gmail.com"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: isMobile ? '12px 22px' : '14px 28px',
                borderRadius: '12px',
                backgroundColor: '#10b981', color: '#050d1a',
                fontWeight: 700,
                fontSize: isMobile ? '14px' : '15px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#34d399'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(16,185,129,0.3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#10b981'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Send a Message
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* ── Contact cards ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: gridCols,
          gap: '16px',
        }}>
          {contactLinks.map(link => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '16px',
                  padding: isMobile ? '16px' : '20px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(15,23,42,0.6)',
                  border: '1px solid #1e293b',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(16,185,129,0.3)'
                  e.currentTarget.style.backgroundColor = 'rgba(15,23,42,0.9)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#1e293b'
                  e.currentTarget.style.backgroundColor = 'rgba(15,23,42,0.6)'
                }}
              >
                {/* Icon */}
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                  backgroundColor: `${link.color}15`,
                  border: `1px solid ${link.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={18} color={link.color} />
                </div>

                {/* Text */}
                <div style={{ minWidth: 0, flex: 1 }}>
                  <p style={{
                    color: '#f1f5f9', fontWeight: 700,
                    fontSize: '14px', marginBottom: '4px',
                  }}>
                    {link.label}
                  </p>
                  <p style={{
                    color: '#64748b', fontSize: '12px', marginBottom: '4px',
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>
                    {link.value}
                  </p>
                  <p style={{ color: '#475569', fontSize: '12px' }}>
                    {link.desc}
                  </p>
                </div>

                {/* Arrow hint — desktop only */}
                {!isMobile && (
                  <ArrowRight
                    size={14}
                    color="#334155"
                    style={{ flexShrink: 0, marginTop: '2px' }}
                  />
                )}
              </a>
            )
          })}
        </div>

      </div>
    </section>
  )
}
