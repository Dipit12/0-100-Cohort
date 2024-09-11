const {User} = require('../db')
function userMiddleware(req, res, next) {
    username = req.headers.username;
    password = req.headers.password;
    User.findOne({ // to check if the username and password is stored in the database
        username:username,
        password:password
    })
    .then(function(value){
        if(value){
            next();
        }
        else{
            res.json({msg:"User doesnt exist"})
        }
    })
}

module.exports = userMiddleware;