import React from "react";
import Posts from './Posts'
import { Link } from "react-router-dom";

function Hobby({hobbies}){
    return (
        <Link to="/posts">
        <div>
        <h1>{hobbies.name}</h1>
        <img src={hobbies.image}/>
        
        </div>
        </Link>
    )
}

export default Hobby