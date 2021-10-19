import React, { useEffect, useState } from 'react';
import DoctorDetail from '../DoctorDetail/DoctorDetail';
const DoctorList = () => {
            // set data from fakedata 
const [doctor,setDoctor]=useState([]);
// load data from fakedata 
    useEffect(()=>{
        fetch('./doctorsData.json')
        .then(res=>res.json())
        .then(data=>setDoctor(data))
    },[])
    return (
        <div className="container">
          
           <div className="row mt-5">
               <div className="col-md-12 mt-5">
               <h2>Our Doctors   <span className="text-primary">Meet our Specialists</span>... </h2>
                   <div className="row">
                   {
                       doctor.map((doctor)=>(<DoctorDetail
                        key={doctor.id}
                        doctor={doctor}

                        
                        ></DoctorDetail>
                           

                       ))
                   }
               </div>
               </div>
           </div>
          
        </div>
    
    );
};

export default DoctorList;