import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDog, filterCreated, orderByLetter, orderByWeight, getTemperaments, filterTemperament, setActualPage } from "../../Redux/actions/index"
import { Link } from "react-router-dom"
import DogCard from "../DogCard/DogCard"
import Paginated from "../Paginated/Paginated.jsx";
import SearchBar from "../SearchBar/SearchBar";
import DogCreate from "../DogCreate/DogCreate";
import Filters from "../Filters/Filters";
import Header from "../Header/Header"
import Style from "./Home.module.css"
import Image from "../../Images and Videos/DogInWater.jpg"
import Footer from "../Footer/Footer"

export default function Home (){

    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.dogs)
    const currentPage = useSelector((state) => state.currentPage)
    
    const [order, setOrder] = useState('')
    // const [currentPage, setCurrentPage] = useState(0)
    
    const [dogsPerPage, setDogsPerPage] = useState(8)
    const indexLastDog = currentPage * dogsPerPage 
    const indexFirstDog = indexLastDog - dogsPerPage 
    const currentDogs = allDogs.slice(indexFirstDog, indexLastDog)

    // const paginated = (pageNumber) =>{
    //     setCurrentPage(pageNumber)
    // }

    // const changePaginatedBar = (event) => {
    //     setCurrentButton(event)
    // }

    useEffect(()=>{
        dispatch(getDog())
        dispatch(getTemperaments())
    },[])

    const handleClick = (event) => {
        event.preventDefault()
        dispatch(getDog())
    }

    const handleFilterCreated = (event) => {
        dispatch(setActualPage(1))
        dispatch(filterCreated(event.target.value))
        // setCurrentPage(1)
    }

    const handleSortByLetter = (event) => {
        event.preventDefault()
        dispatch(setActualPage(1))
        dispatch(orderByLetter(event.target.value))
        // setCurrentPage(1)
        setOrder(`Ordered by ${event.target.value}`)
    }

    const handleSortByWeight = (event) => {
        event.preventDefault()
        dispatch(setActualPage(1))
        dispatch(orderByWeight(event.target.value))
        // setCurrentPage(1)
        setOrder(`Ordered by ${event.target.value}`)
    }

    const handleSortByTemperament = (event) => {
        event.preventDefault()
        dispatch(setActualPage(1))
        dispatch(filterTemperament(event.target.value))
        // setCurrentPage(1);
    }

    if (allDogs.length === 0){
        return <h2>Loading...</h2>
    }
    return (
        <div className={Style.background}>
            <Header/>
            {/* { currentDogs ?  */}
                <Filters
                handleSortByLetter = {handleSortByLetter}
                handleSortByWeight = {handleSortByWeight}
                handleSortByTemperament = {handleSortByTemperament}
                handleFilterCreated = {handleFilterCreated}
                />
                 {/* : 
                <h1>Loading...</h1>
            }  */}
                <Paginated
                currentButton= {currentPage}
                // currentButton = {currentButton}
                dogsPerPage= {dogsPerPage}
                allDogs= {allDogs.length}
                // paginated= {paginated}
                // changePaginatedBar = {changePaginatedBar}
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
                <Paginated
                currentButton= {currentPage}
                // currentButton = {currentButton}
                dogsPerPage= {dogsPerPage}
                allDogs= {allDogs.length}
                // paginated= {paginated}
                // changePaginatedBar = {changePaginatedBar}
                />
                <br /><br />
                <Footer/>
        </div>
    )
}