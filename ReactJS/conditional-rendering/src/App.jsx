import UserGreeting from "./UserGreeting"

function App() {
  return(
    <div>
      <UserGreeting isLoggedIn = {true} username = "Dipit"/>
      <UserGreeting isLoggedIn = {false} username = "Tithi"/>
    </div>
  )
}

export default App
