/* eslint-disable quotes */
const scoreList = document.querySelector(".scores");

const scoreElement = (name, score) => {
  const element = document.createElement("li");
  element.textContent = `${name}: ${score}`;
  scoreList.appendChild(element);
};

export default scoreElement;
