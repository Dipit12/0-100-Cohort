const express = require("express");
const app = express();

const userModel = require("./userModel");

app.get("/", function(req,res){
    res.send("hello");
});

app.get("/create", async (req,res)=>{
    let createdUser = await userModel.create({
        name:"Dipit",
        userName:"Dipit12",
        email: "DipitM@gmail.com"
    })

    console.log(createdUser);
 })

app.get("/update", async (req,res) => {
    let updateUser = await userModel.findOneAndUpdate({username:"Dipit12"}, {name:"Tithi"}, {new:true});
    console.log(updateUser);
})

app.get("/read", async (req,res) =>{
    let users = await userModel.find();
    res.send(users);
    console.log(users);
})

app.get("/delete", async (req,res)=>{
    let users = await userModel.findOneAndDelete({username: "Dipit12"});
    res.send(users);
    console.log(users);
})
app.listen(3000);