

function App(){
  return(
    <>
      <Todo title = "study" description=" stidy for exams" isDone = {true} />
      
    </>
  )
}


interface TodoProp {
  title:string,
  description: string,
  isDone: boolean
}
function Todo(props: TodoProp){
  return(
    <>
      <h1>{props.title}</h1>
      <h2> {props.description}</h2>
      <h3>{props.isDone}</h3>
    </>
  )
}

export default App;
