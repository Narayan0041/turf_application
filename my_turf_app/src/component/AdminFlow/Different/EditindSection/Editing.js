import React from 'react'

export default function Editing({offerImage}) {
    let HandleOffer= (e)=>{
   console.log("click")
    }
    return (
        <div className='Editing'>
            <div className="OfferSection">
              <img src={offerImage} width={200} alt='OfferSection' /> 
               <input type='text' placeholder='Enter the link here...' name='Link' onChange={HandleOffer}/>
            </div>
        </div>
    )
}
