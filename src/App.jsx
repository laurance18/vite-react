import { useState } from 'react'
import './App.css'
import Die from './tenzies/components/Die'
import {nanoid} from "nanoid"

function App() {
    
    function holdDice(id) {
        console.log(id)
    }
    
    const [dice, setDice] = useState(allNewDice())
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6), 
                isHeld: false,
                id: nanoid()
            })
        }
        return newDice
    }
    
    const diceElements = dice.map(die => (
        <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>
    ))

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
