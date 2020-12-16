var mongoose = require("mongoose");

var BookSchema = new mongoose.Schema({
    title: String,
    price: Number,
    stock: Number,
    desc: String,
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Genre"
    }
});

module.exports = new mongoose.model("Book", BookSchema);