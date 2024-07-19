const fs = require("fs")  // nodeJS library for file system operations

fs.readFile("a.txt", "utf-8", function(err,data){
    console.log(data)
})

// an async function always gets called at the last for example
console.log("Hello")

// here Hello would print first, since its the fs function is of type async
