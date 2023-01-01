const initialState = {
    dogs: [],
    searchDogs: false,
    foundDogs: [],
    allDog: [],
    temperaments: [],
    detail: [],
    currentPage: 1,
    currentBottons: [],
    searchBar: "",

    filterName: "",
    orderName: "",
}

function rootReducer (state = initialState, action) {
    switch(action.type){
        case 'GET_DOGS':
            return {
                ...state,
                dogs: action.payload,
                allDog: action.payload
            }
        case 'GET_NAME_DOGS':
            return {
                ...state,
                dogs: action.payload,
                filterName: "",
                orderName: "",
                searchDogs: action.payload === "" ? false : true,
                foundDogs: action.payload
            }
        case 'GET_TEMPERAMENTS':
            return {
                ...state,
                temperaments: action.payload
            }
        case 'FILTER_CREATED':
            const dbFilter = state.searchDogs === false ? 
            (action.payload === 'All' ? state.allDog :
            (action.payload === 'dbCreated' ?
            state.allDog.filter(dogs => dogs.createInDb) :
            state.allDog.filter(dogs => !dogs.createInDb)
            )) : 
            (action.payload === 'All' ? state.foundDogs :
            (action.payload === 'dbCreated' ?
            state.foundDogs.filter(dogs => dogs.createInDb) :
            state.foundDogs.filter(dogs => !dogs.createInDb)
            ))
            return {
                ...state,
                // dogs: action.payload === 'All' ? state.allDog : dbFilter,
                dogs: dbFilter,
                filterName: action.payload,
                searchBar: state.searchBar !== "" ? null : ""
            }
        case "FILTER_TEMPERAMENTS":
            const dogsTemp = state.searchDogs === false ? 
            state.allDog.filter((d) => 
            d.temperament?.includes(action.payload) ? d : null
            ) : 
            state.foundDogs.filter((d) => 
            d.temperament?.includes(action.payload) ? d : null
            )
            return {
               ...state,
                dogs: dogsTemp,
                filterName: action.payload,
                searchBar: state.searchBar !== "" ? null : ""
            };
        case 'ORDER_BY_LETTER':
            const sortedLetter= action.payload === 'A-Z' ?
                state.dogs.sort(function(a,b){
                    if (a.name > b.name){
                        return 1
                    }
                    if (a.name < b.name){
                        return -1
                    }
                    return 0
                }) : 
                state.dogs.sort(function(a,b){
                    if (a.name > b.name){
                        return -1
                    }
                    if (a.name < b.name){
                        return 1
                    }
                    return 0
                })
            return {
                ...state,
                dogs: sortedLetter,
                orderName: action.payload,
                searchBar: state.searchBar !== "" ? null : ""
            }
        case 'ORDER_BY_WEIGHT':
            const sortedWeight= action.payload === 'MinWeight' ?
                state.dogs.sort(function (a,b){
                    if(parseInt(a.min_weight) > parseInt(b.min_weight)){
                        return 1
                    }
                    if(parseInt(a.min_weight) < parseInt(b.min_weight)){
                        return -1
                    }
                    return 0
                }) : 
                state.dogs.sort(function (a,b){
                    if(parseInt(a.max_weight) > parseInt(b.max_weight)){
                        return -1
                    }
                    if(parseInt(a.max_weight) < parseInt(b.max_weight)){
                        return 1
                    }
                    return 0
                })
            return {
                ...state,
                dogs: sortedWeight,
                orderName: action.payload,
                searchBar: state.searchBar !== "" ? null : ""
            }
        case 'RESET_FILTER':
            return {
                ...state,
                filterName: "",
                orderName: "",
                searchBar: ""
            }
        case 'SEARCH_DOG':
            return {
                ...state,
                searchBar: action.payload,
                // orderName: ""
            }
        case 'POST_DOG':
            return {
                ...state,
            }
        case 'GET_DETAIL':
            return {
                ...state,
                detail: action.payload
            }
        case 'EMPTY_DETAIL':
            return {
                ...state,
                detail: action.payload
            }
        case 'UPDATE_DOG':
            return{
                ...state,
                allDog: state.allDog.map(dog => dog.id === action.payload.id ? action.payload : dog)
            }
        case 'DELETE_DOG':
            return {
                ...state
            }
        case 'ACTUAL_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }
        case 'VIEW_CURRENT_BOTTON':
            return {
                ...state,
                currentBottons: action.payload
            }
        default: 
            return {
                ...state
            }
    }
}
export default rootReducer