
import { ADD_TO_CART, DELETE_ITEM_FROM_CARD } from '../actions/types'
// []
const cartReducer = (state, action) => {

    //initialize our state 

    if (state === undefined) {
        state = {
            cartItems: [],  //[{}]
            numberOfItems: 0,
            totalCost: parseFloat(0.00)
        }
    }

    switch (action.type) {

        case ADD_TO_CART:

            let newCartItems = [...state.cartItems] //copying whatever is in state 
            let isFound = false;
            //if they have added item before
            newCartItems.forEach(product => {
                if (product.id === action.product.id) {
                    product.quantity++;
                    isFound = true;
                }
            })
            //they added the dress for the first time
            if (!isFound) {
                newCartItems.push({ ...action.product, quantity: 1 })
            }
            return {
                ...state,
                cartItems: newCartItems,
                numberOfItems: state.numberOfItems + 1,
                totalCost: state.totalCost + parseFloat(action.product.price)

            }
        case DELETE_ITEM_FROM_CARD:
            console.log(action.product);
            let copyCartItems = [...state.cartItems] //copying whatever is in state 
            let isOne=false
            copyCartItems.forEach(product => {
                if (product.id === action.product && product.quantity >1) {
                    product.quantity--;
                    isOne=true
                }
            })
            if (!isOne) {
                copyCartItems= copyCartItems.filter(item => {
                    return item.id !== action.product
                })
            }
            return {
                ...state,
                cartItems: copyCartItems,
                numberOfItems: state.numberOfItems - 1,
                totalCost: state.totalCost - parseFloat(action.product.price)

            }

        default:
            return state
    }
}


export default cartReducer