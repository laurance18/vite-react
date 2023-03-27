import { useState } from 'react'
import './App.css'
import Navbar from './airbnb_clone/components/Navbar.jsx'
import Hero from './airbnb_clone/components/Hero.jsx'
import Card from './airbnb_clone/components/Card'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
    </div>
  )
}

export default App
