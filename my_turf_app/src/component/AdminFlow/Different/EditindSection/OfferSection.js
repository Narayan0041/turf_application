import React, { useState } from 'react'

export default function OfferSection() {
    const [offerImage ,setOfferImage] =useState("./image/discount.png");
    const [text ,setText] =useState("")
    let HandleOffer =(event)=>{
       setOfferImage(event.target.value);
       setText("")
    }
  return (
       <div className="OfferSection">
        <h1>Offer Section</h1>
              <img src={offerImage} width={offerImage ==="./image/discount.png" ? 50: 410} alt='OfferSection' /> 
              <div className="textSection">
                <img src="./image/broken-link.png" width={20} alt="link"/>
               <input type='text' value={text} placeholder='Enter the link here...' name='Link' onChange={HandleOffer}/>
              </div>
            </div> 
  )
}
