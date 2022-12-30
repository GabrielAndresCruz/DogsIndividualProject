import React from "react";
import { NavLink, useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail, deleteDog } from "../../Redux/actions";
import Style from "./DogDetail.module.css"
import Footer from "../Footer/Footer"

export default function DogDetail(props){
    const dispatch = useDispatch()
    const history = useHistory()
    const myDog = useSelector((state) => state.detail)
    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
    },[])

    const handleDelete = (event) => {
        event.preventDefault();
        dispatch(deleteDog(props.match.params.id))
        alert("Dog successfully removed")
        history.push('/home')
    }

    const handleBack = () => {
        history.push('/home', { from: 'DogDetail' })
    }

    console.log(props);
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
                <div className={Style.Description}>
                    <p>
                        <b>Temperaments: </b> {myDog[0].temperament}
                    </p>
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
            </div>
            </div> : 
            <p>Loading...</p>
        }
        <NavLink to= '/home'>
            <button onClick={() => handleBack()}>Go Back</button>
        </NavLink>
        { myDog[0]?.createInDb === true ? 
            <button onClick={(e)=>handleDelete(e)}>Delete</button>
            : null
        }
        <br /><br />
        {/* </div> */}
        <div className={Style.Footer}>
        <Footer/>
        </div>
        </div>
    )
}