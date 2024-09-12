import React, {useState, useEffect} from 'react';
import Todo from './Todo';
import axios from 'axios'
function App(){

  const [todos, setTodos] = useState([]);
  useEffect(() =>{
    axios.get("https://sum-server.100xdevs.com/todos")
    .then( function(response){
      setTodos(response.data.todos)
    })
  },[])
  return(
    <>
      {todos.map(todo => <Todo title = {todo.title} description = {todo.description} />)}
    </>
  );
}

export default App;