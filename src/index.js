import './styles/style.css';
import createGame from './modules/newGame.js';
import addScore from './modules/addScore.js';
import display from './modules/displayScore.js';
import themeImg from './assets/theme.png';

const theme = document.getElementById('theme');
theme.src = themeImg;

createGame();

// Computation
const form = document.querySelector('.form');
const playerName = document.querySelector('#user');
const playerScore = document.querySelector('#score');
const refresh = document.querySelector('.refresh');

// Save form

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(playerName.value, playerScore.value);
});

// refresh feature
refresh.addEventListener('click', () => {
  window.location.reload();
});

setTimeout(() => {
  display();
}, 500);
