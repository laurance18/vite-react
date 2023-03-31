import './Meme.css';
import memesData from '../memesData';
import { useState } from 'react'

export default function Meme() {
    
    const [memeImage, setMemeImage] = useState('https://i.imgflip.com/1bij.jpg')
    
    function getMemeImage() {
        setMemeImage(memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)].url);  
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} alt="meme"/>
        </main>
    )
}
