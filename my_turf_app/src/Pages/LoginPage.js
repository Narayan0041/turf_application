import React from 'react'
import Input from '../common/Input'
import Buttons from '../common/Button/Buttons'

export default function LoginPage() {
    const styled = () => {

    }
    const HandleInput = () => {

    }
    const HandleNext = () => {

    }
    return (
        <div className='LoginPageSection'>
            <Input type={"email"} placeholder={"Email Address..."} handleChange={HandleInput} />
            <Input type={"text"} placeholder={"Password.."} handleChange={HandleInput} />
            <div className='NextButton'>
                <button >Next <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className='sepration'></div>
            <div className='caption' style={{marginTop:'3rem'}}>
                <h6 className='captiontext'>Reconnect with your turf wonders. Log in now to explore and enjoy</h6>
            </div>
            {/* <p>or login with mobile number</p> */}
            {/* <div className="mobileNumberLogin">
                <img src='./image/phone-call.png' width={20} alt='mobilenumber' />
                <span>Mobile no.</span>
            </div> */}
        </div>
    )
}
