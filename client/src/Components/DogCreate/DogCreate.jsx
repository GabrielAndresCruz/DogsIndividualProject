import React from "react";
import { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, postDogs } from "../../Redux/actions/index"

function validate (input){
    let errors= {}

    if (!input.name){
        errors.name = "Must be contain a name"
    } else 
    if (input.name.split('')[0] === ' '){
        errors.name = "Your can't use tabulation or space in your first box"
    } else 
    if (/\d/.test(input.name)){
        errors.name = "Can't use numbers in name"
    } else
    if (input.name.split('')[0] === input.name.split('')[0].toLowerCase()){
        errors.name = "Your first letter must be capitalized"
    }
    if(!/^\d+$/.test(input.min_height)){
        errors.min_height = "Minimum height must be a number"
    } 
    if(!/^\d+$/.test(input.max_height)){
        errors.max_height = "Maximum height must be a number"
    } else 
    if (input.min_height > input.max_height){
        errors.max_height = "Maximum height must be greater than the minimum height"
    }
    if(!/^\d+$/.test(input.min_weight)){
        errors.min_weight = "Minimum weight must be a number"
    } 
    if(!/^\d+$/.test(input.max_weight)){
        errors.max_weight = "Maximum height must be a number"
    } else 
    if (input.min_weight > input.max_weight){
        errors.max_weight = "Maximum weight must be greater than the minimum weight"
    }
    
    return errors;
}

export default function DogCreate (){

    const dispatch = useDispatch()
    const history = useHistory()
    const temperament = useSelector(state=>state.temperaments)

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
        <div>
            <NavLink to='/home'><button>Back</button></NavLink>
            <h1>Create your dog</h1>
            <form onSubmit={(e) => handleSumbit(e)}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={input.name} name="name" onChange={(e) => handleChange(e)}/>
                    {errors.name && (<p>{errors.name}</p>)}
                </div>    
                <div>
                    <label>Minimun height: </label>
                    <input type="text" value={input.min_height} name="min_height" onChange={(e) => handleChange(e)}/>
                    {errors.min_height && (<p>{errors.min_height}</p>)}
                </div>
                <div>
                    <label>Maximum height: </label>
                    <input type="text" value={input.max_height} name="max_height" onChange={(e) => handleChange(e)}/>
                    {errors.max_height && (<p>{errors.max_height}</p>)}
                </div>
                <div>
                    <label>Minimun weight: </label>
                    <input type="text" value={input.min_weight} name="min_weight" onChange={(e) => handleChange(e)}/>
                    {errors.min_weight && (<p>{errors.min_weight}</p>)}
                </div>
                <div>
                    <label>Maximum weight: </label>
                    <input type="text" value={input.max_weight} name="max_weight" onChange={(e) => handleChange(e)}/>
                    {errors.max_weight && (<p>{errors.max_weight}</p>)}
                </div>
                <div>
                    <label>Life Span: </label>
                    <input type="text" value={input.life_span} name= "life_span" onChange={(e) => handleChange(e)}/>
                </div>
                <div>
                    <label>Image: </label>
                    <input type="text" value={input.image} name= "image" onChange={(e) => handleChange(e)}/>
                </div>
                <div>
                    <label>Temperament: </label>
                <select onChange = {(e) => handleSelect(e)}>
                    {
                        temperament.map((temp)=>(
                            <option value={temp.name}>{temp.name}</option>
                        ))
                    }
                </select>
                </div>
                <ul><li>{input.temperament.map(temp => temp + ', ')}</li></ul>
                <button type="submit" disabled={errors.name || errors.min_height || errors.max_height || errors.min_weight || errors.max_weight}>Create dog</button>
            </form>
                {input.temperament.map(temp => 
                    <div>
                        
                        <span>{temp}</span>
                        <button onClick={()=>handleTempDelete(temp)}>X</button>
                       
                    </div>
                    )}
        </div>
    )
}

//103 