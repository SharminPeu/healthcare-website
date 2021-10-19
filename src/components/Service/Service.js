import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';

import './Service.css'
const Service = () => {
    const{serviceId}=useParams();
    const[data,setData]=useState([]);
    const history=useHistory();
    useEffect(()=>{
        fetch('/fakedata.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    const singleService=data.find(td=>td.id===serviceId);
const handleClick =()=>{
history.push('/home')
}
    return (
        
        <div className="container my-5 image">
            <h2>We Care about you ...</h2><br/>
            <div className="card mb-3" >
  <div className="row g-0 service_single">
    <div className="col-md-4 col-lg-4 col-6">
      <img src={singleService?.img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8 col-lg-8 col-6">
      <div className="card-body text-start">
        <h3 className="card-title text-primary">{singleService?.name}</h3>
        <h5 className="card-text text-secondary">{singleService?.description}</h5>
       
    </div>
  
</div>
<div><button className="btn btn-warning mb-2 text-white" onClick={handleClick}>Back to Home</button>
</div>
</div>
</div>
</div>

            
    );
};

export default Service;