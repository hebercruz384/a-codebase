import "./styles.css";
import { useState } from "react";

export default function App() {
  const [playerTurn, changePlayerTurn] = useState("red");
  function togglePlayerTurn() {
    if (playerTurn === "red") {
      changePlayerTurn("yellow");
    } else {
      changePlayerTurn("red");
    }
  }
  return (
    <div className="App">
      <div className="slotA" onClick={togglePlayerTurn}>
        <div className="inner-slot red yellow"></div>
      </div>
      <p>It is {playerTurn}'s turn</p>
    </div>
  );
}
