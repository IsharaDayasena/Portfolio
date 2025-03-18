import { use, useEffect } from 'react'
import Hero from './components/hero/Hero'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Education from './components/education/Education'
import Services from './components/services.jsx/Services'


function App() {
useEffect(() => {
  AOS.init({
    duration: 1000,
    
  })
},[])

  return (
   <main className='bg-[#0d182e]'>
    <Hero/>
    <Skills/>
    <Projects/>
    <Services/>
    <Education/>
    <Contact/>
    <Footer/>
   </main>
  )
}

export default App
