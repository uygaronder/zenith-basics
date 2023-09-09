import React from 'react'
import "../css/adminProducts.css"

import Chevron from "../res/chevron-down-solid.svg"
import Edit from "../res/pen-to-square-solid.svg"
import Add from "../res/square-plus-solid.svg"

function editCategory(e) {
  
}

function addCategory(e) {
  fetch(`${process.env.REACT_APP_APIURL}/site/newCategory`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      category: e.target.parentNode.parentNode.querySelector('input').value
  }),
  }).then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err))

  const newCategory = document.querySelector('.newCategory');
  const newCategoryInput = document.querySelector('.newCategory input');
  const newCategorySpan = document.querySelector('.newCategory span');
  const categories = document.querySelector('.categories');
  const addCategory = document.querySelector('.addCategory');
  if(newCategoryInput.value === '') {
    newCategoryInput.classList.add('error');
    newCategoryInput.placeholder = 'Please enter a category name';
  }else{
    newCategoryInput.classList.remove('error');
    newCategoryInput.placeholder = 'New Category';
    const newCategoryRow = document.createElement('tr');
    newCategoryRow.innerHTML = `
      <td>1</td>
      <td>${newCategoryInput.value}</td>
      <td>0</td>
      <td onClick={(e) => editCategory(e)}><img src=${Edit} /></td>
    `
    categories.insertBefore(newCategoryRow, addCategory);
    newCategoryInput.value = '';
    newCategory.style.display = 'none';
    newCategorySpan.style.display = 'flex';
  }
}


function goToNewProductPage() {
  window.location.href = '/admin/products/new'
}

function editProduct(e) {

}

function AdminProducts() {
  return (
    <section id='adminProducts' className='adminPage'>
        <div id='categoriesContainer' className="collapsibleSetting">
            <input type="checkbox" id="categoryBool"/>
            <h2 className="settingTitle"><span>Categories</span><label htmlFor='categoryBool'><img src={Chevron} /></label></h2>
            <div className='settingContent'>
                <div className='collapsibleContainer'>
                    <table>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th># of Items</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody className='categories'>
                        <tr>
                          <td>1</td>
                          <td>Category 1</td>
                          <td>1</td>
                          <td onClick={(e) => editCategory(e)}><img src={Edit} /></td>
                        </tr>
                        {/**
                        <tr className='addCategory'>
                          <td>New</td>
                          <td><input type='text' placeholder='New Category' /></td>
                          <td></td>
                          <td onClick={(e) => addCategory(e)}><img src={Add} /></td>
                        </tr>
                         */}
                      </tbody>
                    </table>
                    <span className='newCategory'>
                      <input type='text' placeholder='New Category' />
                      <span onClick={(e) => addCategory(e)}><p>Add Category</p> <img src={Add} /></span>
                    </span>
                </div>
            </div>
        </div>
        <div className="collapsibleSetting">
            <input type="checkbox" id="productBool"/>
            <h2 className="settingTitle"><span>Products</span><label htmlFor='productBool'><img src={Chevron} /></label></h2>
            <div className='settingCsontent'>
                <div className='collapsibleContainer'>
                    <div id='productButtonsUp'>
                      <span id='newProductButton' onClick={() => goToNewProductPage()}>Add New Product</span>

                    </div>
                    <table>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Category</th>
                          <th>Price</th>
                          <th>Sold</th>
                          <th>Stock</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody className='products'>
                        <tr>
                          <td>1</td>
                          <td>Product 1</td>
                          <td>Category 1</td>
                          <td>$1.00</td>
                          <td>1</td>
                          <td>1</td>
                          <td onClick={(e) => editProduct(e)}><img src={Edit} /></td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AdminProducts