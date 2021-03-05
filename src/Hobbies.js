import React from "react";
import Hobby from './Hobby'

function Hobbies(){
    const hobbies = {name: "flags", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxccxVpptkuzgVVXOOAJ14iGD4HUmssMq0lA&usqp=CAU"}
    return(
        <div>
            <h1 style={{color: "red"}} >Hobbies</h1>
            <Hobby hobbies={hobbies}/>
        </div>
    )

}

export default Hobbies;