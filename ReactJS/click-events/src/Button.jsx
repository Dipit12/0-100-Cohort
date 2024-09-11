function Button(){
    const handleClick = () =>{
        console.log("button was clicked")
    }
    return(
        
        <button onClick = {handleClick}>Click Me</button>
        
    )
}

export default Button