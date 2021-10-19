import React from "react";
import { Link} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import useAuth from "../../Hooks/UseAuth";

const Register = () => {
  // const location=useLocation();
  // const history=useHistory();
  const { error, getName, getEmail, userRegistration, getPassword,googleSignIn } =
    useAuth();
  


  return (
    <div className=" login w-25 m-auto p-3 mt-3 border rounded">
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
      <button onClick={googleSignIn} className="btn btn-success me-2">
        Google
      </button>
      
      <p className="mt-3">
        Already registered? <Link className="text-decoration-none" to="/login">Log in</Link> here{" "}
      </p>
    </div>
  );
};

export default Register;

