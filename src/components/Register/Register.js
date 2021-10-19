import React from "react";
import { Link,useHistory,useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import useAuth from "../../Hooks/UseAuth";

const Register = () => {
  const location=useLocation();
  const history=useHistory();
  const { error, getName, getEmail, userRegistration, getPassword,googleSignIn } =
    useAuth();
    const redirect_uri= 'home'

    //   custom google login system
  const handleGoogleLogin=()=>{
    googleSignIn()
    .then(result=>{
        // console.log(result.user);
        // setUser(result.user)
        history.push(redirect_uri)
    })
  }
  return (
    <div className="w-25 m-auto p-3 mt-3 border rounded">
      <h2 className="text-info mb-3">Please,Register</h2>
      <div className="text-danger" style={{ height: "50px" }}>
        {error}
      </div>
      <form>
        <input
          onChange={getName}
          className="form-control mb-3"
          type="text"
          name=""
          id=""
          placeholder="Name"
        />

    
        <input
          onChange={getEmail}
          className="form-control mb-3"
          type="email"
          name=""
        
          id=""
          placeholder="E-mail"
        />
        <input
          onChange={getPassword}
          className="form-control mb-3"
          type="password"
          name=""
        
          id=""
          placeholder="Password"
        />
        <input
          onClick={userRegistration}
          className="btn btn-info text-light"
          type="submit"
        
          value="Register"
          
        />
        <input className="mx-5 btn btn-primary" type="reset" defaultValue="Reset"/>
      </form>
      <p>Or</p>
      <p className="text-secondary">Sign in with</p>
      <button onClick={handleGoogleLogin} className="btn btn-success me-2">
        Google
      </button>
      
      <p className="mt-3">
        Already registered? <Link to="/login">Log in</Link> here{" "}
      </p>
    </div>
  );
};

export default Register;

// import  { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Register.css'

// const Register = () => {
//     const [email,setEmail]=useState('');
//     const [password,setPassword]=useState('')
//     const handleEmailChange=e=>{
//         setEmail(e.target.value);
//     }
//     const handlePasswordChange=e=>{
//         setPassword(e.target.value);
//     }
//     const handleRegistration=e=>{
//         console.log(email,password);
// e.preventDefault();
//     }
//     return (
//         <div className="container mx-5">
//             <h2 className="text-primary">Please Register</h2>
//             <form onSubmit={handleRegistration}>
//   <div className="row mb-3">
//     <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
//     <div className="col-sm-10">
//       <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required/>
//     </div>
//   </div>
//   <div className="row mb-3">
//     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
//     <div className="col-sm-10">
//       <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required/>
//     </div>
//   </div>
  
//   {/* <div className="row mb-3">
//     <div className="col-sm-10 offset-sm-2">
//       <div className="form-check">
//         <input className="form-check-input" type="checkbox" id="gridCheck1"/>
//         <label className="form-check-label" htmlFor="gridCheck1">
//           Example checkbox
//         </label>
//       </div>
//     </div>
//   </div> */}
//   <button type="submit" className="btn btn-primary">Register</button>
// </form>
//             <Link to="/login">Already Registered ?</Link>
//         </div>
//     );
// };

