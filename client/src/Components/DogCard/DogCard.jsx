import React from "react";
import { NavLink } from "react-router-dom";

export default function Card({id, name, min_weigth, max_weight, image, temperament}){
    return (
        <NavLink to={`/dogs/${id}`}>
        <div key={id}>
            <img src={image} width= "250px" height= "200px"/>
            <p>{name}</p>
            <p><b>Temperament:</b>{temperament}</p>
            <p><b>Minimum Weight:</b>{min_weigth}</p>
            <p><b>Maximum Weight:</b>{max_weight}</p>
        </div>
        </NavLink>
    )
}