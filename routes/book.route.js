var express = require("express");
var router = express.Router();

var Book = require("../models/Book");

//All books
router.get("/catalog", (req, res) => {
    Book.find({}, (err, foundBooks) => {
        if(err){
            console.log(err);
        }else{
            console.log(foundBooks);
            res.render("books/catalog", {books: foundBooks});
        }
    });
});

//genre search
router.get("/catalog/genre/:genreID", (req, res) => {
    var genre = req.params.genreID;

    Book.find({genre}, (err, foundBooks) => {
        if(err){
            console.log(err);
        }else{
            console.log(foundBooks);
            res.render("books/catalog");
        }
    });
});

//title search
router.get("catalog/title/:title", (res, req) => {
    var title = req.params.title;

    Book.find({title}, (err, foundBooks) => {
        
    });
});

module.exports = router;