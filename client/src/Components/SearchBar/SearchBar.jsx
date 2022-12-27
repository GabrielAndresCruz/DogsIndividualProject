import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDogs } from "../../Redux/actions";
import validate from "./Errors/Errors";

export default function SearchBar (){
    
    const dispatch = useDispatch()
    const[name, setName] = useState('')
    const[errors, setErrors] = useState("")
    
    const handleInputChange = (event) => {
        event.preventDefault()
        setName(event.target.value)
        setErrors(validate(event.target.value))
        console.log(errors);
    }

    const handleClick = (event) => {
        event.preventDefault()
        dispatch(getNameDogs(name))
    }

    return (
        <div>
            <input type= "text" placeHolder= "Search..." onChange={event=>handleInputChange(event)}/>
            {errors !== "" ? (<span>{errors}</span>) : <span></span>}
            <button type= "submit" onClick={event=>handleClick(event)}>Search</button>
        </div>
    )
}