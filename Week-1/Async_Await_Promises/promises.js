const fs = require("fs")

// A promise is an object that may produce a single value some time in the future
// creating our own async function

function dipitRead(cb){
    fs.readFile("a.txt", "utf-8", function(err,data){
        cb(data)
    })
}

// callback function to call
function onDone(data){
    console.log(data)
}

dipitRead(onDone)