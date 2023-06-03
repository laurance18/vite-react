import { useState } from 'react'
import './App.css'

function App() {
    
    const [gameStarted, setGameStarted] = useState(false)
    
    return(
        <main>
            {
            !gameStarted ?
            <div className="font-['karla']">
                <img className="shape-top absolute right-0 w-20vw z-[-1]" src="assets/quizzical/shape-1.png" alt="Shape Top" />

                <div className="intro--container flex flex-col justify-center items-center h-screen">
                    <h1 className="font-bold text-3xl pb-2">Quizzical</h1>
                    <p className="pb-2">Answer the questions and test your knowledge!</p>
                    <button className="bg-[#F9A826] text-white font-bold font-['inter'] py-2 px-4 rounded-full mt-4 active:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]" onClick={() => setGameStarted(true)}>Start Quiz</button>
                </div>

                <img className="shape-bottom absolute bottom-0 w-18vw z-[-1]" src="assets/quizzical/shape-2.png" alt="Shape Bottom" />
            </div> : (<p>Game Started.</p>)
            }
        </main>
        
    )
}

export default App
