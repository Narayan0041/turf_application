
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function AdminProfile() {
    const defaultProfile = "/image/adminProfile.png";
    const [profile, setProfile] = useState(defaultProfile);
    const [inputVisible, setInputVisible] = useState(false);
    const storedLoginUserData = JSON.parse(localStorage.getItem("loginUser")) || [];
    const [loginUserData, setLoginUserData] = useState(storedLoginUserData[0] || {});
    useEffect(() => {
        if (loginUserData) {
            setProfile(loginUserData.profile);
        }
    }, [loginUserData]);

    const handleChange = (event) => {
        const target = event.target.value;
        setProfile(target);
    };

    const handleClick = (event) => {
        const target = event.target.className;
        if (target === "adProfile") {
            const newData = { ...loginUserData, profile };
            const updatedData = [newData];
            localStorage.setItem("loginUser", JSON.stringify(updatedData));
        }
    };
    let HandleAddImage = () => {
        setInputVisible(!inputVisible)
    }

    return (
        <div className='AdminProfile' onClick={handleClick}>
            <div className="AdminDetailSection">
                <div className="ProfileImageSection">
                    <img
                        src={profile ? profile : "/image/adminProfile.png"}
                        style={{ width: profile === defaultProfile ? '110px' : '100px' }}
                        alt='adminProfileSection'
                        className='profileImage'
                    />
                    <div className="plusIcon" onClick={HandleAddImage}>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
                <div className="adminDetailTextSection">
                    {inputVisible && (
                        <div className="imageUrlInput">
                            <img src='/image/broken-link.png' width={20} alt='linkImage' />
                            <input type='text' placeholder='Enter Profile Picture Link' onChange={handleChange} />
                        </div>
                    )
                    }
                    <div>
                        <h1>{loginUserData.Name ? (loginUserData.Name) : "Hello User..."}</h1>
                        <p>{loginUserData.Email ? (loginUserData.Email) : "user email.com"}</p>
                        <p>{loginUserData.Mobile ? (loginUserData.Mobile) : 9322363737}</p>
                    </div>
                    <button className='adProfile'>Submit</button>
                </div>
            </div>
        </div>
    )
}

