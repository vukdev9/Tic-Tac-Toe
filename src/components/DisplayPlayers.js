import React, { useState } from "react";

const DisplayPlayers = ({
  handleInput,
  handleInputTwo,
  handleTwoPlayersButton,
  reset,
}) => {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [computer, setComputer] = useState(true);
  const [showButton, setShowButton] = useState(true);

  const submitPlayerOne = (e) => {
    e.preventDefault();
    handleInput(playerOne);
    setShowOne(true);
    setShowButton(false);
  };

  const submitPlayerTwo = (e) => {
    e.preventDefault();
    handleInputTwo(playerTwo);
    setShowTwo(true);
  };

  const twoPlayersButton = (e) => {
    e.preventDefault();
    setComputer(false);
    handleTwoPlayersButton(computer);
    setShowButton(false);
  };

  const resetGame = (e) => {
    e.preventDefault();
    setPlayerOne("");
    setPlayerTwo("");
    setShowOne(false);
    setShowTwo(false);
    setShowButton(true);
    setComputer(true);
    reset();
  };

  return (
    <>
      {showButton && (
        <button className="twoPlayersButton" onClick={twoPlayersButton}>
          Two Players Mode
        </button>
      )}
      <div className="displayPlayers">
        <div>
          {showOne ? null : (
            <form onSubmit={submitPlayerOne}>
              <label>
                Enter name of Player One - X
                <input
                  type="playerOne"
                  name="playerOne"
                  placeholder="Player One..."
                  onChange={(e) => setPlayerOne(e.target.value)}
                  required={true}
                />
              </label>
            </form>
          )}
          {showOne ? (
            <div>
              <h2 style={{ margin: "10px" }}>Player One - X : {playerOne}</h2>
            </div>
          ) : null}
        </div>
        {computer ? null : (
          <div>
            {showTwo ? null : (
              <form onSubmit={submitPlayerTwo}>
                <label>
                  Enter name of Player Two - O
                  <input
                    type="playerTwo"
                    name="playerTwo"
                    placeholder="Player Two..."
                    onChange={(e) => setPlayerTwo(e.target.value)}
                    required={true}
                  />
                </label>
              </form>
            )}
            {showTwo ? (
              <div>
                <h2 style={{ margin: "10px" }}>Player Two - O : {playerTwo}</h2>
              </div>
            ) : null}
          </div>
        )}
      </div>
      <button className="resetBtn" onClick={resetGame}>
        RESET GAME
      </button>
    </>
  );
};

export default DisplayPlayers;
