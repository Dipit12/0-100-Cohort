const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/', function (req, res,next) {
   // return next(new Error("Something went wrong"))
    res.send('Hello World')
})

app.get("/profile", function(req,res,next){
    return next(new Error("Not implemented"));
})
// error handling
app.use(function(err,req,res,next){
    console.error(err.stack)
    res.status(500).send("Something broke")
})

app.listen(3000)
