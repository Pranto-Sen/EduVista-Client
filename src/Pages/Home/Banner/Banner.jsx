import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./slide.css"
const Banner = () => {
    return (
      
        <Carousel className='main-slide'>
          <div>
            <img
              src="https://i.ibb.co/7GvcgNr/istockphoto-1383952487-1024x1024.jpg"
              
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/RB0vTZH/istockphoto-154354465-1024x1024.jpg"
             
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/MCZjXTg/istockphoto-1161721315-1024x1024.jpg"
             
            />
          </div>
        </Carousel>
    
    );
};

export default Banner;