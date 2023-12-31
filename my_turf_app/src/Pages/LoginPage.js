import React, { useState } from 'react'
import Input from '../common/Input'
import { useDispatch } from 'react-redux';
import { LoginUserData } from '../store/action';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    let navigator = useNavigate();
    let dispatch = useDispatch()
    const [userRegisterData, SetUSerRegisterData] = useState(localStorage.getItem("UserData") ? JSON.parse(localStorage.getItem("UserData")) : []);
    const [userData, setUserData] = useState({
        Email: "",
        Password: "",
    });
    const styled = () => {

    }
    const handleInput = (event) => {
        const { id, value } = event.target;
        setUserData({
            ...userData,
            [id]: value
        });
    }
    const handleNext = () => {
        if (!userData.Email || !userData.Password) {
            alert("All input feild compl..");
            return;
        }
        let loginUser = userRegisterData.find((user) => {
            return user.Email === userData.Email && user.Password === userData.Password
        })
        if (loginUser) {
            dispatch(LoginUserData(loginUser));
            localStorage.setItem("loginUser", JSON.stringify(([loginUser])));
            navigator("/turf/admin")
            setUserData({
                Email: "",
                Password: "",
            })
        } else {
            alert("In valid user , User not found in dataBase")
        }
    }
    return (
        <div className='LoginPageSection'>
            <Input type={"email"} value={userData.Email} placeholder={"Email Address..."} id={"Email"} handleChange={handleInput} />
            <Input type={"password"} value={userData.Password} placeholder={"Password.."} id={"Password"} handleChange={handleInput} />
            <div className='NextButton'>
                <button onClick={handleNext} >Next <i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className='sepration'></div>
            <div className='caption' style={{ marginTop: '3rem' }}>
                <h6 className='captiontext'>Reconnect with your turf wonders. Log in now to explore and enjoy</h6>
            </div>
        </div>
    )
}
