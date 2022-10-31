import React from 'react'
import About from './components/About'
import { ContactUs } from './components/Contact'
import Home from './components/Home'
import Service from './components/Service'
import Skills from './components/Skills'
import Works from './components/Works'

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Service />
      <Works />
      <Skills />
      <ContactUs />
    </>
  )
}

export default App
