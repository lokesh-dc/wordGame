const express = require("express");
const userModel = require("./users.schema");

const app = express.Router();

app.get("/", async (req, res)=>{
    try{
        const users = await userModel.find();
        res.send({status: true, users});
    }catch(e){
        res.status(500).send({status: false, message: "Something went wrong"});
    }
})

module.exports = app;