const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  password: String,
  Phone: Number,
  match_link: String,
  stat: Number,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
