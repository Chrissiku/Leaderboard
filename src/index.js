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
