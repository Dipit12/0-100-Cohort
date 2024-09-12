// creating a counter App using the useState hook

import React, {useState} from 'react';

function App(){
  const [count,setCount] = useState(0);

  function handleCountIncrement(){
    setCount(count+1);
  }

  function handleCountDecrement(){
    setCount(count-1);
  }

  function handleReset(){
    setCount(0);
  }

  return(
    <>
      <h1> {count}</h1>
      <button onClick = {handleCountIncrement}>Increment</button>
      <button onClick = {handleCountDecrement}>Decrement</button>
      <button onClick = {handleReset}>Counter Reset</button>
    </>
  );
} 

export default App;