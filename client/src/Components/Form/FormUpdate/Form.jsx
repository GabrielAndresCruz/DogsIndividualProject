import React from "react";
import { useSelector } from "react-redux";
import Style from "./Form.module.css"

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
                <div className={Style.Name}>
                    <input type="text" value={input.name} name="name" onChange={(e) => handleChange(e)}/>
                    {input.name.length ?  errors.name && (<span>{errors.name}</span>) : <span></span>}
                </div>    
                <div className={Style.Description}>
                    <div className={Style.Temperament}>
                        <label className={Style.LabelTemp}>Temperament: </label>
                        <span className={Style.TempContainer}>
                            {input.temperament.map(temp => 
                                <span>
                                    <p>{temp}</p>
                                    <button onClick={()=>handleTempDelete(temp)}>X</button>   
                                </span>
                                )
                            }                        
                        </span>
                    {errors.temperament && (<p>{errors.temperament}</p>)}
                    </div>                
                    <div className={Style.Min_weight}>
                        <label>Minimun weight: </label>
                        <input type="text" value={input.min_weight} name="min_weight" onChange={(e) => handleChange(e)}/>
                        {input.min_weight.length ? errors.min_weight && (<span>{errors.min_weight}</span>): <span></span>}
                    </div>
                    <div className={Style.Max_weight}>
                        <label>Maximum weight: </label>
                        <input type="text" value={input.max_weight} name="max_weight" onChange={(e) => handleChange(e)}/>
                        {input.max_weight.length ? errors.max_weight && (<span>{errors.max_weight}</span>): <span></span>}
                    </div>
                    <div className={Style.Min_height}>
                        <label>Minimun height: </label>
                        <input type="text" value={input.min_height} name="min_height" onChange={(e) => handleChange(e)}/>
                        {input.min_height.length ? errors.min_height && (<span>{errors.min_height}</span>): <span></span>}
                    </div>
                    <div className={Style.Max_height}>
                        <label>Maximum height: </label>
                        <input type="text" value={input.max_height} name="max_height" onChange={(e) => handleChange(e)}/>
                        {input.max_height.length ? errors.max_height && (<span>{errors.max_height}</span>): <span></span>}
                    </div>                
                    <div className={Style.Life_span}>
                        <label>Life Span: </label>
                        <input type="text" value={input.life_span} name= "life_span" onChange={(e) => handleChange(e)}/>
                    </div>
                    <div className={Style.Image}>
                        <label>Image: </label>
                        <input type="text" value={input.image} name= "image" onChange={(e) => handleChange(e)}/>
                    </div>
                    <div className={Style.TemperamentInput}>
                        <label>Add Temperaments:</label>
                        <select onChange = {(e) => handleSelect(e)}>
                        {
                            temperament.map((temp)=>(
                                <option value={temp.name}>{temp.name}</option>
                            ))
                        }
                        </select>
                    </div>
                </div>
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
                          errors.temperament} 
                          className={Style.Button}>
                    Update Dog
                </button>
            </form>
        </div>
    )
}