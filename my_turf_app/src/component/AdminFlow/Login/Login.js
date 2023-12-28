import React, { useState } from 'react'
import RegisterButton from '../../../common/Button/Login/RegisterButton'
import Input from '../../../common/Input'
import LoginPage from '../../../Pages/LoginPage'
import RegisterPage from '../../../Pages/RegisterPage'

export default function Login() {
    const [active, setActive] = useState("login")
    const handleClick = (btnType) => {
        setActive(btnType)
    }
    return (
        <>
            <div className='LoginPage'>
                <div className="loginHeaderSection">
                    <h1>Go ahead and set up <span>your account</span></h1>
                    <p>Sign-in-up to enjoy the best turf experience...</p>
                </div>
            </div>
            <div className="textSection">
                <div className="diffrentPageOption">
                    <RegisterButton
                        text={"Login"}
                        active={active === "login"}
                        handleClick={() => handleClick("login")}
                        className={active === "login" ? "active" : ""}
                    />
                    <RegisterButton
                        text={"Register"}
                        active={active === "register"}
                        handleClick={() => handleClick("register")}
                        className={active === "register" ? "active" : ""}
                    />
                </div>
                <div className="inputSection">
                    {
                        active ==="login" ? ( <LoginPage />):(<RegisterPage/>)
                    }
                   
                </div>
            </div>
        </>
    )
}
