import React from 'react';
import "./Footer.css"
// use fontawesome icon here
const Footer = () => {

  return (
    <div className=" container footer-container my-5">

      <div className="row">
        <div className="col-md-5">
          <div className="left-container text-start">
            <h3>e-Cademy Learning</h3>
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
                Working to bring significant changes in online-based learning by doing extensive research for course curriculum preparation, student engagements, and looking forward to the flexible education!
              </small>
            </p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="footer-menu-container text-start">
            <h3>Explore</h3>
            <ul>
              <li className="footer-menu">Home</li>
              <li className="footer-menu">Courses</li>
              <li className="footer-menu">Contact us</li>
              <li className="footer-menu"> About us</li>
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
                <h6>learn@e-cademy.com </h6>
              </div>
            </div>
            <div className="phone d-flex align-items-center justify-content-center mt-4">
              <div className="all-icon ">
                <i className="fas fa-map-marker-alt me-2"></i>
              </div>
              <div>
                <h6>
                  2750 Quadra Street Victoria Road,
                  <br /> 102 1st Avenue, New York,Canada
                </h6>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-5 text-center">
          <small>e-Cademy <i className="fas fa-copyright "></i>. All rights reserved.</small>
        </p>
      </div>
    </div>

  );
};

export default Footer;