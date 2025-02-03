

function App(){
  const [count, setCount] = useState(0);
  return(
    <>
    <Count count = {count}/>
    <Buttons count = {count} setCount ={setCount} />
    </>
  );
}

function Count({count}){
  return(
    <>
    <p>{count}</p>
    </>
  )
  
}

function Buttons({count, setCount}){
  return(
    <>
     <button onClick = {() =>{
      setCount(count+1);
     }}>Increment</button>
    <button onClick = {() =>{
      setCount(count-1);
    }}>Decrement</button>
    </>
   
  );
}