import { useState } from 'react'
import './App.css'
import Die from './tenzies/components/Die'
import {nanoid} from "nanoid"

function App() {
    
    function holdDice(id) {
        setDice(prevDice => {
          return prevDice.map(die => {
            if (die.id === id) {
              return {
                ...die,
                isHeld: !die.isHeld
              }
            }
            return die
          })
        })
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
        setDice(prevDice => {
          const newDice = prevDice.map(die => {
            if (die.isHeld) {
              return die
            } else {
              return {
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: die.id
              }
            }
          })
          return newDice
        })
    }

    return (
        <div className="App">
            <main>
                <h1 className="title">Tenzies</h1>
                <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className="dice-container">
                    {diceElements}
                </div>
                <button className="roll-dice" onClick={rollDice}>Roll</button>
            </main>
        </div>
    )
}

export default App
