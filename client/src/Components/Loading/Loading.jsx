import React from "react";
import Dog from "../../Images and Videos/Loading and NotFound/DogLoader.gif"
import Style from "./Loading.module.css"

export default function Loading () {
    return (
        <div>
            <img src={Dog} alt="" className={Style.Dog}/>
        </div>
    )
}