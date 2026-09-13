import Navbar from './components/Navbar.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Footer from './components/Footer.jsx'

import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Kinetic from './sections/Kinetic.jsx'
import AISection from './sections/AISection.jsx'
import Leadership from './sections/Leadership.jsx'
import Recognition from './sections/Recognition.jsx'
import Skills from './sections/Skills.jsx'
import Philosophy from './sections/Philosophy.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-blue focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Kinetic />
        <AISection />
        <Leadership />
        <Recognition />
        <Skills />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
