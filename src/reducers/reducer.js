import {FETCH_CHEESES_SUCCESS, FETCH_CHEESE_REQUEST, FETCH_CHEESE_ERROR} from '../actions';

const initialState = {
  cheeses: [],
  loading: false,
  error: null
};

export const cheeseReducer = (state=initialState, action)=> {
  if(action.type === FETCH_CHEESE_REQUEST){
    return Object.assign({}, state, {loading: true})
  } else if(action.type === FETCH_CHEESES_SUCCESS){
    return Object.assign({}, state, {loading: false, error: null, cheeses: action.cheeses})
  } else if(action.type === FETCH_CHEESE_ERROR){
    return Object.assign({}, state, {loading: false, error: action.error})
  }
  return state;
}
