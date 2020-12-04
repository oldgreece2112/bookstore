var mongoose = require("mongoose");
var passportlocalmongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    orders: [{
        type: String
    }],
    customerID: String
});

UserSchema.plugin(passportlocalmongoose, {usernameField: "email"});

module.exports = new mongoose.model("User", UserSchema);