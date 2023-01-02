import React from "react"
import { NavLink } from "react-router-dom"
import Style from "./HeaderHandler.module.css"

export default function HeaderHandler (props) {
    const { id, handleDelete } = props
    return (
        <div className={Style.Main}>
            <div className={Style.Order}>
                <NavLink to= {'/home'} style={{textDecoration:"none"}}>
                    <button className={Style.Button}>
                        <div className={Style.ButtonColor}>
                            Go Back
                        </div>
                    </button>
                </NavLink>
                <NavLink to={`/updateDog/${id}`} style={{textDecoration:"none"}}>
                    <button className={Style.Button}>
                        <div className={Style.ButtonColor}>
                            Update
                        </div>
                    </button>
                </NavLink>
                <button className={Style.Button} onClick={(e)=>handleDelete(e)}>                    
                    <div className={Style.ButtonColor}>
                        Delete
                    </div>                    
                </button>
            </div>
        </div>
    )
}

