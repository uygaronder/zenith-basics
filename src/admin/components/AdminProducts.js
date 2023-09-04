import React from 'react'
import "../css/adminProducts.css"

import Chevron from "../res/chevron-down-solid.svg"

function AdminProducts() {
  return (
    <section id='adminProducts' className='adminPage'>
        <div className="collapsibleSetting">
            <input type="checkbox" id="categoryBool"/>
            <h2 className="settingTitle"><span>Categories</span><label htmlFor='categoryBool'><img src={Chevron} /></label></h2>
            <div className='settingContent'>
                <div className='collapsibleContainer'>
                    <table>
                      123212
                    </table>
                </div>
            </div>
        </div>
        <div className="collapsibleSetting">
            <input type="checkbox" id="productBool"/>
            <h2 className="settingTitle"><span>Products</span><label htmlFor='productBool'><img src={Chevron} /></label></h2>
            <div className='settingCsontent'>
                <div className='collapsibleContainer'>
                    <table>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Category</th>
                          <th>Price</th>
                          <th>Sold</th>
                          <th>Stock</th>
                          <th>Edit</th>
                        </tr>
                       
                      </thead>
                    </table>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AdminProducts