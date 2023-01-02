import React from "react"
import { NavLink } from "react-router-dom"
import SearchBar from "../../SearchBar/SearchBar"
import Style from "./Header.module.css"

export default function Header () {
    return (
        <div className={Style.Main}>
            <div className={Style.Create}>
                <NavLink to={'/dogs'} style={{textDecoration:"none"}} > 
                    <button className={Style.Button}>
                        <div className={Style.ButtonColor}>
                            CREATE DOG
                        </div>
                    </button>
                </NavLink>
            </div>
            <div className={Style.SearchBar}>
                <SearchBar/>
            </div>
        </div>
    )
}
