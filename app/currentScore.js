const axios = require("axios");

// const second_url="https://www.cricbuzz.com/live-cricket-scores/62225/lhq-vs-ms-20th-match-pakistan-super-league-2023"

//Hit score api to get current score
async function currentScore(second_url) {
  
  const base_url = process.env.SCORE_API_BASE_URL;
  const url = base_url + second_url;
  
  var current_score = "";
  
  await axios.get(url).then((resp) => {
    var data = resp.data;

    current_score = data.current;
  });

  return current_score;
}

module.exports = currentScore;
