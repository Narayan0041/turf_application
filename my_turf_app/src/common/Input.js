import React from 'react'

export default function Input({type ,placeholder ,handleChange ,id ,value}) {
  return (
    <div className='inputBox'>
      <input type={type} placeholder={placeholder} onChange={handleChange} id={id} value={value}/>
    </div>
  )
}
