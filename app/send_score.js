const axios = require("axios");
const get_score = require("./score.js");
const token = process.env.WHATSAPP_TOKEN;
var auth_token = "Bearer " + token;



//This function first get score using "get_score" function then make a axios call to post it
async function send_score(req, res, real_id) {
  var msg = await get_score(real_id);

  console.log(msg);

  var data = JSON.stringify({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: `${process.env.TO_PHONE_NUMBER}`,
    type: "text",
    text: {
      preview_url: false,
      body: msg,
    },
  });

  var config = {
    method: "post",
    url: `https://graph.facebook.com/v15.0/${process.env.FROM_PHONE_NUMBER_ID}/messages`,
    headers: {
      "Content-Type": "application/json",
      Authorization: auth_token,
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

module.exports = send_score;
