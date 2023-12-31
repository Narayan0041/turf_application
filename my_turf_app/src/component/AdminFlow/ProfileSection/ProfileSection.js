import React, { useEffect, useState } from 'react'
import Buttons from '../../../common/Button/Buttons'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProfileSection() {
    let navigator = useNavigate();
    const defaultProfileImage = "/image/adminProfile.png"; // Default image path
    const defaultUserName = "Hello User";
    const defaultUserMobile = "+91-9322363737";

    const [userProfile, setUserProfile] = useState(defaultProfileImage);
    const [userName, setUserName] = useState(defaultUserName);
    const [userMobile, setUserMobile] = useState(defaultUserMobile);
    const [keyForRefresh, setKeyForRefresh] = useState(0);

    let loginUserDetailData = useSelector((state) => state.UserRegister.LoginUserDetail);

    useEffect(() => {
        if (loginUserDetailData) {
            setUserProfile(loginUserDetailData.profile || defaultProfileImage);
            setUserName(loginUserDetailData.Name || defaultUserName);
            setUserMobile(loginUserDetailData.Mobile || defaultUserMobile);
        } else {
            // Set default values if loginUserDetailData is not available
            setUserProfile(defaultProfileImage);
            setUserName(defaultUserName);
            setUserMobile(defaultUserMobile);
        }
    }, [loginUserDetailData, defaultProfileImage, defaultUserName, defaultUserMobile]);

    const buttonStyle = {
        backgroundColor: "transparent",
        borderRadius: ".5rem",
        border: "1px solid #8072e6",
        cursor: "pointer",
        marginLeft: "20%",
        fontWidth: "800",
        fontSize: "1.1rem",
        padding: ".5rem 4rem",
        fontWeight: "800",
        letterSpacing: "0.1rem"
    };
    const buttonStyle2 = {
        backgroundColor: "transparent",
        borderRadius: ".5rem",
        border: "1px solid #8072e6",
        cursor: "pointer",
        marginLeft: "20%",
        fontWidth: "800",
        fontSize: "1.1rem",
        padding: ".5rem 4rem",
        fontWeight: "800",
        letterSpacing: "0.1rem"
    };
    const handleClick = (event) => {
        const target = event.target.className;
        if (target === "EditButton") {
            if (loginUserDetailData) {
                navigator("/turf/adminProfile")
            } else {
                navigator("/turf/adminLogin")
            }
        }
    }
    const handleLogout = () => {
        localStorage.removeItem("loginUser");
        // component re_render 
        setKeyForRefresh(keyForRefresh + 1);
        setUserProfile(defaultProfileImage);
        setUserName(defaultUserName);
        setUserMobile(defaultUserMobile);
    }
    const handleLogIN = () => {
        navigator("/turf/adminLogin")
    }
    return (
        <div className='ProfileSection' onClick={handleClick}>
            <div className="ProfieDetailSection">
                <div className='ProfileImage' >
                    <img src={userProfile} alt='userProfileImage' width={userProfile ? '70px' : "70px"} className='UserImage'></img>
                </div>
                <div className='UserDetail'>
                    <div className='UserName'><p>{userName}</p></div>
                    <div className='mobileNumber'><p>{userMobile}</p></div>
                    <div className='EditButton'><i className="fa-solid fa-pen"></i>Edit Profile</div>
                </div>
            </div>
            <div className='seprationTwoDiv'></div>
            <div className="LogoutButton">
                {
                loginUserDetailData
                    ? (<Buttons text={"LogOut"} handleClick={handleLogout} style={buttonStyle} />)
                    : (<Buttons text={"LogIn"} handleClick={handleLogIN} style={buttonStyle2} />)
            }

            </div>
        </div>
    )
}
