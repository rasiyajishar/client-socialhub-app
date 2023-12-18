import React from 'react'
import classes from './sidebar.module.css'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className={classes.container} >
      <div className={classes.container1}>
<Link to="/Friends" className={classes.items}>Friends</Link>

      </div>
    </div>
  )
}

export default Sidebar