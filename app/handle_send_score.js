   const curr = require("./Schema"); 
const send_score = require("./send_score");
const currentScore = require("./currentScore");

async function handle_send_score(req,res){
  
  


if (
      req.body.entry &&
      req.body.entry[0].changes &&
      req.body.entry[0].changes[0] &&
      req.body.entry[0].changes[0].value.messages &&
      req.body.entry[0].changes[0].value.messages[0] &&
      req.body.entry[0].changes[0].value.messages[0].interactive &&
      req.body.entry[0].changes[0].value.messages[0].interactive.button_reply
    ) {
      
      let id =
        req.body.entry[0].changes[0].value.messages[0].interactive.button_reply
          .id;
      let Phone_no =
        req.body.entry[0].changes[0].value.metadata.display_phone_number;
      console.log(id);
      let c = await curr.findOne({ Phone: Phone_no });
      // console.log(c)
      if (id == "ball") {
        const current = await curr.findOneAndUpdate(
          { Phone: Phone_no },
          { Phone: Phone_no, stat: 2 }
        );
        console.log(current);
      } else if (id == "over") {
        const current = await curr.findOneAndUpdate(
          { Phone: Phone_no },
          { Phone: Phone_no, stat: 1 }
        );
        console.log(current);
      }

      const waitTime = 7000;

      let count = 5;
      var prev = "";

      var d = await curr.findOne({ Phone: Phone_no });
      var currscore = await currentScore(d.match_link);
      await send_score(req, res, d.match_link);

      res.sendStatus(200)
    } 
  
  
  }

module.exports=handle_send_score;






















//    if (
//       req.body.entry &&
//       req.body.entry[0].changes &&
//       req.body.entry[0].changes[0] &&
//       req.body.entry[0].changes[0].value.messages &&
//       req.body.entry[0].changes[0].value.messages[0] &&
//       req.body.entry[0].changes[0].value.messages[0].interactive &&
//       req.body.entry[0].changes[0].value.messages[0].interactive.button_reply
//     ) {
//       console.log(
//         "here///////////////////////////////////////////////////////"
//       );
//       let id =
//         req.body.entry[0].changes[0].value.messages[0].interactive.button_reply
//           .id;
//       let Phone_no =
//         req.body.entry[0].changes[0].value.metadata.display_phone_number;
//       console.log(id);
//       let c = await curr.findOne({ Phone: Phone_no });
//       // console.log(c)
//       if (id == "ball") {
//         const current = await curr.findOneAndUpdate(
//           { Phone: Phone_no },
//           { Phone: Phone_no, stat: 2 }
//         );
//         console.log(current);
//       } else if (id == "over") {
//         const current = await curr.findOneAndUpdate(
//           { Phone: Phone_no },
//           { Phone: Phone_no, stat: 1 }
//         );
//         console.log(current);
//       }

//       const waitTime = 7000;

//       let count = 5;
//       var prev = "";



//       //       async function checkFunction() {
//       //          var d=await curr.findOne({Phone:Phone_no});
//       //         console.log("checking..............................................")

//       //           var currscore=await currentScore(d.match_link)
//       //          if(checkMatchStatus(d.match_link) && currscore!=prev && d.stat!=0 ){

//       //           prev=currscore
//       //           d=await curr.findOne({Phone:Phone_no});
//       //           await send_score(req,res,d.match_link)

//       //         }

//       //         else if(currscore==prev){
//       //           console.log("current score == previous score")
//       //         }

//       //           if(checkMatchStatus(d.match_link)==false || d.stat==0){
//       //           // clearInterval(intervalId);
//       //           console.log("while loop ended");
//       //             const current=await curr.findOneAndUpdate({Phone:Phone_no},{Phone:Phone_no,stat:0});
//       //         }

//       //       }
//       //     ///////////////d value is getting undefined after first time
//       //     // const intervalId=setInterval(checkFunction, 6000);
//       //       checkFunction()
//     } 