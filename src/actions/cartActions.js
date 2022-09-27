import { ADD_TO_CART, DELETE_ITEM_FROM_CARD } from './types'

export const addToCart = (item) => {

    return {
        type: ADD_TO_CART,
        product: item
    }
}
export const deleteItemFromCard = (itemID) => {
    // console.log(itemID);

    return {
        type: DELETE_ITEM_FROM_CARD,
        product: itemID
    }
}