import React from 'react'
import BookingGroundDetailSection from './BookingGroundDetailSection'
import BookingStepper from './BookingStepper'
import UserDetail from './UserDetail'
import Success from './Success'
import Buttons from '../../../common/Button/Buttons'
import PaymentMethod from './PaymentMethod'

export default function BookingStepsTemplat({ imageUrl, step, setStep }) {
  const style = {
    background: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh',
    width: '100%',
  }
  const ButtonStyle = {
    backgroundColor: '#8072e6',
    padding: '.7rem 6rem',
    fontSize: '1.2rem',
    fontWeight: '700',
    letterSpacing: '.1rem',
    borderRadius: '.5rem'

  }
  let HandleCont = () => {
    setStep(step + 1)
  }
  return (
    <>
      <div className='BookingStepsTemplat' style={style}>
      </div>
      <div className="BookingTextSection">
        <div className="BookingHeaderSection">
          <p>Booking</p>
        </div>
        <BookingStepper step={step} />
        {
          step === 0 ? (<BookingGroundDetailSection groundName={"Lords Turf"} mobile={9322363737} email={"yadavshiv0041@gmail.com"} address={"525P+8R, Mumbra, Thane, Maharashtra 421204"} timing={"6:00 Am to 12:00 pm"} setStep={setStep} />)
            : step === 1 ? (<UserDetail />)
              : step === 2 ? (<PaymentMethod />)
                : (<Success />)
        }
        {step !== 2 && (
          <div className='BookingTextSectionButton'>
            <Buttons text={"Continue"} style={ButtonStyle} handleClick={HandleCont} />
          </div>
        )}
        <div className='BookingTextSectionButton'>
          <Buttons text={"Continoue"} style={ButtonStyle} handleClick={HandleCont} />
        </div>

      </div>
    </>
  )
}
