import {API_BASE_URL} from './config';
export const fetchCheeses = () => (dispatch) => {
  fetch(`${API_BASE_URL}/api/cheeses`)
    .then(response => response.json())
    .then(cheeses => dispatch(fetchCheesesSuccess(cheeses)))
    .catch(error => console.log(error))
}


export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST';
export const fetchCheeseRequest = ()=>{
    return {
        type: FETCH_CHEESE_REQUEST
    }
}
export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR';
export const fetchCheeseError = (error)=>{
    return {
        type: FETCH_CHEESE_ERROR,
        error
    }
}
export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = (cheeses) => {
  return {
    type: 'FETCH_CHEESES_SUCCESS',
    cheeses
  }
}
