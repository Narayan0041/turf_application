import React from 'react'

export default function Input({type ,placeholder ,handleChange}) {
  return (
    <div className='inputBox'>
      <input type={type} placeholder={placeholder} onChange={handleChange}/>
    </div>
  )
}
