//This will be each individual square block for the board
//TODO Display each individual square
//TODO Square is clickable
//TODO Square holds piece component

import React, { useState, useEffect } from "react"
import Piece from "../../Piece/Piece"

const Square = ({ position, pos, pieceInfo }) => {
  const [hasPiece, setPiece] = useState(false)
  const [color, setColor] = useState("")
  useEffect(() => {
    if (pieceInfo.hasPiece) {
      console.log(position)
      console.log("col ", pos.col, "row ", pos.row)
      console.log(pieceInfo)
      setPiece(pieceInfo.hasPiece)
      setColor(pieceInfo.color)
    }
  }, [])

  const handleClick = () => {
    console.log(position)
    console.log("col ", pos.col, "row ", pos.row)
    setPiece(true)
    //TODO check for player/ai turn
    setColor("black")
  }
  return (
    <button className="square" onClick={handleClick}>
      {hasPiece ? <Piece position={position} color={color} /> : position}
    </button>
  )
}

export default Square
