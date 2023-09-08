import React, { useRef, useEffect } from 'react'

import "../css/newProduct.css"

import Upload from "../res/upload.svg"
import Delete from "../res/x-solid.svg"


function NewPrododuct() {
    const uploadInputRef = useRef(null);
    const imagesDivRef = useRef(null);

    const aboutItemsRef = useRef(null);

    useEffect(() => {
        const uploadInput = document.getElementById('imageInput');
        uploadInput.addEventListener('change', (e) => { fileHandler(e) })

        const aboutItems = aboutItemsRef.current;
        const aboutItemInput = aboutItems.querySelector('.aboutItemInput');
        const aboutItemInputInput = aboutItemInput.querySelector('input');
        aboutItemInputInput.addEventListener('keydown', (e) => { handleAboutItemInput(e) })
    }, [])
    
    function handleAboutItemInput(event) {
        const aboutItems = aboutItemsRef.current;
        const aboutItemInput = aboutItems.querySelector('.aboutItemInput');
        const aboutItemInputInput = aboutItemInput.querySelector('input');
        const aboutItemInputInputValue = aboutItemInputInput.value;
        if(event.key === 'Enter' && aboutItemInputInputValue !== '') {
            const aboutItem = document.createElement('span');
            aboutItem.className = 'aboutItem';
            const aboutItemText = document.createElement('input');
            aboutItemText.innerText = aboutItemInputInputValue;
            const removeAboutItem = document.createElement('span');
            removeAboutItem.className = 'removeAboutItem';
            removeAboutItem.addEventListener('click', () => {
                aboutItems.removeChild(aboutItem)
            })
            const removeAboutItemIcon = document.createElement('img');
            removeAboutItemIcon.src = Delete;
            removeAboutItem.appendChild(removeAboutItemIcon);
            aboutItem.appendChild(aboutItemText);
            aboutItem.appendChild(removeAboutItem);
            aboutItems.insertBefore(aboutItem, aboutItemInput);
            aboutItemInputInput.value = '';
        }
    }
    
    function fileHandler(event) {
        const files = event.target.files;
        const imagesDiv = imagesDivRef.current;
        const images = imagesDiv.querySelectorAll('.uploadedImage');
        images.forEach(image => {
            imagesDiv.removeChild(image)
        })
        for(let file of files) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const image = document.createElement('span');
                image.className = 'uploadedImage';
                const removeImage = document.createElement('span');
                removeImage.className = 'removeImage';
                removeImage.addEventListener('click', () => {
                    imagesDiv.removeChild(image)
                })
                const removeImageIcon = document.createElement('img');
                removeImageIcon.src = Delete;
                removeImage.appendChild(removeImageIcon);
                const img = document.createElement('img');
                img.src = e.target.result;
                image.appendChild(removeImage);
                image.appendChild(img);
                imagesDiv.appendChild(image);
            }
            reader.readAsDataURL(file);
        }
    }
  return (
    <section id='newProduct'>
        <section id='productUpper'>
            <div id='productSettings'>
                <div id='images'>
                    <h2>Images</h2>
                    <div id='imagesInput'>
                        <span className='imageInput'>
                            <label htmlFor='imageInput'>
                                <div className='labelDiv'>
                                    <img src={Upload} alt='image' />
                                    <p><b>Choose file</b> {/*or drag it here.*/}</p>
                                </div>
                            </label>
                            <input ref={uploadInputRef} id='imageInput' type='file' multiple accept='image/*'  />
                        </span>
                    </div>
                    <span id='uploadedImages' ref={imagesDivRef}>
                        {/* 
                        <span className='uploadedImage'>
                            <span className='removeImage'>
                                <img src={Delete} />
                            </span>
                            <img src='https://picsum.photos/200' />
                        </span>
                        */}
                    </span>
                </div>
                <span id='aboutItem'>
                    <h2>About Item</h2>
                    <span className='aboutItemContainer' ref={aboutItemsRef}>
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
