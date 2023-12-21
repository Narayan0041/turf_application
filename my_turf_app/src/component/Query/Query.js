import React from 'react'
import Button from '../../common/Button/Button'

export default function Query() {
  return (
    <div className='QuerySection'>
      <h2>For Any Query ??</h2>
      <p>A forum for seeking solutions and advice on diverse challenges.</p>
      <textarea name='query' placeholder='Write your Query' cols={48} rows={3}/>
      <button className='QueryButton'>Submit</button>
      <div className='sepration'></div>
      <h5>Elevate your outdoor experience with our turf application, delivering a lush, hassle-free lawn for your utmost satisfaction.</h5>
    </div>
  )
}
