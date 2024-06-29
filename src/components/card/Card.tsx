import React from "react";
import "./Card.css";

interface CardProps {
  title: string;
  image: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="card">
      <img className="card-image" alt="animal" src={props.image} draggable={false}/>
      <p className="card-name">{props.title}</p>
      <button className="card-btn">
        <p className="btn-text">Learn more</p>
      </button>
    </div>
  );
};

export default Card;
