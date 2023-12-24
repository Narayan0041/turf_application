import React from 'react'

export default function ProfileDetailSection({ UserName, Month, Date, Day, image }) {
    return (
        <>
            <div className="ProfileDetailSection">
                <div className="UserDetailSection">
                    <h2>Hi,<span>{UserName}</span></h2>
                    <p>{Month}  {Date},{Day}</p>
                </div>
                <div className="UserProfileSection">
                    <img src={image} width={45} alt='UserProfileImage' />
                </div>
            </div>
        </>
    )
}
