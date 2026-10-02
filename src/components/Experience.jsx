import { useState, useEffect } from 'react'
import { Factory, Code2, GraduationCap, Calendar, MapPin, BrainCircuit } from 'lucide-react'

const experiences = [
  {
    id: 1,
    role: 'Software Automation Engineer',
    company: 'PT POSCO DX Indonesia',
    period: 'May 2025 — Present',
    location: 'Krakatau POSCO, Cilegon, Banten, Indonesia',
    type: 'Industrial Automation / IT-OT',
    icon: Factory,
    color: '#10b981',
    description: 'Responsible for supporting, maintaining, and enhancing Level 2 Automation Systems across CPCT (Coal Preparation & Coke Tracking), COB (Coke Oven Battery), and GTP (Gas Treatment Plant) operations at Krakatau POSCO. Focused on industrial automation, software development, system integration, troubleshooting, and digital transformation initiatives that improve operational efficiency, system reliability, and data-driven decision-making.',
    responsibilities: [
      'Maintain, monitor, and optimize Level 2 Process Computer Systems supporting critical steel manufacturing and production operations',
      'Support Level 2 automation systems across CPCT (Coal Preparation & Coke Tracking), COB (Coke Oven Battery), and GTP (Gas Treatment Plant) areas',
      'Develop, maintain, and enhance industrial applications using C++, C#, VB.NET, SQL, Windows Scripts, and PowerShell',
      'Support and troubleshoot SCADA/HMI systems using Wonderware InTouch and industrial communication platforms',
      'Manage, analyze, and optimize Oracle and SQL Server databases used for industrial data processing, production reporting, and system integration',
      'Diagnose and resolve automation, MES, database, application, interface, and communication issues to maintain Level 2 system reliability',
      'Support integration between Level 2 systems, MES, PLC/DCS, databases, middleware, and other industrial platforms',
      'Develop software solutions, utilities, and automation tools to improve operational efficiency and reduce repetitive manual processes',
      'Develop digitalization solutions using Microsoft Power Apps, Power Automate, SharePoint, and custom applications',
      'Implement workflow automation and digital work management solutions for engineering and operational processes',
      'Build AI-powered Knowledge Management and troubleshooting solutions using Microsoft Copilot Studio',
      'Analyze industrial data and system information to support reporting, troubleshooting, operational monitoring, and data-driven decision-making',
      'Collaborate with production, maintenance, engineering, and IT/OT teams to support continuous improvement and smart manufacturing initiatives',
    ],
    stack: [
      'C++', 'C#', 'VB.NET', 'SQL', 'Windows Scripts', 'PowerShell',
      'Level 2 Process Computer', 'Manufacturing Execution Systems (MES)', 'SCADA/HMI', 'Wonderware InTouch',
      'PLC', 'DCS', 'KEPWARE', 'Middleware', 'UCUBE API', 'SUPRACOK HMI',
      'Oracle', 'SQL Server',
      'Power Apps', 'Power Automate', 'SharePoint', 'Copilot Studio',
      'IT/OT Integration', 'Industrial Automation', 'Digital Transformation',
    ],
  },
  {
    id: 2,
    role: 'IT Staff / Full Stack Web Developer',
    company: 'PT Krakatau Argo Logistics',
    period: 'Dec 2023 — May 2025',
    location: 'Cilegon, Banten, Indonesia',
    type: 'IT / Software Development',
    icon: Code2,
    color: '#06b6d4',
    description: 'Responsible for IT operations, infrastructure support, and full-stack web development at PT Krakatau Argo Logistics. Beyond maintaining network, hardware, software, and IT infrastructure reliability, developed and implemented internal enterprise applications that digitalized manual workflows across operations, finance, marketing, administration, and vendor coordination.',
    responsibilities: [
      'Provided day-to-day IT support including network maintenance, hardware and software troubleshooting, printer support, user assistance, and IT infrastructure monitoring',
      'Developed and maintained full-stack web applications to digitalize internal business processes and replace manual or legacy workflows',
      'Developed the Job Order (Surat Perintah Kerja) Application, enabling vendors to submit trucking job requests digitally with multi-level approval workflows',
      'Built the BTTD (Bukti Tanda Terima Dokumen) Online System as a centralized document receipt and vendor invoice database',
      'Developed the Tariff Management System for the Marketing division to manage transportation tariff data and generate customer service job orders',
      'Engineered MRA (Memo Realisasi Anggaran) Online, a browser-based budget request and realization system to replace the legacy RDP-based INSTACS application',
      'Created a Digital Logbook System for managing document numbering and tracking inter-department correspondence',
      'Designed and maintained relational databases supporting internal enterprise applications and business workflows',
      'Implemented authentication, authorization, approval workflows, database transactions, reporting, and business logic across internal web applications',
      'Developed and integrated RESTful APIs to support communication between application modules and business systems',
      'Managed application deployment, hosting, DNS configuration, and web infrastructure for internal applications',
      'Collaborated with Operations, Finance, Marketing, Administration, and other business users to analyze requirements',
      'Supported continuous business process improvement through software development, automation, and digitalization initiatives',
    ],
    stack: [
      'PHP', 'Laravel', 'CodeIgniter', 'JavaScript', 'React', 'Next.js', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS',
      'SQL', 'MySQL', 'PostgreSQL',
      'RESTful APIs', 'Microservices', 'Monolithic Architecture', 'Git',
      'Cloudflare', 'Cloudflare DNS', 'Hostinger',
      'MikroTik', 'Networking', 'Hardware Support', 'Printer Support', 'Server Management',
      'Business Process Automation', 'Workflow Digitalization', 'Database Design', 'Full Stack Development',
    ],
  },
  {
    id: 3,
    role: 'Machine Learning / Data Science Apprentice',
    company: 'Zenius Education – Kampus Merdeka',
    period: '2022',
    location: 'Indonesia',
    type: 'Machine Learning / Data Science',
    icon: BrainCircuit,
    color: '#a78bfa',
    description: 'Participated in a Kampus Merdeka Machine Learning and Data Science apprenticeship program at Zenius Education in 2022, developing foundational skills in Python, data analysis, data preprocessing, machine learning, and model evaluation.',
    responsibilities: [
      'Learned fundamental concepts of Data Science and Machine Learning',
      'Performed data exploration, cleaning, preprocessing, and preparation using Python and Pandas',
      'Applied exploratory data analysis to understand patterns and relationships within datasets',
      'Learned supervised machine learning and classification concepts',
      'Built and experimented with machine learning models using scikit-learn',
      'Evaluated classification models using appropriate machine learning evaluation techniques',
      'Worked with end-to-end machine learning workflows from data preparation to model evaluation',
      'Developed a final project focused on multiclass classification for Mobile Price Prediction',
      'Strengthened analytical thinking, problem-solving, and data-driven decision-making skills',
    ],
    stack: [
      'Python', 'Pandas', 'NumPy', 'scikit-learn',
      'Machine Learning', 'Data Science', 'Data Preprocessing',
      'Exploratory Data Analysis (EDA)', 'Multiclass Classification',
      'Model Evaluation', 'Data Visualization', 'Jupyter Notebook',
    ],
  },
  {
    id: 4,
    role: 'Multimedia Teacher',
    company: 'SMK Jamiatul Ikhwan Serang',
    period: 'Sep 2021 — Jun 2023',
    location: 'Serang, Banten, Indonesia',
    type: 'Education',
    icon: GraduationCap,
    color: '#64748b',
    description: 'Taught multimedia and technology subjects, developing curriculum and practical learning materials for students.',
    responsibilities: [
      'Delivered multimedia and technology curriculum',
      'Developed practical learning materials and exercises',
      'Mentored students in technical and creative projects',
    ],
    stack: ['Multimedia', 'Technology Education', 'Curriculum Development'],
  },
]

export default function Experience() {
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

  const innerPad   = isMobile ? '0 20px' : isTablet ? '0 28px' : '0 32px'
  const sectionPad = isMobile ? '64px 0' : '96px 0'

  return (
    <section id="experience" style={{ padding: sectionPad, backgroundColor: 'rgba(15,23,42,0.3)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: innerPad }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: isMobile ? '40px' : '64px' }}>
          <p style={{
            color: '#10b981', fontSize: '12px', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px',
          }}>
            Experience
          </p>
          <h2 style={{
            fontSize: isMobile ? '32px' : isTablet ? '40px' : '48px',
            fontWeight: 900, color: '#f1f5f9',
            lineHeight: 1.1, letterSpacing: '-0.02em',
          }}>
            Professional <span style={{ color: '#10b981' }}>Timeline</span>
          </h2>
        </div>

        {/* ── Timeline ── */}
        <div style={{ position: 'relative' }}>

          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: isMobile ? '16px' : '28px',
            top: 0, bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, rgba(16,185,129,0.4), rgba(51,65,85,0.4), transparent)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '28px' : '40px' }}>
            {experiences.map(exp => {
              const Icon = exp.icon
              return (
                <div key={exp.id} style={{
                  position: 'relative',
                  paddingLeft: isMobile ? '44px' : '72px',
                }}>

                  {/* Dot */}
                  <div style={{
                    position: 'absolute',
                    left: isMobile ? '4px' : '16px',
                    top: '20px',
                    width: isMobile ? '24px' : '24px',
                    height: isMobile ? '24px' : '24px',
                    borderRadius: '50%',
                    border: `2px solid ${exp.color}`,
                    backgroundColor: `${exp.color}20`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{
                      width: '8px', height: '8px',
                      borderRadius: '50%',
                      backgroundColor: exp.color,
                    }} />
                  </div>

                  {/* Card */}
                  <div style={{
                    borderRadius: '16px',
                    backgroundColor: 'rgba(15,23,42,0.6)',
                    border: '1px solid #1e293b',
                    overflow: 'hidden',
                    transition: 'border-color 0.3s ease',
                  }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = `${exp.color}40`}
                    onMouseLeave={e => e.currentTarget.style.borderColor = '#1e293b'}
                  >

                    {/* Card header */}
                    <div style={{ padding: isMobile ? '16px 16px 12px' : '24px 24px 16px' }}>

                      {/* Role + meta — stack vertically on mobile */}
                      <div style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '12px',
                        marginBottom: '12px',
                      }}>
                        {/* Left: type badge + role + company */}
                        <div>
                          <span style={{
                            fontSize: '11px', fontWeight: 600,
                            padding: '3px 10px', borderRadius: '999px',
                            backgroundColor: `${exp.color}15`,
                            border: `1px solid ${exp.color}30`,
                            color: exp.color,
                            display: 'inline-block', marginBottom: '8px',
                          }}>
                            {exp.type}
                          </span>
                          <h3 style={{
                            color: '#f1f5f9', fontWeight: 700,
                            fontSize: isMobile ? '16px' : '20px',
                            margin: 0, lineHeight: 1.3,
                          }}>
                            {exp.role}
                          </h3>
                          <p style={{ color: '#94a3b8', fontSize: '14px', marginTop: '4px' }}>
                            {exp.company}
                          </p>
                        </div>

                        {/* Right: period + location */}
                        <div style={{
                          textAlign: isMobile ? 'left' : 'right',
                          flexShrink: 0,
                        }}>
                          <div style={{
                            display: 'flex', alignItems: 'center', gap: '6px',
                            color: '#64748b', fontSize: '12px',
                            justifyContent: isMobile ? 'flex-start' : 'flex-end',
                            marginBottom: '4px',
                          }}>
                            <Calendar size={11} />
                            <span>{exp.period}</span>
                          </div>
                          <div style={{
                            display: 'flex', alignItems: 'center', gap: '6px',
                            color: '#64748b', fontSize: '12px',
                            justifyContent: isMobile ? 'flex-start' : 'flex-end',
                          }}>
                            <MapPin size={11} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p style={{
                        color: '#94a3b8',
                        fontSize: isMobile ? '13px' : '14px',
                        lineHeight: 1.7,
                      }}>
                        {exp.description}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div style={{ padding: isMobile ? '0 16px 12px' : '0 24px 16px' }}>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {exp.responsibilities.map(r => (
                          <li key={r} style={{
                            display: 'flex', alignItems: 'flex-start', gap: '8px',
                            color: '#94a3b8',
                            fontSize: isMobile ? '13px' : '14px',
                          }}>
                            <span style={{
                              marginTop: '6px',
                              width: '6px', height: '6px',
                              borderRadius: '50%',
                              backgroundColor: `${exp.color}60`,
                              flexShrink: 0,
                            }} />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack */}
                    <div style={{
                      padding: isMobile ? '12px 16px 16px' : '16px 24px 24px',
                      borderTop: '1px solid #1e293b',
                    }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                        {exp.stack.map(s => (
                          <span key={s} style={{
                            padding: isMobile ? '3px 8px' : '4px 10px',
                            borderRadius: '6px',
                            backgroundColor: 'rgba(30,41,59,0.8)',
                            border: '1px solid #334155',
                            color: '#94a3b8',
                            fontSize: isMobile ? '11px' : '12px',
                            fontFamily: 'monospace',
                          }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
