/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
/* eslint-disable quotes */
class LeaderBoard {
  constructor() {
    this.Id = "QoRmMvoGEZK2cdhRBBsT";
    this.url =
      "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";
  }

  newGame = async () => {
    await fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "world cup" }),
    })
      .then((response) => response.json())
      .then((data) => data);
  };

  display = async (data) => {
    const board = data.reduce((prev, current) => {
      prev += `<tr> <td id="winner">1</td><td><img src="./images/User1.jpg"><p>${current.user}</p></td><td>${current.score}</td></tr>`;
      return prev;
    }, "");
    document.querySelector(".board").innerHTML = board;
  };

  getScores = async () => {
    const scoreLink = `${this.url + this.gameId}/scores/`;
    await fetch(scoreLink)
      .then((response) => response.json())
      .then((data) => {
        data.result.sort((a, b) => b.score - a.score);
        this.displayBoard(data.result);
      });
  };

  addPlayer = async (user, score) => {
    const scoreLink = `${this.url + this.gameId}/scores/`;
    await fetch(scoreLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user, score }),
    })
      .then((response) => response.json())
      .then(() => {
        this.getScores();
      });
  };
}

export default LeaderBoard;
