import React, { useState } from "react";
import Square from "./Square";

const Board = ({ squares, show, handleMove, error }) => {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleMove(value);
    e.target.reset();
  };

  return (
    <>
      {show ? (
        <form onSubmit={onSubmit}>
          <label style={{ color: "darkblue" }}>
            <h2>
              Please enter your next move:
              <input
                type="text"
                name="move"
                onChange={(e) => setValue(e.target.value)}
                style={{ marginLeft: "10px" }}
              />
            </h2>
          </label>
          <h4>
            Coordinates should be from 1 to 3 for x [horizontal] and y
            (vertical) line, seperated with space
          </h4>
          <h3 style={{ color: "red" }}>{error}</h3>
        </form>
      ) : null}
      <div className="board">
        {squares.map((square, i) => {
          return <Square key={i} id={i} value={square} />;
        })}
      </div>
    </>
  );
};
// comment

export default Board;
