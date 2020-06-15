//Main game board component
//TODO Integrate game logic

import React, { useContext, useEffect } from "react"
import Square from "./Square/Square"
import Context from "../../context/GameContext"

const Board = () => {
  const context = useContext(Context)
  const {
    board_size,
    currentBoard,
    setCurrentBoard,
    player_blackT,
    black_score,
    setBlackScore,
  } = context

  let container = []
  const initialPiece = {
    pos1: board_size / 2,
    pos2: board_size / 2 + 1,
  }

  for (let row = 1; row <= board_size; row++) {
    const rowContainer = []
    for (let col = 1; col <= board_size; col++) {
      let pieceInfo = {
        hasPiece: false,
        color: "",
      }

      //initial board piece check
      if (row === initialPiece.pos1 && col === initialPiece.pos1) {
        pieceInfo.hasPiece = true
        pieceInfo.color = "black"
      }
      if (row === initialPiece.pos2 && col === initialPiece.pos2) {
        pieceInfo.hasPiece = true
        pieceInfo.color = "black"
      }

      if (row === initialPiece.pos2 && col === initialPiece.pos1) {
        pieceInfo.hasPiece = true
        pieceInfo.color = "white"
      }

      if (row === initialPiece.pos1 && col === initialPiece.pos2) {
        pieceInfo.hasPiece = true
        pieceInfo.color = "white"
      }
      rowContainer.push(
        <Square
          key={col}
          position={`${col + (row - 1) * board_size}`}
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

  console.log(currentBoard)
  return <div className="container">{container}</div>
}

export default Board
