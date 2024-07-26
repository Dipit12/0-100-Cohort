// Write a function that takes in a username and password and returns a JWT token 
// with the username encoded. Should return null if the username is not a valid email 
// or if the password is less than 6 characters. Try using the zod library here
// Write a function that takes a jwt as input and returns true if the jwt can be DECODED 
// (not verified). Return false otherwise
//  - Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise

const jwt = require("jsonwebtoken")
const zod = require("zod")
const jwtPassword = "secret";

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);
function signJWT(username, password) {
    const Usernameresponse = emailSchema.safeParse(username);
    const Passwordresponse = passwordSchema.safeParse(password);
    if(!Usernameresponse.success || !Passwordresponse.success){
        return null;
    }
    const token  = jwt.sign({username}, jwtPassword);
    return token;
}
function verifyJWT(token){
    try{
        const verified = jwt.verify(token,jwtPassword);
        return true;
    }
    catch(err){
        console.log("The error is " + err);
    }
    return false;
    
}

function decodeJWT(token){
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    }
    else{
        return false;
    }
}

const ans = signJWT("dipitmadan@gmail.com", "Ab@yDIpit12");
console.log(ans)