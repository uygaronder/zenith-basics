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
            <span className='productInput'>
                <input type='text' placeholder='Product Name' />
            </span>
        </div>
    </section>
  )
}

export default NewPrododuct
