import React from 'react'

export default function SliderImage({image}) {
  return (
    <div>
      <div className="sliderImage">
        <img src={image} alt='SliderImage'/>
      </div>
    </div>
  )
}
