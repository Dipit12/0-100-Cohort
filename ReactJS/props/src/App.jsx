/*
Props -> read only properties that are shared between components. A parent component can send data to a child component

propTypes: A mechanism that ensures that the passed value id of the correct data type. age: PropTypes.number, gives a warning in the console if the value is not of the correct datatype

defaultProps: default values for props in case they are not passed from the parent component
*/
import Student from "./Student.jsx"
function App() {
  return(
    <div>
      <Student name = "Dipit" age = {18} isStudent = {true}></Student>
      <Student name = "Aarav" age = {19} isStudent = {true}></Student>
      <Student name = "Tithi" age = {19} isStudent = {false}></Student>
      <Student></Student>
    </div>
  )
}

export default App
