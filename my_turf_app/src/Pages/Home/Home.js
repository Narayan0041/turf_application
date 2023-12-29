import React from 'react'
import CheckOut from '../../component/UserSection/CheckOut/CheckOut'
import Slider from '../../common/Slider/Slider'
import CheckOutSlot from '../../component/UserSection/CheckOutSlot/CheckOutSlot'
import TourSection from '../../component/UserSection/TourSection/TourSection'
import RecommendedComponent from '../../component/UserSection/Recommended/RecommendedComponent'
import ShowCaseHeader from '../../component/UserSection/ShowCase/ShowCaseHeader'
import Query from '../../component/UserSection/Query/Query'
import Navbar from '../../component/UserSection/Navbar/Navbar'
import ProfileDetailSection from '../../component/UserSection/ProfileDetailSection'
export default function Home() {
    return (
        <>
            {/* <ProfileDetailSection UserName={"Shivnarayan"} Month={"December"} Date={"10"} Day={"Sunday"} image={"https://media.licdn.com/dms/image/D4D03AQFS3fyfROD31Q/profile-displayphoto-shrink_100_100/0/1689414479828?e=1708560000&v=beta&t=Rb9RrU6LGCw748mwdQZDi7_rxUhZmkTeTKbwD_chWYg"} /> */}
            <Slider />
            <CheckOutSlot />
            <TourSection />
            <ShowCaseHeader />
            <RecommendedComponent />
            <CheckOut />
            <Query />
            <Navbar />
        </>
    )
}
