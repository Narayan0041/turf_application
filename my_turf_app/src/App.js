import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from './Pages/Booking';
import Login from './component/AdminFlow/Login/Login';
import Home from './Pages/Home/Home';
import DetailPage from './Pages/DetailPage/DetailPage';
import SlotPage from './Pages/SlotPage';
import Admin from './Pages/Admin';
import AdminProfile from './component/AdminFlow/AdminProfile/AdminProfile';
import { useDispatch, useSelector } from 'react-redux';
import ProfileSection from './component/AdminFlow/ProfileSection/ProfileSection';
import { LoginUserData } from './store/action';
import { useEffect } from 'react';
import UserApprove from './component/AdminFlow/UserApprove/UserApprove';
function App() {
  const registerData =useSelector((data)=>(data.UserRegister));
  const dispatch =useDispatch();
  useEffect(() => {
    let storeLoginUserData = JSON.parse(localStorage.getItem("loginUser")) || [];
    let loginUserData =storeLoginUserData[0]
    dispatch(LoginUserData(loginUserData));
  },[])
  return (
    <>
      <Router>
        <Routes>
          <Route path='/turf/adminLogin' element={<Login />} />
          <Route path='/turf/admin' element={<Admin />} />
          <Route path='/turf/adminProfile' element={<AdminProfile />} />
          <Route path='/' element={<Home />} />
          <Route path='/turfDetailPage' element={<DetailPage />} />
          <Route path='/selectTheSlot' element={<SlotPage />} />
          <Route path='/selectTheSlot/:image/:section/:timing' element={<Booking />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
