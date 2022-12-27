import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DogCard.module.css"
import { useLocation } from "react-router-dom";

export default function Card(props){

    const {id, name, min_weigth, max_weight, image, temperament} = props
    const location = useLocation()
    return (
        <div >
        <div className={style.component}>
            {location.pathname !== '/dogs' ? 
        <NavLink to={`/dogs/${id}`} style={{textDecoration:"none"}}>
        <div key={id}>
            <b>{name}</b>
            <img src={image} width= "250px" height= "200px"/>
            <b>Temperament</b>
            <p className={style.temp}>{temperament}</p>
            {console.log(props)}
            <p className={style.weight}><b>Weight: </b>{min_weigth} - {max_weight}</p>
            
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
        </div>
    )
}