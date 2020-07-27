export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function getIndexByInputValue(value) {
  let index;
  switch (value) {
    case "1 1":
      index = 0;
      break;
    case "1 2":
      index = 3;
      break;
    case "1 3":
      index = 6;
      break;
    case "2 1":
      index = 1;
      break;
    case "2 2":
      index = 4;
      break;
    case "2 3":
      index = 7;
      break;
    case "3 1":
      index = 2;
      break;
    case "3 2":
      index = 5;
      break;
    case "3 3":
      index = 8;
      break;
    default:
      if (value.length > 3) {
        throw new Error("That's too long");
      }
      if (value[0] !== "1" && value[0] !== "2" && value[0] !== "3") {
        throw new Error("Please enter numbers from 1 to 3");
      }
      throw new Error("Unkown Value Type");
  }
  return index;
}

export function computerPlayer(board) {
  // ukoliko postoji mogucnost za pobedu
  if (
    board[0] === "" &&
    ((board[1] === "O" && board[2] === "O") ||
      (board[3] === "O" && board[6] === "O") ||
      (board[4] === "O" && board[8] === "O"))
  ) {
    board[0] = "O";
  } else if (
    board[4] === "" &&
    ((board[3] === "O" && board[5] === "O") ||
      (board[0] === "O" && board[8] === "O") ||
      (board[2] === "O" && board[6] === "O"))
  ) {
    board[4] = "O";
  } else if (
    board[5] === "" &&
    ((board[3] === "O" && board[4] === "O") ||
      (board[2] === "O" && board[8] === "O"))
  ) {
    board[5] = "O";
  } else if (
    board[6] === "" &&
    ((board[7] === "O" && board[8] === "O") ||
      (board[0] === "O" && board[3] === "O") ||
      (board[2] === "O" && board[4] === "O"))
  ) {
    board[6] = "O";
  } else if (
    board[7] === "" &&
    ((board[6] === "O" && board[8] === "O") ||
      (board[1] === "O" && board[4] === "O"))
  ) {
    board[7] = "O";
  } else if (
    board[8] === "" &&
    ((board[6] === "O" && board[7] === "O") ||
      (board[2] === "O" && board[5] === "O") ||
      (board[0] === "O" && board[4] === "O"))
  ) {
    board[8] = "O";
  }
  // ako mora da se blokira pobeda
  else if (
    board[0] === "" &&
    ((board[1] === "X" && board[2] === "X") ||
      (board[3] === "X" && board[6] === "X") ||
      (board[4] === "X" && board[8] === "X"))
  ) {
    board[0] = "O";
  } else if (
    board[1] === "" &&
    ((board[0] === "X" && board[2] === "X") ||
      (board[4] === "X" && board[7] === "X"))
  ) {
    board[1] = "O";
  } else if (
    board[2] === "" &&
    ((board[0] === "X" && board[1] === "X") ||
      (board[5] === "X" && board[8] === "X") ||
      (board[4] === "X" && board[6] === "X"))
  ) {
    board[2] = "O";
  } else if (
    board[3] === "" &&
    ((board[0] === "X" && board[6] === "X") ||
      (board[4] === "X" && board[5] === "X"))
  ) {
    board[3] = "O";
  } else if (
    board[4] === "" &&
    ((board[3] === "X" && board[5] === "X") ||
      (board[0] === "X" && board[8] === "X") ||
      (board[2] === "X" && board[6] === "X"))
  ) {
    board[4] = "O";
  } else if (
    board[5] === "" &&
    ((board[3] === "X" && board[4] === "X") ||
      (board[2] === "X" && board[8] === "X"))
  ) {
    board[5] = "O";
  } else if (
    board[6] === "" &&
    ((board[7] === "X" && board[8] === "X") ||
      (board[0] === "X" && board[3] === "X") ||
      (board[2] === "X" && board[4] === "X"))
  ) {
    board[6] = "O";
  } else if (
    board[7] === "" &&
    ((board[6] === "X" && board[8] === "X") ||
      (board[1] === "X" && board[4] === "X"))
  ) {
    board[7] = "O";
  } else if (
    board[8] === "" &&
    ((board[6] === "X" && board[7] === "X") ||
      (board[2] === "X" && board[5] === "X") ||
      (board[0] === "X" && board[4] === "X"))
  ) {
    board[8] = "O";
  } else if (board[4] === "") {
    board[4] = "O";
  } else if (board[0] === "" && (board[2] === "X" || board[6] === "X")) {
    board[0] = "O";
  } else if (board[2] === "" && (board[0] === "X" || board[8] === "X")) {
    board[2] = "O";
  } else if (board[8] === "" && (board[2] === "X" || board[6] === "X")) {
    board[8] = "O";
  } else if (board[6] === "" && (board[0] === "X" || board[8] === "")) {
    board[6] = "O";
  } else if (board[0] === "") {
    board[0] = "O";
  } else if (board[2] === "") {
    board[2] = "O";
  } else if (board[6] === "") {
    board[6] = "O";
  } else if (board[8] === "") {
    board[8] = "O";
  } else if (board[1] === "") {
    board[1] = "O";
  } else if (board[5] === "") {
    board[5] = "O";
  } else if (board[7] === "") {
    board[7] = "O";
  } else if (board[4] === "") {
    board[4] = "O";
  }
}
