import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Mail, ChevronDown } from 'lucide-react'

const badges = ['C++', 'C#', 'Python', 'SQL', 'Oracle', 'SCADA', 'Power Platform', 'Laravel']

const rows = [
  { label: 'Role',      value: 'Software Automation Engineer', color: '#10b981' },
  { label: 'Domain',    value: 'Industrial / IT-OT',           color: '#06b6d4' },
  { label: 'Stack',     value: 'C++ · C# · Python · SQL',      color: '#10b981' },
  { label: 'Platform',  value: 'SCADA · Oracle · Power Apps',  color: '#06b6d4' },
  { label: 'Focus',     value: 'Digital Transformation',       color: '#10b981' },
  { label: 'Direction', value: 'Industrial Data Science',      color: '#06b6d4' },
]

const segments = [
  { text: 'Building Software, ',  color: '#f1f5f9' },
  { text: 'Automation,',          color: '#10b981' },
  { text: '\n',                   color: null      },
  { text: 'and Data Solutions ',  color: '#f1f5f9' },
  { text: 'for Industrial',       color: '#06b6d4' },
  { text: '\n',                   color: null      },
  { text: 'Operations.',          color: '#f1f5f9' },
]

function buildCharList(segs) {
  const chars = []
  segs.forEach(seg => {
    if (seg.text === '\n') {
      chars.push({ char: '\n', color: null, isBr: true })
    } else {
      seg.text.split('').forEach(ch => {
        chars.push({ char: ch, color: seg.color, isBr: false })
      })
    }
  })
  return chars
}

const charList = buildCharList(segments)

// ── Code snippets ──
const codeSnippets = [
  [
    { t: 'kw', v: 'if '        }, { t: 'pn', v: '('          },
    { t: 'var',v: 'level2'     }, { t: 'op', v: '.'          },
    { t: 'fn', v: 'isOnline'   }, { t: 'pn', v: '()) {'      },
  ],
  [
    { t: 'kw', v: 'while '     }, { t: 'pn', v: '('          },
    { t: 'var',v: 'scada'      }, { t: 'op', v: '.'          },
    { t: 'fn', v: 'running'    }, { t: 'pn', v: '()) {'      },
  ],
  [
    { t: 'kw', v: 'if '        }, { t: 'pn', v: '('          },
    { t: 'var',v: 'alarm'      }, { t: 'op', v: ' == '       },
    { t: 'str',v: '"CRITICAL"' }, { t: 'pn', v: ') {'        },
  ],
  [
    { t: 'fn', v: 'triggerAlert' }, { t: 'pn', v: '('        },
    { t: 'var',v: 'zone'         }, { t: 'op', v: ', '       },
    { t: 'str',v: '"GTP"'        }, { t: 'pn', v: ');'       },
  ],
  [
    { t: 'kw', v: 'else '      }, { t: 'kw', v: 'if '        },
    { t: 'pn', v: '('          }, { t: 'var',v: 'status'     },
    { t: 'op', v: ' === '      }, { t: 'str',v: '"IDLE"'     },
    { t: 'pn', v: ') {'        },
  ],
  [
    { t: 'kw', v: 'if '        }, { t: 'var',v: 'accuracy'   },
    { t: 'op', v: ' >= '       }, { t: 'num',v: '0.95'       },
    { t: 'pn', v: ':'          },
  ],
  [
    { t: 'var',v: 'model'      }, { t: 'op', v: ' = '        },
    { t: 'fn', v: 'SVC'        }, { t: 'pn', v: '('          },
    { t: 'var',v: 'kernel'     }, { t: 'op', v: '='          },
    { t: 'str',v: "'rbf'"      }, { t: 'pn', v: ')'          },
  ],
  [
    { t: 'kw', v: 'for '       }, { t: 'var',v: 'epoch'      },
    { t: 'kw', v: ' in '       }, { t: 'fn', v: 'range'      },
    { t: 'pn', v: '('          }, { t: 'num',v: '100'        },
    { t: 'pn', v: '):'         },
  ],
  [
    { t: 'var',v: 'df'         }, { t: 'op', v: ' = '        },
    { t: 'var',v: 'pd'         }, { t: 'op', v: '.'          },
    { t: 'fn', v: 'read_csv'   }, { t: 'pn', v: '('          },
    { t: 'str',v: '"data.csv"' }, { t: 'pn', v: ')'          },
  ],
  [
    { t: 'kw', v: 'SELECT '    }, { t: 'op', v: '*'          },
    { t: 'kw', v: ' FROM '     }, { t: 'var',v: 'production' },
  ],
  [
    { t: 'kw', v: 'WHERE '     }, { t: 'var',v: 'status'     },
    { t: 'op', v: ' = '        }, { t: 'str',v: "'ACTIVE'"   },
  ],
  [
    { t: 'kw', v: 'if '        }, { t: 'pn', v: '('          },
    { t: 'var',v: '$user'      }, { t: 'op', v: '->'         },
    { t: 'fn', v: 'hasRole'    }, { t: 'pn', v: '('          },
    { t: 'str',v: "'admin'"    }, { t: 'pn', v: ')) {'       },
  ],
  [
    { t: 'var',v: '$data'      }, { t: 'op', v: ' = '        },
    { t: 'var',v: 'DB'         }, { t: 'op', v: '::'         },
    { t: 'fn', v: 'table'      }, { t: 'pn', v: '('          },
    { t: 'str',v: "'orders'"   }, { t: 'pn', v: ')'          },
  ],
  [
    { t: 'kw', v: 'var '       }, { t: 'var',v: 'conn'       },
    { t: 'op', v: ' = '        }, { t: 'kw', v: 'new '       },
    { t: 'fn', v: 'OracleConn' }, { t: 'pn', v: '();'        },
  ],
  [
    { t: 'kw', v: 'foreach '   }, { t: 'pn', v: '('          },
    { t: 'kw', v: 'var '       }, { t: 'var',v: 'row'        },
    { t: 'kw', v: ' in '       }, { t: 'var',v: 'dataset'    },
    { t: 'pn', v: ') {'        },
  ],
  [
    { t: 'kw', v: 'return '    }, { t: 'var',v: 'response'   },
    { t: 'op', v: '->'         }, { t: 'fn', v: 'json'       },
    { t: 'pn', v: '('          }, { t: 'var',v: '$result'    },
    { t: 'pn', v: ');'         },
  ],
]

const tokenColor = {
  kw:  'rgba(197,134,192,0.55)',
  fn:  'rgba(220,220,170,0.50)',
  str: 'rgba(206,145,120,0.50)',
  var: 'rgba(156,220,254,0.45)',
  num: 'rgba(181,206,168,0.50)',
  op:  'rgba(212,212,212,0.30)',
  pn:  'rgba(212,212,212,0.25)',
}

// Desktop positions — tersebar luas
const desktopPositions = [
  { top: '6%',  left: '2%'  }, { top: '12%', left: '55%' },
  { top: '20%', left: '78%' }, { top: '28%', left: '5%'  },
  { top: '35%', left: '68%' }, { top: '42%', left: '15%' },
  { top: '50%', left: '82%' }, { top: '57%', left: '38%' },
  { top: '63%', left: '3%'  }, { top: '70%', left: '60%' },
  { top: '76%', left: '22%' }, { top: '82%', left: '75%' },
  { top: '88%', left: '8%'  }, { top: '92%', left: '48%' },
  { top: '96%', left: '85%' }, { top: '15%', left: '32%' },
]

// Mobile positions — hanya di area yang tidak ganggu konten
// Konten mobile ada di atas (0–80%), jadi snippet di pinggir kiri/kanan
const mobilePositions = [
  { top: '5%',  left: '1%'  }, { top: '15%', left: '60%' },
  { top: '25%', left: '2%'  }, { top: '35%', left: '65%' },
  { top: '45%', left: '1%'  }, { top: '55%', left: '58%' },
  { top: '65%', left: '2%'  }, { top: '75%', left: '62%' },
  { top: '82%', left: '1%'  }, { top: '90%', left: '55%' },
]

function FloatingCode({ isMobile }) {
  const [visibleMap, setVisibleMap] = useState({})
  const positions = isMobile ? mobilePositions : desktopPositions

  useEffect(() => {
    const timers = []
    setVisibleMap({}) // reset saat switch mobile/desktop

    positions.forEach((_, i) => {
      const snippetIdx = i % codeSnippets.length

      const cycle = () => {
        setVisibleMap(prev => ({ ...prev, [i]: true }))
        const showDuration = 3000 + (snippetIdx * 400) % 4000
        const t1 = setTimeout(() => {
          setVisibleMap(prev => ({ ...prev, [i]: false }))
          const hideDuration = 2000 + (i * 700) % 4000
          const t2 = setTimeout(cycle, hideDuration)
          timers.push(t2)
        }, showDuration)
        timers.push(t1)
      }

      const t0 = setTimeout(cycle, i * 380)
      timers.push(t0)
    })

    return () => timers.forEach(clearTimeout)
  }, [isMobile])

  return (
    <>
      {positions.map((pos, i) => {
        const snippetIdx = i % codeSnippets.length
        const tokens     = codeSnippets[snippetIdx]
        const visible    = visibleMap[i] || false

        return (
          <div key={i} style={{
            position: 'absolute',
            top: pos.top, left: pos.left,
            fontFamily: '"Fira Code", "Cascadia Code", "Consolas", monospace',
            fontSize: isMobile ? '9px' : '11px',
            lineHeight: 1.6,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            userSelect: 'none',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 1.2s ease, transform 1.2s ease',
            zIndex: 0,
            // Di mobile, opacity lebih rendah biar tidak ganggu baca
            maxOpacity: isMobile ? 0.6 : 1,
          }}>
            {tokens.map((token, ti) => (
              <span key={ti} style={{ color: tokenColor[token.t] }}>
                {token.v}
              </span>
            ))}
          </div>
        )
      })}
    </>
  )
}

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const [displayCount, setDisplayCount] = useState(0)
  const [showCursor,   setShowCursor]   = useState(true)
  const [isMobile,     setIsMobile]     = useState(false)
  const [isTablet,     setIsTablet]     = useState(false)
  const intervalRef = useRef(null)
  const cursorRef   = useRef(null)

  // ── Responsive detection ──
  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 640)
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // ── Typewriter ──
  useEffect(() => {
    const startDelay = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setDisplayCount(prev => {
          if (prev >= charList.length) {
            clearInterval(intervalRef.current)
            let blinks = 0
            cursorRef.current = setInterval(() => {
              setShowCursor(s => !s)
              blinks++
              if (blinks >= 6) {
                clearInterval(cursorRef.current)
                setShowCursor(false)
              }
            }, 400)
            return prev
          }
          return prev + 1
        })
      }, 40)
    }, 600)

    return () => {
      clearTimeout(startDelay)
      clearInterval(intervalRef.current)
      clearInterval(cursorRef.current)
    }
  }, [])

  const rendered    = charList.slice(0, displayCount)
  const isSmall     = isMobile || isTablet
  const fontSize    = isMobile ? '36px' : isTablet ? '46px' : '58px'
  const minH        = isMobile ? '160px' : isTablet ? '190px' : '210px'
  const padding     = isMobile ? '40px 20px' : isTablet ? '60px 28px' : '80px 32px'
  const descSize    = isMobile ? '15px' : isTablet ? '16px' : '18px'

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '64px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(16,185,129,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(16,185,129,0.07) 1px, transparent 1px)
        `,
        backgroundSize: isMobile ? '40px 40px' : '60px 60px',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Grid dots */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle, rgba(16,185,129,0.15) 1px, transparent 1px)`,
        backgroundSize: isMobile ? '40px 40px' : '60px 60px',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Floating code */}
      <FloatingCode isMobile={isSmall} />

      {/* Scan sweeps */}
      <div style={{
        position: 'absolute', top: 0, left: '-100%',
        width: '60%', height: '100%',
        background: 'linear-gradient(90deg, transparent 0%, rgba(16,185,129,0.03) 40%, rgba(16,185,129,0.06) 50%, rgba(16,185,129,0.03) 60%, transparent 100%)',
        animation: 'scanSweep1 8s ease-in-out infinite',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', top: 0, left: '-100%',
        width: '40%', height: '100%',
        background: 'linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.02) 40%, rgba(6,182,212,0.04) 50%, rgba(6,182,212,0.02) 60%, transparent 100%)',
        animation: 'scanSweep2 12s ease-in-out infinite',
        animationDelay: '3s',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', top: 0, left: '-100%',
        width: '20%', height: '100%',
        background: 'linear-gradient(90deg, transparent 0%, transparent 45%, rgba(16,185,129,0.08) 50%, transparent 55%, transparent 100%)',
        animation: 'scanSweep3 6s ease-in-out infinite',
        animationDelay: '1.5s',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(5,13,26,0.6) 100%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Glow blobs */}
      <div style={{
        position: 'absolute', top: '20%', left: '10%',
        width: isMobile ? '250px' : '500px',
        height: isMobile ? '250px' : '500px',
        borderRadius: '50%',
        backgroundColor: 'rgba(16,185,129,0.04)',
        filter: 'blur(100px)', pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '10%',
        width: isMobile ? '200px' : '400px',
        height: isMobile ? '200px' : '400px',
        borderRadius: '50%',
        backgroundColor: 'rgba(6,182,212,0.04)',
        filter: 'blur(100px)', pointerEvents: 'none', zIndex: 0,
      }} />

      {/* ── CONTENT ── */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding,
        width: '100%',
        position: 'relative',
        zIndex: 1,
      }}>

        {/* ── GRID: 2 col desktop, 1 col mobile/tablet ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isSmall ? '1fr' : '1fr 1fr',
          gap: isMobile ? '40px' : isTablet ? '48px' : '64px',
          alignItems: 'center',
        }}>

          {/* ── LEFT ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '20px' : '28px' }}>

            {/* Status badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 14px', borderRadius: '999px',
              border: '1px solid rgba(16,185,129,0.3)',
              backgroundColor: 'rgba(16,185,129,0.05)',
              width: 'fit-content',
            }}>
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                backgroundColor: '#10b981',
                animation: 'heroPulse 2s infinite',
              }} />
              <span style={{
                color: '#10b981',
                fontSize: isMobile ? '10px' : '12px',
                fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>
                Software Automation Engineer
              </span>
            </div>

            {/* Hi I'm Rafli */}
            <p style={{
              color: '#94a3b8',
              fontSize: isMobile ? '15px' : '18px',
              fontWeight: 500, margin: 0,
            }}>
              Hi, I'm Rafli.
            </p>

            {/* Typewriter headline */}
            <h1 style={{
              fontSize,
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: 0,
              minHeight: minH,
            }}>
              {rendered.map((item, i) => {
                if (item.isBr) return <br key={i} />
                return (
                  <span key={i} style={{ color: item.color }}>
                    {item.char}
                  </span>
                )
              })}
              {showCursor && (
                <span style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '0.85em',
                  backgroundColor: '#10b981',
                  marginLeft: '2px',
                  verticalAlign: 'middle',
                  borderRadius: '1px',
                  animation: 'cursorBlink 0.7s ease-in-out infinite',
                }} />
              )}
            </h1>

            {/* Description */}
            <p style={{
              color: '#94a3b8',
              fontSize: descSize,
              lineHeight: 1.8,
              maxWidth: '520px',
              margin: 0,
            }}>
              Software Automation Engineer specializing in industrial software, IT/OT systems,
              workflow automation, and digital transformation — with a growing focus on
              Data Science and Machine Learning.
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <button
                onClick={() => scrollTo('projects')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: isMobile ? '12px 20px' : '14px 24px',
                  borderRadius: '12px',
                  backgroundColor: '#10b981', color: '#050d1a',
                  fontWeight: 700,
                  fontSize: isMobile ? '13px' : '14px',
                  border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  flex: isMobile ? '1' : 'none',
                  justifyContent: isMobile ? 'center' : 'flex-start',
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
                View My Projects <ArrowRight size={15} />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: isMobile ? '12px 20px' : '14px 24px',
                  borderRadius: '12px',
                  backgroundColor: 'transparent', color: '#cbd5e1',
                  fontWeight: 600,
                  fontSize: isMobile ? '13px' : '14px',
                  border: '1px solid #334155', cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  flex: isMobile ? '1' : 'none',
                  justifyContent: isMobile ? 'center' : 'flex-start',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#475569'
                  e.currentTarget.style.color = '#f1f5f9'
                  e.currentTarget.style.backgroundColor = 'rgba(30,41,59,0.6)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#334155'
                  e.currentTarget.style.color = '#cbd5e1'
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                <Mail size={15} /> Contact Me
              </button>
            </div>

            {/* Tech badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {badges.map(b => (
                <span key={b} style={{
                  padding: isMobile ? '5px 10px' : '6px 12px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(30,41,59,0.8)',
                  border: '1px solid rgba(51,65,85,0.6)',
                  color: '#94a3b8',
                  fontSize: isMobile ? '11px' : '12px',
                  fontFamily: 'monospace', fontWeight: 500,
                  cursor: 'default', transition: 'all 0.2s ease',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'
                    e.currentTarget.style.color = '#10b981'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(51,65,85,0.6)'
                    e.currentTarget.style.color = '#94a3b8'
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Terminal Visual (hidden on mobile) ── */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                width: '100%',
                maxWidth: isTablet ? '380px' : '460px',
                padding: isTablet ? '24px' : '32px',
                borderRadius: '20px',
                backgroundColor: '#0f172a',
                border: '1px solid #1e293b',
                boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
              }}>
                {/* Window bar */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                  <span style={{ marginLeft: '12px', color: '#475569', fontSize: '12px', fontFamily: 'monospace' }}>
                    system_overview.exe
                  </span>
                </div>

                {/* Rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {rows.map(row => (
                    <div key={row.label} style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      padding: isTablet ? '10px 12px' : '12px 16px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(5,13,26,0.6)',
                      border: '1px solid rgba(30,41,59,0.6)',
                      transition: 'border-color 0.2s ease',
                    }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(30,41,59,1)'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(30,41,59,0.6)'}
                    >
                      <span style={{
                        color: '#475569',
                        fontSize: isTablet ? '11px' : '12px',
                        fontFamily: 'monospace',
                        width: isTablet ? '60px' : '72px',
                        flexShrink: 0,
                      }}>
                        {row.label}
                      </span>
                      <span style={{ color: '#334155', fontSize: '12px' }}>→</span>
                      <span style={{
                        fontSize: isTablet ? '11px' : '13px',
                        fontWeight: 600, color: row.color,
                      }}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Status bar */}
                <div style={{
                  marginTop: '20px', paddingTop: '16px',
                  borderTop: '1px solid #1e293b',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}>
                  <span style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    backgroundColor: '#10b981',
                    animation: 'heroPulse 2s infinite',
                  }} />
                  <span style={{
                    color: '#475569',
                    fontSize: isTablet ? '11px' : '12px',
                    fontFamily: 'monospace',
                  }}>
                    Status: Available for opportunities
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Scroll indicator */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '4px',
          marginTop: isMobile ? '40px' : '64px',
          color: '#334155',
          animation: 'heroBounce 2s infinite',
        }}>
          <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Scroll
          </span>
          <ChevronDown size={16} />
        </div>
      </div>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
        @keyframes heroBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes scanSweep1 {
          0%   { left: -60%; }
          100% { left: 160%; }
        }
        @keyframes scanSweep2 {
          0%   { left: -50%; }
          100% { left: 160%; }
        }
        @keyframes scanSweep3 {
          0%   { left: -30%; }
          100% { left: 160%; }
        }
      `}</style>
    </section>
  )
}
