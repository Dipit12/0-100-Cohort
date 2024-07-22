/*
Function without express
function calculateSum(n){
    let ans = 0;
    for(let i=0;i<n;i++){
        ans = ans +i;
    }
    return ans;

    let ans = calculateSum(100);
    console.log(ans)
}
*/

const express = require("express")

function calculateSum(n){
    let ans = 0;
    for(let i=0;i<n;i++){
        ans = ans +i;
    }
    return ans;
}

const app = express();
app.get("/", (req,res) =>{
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send(ans.toString());
})

app.listen(3000) // here 3000 is the port