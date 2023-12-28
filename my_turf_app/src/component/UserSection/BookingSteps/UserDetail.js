import React from 'react'
import Input from '../../../common/Input'

export default function UserDetail() {
  return (
    <div className='UserDeatil'>
       <h1>Personal Detail :</h1>
       <div className="userDetailInput">
      <Input type={"text"} placeholder={"Enter your Name"} />
      <Input type={"number"} placeholder={"Enter Mobile Number"} />
      <Input type={"email"} placeholder={"Enter Email"} />
      {/* <Input type={"number"} placeholder={"No. of Players"} /> */}
       </div>
    </div>
  )
}
