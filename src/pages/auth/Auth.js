import React, { useState } from 'react';
import { Axios } from 'axios'
import bg from '../../Images/backgrdimg1.jpg'; // Adjust the relative path based on your file structure
import { useNavigate } from 'react-router-dom';
import classes from "./auth.module.css";



const Auth = () => {
  const [isregister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      if (isregister) {
        if (username === "" || email === "" || password === "") {
          setError("fill all fields");
          return;
        }

        const body = {
          username, email, password
        };

        // const data = await Axios.post("/auth/login", body);
        const data = await Axios.post("/auth/login",body)
        console.log(data.data);
        navigate("/")
        alert(data.data);
      console.log(data.data);
      } else {
        if (email === "" || password === "") {
          // setError("fill all fields");
          alert("fill all fields")
          return;
        }
        const body = {email,password}
        const data = await Axios.post('/auth/login',body)
      }

     
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.container1}>
        <div className={classes.left}>
          <h3>Socialhub</h3>
          {/* <img className={classes.img} src={bg} alt='img not found' /> */}
        </div>
        <form onSubmit={handleSubmit} className={classes.right}>
          {isregister && <input type="text" placeholder='Type your username..' onChange={(e) => setUsername(e.target.value)} />}
          <input  type='email' placeholder='Type your email' onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='Type your password......' onChange={(e) => setPassword(e.target.value)} />
          <button className={classes.submitbtn}>
            {isregister ? "Register" : "Login"}
          </button>
          {isregister ?
            <p onClick={() => setIsRegister(prev => !prev)}> Already have an account? Login </p>
            : <p onClick={() => setIsRegister(prev => !prev)}> Don't have an account? Register</p>
          }
        </form>
      </div>
    </div>
  );
};

export default Auth;
