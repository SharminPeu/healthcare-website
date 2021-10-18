import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ShowServices from '../ShowServices/ShowServices';
import './Home.css'

const Home = () => {
       // set data for home page services from fakedata
       const[services,setServices]=useState([]);
       // load data from fakedata
       useEffect(()=>{
           fetch('/fakedata.json')
           .then(res=>res.json())
           .then(data=>setServices(data))
       },[])
    return (
        <div className="container">
            <div>
                <Header></Header>
            </div>
            <div className="text-center course-title">
            <h2><span className="text-primary">We-Cares</span> Services</h2>
            <p className="mb-5">Explore all of our courses and pick your suitable ones to enroll and start learning with<br/> us! We ensure that you will never regret it!</p>
            </div>
            <div className="mx-auto container">
                <div className="mx-auto row">
                    <div className="col-md-12">
                        <div className="row">
                    {
                       services.map((services)=>(<ShowServices
                        key={services.id}
                        services={services}

                        
                        ></ShowServices>
                    
                           

                       ))
                   }
                  
                   </div>

                    </div>
                </div>
            </div>
            
        </div>

    );
};

export default Home;