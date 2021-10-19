import React from "react";
import { Link,useLocation,useHistory } from "react-router-dom";
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
  const location=useLocation();
  const history=useHistory();
//   console.log('came from',location.state?.from);
  const redirect_uri=location.state?.from || 'home'
  const handleEmailLogin=()=>{
    signInWithEmail()
    .then(result=>{
        history.push(redirect_uri);
    })
  }
//   custom google login system
  const handleGoogleLogin=()=>{
    googleSignIn()
    .then(result=>{
        // console.log(result.user);
        // setUser(result.user)
        history.push(redirect_uri)
    })
    // .catch(error=>{
    //     setError(error.message);
    //     })
  }
  
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
          onClick={handleEmailLogin}
          className="btn btn-secondary mb-3"
          type="submit"
          value="Login"
        />
        <input className="btn btn-info mb-3 mx-5" type="reset" defaultValue="Reset"/>
      </form>
      <p>Or</p>
      <p className="text-secondary">Sign in with</p>
      <button onClick={handleGoogleLogin} className="btn btn-success me-2">
        Google
      </button>
      <p className="mt-3">
        New user? <Link className="text-decoration-none" to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;

