// import CardWrapper from "./CardWrapper";
// Wrapper Component - passing a component as props
function App(){
  return(
    <>

    
    <CardWrapper innerComponent = {<TextComponent />} />
    <CardWrapper innerComponent = {<TextComponent />} />
    <CardWrapper innerComponent = {<TextComponent />} />
  
    </>
    );
}
function CardWrapper(props){
  return(
      <>
          {props.innerComponent}
      </>
  );
}

function TextComponent(){
  return(
      <div style = {{border:"2px solid black", padding:20}}>
          <h1>Hi there</h1>
      </div>
      
  )
}
export default App;
