import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DogCard.module.css"
import { useLocation } from "react-router-dom";

export default function Card(props){
    const {id, name, min_weigth, max_weight, image, temperament} = props
    const location = useLocation()
    
    return (
        
        <div >
            {location.pathname !== '/dogs' ? 
                <NavLink to={`/dogs/${id}`} style={{textDecoration:"none"}}>
                    <div className={style.cards} key={id}>
                        <b className={style.name}>{name}</b>

                        <img src={image} width= "250px" height= "200px" className={style.image} alt=""/>

                        <div className={style.cardbody}>
                            
                            <div className={style.temperaments}>
                                <b>Temperament</b>
                                <p className={style.temp}>{temperament}</p>
                            </div>

                            <div className={style.weight}>
                                <b>Weight</b>
                                <p>{min_weigth}kg - {max_weight}kg</p>
                            </div>

                        </div>
                    </div>
                </NavLink>
            : 
            <div key={id} className={style.Form}>
                <b className={style.Name}>{props.input.name ? props.input.name : <p className={style.NamePlaceHolder}>Breed Name</p>}</b>
                <img src={props.input.image === "" ? "https://img.freepik.com/vector-premium/perro-sentado-silueta-vector-fondo-blanco_566661-3319.jpg?w=2000" : props.input.image} className={props.input.image === "" ? style.ImageDefault : style.Image} alt=""/>
                <div className={style.Description}>                    
                    
                        <p className={style.Height}>
                            <b>Height: </b>{props.input.min_height} cm - {props.input.max_height} cm
                        </p>
                        <p className={style.Weight}>
                            <b>Weight: </b>{props.input.min_weight} kg - {props.input.max_weight} kg
                        </p>
                        <p className={style.Lifespan}>
                            <b>Life span: </b>{props.input.life_span}
                        </p>

                        <p className={style.Temperament}>
                            <b>Temperaments: </b>
                            <div className={style.TempList}>
                                {props.input.temperament.map(temp => 
                                <span>                        
                                    <p>{temp}</p>
                                    <button onClick={()=>props.handleTempDelete(temp)}>x</button>                       
                                </span>
                                )} 
                            </div>
                        </p>

                </div>
            </div>
            }
        </div>
        
    )
}