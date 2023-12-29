import React from 'react'

export default function BookingGroundDetailSection({ groundName, mobile, email, timing, address,section }) {
  return (
    <div>
      <div className="BookingInfoSection">
        <p><span>Ground :</span> {groundName}</p>
        <p><span>Mobile No. :</span> {mobile}</p>
        <p><span>Email :</span> {email}</p>
        <p><span>Section :</span> {section}</p>
        <p><span>Timing :</span> {timing}</p>
        <p><span>Address :</span> {address}</p>
      </div>
    </div>
  )
}
