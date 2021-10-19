import React from 'react';
import './DoctorDetail.css'
// show doctors 
const DoctorDetail = (props) => {
    const { name, img,specialised, description } = props.doctor;

    return (
        <div className="col-md-4 mx-auto">

            <div className="doctor mt-5">

                <div className="image " >
                    <img className="img-fluid " src={img} alt="" />
                </div>
                <div className="text-start fw-bold">

                    <div className="text-start  mt-3">
                        <h5 className="fw-bold">{name}</h5>
                        <p> <span className="text-secondary fw-bold ">Specialised In: </span><span className="fw-bold text-primary">{specialised}</span> </p>

                        <p> <span className="text-secondary fw-bold "> </span> <span className="text-info fw-bold">{description}</span></p>
                        <footer >
                        <div className="text-center">
                            <button className="btn btn-warning ">Make An Appointment</button>
                        </div>
                        </footer>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};


export default DoctorDetail;