import { FETCH_PRODUCTS } from './constants'
import axios from 'axios'

export function fetchProducts() {


    return async function(dispatch){
        
        const {data} = await axios.get('/api/products')

        console.log('PPPPPPPPPPPPPPP', data.products)

        dispatch({
            type: FETCH_PRODUCTS,
            payload: {
                products: data.products
            }
        })
    }    
} 
