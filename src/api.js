/* eslint-disable quotes */
import scoreElement from "./display.js";

const url = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/";

const getData = async () => {
  const response = await fetch(url, { mode: "cors" });
  if (!response.ok) {
    throw new Error(`Error to get API: ${response.status}`);
  }
  const userData = await response.json();
  return userData.result;
};

const displayData = () => {
  getData().then((data) => {
    data.forEach((user) => {
      scoreElement(user.user, user.score);
    });
  });
};

export default displayData;
