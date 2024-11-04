import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Services from './components/Services'

function App() {

  return (
    <div className='bg-[url("src/assets/947983147283.jpg")] bg-repeat-round'>
      <div className='bg-blackOverlay bg-cover font-grotesk'>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
