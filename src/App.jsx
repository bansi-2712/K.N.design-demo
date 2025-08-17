import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
 
import Navbar from './Router/Nav'
 
import Home from './Router/Home'
import About from './Router/About'
import Service from './Router/Service'
import Testimonial from './Router/Testimonial'
import Portfolio from './Router/Portfolio'
import Contact from './Router/Contact'
import Footer from './Router/Footer'
 

function App() {
   
  return (
    <>
    <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Testimonial/>
      <Portfolio/>
      <Contact/>
     <Footer/>
    </>
  )
}

export default App
