import { useState } from 'react'
import './App.css'
import Header from './meme_generator/components/Header'
import Meme from './meme_generator/components/Meme'

function App() {
    return (
        <div className="App">
            <Header />
            <Meme />
        </div>
    )
}

export default App
