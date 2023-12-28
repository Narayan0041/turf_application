import React from 'react'

export default function PaymentBox({paymentImage ,text}) {
  return (
    <div className='PaymentBox'>
      <img src={paymentImage} width={50} alt='paymentMode'/>
      <p>{text}</p>
    </div>
  )
}
