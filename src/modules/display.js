/* eslint-disable quotes */
/* eslint-disable linebreak-style */
// eslint-disable-next-line quotes
const scoresList = document.querySelector(".scores");

const scoreElement = (name, score) => {
  const element = document.createElement("li");
  element.textContent = `${name}: ${score}`;
  scoresList.appendChild(element);
};

export default scoreElement;
