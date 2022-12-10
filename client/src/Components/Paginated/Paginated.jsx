import React from "react";
import style from "../Paginated/Paginated.module.css"

export default function Paginated({
    dogsPerPage, 
    allDogs, 
    paginated
}){
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className={style.uList}>
                {pageNumbers && pageNumbers.map(number => (
                    <li className={style.paginated} key={number}>
                    <a onClick= {()=>paginated(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}