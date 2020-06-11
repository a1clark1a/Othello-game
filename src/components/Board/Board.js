//Main game board component
//TODO Add Game Pieces
//TODO Integrate game logic

import React from "react"
import Square from "./Square/Square"

const Board = () => {
  const container = []
  for (let i = 0; i < 8; i++) {
    const row = []
    for (let j = 0; j < 8; j++) {
      row.push(<Square position={`${j}`} />)
    }
    container.push(<div className="row">{row}</div>)
  }
  return <div className="container">{container}</div>
}

export default Board
