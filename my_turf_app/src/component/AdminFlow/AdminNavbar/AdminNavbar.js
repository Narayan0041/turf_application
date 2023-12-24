import React from 'react'

export default function AdminNavbar({image}) {
  return (
    <div className='AdminNavbar'>
     <div className="AdminNavbarLeftSection">
     <i class="fa-solid fa-bars"></i>
     </div>
     <div className="AdminNavbarRightSection">
     <i class="fa-solid fa-bell"></i>
     <img src={image} width={50} alt='AdminImage'></img>
     </div>
    </div>
  )
}
