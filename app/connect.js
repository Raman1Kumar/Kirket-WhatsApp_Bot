const mongoose = require("mongoose");

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const uri = process.env.MONGO_DB;

const connection = mongoose
  .connect(uri, connectionParams)
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

module.exports = connection;
