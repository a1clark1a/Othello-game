//This will be each individual square block for the board
//TODO Display each individual square
//TODO Square is clickable
//TODO Square holds piece component

import React, { useState } from "react"
import Piece from "../../Piece/Piece"

const Square = ({ position }) => {
  const [clicked, setClicked] = useState(false)

  return (
    <button
      className="square"
      onClick={() => {
        console.log(position)
        setClicked(!clicked)
      }}
    >
      {clicked ? <Piece position={position} /> : position}
    </button>
  )
}

export default Square
