import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./post.module.css";
import profile from "../../Images/profile.jpg";
import natureimg from "../../Images/natureimg.jpg"
import { format } from "timeago.js";
import { IoMdSettings, IoMdShareAlt } from 'react-icons/io'
import { Axios } from "../../instance/Axios";
import { AiFillLike, AiOutlineComment, AiOutlineLike } from "react-icons/ai";

import Comment from '../comment/Comment'





const Post = ({ post, user }) => {
  const [authorDetails, setAuthorDetails] = useState({});

  const [isLiked, setIsLiked] = useState(post?.likes?.includes(user._id));
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showComments, setShowComments] = useState(false);
 
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");



  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await Axios.get(`/user/find/${post.userId}`);
        setAuthorDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, [post.userId]);
  

  // useEffect(() => {
  //   const fetchComments = async () => {
  //     try {
  //       const response = await Axios.get(`/comment/${post._id}`);
  //       setComments(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchComments();
  // }, [post._id]);




  const handleComment = async (e) => {
    // e.preventDefault();
    // try {
    //   const response = await Axios.post('/comment', { text: commentText, postId: post._id });
    //   setComments((prev) => [response.data, ...prev]);
    //   setCommentText("");
    // } catch (error) {
    //   console.error(error);
    // }
  };



  const handleDeletePost = async () => {
    // try {
    //   await Axios.delete(`/post/deletePost/${post._id}`);
    //   window.location.reload();
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleLike = async () => {
    // try {
    //   await Axios.put(`/post/likePost/${post._id}`);
    //   setIsLiked((prev) => !prev);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleDislike = async () => {
    // try {
    //   await Axios.put(`/post/dislikePost/${post?._id}`);
    //   setIsLiked((prev) => !prev);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <Link to={`/Profile/${authorDetails._id}`} className={classes.topleft}>
          <img src={profile} alt="profile" className={classes.postauthorimg} />
          <div className={classes.postDetails}>
            <span>{authorDetails.username}</span>
            <span className={classes.date}>{format(post?.createdAt)}</span>
          </div>
        </Link>
        {user._id === post?.userId && (
          <IoMdSettings onClick={() => setShowDeleteModal((prev) => !prev)} />
        )}
        {showDeleteModal && (
          <span className={classes.deleteModal} onClick={handleDeletePost}>
            Delete post
          </span>
        )}
      </div>
      <p className={classes.desc}>{post?.desc}</p>
      <div className={classes.postImgContainer}>
        <img
          src={
            post.imageUrl
              ? `http://localhost:5000/images/${post.imageUrl}`
              : {natureimg}
          }
          alt="not found"
          className={classes.postImg}
        />
      </div>
      <div className={classes.actions}>
        {!isLiked && (
          <span className={classes.action} onClick={handleLike}>
            Like <AiOutlineLike />
          </span>
        )}
        {isLiked && (
          <span className={classes.action} onClick={handleDislike}>
            Liked <AiFillLike />
          </span>
        )}
        <span
          className={classes.action}
          onClick={() => setShowComments((prev) => !prev)}
        >
          Comment <AiOutlineComment />
        </span>
        <span className={classes.action}>
          Share <IoMdShareAlt />
        </span>
      </div>
      {showComments && (
        <>
          <div className={classes.comments}>
            {comments?.length > 0 ? (
              comments?.map((comment) => (
                <Comment comment={comment} key={comment._id} />
              ))
            ) : (
              <h3 style={{ padding: "1.25rem" }}>No comments yet.</h3>
            )}
          </div>
          <form className={classes.commentSection} onSubmit={handleComment}>
            <textarea
              value={commentText}
              type="text"
              placeholder="Type comment..."
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button type="submit">Post</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Post;
