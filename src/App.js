import { useState } from "react";
import "./styles.css";

export default function App() {
  const [tokens, changeTokens] = useState([]);
  const [playerTurn, changePlayerTurn] = useState("red");

  function togglePlayerTurn() {
    if (playerTurn === "red") {
      changePlayerTurn("yellow");
    } else {
      changePlayerTurn("red");
    }
  }
  function addTokens() {
    if (tokens.length < 6) {
      changeTokens([...tokens, playerTurn]);
      togglePlayerTurn();
    }
  }

  return (
    <div className="App">
      <div className="board" onClick={addTokens}>
        <div className={`slot ${tokens[5]}`}></div>
        <div className={`slot ${tokens[4]}`}></div>
        <div className={`slot ${tokens[3]}`}></div>
        <div className={`slot ${tokens[2]}`}></div>
        <div className={`slot ${tokens[1]}`}></div>
        <div className={`slot ${tokens[0]}`}></div>
      </div>
      It is {playerTurn}'s turn
    </div>
  );
}
