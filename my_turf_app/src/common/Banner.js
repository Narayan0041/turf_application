import React from 'react'

export default function Banner({bannerImage}) {
  return (
    <div className='Banner'>
      <img src={bannerImage}  alt='bannerImage'/>
      <div className='textSectionInBanner'>
        <p>In Thane</p>
      </div>
    </div>
  )
}
