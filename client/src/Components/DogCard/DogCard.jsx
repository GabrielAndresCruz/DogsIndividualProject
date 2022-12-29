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

                        <img src={image} width= "250px" height= "200px" className={style.image}/>
                        <b >{name}</b>

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
        <div>
        <div key={id}>
            <b>{props.input.name}</b>
            <img src={props.input.image} width= "250px" height= "200px"/>
            <b>Temperament</b>
            {/* <p className={style.temp}>{props.input.temperament}</p> */}
            <p className={style.weight}><b>Weight: </b>{props.input.min_weigth} - {props.input.max_weight}</p>
        </div>
       
        
        </div>}
        </div>
        
    )
}