import React, { useState, useEffect } from "react";
import "./Snake.css";

const Snake = () => {
  const [alive, setAlive] = useState(true);
  const [food, setFood] = useState(55);
  const [snakeHead, setSnakeHead] = useState(25);
  const [grid, setGrid] = useState(initializeGrid());

  function initializeGrid() {
    const newGrid = Array(100).fill("Empty");
    return newGrid;
  }

  function drawGrid() {
    const newGrid = [...grid];
    newGrid[food] = "Food";
    newGrid[snakeHead] = "Snake";
    setGrid(newGrid);
  }

  function newFood() {
    setFood(Math.floor(Math.random() * 100));
  }

  useEffect((snakeHead) => {
    function moveSnakeHead(event) {
      console.log(event);
      switch (event.key) {
        case "ArrowUp":
          setSnakeHead(snakeHead - 10);
          break;
        case "ArrowDown":
          setSnakeHead(snakeHead + 10);
          break;
        case "ArrowLeft":
          setSnakeHead(snakeHead - 1);
          break;
        case "ArrowRight":
          setSnakeHead(snakeHead + 1);
          break;
        default:
          break;
      }
    }

    window.addEventListener("keypress", moveSnakeHead);
  }, []);

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
