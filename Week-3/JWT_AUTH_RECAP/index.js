const jwt = require("jsonwebtoken");

// Generate, decode and verify

const value = {
    name:"Dipit",
    accountNum: 123456789
}
// jwt 
// function to generate a token is sign
const token = jwt.sign(value, "secretPass") // this secretPass can be used to verify the generated token
console.log(token);

const generated_jwt_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGlwaXQiLCJhY2NvdW50TnVtIjoxMjM0NTY3ODksImlhdCI6MTcyMjAxMDI3MH0.xfpPsRNRT5iZk9kQ_UF4L8KHx-MuNRd77x-upMz1b_c"

// verifying a JWT token
const details = jwt.verify(generated_jwt_token, "secretPass");
console.log(details);
