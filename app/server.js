("use strict");

const request = require("request");
const express = require("express");
const body_parser = require("body-parser");
const axios = require("axios").default;
const app = express().use(body_parser.json());
const cheerio = require("cheerio");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Database
const db = require("./connect");
const curr = require("./Schema");


//Handle Event Function
const handle_text_msg = require("./handle_text_msg");
const handle_interactive_list_reply = require("./handle_interactive_list_reply.js");
const handle_send_score = require("./handle_send_score.js");

const token = process.env.WHATSAPP_TOKEN;
var auth_token = "Bearer " + token;
var state = 0;


//MAIN ROUTE
app.post("/webhook", async (req, res) => {
  // Parse the request body from the POST
  let body = req.body;

  if (req.body.object) {
    handle_text_msg(req, res);

    handle_interactive_list_reply(req, res);

    handle_send_score(req, res);
  }
});


//Verify webhook
app.get("/webhook", (req, res) => {
  const verify_token = process.env.VERIFY_TOKEN;

  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  if (mode && token) {
    if (mode === "subscribe" && token === verify_token) {
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }
});



app.listen(process.env.PORT || 1337, () => console.log("webhook is listening"));
