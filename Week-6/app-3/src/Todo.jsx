function Todo(props){
    return(
        <>
        <h1>
            {props.title}
        </h1>

        <h5>
            {props.description}
        </h5>
        </>
    );
}


export default Todo;
