/* eslint-disable quotes */
import scoreElement from "./display.js";

const myList = [];

class Scores {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

const add = (name, score) => {
  scoreElement(name, score);
  const scoreData = new Scores(name, score);
  myList.push(scoreData);
  localStorage.setItem("scores", JSON.stringify(myList));
};

export { add, myList, Scores };
