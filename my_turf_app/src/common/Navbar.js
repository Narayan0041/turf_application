import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function NavbarPagesContainer() {
  const navigate =useNavigate();
  const handleClick =(event)=>{
    const target =event.target.className;
    if(target === "fa-chevron-left"){
      navigate(-1)
    }

  }
  return (
    <div className='NavbarPagesContainer' onClick={handleClick}>
      <div className="NavbarLeftSection">
      <i className="fa-solid fa-chevron-left"></i>
      <p className='GroundName'>Lords Sports Turf</p>
      </div>
      <div>
      <i className="fa-solid fa-share-nodes"></i>
      </div>
    </div>
  )
}
