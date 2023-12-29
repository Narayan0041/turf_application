import React from 'react'
import SlotDate from '../component/UserSection/SlotPage/SlotDate'
import PaticularTimeSlotCard from '../component/UserSection/SlotPage/PaticularTimeSlotCard'
import { useNavigate } from 'react-router-dom';

export default function SlotPage() {
  const navigate = useNavigate();
    const handleCardClick = (imageUrl, section ,timing) => {
      navigate(`/selectTheSlot/${encodeURIComponent(imageUrl)}/${encodeURIComponent(section)}/${encodeURIComponent(timing)}`);
    };
    
  return (
    <div className='SlotPageSection'>
      <SlotDate />
      <div className='seprationssss'></div>
      <h1 className='header'>Book  <span>The Slot</span></h1>
      <div className="slotsAvb">
        <PaticularTimeSlotCard
          imageUrl={"https://content.jdmagicbox.com/comp/mumbai/x4/022pxx22.xx22.201211163523.i4x4/catalogue/turfexcel-hiranandani-powai-mumbai-cricket-turf-grounds-7s95nrbv0v.jpg?clr="}
          textWhichSlot={"Morning"}
          timing={"6:00 Am to 12:00 pm"}
          className={"Morning"}
          handleClick={() => handleCardClick("https://content.jdmagicbox.com/comp/mumbai/x4/022pxx22.xx22.201211163523.i4x4/catalogue/turfexcel-hiranandani-powai-mumbai-cricket-turf-grounds-7s95nrbv0v.jpg?clr=", "Morning" ,"6:00 Am to 12:00 pm")}
        />
        <PaticularTimeSlotCard
          imageUrl={"https://admin.thecricketer.com/weblab/sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/groundsman18032101-min.jpg"}
          textWhichSlot={"AfterNoon"}
          timing={"1:00 pm to 6:00 pm"}
          className={"AfterNoon"}
          handleClick={() => handleCardClick("https://admin.thecricketer.com/weblab/sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/groundsman18032101-min.jpg", "AfterNoon" ,"AfterNoon")}
        />
        <PaticularTimeSlotCard
          imageUrl={"https://media-cdn.tripadvisor.com/media/photo-s/1d/0e/4c/6d/turf-cricket-football.jpg"}
          textWhichSlot={"Night"}
          timing={"7:00 pm to 12:00 Am"}
          className={"Night"}
          handleClick={() => handleCardClick("https://media-cdn.tripadvisor.com/media/photo-s/1d/0e/4c/6d/turf-cricket-football.jpg", "Night" ,"7:00 pm to 12:00 Am")}
        />

      </div>
    </div>
  )
}
