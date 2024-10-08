const express = require("express")
const app = express();

function user_pass_middleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "dipit" && password != "pass"){
        res.status(400).json({
            msg:"Wrong username/password"
        });
    }
    else{
        next();
    }
}

function KidneyIDMiddleware(req,res,next){
    const kidneyID = req.query.kidneyID;
    if(kidneyID != 1 || kidneyID != 2){
        res.status(400).json({
            msg:"Wrong input"
        });
    }
    else{
        next();
    }
}

app.get("/health-checkup", user_pass_middleware, KidneyIDMiddleware, function(req,res){
    res.send("Your kidney is healthy");
})

app.listen(3001);