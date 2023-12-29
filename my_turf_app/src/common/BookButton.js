import React from 'react'

export default function BookButton({Book ,text ,className}) {
  return (
    <div className='BookSlot'>
      <button onClick={Book} className={className}>{text}</button>
    </div>
  )
}
