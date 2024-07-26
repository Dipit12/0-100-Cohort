const express = require("express")
const app = express();

function ageMiddleware(req,res,next){
    const age = req.query.age;
    if(age > 18){
        next();
    }else{
        res.json({
            msg:"Grow up"
        })
    }
}

app.get("/ride1",ageMiddleware ,function(req,res){
   res.json({
    msg:"You have riden ride1"
   });
})

app.get("/ride2", ageMiddleware,function(req,res){
    res.json({
     msg:"You have riden ride2"
    });
 })

 app.get("/ride1", ageMiddleware,function(req,res){
    res.json({
     msg:"You have riden ride3"
    });
 })

app.listen(3000);