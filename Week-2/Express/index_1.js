const express = require("express")

function calculateSum(a,b){
    return a+b;
}

const app = express();
app.get("/", function(req,res){
    res.send("Hello world")
})
app.get("/sum", function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    const ans = calculateSum(a,b);
    res.send(ans.toString());
})
app.listen(3001); // port