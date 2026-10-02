import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import DataAndML from './components/DataAndML'
import CareerJourney from './components/CareerJourney'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#050d1a', color: '#f1f5f9' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <DataAndML />
        <CareerJourney />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
