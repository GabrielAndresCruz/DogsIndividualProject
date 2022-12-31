import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, NavLink } from "react-router-dom";
import { updateDog } from "../../Redux/actions";
import Form from "../Form/Form/Form";
import validate from "../Form/Errors/Errors";

export default function DogUpdate () {
    const { id } = useParams()

    const dispatch = useDispatch()
    const history = useHistory()

    const myDog = useSelector((state) => state.detail)
    
    let inputTemp = myDog[0].temperament.split(",").map((temp)=>[temp])
    console.log(inputTemp);
    const [input, setInput] = useState({
        name: myDog[0].name,
        min_height: myDog[0].min_height,
        max_height: myDog[0].max_height,
        min_weight: myDog[0].min_weight,
        max_weight: myDog[0].max_weight,
        life_span: myDog[0].life_span,
        image: myDog[0].image,
        temperament: myDog[0].temperament.split(",").map((temp)=>[temp]),
    })
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
        dispatch(updateDog(input, id))
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
        history.push(`/dogs/${id}`)
        }
    }

    return (
        <div>
            <Form 
                handleSumbit = {handleSumbit}
                handleChange = {handleChange}
                handleSelect = {handleSelect}
                handleTempDelete = {handleTempDelete}
                input = {input}
                errors = {errors}
            />
            <NavLink to={`/dogs/${id}`}>
                <button>
                    Go back
                </button>
            </NavLink>
        </div>
    )
}