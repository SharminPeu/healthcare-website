import React from 'react';
import { Link } from 'react-router-dom';
import './ShowServices.css'

const ShowServices = (props) => {
    const { id,name, img, description } = props.services;

    return (
        <div className="mx-auto col-md-6 my-5 image">
            <div className="service card ">
                <div className="image" >
                    <img className="img-fluid " src={img} alt="" />
                </div>

                <div className="text-start  mt-3">
                    <h5 className="fw-bold">Service Name:{name}</h5>
                    <p> <span className="text-secondary fw-bold ">Description: </span><span className="fw-bold text-primary">{description}</span> </p>
                    <div className="text-center">
                        <Link to={`/services/${id}`} className="btn btn-warning mb-2 ">Details</Link>
                    </div>
                </div>
                </div>
                </div>

                );
};

 export default ShowServices;