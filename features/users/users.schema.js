const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    userName : {type: String, required: true},
    level : {type: Number, default: 0},
    score : {type: Number, default: 0}
})

const userModel = mongoose.model("user", usersSchema);

module.exports = userModel;