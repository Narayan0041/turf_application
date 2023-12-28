import React from 'react'
import Slider from '../../../common/Slider/Slider'
import CheckOutSlot from '../CheckOutSlot/CheckOutSlot'
import TourSection from '../TourSection/TourSection'
import ShowCaseHeader from '../ShowCase/ShowCaseHeader'
import RecommendedComponent from '../Recommended/RecommendedComponent'
import CheckOut from '../CheckOut/CheckOut'
import Query from '../Query/Query'
import Navbar from '../Navbar/Navbar'
export default function Home() {
    return (
        <div>
            {/* <ProfileDetailSection UserName={"Shivnarayan"} Month={"December"} Date={"10"} Day={"Sunday"} image={"https://media.licdn.com/dms/image/D4D03AQFS3fyfROD31Q/profile-displayphoto-shrink_100_100/0/1689414479828?e=1708560000&v=beta&t=Rb9RrU6LGCw748mwdQZDi7_rxUhZmkTeTKbwD_chWYg"} /> */}
            <Slider />
            <CheckOutSlot/>
            <TourSection/>
            <ShowCaseHeader/>
            <RecommendedComponent/>
            <CheckOut/>
            <Query/>
            <Navbar/>
        </div>
    )
}
