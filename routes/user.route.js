var express = require("express");
var passport = require("passport");
var router = express.Router();
var User = require("../models/User");

router.get("/register", (req, res) => {
    res.render("user/register");
});

router.get("/login", (req, res) => {
    res.render("user/login");
});

router.post("/register", (req, res) => {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var newUser = {
        firstName,
        lastName,
        email
    };

    User.register(newUser, req.body.password, (err, newUser) => {
        if(err){
            console.log(err);
            res.redirect("/user/register");
        }
        passport.authenticate("local")(res, req, () => {
            res.redirect("/");
        });
    });
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/user/login/"
}), (req, res) => {

});

router.get("/logout", () => {
    req.logout();
    res.redirect("/user/login");
});

module.exports = router;