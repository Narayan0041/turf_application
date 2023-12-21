import React from 'react'

export default function CheckOutSlot() {
    return (
        <div className='checkOutSlot'>
            <div className="firstSection">
                <h3>Hi, User...</h3>
                <i class="fa-solid fa-angle-right"></i>
            </div>
                <p>Checkout your Slot</p>
            <div className='secondSection'>
            <input type='date' name='check' placeholder='Enter Date' />
            <button className='checkOutButton'>CheckOut</button>
            </div>
            <h4>2/10/2024 -Day 2:00 pm to 6:00 pm are avilable</h4>
            <div className='seprations'></div>
            <div className='explore'>
                <button>Explore Now</button>
            </div>
        </div>
    )
}
