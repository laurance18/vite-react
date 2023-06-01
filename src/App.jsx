import { useState, useEffect } from 'react'
import './App.css'
import Die from './tenzies/components/Die'
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

function App() {
    
    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)

    useEffect(() => {
        const allDiceHeld = dice.every(die => die.isHeld)
        const allDiceSameValue = dice.every(die => die.value === dice[0].value)
        if (allDiceHeld && allDiceSameValue) {
            setTenzies(true)
        }         
    }, [dice])
    
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
      // IF WON AND TEXT IS NEW GAME
      const allHeld = dice.every(die => die.isHeld)
      const firstValue = dice[0].value
      const allSameValue = dice.every(die => die.value === firstValue)
      if (allHeld && allSameValue) {
          setDice(allNewDice())
          setTenzies(false)
      }  
      
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

    return (
        <div className="App">
            <main>
                {tenzies && <Confetti height={400}/>}
                <h1 className="title">Tenzies</h1>
                <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className="dice-container">
                    {diceElements}
                </div>
                <button className="roll-dice" onClick={rollDice}>{tenzies ? "New Game" : "Roll Dice"}</button>
            </main>
        </div>
    )
}

export default App
