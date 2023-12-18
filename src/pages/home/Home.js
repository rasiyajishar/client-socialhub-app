import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'
import classes from './home.module.css'
import Friends from '../../components/friends/Friends'
const Home = () => {
  return (
    <>
     <div className={classes.container}><div className={classes.container1}><Navbar /></div>
     <div className={classes.main}> <Sidebar />
    <Posts />
    <Friends />
      </div>
     </div>
    
      
   
    </>
   
   
  )
}

export default Home