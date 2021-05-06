import React, { useState, useEffect } from 'react'
import Rock from './icons/Rock'
import Paper from './icons/Paper'
import Scissors from './icons/Scissors'
import './App.css'
import WinsLosses from './components/WinsLosses'
import GameState from './components/GameState'
import Choices from './components/Choices'

const choices = [
  { id: 1, name: 'rock', component: Rock, lossesTo: 2 },
  { id: 2, name: 'paper', component: Paper, lossesTo: 3 },
  { id: 3, name: 'scissors', component: Scissors, lossesTo: 1 }
]

export default function App() {
  const [wins, setWins] = useState(0)
  const [losses, setLosses] = useState(0)
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [gameState, setGameState] = useState(null)

  useEffect(() => {
    restartGame()
  }, [])

  const restartGame = () => {
    setGameState(null)
    setUserChoice(null)

    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  const handleUserChoice = (choice) => {
    const chosenChoice = choices.find((c) => c.id === choice)
    setUserChoice(chosenChoice)

    //determine the winner
    if (chosenChoice.lossesTo === computerChoice.id) {
      setGameState('lose')
      setLosses((losses) => losses + 1)
    } else if (computerChoice.lossesTo === chosenChoice.id) {
      setGameState('win')
      setWins((wins) => wins + 1)
    } else if (computerChoice.id === chosenChoice.id) {
      setGameState('draw')
    }
  }

  const renderComponent = (choice) => {
    const Component = choice.component
    return <Component />
  }

  return (
    <div className='app'>
      {/* information goes here */}
      <div className='info'>
        <h2>Rock. Paper. Scissors</h2>

        <WinsLosses wins={wins} losses={losses} />
      </div>

      <GameState
        gameState={gameState}
        restartGame={restartGame}
        renderComponent={renderComponent}
        computerChoice={computerChoice}
        userChoice={userChoice}
      />

      <Choices handleUserChoice={handleUserChoice} />
    </div>
  )
}
