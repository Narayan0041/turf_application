import React from 'react';

const BookingRecord = () => {
  return (
    <div className='BookingRecord'>
      <div className="BookingNumberSection">
        <div className="BookingNumberSectionBox">
        <p>Number of Slot is...</p>
        <p>14/<span>21</span></p>
        </div>
      </div>
      <div className="BookingNumberSection">
        <div className="BookingNumberSectionBox NoOfEnquire">
        <p>Number of Enquire ...</p>
        <p>14/<span>7</span></p>
        </div>
      </div>
    </div>
  );
};

export default BookingRecord;
