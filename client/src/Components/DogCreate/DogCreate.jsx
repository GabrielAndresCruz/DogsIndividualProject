import React from "react";
import { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTemperaments, postDogs } from "../../Redux/actions/index"
import validate from "../Form/Errors/Errors";
import Form from "../Form/FormCreate/Form";
import Style from './DogCreate.module.css'
import DogCard from '../DogCard/DogCard'
import Footer from "../Footer/Footer";
import HeaderSimple from "../Header/HeaderSimple/HeaderSimple";

export default function DogCreate (props){

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

    const [loading, setLoading] = useState(true);

    const handleChange = (event) => {
        setInput({...input, [event.target.name]: event.target.value})
        setErrors(validate({...input, [event.target.name]: event.target.value}))
    }

    const handleSelect = (event) => {
        setInput({...input, temperament: [...input.temperament, event.target.value]})
        setErrors(validate({...input, temperament: [...input.temperament, event.target.value]}))
    }

    const handleSumbit = (event) =>{
        event.preventDefault()
        dispatch(postDogs(input))
        if(errors.name || errors.min_height || errors.max_height || errors.min_weight || errors.max_weight){
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
        const timer = setTimeout(()=>{
            setLoading(false)
        },2000)
        return ()=>clearTimeout(timer)
    },[])

    return (
        <div>
        <div className={Style.Background}>
            <div className={Style.Header}>
                <HeaderSimple
                />
            </div>
            <div className={Style.Form}>
                <div className={Style.Container}>
                    <h1>Create Your Dog</h1>
                    <Form 
                        handleSumbit = {handleSumbit}
                        handleChange = {handleChange}
                        handleSelect = {handleSelect}
                        handleTempDelete = {handleTempDelete}
                        input = {input}
                        errors = {errors}
                    />
                </div>
            </div>
            <div className={Style.Card}>
                <DogCard
                input = {input}
                handleTempDelete = {handleTempDelete}
                /> 
            </div>
        </div>
        <div className={Style.Footer}>
            <Footer/>
        </div>
        </div>
    )
}
 
//103 