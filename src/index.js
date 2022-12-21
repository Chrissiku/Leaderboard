/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
/* eslint-disable quotes */

const gameId = "SsPx20xTXWNtqFtQ6FtC";

const createGame = async () => {
  await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/",
    {
      method: "POST",
      body: JSON.stringify({
        name: "Christian Siku Game",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((json) => {
      json;
      console.log(json);
    });
};

// createGame();
