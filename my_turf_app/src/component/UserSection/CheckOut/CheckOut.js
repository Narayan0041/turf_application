import React from 'react'
import Button from '../../../common/Button/Button'
import { useNavigate } from 'react-router-dom'
export default function CheckOut() {
  const navigate = useNavigate();
  const handlBookSlot =()=>{
      navigate("/turfDetailPage")
  }
  return (
    <div className='checkOutContainer'>
    <h3>Transform tomorrow's game today. Embrace the future of turf with us.</h3>
    <Button Text={"Start now : Dive into the turf experience! 🚀"} Start={handlBookSlot} />
    </div>
  )
}
