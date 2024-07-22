// We have to create an in-memory hospital
/*
You need to create 4 routes(4 things that the hospital can do)
1. GET: User can check how many kidneys they have and their health
2. POST: User can add a new kidney
3. PUT: User can replace a kidney, make it healthy
4. DELETE: User can remove a kidney
*/


const express = require("express")

const users = [{
    name: "Dipit",
    kidneys: [{
        healthy: false,
    }]
}]

const app = express();
app.use(express.json())
app.get("/", function(req,res){
    const dipitKidneys = users[0].kidneys;
    const numberOfKidneys = dipitKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0; i< dipitKidneys.length; i++){
        if(dipitKidneys[i].healthy){
            numberOfHealthyKidney =+ 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.send(`Dipit has ${numberOfKidneys} kidneys, ${numberOfHealthyKidneys} healthy, ${numberOfUnhealthyKidneys} unhealthy`)
})

app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
})
app.put("/", function(req,res){
    res.json({
        msg: "Done"
    })

})
app.delete("/", function(req,res){
    const newKidneys = [];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                    healthy:true
            })
            
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg:"Done"})
})



app.listen(3002) // port