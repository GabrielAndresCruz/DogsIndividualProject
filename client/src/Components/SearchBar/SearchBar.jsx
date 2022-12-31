import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNameDogs, searchDog, setActualPage } from "../../Redux/actions";
import validate from "./Errors/Errors";
import Style from "./SearchBar.module.css"
import Search from "../../Images and Videos/Header/Search.png"

export default function SearchBar (){
    
    const dispatch = useDispatch()
    const[errors, setErrors] = useState("")
    const input = useSelector((state) => state.searchBar)

    const handleInputChange = (event) => {
        event.preventDefault()
        dispatch(searchDog(event.target.value))
        setErrors(validate(event.target.value))
        console.log(errors);
    }

    const handleClick = (event) => {
        event.preventDefault()
        dispatch(getNameDogs(input))
        dispatch(setActualPage(1))
    }

    return (
        <div className={Style.Main}>
            <input type= "text" placeholder= "Search..." onChange={event=>handleInputChange(event)} className={Style.Input} value={input}/>
            {errors !== "" ? (<span>{errors}</span>) : <span></span>}
            <button type= "submit" onClick={event=>handleClick(event)} className={Style.Button}>
                <img src={Search} className={Style.Lens}/>
            </button>
        </div>
    )
}