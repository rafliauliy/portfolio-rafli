import { useState, useEffect } from 'react'
import { Code2, Factory, Network, Layers, Database, BrainCircuit, ArrowRight } from 'lucide-react'

const stages = [
  {
    id: 1, icon: Code2, label: 'Software Development', period: 'Foundation', color: '#64748b',
    desc: 'Full-stack web development, enterprise applications, PHP / Laravel / CodeIgniter.',
    skills: ['PHP', 'Laravel', 'JavaScript', 'SQL'], isFuture: false,
  },
  {
    id: 2, icon: Factory, label: 'Industrial Automation', period: 'Expansion', color: '#10b981',
    desc: 'Level 2 industrial systems, SCADA/HMI, Wonderware InTouch, C++ / C#, steel manufacturing.',
    skills: ['C++', 'C#', 'SCADA/HMI', 'Oracle'], isFuture: false,
  },
  {
    id: 3, icon: Network, label: 'IT/OT Systems', period: 'Deepening', color: '#10b981',
    desc: 'Bridging information technology and operational technology — real-time monitoring and integration.',
    skills: ['IT/OT', 'Real-time', 'Oracle', 'SQL'], isFuture: false,
  },
  {
    id: 4, icon: Layers, label: 'Digital Transformation', period: 'Broadening', color: '#06b6d4',
    desc: 'Microsoft Power Platform, workflow automation, work order digitalization, AI agents.',
    skills: ['Power Automate', 'Power Apps', 'Copilot Studio', 'SharePoint'], isFuture: false,
  },
  {
    id: 5, icon: Database, label: 'Industrial Data', period: 'Convergence', color: '#06b6d4',
    desc: 'Process data, sensor data, industrial databases — understanding data at the source.',
    skills: ['Process Data', 'Sensor Data', 'Oracle', 'Integration'], isFuture: false,
  },
  {
    id: 6, icon: BrainCircuit, label: 'Data Science & ML', period: 'Future Direction', color: '#10b981',
    desc: 'Applying machine learning to industrial data — convergence of software, domain, and intelligence.',
    skills: ['Python', 'Pandas', 'ML', 'Industrial DS'], isFuture: true,
  },
]

function StageCard({ stage, isMobile }) {
  const Icon = stage.icon
  return (
    <div style={{
      padding: isMobile ? '14px' : '16px',
      borderRadius: '12px',
      backgroundColor: stage.isFuture ? 'rgba(16,185,129,0.04)' : 'rgba(15,23,42,0.6)',
      border: stage.isFuture ? '1px dashed rgba(16,185,129,0.3)' : '1px solid #1e293b',
      transition: 'border-color 0.2s ease',
      height: '100%',
    }}
      onMouseEnter={e => { if (!stage.isFuture) e.currentTarget.style.borderColor = 'rgba(16,185,129,0.25)' }}
      onMouseLeave={e => { if (!stage.isFuture) e.currentTarget.style.borderColor = '#1e293b' }}
    >
      {stage.isFuture && (
        <span style={{
          display: 'inline-block', fontSize: '9px', fontWeight: 700,
          color: '#10b981', backgroundColor: 'rgba(16,185,129,0.1)',
          border: '1px solid rgba(16,185,129,0.2)',
          padding: '2px 8px', borderRadius: '999px',
          letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px',
        }}>
          Future Direction
        </span>
      )}
      <p style={{
        color: '#64748b', fontSize: '10px', fontWeight: 600,
        textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px',
      }}>
        {stage.period}
      </p>
      <h3 style={{
        color: '#f1f5f9', fontWeight: 700,
        fontSize: isMobile ? '13px' : '13px',
        lineHeight: 1.3, marginBottom: '8px',
      }}>
        {stage.label}
      </h3>
      <p style={{
        color: '#64748b', fontSize: '11px',
        lineHeight: 1.6, marginBottom: '12px',
      }}>
        {stage.desc}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
        {stage.skills.map(s => (
          <span key={s} style={{
            padding: '2px 6px', borderRadius: '4px',
            backgroundColor: 'rgba(30,41,59,0.8)',
            border: '1px solid #334155',
            color: '#64748b', fontSize: '9px', fontFamily: 'monospace',
          }}>
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function CareerJourney() {
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

  const sectionPad  = isMobile ? '64px 0'  : '96px 0'
  const innerPad    = isMobile ? '0 20px'  : isTablet ? '0 28px' : '0 32px'
  const headingSize = isMobile ? '32px'    : isTablet ? '40px'   : '48px'

  return (
    <section id="journey" style={{ padding: sectionPad, backgroundColor: 'rgba(15,23,42,0.3)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: innerPad }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: isMobile ? '40px' : '64px' }}>
          <p style={{
            color: '#10b981', fontSize: '12px', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px',
          }}>
            Career Journey
          </p>
          <h2 style={{
            fontSize: headingSize, fontWeight: 900, color: '#f1f5f9',
            lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '16px',
          }}>
            One Connected <span style={{ color: '#10b981' }}>Progression</span>
          </h2>
          <p style={{
            color: '#94a3b8',
            fontSize: isMobile ? '14px' : '16px',
            maxWidth: '640px', lineHeight: 1.8,
          }}>
            Each stage of my career builds on the last — forming a unique combination of
            software engineering, industrial systems knowledge, and data capability.
          </p>
        </div>

        {/* ── DESKTOP: 6-column horizontal ── */}
        {!isMobile && !isTablet && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '0',
            marginBottom: '40px',
          }}>
            {stages.map((stage, i) => {
              const Icon = stage.icon
              const isLast = i === stages.length - 1
              return (
                <div key={stage.id} style={{ display: 'flex', flexDirection: 'column' }}>
                  {/* Icon + connector */}
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                      backgroundColor: `${stage.color}20`,
                      border: `2px solid ${stage.color}60`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'transform 0.2s ease', cursor: 'default',
                    }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <Icon size={18} color={stage.color} />
                    </div>
                    {!isLast && (
                      <div style={{
                        flex: 1, height: '1px',
                        background: 'linear-gradient(to right, #334155, #1e293b)',
                        margin: '0 8px',
                      }} />
                    )}
                  </div>
                  {/* Card */}
                  <div style={{ marginRight: isLast ? 0 : '12px' }}>
                    <StageCard stage={stage} isMobile={false} />
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* ── TABLET: 2×3 grid ── */}
        {isTablet && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
            marginBottom: '40px',
          }}>
            {stages.map((stage) => {
              const Icon = stage.icon
              return (
                <div key={stage.id}>
                  {/* Icon header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '10px',
                      backgroundColor: `${stage.color}20`,
                      border: `2px solid ${stage.color}60`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={16} color={stage.color} />
                    </div>
                    <span style={{ color: '#64748b', fontSize: '11px', fontWeight: 600 }}>
                      {stage.period}
                    </span>
                  </div>
                  <StageCard stage={stage} isMobile={false} />
                </div>
              )
            })}
          </div>
        )}

        {/* ── MOBILE: vertical timeline ── */}
        {isMobile && (
          <div style={{ position: 'relative', marginBottom: '32px' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: '17px', top: 0, bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, rgba(16,185,129,0.4), rgba(51,65,85,0.3), transparent)',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {stages.map((stage) => {
                const Icon = stage.icon
                return (
                  <div key={stage.id} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    {/* Icon dot */}
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
                      backgroundColor: `${stage.color}20`,
                      border: `2px solid ${stage.color}60`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      zIndex: 1,
                    }}>
                      <Icon size={15} color={stage.color} />
                    </div>
                    {/* Card */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <StageCard stage={stage} isMobile={true} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* ── Summary banner ── */}
        <div style={{
          padding: isMobile ? '20px 16px' : '32px',
          borderRadius: '16px',
          background: 'linear-gradient(to right, rgba(16,185,129,0.08), rgba(15,23,42,0.4), rgba(6,182,212,0.08))',
          border: '1px solid rgba(16,185,129,0.2)',
        }}>
          {/* Desktop/Tablet: horizontal flow */}
          {!isMobile && (
            <div style={{
              display: 'flex', flexWrap: 'wrap',
              alignItems: 'center', justifyContent: 'center', gap: '8px',
            }}>
              <span style={{ color: '#10b981', fontWeight: 700, fontSize: '14px' }}>Software Engineering</span>
              <ArrowRight size={13} color="#334155" />
              <span style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '14px' }}>Industrial Automation</span>
              <ArrowRight size={13} color="#334155" />
              <span style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '14px' }}>IT/OT</span>
              <ArrowRight size={13} color="#334155" />
              <span style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '14px' }}>Digital Transformation</span>
              <ArrowRight size={13} color="#334155" />
              <span style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '14px' }}>Industrial Data</span>
              <ArrowRight size={13} color="#334155" />
              <span style={{ color: '#06b6d4', fontWeight: 700, fontSize: '14px' }}>Data Science & ML</span>
            </div>
          )}

          {/* Mobile: vertical stack */}
          {isMobile && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              {[
                { label: 'Software Engineering',   color: '#10b981' },
                { label: 'Industrial Automation',  color: '#e2e8f0' },
                { label: 'IT/OT',                  color: '#e2e8f0' },
                { label: 'Digital Transformation', color: '#e2e8f0' },
                { label: 'Industrial Data',        color: '#e2e8f0' },
                { label: 'Data Science & ML',      color: '#06b6d4' },
              ].map((item, i, arr) => (
                <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <span style={{ color: item.color, fontWeight: 700, fontSize: '13px' }}>
                    {item.label}
                  </span>
                  {i < arr.length - 1 && (
                    <div style={{
                      width: '1px', height: '12px',
                      backgroundColor: '#334155',
                    }} />
                  )}
                </div>
              ))}
            </div>
          )}

          <p style={{
            textAlign: 'center', color: '#475569',
            fontSize: '12px', marginTop: '12px',
          }}>
            A single connected career progression — each stage building on the last.
          </p>
        </div>

      </div>
    </section>
  )
}
