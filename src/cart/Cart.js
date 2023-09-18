import React from 'react'

import "./css/Cart.css"

import Loading from '../shared/components/loading/Loading'

function Cart({user, products}) {
  const cartIds = user.cart.map(cartItem => cartItem.product.id)
  const cartProducts = products.filter(product => cartIds.includes(product._id))
  console.log(cartProducts)
  return (
    <section id='cart'>
      {
        !user?
        <Loading />
        :
        <>
          <div id='cartContents'>
            <h2>Shopping Cart</h2>
            <div id='cartItems'>
              {cartProducts.map((cartItem, index) => {
                return (
                  <div className='cartItem' key={index}>
                    <img src={cartItem.images[0]} alt={cartItem.productName} />
                    <div className='cartItemInfo'>
                      <h3>{cartItem.productName}</h3>
                      <div className='cartItemPrice'>
                        <span className='cartItemPriceText'>Price: </span>
                        <span className='cartItemPriceValue'>{cartItem.productPrice}</span>
                      </div>
                      <div className='cartItemQuantity'>
                        <span className='cartItemQuantityText'>Quantity: </span>
                        <span className='cartItemQuantityValue'>{user.cart.find(cartItem => cartItem.product._id === cartItem._id).quantity}</span>
                      </div>
                    </div>
                  </div>
                )
              })
              }
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