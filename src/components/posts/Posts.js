import React from 'react'
import Share from '../share/Share';
import classes from './posts.module.css'
const Posts = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container1}>
        <Share />
        <div className={classes.posts}></div>
      </div>
    </div>
  )
}

export default Posts