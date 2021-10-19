import React from 'react';
import './Appointment.css'
const Appointment = () => {
    return (
        <div className="container my-5">
            {/* contact address section */}
            <h2 className="text-center fw-bold text-primary fw-2 mt-4">Make an Appointment</h2>
            <div className="row mt-5">
                <div className=" text-start col-md-5">

                    <h2 className="text-secondary">Get In Touch: </h2>

                    <div className="right-footer-container  ">

                        <div className="phone d-flex justify-content-start align-items-start  mt-4">
                            <div className="all-icon ">
                                <i className="fas fa-phone-volume me-2"></i>
                            </div>
                            <div>
                                <h5>+8801776524524 </h5>
                            </div>
                        </div>
                        <div className="phone d-flex justify-content-start align-items-start  mt-4">
                            <div className="all-icon ">
                                <i className="far fa-envelope me-2"></i>
                            </div>
                            <div>
                                <h6>we-care@gmail.com </h6>
                            </div>
                        </div>
                        <div className="phone d-flex align-items-start justify-content-start mt-4">
                            <div className="all-icon ">
                                <i className="fas fa-map-marker-alt me-2"></i>
                            </div>
                            <div>
                                <h6>
                                    2750 Quadra Street Victoria Road,
                                    <br /> 102 1st Avenue, Gulshan,Bangladesh
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>

{/* Appointment Form */}
<div className="col-md-7 border form text-dark fw-bolder p-2">
<form className="row g-3">
    
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Full Name</label>
    <input type="email" className="form-control" id="inputEmail4" placeholder="Enter Your Full-Name"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Email</label>
    <input type="password" className="form-control" id="inputPassword4" placeholder="Enter Your Email"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Enter Your Address"/>
  </div>
  <div className="">
  <div className="col-md-6">
  
  <label className="form-label" for="inputState">Select Doctor</label>
  <select className="form-select" id="inputState">
    <option selected>Choose...</option>
    <option value="1">Prof: Farshid Rahman</option>
    <option value="2">Associate Prof: Nourin Nou</option>
    <option value="3">Dr: Mizanur Rahman</option>
    <option value="4">Dr: Subrin Sultana</option>
    <option value="5">Dr:Samiuzzaman</option>
    <option value="6">Dr: Shohely Zaman</option>

  </select>

</div>
<div className="col-md-6">
  
  <label className="form-label" for="inputState">Select Department</label>
  <select className="form-select" id="inputState">
    <option selected>Choose...</option>
    <option value="1">Cardiology</option>
    <option value="2">Neurology</option>
    <option value="3">Radiology</option>
    <option value="4">Gastrology</option>
    <option value="5">Pediatric</option>
    <option value="6">Gynocolosy</option>

  </select>

</div>
  </div>
 

  <div className="col-12">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
</div>
               
                </div>
            </div>

    

    );
};

export default Appointment;


