import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
// use fontawesome icon here
const Footer = () => {

  return (
    <div className=" container footer-container my-5">

      <div className="row">
        <div className="col-md-5">
          <div className="left-container text-start">
            <h3>We-care Healthcare</h3>
            <div className="icons-container d-flex text-center ">
              <div className="icon me-2">
                <i className="fab fa-instagram"></i>
              </div>
              <div className="icon me-2">
                <i className="fab fa-twitter"></i>
              </div>
              <div className="icon me-2">
                <i className="fab fa-youtube"></i>
              </div>
              <div className="icon me-2">
                <i className="fab fa-facebook"></i>
              </div>
            </div>
            <p className="mt-4 ">
              <small>
              Our Care Team is Ready to Help You!
              </small>
            </p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="footer-menu-container text-start">
            <h3>Explore</h3>
            <ul>
            <Link className="footer-menu" to="/home">
              <li >
                Home </li></Link>
              <Link className="footer-menu" to="/login"><li >
              Login</li></Link>
              <Link className="footer-menu" to="/doctors">
              <li >
              Doctors </li></Link>
              <Link className="footer-menu" to="/appointment">
              <li >
              Appointment</li></Link>
            </ul>
          </div>
        </div>
        <div className="col-md-5">
          <div className="right-footer-container ">
            <h3>Address</h3>
            <div className="phone d-flex align-items-center justify-content-center mt-4">
              <div className="all-icon ">
                <i className="fas fa-phone-volume me-2"></i>
              </div>
              <div>
                <h5>+8801776524524 </h5>
              </div>
            </div>
            <div className="phone d-flex align-items-center justify-content-center mt-4">
              <div className="all-icon ">
                <i class="far fa-envelope me-2"></i>
              </div>
              <div>
                <h6>we-care@gmail.com </h6>
              </div>
            </div>
            <div className="phone d-flex align-items-center justify-content-center mt-4">
              <div className="all-icon ">
                <i className="fas fa-map-marker-alt me-2"></i>
              </div>
              <div>
                <h6>
                  2750 Quadra Street Victoria Road,
                  <br /> 102 1st Avenue,Gulshan,Bangladesh
                </h6>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-5 text-center">
          <small>we-care <i className="fas fa-copyright "></i>. All rights reserved.</small>
        </p>
      </div>
    </div>

  );
};

export default Footer;