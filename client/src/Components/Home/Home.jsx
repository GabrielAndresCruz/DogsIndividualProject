import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getDog, getTemperaments, setActualPage, updateChange } from "../../Redux/actions";
import DogCard from "../DogCard/DogCard"
import Paginated from "../Paginated/Paginated.jsx";
import Filters from "../Filters/Filters";
import Header from "../Header/HeaderMain/Header";
import Style from "./Home.module.css"
import Footer from "../Footer/Footer"
import Loading from "../Loading/Loading";
import NotFound from "../NotFound/NotFound";
import useFilter from "../Filters/useFilter/useFilter";

export default function Home (){

    const {
        handleFilterCreated,
        handleSortByLetter, 
        handleSortByWeight, 
        handleSortByTemperament,
        handleReset, 
        allBreeds, 
        allDogs,
        allTemperaments,
        filterName,
        orderName, 
        dispatch} = useFilter()

    const currentPage = useSelector((state) => state.currentPage)
    const update = useSelector((state) => state.update)
    
    const [dogsPerPage, setDogsPerPage] = useState(8)
    const indexLastDog = currentPage * dogsPerPage 
    const indexFirstDog = indexLastDog - dogsPerPage 
    const currentDogs = allDogs.slice(indexFirstDog, indexLastDog)

    const [loading, setLoading] = useState(true)

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
        const timer = setTimeout(() => {
            setLoading(false)
    
        }, 1500);
        return () => clearTimeout(timer);
    },[])

    return (
        <div className={Style.background}>
            <Header/>
                <Filters
                    handleSortByLetter = {handleSortByLetter}
                    handleSortByWeight = {handleSortByWeight}
                    handleSortByTemperament = {handleSortByTemperament}
                    handleFilterCreated = {handleFilterCreated}
                    handleReset = {handleReset}
                    allTemperaments = {allTemperaments}
                    filterName = {filterName}
                    orderName = {orderName}
                />
                {   !loading ? 
                    !allDogs.length ? 
                    <div className={Style.cards}>
                        <NotFound/> 
                    </div>
                    :
                        <div>
                            <Paginated
                                currentButton= {currentPage}
                                dogsPerPage= {dogsPerPage}
                                allDogs= {allDogs.length}
                                dogs = {allDogs}                
                            />
                            <div className={Style.cards}>
                            {currentDogs?.map(dog=>{
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
                            })}
                            </div>
                            <Paginated
                                currentButton= {currentPage}
                                dogsPerPage= {dogsPerPage}
                                allDogs= {allDogs.length}
                                dogs = {allDogs}                
                            />
                        </div>
                : 
                <div className={Style.cards}>
                    <Loading/>
                </div>}
                <br /><br /><br /><br /><br /><br />
                <div className={Style.Footer}>
                    <Footer/>
                </div>
        </div>
    )
}