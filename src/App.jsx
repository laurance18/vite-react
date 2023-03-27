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
      <Card 
        img="katie-zaferes.png"
        rating ="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  )
}

export default App
