import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import data from '../assets/data'
import { loadProducts } from '../actions/productActions'
import { addToCart } from '../actions/cartActions'
import { formatCurrency } from './utils'
import CartItems from './CartItems'


//display all products 
//load in data from file, and store in redux 


const Products = () => {

  const dispatch = useDispatch()// store.dispatch() 
  const allProducts = useSelector(state => state.products.products)

  useEffect(() => {

    //fire off our action 

    dispatch(loadProducts(data))

  }, [])

  return (
    <>
      <div className="container">

        <div className="row">

          <div className="col-8">



              <div className="row">
              {allProducts.map(product => {

                  return (

                    <div key={product.id} className="col-4 mb-5 product" >
                      <a href="#" className="text-danger">
                        <img src={product.image} alt="" width='200px' />
                        <p className="mt-3">{product.title}</p>
                      </a>

                      <div className="d-flex justify-content-around">
                        <div>{product.price}</div>
                        <button className="btn btn-warning" onClick={() => dispatch(addToCart(product))}>Add To Cart</button>

                      </div>


                    </div>

                  )
                })}

              </div>

          </div>


          <div className="col-4">

            {/* cart status */}

            <CartItems />
          </div>


        </div>
      </div>

    </>
  )
}

export default Products