const curr = require("./Schema");

const make_and_send_match_list = require("./make_and_send_match_list.js");

async function handle_text_msg(req, res) {
  if (
    req.body.entry &&
    req.body.entry[0].changes &&
    req.body.entry[0].changes[0] &&
    req.body.entry[0].changes[0].value &&
    req.body.entry[0].changes[0].value.messages &&
    req.body.entry[0].changes[0].value.messages[0] &&
    req.body.entry[0].changes[0].value.messages[0].text &&
    req.body.entry[0].changes[0].value.messages[0].text.body
  ) {
    const Phone =
      req.body.entry[0].changes[0].value.metadata.display_phone_number;
    const msg = req.body.entry[0].changes[0].value.messages[0].text.body;
    console.log(Phone);
    console.log(msg);

    // //       ////Saving user if not there
    // //       try {
    // //         console.log("printing................................")
    // //         console.log(msg)
    // //         console.log(stat)

    // //         curr.findOne({Phone:Phone},async(error,document)=>{
    // //           if(error){

    // //             const newPost = await curr.create({ Phone, stat });
    // //             res.json(newPost);
    // //             console.log("succefully updated database")

    // //           }

    // //         })

    // //   } catch (error) {
    // //     // res.status(500).send(error);
    // //     console.log(error)
    // //   }

    // //       ///if start then make list and send

    var stat = false;
    if (msg == "stop") {
      const current = await curr.findOneAndUpdate(
        { Phone: Phone },
        { Phone: Phone, stat: 0 }
      );
    }

    ///if start then make list and send

    if (msg == "start") {
      await make_and_send_match_list(req, res);
    }

    await res.sendStatus(200);
  }
}

module.exports = handle_text_msg;
