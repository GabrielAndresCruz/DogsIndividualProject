import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDog, filterCreated, orderByLetter, orderByWeight, getTemperaments, filterTemperament, setActualPage, updateChange, getNameDogs } from "../../Redux/actions/index"
import DogCard from "../DogCard/DogCard"
import Paginated from "../Paginated/Paginated.jsx";
import SearchBar from "../SearchBar/SearchBar";
import DogCreate from "../DogCreate/DogCreate";
import Filters from "../Filters/Filters";
import Header from "../Header/HeaderMain/Header";
import Style from "./Home.module.css"
import Image from "../../Images and Videos/DogInWater.jpg"
import Footer from "../Footer/Footer"

export default function Home (){

    const dispatch = useDispatch()
    const allBreeds = useSelector((state) => state.allDog)
    const allDogs = useSelector((state) => state.dogs)
    const currentPage = useSelector((state) => state.currentPage)
    const update = useSelector((state) => state.update)
    
    const [order, setOrder] = useState('')
    
    const [dogsPerPage, setDogsPerPage] = useState(8)
    const indexLastDog = currentPage * dogsPerPage 
    const indexFirstDog = indexLastDog - dogsPerPage 
    const currentDogs = allDogs.slice(indexFirstDog, indexLastDog)

    useEffect(()=>{
        if(allDogs.length === 0 && allBreeds.length === 0){
            dispatch(getDog())
            dispatch(getTemperaments())
        }

        if(update === true) {
            dispatch(getDog())
            dispatch(setActualPage(currentPage))
            dispatch(updateChange())
        }
    },[])

    const handleFilterCreated = (event) => {
        dispatch(setActualPage(1))
        dispatch(filterCreated(event.target.value))
    }

    const handleSortByLetter = (event) => {
        event.preventDefault()
        dispatch(setActualPage(1))
        dispatch(orderByLetter(event.target.value))
        setOrder(`Ordered by ${event.target.value}`)
    }

    const handleSortByWeight = (event) => {
        event.preventDefault()
        dispatch(setActualPage(1))
        dispatch(orderByWeight(event.target.value))
        setOrder(`Ordered by ${event.target.value}`)
    }

    const handleSortByTemperament = (event) => {
        event.preventDefault()
        dispatch(setActualPage(1))
        dispatch(filterTemperament(event.target.value))
    }

    return (
        <div className={Style.background}>
            <Header/>
                <Filters
                handleSortByLetter = {handleSortByLetter}
                handleSortByWeight = {handleSortByWeight}
                handleSortByTemperament = {handleSortByTemperament}
                handleFilterCreated = {handleFilterCreated}
                />
                <Paginated
                currentButton= {currentPage}
                dogsPerPage= {dogsPerPage}
                allDogs= {allDogs.length}
                dogs = {allDogs}                
                />
                <div className={Style.cards}>
                {
                    currentDogs?.map(dog=>{
                        return (
                            <div key={dog.id}>
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
                <br /><br /><br /><br /><br /><br />
                <div className={Style.Footer}>
                <Footer/>
                </div>
        </div>
    )
}