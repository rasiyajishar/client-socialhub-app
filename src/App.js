
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Updateprofile from './pages/updateProfile/UpdateProfile';
import ProfileDetails from './pages/profileDetails/ProfileDetails';
import Auth from './pages/auth/Auth';

import axios from "axios";

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Authorization:
  },
});




function App() {
  return (
    <div>
      <Routes>
<Route path='/' element={<Home />} />
<Route path='/updateprofile' element={<Updateprofile />} />
<Route path='/profiledetails' element={<ProfileDetails />} />
<Route path='/auth' element={<Auth />} />
      </Routes>
      
    </div>
  );
}

export default App;
