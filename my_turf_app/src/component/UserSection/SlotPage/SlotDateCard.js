import React from 'react'

export default function SlotDateCard({day ,date ,month ,className}) {
  return (
    <div className={`slotDateCard ${className}`}>
      <p>{day}</p>
      <h1>{date}</h1>
      <p>{month}</p>
    </div>
  )
}
