import userImg from '../assets/user.jpg';
import { scoreUrl } from './constants.js';

const singleRow = (players) => {
  let boardRow = '';
  if (players.length === 0) {
    boardRow += `<tr><td id="winner">0</td><td class="player"><img src="${userImg}" alt="user"><p>No Player</p></td><td>0</td></tr>`;
  } else {
    players.forEach((player, index) => {
      boardRow += `<tr><td id="winner">${
        index + 1
      }</td><td class="player"><img src="${userImg}" alt="user"><p>${
        player.user
      }</p></td><td>${player.score}</td></tr>`;
    });
  }
  document.querySelector('.board').innerHTML = boardRow;
};

const display = async () => {
  await fetch(scoreUrl)
    .then((response) => response.json())
    .then((json) => singleRow(json.result));
};

export default display;
