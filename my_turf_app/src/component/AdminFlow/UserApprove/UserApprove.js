import React from 'react'
import Buttons from '../../../common/Button/Buttons'

export default function UserApprove() {
    const ApproveButton = {
        backgroundColor: "green",
        borderRadius: ".5rem",
        // border: "1px solid #8072e6",
        cursor: "pointer",
        // marginLeft: "20%",
        fontWidth: "800",
        fontSize: "1.1rem",
        padding: ".5rem 3rem",
        fontWeight: "800",
        letterSpacing: "0.1rem"
    };
    const DenyButton = {
        backgroundColor: "red",
        borderRadius: ".5rem",
        // border: "1px solid #8072e6",
        cursor: "pointer",
        // marginLeft: "20%",
        fontWidth: "800",
        fontSize: "1.1rem",
        padding: ".5rem 3rem",
        fontWeight: "800",
        letterSpacing: "0.1rem"
    };
    const handleLogIN =()=>{

    }
    return (
        <div className='UserApprove'>
            <div className="UserDetailSection">
                <div className="UserName">
                    <p>{"Shivnarayan yadav"}</p>
                </div>
                <div className="OtherDetail">
                    <p>{"9322363737"}</p>
                    <p>{"yadavshiv0041@gmail.com"}</p>
                </div>
                <div className="paymentSection">
                    <p>{2000}₹</p>
                </div>
            </div>
            <div className='seprationTwoDiv'></div>
            <div className="accpetAndDenySection">
                <Buttons text={"LogIn"} handleClick={handleLogIN} style={ApproveButton} />
                <Buttons text={"LogIn"} handleClick={handleLogIN} style={DenyButton} />
            </div>
        </div>
    )
}
