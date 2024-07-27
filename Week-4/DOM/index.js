const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors());
app.get("/", (req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    const ans = parseInt(a) + parseInt(b);
    res.send(ans.toString());
})

app.listen(3000);