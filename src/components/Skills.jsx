import { useState, useEffect } from 'react'
import { Code2, Globe, Factory, Database, Layers, BrainCircuit } from 'lucide-react'

const skillGroups = [
  {
    id: 'se',
    label: 'Software Engineering',
    icon: Code2,
    color: '#10b981',
    skills: [
      'C++', 'C#', 'VB.NET', 'PHP', 'Python', 'JavaScript',
      'PowerShell', 'Windows Scripts',
      'Laravel', 'CodeIgniter', 'React', 'Next.js',
      'RESTful APIs', 'Git',
    ],
  },
  {
    id: 'web',
    label: 'Web & Enterprise Application Development',
    icon: Globe,
    color: '#06b6d4',
    skills: [
      'Full Stack Development', 'Enterprise Web Applications',
      'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap',
      'Authentication & Authorization', 'Approval Workflows',
      'Business Logic Development', 'Application Deployment',
      'Monolithic Architecture',
    ],
  },
  {
    id: 'iot',
    label: 'Industrial Automation & IT/OT',
    icon: Factory,
    color: '#10b981',
    skills: [
      'Level 2 Process Computer Systems', 'Industrial Automation', 'IT/OT Integration',
      'Manufacturing Execution Systems (MES)', 'SCADA / HMI', 'Wonderware InTouch',
      'PLC', 'DCS', 'Kepware', 'Industrial Middleware',
      'Industrial Communication', 'Process Monitoring',
      'System Integration', 'Automation Troubleshooting',
    ],
  },
  {
    id: 'db',
    label: 'Database & Data Management',
    icon: Database,
    color: '#06b6d4',
    skills: [
      'Oracle', 'SQL Server', 'MySQL', 'PostgreSQL', 'SQL',
      'Relational Database Design', 'Database Integration',
      'Database Troubleshooting', 'Data Processing', 'Data Reporting',
    ],
  },
  {
    id: 'ms',
    label: 'Power Platform & Digital Transformation',
    icon: Layers,
    color: '#10b981',
    skills: [
      'Power Apps', 'Power Automate', 'SharePoint',
      'Copilot Studio', 'Microsoft Teams', 'Microsoft 365', 'Excel Automation',
      'Workflow Automation', 'Business Process Automation',
      'Process Digitalization', 'Digital Work Management', 'Knowledge Management',
    ],
  },
  {
    id: 'ml',
    label: 'Data Science & AI',
    icon: BrainCircuit,
    color: '#06b6d4',
    note: 'Machine Learning foundation & intelligent automation',
    skills: [
      'Python', 'Pandas', 'NumPy', 'Scikit-learn',
      'Machine Learning', 'Data Preprocessing', 'Exploratory Data Analysis (EDA)',
      'Data Cleaning', 'Data Visualization',
      'Supervised Learning', 'Multiclass Classification', 'Model Evaluation',
      'Jupyter Notebook', 'AI Knowledge Management',
    ],
  },
]

export default function Skills() {
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

  const sectionPad   = isMobile ? '64px 0'  : '96px 0'
  const innerPad     = isMobile ? '0 20px'  : isTablet ? '0 28px' : '0 32px'
  const headingSize  = isMobile ? '32px'    : isTablet ? '40px'   : '48px'
  const gridCols     = isMobile
    ? '1fr'
    : isTablet
    ? 'repeat(2, 1fr)'
    : 'repeat(auto-fill, minmax(340px, 1fr))'

  return (
    <section id="skills" style={{ padding: sectionPad, backgroundColor: 'rgba(15,23,42,0.3)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: innerPad }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: isMobile ? '40px' : '64px' }}>
          <p style={{
            color: '#10b981', fontSize: '12px', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px',
          }}>
            Skills
          </p>
          <h2 style={{
            fontSize: headingSize, fontWeight: 900, color: '#f1f5f9',
            lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '16px',
          }}>
            Technical <span style={{ color: '#10b981' }}>Capabilities</span>
          </h2>
          <p style={{
            color: '#94a3b8',
            fontSize: isMobile ? '14px' : '16px',
            maxWidth: '520px', lineHeight: 1.7,
          }}>
            Skills built across software development, industrial systems, and digital transformation — no percentage bars, just real capabilities.
          </p>
        </div>

        {/* ── Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: gridCols,
          gap: isMobile ? '16px' : '20px',
        }}>
          {skillGroups.map(group => {
            const Icon = group.icon
            return (
              <div key={group.id} style={{
                padding: isMobile ? '20px' : '24px',
                borderRadius: '16px',
                backgroundColor: 'rgba(15,23,42,0.6)',
                border: '1px solid #1e293b',
                transition: 'border-color 0.3s ease',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(16,185,129,0.25)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#1e293b'}
              >
                {/* Group header */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  marginBottom: isMobile ? '16px' : '20px',
                }}>
                  <div style={{
                    width: '36px', height: '36px',
                    borderRadius: '10px',
                    backgroundColor: `${group.color}15`,
                    border: `1px solid ${group.color}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={16} color={group.color} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{
                      color: '#e2e8f0', fontWeight: 700,
                      fontSize: isMobile ? '13px' : '14px',
                      margin: 0,
                      // Long labels wrap gracefully on mobile
                      lineHeight: 1.4,
                    }}>
                      {group.label}
                    </h3>
                    {group.note && (
                      <p style={{
                        color: '#64748b',
                        fontSize: '11px',
                        marginTop: '2px',
                        lineHeight: 1.4,
                      }}>
                        {group.note}
                      </p>
                    )}
                  </div>
                </div>

                {/* Skill tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '6px' : '8px' }}>
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      style={{
                        padding: isMobile ? '5px 10px' : '6px 12px',
                        borderRadius: '8px',
                        fontSize: isMobile ? '11px' : '12px',
                        fontWeight: 500,
                        backgroundColor: 'rgba(30,41,59,0.6)',
                        border: '1px solid #334155',
                        color: '#cbd5e1',
                        cursor: 'default',
                        transition: 'all 0.2s ease',
                        // Prevent very long skill names from breaking layout
                        wordBreak: 'break-word',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = `${group.color}50`
                        e.currentTarget.style.color = group.color
                        e.currentTarget.style.backgroundColor = `${group.color}08`
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
