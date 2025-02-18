import React from 'react'
import Navbar from './components/Navbar'
import Herobox from './components/Herobox'
import About from './components/About'
import Services from './components/Services'
import Task from './components/Task'
import Reviews from './components/Reviews'
import Project from './components/Project'
import Inspire from './components/Inspire'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {

  return (
    <div className='bg-[#202020] overflow-hidden relative'>
      <Navbar/>
      <Herobox/>
      <About/>
      <Services/>
      <Task/>
      <Reviews/>
      <Project/>
      <Inspire/>
      <Contact/>
      <Footer/>
    </div>
    
  )
}

export default App
