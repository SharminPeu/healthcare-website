import React from 'react';
import "./NotFound.css"
// set error for wrong typing 
const NotFound = () => {
    return (
        <div className="error">
            
            <h2 className="text-danger fw-bold fs-2">404</h2>
            <p className="fw-bold">Oops!! You are lost </p>
            <p className="text-secondary fst-italic">The page you are looking for was not found</p>
            
             
        </div>
    );
};

export default NotFound;