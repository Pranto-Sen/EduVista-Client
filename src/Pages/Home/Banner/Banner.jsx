import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./slide.css"
const Banner = () => {
    return (
      <Carousel className="main-slide">
        <div>
          <img src="https://i.ibb.co/WyDJc1m/e-learing-distance-education-icons-interface.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/XDWHgR7/learning-education-ideas-insight-intelligence-study-concept.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/TWqWc3x/science-dna-research-development-human.jpg" />
        </div>
      </Carousel>
    );
};

export default Banner;