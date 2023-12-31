import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function AdminNavbar() {
  const navigate = useNavigate();
  const defaultProfileImage = "/image/adminProfile.png"; // Default image path
  const [userProfile, setUserProfile] = useState(defaultProfileImage);

  let loginUserDetailData = useSelector((state) => state.UserRegister.LoginUserDetail); // Data come from store and distribute 

  useEffect(() => {
    if (loginUserDetailData && loginUserDetailData.profile) {
      setUserProfile(loginUserDetailData.profile);
    } else {
      setUserProfile(defaultProfileImage); // Set default image if loginUserDetailData or profile is not available
    }
  }, [loginUserDetailData, defaultProfileImage]);

  const handleClick = (event) => {
    const target = event.target.className;
    if (target === "help" || target === "helpIcon") {
      navigate("/help");
    } else if (target === "alert" || target === "fa-bell") {
      navigate("/");
    }
  };
  useEffect(() => {
    const adminImage = document.querySelector('.AdminImage');
    const profileSection = document.querySelector('.ProfileSection');
    adminImage.addEventListener("click", () => {
       profileSection.classList.toggle("active")
    });

    // Clean up the event listener on component unmount
    // return () => {
    //   profileSection.removeEventListener("click", handleProfileClick);
    // };
  }, []);
  return (
    <div className='AdminNavbar' onClick={handleClick}>
      <div className="AdminNavbarLeftSection">
        <img src='https://techpaathshala.com/assets/images/general/logo.png' width={170} alt='companyLogo' />
      </div>
      <div className="AdminNavbarRightSection">
        <span className='alert'>{useSelector((data) => data.UserRegister.Count)}</span>
        <i className="fa-solid fa-bell"></i>
        <div className='help'>
          <span className='helpIcon'>?</span> Help
        </div>
        <img src={userProfile} width={40} alt='AdminImage' className='AdminImage'></img>
      </div>
    </div>
  );
}
