const mongoose = require("mongoose");

const dbConnect = ()=>{
    return mongoose.connect("mongodb+srv://lokesh:prashantdc@scores.623qhru.mongodb.net/userDatabase")
}

module.exports = dbConnect;