import React from "react";
import { useSelector } from "react-redux";
import Style from "./Form.module.css"

export default function Form ({
    handleSumbit,
    handleChange,
    handleSelect,
    input,
    errors
}) {

    const temperament = useSelector(state=>state.temperaments)


    return (
        <div className={Style.Container}>
            <form onSubmit={(e) => handleSumbit(e)}>
            <div className={Style.Description}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={input.name} name="name" onChange={(e) => handleChange(e)} autoComplete="off" className={input.name.length ?  (errors.name ? Style.ErrorNameInput : Style.InputName): Style.InputName}/>
                    {input.name.length ?  errors.name && (<span className={Style.ErrorName}>{errors.name}</span>) : <span></span>}
                </div>    
                <div>
                    <label>Minimum height: </label>
                    <input type="text" value={input.min_height} name="min_height" onChange={(e) => handleChange(e)} autoComplete="off" className={input.min_height.length ? (errors.min_height ? Style.ErrorMinimumInput : Style.Minimum) : Style.Minimum}/>
                    {input.min_height.length ? errors.min_height && (<span className={Style.ErrorMinimumH}>{errors.min_height}</span>): <span></span>}
                </div>
                <div>
                    <label>Maximum height: </label>
                    <input type="text" value={input.max_height} name="max_height" onChange={(e) => handleChange(e)} autoComplete="off" className={input.max_height.length ? (errors.max_height ? Style.ErrorMaximumInput : Style.Maximum) : Style.Maximum}/>
                    {input.max_height.length ? errors.max_height && (<span className={Style.ErrorMaximumH}>{errors.max_height}</span>): <span></span>}
                </div>
                <div>
                    <label>Minimum weight: </label>
                    <input type="text" value={input.min_weight} name="min_weight" onChange={(e) => handleChange(e)} autoComplete="off" className={input.min_weight.length ? (errors.min_weight ? Style.ErrorMinimumInput : Style.Minimum) : Style.Minimum}/>
                    {input.min_weight.length ? errors.min_weight && (<span className={Style.ErrorMinimumW}>{errors.min_weight}</span>): <span></span>}
                </div>
                <div>
                    <label>Maximum weight: </label>
                    <input type="text" value={input.max_weight} name="max_weight" onChange={(e) => handleChange(e)} autoComplete="off" className={input.max_weight.length ? (errors.max_weight ? Style.ErrorMaximumInput : Style.Maximum) : Style.Maximum}/>
                    {input.max_weight.length ? errors.max_weight && (<span className={Style.ErrorMaximumW}>{errors.max_weight}</span>): <span></span>}
                </div>
                <div>
                    <label>Life Span: </label>
                    <input type="text" value={input.life_span} name= "life_span" onChange={(e) => handleChange(e)} autoComplete="off" className={Style.Input}/>
                </div>
                <div>
                    <label>Image: </label>
                    <input type="text" value={input.image} name= "image" onChange={(e) => handleChange(e)} autoComplete="off" className={Style.Input}/>
                </div>
                <div>
                    <label>Temperaments: </label>
                    <select onChange = {(e) => handleSelect(e)} className={Style.Temperaments} disabled={input.temperament.length > 7}>
                        <option value="hidden" hidden> . . . </option>
                        {
                            temperament.map((temp)=>(
                                <option value={temp.name}>{temp.name}</option>
                            ))
                        }
                    </select>
                    {/* {input.temperament.length == 0 ?
                    (   input.name.length && !errors.name &&
                        input.min_height.length && !errors.min_height &&
                        input.max_height.length && !errors.max_height &&
                        input.min_weight.length && !errors.min_weight &&
                        input.max_weight.length && !errors.max_weight 
                        ) && (<span className={Style.ErrorTemperament}>{errors.temperament}</span>): <span></span>} */}
                </div>
            </div>
                <button type="submit" className={Style.Button} 
                disabled={
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
                          >Create dog</button>
            </form>
        </div>
    )
}