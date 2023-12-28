import React, { useState, useEffect } from 'react';
import classes from './posts.module.css';
import Post from '../post/Post';


import Share from '../share/Share';
import { Axios } from '../../instance/Axios';



const Posts = () => {
  const [posts, setPosts] = useState([]);
 


  useEffect(() => {
  const fetchTimelinePosts = async () => {
    try {
      const response = await Axios.get('/post/timelinePosts');
      console.log(response)
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching timeline posts:', error);
      if (error.response && error.response.status === 403) {
        // Handle 403 Forbidden error - redirect to login or show a message
        // handleUnauthorizedAccess();
      } else {
        // Handle other errors
        console.log('An error occurred while fetching timeline posts.');
      }
    }
  };

  fetchTimelinePosts();
}, []);


  
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Share />
        <div className={classes.posts}>
          {posts?.map((post) => (
            <Post post={post} key={post._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;


// const createPostResponse = await Axios.post("/post/createPost", {body:photo});
