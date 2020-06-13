//TODO Main reusable component for both players must handle white and black piece
import React from "react"

const Piece = ({ position, color }) => {
  return (
    <div className={`piece ${color}`}>{color !== "" ? color : "piece"}</div>
  )
}

export default Piece
