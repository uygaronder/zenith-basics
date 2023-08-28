import React from 'react'

import "../css/adminHome.css"

import Chevron from "../res/chevron-down-solid.svg"

function AdminHome() {
  return (
    <section id='adminHome'>
        <div className='hero' id='heroSettings'>
            <div className='heroSetting'>
                <h2 className='heroSettingTitle'><span>Hero Banners</span> <label htmlFor='heroBool'><img src={Chevron} /></label></h2>
                <input type='checkbox' id='heroBool'/>
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
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='heroSetting'>
                <h2 className='heroSettingTitle'><span>Flash Sale</span> <label htmlFor='flashBool'><img src={Chevron} /></label></h2>
                <input type='checkbox' id='flashBool'/>
                <div className='settingContent'>
                    <div>
                        <div id='flashSaleSliderContainer'>
                            <input type='checkbox' id='flashActiveBool'/>
                            <label htmlFor='flashActiveBool' id='flashSaleSlider'></label>
                        </div>
                        <span className='settingDesc'>Set, edit the flash sale and the products in it</span>
                        <span>
                            <span>Sale Until: </span>
                            <input type='date' />
                        </span>
                        <div className='flashSaleProducts'>
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
                                    <tbody className='products'>

                                    </tbody>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='heroSetting'>
                <h2 className='heroSettingTitle'><span>Featured Products</span> <label htmlFor='featuredBool'><img src={Chevron} /></label></h2>
                <input type='checkbox' id='featuredBool'/>
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

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='heroSetting'>
                <h2 className='heroSettingTitle'><span>Best Sellers</span> <label htmlFor='bestBool'><img src={Chevron} /></label></h2>
                <input type='checkbox' id='bestBool'/>
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

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='heroSetting'>
                <h2 className='heroSettingTitle'><span>New Arrivals</span> <label htmlFor='newBool'><img src={Chevron} /></label></h2>
                <input type='checkbox' id='newBool'/>
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
            <div className='heroSetting'>
                <h2 className='heroSettingTitle'><span>Special Discounts</span> <label htmlFor='specialBool'><img src={Chevron} /></label></h2>
                <input type='checkbox' id='specialBool'/>
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