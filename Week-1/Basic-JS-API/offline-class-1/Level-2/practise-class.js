class Animal{
    constructor(name,legCount,color){
        this.name = name
        this.legCount = legCount
        this.color = color
    }
    describe(){
        console.log("I am an animal")
    }

    walk(){
        console.log("I can walk")
    }
    color(){
        console.log("My color is" + this.color)
    }
    static myType(){
        console.log("I am an animal")
    }

}

let dog = new Animal("dog",4,"black")
dog.describe()
dog.color()
let cat = new Animal("cat",4,"white")
cat.describe()
console.log(cat.legCount)
cat.color()
console.log(Animal.myType())