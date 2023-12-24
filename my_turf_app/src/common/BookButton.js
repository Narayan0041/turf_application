import React from 'react'

export default function BookButton({Book ,text}) {
  return (
    <div className='BookSlot'>
      <button onClick={Book}>{text}</button>
    </div>
  )
}
