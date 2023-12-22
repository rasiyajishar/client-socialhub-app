import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from "./auth.module.css"
const Auth = () => {
 const[isregister,setIsRegister]=useState(false)
 const[userName,setUsername]=useState("")
 const[email,setEmail]=useState("")
 const[password,setpassword]=useState("")
 const[error,setError]=useState("false")
const navigate =useNavigate()

const handleSubmit = async(e)=>{
e.preventdefault()
}
  return (
    <div className={classes.container}>
      <div className={classes.container1}>
        <div className={classes.left}>
          <h3>socialhub</h3>
        </div>
        <form onSubmit={handleSubmit} className={classes.right}>
{isregister && <input type="text" placeholder='Type your username..' onChange={(e)=>setUsername(e.target.value)}/>}
<input type='email' placeholder='Type your email' onChange={(e)=>setEmail(e.target.value)} />
<input type='password' placeholder='Type your password......' onChange={(e)=>setpassword(e.target.value)}/> 
<button className='submitbtn' >
  {isregister ? "Register" :"Login"}
</button>
{isregister ? 
<p> onClick={()=>setIsRegister(prev=>!prev)}  Already have an account? Login </p>
:<p> onClick={()=>setIsRegister(prev=>!prev)} Don't have an account? Register</p>
}
        </form>
      </div>
    </div>
  )
}

export default Auth