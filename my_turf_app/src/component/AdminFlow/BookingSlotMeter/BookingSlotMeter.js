import React from 'react'
import ReactSpeedometer from "react-d3-speedometer";
export default function BookingSlotMeter() {
    return (
        <div className='BookingSlotMeter'>
            <ReactSpeedometer
                maxValue={100}
                value={73}
                needleColor="red"
                startColor="green"
                segments={10}
                endColor="blue"
            />
        </div>
    )
}
