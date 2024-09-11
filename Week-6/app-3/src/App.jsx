// import Todo from "./Todo";
import React, {useState} from 'react';
let counter = 4;
function App(){
  const [todos,setTodos] = useState([{
    id:1,
    title:"Todo-1 ",
    description: "Todo-1 description"
  },
  {
  id:2,
  title:"Todo-2 ",
  description: "Todo-2 description"
},
{
id:3,
title:"Todo-3 ",
description: "Todo-3 description"
}

])
  function addTodo(){
    setTodos([...todos], {
      id:counter++,
      title:Math.random(),
      description: Math.random()
    })
  }
  return(
    <>
      <button onCLick = {addTodo}>Add todo</button>
      {todos.map(todo => <Todo key = {todo.id} title = {todo.title} description = {todo.description} />)}
    </>
  );
}
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
export default App;