import {createStore, combineReducers, applyMiddleware} from 'redux'

import productsReducer from './products/reducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(combineReducers({

    products: productsReducer

}), composeWithDevTools(applyMiddleware(thunk)))


export default store