import React from "react";
import "./GameCard.css";

const GameCard = ({ title, image, genre, onButtonClick }) => {
  return (
    <div className="game-card">
      <div className="game-image">
        <img src={image} alt={title} />
      </div>
      <div className="game-content">
        <h2 className="game-title">{title}</h2>
        <p className="game-genre">{genre}</p>
        <button className="game-button" onClick={onButtonClick}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default GameCard;
