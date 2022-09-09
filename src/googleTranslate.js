const axios = require("axios");
const API_KEY = "AIzaSyDJBchl4D9J4-Vay00ODMREMk5EM5W84ww    ";

async function translate(text) {
  try {
    let res = await axios.post(
      `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
      { q: text, target: "fa" }
    );
    let translation = res.data.data.translations[0].translatedText;
    return translation;
  } catch (error) {
    console.log(error);
  }
}

const tr = translate("hello");
