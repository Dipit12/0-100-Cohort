// - You have to create a few standard middlewares for your application.
//  - You have to create a middleware for logging the number of requests on a server
//  - You have to create a middleware for rate limiting a users request based on their username passed in the header
//  - You have to create a middleware for logging the number of errors on a server
const express = require("express")
const app = express();

let requestCount = 0;
app.use(function(req,res,next){
    requestCount++;
    next();
})

app.get("/user", function(req,res){
    res.status(200).json({
        name: "Dipit",
    })
})

app.post("/user", function(req,res){
    res.status(200).json({
        msg: "user created successfully",
    })
})

app.listen(3000);