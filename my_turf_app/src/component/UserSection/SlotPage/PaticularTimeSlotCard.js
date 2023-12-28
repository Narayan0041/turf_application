import React from 'react'

export default function PaticularTimeSlotCard({imageUrl ,textWhichSlot ,timing}) {
    const cardStyle = {
        background: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '20vh',
        borderRadius: '1rem',
        marginLeft: '.3rem',
        marginTop: '1.5rem',
        width: '97%',
      };
  return (
    <div className='PaticularTimeSlotCard' style={cardStyle}>
      <div className="TextSection">
        <p>{textWhichSlot} Slot from</p>
        <p>{timing}</p>
      </div>
    </div>
  )
}
