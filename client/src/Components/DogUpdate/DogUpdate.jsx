import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getTemperaments, updateDog } from "../../Redux/actions";
import Form from "../Form/FormUpdate/Form";
import validate from "../Form/Errors/Errors";
import Style from "./DogUpdate.module.css"
import HeaderSimple from "../Header/HeaderSimple/HeaderSimple";
import Footer from "../Footer/Footer";

export default function DogUpdate () {
    const { id } = useParams()

    const dispatch = useDispatch()
    const history = useHistory()

    const myDog = useSelector((state) => state.detail)
    
    useEffect(()=>{
        dispatch(getTemperaments())
    },[])
    const myDogTemperaments = myDog[0].temperament.split(",").map((temp)=>temp.trim())
    
    const [input, setInput] = useState({
        name: myDog[0].name,
        min_height: myDog[0].min_height,
        max_height: myDog[0].max_height,
        min_weight: myDog[0].min_weight,
        max_weight: myDog[0].max_weight,
        life_span: myDog[0].life_span,
        image: myDog[0].image,
        temperament: myDogTemperaments[0] == "" ? [] : myDogTemperaments,
    })
    // myDogTemperaments[0] == "" ? [] : myDogTemperaments
    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setInput({...input, [event.target.name]: event.target.value})
        setErrors(validate({...input, [event.target.name]: event.target.value}))
    }

    const handleSelect = (event) => {
        setInput({...input, temperament: [...input.temperament, event.target.value]})
        setErrors(validate({...input, temperament: [...input.temperament, event.target.value]}))
    }

    const handleTempDelete = (event) =>{
        setInput({...input, temperament: input.temperament.filter(temp => temp !== event)})
    }

    const handleSumbit = (event) =>{
        event.preventDefault()
        // dispatch(updateDog(input, id))
        if(
        !input.name ||
        !input.min_height ||
        !input.max_height ||
        !input.min_weight ||
        !input.max_weight || 
        !input.temperament
        || errors.name
        || errors.min_height 
        || errors.max_height 
        || errors.min_weight 
        || errors.max_weight){
            alert("You need to fix the errors on the form")
        } else {
        dispatch(updateDog(input, id))
        alert("Your dog has been update.")
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
        history.push(`/dogs/${id}`)
        // window.location.reload()
        }
    }

    return (
        <div className={Style.Background}>
            <div className={Style.Header}>
                <HeaderSimple
                id={id}
                />
            </div>
            <div className={Style.Form}>
                <div className={Style.Container}>
                    <img src={input.image === "" ? "https://img.freepik.com/vector-premium/perro-sentado-silueta-vector-fondo-blanco_566661-3319.jpg?w=2000" : input.image} height="400px"/>
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
            <div className={Style.Footer}>
                <Footer/>
             </div>
        </div>
    )
}