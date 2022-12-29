const initialState = {
    dogs: [],
    allDog: [],
    temperaments: [],
    detail: [],
    currentPage: 1,
    currentBottons: [],
    filterSelected: ""
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
                dogs: action.payload
            }
        case 'GET_TEMPERAMENTS':
            return {
                ...state,
                temperaments: action.payload
            }
        case 'FILTER_CREATED':
            const dbFilter = action.payload === 'dbCreated' ? state.allDog.filter(dogs => dogs.createInDb) : state.allDog.filter(dogs => !dogs.createInDb)
            return {
                ...state,
                dogs: action.payload === 'All' ? state.allDog : dbFilter,
                filterSelected: action.payload
            }
        case "FILTER_TEMPERAMENTS":
            const dogsTemp = state.allDog.filter((d) => 
            d.temperament?.includes(action.payload) ? d : null
            );
            return {
               ...state,
                dogs: dogsTemp,
                filterSelected: action.payload
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
                filterSelected: action.payload
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
                filterSelected: action.payload
            }
        case 'RESET_FILTER':
            return {
                ...state,
                filterSelected: ""
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