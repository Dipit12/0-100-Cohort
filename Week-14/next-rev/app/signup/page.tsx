"use client"
import axios from 'axios'
export default function SignUp(){
    return(
        <div>
            <div className = "bg-red-300 w-75 h-80">
               <label>
                    Enter your name
               </label>
               <br></br>
               <input type = "text" placeholder = "John Doe" className = "text-black" name = "name"></input> <br></br>
               <label>
                    Enter your email
               </label>
               <br></br>
               <input type = "text" placeholder = "johndoe@gmail.com" className = "text-black" name = "email"></input>
               <br></br>
               <button className = "bg-black rounded-lg cursor-pointer w-18" onChange={async () =>{
                    const response = await axios.post("https://localhost:3000/api/user"),{
                        name,
                        email
                    }
                    console.log(response)
               }}>Submit</button>
            </div>
        </div>
    )
}