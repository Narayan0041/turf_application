import React, { useState } from 'react'
import BookingStepsTemplat from '../component/UserSection/BookingSteps/BookingStepsTemplat'
import NavbarPagesContainer from '../common/Navbar'
import BookingGroundDetailSection from '../component/UserSection/BookingSteps/BookingGroundDetailSection'
import PaymentMethod from '../component/UserSection/BookingSteps/PaymentMethod'
import { useParams } from 'react-router-dom'

export default function Booking() {
  const {image , section ,timing} =useParams();
  const [step, setStep] = useState(0)
  return (
    <>
      <NavbarPagesContainer />
      <BookingStepsTemplat imageUrl={image} step={step} setStep={setStep} Section={section} Timing ={timing}/>
    </>
  )
}
