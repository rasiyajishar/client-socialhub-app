import React, { useState, useEffect } from 'react';
import classes from './posts.module.css';
import Post from '../post/post';
import axios from 'axios';

import Share from '../share/Share';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchTimelinePosts = async () => {
      try {
        const response = await axios.get('/post/timelinePosts');
        setPosts(response.data); // Assuming the data returned is an array
      } catch (error) {
        console.error(error);
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
