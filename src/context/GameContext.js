import React, { useState } from "react"

const Context = React.createContext({
  error: null,
  board_size: 8,

  player_blackT: true,
  black_score: 0,
  white_score: 0,

  setError: () => {},
  setBoardSize: () => {},
  setBlackScore: () => {},
  setWhiteScore: () => {},
  togglePlayer_blackT: () => {},
})

export default Context

export function GameProvider(props) {
  const [error, setError] = useState(null)
  const [player_blackT, togglePlayer_blackT] = useState(true)
  const [black_score, setBlackScore] = useState(0)
  const [white_score, setWhiteScore] = useState(0)
  const [board_size, setBoardSize] = useState(8)

  const clearError = () => {
    setError(null)
  }

  const contextValue = {
    error,
    board_size,
    player_blackT,
    black_score,
    white_score,

    setError,
    setBoardSize,
    setBlackScore,
    setWhiteScore,
    togglePlayer_blackT,
  }

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  )
}
