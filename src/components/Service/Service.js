import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Service.css'
const Service = () => {
    const{serviceId}=useParams();
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch('/fakedata.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    const singleService=data.find(td=>td.id===serviceId);

    return (
        <div className="container">

            <img src={singleService?.img} alt="" />
            <h1>Name:{singleService?.name}</h1>
            <h2>Description:{singleService?.description}</h2>
        </div>
    );
};

export default Service;