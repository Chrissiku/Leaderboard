/* eslint-disable quotes */
import "./style.css";
import { add, myList, Scores } from "./add.js";
import scoreElement from "./display.js";
import { postData, displayData } from "./api.js";

const storage = JSON.parse(localStorage.getItem("scores")) || [];
const addBtn = document.querySelector("#submit");
const nameField = document.querySelector("#name");
const scoreField = document.querySelector("#score");
const refreshBtn = document.querySelector("#refresh");
const container = document.querySelector(".scores");
const form = document.querySelector("form");

storage.forEach((element) => {
  const myScoreData = new Scores(element.name, element.score);
  myList.push(myScoreData);
  scoreElement(myScoreData.name, myScoreData.score);
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  postData(form);
  form.children[1].value = "";
  form.children[2].value = "";
});

addBtn.addEventListener("click", () => {
  add(nameField.value, scoreField.value);
});

refreshBtn.addEventListener("click", () => {
  container.innerHTML = "";
  displayData();
});

window.addEventListener("DOMContentLoaded", () => {
  displayData();
});
