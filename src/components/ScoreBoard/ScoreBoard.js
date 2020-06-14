//TODO Allow players to set settings in this componenent

import React, { useContext } from "react"
import Context from "../../context/GameContext"

const ScoreBoard = () => {
  const context = useContext(Context)

  const { black_score, white_score, board_size, setBoardSize } = context

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
          onChange={(e) => setBoardSize(parseInt(e.currentTarget.value))}
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
