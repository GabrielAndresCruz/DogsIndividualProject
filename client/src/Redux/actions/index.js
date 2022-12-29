import axios from 'axios'

export function getDog (){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/dogs")
        return dispatch({
            type: 'GET_DOGS',
            payload: json.data
        })
    }
}

export function getNameDogs (name){
    return async function (dispatch){
        try {
            var json = await axios.get(`http://localhost:3001/dogs?name=${name}`)
            return dispatch({
                type: 'GET_NAME_DOGS',
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getTemperaments (){
    return async function (dispatch){
        var json = await axios.get("http://localhost:3001/temperaments")
        return dispatch({
            type: 'GET_TEMPERAMENTS',
            payload: json.data
        })
    }
}

export function postDogs (payload){
    return async function (){
        const response = await axios.post("http://localhost:3001/dogs", payload)
        return response
    }
}

export function filterCreated (payload){
    return {
        type: 'FILTER_CREATED',
        payload
    }
}

export function filterTemperament (payload){
    return {
        type: 'FILTER_TEMPERAMENTS',
        payload
    }
}

export function orderByLetter (payload){
    return {
        type: 'ORDER_BY_LETTER',
        payload
    }
}

export function orderByWeight (payload){
    return {
        type: 'ORDER_BY_WEIGHT',
        payload
    }
}

export function resetFilters (){
    return {
        type: 'RESET_FILTER'
    }
}

export function getDetail (id){
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/dogs/${id}`)
        return dispatch({
            type: "GET_DETAIL",
            payload: json.data
        })
    }
}

export function setActualPage (payload) {
    return {
        type: 'ACTUAL_PAGE',
        payload
    }
}

export function setViewCurrentBottons (payload) {
    return {
        type: 'VIEW_CURRENT_BOTTON',
        payload
    }
}