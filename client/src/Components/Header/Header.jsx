import React from "react"
import { NavLink } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import Style from "./Header.module.css"

export default function Header () {
    return (
        <div className={Style.Main}>
            <div className={Style.Create}>
                <button className={Style.Button}>
                    <NavLink to={'/dogs'} style={{textDecoration:"none"}} > 
                        <div className={Style.ButtonColor}>
                            CREATE DOG
                        </div>
                    </NavLink>
                </button>
            </div>
            <div className={Style.SearchBar}>
                <SearchBar/>
            </div>
        </div>
    )
}
