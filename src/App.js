//TODO Handle Algorithm for Player movements
//TODO Handle win/lose condition
//TODO Handle Score Tracking
//TODO Handle Algorithm for Game Logic
//TODO Handle AI
//TODO Handle Multiplayer
//TODO Make App into PWA

import React from "react"
import Board from "./components/Board/Board"
import ScoreBoard from "./components/ScoreBoard/ScoreBoard"

const App = () => {
  return (
    <main>
      <h1 className="title">Othello Game</h1>
      <ScoreBoard />
      <div className="board-container">
        <Board />
      </div>
    </main>
  )
}

export default App
