import React from 'react'

import "../css/newProduct.css"

import Image from "../res/image-regular.svg"

function NewPrododuct() {
  return (
    <section id='newProduct'>
        <div id='imagesContainer'>
            <span className='addImage'><img src={Image} /> <p>New Image</p></span>
            <span id='images'>
                <span className='img'>
                    <img src='https://placehold.co/100x100' />
                </span>
                <span className='img'>
                    <img src='https://placehold.co/100x100' />
                </span>
                <span className='img'>
                    <img src='https://placehold.co/100x100' />
                </span>
                <span className='img'>
                    <img src='https://placehold.co/100x100' />
                </span>
                <span className='img'>
                    <img src='https://placehold.co/100x100' />
                </span>
            </span>
        </div>
        <div className='imageBig'>
            <img src='https://placehold.co/300x300' />
        </div>
        <div id='productInfo'>
            <span className='productInputContainer productTextInputContainer'>
                <label htmlFor='productName'>Product Name</label>
                <span className='inputSpan'>
                    <input id='productName' type='text' />
                </span>
            </span>
            <span className='productInputContainer priceInputContainer'>
                <label htmlFor='productPrice'>Product Price</label>
                <span className='inputSpan'>
                    <span className='currency'>$</span>
                    <input id='productPrice' type='number' />
                </span>
            </span>
            <span id='specifications'>
                <span className='specification'>
                </span>
            </span>
            {/* 
            <span id='colorsInput'>
                <span>Colors:</span>
                <div id='colorsContainer'>
                    <span className='color'>
                        <input type='text' placeholder="Color Name"/>
                        <span className='colorInfo'>
                            <span>Make Default</span>
                            <span>Add Pictures</span>
                            <span>Remove Color</span>
                        </span>
                    </span>
                </div>
            </span>
            */}
        </div>
    </section>
  )
}

export default NewPrododuct
