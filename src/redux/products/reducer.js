import { FETCH_PRODUCTS } from './constants'


const initialState = {

    products: []
}


function reducer(state = initialState, action) {

    console.log(action.payload)

    switch(action.type){

        case FETCH_PRODUCTS:
            return {...state, products: action.payload}

        default:
            return state
    }

    return state
}

export default reducer