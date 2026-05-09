import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import ParticlesBackground from './components/ParticlesBackground'
import CustomCursor from './components/CustomCursor'
import BackToTop from './components/BackToTop'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1e] to-[#0a0a0f]">
      <CustomCursor />
      <ParticlesBackground />
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
