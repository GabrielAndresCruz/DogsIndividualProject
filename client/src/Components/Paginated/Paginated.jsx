import React, { useEffect } from "react";
import style from "../Paginated/Paginated.module.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActualPage, 
    // setViewCurrentBottons
} from "../../Redux/actions";
import Filters from "../Filters/Filters"

export default function Paginated({
     dogsPerPage, 
     allDogs, 
     dogs,
}){
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++) {
        pageNumbers.push(i)
    }

    const dispatch = useDispatch()
    const currentButton = useSelector((state) => state.currentPage)
    // const dogs = useSelector((state) => state.dogs)

    const [viewCurrentButtons, setViewCurrentButtons] = useState([])

    const handlerClick = (number) => {
        dispatch(setActualPage(number))  
      }

    useEffect(()=>{
        let paginatedBar = [...viewCurrentButtons]

        const initialDots = '...'
        const leftDots = '... '
        const rightDots = '...'

        if (pageNumbers.length < 6) {
            paginatedBar = pageNumbers
        } else 
        if (currentButton >= 1 && currentButton <= 3) {
            paginatedBar = [ 1, 2, 3, 4, initialDots, pageNumbers.length]
        } else 
        if (currentButton === 4) {
            const pageSliced = pageNumbers.slice(0,5)
            paginatedBar = [...pageSliced, initialDots, pageNumbers.length]
        } else 
        if (currentButton > 4 && currentButton < pageNumbers.length - 2) {
            const firtsNumbersPage = pageNumbers.slice(currentButton - 2, currentButton)
            const lastNumberPage = pageNumbers.slice(currentButton, currentButton + 1)
            paginatedBar = ([1, leftDots, ...firtsNumbersPage, ...lastNumberPage, rightDots, pageNumbers.length])
        } else 
        if (currentButton > pageNumbers.length - 3){
            const lastsNumbersPages = pageNumbers.slice(pageNumbers.length - 4)
            paginatedBar = ([1, leftDots, ...lastsNumbersPages])
        } else
        if (currentButton === initialDots) {
            handlerClick(viewCurrentButtons[viewCurrentButtons.length-3] + 1)
        } else 
        if (currentButton === leftDots) {
            handlerClick(viewCurrentButtons[3] - 2)
        } else
        if (currentButton === rightDots) {
            handlerClick(viewCurrentButtons[3] + 2)
        }

        setViewCurrentButtons(paginatedBar)

    }, [currentButton, dogs])

    return (
        <div className={style.container}>
        <nav>
            <ul className={style.pagination}>
                {
                    currentButton > 1 ? (
                        <li>
                            <a onClick = {()=> handlerClick(currentButton - 1)}> Previous </a>
                        </li>
                    ) :
                     (  <li>
                            <a className={style.hidden}> Previous </a>
                        </li>
                    ) 
                }
                {
                    viewCurrentButtons.map(number => (
                    
                        <li className={currentButton === number ? style.active : null} key={number}>
                            <a onClick= {()=>handlerClick(number)}>{number}</a>
                        </li>
                    ))
                }
                {
                    currentButton < allDogs / dogsPerPage ? (
                        <li>
                            <a onClick = {()=> handlerClick(currentButton + 1)}> Next </a>
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