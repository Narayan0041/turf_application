import React from 'react'
import AdminNavbar from '../component/AdminFlow/AdminNavbar/AdminNavbar'
import FullWidthTabs from '../component/AdminFlow/tab/tab'
import ProfileSection from '../component/AdminFlow/ProfileSection/ProfileSection'

export default function Admin() {
  return (
    <div>
      <AdminNavbar />
      <FullWidthTabs />
      <ProfileSection />
    </div>
  )
}
