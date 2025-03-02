import React from 'react';
import './App.css';
import GameCard from './components/GameCard';
import games from './data/gamesData';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Favorite Games</h1>
      <div className="game-list">
        {games.map((game, index) => (
          <GameCard 
            key={index}
            title={game.title} 
            image={game.image} 
            genre={game.genre} 
            onButtonClick={game.onButtonClick}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
