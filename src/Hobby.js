import React from "react";
import Posts from './Posts'
import { Link } from "react-router-dom";

function Hobby({hobby}){

    return (
        <Link to={`/hobbies/${hobby.id}`}>
        <div>
        <h1>{hobby.name}</h1>
        <img src={hobby.image}/>
        
        </div>
        </Link>
    )
}

export default Hobby