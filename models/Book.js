var mongoose = require("mongoose");

var BookSchema = new mongoose.Schema({
    title: String,
    price: Number,
    stock: Number,
    desc: String,
    author: String,
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Genre"
    }
});

BookSchema.index({title: 'text', author: 'text'});

module.exports = new mongoose.model("Book", BookSchema);