import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Board from "./Board";
import DisplayPlayers from "./DisplayPlayers";
import {
  calculateWinner,
  getIndexByInputValue,
  computerPlayer,
} from "../helperFunction/helperFunction";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [computer, setComputer] = useState(false);
  const winner = calculateWinner(board);

  const handleMove = (value) => {
    try {
      setError("");
      let index = getIndexByInputValue(value);
      board.indexOf(index);
      const boardCopy = [...board];
      if (winner) {
        return;
      }
      if (boardCopy[index]) {
        throw new Error("That field is taken");
      }

      boardCopy[index] = xIsNext ? "X" : "O";

      setBoard(boardCopy);
      setXisNext(!xIsNext);
      // computer && computerPlayer(boardCopy);
    } catch (err) {
      setError(`Invalid input - ${err}`);
    }
  };

  const handleInputOne = (value) => {
    setPlayerOne(value);
    computer && setShow(true);
  };

  const handleInputTwo = (value) => {
    setPlayerTwo(value);
    setShow(value);
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setPlayerOne("");
    setPlayerTwo("");
    setShow(false);
    setError("");
    setXisNext(true);
  };

  const twoPlayers = (value) => {
    setComputer(value);
  };

  return (
    <div>
      <Header />
      <DisplayPlayers
        handleInput={handleInputOne}
        handleInputTwo={handleInputTwo}
        handleTwoPlayersButton={twoPlayers}
        reset={reset}
      />
      <Board
        squares={board}
        show={show}
        handleMove={handleMove}
        error={error}
      />
      <div>
        <h3>
          {winner
            ? `Winner: ${winner}`
            : `Next Player: ${xIsNext ? playerOne : playerTwo}`}
        </h3>
      </div>
      <Footer />
    </div>
  );
};

export default Game;
