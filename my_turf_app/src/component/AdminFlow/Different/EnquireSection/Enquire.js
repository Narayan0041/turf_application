import React from 'react'
import EnquireUserContainer from './EnquireUserContainer'

export default function Enquire() {
  return (
    <div className='EnquirePage'>
        <p className='heading'>User Enquire List are...</p>
      <EnquireUserContainer srNo={1} UserName={"Shivnarayan yadav"} mobileNumber={"9322363737"} email={"yadavshiv0041@gmail.com"} enquire={"i want to book a slot on Saturday i want some concesion plz.. if it is possilbe"}/>
      <EnquireUserContainer srNo={2} UserName={"Shivnarayan yadav"} mobileNumber={"9322363737"} email={"yadavshiv0041@gmail.com"} enquire={"i want to book a slot on Saturday i want some concesion plz.. if it is possilbe"}/>
      <EnquireUserContainer srNo={3} UserName={"Shivnarayan yadav"} mobileNumber={"9322363737"} email={"yadavshiv0041@gmail.com"} enquire={"i want to book a slot on Saturday i want some concesion plz.. if it is possilbe"}/>
    </div>
  )
}
