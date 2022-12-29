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

    console.log(myDog);
    return (
        // <div>
        <div className={Style.Background}>
            {myDog.length > 0 ? 
            <div className={Style.Container}> 
                <div className={Style.Image}>
                    <img src={myDog[0].image} height="450px"/>
                </div>
                <div className={Style.Info}>
                    <h1>{myDog[0].name}</h1>
                    <p>
                        Temperaments: {Array.isArray(myDog[0].temperament) ? myDog[0].temperament.map(temp => temp.name + (" ")) : myDog[0].temperament}</p>
                    <p>
                        <b>Minimum Weight: </b> {myDog[0].min_weight} kg
                    </p>
                    <p>
                        <b>Maximum Weight: </b>{myDog[0].max_weight} kg
                    </p>
                    <p>
                        <b>Minimum Height: </b>{myDog[0].min_height} cm
                    </p>
                    <p>
                       <b>Maximum Height: </b>{myDog[0].max_height} cm
                    </p>
                    <p>
                      <b>Life Span: </b>{myDog[0].life_span}
                    </p>
                </div>
            </div> : 
            <p>Loading...</p>
        }
        <NavLink to= '/home'>
            <button>Go Back</button>
        </NavLink>
        <br /><br />
        {/* </div> */}
        <Footer/>
        </div>
    )
}