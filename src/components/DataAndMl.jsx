import { useState, useEffect } from 'react'
import { Activity, Database, Cpu, BarChart3, BrainCircuit, Lightbulb, ArrowRight, FlaskConical } from 'lucide-react'

const pipeline = [
  { icon: Activity,     label: 'Industrial Sensors',   sub: 'Real-time signals',       color: '#64748b' },
  { icon: Database,     label: 'Process Data',         sub: 'Level 2 / SCADA',         color: '#64748b' },
  { icon: Cpu,          label: 'Data Processing',      sub: 'Cleaning & EDA',          color: '#10b981' },
  { icon: BarChart3,    label: 'Analytics',            sub: 'Patterns & trends',       color: '#10b981' },
  { icon: BrainCircuit, label: 'Machine Learning',     sub: 'Models & prediction',     color: '#06b6d4' },
  { icon: Lightbulb,    label: 'Operational Insights', sub: 'Actionable intelligence', color: '#06b6d4' },
]

const mlSkills = [
  'Python', 'Pandas', 'Data Cleaning', 'Exploratory Data Analysis',
  'Machine Learning', 'Classification', 'Logistic Regression', 'SVM', 'Model Evaluation',
]

export default function DataAndML() {
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
  const headingSize = isMobile ? '28px'    : isTablet ? '38px'   : '48px'

  return (
    <section id="data-ml" style={{ padding: sectionPad }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: innerPad }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: isMobile ? '40px' : '64px' }}>
          <p style={{
            color: '#10b981', fontSize: '12px', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px',
          }}>
            Data & Machine Learning
          </p>
          <h2 style={{
            fontSize: headingSize, fontWeight: 900, color: '#f1f5f9',
            lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '16px',
          }}>
            From Industrial Data{' '}
            <span style={{ color: '#10b981' }}>to Intelligence</span>
          </h2>
          <p style={{
            color: '#94a3b8',
            fontSize: isMobile ? '14px' : '16px',
            maxWidth: '640px', lineHeight: 1.8,
          }}>
            Working close to industrial Level 2 systems means daily exposure to large volumes of
            process and sensor data. This operational context forms the foundation of my growing
            focus on Data Science and Machine Learning.
          </p>
        </div>

        {/* ── Pipeline ── */}
        <div style={{
          padding: isMobile ? '24px 16px' : '40px',
          borderRadius: '16px',
          backgroundColor: 'rgba(15,23,42,0.6)',
          border: '1px solid #1e293b',
          marginBottom: '24px',
          overflowX: isMobile ? 'auto' : 'visible',
        }}>
          <p style={{
            color: '#64748b', fontSize: '11px', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            textAlign: 'center', marginBottom: '24px',
          }}>
            Industrial Data Pipeline Concept
          </p>

          {/* Mobile: 2×3 grid | Tablet+: horizontal flex */}
          {isMobile ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
            }}>
              {pipeline.map((step) => {
                const Icon = step.icon
                return (
                  <div key={step.label} style={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: '8px',
                    padding: '16px 12px', borderRadius: '12px',
                    backgroundColor: step.color === '#64748b'
                      ? 'rgba(30,41,59,0.6)'
                      : step.color === '#10b981'
                      ? 'rgba(16,185,129,0.08)'
                      : 'rgba(6,182,212,0.08)',
                    border: `1px solid ${step.color === '#64748b' ? '#334155' : step.color + '30'}`,
                  }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '10px',
                      backgroundColor: `${step.color}20`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={18} color={step.color} />
                    </div>
                    <span style={{
                      color: '#e2e8f0', fontSize: '10px',
                      fontWeight: 700, textAlign: 'center', lineHeight: 1.3,
                    }}>
                      {step.label}
                    </span>
                    <span style={{
                      color: '#64748b', fontSize: '9px',
                      textAlign: 'center', lineHeight: 1.3,
                    }}>
                      {step.sub}
                    </span>
                  </div>
                )
              })}
            </div>
          ) : (
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'center',
              flexWrap: isTablet ? 'wrap' : 'nowrap',
              gap: '8px',
            }}>
              {pipeline.map((step, i) => {
                const Icon = step.icon
                const isLast = i === pipeline.length - 1
                return (
                  <div key={step.label} style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', gap: '10px',
                      padding: isTablet ? '16px 12px' : '20px 16px',
                      borderRadius: '12px',
                      width: isTablet ? '110px' : '130px',
                      backgroundColor: step.color === '#64748b'
                        ? 'rgba(30,41,59,0.6)'
                        : step.color === '#10b981'
                        ? 'rgba(16,185,129,0.08)'
                        : 'rgba(6,182,212,0.08)',
                      border: `1px solid ${step.color === '#64748b' ? '#334155' : step.color + '30'}`,
                      transition: 'transform 0.2s ease', cursor: 'default',
                    }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <div style={{
                        width: '40px', height: '40px', borderRadius: '10px',
                        backgroundColor: `${step.color}20`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon size={20} color={step.color} />
                      </div>
                      <span style={{
                        color: '#e2e8f0',
                        fontSize: isTablet ? '10px' : '11px',
                        fontWeight: 700, textAlign: 'center', lineHeight: 1.3,
                      }}>
                        {step.label}
                      </span>
                      <span style={{
                        color: '#64748b',
                        fontSize: isTablet ? '9px' : '10px',
                        textAlign: 'center', lineHeight: 1.3,
                      }}>
                        {step.sub}
                      </span>
                    </div>
                    {!isLast && (
                      <ArrowRight
                        size={14}
                        color="#334155"
                        style={{ flexShrink: 0, margin: '0 2px' }}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* ── Two columns ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isSmall ? '1fr' : '1fr 1fr',
          gap: '24px',
          marginBottom: '24px',
        }}>

          {/* Context */}
          <div style={{
            padding: isMobile ? '24px' : '32px',
            borderRadius: '16px',
            backgroundColor: 'rgba(15,23,42,0.6)',
            border: '1px solid #1e293b',
            transition: 'border-color 0.2s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(16,185,129,0.2)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#1e293b'}
          >
            <p style={{
              color: '#10b981', fontSize: '11px', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px',
            }}>
              Industrial Data Context
            </p>
            <h3 style={{
              color: '#f1f5f9', fontWeight: 700,
              fontSize: isMobile ? '16px' : '18px',
              marginBottom: '12px',
            }}>
              Exposure to Real Process Data
            </h3>
            <p style={{
              color: '#94a3b8',
              fontSize: isMobile ? '13px' : '14px',
              lineHeight: 1.8, marginBottom: '16px',
            }}>
              My day-to-day work in a steel manufacturing plant involves Level 2 systems that
              continuously collect, process, and store large volumes of sensor and process data.
            </p>
            <p style={{
              color: '#94a3b8',
              fontSize: isMobile ? '13px' : '14px',
              lineHeight: 1.8, marginBottom: '24px',
            }}>
              My long-term direction is to combine this industrial domain knowledge with Data
              Science and Machine Learning to build intelligent systems that generate real operational value.
            </p>
            <div style={{
              padding: '16px', borderRadius: '12px',
              backgroundColor: 'rgba(16,185,129,0.05)',
              border: '1px solid rgba(16,185,129,0.15)',
            }}>
              <p style={{
                color: '#10b981', fontSize: '11px', fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px',
              }}>
                Target Specialization
              </p>
              <p style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>
                Industrial Data Science
              </p>
              <p style={{ color: '#64748b', fontSize: '12px' }}>
                Software Engineering + Industrial Domain + IT/OT + Machine Learning
              </p>
            </div>
          </div>

          {/* ML Project */}
          <div style={{
            padding: isMobile ? '24px' : '32px',
            borderRadius: '16px',
            backgroundColor: 'rgba(15,23,42,0.6)',
            border: '1px solid #1e293b',
            transition: 'border-color 0.2s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(6,182,212,0.2)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#1e293b'}
          >
            <p style={{
              color: '#06b6d4', fontSize: '11px', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px',
            }}>
              Featured ML Project
            </p>
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px',
            }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '12px',
                backgroundColor: 'rgba(6,182,212,0.1)',
                border: '1px solid rgba(6,182,212,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <FlaskConical size={22} color="#06b6d4" />
              </div>
              <div>
                <h3 style={{
                  color: '#f1f5f9', fontWeight: 700,
                  fontSize: isMobile ? '15px' : '18px',
                  lineHeight: 1.3,
                }}>
                  Mobile Price Classification
                </h3>
                <p style={{ color: '#64748b', fontSize: '12px', marginTop: '4px' }}>
                  Independent Data Science Study Program
                </p>
              </div>
            </div>
            <p style={{
              color: '#94a3b8',
              fontSize: isMobile ? '13px' : '14px',
              lineHeight: 1.8, marginBottom: '20px',
            }}>
              Built a machine learning classification model to predict mobile phone price ranges
              based on hardware specifications. Applied the full data science workflow using
              SVM and Logistic Regression classifiers.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
              {['Python', 'Pandas', 'Scikit-learn', 'SVM', 'Logistic Regression', 'EDA', 'Model Evaluation'].map(s => (
                <span key={s} style={{
                  padding: '4px 10px', borderRadius: '6px',
                  backgroundColor: 'rgba(30,41,59,0.8)',
                  border: '1px solid #334155',
                  color: '#94a3b8', fontSize: '11px', fontFamily: 'monospace',
                  cursor: 'default', transition: 'all 0.2s ease',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)'
                    e.currentTarget.style.color = '#06b6d4'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#334155'
                    e.currentTarget.style.color = '#94a3b8'
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
            <div style={{
              padding: '16px', borderRadius: '12px',
              backgroundColor: 'rgba(6,182,212,0.05)',
              border: '1px solid rgba(6,182,212,0.15)',
            }}>
              <p style={{
                color: '#06b6d4', fontSize: '11px', fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px',
              }}>
                Foundation Note
              </p>
              <p style={{ color: '#94a3b8', fontSize: '12px', lineHeight: 1.7 }}>
                This project represents my Data Science foundation and technical capability —
                not a claim of professional Data Scientist experience.
              </p>
            </div>
          </div>
        </div>

        {/* ── ML Skills strip ── */}
        <div style={{
          padding: isMobile ? '24px 20px' : '32px',
          borderRadius: '16px',
          backgroundColor: 'rgba(15,23,42,0.6)',
          border: '1px solid #1e293b',
        }}>
          <p style={{
            color: '#94a3b8', fontSize: '11px', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px',
          }}>
            Data Science & ML Skills — Foundation Level
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '6px' : '8px' }}>
            {mlSkills.map(skill => (
              <span key={skill} style={{
                padding: isMobile ? '5px 10px' : '6px 14px',
                borderRadius: '8px',
                backgroundColor: 'rgba(30,41,59,0.6)',
                border: '1px solid #334155',
                color: '#cbd5e1',
                fontSize: isMobile ? '12px' : '13px',
                fontWeight: 500,
                cursor: 'default', transition: 'all 0.2s ease',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'
                  e.currentTarget.style.color = '#10b981'
                  e.currentTarget.style.backgroundColor = 'rgba(16,185,129,0.05)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#334155'
                  e.currentTarget.style.color = '#cbd5e1'
                  e.currentTarget.style.backgroundColor = 'rgba(30,41,59,0.6)'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
