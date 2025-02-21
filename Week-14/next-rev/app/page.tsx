import axios from 'axios'
export default async function Home(){
  const userData = await getUserDetails();
  const userInternalData = await getInternalDetails();
  return(
    <div>
      <div className = "h-40 w-60 bg-red-500">
          <h1 className ="text-white font-bold text-2xl">{userData.name}</h1>
          <p className ="text-white font-bold text-xl">{userData.email}</p>
      </div>

      <div className = "h-40 w-60 bg-red-500">
          <h1 className ="text-white font-bold text-2xl">{userInternalData.name}</h1>
          <p className ="text-white font-bold text-xl">{userInternalData.email}</p>
      </div>
    </div>
  )
}

async function getUserDetails(){
  await new Promise((r) =>{
    setTimeout(r,2000)
  })
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  return response.data;
}

async function getInternalDetails(){
  const response = await axios.get("http://localhost:3000/api/user")
  return response.data;
}