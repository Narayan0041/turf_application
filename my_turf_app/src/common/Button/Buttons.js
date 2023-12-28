import React from 'react'

export default function Buttons({text ,handleClick ,style}) {
  return (
    <div>
      <button onClick={handleClick} style={style}>{text}</button>
    </div>
  )
}
