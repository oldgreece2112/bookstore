if (process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}

var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var passportLocal = require("passport-local");
var app = express();

var PORT = process.env.PORT || 8000;

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once("open", () => {
    console.log("Connected to database!!!");
});

app.set("view engine", "ejs");
app.use(new session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
appp.use(passport.session());
passport.use(new passportLocal(User.authenticate()));
passport.serializeUser();
passport.deserializeUser();

app.listen(PORT, process.env.IP, () => {
    console.log("Server is running on port " + PORT);
});