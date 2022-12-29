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
    const filterSelected = useSelector((state) => state.filterSelected)
    

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(setActualPage(1))
        dispatch(getDog())
        dispatch(resetFilters())
        // refreshPage()
    }

    return (
        <div className={Style.Main}>

            <div className={Style.Inputs}>
                <div className={Style.Sort}>
                    
                        <select value={filterSelected} onChange={event => handleSortByLetter(event)} className={Style.Alphabet}>
                            <option value="" hidden>Order alphabetically</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                        </select>

              
                        <select value={filterSelected} onChange={event => handleSortByWeight(event)} className={Style.Weight}>
                            <option value="" hidden>Order by weight</option>
                            <option value="MinWeight">Min to Max Weight</option>
                            <option value="MaxWeight">Max to Min Weight</option>
                        </select>
             
                </div>

                <div className={Style.Filters}>
              
                        <select value={filterSelected} onChange={event => handleSortByTemperament(event)} className={Style.Temperaments}>
                            <option value="" hidden>All temperaments</option>
                            {allTemperaments?.map((temp) => (
                                <option value={temp.name}>{temp.name}</option>
                            ))}
                        </select>
                                 
              
                        <select value={filterSelected} onChange={(event) => handleFilterCreated(event)} className={Style.Dogs}>
                            <option value="All">All</option>
                            <option value="dbCreated">Created</option>
                            <option value="apiCreated">Existing</option>
                        </select>
                
                </div>
            </div>

                <button onClick={(event)=>handleClick(event)} className={Style.Button}>
                    <NavLink to='/home' style={{textDecoration:"none"}}>
                        <div className={Style.ButtonColor}>
                            <span>Reset filters</span>
                        </div>
                    </NavLink>
                </button>
        </div>
    )
}





                