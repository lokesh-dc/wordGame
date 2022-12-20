const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    userName : {type: String, required: true},
    level : {type: Number},
    score : {type: Number}
})

const userModel = mongoose.model("user", usersSchema);

module.exports = userModel;