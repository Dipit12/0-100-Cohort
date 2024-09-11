import Header from "./Header";
import React, {useState} from 'react';
function App(){
  const [title,setTitle] = useState("some text")
  function handleTitleChange(){
      let newtext = Math.random();
      setTitle(newtext);
  }
  return(
    <>
      <button onClick = {handleTitleChange}>Change me</button>
      <Header title = {title} />
      <Header title = "This is title 2" />
      <Header title = "This is title 3" />
      <Header title = "This is title 4" />
    </>
  );
}

export default App;