import React from 'react'

export default function InfoSliderCard({image}) {
  return (
    <div>
      <div className="InfoSliderCard">
        <img src={image} width={125} alt='infoInage' />
      </div>
    </div>
  )
}
