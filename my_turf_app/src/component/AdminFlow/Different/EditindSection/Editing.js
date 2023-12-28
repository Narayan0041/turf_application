import React from 'react'
import OfferSection from './OfferSection'
import CheckOutSlot from '../../../UserSection/CheckOutSlot/CheckOutSlot'
import TourSection from '../../../UserSection/TourSection/TourSection'
import ShowCaseHeader from '../../../UserSection/ShowCase/ShowCaseHeader'
import RecommendedComponent from '../../../UserSection/Recommended/RecommendedComponent'
import CheckOut from '../../../UserSection/CheckOut/CheckOut'
import Query from '../../../UserSection/Query/Query'
import Slider from '../../../../common/Slider/Slider'

export default function Editing() {
    let HandleOffer= (e)=>{
   console.log("click")
    }
    return (
      <>
        <div className='Editing'>
          <Slider/>
          <CheckOutSlot/>
          <TourSection/>
          <OfferSection /> 
          <ShowCaseHeader/>
          <RecommendedComponent/>
          <CheckOut/>
          <Query/>
          {/* <Navbar/> */}
        </div>
      </>
    )
}
