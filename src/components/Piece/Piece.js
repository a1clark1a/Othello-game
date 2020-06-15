//TODO Main reusable component for both players must handle white and black piece
import React, { useEffect, useContext } from "react"
import Context from "../../context/GameContext"

const Piece = ({ position, color }) => {
  const context = useContext(Context)

  const { setCurrentBoard, black_score, setBlackScore, setWhiteScore } = context
  useEffect(() => {
    if (color) {
      setCurrentBoard((state) => {
        state.squares[position] = color
        state.lastMove = position

        return state
      })
    }
  }, [color])
  return (
    <div className={`piece ${color}`}>{color !== "" ? color : "piece"}</div>
  )
}

export default Piece
