const axios = require("axios");
const cheerio = require("cheerio");

//checks if match with given url is still onging or stopped working
async function checkMatchStatus(url) {
  let statusResult = false;

  await axios.get(url).then((html) => {
    const $ = cheerio.load(html.data);

    let status = $(".cb-text-inprogress");

    if (status.length) {
      return true;
    } else {
      return false;
    }
  });
  // return matcmatcheshes;
  return statusResult;
}


module.exports = checkMatchStatus;
