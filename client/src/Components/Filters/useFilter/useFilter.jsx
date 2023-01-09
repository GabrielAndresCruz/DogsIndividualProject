import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCreated, orderByLetter, orderByWeight, filterTemperament, setActualPage } from "../../../Redux/actions/index"

export default function useFilter () {

    const dispatch = useDispatch()
    
    const allBreeds = useSelector((state) => state.allDog)
    const allDogs = useSelector((state) => state.dogs)
    const allTemperaments = useSelector((state) => state.temperaments)

    const filterName = useSelector((state) => state.filterName)
    const orderName = useSelector((state) => state.orderName)

    const handleFilterCreated = (event) => {
        dispatch(setActualPage(1))
        dispatch(filterCreated(event.target.value))
    }

    const handleSortByLetter = (event) => {
        event.preventDefault()
        dispatch(setActualPage(1))
        dispatch(orderByLetter(event.target.value))
    }

    const handleSortByWeight = (event) => {
        event.preventDefault()
        dispatch(setActualPage(1))
        dispatch(orderByWeight(event.target.value))
    }

    const handleSortByTemperament = (event) => {
        event.preventDefault()
        dispatch(setActualPage(1))
        dispatch(filterTemperament(event.target.value))
    }

    const handleReset = (event) => {
        event.preventDefault()
        window.location.reload()
    }

    return {
        handleFilterCreated, handleSortByLetter, handleSortByWeight, handleSortByTemperament, handleReset, allBreeds, allDogs, allTemperaments, filterName, orderName, dispatch
    }
}