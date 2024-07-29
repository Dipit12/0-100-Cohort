const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://dipitmadan:Ab%40yGoldmine12@cluster0.fz8gj9e.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username:String,
    password:String
});

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    imageLink:String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}