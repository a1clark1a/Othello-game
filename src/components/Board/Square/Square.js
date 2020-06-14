//This will be each individual square block for the board
//TODO Display each individual square
//TODO Square is clickable
//TODO Square holds piece component

import React, { useState, useEffect, useContext } from "react"
import Context from "../../../context/GameContext"

import Piece from "../../Piece/Piece"

const Square = ({ position, pos, pieceInfo }) => {
  const context = useContext(Context)

  const [hasPiece, setPiece] = useState(false)
  const [color, setColor] = useState("")

  const {
    player_blackT,
    player_whiteT,
    togglePlayer_blackT,
    togglePlayer_whiteT,
  } = context

  useEffect(() => {
    if (pieceInfo.hasPiece) {
      setPiece(pieceInfo.hasPiece)
      setColor(pieceInfo.color)
    }
    return () => {
      setPiece(false)
      setColor("")
    }
  }, [position])

  const handleClick = () => {
    setPiece(true)
    setColor(player_blackT ? "black" : "white")
    togglePlayer_blackT(!player_blackT)
  }
  return (
    <button className="square" onClick={handleClick}>
      {hasPiece ? <Piece position={position} color={color} /> : position}
    </button>
  )
}

export default Square
