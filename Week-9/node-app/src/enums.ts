// enums - short for enumerations in TS are a feature that allows you to define a set of names constants
// The concept behind an enumeration is to create a human readable way to represent a set of constant values, which otherwise may be represented as numbers or strings

enum Directions{
    UP,
    DOWN,
    RIGHT,
    LEFT
}

/*
Another approach
type Directions = "UP" | "DOWN" | "RIGHT" | "LEFT"
*/

function doSomethingInGame(keyPressed: Directions){
    if(keyPressed == Directions.UP){
        console.log("UP key pressed")
    }
    else if(keyPressed == Directions.DOWN){
        console.log("Down key is pressed")
    }
    else if(keyPressed == Directions.RIGHT){
        console.log("right key is pressed")
    }
    else{
        console.log("left key is pressed")
    }
}

doSomethingInGame(Directions.UP)