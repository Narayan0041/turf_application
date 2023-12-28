import React from 'react'
import BookingRecord from '../../BookingRecord/BookingRecord'
import UserComeInDayWiseGraph from '../../UserGraphFlow/UserComeInDayWiseGraph'
import BookingSlotMeter from '../../BookingSlotMeter/BookingSlotMeter'
import AdPoster from '../../AdPoster/AdPoster'
import RecommendedComponent from '../../../UserSection/Recommended/RecommendedComponent'

export default function DashBoard() {
  return (
    <div>
      <BookingRecord/>
      <BookingSlotMeter/>
      <AdPoster/>
      <UserComeInDayWiseGraph/>
      <div className='DashBoardRecommendeSection'>
      <RecommendedComponent />
      </div>
    </div>
  )
}
