import { useState, useEffect } from 'react'
import { ExternalLink, Factory, Code2, Zap, BarChart3, BrainCircuit, Layers, Filter, BookOpen, FileCheck } from 'lucide-react'

const projects = [
  {
    id: 1, name: 'AI Knowledge Management Agent',
    category: 'Power Platform', tags: ['Power Platform', 'Automation'],
    description: 'Intelligent knowledge management agent built with Microsoft Copilot Studio, enabling automated information retrieval and workflow assistance.',
    stack: ['Copilot Studio', 'Power Automate', 'SharePoint', 'Microsoft Teams'],
    icon: BrainCircuit, color: '#06b6d4',
    link: null,
  },
  {
    id: 2, name: 'Work Order Management Application',
    category: 'Industrial', tags: ['Industrial', 'Software'],
    description: 'Digital work order system replacing paper-based processes in the industrial plant. Streamlines maintenance requests, approvals, and tracking.',
    stack: ['Power Apps', 'Power Automate', 'SharePoint', 'SQL'],
    icon: Factory, color: '#10b981',
    link: null,
  },
  {
    id: 3, name: 'Reporting Automation System',
    category: 'Automation', tags: ['Automation', 'Industrial'],
    description: 'Automated report generation pulling data from industrial databases and producing structured operational reports.',
    stack: ['C#', 'Oracle', 'SQL', 'Excel Automation'],
    icon: Zap, color: '#10b981',
    link: null,
  },
  {
    id: 4, name: 'GTP Daily Report Digitalization',
    category: 'Automation', tags: ['Automation', 'Power Platform'],
    description: 'Digitalized the daily GTP reporting process using Power Platform, replacing manual Excel-based workflows with automated data collection.',
    stack: ['Power Automate', 'Power Apps', 'SharePoint', 'Excel'],
    icon: Layers, color: '#06b6d4',
    link: null,
  },
  {
    id: 5, name: 'Industrial HMI / Level 2 Improvement',
    category: 'Industrial', tags: ['Industrial'],
    description: 'Ongoing improvement of industrial HMI interfaces and Level 2 control system applications in the steel manufacturing plant.',
    stack: ['C++', 'C#', 'Wonderware InTouch', 'Oracle', 'SQL'],
    icon: Factory, color: '#10b981',
    link: null,
  },
  {
    id: 6, name: 'Job Order Application',
    category: 'Software', tags: ['Software'],
    description: 'Full-stack enterprise web application for managing production job orders, tracking workflow stages, and providing real-time status visibility.',
    stack: ['PHP', 'Laravel', 'JavaScript', 'MySQL', 'HTML/CSS'],
    icon: Code2, color: '#06b6d4',
    link: 'https://krakatau-argologistics.com/kal-spk/auth',
  },
  {
    id: 7, name: 'Vendor Management System',
    category: 'Software', tags: ['Software'],
    description: 'Internal vendor management platform covering vendor registration, evaluation, procurement workflows, and document management.',
    stack: ['PHP', 'CodeIgniter', 'JavaScript', 'MySQL', 'HTML/CSS'],
    icon: Code2, color: '#06b6d4',
    link: 'https://krakatau-argologistics.com/kal-vendor/auth',
  },
  {
    id: 8, name: 'KAL Logbook System',
    category: 'Software', tags: ['Software'],
    description: 'Web-based digital logbook application for PT Krakatau Argo Logistics, handling document numbering, work order letter recording, and inter-department correspondence tracking — replacing manual paper-based logbook processes.',
    stack: ['PHP', 'Native PHP', 'MySQL', 'HTML/CSS', 'Bootstrap'],
    icon: BookOpen, color: '#10b981',
    link: 'https://krakatau-argologistics.com/kallogbook/login.php',
  },
  {
    id: 9, name: 'BTTD Online',
    category: 'Software', tags: ['Software'],
    description: 'Centralized digital system for Bukti Tanda Terima Dokumen (BTTD) at PT Krakatau Argo Logistics. Enables vendors to submit and track document receipts online, generate official BTTD reports, and supports faster finance verification and audit tracking.',
    stack: ['PHP', 'Laravel', 'MySQL', 'HTML/CSS', 'Bootstrap'],
    icon: FileCheck, color: '#06b6d4',
    link: 'https://krakatau-argologistics.com/bttd/',
  },
  {
    id: 10, name: 'Mobile Price Classification',
    category: 'Data & ML', tags: ['Data & ML'],
    description: 'Machine learning classification model predicting mobile phone price ranges based on hardware specifications.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'SVM', 'Logistic Regression'],
    icon: BarChart3, color: '#10b981',
    link: 'https://github.com/rafliauliy/Model-Machine-Learning-In-Mobile-Pricce-range-with-problem-Classification-',
  },
]

const filters = ['All', 'Industrial', 'Software', 'Automation', 'Power Platform', 'Data & ML']

// ─── Responsive Hook ───────────────────────────────────────────────────────────
function useBreakpoint() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1280
  )
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return {
    isMobile: width < 640,
    isTablet: width >= 640 && width < 1024,
    isDesktop: width >= 1024,
    width,
  }
}

// ─── ProjectCard ───────────────────────────────────────────────────────────────
function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)
  const Icon = project.icon

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        backgroundColor: 'rgba(15,23,42,0.6)',
        border: `1px solid ${hovered ? 'rgba(16,185,129,0.3)' : '#1e293b'}`,
        overflow: 'hidden',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
        cursor: 'default',
      }}
    >
      {/* Thumbnail */}
      <div style={{
        height: '140px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
        background: `linear-gradient(135deg, ${project.color}10, #050d1a)`,
      }}>
        <div style={{
          width: '56px', height: '56px',
          borderRadius: '16px',
          backgroundColor: `${project.color}20`,
          border: `1px solid ${project.color}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon size={24} color={project.color} />
        </div>
        <span style={{
          position: 'absolute', top: '12px', right: '12px',
          fontSize: '11px', padding: '3px 8px', borderRadius: '999px',
          backgroundColor: 'rgba(5,13,26,0.8)',
          border: '1px solid #334155',
          color: '#94a3b8', fontWeight: 500,
        }}>
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '20px' }}>
        <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '14px', lineHeight: 1.4, marginBottom: '8px' }}>
          {project.name}
        </h3>
        <p style={{ color: '#64748b', fontSize: '12px', lineHeight: 1.7, flex: 1, marginBottom: '16px' }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
          {project.stack.map(s => (
            <span key={s} style={{
              padding: '3px 8px', borderRadius: '4px',
              backgroundColor: 'rgba(30,41,59,0.8)',
              border: '1px solid #334155',
              color: '#64748b', fontSize: '10px',
              fontFamily: 'monospace',
            }}>
              {s}
            </span>
          ))}
        </div>

        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              fontSize: '12px', fontWeight: 600,
              color: hovered ? '#10b981' : '#64748b',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              width: 'fit-content',
            }}
          >
            View Details <ExternalLink size={11} />
          </a>
        ) : (
          <span style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            fontSize: '12px', fontWeight: 600,
            color: '#334155', cursor: 'default',
          }}>
            Internal Project <ExternalLink size={11} />
          </span>
        )}
      </div>
    </div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function Projects() {
  const [active, setActive] = useState('All')
  const { isMobile, isTablet } = useBreakpoint()

  const filtered = active === 'All' ? projects : projects.filter(p => p.tags.includes(active))

  // ── Responsive values ──
  const sectionPadding = isMobile ? '64px 0' : '96px 0'
  const containerPadding = isMobile ? '0 16px' : isTablet ? '0 24px' : '0 32px'
  const headingSize = isMobile ? '32px' : isTablet ? '40px' : '48px'
  const gridCols = isMobile
    ? '1fr'
    : isTablet
    ? 'repeat(2, 1fr)'
    : 'repeat(auto-fill, minmax(280px, 1fr))'

  return (
    <section id="projects" style={{ padding: sectionPadding }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: containerPadding }}>

        {/* Header */}
        <div style={{ marginBottom: isMobile ? '32px' : '48px' }}>
          <p style={{
            color: '#10b981', fontSize: '12px', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px',
          }}>
            Projects
          </p>
          <h2 style={{
            fontSize: headingSize, fontWeight: 900, color: '#f1f5f9',
            lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '16px',
          }}>
            Featured <span style={{ color: '#10b981' }}>Work</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: isMobile ? '14px' : '16px', maxWidth: '520px' }}>
            A selection of systems, applications, and automation solutions built across industrial and software domains.
          </p>
        </div>

        {/* Filters */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'center',
          gap: '8px', marginBottom: '40px',
        }}>
          <Filter size={14} color="#64748b" />
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                padding: isMobile ? '5px 12px' : '6px 16px',
                borderRadius: '8px',
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: active === f ? 700 : 500,
                border: active === f ? 'none' : '1px solid #334155',
                backgroundColor: active === f ? '#10b981' : 'rgba(30,41,59,0.6)',
                color: active === f ? '#050d1a' : '#94a3b8',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                // Touch-friendly tap area
                minHeight: '36px',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: gridCols,
          gap: isMobile ? '16px' : '20px',
        }}>
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  )
}
