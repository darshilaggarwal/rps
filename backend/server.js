const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/game", (req, res) => {
  const moves = ["rock", "paper", "scissors"];
  const playermove = req.body.choice;
  const servermove = moves[Math.floor(Math.random() * moves.length)];

  let result = "";
  if (playermove === servermove) {
    result = "draw";
  } else if (
    (playermove === "rock" && servermove === "scissors") ||
    (playermove === "paper" && servermove === "rock") ||
    (playermove === "scissors" && servermove === "paper")
  ) {
    result = "win";
  } else {
    result = "lose";
  }

  res.json({
    playermove,
    servermove,
    result,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
