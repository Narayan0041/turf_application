import React, { useState, useCallback } from 'react';
import Input from '../common/Input';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../store/action';
export default function RegisterPage() {
  const data = useSelector((data) => data.UserRegister.UserRegister)
  const dispatch = useDispatch();

  const [RegisterUserData, SetRegisterUserData] = useState(localStorage.getItem("UserData") ? JSON.parse(localStorage.getItem("UserData")) : [])
  const [userData, setUserData] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Password: "",
  });


  const handleInput = (event) => {
    const { id, value } = event.target;
    setUserData({
      ...userData,
      [id]: value
    })
  }

  const handleChange = () => {
    if (!userData.Name || !userData.Email || !userData.Mobile || !userData.Password) {
      alert('Please fill in all fields');
      return;
    }
    if (userData.Mobile.length !== 10 ) {
      alert("Mobile Number Should 10 digit") // show the error message if mobile number should lesser then 10 digit
      return; // prevent from mobile number is less than 10 digit 
    }
    if(userData.Password.length < 8) {
      alert("Password Should 8 digit") // show the error message if password should lesser then 10 digit
      return; // prevent from password is less than 8 digit 
    }
    dispatch(register(userData));
    const updatedUserData = Array.isArray(RegisterUserData) ? [...RegisterUserData, userData] : [userData];
    SetRegisterUserData(updatedUserData);
    localStorage.setItem('UserData', JSON.stringify(updatedUserData));

    // clear all the input feild
    setUserData({
      Name: '',
      Email: '',
      Mobile: '',
      Password: '',
    });

  }

  return (
    <div className='RegisterPage'>
      <Input type={"text"} value={userData.Name} id="Name" placeholder={"Enter your Name"} handleChange={handleInput} />
      <Input type={"email"} value={userData.Email} id="Email" placeholder={"Email Address..."} handleChange={handleInput} />
      <Input type={"number"} value={userData.Mobile} id="Mobile" placeholder={"Enter your mobile number .."} handleChange={handleInput} />
      <Input type={"password"} value={userData.Password} id="Password" placeholder={"Enter password"} handleChange={handleInput} />

      <div className='NextButton'>
        <button onClick={handleChange}>Register Now</button>
      </div>
      <div className='separation'></div>
      <div className='caption'>
        <h6 className='captiontext'>Join our turf community! Sign up now to unlock the best turf experience</h6>
      </div>
    </div>
  );
}
