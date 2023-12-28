import React from 'react'
import PaymentBox from './PaymentBox'

export default function PaymentMethod() {
  return (
    <div className='PaymentMethod'>
      <h1>Payment Method</h1>
      <div className="differentMethod">
      <PaymentBox paymentImage={"./image/scan.png"} text={"Using QR Code "}/>
      <PaymentBox paymentImage={"./image/money.png"} text={"By Cash"}/>
      </div>
      <p className='select'>Select AnyOne Option</p>
    </div>
  )
}
