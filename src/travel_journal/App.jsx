// MOVE TO SRC FOLDER BEFORE USING

import { useState } from 'react'
import './App.css'
import Navbar from './travel_journal/components/Navbar'
import Hero from './travel_journal/components/Hero'
import Footer from './travel_journal/components/Footer'

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    )
}

export default App
