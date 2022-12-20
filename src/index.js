/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
/* eslint-disable quotes */
import "./style.css";
import LeaderBoard from "./class/leaderBoard.js";

const refresh = document.querySelector(".refresh");
const saveForm = document.forms[0];

const leaderBoard = new LeaderBoard();
leaderBoard.getScores();

refresh.addEventListener("click", leaderBoard.getScores);

saveForm.addEventListener("submit", (event) => {
  event.preventDefault();
  leaderBoard.addPlayer(saveForm.user.value, saveForm.score.value);
  saveForm.reset();
});
