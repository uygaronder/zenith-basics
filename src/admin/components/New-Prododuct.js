import React, { useRef, useEffect } from 'react'

import "../css/newProduct.css"

import Upload from "../res/upload.svg"
import Delete from "../res/x-solid.svg"


function NewPrododuct({siteData}) {
    const uploadInputRef = useRef(null);
    const imagesDivRef = useRef(null);

    const aboutItemsRef = useRef(null);
    
    let Images = [];

    useEffect(() => {
        const uploadInput = document.getElementById('imageInput');
        uploadInput.addEventListener('change', (e) => { fileHandler(e) })

        const aboutItems = aboutItemsRef.current;
        const aboutItemInput = aboutItems.querySelector('.aboutItemInput');
        const aboutItemInputInput = aboutItemInput.querySelector('input');
        aboutItemInputInput.addEventListener('keydown', (e) => { handleAboutItemInput(e) })
    }, [])

    function uploadProduct() {
        const images = imagesDivRef.current.querySelectorAll('.uploadedImage');
        const imagesArray = [];
        images.forEach(image => {
            const img = image.querySelector('img');
            imagesArray.push(img.src);
        })
        const aboutItems = aboutItemsRef.current;
        const aboutItemInput = aboutItems.querySelectorAll('.aboutItemInput');
        const aboutItemInputArray = [];
        aboutItemInput.forEach(input => {
            const inputValue = input.querySelector('input').value;
            aboutItemInputArray.push(inputValue);
        })
        const productName = document.getElementById('productName').value;
        const productCategory = document.getElementById('productCategory').value;
        const productPrice = document.getElementById('productPrice').value;
        const productDiscount = document.getElementById('productDiscount').value;
        const stockStatus = document.getElementById('stockStatus').value;
        const stockQuantity = document.getElementById('stockQuantity').value;
        const availableSizesS = document.getElementById('availableSizesS').checked;
        const availableSizesM = document.getElementById('availableSizesM').checked;
        const availableSizesL = document.getElementById('availableSizesL').checked;
        const availableSizesXL = document.getElementById('availableSizesXL').checked;
        const availableSizesXXL = document.getElementById('availableSizesXXL').checked;
        const tags = document.querySelector('#tagsContainer input').value;
        const description = document.querySelector('#description textarea').value;
        const product = {
            images: imagesArray,
            aboutItems: aboutItemInputArray,
            productName,
            productCategory,
            productPrice,
            productDiscount,
            stockStatus,
            stockQuantity,
            sizes: {
                S: availableSizesS,
                M: availableSizesM,
                L: availableSizesL,
                XL: availableSizesXL,
                XXL: availableSizesXXL
            },
            tags,
            description
        }
        console.log(product)
        fetch(`${process.env.REACT_APP_APIURL}/product/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(res => res.json())
        .then(data => {
            console.log(data)
        }
        )
    }
    
    function handleAboutItemInput(event) {
        const aboutItems = aboutItemsRef.current;
        const aboutItemInput = aboutItems.querySelectorAll('.aboutItemInput');
        const aboutItemInputInput = aboutItemInput[aboutItemInput.length - 1].querySelector('input');
        const aboutItemInputInputValue = aboutItemInputInput.value;
        if((event.key === 'Enter' || event.key === 'Tab') && aboutItemInputInputValue !== '') {
            event.preventDefault();
            aboutItemInputInput.focus();
            const newAboutItemInput = document.createElement('span');
            newAboutItemInput.className = 'aboutItemInput';
            const newAboutItemInputInput = document.createElement('input');
            newAboutItemInputInput.type = 'text';
            newAboutItemInputInput.value = aboutItemInputInputValue;
            newAboutItemInputInput.addEventListener('keydown', (e) => { handleAboutItemInput(e) })
            const newAboutItemInputRemove = document.createElement('span');
            newAboutItemInputRemove.className = 'removeAboutItem';
            newAboutItemInputRemove.addEventListener('click', () => {
                aboutItems.removeChild(newAboutItemInput)
            })
            const newAboutItemInputRemoveIcon = document.createElement('img');
            newAboutItemInputRemoveIcon.src = Delete;
            newAboutItemInputRemove.appendChild(newAboutItemInputRemoveIcon);
            newAboutItemInput.appendChild(newAboutItemInputInput);
            newAboutItemInput.appendChild(newAboutItemInputRemove);
            aboutItems.insertBefore(newAboutItemInput, aboutItemInput[aboutItemInput.length - 1]);
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
        
        for(let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = (e) => {
                const image = document.createElement('span');
                image.className = 'uploadedImage';
                const removeImage = document.createElement('span');
                removeImage.className = 'removeImage';
                const removeImageIcon = document.createElement('img');
                removeImageIcon.src = Delete;
                removeImage.appendChild(removeImageIcon);
                removeImage.addEventListener('click', () => {
                    imagesDiv.removeChild(image)
                })
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
                            {/* 
                            <span className='removeAboutItem'>
                                <img src={Delete} />
                            </span>
                            */}
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
                            {siteData && siteData.category ? siteData.category.map((category, index) => {
                                return (
                                    <option key={index} value={category.slug}>{category.slug}</option>
                                )
                            }) : null}
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
                <span>
                    <span id='uploadProductButton' onClick={() => uploadProduct()}>Upload Product</span>
                </span>
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
