import React from 'react';
import "./Header.css"
// for header use bootstrap carousel
const Header = () => {
  return (
    <div>

      <div className="banner-container  container mb-5">
        <div className="col-md-12 col-lg-12">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <img src="https://i.ibb.co/YPJrhrQ/General-practitioner-and-young-nurse-wearing-surgical-face-mask-against-covid-19-while-having-a-disc.jpg" className="d-block w-100 header-img img-fluid" alt="..." />
                <div className="carousel-caption d-none text-dark fw-bold d-md-block">
                  
                  <p className="fs-4 text-success">We work to take care of your health and body.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://i.ibb.co/ChK06cz/Bed-in-hallway-The-concept-of-working-stressful-environment.jpg" className="d-block w-100 img-fluid header-img" alt="..." />
                <div className="carousel-caption d-none text-dark fw-bold d-md-block mb-5">

                 
                  <p className="fs-4 text-success">We work to take care of your health and body.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://i.ibb.co/4tNfWqb/Hand-holding-plus-sign-virtual-means-to-offer-positive-thing-like-benefits-personal-development-soci.jpg" className="d-block w-100 img-fluid header-img" alt="..." />
                <div className="carousel-caption d-none text-dark fw-bold d-md-block">

          
                  <p className="fs-4 text-success">We work to take care of your health and body.</p>
                </div>
              </div>
           
              
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Header;