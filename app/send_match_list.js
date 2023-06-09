var axios = require("axios");
const token = process.env.WHATSAPP_TOKEN;
var auth_token = "Bearer " + token;

//This function makes the required format to be send to WhatsApp API
//It uses row val which is object of matches.
async function send_match_list(row_val, req, res) {
  var data = JSON.stringify({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: `${process.env.TO_PHONE_NUMBER}`,
    type: "interactive",
    interactive: {
      type: "list",
      header: {
        type: "text",
        text: "KIRKET",
      },
      body: {
        text: "SELECT MATCHES",
      },
      footer: {
        text: "Live",
      },
      action: {
        button: "CLICK",
        sections: [
          {
            title: "Today's matches",
            rows: row_val,
          },
        ],
      },
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

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

module.exports = send_match_list;
