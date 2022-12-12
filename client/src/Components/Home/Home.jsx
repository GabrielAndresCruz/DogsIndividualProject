import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDog, filterCreated, orderByLetter, orderByWeight, getTemperaments, filterTemperament } from "../../Redux/actions/index"
import { Link } from "react-router-dom"
import DogCard from "../DogCard/DogCard"
import Paginated from "../Paginated/Paginated.jsx";
import SearchBar from "../SearchBar/SearchBar";
import DogCreate from "../DogCreate/DogCreate";
import Filters from "../Filters/Filters";
import Header from "../Header/Header"
import Style from "./Home.module.css"
import Image from "../../Images and Videos/DogInWater.jpg"

export default function Home (){

    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.dogs)

    const [order, setOrder] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [currentButton, setCurrentButton] = useState([])
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
        // setCurrentPage(1)
        setOrder(`Ordered by ${event.target.value}`)
    }

    const handleSortByWeight = (event) => {
        event.preventDefault()
        dispatch(orderByWeight(event.target.value))
        // setCurrentPage(1)
        setOrder(`Ordered by ${event.target.value}`)
    }

    const handleSortByTemperament = (event) => {
        event.preventDefault()
        dispatch(filterTemperament(event.target.value))
        setCurrentPage(1);
    }

    return (
        <div className={Style.background}>
            <Header/>
            <SearchBar/>
            <button onClick={(event)=>{handleClick(event)}}>Refresh</button>
                <Filters
                handleSortByLetter = {handleSortByLetter}
                handleSortByWeight = {handleSortByWeight}
                handleSortByTemperament = {handleSortByTemperament}
                handleFilterCreated = {handleFilterCreated}
                />
                <Paginated
                currentPage = {currentPage}
                dogsPerPage= {dogsPerPage}
                allDogs= {allDogs.length}
                paginated= {paginated}
                />
                <div className={Style.cards}>
                {
                    currentDogs?.map(dog=>{
                        return (
                            <div>
                        <DogCard 
                        id={dog.id} 
                        name={dog.name} 
                        min_weigth={dog.min_weight} 
                        max_weight={dog.max_weight} 
                        image={dog.image} 
                        temperament={dog.temperament}
                        />
                        </div>
                        )
                    })
                }
                </div>
        </div>
    )
}