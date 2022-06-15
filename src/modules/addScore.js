/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import scoreElement from "./display.js";

const myList = [];

class Scores {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

const addScore = (name, score) => {
  scoreElement(name, score);
  const myData = new Scores(name, score);
  myList.push(myData);
  localStorage.setItem("Scores", JSON.stringify(myList));
};

export { myList, Scores, addScore };
