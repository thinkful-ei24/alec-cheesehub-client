import {FETCH_CHEESE_SUCCESS, FETCH_CHEESE_REQUEST, FETCH_CHEESE_ERROR} from '../actions/cheese';

const initialState = {
  cheeses: ['test'],
  loading: false,
  error: null
};

export const cheeseReducer = (state=initialState, action)=> {
  if(action.type === FETCH_CHEESE_REQUEST){
    return Object.assign({}, state, {loading: true})
  } else if(action.type === FETCH_CHEESE_SUCCESS){
    return Object.assign({}, state, {loading: false, error: null, cheese: action.cheeses})
  } else if(action.type === FETCH_CHEESE_ERROR){
    return Object.assign({}, state, {loading: false, error: action.error})
  }
  return state;
}
