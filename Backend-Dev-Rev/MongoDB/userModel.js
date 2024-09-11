const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://dipitmadan:Ab%40yGoldmine12@cluster0.fz8gj9e.mongodb.net/`)

const userSchema = mongoose.Schema({
    name: String,
    userName: String,
    email: String
})

module.exports = mongoose.model("user", userSchema)