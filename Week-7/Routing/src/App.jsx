import Landing from "./Landing";
import Dashboard from "./Dashboard";
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
 function App(){
//   const navigate = useNavigate();
//   function handleLanding(){
//     navigate("/")
//   }

//   function handleDashboard(){
//     navigate("/dashboard")
//   }
//   return(
//     <>
//     <header>This is the header</header>
    
//     <button onClick = {handleLanding}>Landing</button>
//     <button onCLick = {handleDashboard}>Dashboard</button>
return(
  <>

<BrowserRouter>
      <AppBar />
      <Routes>
        <Route path = "/" element = {<Landing />} />
        <Route path = "/dashboard" element = {<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </>
)
    
 }
function AppBar(){
  const navigate = useNavigate();
  function handleLanding(){
    navigate("/")
  }

  function handleDashboard(){
    navigate("/dashboard")
  }
  return(
    <>
    <header>This is the header</header>
    
    <button onClick = {handleLanding}>Landing</button>
    <button onCLick = {handleDashboard}>Dashboard</button>
    
    </>
  )
}
export default App;