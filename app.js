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