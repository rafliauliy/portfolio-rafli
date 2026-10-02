import { useState, useEffect } from 'react'
import { Menu, X, Download, Cpu } from 'lucide-react'

const navLinks = [
  { label: 'Home',       href: '#home'       },
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Data & ML',  href: '#data-ml'    },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen]    = useState(false)
  const [scrolled, setScrolled]    = useState(false)
  const [activeSection, setActive] = useState('home')
  const [isMobile, setIsMobile]    = useState(false)

  useEffect(() => {
    // ── Cek ukuran layar ──
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // ── Scroll handler ──
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const ids = navLinks.map(l => l.href.replace('#', ''))
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(ids[i])
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Tutup menu kalau resize ke desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false)
  }, [isMobile])

  // Lock body scroll saat mobile menu terbuka
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 50,
      backgroundColor: scrolled || menuOpen ? 'rgba(5,13,26,0.97)' : 'transparent',
      borderBottom: scrolled || menuOpen ? '1px solid #1e293b' : '1px solid transparent',
      backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
      }}>

        {/* ── Main row ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}>

          {/* Logo */}
          <a href="#home" onClick={e => scrollTo(e, '#home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              flexShrink: 0,
              zIndex: 1,
            }}>
            <div style={{
              width: '32px', height: '32px',
              borderRadius: '8px',
              backgroundColor: 'rgba(16,185,129,0.1)',
              border: '1px solid rgba(16,185,129,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Cpu size={16} color="#10b981" />
            </div>
            <span style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '16px' }}>
              Rafli<span style={{ color: '#10b981' }}>.</span>
            </span>
          </a>

          {/* Desktop Nav — centered, hidden on mobile */}
          {!isMobile && (
            <nav style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}>
              {navLinks.map(link => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <a key={link.href} href={link.href}
                    onClick={e => scrollTo(e, link.href)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: 500,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      backgroundColor: isActive ? 'rgba(16,185,129,0.1)' : 'transparent',
                      color: isActive ? '#10b981' : '#94a3b8',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={e => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#f1f5f9'
                        e.currentTarget.style.backgroundColor = 'rgba(30,41,59,0.6)'
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#94a3b8'
                        e.currentTarget.style.backgroundColor = 'transparent'
                      }
                    }}
                  >
                    {link.label}
                  </a>
                )
              })}
            </nav>
          )}

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>

            {/* Resume button — desktop only */}
            {!isMobile && (
              <a
                href="/resume_rafli.pdf"
                download="Rafli_Auliya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  backgroundColor: '#10b981',
                  color: '#050d1a',
                  fontWeight: 700,
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#34d399'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#10b981'}
              >
                <Download size={14} />
                Resume
              </a>
            )}

            {/* Hamburger — mobile only */}
            {isMobile && (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px', height: '40px',
                  borderRadius: '8px',
                  backgroundColor: menuOpen ? 'rgba(16,185,129,0.1)' : 'transparent',
                  border: menuOpen ? '1px solid rgba(16,185,129,0.3)' : '1px solid #334155',
                  color: menuOpen ? '#10b981' : '#94a3b8',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            )}
          </div>
        </div>

        {/* ── Mobile menu dropdown ── */}
        {isMobile && (
          <div style={{
            overflow: 'hidden',
            maxHeight: menuOpen ? '520px' : '0',
            opacity: menuOpen ? 1 : 0,
            transition: 'max-height 0.35s ease, opacity 0.25s ease',
            borderTop: menuOpen ? '1px solid #1e293b' : 'none',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              padding: '12px 0 20px',
            }}>

              {/* Nav links */}
              {navLinks.map(link => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <a key={link.href} href={link.href}
                    onClick={e => scrollTo(e, link.href)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      fontSize: '15px',
                      fontWeight: isActive ? 600 : 500,
                      textDecoration: 'none',
                      color: isActive ? '#10b981' : '#94a3b8',
                      backgroundColor: isActive ? 'rgba(16,185,129,0.08)' : 'transparent',
                      borderLeft: isActive ? '2px solid #10b981' : '2px solid transparent',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {link.label}
                  </a>
                )
              })}

              {/* Divider */}
              <div style={{
                height: '1px',
                backgroundColor: '#1e293b',
                margin: '8px 0',
              }} />

              {/* Resume button — mobile */}
              <a
                href="/resume_rafli.pdf"
                download="Rafli_Auliya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '13px 16px',
                  borderRadius: '10px',
                  backgroundColor: '#10b981',
                  color: '#050d1a',
                  fontWeight: 700,
                  fontSize: '14px',
                  textDecoration: 'none',
                  margin: '0 0',
                }}
              >
                <Download size={15} />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
