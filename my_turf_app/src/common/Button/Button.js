import React from 'react'

export default function Button({Start ,Text ,style}) {
  return (
    <div className='Button'>
      <button onClick={Start}>{Text}</button>
    </div>
  )
}
