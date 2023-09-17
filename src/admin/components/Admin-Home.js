import React from 'react'

import "../css/adminHome.css"

import Chevron from "../res/chevron-down-solid.svg"
import Edit from "../res/pen-to-square-solid.svg"
import Trash from "../res/x-solid.svg"

function toggleFlashItem(id) {
    fetch(`${process.env.REACT_APP_APIURL}/product/toggleFlashSale/${id}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}

function toggleFeaturedItem(id) {
    fetch(`${process.env.REACT_APP_APIURL}/product/toggleFeatured/${id}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}



function AdminHome({siteData, product}) {
    console.log(siteData)
  return (
    <section id='adminHome' className='adminPage'>
        <div className='hero' id='heroSettings'>
            <div className='heroSetting collapsibleSetting'>
                <input type='checkbox' id='heroBool'/>
                <h2 className='heroSettingTitle'><span>Hero Banners</span> <label htmlFor='heroBool'><img src={Chevron} /></label></h2>
                <div className='settingContent'>
                    <div>
                        <span className='settingDesc'>Add, edit, and remove hero banners</span>
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Upper Text</th>
                                    <th>Main Text</th>
                                    <th>Lower Text</th>
                                    <th>Link to</th>
                                </tr>
                            </thead>
                            <tbody>
                                {siteData.hero ? siteData.hero.map((hero, index) => {
                                    return (
                                        <tr key={index}>
                                            <td><img src={hero.image} /></td>
                                            <td>{hero.upperText}</td>
                                            <td>{hero.mainText}</td>
                                            <td>{hero.lowerText}</td>
                                            <td>{hero.linkTo}</td>
                                        </tr>
                                    )
                                }) : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='heroSetting collapsibleSetting'>
                <input type='checkbox' id='flashBool'/>
                <h2 className='heroSettingTitle'><span>Flash Sale</span> <label htmlFor='flashBool'><img src={Chevron} /></label></h2>
                <div className='settingContent'>
                    <div>
                        <div id='flashUpper'>
                            <div id='flashSaleSliderContainer'>
                                <input type='checkbox' id='flashActiveBool'/>
                                <label className='slider' htmlFor='flashActiveBool' id='flashBoolSlider'><span className='sliderButton' id='flashBoolButton'></span></label>
                            </div>
                            <span>
                                <span className='settingDesc'>Set, edit the flash sale and the products in it</span>
                                <span id='flashDate'>
                                    <span>Sale Until: </span>
                                    <input type='date' />
                                </span>
                            </span>
                        </div>
                        <div className='flashSaleProducts'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>ID</th>
                                        <th>Price</th>
                                        <th>Discount Price</th>
                                        <th>Stock</th>
                                        <th>Toggle</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody className='products'>
                                    {product ? product.map((product, index) => {
                                        let isOnFlashSale = false;
                                        for(let i = 0; i < siteData.flashSale.products.length; i++) {
                                            if(siteData.flashSale.products[i].id === product._id) {
                                                isOnFlashSale = true;
                                            }
                                        }
                                        return (
                                            <tr key={index}>
                                                <td>{product.productName}</td>
                                                <td>{product._id}</td>
                                                <td>{product.productPrice}</td>
                                                <td>{product.salePrice}</td>
                                                <td>{product.stockQuantity}</td>
                                                <td><input type='checkbox' onChange={() => toggleFlashItem(product._id)} className='flashSaleCheck' checked={isOnFlashSale} id={"flashCheck" + index}/><label htmlFor={"flashCheck" + index} className='flashSaleSlider slider'><span className='sliderButton' /></label></td>
                                                <td><img src={Edit} /></td>
                                            </tr>
                                        )
                                    }) : null
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='heroSetting collapsibleSetting'>
                <input type='checkbox' id='featuredBool'/>
                <h2 className='heroSettingTitle'><span>Featured Products</span> <label htmlFor='featuredBool'><img src={Chevron} /></label></h2>
                <div className='settingContent'>
                    <div>
                        <span className='settingDesc'>Add, edit, and remove featured products</span>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>ID</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody className='products'>
                                {product ? product.map((product, index) => {
                                    let isFeatured = false;
                                    for(let i = 0; i < siteData.featuredProduct.length; i++) {
                                        if(siteData.featuredProduct[i].id === product._id) {
                                            isFeatured = true;
                                        }
                                    }
                                    return (
                                        <tr key={index}>
                                            <td>{product.productName}</td>
                                            <td>{product._id}</td>
                                            <td>{product.productPrice}</td>
                                            <td>{product.stockQuantity}</td>
                                            <td><input type='checkbox' onChange={() => toggleFeaturedItem(product._id)} className='flashSaleCheck' checked={isFeatured} id={"featuredCheck" + index}/><label htmlFor={"featuredCheck" + index} className='flashSaleSlider slider'><span className='sliderButton' /></label></td>
                                        </tr>
                                    )
                                }) : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='heroSetting collapsibleSetting'>
                <input type='checkbox' id='bestBool'/>
                <h2 className='heroSettingTitle'><span>Best Sellers</span> <label htmlFor='bestBool'><img src={Chevron} /></label></h2>
                <div className='settingContent'>
                    <div>
                        <span className='settingDesc'>Add, edit, and remove best sellers</span>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>ID</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody className='products'>
                                {}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='heroSetting collapsibleSetting'>
                <input type='checkbox' id='newBool'/>
                <h2 className='heroSettingTitle'><span>New Arrivals</span> <label htmlFor='newBool'><img src={Chevron} /></label></h2>
                <div className='settingContent'>
                    <div>
                        <span className='settingDesc'>Add, edit, and remove new arrivals</span>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>ID</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody className='products'>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='heroSetting collapsibleSetting'>
                <input type='checkbox' id='specialBool'/>
                <h2 className='heroSettingTitle'><span>Special Discounts</span> <label htmlFor='specialBool'><img src={Chevron} /></label></h2>
                <div className='settingContent'>
                    <div>
                        <span className='settingDesc'>Add, edit, and remove special discounts</span>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>ID</th>
                                    <th>%</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Remove</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody className='products'>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AdminHome