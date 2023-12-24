import React from 'react'

export default function RecommendedCard({image ,place , description}) {
  let style={
    opacity:".6"
  }
  let parentSection={
    position:"relative",
  }
  // let textContainer={
  //   position: "absolute",
  //   top: "20%",
  //   left: "20%",
  // }
  return (
    <div className='RecommendedCardSection' style={{parentSection}}>
      <img src={image} width={100} alt='recommendedImage' style={style}/>
      <div className='RecommendedTextSection'>
      <p>{place}</p>
      <p>{description}</p>
      </div>
    </div>
  )
}
