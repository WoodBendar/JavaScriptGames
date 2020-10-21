import React, { useState } from "react";
import "./Snake.css";

const Snake = () => {
  const [alive, setAlive] = useState(true);
  const grid = initializeGrid();

  function initializeGrid() {
    const newGrid = Array(100).fill("Empty");
    newGrid[55] = "Food";
    newGrid[25] = "Snake";
    return newGrid;
  }

  function newFood() {
    grid[Math.floor(Math.random() * 100)] = "Food";
  }

  return (
    <div className="Game">
      <h1>Snake</h1>
      <>
        {alive ? (
          <div className="Grid">
            {grid.map((square, index) => (
              <div key={index} className={square} />
            ))}
          </div>
        ) : (
          <h2>Game Over!</h2>
        )}
      </>
    </div>
  );
};

export default Snake;
