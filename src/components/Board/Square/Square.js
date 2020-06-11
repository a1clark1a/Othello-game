//This will be each individual square block for the board
//TODO Display each individual square
//TODO Square is clickable
//TODO Square holds piece component

import React from "react"

const Square = ({ position }) => {
  return <button className="square">{position}</button>
}

export default Square
