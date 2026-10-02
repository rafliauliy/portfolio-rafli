import { useState, useEffect, useRef } from 'react'
import { Mail, Linkedin, Github, Cpu } from 'lucide-react'

const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/muhamad-rafli-auliya-816112237/', label: 'LinkedIn' },
  { icon: Github,   href: 'https://github.com/rafliauliy',                                label: 'GitHub'   },
  { icon: Mail,     href: 'mailto:rafliauliya1@gmail.com',                                label: 'Email'    },
]

const navLinks = [
  { label: 'Home',       href: '#home'       },
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Data & ML',  href: '#data-ml'    },
  { label: 'Contact',    href: '#contact'    },
]

// ── Social link with hover using ref (no className dependency) ──
function SocialLink({ s }) {
  const iconBoxRef = useRef(null)
  const Icon = s.icon

  return (
    <a
      href={s.href}
      target={s.href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      style={{
        display: 'flex', alignItems: 'center', gap: '12px',
        color: '#64748b', textDecoration: 'none',
        transition: 'color 0.2s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.color = '#10b981'
        if (iconBoxRef.current) {
          iconBoxRef.current.style.borderColor = 'rgba(16,185,129,0.3)'
          iconBoxRef.current.style.backgroundColor = 'rgba(16,185,129,0.05)'
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.color = '#64748b'
        if (iconBoxRef.current) {
          iconBoxRef.current.style.borderColor = '#334155'
          iconBoxRef.current.style.backgroundColor = 'rgba(30,41,59,0.6)'
        }
      }}
    >
      <div ref={iconBoxRef} style={{
        width: '28px', height: '28px', borderRadius: '8px',
        backgroundColor: 'rgba(30,41,59,0.6)',
        border: '1px solid #334155',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, transition: 'all 0.2s ease',
      }}>
        <Icon size={13} />
      </div>
      <span style={{ fontSize: '14px' }}>{s.label}</span>
    </a>
  )
}

export default function Footer() {
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

  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Grid layout
  const gridCols = isMobile
    ? '1fr'                    // 1 col — brand, nav, connect stack
    : isTablet
    ? '1fr 1fr'                // 2 col — brand full width, nav + connect side by side
    : '1.5fr 1fr 1fr'          // 3 col — desktop

  const footerPad = isMobile ? '48px 20px' : isTablet ? '56px 28px' : '64px 32px'

  return (
    <footer style={{
      borderTop: '1px solid #1e293b',
      backgroundColor: 'rgba(15,23,42,0.2)',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: footerPad }}>

        {/* ── Top grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: gridCols,
          gap: isMobile ? '36px' : isTablet ? '32px' : '48px',
          marginBottom: isMobile ? '36px' : '48px',
        }}>

          {/* Brand — full width on tablet (span 2 cols) */}
          <div style={{
            gridColumn: isTablet ? '1 / -1' : 'auto',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '8px',
                backgroundColor: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Cpu size={16} color="#10b981" />
              </div>
              <span style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '16px' }}>
                Muhamad Rafli Auliya
              </span>
            </div>
            <p style={{ color: '#10b981', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
              Software Automation Engineer
            </p>
            <p style={{
              color: '#475569', fontSize: '13px', lineHeight: 1.7,
              maxWidth: isTablet ? '100%' : '280px',
            }}>
              Software Engineering · IT/OT · Digital Transformation · Data & ML
            </p>

            {/* On tablet — show socials inline under brand */}
            {isTablet && (
              <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                {socials.map(s => {
                  const Icon = s.icon
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      title={s.label}
                      style={{
                        width: '36px', height: '36px', borderRadius: '10px',
                        backgroundColor: 'rgba(30,41,59,0.6)',
                        border: '1px solid #334155',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#64748b', textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        flexShrink: 0,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'rgba(16,185,129,0.3)'
                        e.currentTarget.style.backgroundColor = 'rgba(16,185,129,0.05)'
                        e.currentTarget.style.color = '#10b981'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = '#334155'
                        e.currentTarget.style.backgroundColor = 'rgba(30,41,59,0.6)'
                        e.currentTarget.style.color = '#64748b'
                      }}
                    >
                      <Icon size={15} />
                    </a>
                  )
                })}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div>
            <p style={{
              color: '#64748b', fontSize: '12px', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              marginBottom: '20px',
            }}>
              Navigation
            </p>
            <ul style={{
              listStyle: 'none',
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr',
              gap: '10px 16px',
            }}>
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => scrollTo(e, link.href)}
                    style={{
                      color: '#64748b', fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                    onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect — hidden on tablet (shown inline under brand) */}
          {!isTablet && (
            <div>
              <p style={{
                color: '#64748b', fontSize: '12px', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                marginBottom: '20px',
              }}>
                Connect
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {socials.map(s => (
                  <SocialLink key={s.label} s={s} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid #1e293b',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          gap: '8px',
        }}>
          <p style={{ color: '#334155', fontSize: '13px' }}>
            © {new Date().getFullYear()} Muhamad Rafli Auliya. All rights reserved.
          </p>
          <p style={{ color: '#1e293b', fontSize: '13px' }}>
            Built with React · Vite · Tailwind CSS v4
          </p>
        </div>

      </div>
    </footer>
  )
}
