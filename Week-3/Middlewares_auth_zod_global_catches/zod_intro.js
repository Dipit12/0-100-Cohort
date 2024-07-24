const express = require("express")
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());
/*
schema for different auth
    -> email: string => email
    -> password: atleast 8 characters
    -> country: 'IN' or 'US'

*/

const schema_1 = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US"))

})

app.use(express.json());

app.post("/health-checkup", function(req,res){
    // kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
   
    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        })
    }
    else{
        res.send({
            response
        })
    }
})

app.listen(3004);