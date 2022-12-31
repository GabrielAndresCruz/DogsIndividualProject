import React from "react"
import { NavLink } from "react-router-dom"
import Style from "./HeaderHandler.module.css"

export default function HeaderHandler (props) {
    const { id, handleDelete } = props
    return (
        <div className={Style.Main}>
            <div className={Style.Order}>
                <button className={Style.Button}>
                    <NavLink to= {'/home'} style={{textDecoration:"none"}}>
                        <div className={Style.ButtonColor}>
                            Go Back
                        </div>
                    </NavLink>
                </button>
                <button className={Style.Button}>
                    <NavLink to={`/updateDog/${id}`} style={{textDecoration:"none"}}>
                        <div className={Style.ButtonColor}>
                            Update
                        </div>
                    </NavLink>
                </button>
                <button className={Style.Button} onClick={(e)=>handleDelete(e)}>                    
                    <div className={Style.ButtonColor}>
                        Delete
                    </div>                    
                </button>
            </div>
        </div>
    )
}

