//Main game board component
//TODO Add Game Pieces
//TODO Integrate game logic

import React from "react"
import Square from "./Square/Square"

const Board = ({ size }) => {
  const container = []
  for (let i = 0; i < size; i++) {
    const row = []
    for (let j = 0; j < size; j++) {
      row.push(<Square key={j} position={`${j + i * size}`} />)
    }
    container.push(
      <div className="row" key={i}>
        {row}
      </div>
    )
  }
  return <div className="container">{container}</div>
}

export default Board
