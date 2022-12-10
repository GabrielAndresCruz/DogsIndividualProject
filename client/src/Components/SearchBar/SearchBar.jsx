import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDogs } from "../../Redux/actions";

export default function SearchBar (){
    
    const dispatch = useDispatch()
    const[name, setName] = useState('')
    
    const handleInputChange = (event) => {
        event.preventDefault()
        setName(event.target.value)
        console.log(name);
    }

    const handleClick = (event) => {
        event.preventDefault()
        dispatch(getNameDogs(name))
    }

    return (
        <div>
            <input type= "text" placeHolder= "Search..." onChange={event=>handleInputChange(event)}/>
            <button type= "submit" onClick={event=>handleClick(event)}>Search</button>
        </div>
    )
}