//TODO Allow players to set settings in this componenent

import React, { useContext, useState } from "react"
import Context from "../../context/GameContext"

const ScoreBoard = () => {
  const context = useContext(Context)
  const [chosenColor, chooseColor] = useState("black")
  const {
    black_score,
    white_score,
    board_size,
    setBoardSize,
    player_blackT,
    togglePlayer_blackT,
    resetGame,
  } = context

  const handleBoardChange = (e) => {
    setBoardSize(parseInt(e.currentTarget.value))
  }

  return (
    <div className="score-board">
      <div className="score-container">
        <h2>
          Player 1: <code>{black_score}</code>
        </h2>
        <h2>
          Player 2: <code>{white_score}</code>
        </h2>
      </div>
      <div className="settings-container">
        <label htmlFor="size">Board-Size: </label>
        <select
          id="size"
          name="size"
          value={board_size}
          //TODO When board change reset game
          onChange={(e) => handleBoardChange(e)}
        >
          <option value={4}>4x4</option>
          <option value={6}>6x6</option>
          <option value={8}>8x8</option>
          <option value={10}>10x10</option>
          <option value={12}>12x12</option>
          <option value={16}>16x16</option>
          <option value={32}>32x32</option>
        </select>
      </div>
    </div>
  )
}

export default ScoreBoard
