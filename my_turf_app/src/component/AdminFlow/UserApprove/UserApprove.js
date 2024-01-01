import React, { useState } from 'react'
import Buttons from '../../../common/Button/Buttons'

export default function UserApprove() {
    const [confirmation, setConfirmation] = useState(false);
    const [status, setStatus] = useState(0);
    const ApproveButton = {
        backgroundColor: "green",
        borderRadius: ".5rem",
        // border: "1px solid #8072e6",
        cursor: "pointer",
        // marginLeft: "20%",
        fontWidth: "800",
        fontSize: "1.1rem",
        padding: ".5rem 2rem .7rem 2rem",
        fontWeight: "800",
        letterSpacing: "0.1rem",
        maxWidth: "9rem",
        cursor: "pointer"
    };
    const DenyButton = {
        backgroundColor: "red",
        borderRadius: ".5rem",
        // border: "1px solid #8072e6",
        cursor: "pointer",
        // marginLeft: "20%",
        fontWidth: "800",
        fontSize: "1.1rem",
        padding: ".5rem 2rem .7rem 2rem",
        fontWeight: "800",
        letterSpacing: "0.1rem",
        maxWidth: "9rem",
        cursor: "pointer"
    };
    const handleAccept = () => {
        setConfirmation(true)
    }
    const handleReject = () => {
        setConfirmation(true)
    }
    const handleConfirm = (action) => {
        if (action === 'accept') {
            setStatus(1);
        } else if (action === 'reject') {
            setStatus(1)
        }
        setConfirmation(false);
    };

    return (
        <div className='UserApprove'>

            {
                confirmation === true
                    ? (<div className="confirmationModal">
                        <p>Are you sure you want to proceed?</p>
                        <div className="gropButton">
                            <button onClick={() => handleConfirm('accept')}>Confirm</button>
                            <button onClick={() => handleConfirm('reject')}>Cancel</button>
                        </div>
                    </div>)
                    : status === 1 ?(
                    <div className="ResultSection">
                        <p>Turf are book by {"Shivnarayan"}  01/01/24 :</p>
                        <p>Thankyou 😊</p>
                        <img src='/image/thumb-up.png' alt='statusimage' width={65} />
                        <p>Booking Status</p>
                    </div>)
                    : (
            <>
                <div className="UserDetailSection">
                    <div className="UserName">
                        <p>{"Shivnarayan yadav"}</p>
                    </div>
                    <div className="OtherDetail">
                        <p>{"9322363737"}</p>
                        <p>{"yadavshiv0041@gmail.com"}</p>
                    </div>
                    <div className="paymentSection">
                        <p>{2000}<span>₹</span></p>
                    </div>
                </div>
                <div className='seprationTwoDivs'></div>
                <div className="accpetAndDenySection">
                    <Buttons text={"Accept"} handleClick={handleAccept} style={ApproveButton} />
                    <Buttons text={"Reject"} handleClick={handleReject} style={DenyButton} />
                </div>
            </>
            )
            }

        </div>
    )
}
