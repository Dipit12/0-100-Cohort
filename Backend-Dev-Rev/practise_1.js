// intitialize the project with npm
// express install
// dynamic routing
// how to get data coming from frontend at backend route
// setting up parsers for form
// setting up EJS for ejs pages
    // -> install ejs from npm
    // -> setup ejs as a view engine
// setting up public static file

const express = require("express")
const app = express();
const path = require("path")
// parsers
app.use(express.json());
app.use(express.urlencoded({encoded:true}));
app.set('view engine', 'ejs');
// to use HTML/CSS/Vanilla JS in our code
app.use(express.static(path.join(__dirname, 'public')))
app.get("/", function(req,res){
    res.send("Working");
})
app.get("/home",function(req,res){
    res.render("index.ejs")
})
app.get("/profile/:name",function(req,res){ // : to make it dynamic
    let name = req.params.name;
    res.send(name)
})

app.listen(3000, function (){
    console.log("server is running")
});