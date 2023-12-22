import React from 'react'
import classes from './sidebar.module.css'
import { Link } from 'react-router-dom'
import {FaUserFriends} from 'react-icons/fa'
import {FiMonitor} from 'react-icons/fi'
import {MdGroups, MdNewspaper, MdOutlineRssFeed, MdSettingsSuggest} from 'react-icons/md'
import {RiPagesFill} from 'react-icons/ri'
const Sidebar = () => {
  return (
//     <div className={classes.container} >
//       <div className={classes.container1}>


// <Link to="/Friends" className={classes.items}><FaUserFriends />Friends</Link><br/>

//       </div>
//     </div>
    
<div>
<div><Link to="/Friends" className={classes.items}><FaUserFriends />Friends</Link><br/>
<Link to="/Posts" className={classes.items}><RiPagesFill />Pages</Link><br/>  
</div>
</div>
  )
}

export default Sidebar