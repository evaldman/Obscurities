import React, {useState} from "react";
import { Link } from "react-router-dom";

function Homepage(){
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")

function handleSubmit(e){
    e.preventDefault()
    const formData = {
        username,
        password
    }

    fetch('http://localhost:3000/users',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
        if(data.errors){
            data.errors.map(error=> console.log(error))
        }else{
            console.log(data)
        }
    })
    
}
    return(
        <div>
           <Link to="/hobbies">explore</Link>
           <form onSubmit={handleSubmit}>
               <label>What shall we refer you by?</label>
                <input type="text" value={username} placeholder="username..." onChange={(e)=> setUsername(e.target.value)}></input>
                <lable>Choose a secret key</lable>
                <input type="password" value={password} placeholder="password..." onChange={(e)=> setPassword(e.target.value)}></input>
                <input type="submit" value ="Welcome!"></input> 
                <input type="submit" value ="Login!"></input> 

           </form>
           
        </div>
    )

}

export default Homepage;