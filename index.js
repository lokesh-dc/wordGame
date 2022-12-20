const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");

const wordRouter = require("./features/word/word.router");
const usersRouter = require("./features/users/users.router");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/word", wordRouter);
app.use("/users", usersRouter);

app.get("/", (req,res)=>{
    res.send("Word Game Backend");
})

app.listen(8080, async ()=>{
    await dbConnect();
    console.log("Server started on port 8080");
})

