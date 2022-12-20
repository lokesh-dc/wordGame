const express = require("express");

const app = express.Router();

const alphs = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;

app.get("/", async ( req, res )=>{

    let length = Math.floor(Math.random()* (11-4)+4);
    let word = "";
    for(let i=0;i<length;i++){
        let index = Math.floor(Math.random() * alphs.length );
        word += alphs[index];
    }

    res.send({length, word});
})


module.exports = app;