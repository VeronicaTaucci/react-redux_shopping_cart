
import { LOAD_PRODUCTS } from '../actions/types'

//store products in global state
const productsReducer = (state, action) => {

    if (state === undefined) {

        state = {
            products: []
        }
    }

    switch (action.type) {

        case LOAD_PRODUCTS:
            return {
                ...state,
                products: action.products
            }

        default:
            return state;
    }


}

export default productsReducer

