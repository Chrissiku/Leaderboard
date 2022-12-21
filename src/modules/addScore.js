import { scoreUrl } from './constants.js';

const addScore = async (user, score) => {
  await fetch(scoreUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => error);
};

export default addScore;
