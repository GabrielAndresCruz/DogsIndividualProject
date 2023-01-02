import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDog, resetFilters, setActualPage } from "../../Redux/actions";
import { NavLink } from "react-router-dom";
import Style from "./Filter.module.css"

export default function Filters ({
    handleSortByLetter,
    handleSortByWeight,
    handleSortByTemperament,
    handleFilterCreated
}) {

    const dispatch = useDispatch()
    const allTemperaments = useSelector((state) => state.temperaments)

    const filterName = useSelector((state) => state.filterName)
    const orderName = useSelector((state) => state.orderName)
    

    const handleClick = (event) => {
        event.preventDefault()
        dispatch(getDog())
        dispatch(resetFilters())
        dispatch(setActualPage(1))
        // window.location.reload()
    }

    return (
        <div className={Style.Main}>

            <div className={Style.Inputs}>
                <div className={Style.Sort}>
                    
                        <select value={orderName} onChange={event => handleSortByLetter(event)} className={Style.Alphabet}>
                            <option key="Letter" value="" hidden>Order alphabetically</option>
                            <option key="A-Z" value="A-Z">A-Z</option>
                            <option key="Z-A" value="Z-A">Z-A</option>
                        </select>

              
                        <select value={orderName} onChange={event => handleSortByWeight(event)} className={Style.Weight}>
                            <option key="Weigth" value="" hidden>Order by weight</option>
                            <option key="MinWeight" value="MinWeight">Min to Max Weight</option>
                            <option key="MaxWeight" value="MaxWeight">Max to Min Weight</option>
                        </select>
             
                </div>

                <div className={Style.Filters}>
              
                        <select value={filterName} onChange={event => handleSortByTemperament(event)} className={Style.Temperaments}>
                            <option key="temp" value="" hidden>All temperaments</option>
                            {allTemperaments?.map((temp) => (
                                <option key={temp.name} value={temp.name}>{temp.name}</option>
                            ))}
                        </select>
                                 
              
                        <select value={filterName} onChange={(event) => handleFilterCreated(event)} className={Style.Dogs}>
                            <option key="all" value="All">All</option>
                            <option key="dbCreated" value="dbCreated">Created</option>
                            <option key="apiCreated" value="apiCreated">Existing</option>
                        </select>
                
                </div>
            </div>

                {/* <NavLink to='/home' style={{textDecoration:"none"}}> */}
                    <button onClick={(event)=>handleClick(event)} className={Style.Button}>
                        <div className={Style.ButtonColor}>
                            <span>Reset filters</span>
                        </div>
                    </button>
                {/* </NavLink> */}
        </div>
    )
}





                