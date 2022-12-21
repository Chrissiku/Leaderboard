import { baseUrl } from './constants.js';

const createGame = async () => {
  await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Christian Siku Game',
    }),
  })
    .then((response) => response.json())
    .then((json) => json.result);
};

export default createGame;
