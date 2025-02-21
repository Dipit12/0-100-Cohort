
import axios from 'axios'

export default async function Home(){
  const userDetails = await getUserDetails()
  const userInternalDetails = await getInternalDetails()
  return(
    <div >
        <div className = "text-2xl text-red-400 w-80 h-80 bg-blue-700">
              <h1>{userDetails.name}</h1>
              <h2>{userDetails.email}</h2>
        </div>

        <div className = "text-2xl text-red-400 w-80 h-80 bg-blue-700">
              <h1>{userInternalDetails.username}</h1>
              <h2>{userInternalDetails.email}</h2>
        </div>
    </div>
  )
}

async function getUserDetails(){
  // await new Promise((resolve) =>{
  //   setTimeout(resolve, 2000)
  // })
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  return response.data
}

async function getInternalDetails(){
  const response = await axios.get("http://localhost:3000/api/user")
  return response.data
}