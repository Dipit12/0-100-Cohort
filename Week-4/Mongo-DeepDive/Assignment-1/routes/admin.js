const { Router } = require("express");
const {Admin} = require('../db')
const adminMiddleware = require("../middlewares/admin");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username:username,
        password:password
    })
    .then(function(){
        res.json({
            msg:"Admin created successfully"
        })
    })
    .catch(function(err){
        res.json({
            msg:err
        })
    })
    
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;