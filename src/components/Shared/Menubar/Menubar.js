import React from 'react';
import './Menubar.css'

import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

//set  all options in menubar
const MenuBar = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="container menubar-container mt-3 mb-2">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="d-flex justify-content-center  ">
                    <span className="navbar-brand text-white  fw-bold ms-2" >We-care Healthcare</span>
                </div>
                <div className="collapse navbar-collapse  d-flex align-items-end justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ">
                        <Link to="/home" className="items text-white fw-bold">
                            <li>Home</li>
                        </Link>
                        <Link to="/services" className="items text-white fw-bold">
                            <li>Services</li>
                        </Link>

                        {/* <Link to="/register" className="items text-white fw-bold">
                            <li>Register</li>
                            
                        </Link> */}
                       {user.displayName && <span className="fw-bold mt-2" style={{color:'white'}}>Hello  {user.displayName} </span>}

                        {user.displayName ?

                            <button onClick={logOut}>Log Out </button>
                            :
                            <Link to="/login" className="items text-white fw-bold">
                                <li>Login</li>
                            </Link>


                        }
                        <Link to="/doctors" className="items text-white fw-bold">
                            <li>Doctors</li>
                        </Link>

                        <Link to="/appointment" className="items text-white fw-bold">
                            <li>Appointment</li>
                        </Link>

                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default MenuBar;