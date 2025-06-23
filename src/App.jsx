import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import toast, { Toaster } from 'react-hot-toast';

function App() {
   return (
    <>
   <div> 
    <Navbar />
    <Home />
    <About />
    <Portfolio />
    <Experience />
    <Contact/>
    <Footer/>
    </div>
    <Toaster/>
    </>

  )
}

export default App
