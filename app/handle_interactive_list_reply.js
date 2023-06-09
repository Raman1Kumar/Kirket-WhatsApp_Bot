const curr = require("./Schema");
const perOverperBall = require("./perOverperBall");

async function handle_interactive_list_reply(req, res) {
  if (
    req.body.entry &&
    req.body.entry[0].changes &&
    req.body.entry[0].changes[0] &&
    req.body.entry[0].changes[0].value.messages &&
    req.body.entry[0].changes[0].value.messages[0] &&
    req.body.entry[0].changes[0].value.messages[0].interactive &&
    req.body.entry[0].changes[0].value.messages[0].interactive.list_reply
  ) {
    console.log("hit inter reply");
    let id =
      req.body.entry[0].changes[0].value.messages[0].interactive.list_reply.id;
    let Phone_no =
      req.body.entry[0].changes[0].value.metadata.display_phone_number;
    const current = await curr.findOneAndUpdate(
      { Phone: Phone_no },
      { Phone: Phone_no, match_link: id, stat: 0 }
    );
    console.log(current);

    perOverperBall();

    await res.sendStatus(200);
    // return ;
  }
}

module.exports = handle_interactive_list_reply;
