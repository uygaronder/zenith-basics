import React from 'react'

import "./css/Cart.css"

import Loading from '../shared/components/loading/Loading'

function Cart({user, products}) {
  //const cartIds = user.cart.map(cartItem => cartItem.product.id)
  //const cartProducts = products.filter(product => cartIds.includes(product._id))
  console.log(user)
  console.log(products)
  return (
    <section id='cart'>
      {
        (!user && !products)?
        <Loading />
        :
        <>
          <div id='cartContents'>
            <div className='cartUpper'>
              <h2>Shopping Cart</h2>

            </div>
            <div id='cartLower'>
              <div id='cartItems'>
                {
                  (user && products) ? user.cart.map((cartItem, index) => {
                    const product = products.filter(product => product.id === cartItem.product)[0]
                    return (                    
                      <div className='cartItem' key={index}>
                        <div>
                          <input type='checkbox' checked className='toggleCartItem'/>
                        </div>
                        <img src={product.images[0]} alt={product.productName} />
                        <div className='cartItemInfo'>
                          <h3>{product.productName}</h3>
                          <div className='cartItemPrice'>
                            <span className='cartItemPriceValue'>{product.productPrice * cartItem.quantity}</span>
                          </div>
                          <div className='cartItemSettings'>
                            <span className='cartItemQuantitySelect'>
                              <select defaultValue={cartItem.quantity}>
                                <option value='0'>0</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                              </select>
                            </span>
                          </div>
                        </div>
                      </div>
                      
                    )
                  })
                  : null
                }
              </div>
              <div id='cartTotal'>
                <div id='cartTotalUpper'>
                  <h3>Cart Total</h3>
                </div>
              </div>
            </div>
          </div>
          <div id='cartInfo'>

          </div>
        </>
      }
    </section>
  )
}

export default Cart