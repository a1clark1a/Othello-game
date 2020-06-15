import React, { useState } from "react"

export const nullBoard = {
  squares: [],
}

const Context = React.createContext({
  error: null,
  board_size: 8,

  player_blackT: true,
  lastMove: 0,
  black_score: 0,
  white_score: 0,

  currentBoard: nullBoard,

  setError: () => {},
  setBoardSize: () => {},

  setBlackScore: () => {},
  setWhiteScore: () => {},
  togglePlayer_blackT: () => {},
  setCurrentBoard: () => {},
})

export default Context

export function GameProvider(props) {
  const [error, setError] = useState(null)
  const [player_blackT, togglePlayer_blackT] = useState(true)
  const [black_score, setBlackScore] = useState(2)
  const [white_score, setWhiteScore] = useState(2)
  const [board_size, setBoardSize] = useState(8)
  const [currentBoard, setCurrentBoard] = useState(nullBoard)

  const clearError = () => {
    setError(null)
  }

  const contextValue = {
    error,
    board_size,
    player_blackT,
    black_score,
    white_score,
    currentBoard,

    setError,
    setBoardSize,
    setBlackScore,
    setWhiteScore,
    togglePlayer_blackT,
    setCurrentBoard,
  }

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  )
}
