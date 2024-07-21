// Intro to Express
const fs = require("fs")
const express = require("express");

/*
1. npm init -y
2. npm install express
*/
const app = express()
const port = 3000

app.get('/',function (req,res) {
    res.send("Hello world")
})

app.get("/home", function (req,res){
    res.send("This is the home page")
})
app.post('/backend-api', function(req,res){
    res.send("Hello Backend API")
})

app.listen(port)
