import React, { useState } from 'react'
import BookingStepsTemplat from '../component/UserSection/BookingSteps/BookingStepsTemplat'
import NavbarPagesContainer from '../common/Navbar'
import BookingGroundDetailSection from '../component/UserSection/BookingSteps/BookingGroundDetailSection'
import PaymentMethod from '../component/UserSection/BookingSteps/PaymentMethod'

export default function Booking() {
    const [step ,setStep] =useState(0)
  return (
    <div>
        <NavbarPagesContainer/>
        {/* <PaymentMethod /> */}
      <BookingStepsTemplat imageUrl={"https://admin.thecricketer.com/weblab/sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/groundsman18032101-min.jpg"} step={step} setStep={setStep}/>
      {/* <BookingGroundDetailSection step={step} /> */}
    </div>
  )
}
