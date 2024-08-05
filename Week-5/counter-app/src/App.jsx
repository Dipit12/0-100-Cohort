import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let state = {
  count:0
}

function App() {
  const [count,setCount] = useState(0);
  function OnClickHandler(){
    setCount(count+1);
  }
  

  return (
    // component
     <div>
        <CustomButton count = {count} setCount = {setCount}></CustomButton>
     </div>
  )
}
// component
function CustomButton(props){

  function OnClickHandler(){
    props.setCount(count+1);
  }
  return <button onClick = {OnClickHandler}>
    Counter {props.count}
  </button>
}

export default App
