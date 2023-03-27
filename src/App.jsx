import { useState } from 'react'
import './App.css'
import Navbar from './airbnb_clone/components/Navbar.jsx'
import Hero from './airbnb_clone/components/Hero.jsx'
import Card from './airbnb_clone/components/Card'
import data from './airbnb_clone/data.js'

function App() {
    const cards = data.map(item => {
        console.log(item.coverImg)
        return (<Card 
            key={item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
            openSpots={item.openSpots}
        />)
    })
  
    return (
        <div className="App">
        <Navbar />
        <Hero />
        <section className="cards-list">
            {cards}
        </section>
        </div>
    )
}

export default App
