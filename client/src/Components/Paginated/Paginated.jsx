import React, { useEffect } from "react";
import style from "../Paginated/Paginated.module.css"

export default function Paginated({
    currentPage,
    dogsPerPage, 
    allDogs, 
    paginated
}){
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++) {
        pageNumbers.push(i)
    }

    // useEffect(()=>{

    // }, [])

    return (
        <div className={style.container}>
        <nav>
            <ul className={style.pagination}>
                {
                    currentPage > 1 ? (
                        <li>
                            <a onClick = {()=> paginated(currentPage - 1)}> Previous </a>
                        </li>
                    ) :
                     (  <li>
                            <a className={style.hidden}> Previous </a>
                        </li>
                    ) 
                }
                {pageNumbers && pageNumbers.map(number => (
                    
                    <li className={currentPage === number ? style.active : null} key={number}>
                    <a onClick= {()=>paginated(number)}>{number}</a>
                    </li>
                ))}
                {
                    currentPage < allDogs / dogsPerPage ? (
                        <li>
                            <a onClick = {()=> paginated(currentPage + 1)}> Next </a>
                        </li>
                    ) : (
                        <li>
                            <a className={style.hidden}> Next </a>
                        </li>
                    )
                }
            </ul>
        </nav>
        </div>
    )
}