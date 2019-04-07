var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
    username: String,
    password: String
});

//UserSchema.plugin();

module.exports = mongoose.model("User", UserSchema);