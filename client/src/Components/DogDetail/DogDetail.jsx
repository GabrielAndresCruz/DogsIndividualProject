import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../../Redux/actions";
import Style from "./DogDetail.module.css"
import Footer from "../Footer/Footer"

export default function DogDetail(props){
    const dispatch = useDispatch()
    const myDog = useSelector((state) => state.detail)
    console.log(props);
    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
    },[])

    
    return (
        // <div>
        <div className={Style.background}>
            {myDog.length > 0 ? 
            <div className={Style.container}> 
                <h1>{myDog[0].name}</h1>
                <img src={myDog[0].image} height="450px"/>
                <h3>Minimum Weight {myDog[0].min_weight}</h3>
                <h3>Maximum Weight {myDog[0].max_weight}</h3>
                <h3>Minimum Height {myDog[0].min_height}</h3>
                <h3>Maximum Height {myDog[0].max_height}</h3>
                <h3>Life Span {myDog[0].life_span}</h3>
                <h4>Temperaments {Array.isArray(myDog[0].temperament) ? myDog[0].temperament.map(temp => temp.name + (" ")) : myDog[0].temperament}</h4>
            </div> : 
            <p>Loading...</p>
        }
        <NavLink to= '/home'>
            <button>Go Back</button>
        </NavLink>
        <br /><br />
        <Footer/>
        {/* </div> */}
        </div>
    )
}