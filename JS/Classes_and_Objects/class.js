class Car{
    start(){
        console.log("start")
    }
    stop(){
        console.log("stop");
    };
    setBrand(brand){
        this.brand = brand;
    }
    constructor(){
        console.log("constructor is called")
    }
}
let myObj = new Car();
console.log(myObj.start());
console.log(myObj.stop());

class Parent{
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{
    
    constructor(age){
        super(); // to invoke the constructor of parent
        this.age = age
    }
}

let child_obj = new Child(18);
child_obj.hello()