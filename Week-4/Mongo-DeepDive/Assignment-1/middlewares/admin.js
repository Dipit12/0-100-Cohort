// Middleware for handling auth
const {Admin} = require('../db')
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    username = req.headers.username;
    password = req.headers.password;
    Admin.findOne({ // to chech if the username and password is stored in the database
        username:username,
        password:password
    })
    .then(function(value){
        if(value){
            next();
        }
        else{
            res.json({msg:"Admin doesnt exist"})
        }
    })

}

module.exports = adminMiddleware;