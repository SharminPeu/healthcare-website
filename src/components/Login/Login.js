import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import useAuth from "../../Hooks/UseAuth";

const Login = () => {
  const {
    signInWithEmail,
    googleSignIn,
    userEmail,
    userPassword,
    error,
  } = useAuth();
  return (
    <div className="w-25 m-auto p-3 mt-3 border rounded">
      <h2 className="text-secondary mb-3">Please, Log in</h2>
      <div className="text-danger" style={{ height: "50px" }}>
        {error}
      </div>
      <form>
        <input
          onChange={userEmail}
          className="form-control mb-3"
          type="email"
          name=""
          id=""
          placeholder="E-mail"
        />
        <input
          onChange={userPassword}
          className="form-control mb-3"
          type="password"
          name=""
          id=""
          placeholder="Password"
        />
        <input
          onClick={signInWithEmail}
          className="btn btn-secondary mb-3"
          type="submit"
          value="Login"
        />
        <input className="btn btn-info mb-3 mx-5" type="reset" defaultValue="Reset"/>
      </form>
      <p>Or</p>
      <p className="text-secondary">Sign in with</p>
      <button onClick={googleSignIn} className="btn btn-success me-2">
        Google
      </button>
      <p className="mt-3">
        New user? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';


// const Login = () => {
//     const {signInUsingGoogle}=useAuth();
//     return (
//         <div>
//             <h2>Please login</h2>
//             <form >
//                 <label htmlFor="email">Email:</label>
//                 <input type="text" name="email"/>
//                 <br/>
//                 <label htmlFor="password">Password:</label>
//                 <input type="password" name="password"/>
//             </form>
//             <div>
//             <button onClick={signInUsingGoogle}>Google sign in</button>
//             </div>
            
//             <br />
//             <Link to="/register">New User?</Link>
//         </div>
//     );
// };

// export default Login;