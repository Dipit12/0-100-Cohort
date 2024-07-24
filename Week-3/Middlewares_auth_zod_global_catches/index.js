const express = require("express")
const app = express();

app.get("/health-checkup", function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyID = req.query.kidneyID;
    
    if(username == "dipit" && password == "pass"){
        if(kidneyID == 1 || kidneyID == 2){
            res.json({
                msg:"Your kidney is fine"
            })
        }
        
    }
    res.status(400).json({msg:"Something is wrong with your inputs"})

})

app.listen(3000);