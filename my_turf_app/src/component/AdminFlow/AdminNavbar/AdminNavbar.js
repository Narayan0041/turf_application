import React from 'react'

export default function AdminNavbar({image,alertCount}) {
  return (
    <div className='AdminNavbar'>
     <div className="AdminNavbarLeftSection">
     <i className="fa-solid fa-bars"></i>
     </div>
     <div className="AdminNavbarRightSection">
        <span className='alert'>{alertCount}</span>
     <i className="fa-solid fa-bell"></i>
     <div className='help'>
        <span className='helpIcon'>?</span> Help
     </div>
     <img src={image} width={40} alt='AdminImage'></img>
     </div>
    </div>
  )
}
