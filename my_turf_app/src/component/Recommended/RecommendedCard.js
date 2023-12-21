import React from 'react'

export default function RecommendedCard({image}) {
  return (
    <div>
      <img src={image} width={100} alt='recommendedImage'/>
    </div>
  )
}
