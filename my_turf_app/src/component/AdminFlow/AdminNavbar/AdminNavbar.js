import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminNavbar({ image, alertCount }) {
  const navigate = useNavigate();
  const handleClick = (event) => {
    const target =event.target.className;
    if(target === "help" || target === "helpIcon"){
      navigate("/help")
    }
    else if(target === "alert" || target === "fa-bell"){
      navigate("/")
    }
    else if(target === "AdminImage"){
      navigate("/adminLogin")
    }
  }
  return (
    <div className='AdminNavbar' onClick={handleClick}>
      <div className="AdminNavbarLeftSection">
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="AdminNavbarRightSection">
        <span className='alert'>{alertCount}</span>
        <i className="fa-solid fa-bell"></i>
        <div className='help'>
          <span className='helpIcon'>?</span> Help
        </div>
        <img src={image} width={40} alt='AdminImage' className='AdminImage'></img>
      </div>
    </div>
  )
}
