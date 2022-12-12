import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDog } from "../../Redux/actions";
import { NavLink } from "react-router-dom";

export default function Filters ({
    handleSortByLetter,
    handleSortByWeight,
    handleSortByTemperament,
    handleFilterCreated
}) {

    const dispatch = useDispatch()
    const allTemperaments = useSelector((state) => state.temperaments)

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(getDog())
    }

    return (
        <div>
                <select onChange={event => handleSortByLetter(event)}>
                    <option hidden>Order alphabetically</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
                <select onChange={event => handleSortByWeight(event)}>
                    <option hidden>Order by weight</option>
                    <option value="MinWeight">Min to Max Weight</option>
                    <option value="MaxWeight">Max to Min Weight</option>
                </select>
                <select onChange={event => handleSortByTemperament(event)}>
                    <option hidden>All temperaments</option>
                    {allTemperaments?.map((temp) => (
                        <option value={temp.name}>{temp.name}</option>
                    ))}
                </select>
                <select onChange={(event) => handleFilterCreated(event)}>
                    <option value="All">All</option>
                    <option value="dbCreated">Created</option>
                    <option value="apiCreated">Existing</option>
                </select>
                <button onClick={(event)=>handleClick(event)}>
                    <NavLink to='/home'>
                        <p>Reset filters</p>
                    </NavLink>
                </button>
                </div>
    )
}





                