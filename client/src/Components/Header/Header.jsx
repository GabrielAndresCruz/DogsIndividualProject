import React from "react"
import { Link } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import Style from "./Header.module.css"

export default function Header () {
    return (
        <div className={Style.header}>
            <div className={Style.createDogs}>
            <button className={Style.button}>
                <Link to='/dogs'> CREATE DOG</Link>
            </button>
            </div>
            <div className={Style.searchBar}>
            <SearchBar/>
            </div>
        </div>
    )
}
