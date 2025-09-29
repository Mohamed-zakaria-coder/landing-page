import React from 'react';
import '../../styles/home/carousel.css';
import ReactStars from "react-rating-stars-component";

const CarouselCard = ({ title, rating, description, imgSrc, name, job }) => {
  return (
    <div className="carousel-card" id='carousel'>
      <h4>{title}</h4>
      <ReactStars count={5} size={24} activeColor="#ffd700" value={rating} edit={false}/>
      <p>{description}</p>
      
      <div className="img-container">
        <img src={imgSrc} alt={name}/>
        <h3>{name}</h3>
        <p>{job}</p>
      </div>
    </div>
  );
};

export default CarouselCard;
