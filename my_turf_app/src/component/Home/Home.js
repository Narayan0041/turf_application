import React from 'react'
import Slider from '../../common/Slider/Slider';
import ProfileDetailSection from '../../component/ProfileDetailSection';
import SliderInfo from "../../common/DifferentSlider/SliderInfo"
import Navbar from '../Navbar/Navbar';
import TourSection from '../TourSection/TourSection';
import CheckOut from '../CheckOut/CheckOut';
import ShowCaseHeader from '../ShowCase/ShowCaseHeader';
import Recommended from '../Recommended/Recommended';
import RecommendedComponent from '../Recommended/RecommendedComponent';
import Query from '../Query/Query';
import CheckOutSlot from '../CheckOutSlot/CheckOutSlot';
import NavbarPagesContainer from '../../common/Navbar';
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
            {/* <NavbarPagesContainer/> */}
        </div>
    )
}
