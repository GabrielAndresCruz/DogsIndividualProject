import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDogs } from "../../Redux/actions";
import validate from "./Errors/Errors";
import Style from "./SearchBar.module.css"
import Search from "../../Images and Videos/Header/Search.png"

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
        <div className={Style.Main}>
            <input type= "text" placeHolder= "Search..." onChange={event=>handleInputChange(event)} className={Style.Input}/>
            {errors !== "" ? (<span>{errors}</span>) : <span></span>}
            <button type= "submit" onClick={event=>handleClick(event)} className={Style.Button}>
                <img src={Search} className={Style.Lens}/>
            </button>
        </div>
    )
}