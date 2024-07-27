const express = require("express")
const app = express();

app.get("/", function(req,res){
    const principal = req.query.principal;
    const rate = req.query.rate;
    const time = req.query.time;
    const si = (principal*rate*time)/100;
    res.json({msg:si})
})

app.listen(3000)