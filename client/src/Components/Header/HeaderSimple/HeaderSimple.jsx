import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import Style from "./HeaderSimple.module.css"

export default function HeaderSimple (props) {

    const { id } = props

    const local = useLocation()

    return (
        <div className={local.pathname === '/dogs' ?
            Style.Create :
            Style.Detail}>
            <div className={Style.Order}>
                <button className={Style.Button}>                
                    <NavLink to={local.pathname === `/updateDog/${id}` ? `/dogs/${id}` : '/home' } style={{textDecoration:"none"}}>
                            <div className={Style.ButtonColor}>
                                Go Back
                            </div>
                    </NavLink>
                </button>
            </div>
        </div>
    )
}