import React from 'react'
import Input from '../common/Input'

export default function RegisterPage() {
    const HandleInput =()=>{

    }
  return (
    <div className='RegisterPage'>
            <Input type={"text"} placeholder={"Enter your Name"} handleChange={HandleInput} />
            <Input type={"email"} placeholder={"Email Address..."} handleChange={HandleInput} />
            <Input type={"number"} placeholder={"Enter your mobile number .."} handleChange={HandleInput} />
            <Input type={"password"} placeholder={"Enter password"} handleChange={HandleInput} />
            <div className='NextButton'>
                <button>Register Now</button>
            </div>
            <div className='sepration'></div>
            <div className='caption'>
                <h6 className='captiontext'>Join our turf community! Sign up now to unlock the best turf experience</h6>
            </div>
    </div>
  )
}
