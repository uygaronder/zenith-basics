import React from 'react'

import "../css/newProduct.css"

import Upload from "../res/upload.svg"

function NewPrododuct() {
  return (
    <section id='newProduct'>
        <section id='productUpper'>
            <div id='productSettings'>
                <div id='images'>
                    <h2>Images</h2>
                    <div id='imagesInput'>
                        <span className='imageInput'>
                            <label htmlFor='imageInput'>
                                <img src={Upload} alt='image' />
                                <p><b>Choose file</b> or drag it here.</p>
                            </label>
                            <input id='imageInput' type='file' />
                        </span>
                    </div>
                    <span id='uploadedImages'>
                        <span className='uploadedImage'>
                            <img src='https://picsum.photos/200' />
                        </span>
                        <span className='uploadedImage'>
                            <img src='https://picsum.photos/200' />
                        </span>
                        <span className='uploadedImage'>
                            <img src='https://picsum.photos/200' />
                        </span>
                        <span className='uploadedImage'>
                            <img src='https://picsum.photos/200' />
                        </span>
                        <span className='uploadedImage'>
                            <img src='https://picsum.photos/200' />
                        </span>
                    </span>
                </div>
                <span id='aboutItem'>
                    <h2>About Item</h2>
                    <span className='aboutItemContainer'>
                        <span className='aboutItemInput'>
                            <input type='text' />
                        </span>
                    </span>
                </span>
            </div>
            <div id='productInfo'>
                <span className='productInputContainer productTextInputContainer'>
                    <label htmlFor='productName'>Product Name</label>
                    <span className='inputSpan'>
                        <input id='productName' type='text' />
                    </span>
                </span>
                <span className='categoryInputContainer'>
                    <label htmlFor='productCategory'>Product Category</label>
                    <span className='inputSpan'>
                        <select id='productCategory'>
                            <option value=''>Select Category</option>
                            <option value=''>Category 1</option>
                            <option value=''>Category 2</option>
                            <option value=''>Category 3</option>
                        </select>
                    </span>
                </span>
                <span className='productInputContainer priceInputContainer'>
                    <div>
                        <label htmlFor='productPrice'>Product Price</label>
                        <span className='inputSpan'>
                            <span className='currency'>$</span>
                            <input id='productPrice' type='number' />
                        </span>
                    </div>
                    <div>
                        <label htmlFor='productDiscount'>Discount Price</label>
                        <span className='inputSpan'>
                            <span className='currency'>$</span>
                            <input id='productDiscount' type='number' />
                        </span>
                    </div>
                </span>
                <span id='stockContainer'>
                    <div>
                        <label htmlFor='stockStatus'>Stock Status</label>
                        <span className='inputSpan'>
                            <select id='stockStatus'>
                                <option value=''>In Stock</option>
                                <option value=''>Out of Stock</option>
                            </select>
                        </span>
                    </div>
                    <div>
                        <label htmlFor='stockQuantity'>Stock Quantity</label>
                        <span className='inputSpan'>
                            <input id='stockQuantity' type='number' />
                        </span>
                    </div>
                </span>
                <span id='availableSizesContainer'>
                    <h2>Available Sizes</h2>
                    <span className='sizesSpan'>
                        <div className='availableSizeCheck'>
                            <input id='availableSizesS' type='checkbox' />
                            <label htmlFor='availableSizesS'>S</label>
                        </div>
                        <div className='availableSizeCheck'>
                            <input id='availableSizesM' type='checkbox' />
                            <label htmlFor='availableSizesM'>M</label>
                        </div>
                        <div className='availableSizeCheck'>
                            <input id='availableSizesL' type='checkbox' />
                            <label htmlFor='availableSizesL'>L</label>
                        </div>
                        <div className='availableSizeCheck'>
                            <input id='availableSizesXL' type='checkbox' />
                            <label htmlFor='availableSizesXL'>XL</label>
                        </div>
                        <div className='availableSizeCheck'>
                            <input id='availableSizesXXL' type='checkbox' />
                            <label htmlFor='availableSizesXXL'>XXL</label>
                        </div>
                    </span>
                </span>
                <span id='tagsContainer'>
                    <h2>Tags</h2>
                    <span className='tagsInput'>
                        <input type='text' placeholder='Example: shirt, large' />
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
        <div id='productDown'>
            <span id='description'>
                <h2>Description</h2>
                <textarea placeholder='Description'></textarea>
            </span>
        </div>
    </section>
  )
}

export default NewPrododuct
