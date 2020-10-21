import React from "react";
import "./Snake.css";

function Snake() {
  const grid = Array(100).fill("");

  return (
    <div className="Grid">
      {grid.map((square, index) => (
        <div key={index} className="Square" />
      ))}
    </div>
  );
}

export default Snake;
