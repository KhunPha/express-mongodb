const mongoose = require("mongoose")

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Book', BookSchema)