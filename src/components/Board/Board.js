//Main game board component
//TODO Add Game Pieces
//TODO Integrate game logic

import React from "react"
import Square from "./Square/Square"

const Board = ({ size }) => {
  const container = []
  const initialPiece = {
    pos1: size / 2,
    pos2: size / 2 + 1,
  }

  console.log(initialPiece)
  for (let row = 1; row <= size; row++) {
    const rowContainer = []

    for (let col = 1; col <= size; col++) {
      let pieceInfo = {
        hasPiece: false,
        color: "",
      }

      //initial board piece check
      if (row === initialPiece.pos1 && col === initialPiece.pos1) {
        console.log("row ", row, "col ", col, "black")
        pieceInfo.hasPiece = true
        pieceInfo.color = "black"
      }
      if (row === initialPiece.pos2 && col === initialPiece.pos2) {
        console.log("row ", row, "col ", col, "black")
        pieceInfo.hasPiece = true
        pieceInfo.color = "black"
      }

      if (row === initialPiece.pos2 && col === initialPiece.pos1) {
        console.log("row ", row, "col ", col, "white")
        pieceInfo.hasPiece = true
        pieceInfo.color = "white"
      }

      if (row === initialPiece.pos1 && col === initialPiece.pos2) {
        console.log("row ", row, "col ", col, "white")
        pieceInfo.hasPiece = true
        pieceInfo.color = "white"
      }
      rowContainer.push(
        <Square
          key={col}
          position={`${col + (row - 1) * size}`}
          pos={{ col, row }}
          pieceInfo={pieceInfo}
        />
      )
    }
    container.push(
      <div className="row" key={row}>
        {rowContainer}
      </div>
    )
  }

  return <div className="container">{container}</div>
}

export default Board
