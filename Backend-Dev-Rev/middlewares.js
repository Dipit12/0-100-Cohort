const express = require('express')
const app = express()

app.use(function(req,res,next){  // this is a middleware, which is a function which gets called for every request, and is executed before the route handler
    console.log("I am a middleware")
    next();
}); 
app.get('/', function (req, res,next) {
   // return next(new Error("Something went wrong"))
    res.send('Hello World')
})
// error handling
app.use(function(err,req,res,next){
    console.error(err.stack)
    res.status(500).send("Something broke")
})

app.listen(3000)
