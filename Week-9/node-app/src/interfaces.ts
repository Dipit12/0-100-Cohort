// equivalent of objects in js is interfaces in ts

/*
const user = {
    firstName: "Dipit",
    lastName: "Madan",
    email: "dipitmadan@gmail.com",
    age:19
}
*/

interface User  {
    firstName: string,
    lastName: string,
    email?: string, // optional parameter
    age:number
}

function isLegal(User){
    if(User.age > 18){
        return true
    }
    return false;
}

console.log(isLegal({
    firstName: "Dipit",
    lastName: "Madan",
    age:19
}))

interface Person {
    name: string,
    age: number,

    greet(phrase: string):void;
}

class Employee implements Person{
    name: string;
    age: number;

    constructor(n:string, a:number){
        this.name = n;
        this.age = a; 
    }

    greet(phrase:string){
        console.log(`${phrase} ${this.name}`)
    }
}

const e1 = new Employee("dipit", 19);
console.log(e1.greet("Hello"))