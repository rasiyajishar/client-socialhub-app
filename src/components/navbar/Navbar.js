import React,{useState} from 'react'
import classes from './navbar.module.css'
import profile from '../../Images/profile.jpg'
import { FaSearch } from "react-icons/fa";
import { useNavigate,Link } from 'react-router-dom';

const Navbar = () => {
    const [showmodal,setShowmodal] =useState(false)
    const navigate=useNavigate()
    const togglemodal=()=>{
        setShowmodal(prev => !prev)
    }

    // handle Logout 
const handlelogout =()=>{
    localStorage.clear()
    navigate("/auth")
}

  return (
    <div className={classes.container}>
        <div className={classes.container1}>
            <div className={classes.left}>socialhuB</div>
            <div className={classes.right}>
              <form className={classes.searchform}>
            <input type='text' placeholder='search profile..'/>
            <FaSearch className={classes.searchicon}/>
            </form>  
         <img src={profile} alt='img not found' className={classes.personimage} onClick={togglemodal} />
          {showmodal && ( 
          <div className={classes.modal}> 
           <span onClick={handlelogout} className={classes.logout}>logout</span>
           <Link to="/Updateprofile"className={classes.Updateprofile}> UpdateProfile</Link>
           </div>
           )}
            </div>
        </div>
    </div>
  )
}

export default Navbar