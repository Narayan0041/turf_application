import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CheckOutSlot() {
    const navigate = useNavigate();
    const handleClickBook = () => {
        navigate("/turfDetailPage")
    }
    return (
        <div className='checkOutSlot'>
            <div className="firstSection">
                <h3>Hi, User...</h3>
                <i class="fa-solid fa-angle-right" onClick={handleClickBook}></i>
            </div>
            <p>Checkout your Slot</p>
            <div className='secondSection'>
                <input type='date' name='check' placeholder='Enter date' />
                <button className='checkOutButton'>CheckOut</button>
            </div>
            <h4>2/10/2024 -Day 2:00 pm to 6:00 pm are avilable</h4>
            <div className='seprations'></div>
            <div className='explore'>
                <button className='explore' onClick={handleClickBook}>Explore Now</button>
            </div>
        </div>
    )
}
