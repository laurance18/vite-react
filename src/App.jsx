import { useState } from 'react'
import './App.css'
import Die from './tenzies/components/Die'

function App() {
    const [dice, setDice] = useState(allNewDice())
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(Math.ceil(Math.random() * 6))
        }
        return newDice
    }
    
    const diceElements = dice.map(die => <Die value={die} />)

    function rollDice() {
        setDice(allNewDice())
    }

    return (
        <div className="App">
            <main>
                <div className="dice-container">
                    {diceElements}
                </div>
                <button className="roll-dice" onClick={rollDice}>Roll</button>
            </main>
        </div>
    )
}

export default App
