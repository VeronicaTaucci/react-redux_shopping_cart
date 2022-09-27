
import { LOAD_PRODUCTS } from './types'
// import {loadProducts} from 'path'
export const loadProducts = (data) => {

    return {
        type: LOAD_PRODUCTS,
        products: data
    }
}
