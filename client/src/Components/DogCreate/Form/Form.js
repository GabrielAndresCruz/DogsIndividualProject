import React from "react";
import { useSelector } from "react-redux";

export default function Form ({
    handleSumbit,
    handleChange,
    handleSelect,
    handleTempDelete,
    input,
    errors
}) {

    const temperament = useSelector(state=>state.temperaments)


    return (
        <div>
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
                {errors.temperament && (<p>{errors.temperament}</p>)}
                </div>
                <ul><li>{input.temperament.map(temp => temp + ', ')}</li></ul>
                <button type="submit" disabled={
                    !input.name ||
                     !input.min_height ||
                      !input.max_height ||
                       !input.min_weight ||
                        !input.max_weight || 
                         !input.temperament ||
                     errors.name ||
                      errors.min_height ||
                       errors.max_height ||
                        errors.min_weight ||
                         errors.max_weight || 
                          errors.temperament}>Create dog</button>
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