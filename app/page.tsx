import CursorGlow from "../components/CursorGlow"
import ParticlesBackground from "../components/ParticlesBackground"
import Navbar from "../components/Navbar"
import Hero from "../components/hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Education from "../components/Education"
import Contact from "../components/Contact"
import Experience from "../components/Experience"
import SectionDivider from "../components/SectionDivider"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="relative text-white">


      <CursorGlow />
      <ParticlesBackground />

      <Navbar />

      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Contact />
      <Footer />

    </main>
  )
}