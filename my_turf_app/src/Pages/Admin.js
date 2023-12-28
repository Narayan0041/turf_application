import React from 'react'
import AdminNavbar from '../component/AdminFlow/AdminNavbar/AdminNavbar'
import FullWidthTabs from '../component/AdminFlow/tab/tab'

export default function Admin() {
  return (
    <div>
      <AdminNavbar image={"https://media.licdn.com/dms/image/D4D03AQFS3fyfROD31Q/profile-displayphoto-shrink_100_100/0/1689414479828?e=1709164800&v=beta&t=nhqIT43ICyohxRr6fG3s5y2-OWGqY48Y4o2uOm0g00A"
    } alertCount={1}/>
    <FullWidthTabs/>
    </div>
  )
}
