import React from "react";
import { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, postDogs } from "../../Redux/actions/index"
import validate from "./Errors/Errors";
import Form from "./Form/Form";
import Style from './DogCreate.module.css'
import DogCard from '../DogCard/DogCard'

export default function DogCreate (){

    const dispatch = useDispatch()
    const history = useHistory()
    

    const [input, setInput] = useState({
        name: "",
        min_height: "",
        max_height: "",
        min_weight: "",
        max_weight: "",
        life_span: "",
        image: "",
        temperament: [], 
    })
    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setInput({...input, [event.target.name]: event.target.value})
        setErrors(validate({...input, [event.target.name]: event.target.value}))
        console.log(input);
    }

    const handleSelect = (event) => {
        setInput({...input, temperament: [...input.temperament, event.target.value]})
        setErrors(validate({...input, temperament: [...input.temperament, event.target.value]}))
        console.log(input);
    }

    const handleSumbit = (event) =>{
        event.preventDefault()
        console.log(input);
        dispatch(postDogs(input))
        if(errors.name || errors.min_height || errors.max_height || errors.min_weight || errors.max_weight ){
            alert("You need to complete the fields?")
        } else {
        alert("Your dog has been created.")
        setInput({
        name: "",
        min_height: "",
        max_height: "",
        min_weight: "",
        max_weight: "",
        life_span: "",
        image: "",
        temperament: [],
        })
        history.push('/home')
    }
    }

    const handleTempDelete = (event) =>{
        setInput({...input, temperament: input.temperament.filter(temp => temp !== event)})
    }

    useEffect(()=>{
        dispatch(getTemperaments())
    },[])

    return (
        <div className={Style.background}>
            <NavLink to='/home'><button>Back</button></NavLink>
            <div className={Style.container}>
            <h1>Create your dog</h1>
            <Form 
            handleSumbit = {handleSumbit}
            handleChange = {handleChange}
            handleSelect = {handleSelect}
            handleTempDelete = {handleTempDelete}
            input = {input}
            errors = {errors}
            />
            </div>
            <div>
            {/* <DogCard
            input = {input}
            /> */}
            </div>
        </div>
    )
}
 
//103 