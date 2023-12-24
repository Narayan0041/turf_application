import React from 'react'

export default function Banner({bannerImage}) {
  return (
    <div className='Banner'>
      <img src={bannerImage}  alt='bannerImage'/>
      <div className='textSection'>
        <h4>In Thane</h4>
      </div>
    </div>
  )
}
