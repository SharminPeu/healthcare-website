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

{/* login form  */}
<div className="col-md-7 border form text-dark fw-bolder p-2">
<form class="row g-3">
    
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Full Name</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="Enter Your Full-Name"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Email</label>
    <input type="password" class="form-control" id="inputPassword4" placeholder="Enter Your Email"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Enter Your Address"/>
  </div>
  <div class="">
  <div class="col-md-6">
  
  <label class="form-label" for="inputState">Select Doctor</label>
  <select class="form-select" id="inputState">
    <option selected>Choose...</option>
    <option value="1">Prof: Farshid Rahman</option>
    <option value="2">Associate Prof: Nourin Nou</option>
    <option value="3">Dr: Mizanur Rahman</option>
    <option value="4">Dr: Subrin Sultana</option>
    <option value="5">Dr:Samiuzzaman</option>
    <option value="6">Dr: Shohely Zaman</option>

  </select>

</div>
<div class="col-md-6">
  
  <label class="form-label" for="inputState">Select Department</label>
  <select class="form-select" id="inputState">
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
 

  <div class="col-12">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
</div>
               
                </div>
            </div>

    

    );
};

export default Appointment;


// import React from 'react';
// import './Appointment.css'

// const Appointment = () => {
//     return (
//         <div>
//             <h2>Make an appoinment </h2>
//         </div>
//     );
// };

// export default Appointment;