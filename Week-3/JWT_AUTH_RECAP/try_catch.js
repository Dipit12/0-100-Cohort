// Trying and catching errors in JS
/*
function getLength(name){
    return name.length;
}

const ans = getLength(); // give an error
console.log(ans)
console.log("hi there") */


// let's say someones calls this function without passing a argument
// for such scenarios we use try and catch statements

// when an exception is raised the process exits since the JS program doesnt want to proceed anymore
// But you can use try and catch to handle exceptions

// other way to write this same code with try and catch

try{
    let a;
    console.log(a.length); // would give an error
} catch(err){
    console.log("Something went wrong \n" + err)
}

console.log("Hi there");