import React from 'react'
import SlotDate from '../component/UserSection/SlotPage/SlotDate'
import PaticularTimeSlotCard from '../component/UserSection/SlotPage/PaticularTimeSlotCard'

export default function SlotPage() {
  return (
    <div className='SlotPageSection'>
      <SlotDate/>
      <div className='seprationssss'></div>
      <h1 className='header'>Book  <span>The Slot</span></h1>
      <PaticularTimeSlotCard imageUrl={"https://content.jdmagicbox.com/comp/mumbai/x4/022pxx22.xx22.201211163523.i4x4/catalogue/turfexcel-hiranandani-powai-mumbai-cricket-turf-grounds-7s95nrbv0v.jpg?clr="} textWhichSlot={"Morning"} timing={"6:00 Am to 12:00 Am"}/>
      <PaticularTimeSlotCard imageUrl={"https://admin.thecricketer.com/weblab/sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/groundsman18032101-min.jpg"} textWhichSlot={"Afternoon"} timing={"1:00 pm to 6:00 pm"}/>
      <PaticularTimeSlotCard imageUrl={"https://media-cdn.tripadvisor.com/media/photo-s/1d/0e/4c/6d/turf-cricket-football.jpg"} textWhichSlot={"Night"} timing={"7:00 pm to 12:00 pm"}/>
      
    </div>
  )
}
