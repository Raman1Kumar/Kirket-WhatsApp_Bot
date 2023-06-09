const axios = require("axios");

async function get_score(second_url) {
  const base_url = process.env.SCORE_API_BASE_URL;

  const url = base_url + second_url;

  var match_title = "";
  var current_score = "";
  var bat1 = "";
  var bat1_score = "";
  var bat2 = "";
  var bat2_score = "";
  var bowler = "";
  var recent_balls = "";
  var bowler_wikets = "";
  var final_val = "";

    //Get the score from score api and make it in required format to be sent
  await axios.get(url).then((resp) => {
    // console.log(resp.data);
    var data = resp.data;
    match_title = data.title;
    current_score = data.current;
    bat1 = data.batsman;
    bat1_score = data.batsmanrun;
    bat2 = data.batsmantwo;
    bat2_score = data.batsmantworun;
    bowler = data.bowler;
    bowler_wikets = data.bowlerwickets;
    recent_balls = data.recentballs;
    // final_val = `${data}`;
    final_val = `*${current_score}*\n\n${bat1}->${bat1_score}\n${bat2}->${bat2_score}\n\n${bowler}->${bowler_wikets} wicket(s)\n\n\`\`\`${recent_balls}\`\`\`\n\n${match_title}`;
    console.log(final_val);
  });

  return final_val;
}

module.exports = get_score;
