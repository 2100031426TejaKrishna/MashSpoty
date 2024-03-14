
import React from 'react';
import '../components/cssfiles/trend.css'; 
const Carousel = () => {
  return (
    <div className="container">
      <div className="carousel">
        <div className="carousel__face"><span>New Song</span></div>
        <div className="carousel__face"><span>New Movie</span></div>
        <div className="carousel__face"><span>Song 100M+</span></div>
        <div className="carousel__face"><span>BollyWood</span></div>
        <div className="carousel__face"><span>Global Stars</span></div>
        <div className="carousel__face"><span>New Album Of Taylor Swift</span></div>
        <div className="carousel__face"><span>Contravercy</span></div>
        <div className="carousel__face"><span>Film Fare</span></div>
        <div className="carousel__face"><span>Celb Spotted</span></div>
      </div>
    </div>
  );
};

export default Carousel;
