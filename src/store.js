import {createStore} from 'redux';
import rootReducer from './reducers/index';
import thiunk from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
