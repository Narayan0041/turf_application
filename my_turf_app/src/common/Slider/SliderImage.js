import React from 'react'

export default function SliderImage({image ,firstWord ,secondWord}) {
  return (
    <div>
      <div className="sliderImage">
        <img src={image} alt='SliderImage'/>
        <div className='SilderDetailSection'>
          <h3>{firstWord}</h3>
          <div className='sepTwo'></div>
          <h1>{secondWord}</h1>
          <button>Explore Now</button>
        </div>
      </div>
    </div>
  )
}
