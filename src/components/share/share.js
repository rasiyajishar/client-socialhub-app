import React, { useState } from "react";
import classes from "./share.module.css";
import { Axios } from "../../instance/Axios";

import { AiFillCamera, AiFillSmile, AiOutlineClose } from "react-icons/ai";
import { IoMdPhotos } from "react-icons/io";
import profile from "../../Images/profile.jpg";

// import useSelector from 'react-redux'
const Share = () => {
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState("");
  console.log("first,", photo);
  // const{token}=useSelector((state)=>state.auth)

  const handlecreatepost = async () => {
    try {
      const jwt_token = `Bearer ${localStorage.getItem("jwt_token")}`;
      console.log(jwt_token);
      let filename = null;
      console.log("Description:", desc);
      console.log("Photo:", photo);

      if (photo) {
        const formData = new FormData();
        // filename = crypto.randomUUID() + photo.name;

        formData.append("photo", photo);
        formData.append("imageUrl", filename);
        

        // const response = await Axios.post("/upload", formData, {
        //   headers: {
        //     Authorization: jwt_token,
        //     "Content-Type": "multipart/form-data",
        //   },
        // });

        // Check if the image upload was successful
        // if (response.status === 200) {
          // const body = {
            
          //   desc,
          //   imageUrl: filename,
          // };

          const response = await Axios.post("/post/createPost", {body:photo});

          console.log(response.data);
        }
      // } else {
      //   return;
      // }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.share}>
      <div className={classes.sharetop}>
        <img src={profile} alt="profile" />
        <input
          type="text"
          placeholder="share your openion"
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={handlecreatepost}>POST</button>
      </div>
      <div className={classes.shareBottom}>
        <div className={classes.item}>
          Live Video
          <AiFillCamera />
        </div>
        <label htmlFor="photo" className={classes.item}>
          Photo
          <IoMdPhotos />
        </label>
        <div className={classes.item}>
          Activity
          <AiFillSmile />
        </div>
        <input
          style={{ display: "none" }}
          type="file"
          id="photo"
          onChange={(e) => setPhoto(e.target.files[0])}
        />{" "}
      </div>
      {photo && (
        <div className={classes.photocontainer}>
          <AiOutlineClose
            className={classes.closeIcon}
            onClick={() => setPhoto("")}
          />
          <img
            src={URL.createObjectURL(photo)}
            alt="imagefile"
            className={classes.photo}
          />
        </div>
      )}
    </div>
  );
};

export default Share;

// Importing necessary dependencies and styles
// import React, { useState } from 'react';
// import classes from './share.module.css';
// import axios from 'axios';

// import { AiFillCamera, AiFillSmile, AiOutlineClose } from 'react-icons/ai';
// import { IoMdPhotos } from 'react-icons/io';
// import profile from '../../Images/profile.jpg';

// // Component definition for the Share component
// const Share = () => {
//   // State variables for managing the description and photo in the component's state
//   const [desc, setDesc] = useState("");
//   const [photo, setPhoto] = useState("");

//   const handlecreatepost = async () => {
//     try {

//       let filename = null;

//       if (photo) {

//         const formData = new FormData();
//         // Generate a random filename and set it in the FormData
//         // filename = crypto.randomUUID() + photo.name;
//         formData.append("imageUrl", filename);
//         formData.append("photo", photo);

//         // Assuming your server endpoint for image upload is '/upload'
//         const response = await axios.post('/upload', formData);

//         // Check if the image upload was successful
//         if (response.status === 200) {
//           // Create a body object with the post description and image URL
//           const body = {
//             desc,
//             imageUrl: filename,
//           };

//           // Send a POST request to create a new post with the provided body
//           const createPostResponse = await axios.post('/createPost', body);

//           // Log the response data from creating the post
//           console.log(createPostResponse.data);
//         }
//       } else {
//         // Return if no photo is present
//         return;
//       }
//     } catch (error) {
//       // Log any errors that occur during the process
//       console.error(error);
//     }
//   };

//   // JSX structure for the Share component
//   return (
//     <div className={classes.share}>
//       {/* Top section of the share component */}
//       <div className={classes.sharetop}>
//         {/* Profile image */}
//         <img src={profile} alt='profile' />
//         {/* Input for typing the post description */}
//         <input type="text" placeholder='share your opinion' onChange={(e) => setDesc(e.target.value)} />
//         {/* Button to trigger the post creation */}
//         <button onClick={handlecreatepost}>POST</button>
//       </div>

//       {/* Bottom section of the share component for additional options */}
//       <div className={classes.shareBottom}>
//         {/* Live Video option */}
//         <div className={classes.item}>Live Video <AiFillCamera /></div>
//         {/* Photo option with a hidden file input */}
//         <label htmlFor='photo' className={classes.item}>Photo <IoMdPhotos /></label>
//         {/* Activity option */}
//         <div className={classes.item}>Activity <AiFillSmile /></div>
//         {/* Hidden file input for selecting a photo */}
//         <input style={{ display: 'none' }} type="file" id="photo" onChange={(e) => setPhoto(e.target.files[0])} />
//       </div>

//       {/* Display the selected photo (if any) */}
//       {photo && (
//         <div className={classes.photocontainer}>
//           {/* Close icon to remove the selected photo */}
//           <AiOutlineClose className={classes.closeIcon} onClick={() => setPhoto("")} />
//           {/* Display the selected photo */}
//           <img src={URL.createObjectURL(photo)} alt='imagefile' className={classes.photo} />
//         </div>
//       )}
//     </div>
//   );
// }

// // Export the Share component as the default export
// export default Share;
