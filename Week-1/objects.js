// Objects in JS are equivalent to dictionary in python
// Write a program that prints all the male people's first name given a complex object

// solving this problem only using arrays
const personArray = ["Dipit","Aarav","Tithi"]
const gender = ["male","male","female"]

for(let i=0;i<personArray.length;i++){
    if(gender[i]== "male"){
        console.log(personArray[i])
    }
}

// using the concept of objects in JS

const allUsers = [
    {
        name:"Dipit",
        gender:"male"
    },
    {
        name:"Tithi",
        gender:"female"
    }
]

for(let j=0;j<allUsers.length;j++){
    if(allUsers[j]["gender"] == "male"){
        console.log(allUsers[j]["name"])
    }
}