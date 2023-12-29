import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from './Pages/Booking';
import Login from './component/AdminFlow/Login/Login';
import Home from './Pages/Home/Home';
import DetailPage from './Pages/DetailPage/DetailPage';
import SlotPage from './Pages/SlotPage';
import Admin from './Pages/Admin';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/adminLogin' element={<Login />} />
          <Route path='/turf/admin' element={<Admin />} />
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
