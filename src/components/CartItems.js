
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Fade from 'react-reveal/Fade'
import { deleteItemFromCard } from '../actions/cartActions'

const CartItems = () => {

  const cartItems = useSelector(state => state.cart.cartItems) //an array of objects 
  const numberItems = useSelector(state => state.cart.numberItems);
  const totalCost = useSelector(state => state.cart.totalCost);
 let dispatch = useDispatch()
  return (
    <>
      <div>
        {
          cartItems.length === 0
            ?
            <div>Cart is empty</div>
            :
            <div>
              You have <em>{numberItems}</em> items in the cart
              <br />
              Total Cost: {totalCost}
            </div>
        }
      </div>

      <Fade left cascade>
        <div className="row cart-items">
          {
            cartItems.map(item => {
              return <div key={item.id} className="col-12 d-flex flex-column">

                <div className="d-flex">
                  <div>
                    <img src={item.image} alt="" width='200px' />
                  </div>

                  <div>{item.title}</div>
                </div>

                <div>
                  {item.price} X {item.quantity}

                  <button className="btn btn-warning" onClick={()=>dispatch(deleteItemFromCard(item.id))}>Remove</button>
                </div>
              </div>
            })
          }
        </div>
      </Fade>
    </>
  )
}

export default CartItems