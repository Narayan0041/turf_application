import React from 'react'
import SliderInfo from '../../common/DifferentSlider/SliderInfo'

export default function TourSection() {
  return (
    <div>
       <h2 className="TourTextSection">Responsive Slider</h2>
        <SliderInfo/>
       <div style={{marginTop:"1rem"}}>
        <SliderInfo/>
       </div>
    </div>
  )
}
