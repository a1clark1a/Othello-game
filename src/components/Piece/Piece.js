//TODO Main reusable component for both players must handle white and black piece
import React, { useEffect, useContext } from "react"
import Context from "../../context/GameContext"

const Piece = ({ position, color }) => {
  const context = useContext(Context)

  const { setCurrenBoard } = context
  useEffect(() => {
    if (color) {
      setCurrenBoard((state) => {
        state.squares[position] = color
        if (color && color === "black") {
          state.black++
        } else {
          state.white++
        }
        return state
      })
    }
  }, [color])
  return (
    <div className={`piece ${color}`}>{color !== "" ? color : "piece"}</div>
  )
}

export default Piece
