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

app.post('/backend-api', function(req,res){
    res.send("Hello Backend API")
})

app.listen(port,()=> {
    console.log("Listening on port 3000")
})