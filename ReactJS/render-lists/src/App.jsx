
import List from "./List.jsx"
import List2 from "./List2.jsx"
function App() {

  const fruits = [{id:1,name:"apple", calories:95}, 
                  {id:2,name:"orange",calories:45}, 
                  {id:3,name:"banana", calories:105}];
  return(
    <div>
      <List2 items = {fruits}/>
    </div>
  )
}

export default App
