import './Meme.css';
import memesData from '../memesData';
import { useState } from 'react'

export default function Meme() {
    
    function getMemeImage() {
        setMeme(prevState => {
            let new_url = memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)].url
            return {
                ...prevState,
                randomImage: new_url
            }
        });  
    }

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)

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
            <img src={meme.randomImage} alt="meme" className='meme--image'/>
        </main>
    )
}
