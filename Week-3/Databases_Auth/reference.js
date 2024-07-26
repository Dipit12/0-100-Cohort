// Auth using JWT
const express = require("express")
const jwt = require("jsonwebtoken")
const jwtPass = "123456"

const app = express();
app.use(express.json())

const ALL_USERS = [
    {
        username:"dipitmadan@gmail.com",
        password:"123456",
        name:"Dipit madan"
    },
    {
        username:"tithishah@gmail.com",
        password:"tithishah",
        name:"Tithi shah"
    },
    {
        username:"aaravraina@gmail.com",
        password:"something",
        name:"Aarav Raina"
    }
];

function userExists(username,password){
    // Write logic to return true if user exists
    const userExists = false;
    for(let i=0; i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            userExists = true;
        }
    }
    return userExists;
}

app.post("/signin", function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    if(!userExists(username,password)){
        res.status(400).json({
            msg:"User doesn't exist"
        })
    }
    var token = jwt.sign({username:username}, "shh");
    return res.json({
        token,
    });
});

app.get("/users", function(req,res){
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token,jwtPassword);
        const username = decoded.username;
    }
    catch(err){
        return res.status(403).json({
            msg:"Invalid token",
        });
    }
});

app.listen(3000);