import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDog, filterCreated, orderByLetter, orderByWeight, getTemperaments, filterTemperament } from "../../Redux/actions/index"
import { Link } from "react-router-dom"
import DogCard from "../DogCard/DogCard"
import Paginated from "../Paginated/Paginated.jsx";
import SearchBar from "../SearchBar/SearchBar";
import DogCreate from "../DogCreate/DogCreate";

export default function Home (){

    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.dogs)
    const allTemperaments = useSelector((state) => state.temperaments)

    const [order, setOrder] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage, setDogsPerPage] = useState(8)
    const indexLastDog = currentPage * dogsPerPage 
    const indexFirstDog = indexLastDog - dogsPerPage 
    const currentDogs = allDogs.slice(indexFirstDog, indexLastDog)

    const paginated = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getDog())
        dispatch(getTemperaments())
    },[])

    const handleClick = (event) => {
        event.preventDefault()
        dispatch(getDog())
    }

    const handleFilterCreated = (event) => {
        dispatch(filterCreated(event.target.value))
    }

    const handleSortByLetter = (event) => {
        event.preventDefault()
        dispatch(orderByLetter(event.target.value))
        setCurrentPage(1)
        setOrder(`Ordered by ${event.target.value}`)
    }

    const handleSortByWeight = (event) => {
        event.preventDefault()
        dispatch(orderByWeight(event.target.value))
        setCurrentPage(1)
        setOrder(`Ordered by ${event.target.value}`)
    }

    const handleSortByTemperament = (event) => {
        event.preventDefault()
        dispatch(filterTemperament(event.target.value))
        setCurrentPage(1);
    }

    return (
        <div>
            <Link to='/dogs' >Create Dog</Link>
            <h1>Ta dele torea el beshuga</h1>
            <button onClick={(event)=>{handleClick(event)}}>Refresh</button>
            <div>
                <select onChange={event => handleSortByLetter(event)}>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
                <select onChange={event => handleSortByWeight(event)}>
                    <option value="MinWeight">Min to Max Weight</option>
                    <option value="MaxWeight">Max to Min Weight</option>
                </select>
                <select onChange={event => handleSortByTemperament(event)}>
                    {allTemperaments?.map((temp) => (
                        <option value={temp.name}>{temp.name}</option>
                    ))}
                </select>
                <select onChange={(event) => handleFilterCreated(event)}>
                    <option value="All">All</option>
                    <option value="dbCreated">Created</option>
                    <option value="apiCreated">Existing</option>
                </select>
                <Paginated
                dogsPerPage= {dogsPerPage}
                allDogs= {allDogs.length}
                paginated= {paginated}
                />
                <SearchBar/>
                {
                    currentDogs?.map(dog=>{
                        return (
                        <DogCard 
                        id={dog.id} 
                        name={dog.name} 
                        min_weigth={dog.min_weight} 
                        max_weight={dog.max_weight} 
                        image={dog.image} 
                        temperament={dog.temperament}
                        />
                        )
                    })
                }
            </div>
        </div>
    )
}