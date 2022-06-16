/* eslint-disable quotes */
import scoreElement from "./display.js";

const apiRouteKey = "games/Zl4d7IVkemOTTVg2fUdz/scores/";
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/${apiRouteKey}`;

const postData = async (form) => {
  const formData = new FormData(form);
  const formDataSer = Object.fromEntries(formData);
  const myJsonObject = { ...formDataSer, score: Number(formDataSer.score) };

  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(myJsonObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    throw new Error(e);
  }
};

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

export { postData, displayData };
