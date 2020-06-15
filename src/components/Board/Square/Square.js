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
    togglePlayer_blackT,
    currentBoard,
    setCurrentBoard,
    setBlackScore,
    black_score,
    white_score,
    setWhiteScore,
  } = context

  useEffect(() => {
    if (pieceInfo.hasPiece) {
      setPiece(pieceInfo.hasPiece)
      setColor(pieceInfo.color)
    } else {
      setCurrentBoard((state) => {
        state.squares[position] = null
        return state
      })
    }

    return () => {
      setPiece(false)
      setColor("")
    }
  }, [position])

  const checkScore = () => {
    if (player_blackT) {
      currentBoard.squares.map((square) => {
        if (square === "black") {
          setBlackScore(black_score + 1)
        }
      })
    } else {
      currentBoard.squares.map((square) => {
        if (square === "white") {
          setWhiteScore(white_score + 1)
        }
      })
    }
  }

  const flipPiece = (pieces) => {
    //TODO loop through the current pieces and based on last move made check each direction if a piece exist
    //If a piece does not exist move to next direction
    //if piece does exist check the next square in the same direction
    //if piece is not the same color as the player recursively check for the next square in the same direction until end of board is foud
    //or if the same color as the player is found
    //if piece is the same color as the player
    //flip the piece before it
    //then move to next direction
  }

  const checkAvailableMoves = () => {
    //TODO loop through our currentBoard and filter out all the pieces based on whos turn it currently is

    const pieces = []
    currentBoard.squares.forEach((elem, i) => {
      let pieceObj = {}
      if (elem !== null) {
        pieceObj = {
          pos: i,
          color: elem,
        }
        pieces.push(pieceObj)
      }
    })
    console.log(pieces)
    flipPiece(pieces)
  }

  const handleClick = () => {
    console.log("col ", pos.col, "row ", pos.row)
    console.log(position)
    setPiece(true)
    setColor(player_blackT ? "black" : "white")
    togglePlayer_blackT(!player_blackT)
    checkScore()
    checkAvailableMoves()
  }
  return (
    <button className="square" onClick={handleClick} disabled={hasPiece}>
      {hasPiece ? <Piece position={position} color={color} /> : position}
    </button>
  )
}

export default Square
