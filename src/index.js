/* eslint-disable quotes */
import "./style.css";
import { add, myList, Scores } from "./add.js";
import scoreElement from "./display.js";

const storage = JSON.parse(localStorage.getItem("scores")) || [];
const addBtn = document.querySelector("#submit");
const nameField = document.querySelector("#name");
const scoreField = document.querySelector("#score");
const refreshBtn = document.querySelector("#refresh");

storage.forEach((element) => {
  const myScoreData = new Scores(element.name, element.score);
  myList.push(myScoreData);
  scoreElement(myScoreData.name, myScoreData.score);
});

addBtn.addEventListener("click", () => {
  add(nameField.value, scoreField.value);
});

refreshBtn.addEventListener("click", () => {
  document.location.href = "./index.html";
});
