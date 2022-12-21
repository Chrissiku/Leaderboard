/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
/* eslint-disable quotes */

const baseUrl =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";
const gameId = "SsPx20xTXWNtqFtQ6FtC";
const scoreUrl = `${baseUrl + gameId}/scores`;

const createGame = async () => {
  await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Christian Siku Game",
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      json;
      console.log(json);
    });
};
// createGame();

const addScore = async (user, score) => {
  await fetch(scoreUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user,
      score,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      json;
    })
    .catch((error) => error);
};

const singleRow = (players) => {
  let boardRow = "";
  if (players.length === 0) {
    boardRow += `<tr><td id="winner">0</td><td><img src="./images/User1.jpg"><p>No Player</p></td><td>0</td></tr>`;
  } else {
    players.forEach((player, index) => {
      boardRow += `<tr><td id="winner">${
        index + 1
      }</td><td><img src="./images/User1.jpg"><p>${player.user}</p></td><td>${
        player.score
      }</td></tr>`;
    });
  }
  document.querySelector(".board").innerHTML = boardRow;
};

const display = async () => {
  await fetch(scoreUrl)
    .then((response) => response.json())
    .then((json) => singleRow(json.result));
};

// Computation
const form = document.querySelector(".form");
const playerName = document.querySelector("#user");
const playerScore = document.querySelector("#score");
const refresh = document.querySelector(".refresh");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addScore(playerName.value, playerScore.value);
  document.querySelector(".form").reset();
});

display();
