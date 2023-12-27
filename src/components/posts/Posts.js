import React, { useState, useEffect } from 'react';
import classes from './posts.module.css';
import Post from '../post/Post';


import Share from '../share/Share';
import { Axios } from '../../instance/Axios';



const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(posts)
  useEffect(() => {
    const fetchTimelinePosts = async () => {
      try {
        const response = await Axios.get('/post/timelinePosts');
        setPosts(response.data);
       
      } catch (error) {
        console.error('Error fetching timeline posts:', error);
        if (error.response && error.response.status === 403) {
          // Handle 403 Forbidden error, e.g., redirect to login or display a message
          console.log('User is not authorized to access timeline posts.');
        } else {
          // Handle other errors
          console.log('An error occurred while fetching timeline posts.');
        }
      } finally {
        setLoading(false);
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
