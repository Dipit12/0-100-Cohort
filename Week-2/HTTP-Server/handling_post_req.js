const fs = require("fs")
const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const port = 3001
app.get("/", function(req,res){
    res.send("hi this is the landing page")
})
app.use(bodyParser.json());
app.get("/home", function(req,res){
    console.log(req.headers)
    res.send("This is the home page")
})
app.post("/conversations", function(req,res){
    console.log(req.body)
    res.send({
        msg: "2+2 is 4"
    })
})
app.listen(port)
