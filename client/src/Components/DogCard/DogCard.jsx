import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DogCard.module.css"

export default function Card({id, name, min_weigth, max_weight, image, temperament}){
    return (
        <div className={style.component}>
        <NavLink to={`/dogs/${id}`}>
        <div key={id}>
            <b>{name}</b>
            <img src={image} width= "250px" height= "200px"/>
            <b>Temperament</b>
            <p className={style.temp}>{temperament}</p>
            <p className={style.weight}><b>Weight: </b>{min_weigth} - {max_weight}</p>
            
        </div>
        </NavLink>
        </div>
    )
}