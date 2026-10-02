import { useEffect, useRef, useState } from 'react'
import { Code2, Factory, Network, BrainCircuit, CheckCircle2 } from 'lucide-react'

const highlights = [
  { icon: Code2,        label: '3+ Years',               sub: 'Professional Experience',  color: '#10b981' },
  { icon: Factory,      label: 'Software + Industrial',  sub: 'Dual Domain Background',   color: '#06b6d4' },
  { icon: Network,      label: 'Digital Transformation', sub: 'IT/OT & Power Platform',   color: '#10b981' },
  { icon: BrainCircuit, label: 'Data & ML Foundation',   sub: 'Future Specialization',    color: '#06b6d4' },
]

const journey = [
  { label: 'Software Development',   desc: 'Enterprise web apps, full-stack, PHP / Laravel / CodeIgniter / React.js'  },
  { label: 'Industrial Automation',  desc: 'Level 2 systems, SCADA/HMI, Wonderware InTouch, C++ / C#'                 },
  { label: 'IT/OT Integration',      desc: 'Bridging IT and OT in a real steel manufacturing environment'              },
  { label: 'Digital Transformation', desc: 'Power Platform, workflow automation, work order digitalization'            },
  { label: 'Industrial Data & ML',   desc: 'Process data, sensor data, ML foundation — future direction'              },
]

export default function About() {
  const photoRef = useRef(null)
  const bioRef   = useRef(null)

  const [isMobile,  setIsMobile]  = useState(false)
  const [isTablet,  setIsTablet]  = useState(false)

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 640)
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // ── Intersection animation ──
  useEffect(() => {
    const photoEl = photoRef.current
    const bioEl   = bioRef.current
    if (!photoEl) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          photoEl.style.opacity   = '1'
          photoEl.style.transform = 'translateX(0) translateY(0)'
          photoEl.style.filter    = 'blur(0px)'

          if (bioEl) {
            setTimeout(() => {
              bioEl.style.opacity   = '1'
              bioEl.style.transform = 'translateY(0)'
              bioEl.style.filter    = 'blur(0px)'
            }, 250)
          }
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(photoEl)
    return () => observer.disconnect()
  }, [])

  const isSmall   = isMobile || isTablet
  const sectionPad = isMobile ? '64px 0' : '96px 0'
  const innerPad   = isMobile ? '0 20px' : isTablet ? '0 28px' : '0 32px'

  return (
    <section id="about" style={{ padding: sectionPad }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: innerPad }}>

        {/* ── HEADER ── */}
        <div style={{ marginBottom: isMobile ? '40px' : '64px' }}>
          <p style={{
            color: '#10b981', fontSize: '12px', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px',
          }}>
            About Me
          </p>
          <h2 style={{
            fontSize: isMobile ? '32px' : isTablet ? '40px' : '48px',
            fontWeight: 900, color: '#f1f5f9',
            lineHeight: 1.1, letterSpacing: '-0.02em',
          }}>
            Where Software Meets the{' '}
            <span style={{ color: '#10b981' }}>Industrial Floor</span>
          </h2>
        </div>

        {/* ── PHOTO + BIO ROW ── */}
        <div style={{
          display: 'grid',
          // Mobile: 1 col, Tablet: 1 col, Desktop: photo col + bio col
          gridTemplateColumns: isSmall ? '1fr' : '280px 1fr',
          gap: isMobile ? '40px' : isTablet ? '48px' : '56px',
          alignItems: 'flex-start',
          marginBottom: isMobile ? '40px' : '64px',
        }}>

          {/* ── PHOTO COLUMN ── */}
          <div
            ref={photoRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              opacity: 0,
              transform: 'translateX(-60px) translateY(60px)',
              filter: 'blur(12px)',
              transition: 'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1), filter 0.9s ease',
            }}
          >
            {/* Photo frame */}
            <div style={{
              position: 'relative',
              width: isMobile ? '180px' : '240px',
              height: isMobile ? '240px' : '320px',
            }}>
              {/* Decorative border */}
              <div style={{
                position: 'absolute',
                top: '10px', left: '10px',
                width: isMobile ? '180px' : '240px',
                height: isMobile ? '240px' : '320px',
                borderRadius: '20px',
                border: '2px solid rgba(16,185,129,0.2)',
                zIndex: 0, pointerEvents: 'none',
              }} />

              {/* Glow */}
              <div style={{
                position: 'absolute',
                top: '20px', left: '-10px',
                width: '200px', height: '200px',
                borderRadius: '50%',
                backgroundColor: 'rgba(16,185,129,0.06)',
                filter: 'blur(40px)',
                zIndex: 0, pointerEvents: 'none',
              }} />

              {/* Photo */}
              <div style={{
                position: 'relative',
                width: isMobile ? '180px' : '240px',
                height: isMobile ? '240px' : '320px',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '2px solid #1e293b',
                backgroundColor: '#0f172a',
                zIndex: 1,
              }}>
                <img
                  src="/rafli.jpg"
                  alt="Muhamad Rafli Auliya"
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0,
                  height: '80px',
                  background: 'linear-gradient(to top, rgba(5,13,26,0.5), transparent)',
                  pointerEvents: 'none',
                }} />
              </div>

              {/* Status badge */}
              <div style={{
                position: 'absolute',
                bottom: '-14px', left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 2,
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '6px 14px', borderRadius: '999px',
                backgroundColor: '#0f172a',
                border: '1px solid rgba(16,185,129,0.3)',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
              }}>
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  backgroundColor: '#10b981',
                  display: 'inline-block',
                  animation: 'aboutPulse 2s infinite',
                }} />
                <span style={{ color: '#10b981', fontSize: '11px', fontWeight: 600 }}>
                  Available
                </span>
              </div>
            </div>

            {/* Name + title */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <p style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '16px', marginBottom: '4px' }}>
                Muhamad Rafli Auliya
              </p>
              <p style={{ color: '#10b981', fontSize: '13px', fontWeight: 500 }}>
                Software Automation Engineer
              </p>
              <p style={{ color: '#475569', fontSize: '12px', marginTop: '4px' }}>
                Industrial · IT/OT · Data & ML
              </p>
            </div>

            {/* Quick stat pills */}
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '8px',
              // Di mobile, stat pills full width section bukan cuma kolom foto
              width: isMobile ? '100%' : '100%',
              maxWidth: isMobile ? '320px' : '100%',
              marginTop: '4px',
            }}>
              {[
                { label: 'Experience', value: '3+ Years'              },
                { label: 'Domain',     value: 'Software + Industrial' },
                { label: 'Direction',  value: 'Industrial Data Sci.'  },
              ].map(stat => (
                <div key={stat.label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '8px 14px', borderRadius: '10px',
                  backgroundColor: 'rgba(15,23,42,0.6)',
                  border: '1px solid #1e293b',
                }}>
                  <span style={{ color: '#64748b', fontSize: '11px' }}>{stat.label}</span>
                  <span style={{ color: '#e2e8f0', fontSize: '11px', fontWeight: 600 }}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── BIO COLUMN ── */}
          <div
            ref={bioRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              opacity: 0,
              transform: 'translateY(40px)',
              filter: 'blur(6px)',
              transition: 'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1), filter 0.9s ease',
            }}
          >
            <p style={{ color: '#94a3b8', fontSize: isMobile ? '14px' : '16px', lineHeight: 1.8 }}>
              I'm a <strong style={{ color: '#f1f5f9' }}>Software Automation Engineer</strong> with
              more than 3 years of experience spanning software development, information technology,
              industrial automation, IT/OT systems, and digital transformation.
            </p>
            <p style={{ color: '#94a3b8', fontSize: isMobile ? '14px' : '16px', lineHeight: 1.8 }}>
              I currently work in a <strong style={{ color: '#e2e8f0' }}>steel manufacturing environment</strong>,
              maintaining and improving Level 2 industrial systems, SCADA/HMI applications, and
              real-time process monitoring — working directly with industrial process data and
              operational technology.
            </p>
            <p style={{ color: '#94a3b8', fontSize: isMobile ? '14px' : '16px', lineHeight: 1.8 }}>
              Alongside my industrial work, I have built enterprise web applications using PHP,
              Laravel, and CodeIgniter — covering job order systems, vendor management, and
              internal business process digitalization.
            </p>
            <p style={{ color: '#94a3b8', fontSize: isMobile ? '14px' : '16px', lineHeight: 1.8 }}>
              My long-term direction is toward{' '}
              <strong style={{ color: '#10b981' }}>Industrial Data Science</strong> — combining
              software engineering, industrial domain knowledge, IT/OT, and machine learning
              to extract intelligence from real operational data.
            </p>

            {/* Journey steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
              {journey.map(step => (
                <div key={step.label} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '12px',
                }}>
                  <div style={{
                    marginTop: '2px',
                    width: '20px', height: '20px', borderRadius: '50%',
                    border: '1px solid rgba(16,185,129,0.4)',
                    backgroundColor: 'rgba(16,185,129,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <CheckCircle2 size={11} color="#10b981" />
                  </div>
                  <p style={{ fontSize: isMobile ? '13px' : '14px', margin: 0 }}>
                    <strong style={{ color: '#e2e8f0' }}>{step.label}</strong>
                    <span style={{ color: '#64748b' }}> — {step.desc}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── HIGHLIGHT CARDS ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile
            ? '1fr 1fr'           // 2 col di mobile
            : isTablet
              ? '1fr 1fr'         // 2 col di tablet
              : '1fr 1fr 1fr 1fr',// 4 col di desktop
          gap: isMobile ? '12px' : '16px',
          marginBottom: '16px',
        }}>
          {highlights.map(h => {
            const Icon = h.icon
            return (
              <div key={h.label} style={{
                padding: isMobile ? '16px' : '20px',
                borderRadius: '16px',
                backgroundColor: 'rgba(15,23,42,0.6)',
                border: '1px solid #1e293b',
                cursor: 'default',
                transition: 'border-color 0.2s ease, transform 0.2s ease',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(16,185,129,0.3)'
                  e.currentTarget.style.transform   = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#1e293b'
                  e.currentTarget.style.transform   = 'translateY(0)'
                }}
              >
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  backgroundColor: `${h.color}15`,
                  border: `1px solid ${h.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '12px',
                }}>
                  <Icon size={16} color={h.color} />
                </div>
                <p style={{
                  color: '#f1f5f9', fontWeight: 700,
                  fontSize: isMobile ? '12px' : '14px',
                  marginBottom: '4px',
                }}>
                  {h.label}
                </p>
                <p style={{ color: '#64748b', fontSize: isMobile ? '11px' : '12px' }}>
                  {h.sub}
                </p>
              </div>
            )
          })}
        </div>

        {/* ── CORE ADVANTAGE ── */}
        <div style={{
          padding: isMobile ? '20px' : '24px 28px',
          borderRadius: '16px',
          backgroundColor: 'rgba(16,185,129,0.05)',
          border: '1px solid rgba(16,185,129,0.2)',
          cursor: 'default',
        }}>
          <p style={{
            color: '#10b981', fontSize: '11px', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px',
          }}>
            Core Advantage
          </p>
          <p style={{
            color: '#e2e8f0', fontWeight: 600,
            fontSize: isMobile ? '13px' : '15px',
            lineHeight: 1.7,
          }}>
            Understanding both the software layer and the real industrial floor — bridging
            IT and OT to build solutions that work in practice, not just in theory.
          </p>
        </div>

      </div>

      <style>{`
        @keyframes aboutPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
      `}</style>
    </section>
  )
}
