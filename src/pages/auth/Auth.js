// import React, { useState } from 'react';
// import bg from '../../Images/backgrdimg1.jpg';
// import { useNavigate } from 'react-router-dom';
// import classes from './auth.module.css';
// import { useDispatch } from 'react-redux';
// import { register } from '../../redux/autoSlice';
// import axios from 'axios';

// const Auth = () => {
//   const [isRegister, setIsRegister] = useState(false);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // const handleRegistration = async () => {
//   //   try {
//   //     const response = await axios.post('/auth/register', {
//   //       username,
//   //       email,
//   //       password,
//   //     });
  
//   //     console.log('Registration successful:', response.data);
//   //     dispatch(register(response.data));
//   //     alert('Registration success');
//   //     navigate('/');
//   //   } catch (error) {
//   //     console.error('Error during registration:', error.response.data);
//   //     alert('Registration failed');
//   //   }
//   // };
  
//   const handleRegistration = async (values) => {
//     try {
//       console.log("Axios request config:", axios.defaults);
//       await axios.post('http://localhost:5001/auth/register', {
//         username: values.username,
//         email: values.email,
//         password: values.password,
//       });
//       alert('Registration success');
//       navigate('/');
//     } catch (err) {
//       console.error('Registration failed', err);
//     }
//   };
  




//   // const handleLogin = async (values) => {
//   //   try {
//   //     const response = await axios.post(
//   //       'auth/login',
//   //       {
//   //         email: values.email,
//   //         password: values.password,
//   //       }
//   //     );

//   //     const { adminemail, token } = response.data;

//   //     if (adminemail) {
//   //       localStorage.setItem('adminAuthToken', token);
//   //       navigate('/Admin');
//   //     } else {
//   //       localStorage.setItem('authToken', token);
//   //       console.log('Login success');
//   //       navigate('/');
//   //       // location.reload();
//   //     }
//   //   } catch (error) {
//   //     console.error('Login failed', error);
//   //   } 
//   // };

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('/auth/login', {
//         email,
//         password,
//       });

//       console.log('Login successful:', response.data);

//       // Handle successful login
//       localStorage.setItem('jwt_token', response.data.token);
//       // dispatch(login(response.data));
//       navigate('/');
//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('Login failed');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     if (isRegister) {
//       handleRegistration({ username, email, password }); // Pass values here
//     } else {
//       handleLogin({ email, password }); // Pass values here
//     }
//   };
  

//   return (
//     <div className={classes.container}>
//       <div className={classes.container1}>
//         <div className={classes.left}>
//           <h3>Socialhub</h3>
//         </div>
//         <form onSubmit={handleSubmit} className={classes.right}>
//           {isRegister && (
//             <input
//               type="text"
//               placeholder="Type your username.."
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           )}
//           <input
//             type="email"
//             placeholder="Type your email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Type your password......"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit" className={classes.submitbtn}>
//             {isRegister ? 'Register' : 'Login'}
//           </button>
//           {isRegister ? (
//             <p onClick={() => setIsRegister((prev) => !prev)}>
//               Already have an account? Login
//             </p>
//           ) : (
//             <p onClick={() => setIsRegister((prev) => !prev)}>
//               Don't have an account? Register
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Auth;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './auth.module.css';
import axios from 'axios'



const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistration = async (values) => {
    try {
      await axios
      .post('http://localhost:4000/auth/register', {
        username: values.username,
        email: values.email,
        password: values.password,
      });
      alert('Registration success');
      navigate('/');
    } catch (err) {
      if (err.response && err.response.data) {
        console.error('Registration failed', err.response.data);
      } else {
        console.error('Registration failed', err.message);
      }
    }
  };
  
  
  

  const handleLogin = async () => {
    
    try {
      const response = await axios.post('http://localhost:4000/auth/login', {
        email,
        password,
      });

      console.log('Login successful:', response.data);

      // Handle successful login
      const data=response.data
      const userToken=data.token
      localStorage.setItem('jwt_token',userToken );
      navigate('/');
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      handleRegistration({ username, email, password });
    } else {
      handleLogin();
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.container1}>
      <div className={classes.left}>
                <h3>Socialhub</h3>
         </div>
        <form onSubmit={handleSubmit} className={classes.right}>
          {isRegister && (
            <input
              type="text"
              placeholder="Type your username.."
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Type your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Type your password......"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={classes.submitbtn}>
            {isRegister ? 'Register' : 'Login'}
          </button>
          {isRegister ? (
            <p onClick={() => setIsRegister((prev) => !prev)}>
              Already have an account? Login
            </p>
          ) : (
            <p onClick={() => setIsRegister((prev) => !prev)}>
              Don't have an account? Register
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Auth;
