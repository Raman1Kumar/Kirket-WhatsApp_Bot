var axios = require('axios');
const token=process.env.WHATSAPP_TOKEN;
const auth_token="Bearer "+token;

//Make the required format for asking user if they want score per ball or per over
function perOverperBall(){
  
  var data = JSON.stringify({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": `${process.env.TO_PHONE_NUMBER}`,
  "type": "interactive",
  "interactive": {
    "type": "button",
    "body": {
      "text": "You want score after every over ,or after every ball?"
    },
    "action": {
      "buttons": [
        {
          "type": "reply",
          "reply": {
            "id": "ball",
            "title": "After every ball"
          }
        },
        {
          "type": "reply",
          "reply": {
            "id": "over",
            "title": "After every over"
          }
        }
      ]
    }
  }
});

var config = {
  method: 'post',
  url: `https://graph.facebook.com/v15.0/${process.env.FROM_PHONE_NUMBER_ID}/messages`,
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': auth_token,
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

}

module.exports=perOverperBall;
