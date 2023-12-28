import React from 'react'

export default function SliderImage({image ,firstWord ,secondWord}) {
  return (
    <div className='heroSliderImage'>
      <div className="sliderImage">
        <img src={image} alt='SliderImage'/>
      </div>
        <div className='SilderDetailSection'>
          <h3>{firstWord}</h3>
          <div className='sepTwo'></div>
          <h1>{secondWord}</h1>
          <button className='exploreTurf'>Explore Now</button>
        </div>
    </div>
  )
}
