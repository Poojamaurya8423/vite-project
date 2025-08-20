import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import BookingTour from './components/BookingTour.jsx'
import './App.css'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingTour />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
