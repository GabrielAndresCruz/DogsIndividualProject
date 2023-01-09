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
            var json = await axios.get(`http://localhost:3001/dogs?name=${name}`)
            return dispatch({
                type: 'GET_NAME_DOGS',
                payload: json.data
            })
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

export function searchDog (payload) {
    return {
        type: 'SEARCH_DOG',
        payload
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

export function emptyDetail (){
    return {
    type: "EMPTY_DETAIL",
    payload: [],
    }
}

export function updateDog (payload, id){
    console.log(payload);
    return async function(dispatch){
        await axios.put(`http://localhost:3001/dogs/${id}`, payload)
        return dispatch({
            type: 'UPDATE_DOG',
            payload: {
                payload,
                id
            }
        })
    }
}

export function updateChange(){
    return async function(dispatch){
        return dispatch({
            type:'UPDATE_CHANGE'
        })
    }
}

export function deleteDog (id){
    return async function(dispatch){
        await axios.delete(`http://localhost:3001/dogs/${id}`)
        return dispatch({
            type: "DELETE_DOG",
            payload: id
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