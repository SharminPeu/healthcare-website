import React from 'react';
import './ShowServices.css'

const ShowServices = (props) => {
    const { name, img, description } = props.services;

    return (
        <div className="mx-auto col-md-6 my-5">
            <div className="course card ">
                <div className="image" >
                    <img className="img-fluid " src={img} alt="" />
                </div>

                <div className="text-start  mt-3">
                    <h5 className="fw-bold">Service Name:{name}</h5>
                    <p> <span className="text-secondary fw-bold ">Description: </span><span className="fw-bold text-primary">{description}</span> </p>
                    <div className="text-center">
                        <button className="btn btn-warning ">Details</button>
                    </div>
                </div>
                </div>
                </div>

                );
};

 export default ShowServices;