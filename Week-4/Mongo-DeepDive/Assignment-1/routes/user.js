const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middlewares/user");

// User Routes
router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username:username,
        password:password
    })
    res.json({
        msg:"User created successfully"
    })
});

router.get('/courses', (req, res) => {
    // Implement fetching all courses logic
    const response = Course.find({});
    res.json({
        courses:response
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router