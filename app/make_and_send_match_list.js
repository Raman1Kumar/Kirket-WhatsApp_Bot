const axios = require("axios");
const cheerio = require("cheerio");
const send_match_list = require("./send_match_list.js");
const make_match_list = require("./make_match_list.js");

//1st step make match list
//2nd step send match list
async function make_and_send_match_list(req, res) {
  
  var match_list = await make_match_list();
  await send_match_list(match_list, req, res);

  return;
}

module.exports = make_and_send_match_list;
