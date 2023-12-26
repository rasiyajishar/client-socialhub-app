import React, { useState } from 'react'
import classes from './share.module.css'
import axios from 'axios';

import {AiFillCamera,AiFillSmile,AiOutlineClose} from 'react-icons/ai'
import {IoMdPhotos} from 'react-icons/io'
import profile from '../../Images/profile.jpg'

// import useSelector from 'react-redux'
const Share = () => {
  const[desc,setDesc]=useState("")
  const[photo,setPhoto]=useState("")
  // const{token}=useSelector((state)=>state.auth)

  const handlecreatepost = async () => {
    try {
      let filename = null;
  
      if (photo) {
        const formData = new FormData();
        filename = crypto.randomUUID() + photo.name;
        formData.append("imageUrl", filename);
        formData.append("photo", photo);
  
        // Assuming your server endpoint for image upload is '/upload'
        const response = await axios.post('/upload', formData);
  
        // Check if the image upload was successful
        if (response.status === 200) {
          const body = {
            desc,
            imageUrl: filename,
          };
  
          // Assuming your server endpoint for creating a post is '/createPost'
          const createPostResponse = await axios.post('/createPost', body);
  
          // Handle the response from creating a post (e.g., show a success message)
          console.log(createPostResponse.data);
        }
      } else {
        // Handle case where no photo is selected
        return;
      }
    } catch (error) {
      console.error(error);
      // Handle errors (e.g., show an error message to the user)
    }
  };
  

  return (
    <div className={classes.share}>

      <div className={classes.sharetop}>
        <img src={profile} alt='profile'/>
        <input type="text" placeholder='share your openion' onChange={(e)=>setDesc(e.target.value)} />
      <button onClick={handlecreatepost}>POST</button>
      </div>
      <div className={classes.shareBottom}>
        <div className={classes.item}>Live Video
        <AiFillCamera /></div>
        <label htmlFor='photo' className={classes.item}>Photo
        <IoMdPhotos /></label>
        <div className={classes.item}>Activity
        <AiFillSmile /></div>
        <input style={{display:'none'}} type ="file"
id="photo" onChange={(e)=>setPhoto(e.target.files[0])} />    </div>
   {photo && (
    <div className={classes.photocontainer}>
      <AiOutlineClose className={classes.closeIcon} onClick={()=>setPhoto("")} />
      <img src ={URL.createObjectURL(photo)} className={classes.photo}/>
    </div>
   )}
   
    </div>
  )
}

export default Share