import React from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [playermove, setPlayermove] = useState("");
  const [servermove, setServermove] = useState("");
  const [result, setResult] = useState("");
  const moves = ["rock", "paper", "scissors"];

  const handleMove = async (move) => {
    setPlayermove(move);

    try {
      // Send the player's move to the backend
      const response = await axios.post("http://localhost:3000/game", {
        choice: move,
      });
      const { servermove, result } = response.data;

      // Update the state with the server's response
      setServermove(servermove);
      setResult(result);
    } catch (error) {
      console.error("Error communicating with the server:", error);
    }
  };

  return (
    <>
      <h1>Rock paper scisors</h1>
      <h1>Rock Paper Scissors</h1>
      <button onClick={() => handleMove("rock")}>Rock</button>
      <button onClick={() => handleMove("paper")}>Paper</button>
      <button onClick={() => handleMove("scissors")}>Scissors</button>

      <div>
        <h3>Your Choice: {playermove}</h3>
        <h3>Computer Choice: {servermove}</h3>
        <h2>Result: {result}</h2>
      </div>
    </>
  );
};

export default App;
