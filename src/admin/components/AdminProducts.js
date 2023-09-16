import React,{useEffect, useRef, useState} from 'react'
import "../css/adminProducts.css"

import Chevron from "../res/chevron-down-solid.svg"
import Edit from "../res/pen-to-square-solid.svg"
import Add from "../res/square-plus-solid.svg"

function editCategory(e) {
  
}

function addCategory(e) {
  const newCategory = document.querySelector('.newCategory');
  const newCategoryInput = document.querySelector('.newCategory input');
  const newCategorySpan = document.querySelector('.newCategory span');
  const categories = document.querySelector('.categories');
  const addCategory = document.querySelector('.addCategory');
  if(newCategoryInput.value === '') {
    newCategoryInput.classList.add('error');
    newCategoryInput.placeholder = 'Please enter a category name';
  }else{
    fetch(`${process.env.REACT_APP_APIURL}/site/newCategory`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category: document.querySelector('#newCategoryInput').value
      }),
    }).then(response => response.json())
    .then(data => {
      console.log('Success:', data);

      /* add HTML */
      if(data.status === 'success') {
        newCategoryInput.classList.remove('error');
        newCategoryInput.placeholder = 'New Category';
        const newCategoryRow = document.createElement('tr');
    
        const newCategoryId = document.createElement("td");
        newCategoryId.innerText="0"; //ph
        newCategoryRow.appendChild(newCategoryId)
    
        const newCategoryValue = document.createElement("td");
        newCategoryValue.innerText = newCategoryInput.value;
        newCategoryRow.appendChild(newCategoryValue)
    
        const newCategoryNumOfItems = document.createElement("td");
        newCategoryNumOfItems.innerText = 0;
        newCategoryRow.appendChild(newCategoryNumOfItems)
    
        const newCategoryButton = document.createElement("td");
        newCategoryButton.onClick = (e) => {editCategory(e)}
    
        const newCategoryImg = document.createElement("img");
        newCategoryImg.src = Edit;
        newCategoryButton.appendChild(newCategoryImg);
        newCategoryRow.appendChild(newCategoryButton);
    
        categories.insertBefore(newCategoryRow, addCategory);
        newCategoryInput.value = '';
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}


function goToNewProductPage() {
  window.location.href = '/admin/products/new'
}

function editProduct(e) {

}

function AdminProducts({ siteData }) {
  const newCategoryRef = useRef(null)
  const [ products, setProducts ] = useState([])

  useEffect(() => {
    const loadData = async () => {
      await fetchProducts();
      
    }

    loadData();
},[])


  const fetchProducts = async () => {
    await fetch(`${process.env.REACT_APP_APIURL}/product/`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return setProducts(data);
    });
  }

  const handleChange = async () => {
    const search = document.querySelector('#productSettings input').value;
  }

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
                        {siteData.category ? siteData.category.map((category, index) => {
                          return (
                            <tr key={index}>
                              <td>{index+1}</td>
                              <td>{category.slug}</td>
                              <td>{category.products.length}</td>
                              <td onClick={(e) => editCategory(e)}><img src={Edit} /></td>
                            </tr>
                          )
                        }) : null}
                      </tbody>
                    </table>
                    <span className='newCategory'>
                      <input type='text' id='newCategoryInput' ref={newCategoryRef} placeholder='New Category' />
                      <span onClick={(e) => addCategory(e)}><p>Add Category</p> <img src={Add} /></span>
                    </span>
                </div>
            </div>
        </div>
        <div className="collapsibleSetting">
            <input type="checkbox" id="productBool"/>
            <h2 className="settingTitle"><span>Products</span><label htmlFor='productBool'><img src={Chevron} /></label></h2>
            <div className='settingContent'>
                <div className='collapsibleContainer'>
                    <div id='productSettings'>
                      <button id='newProductButton' onClick={() => goToNewProductPage()}>New Product</button>
                      <input type='text' placeholder='Search' onChange={() => handleChange()}/>
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
                        
                        {products ? products.map((product, index) => {
                          return (
                            <tr key={index}>
                              <td>{index+1}</td>
                              <td>{product.productName}</td>
                              <td>{product.productCategory}</td>
                              <td>${product.productPrice}</td>
                              <td>{product.sale.sold}</td>
                              <td>{product.stockQuantity}</td>
                              <td onClick={(e) => editProduct(e)}><img src={Edit} /></td>
                            </tr>
                          )
                        }) : null
                        }
                        {/**
                         * <tr>
                          <td>1</td>
                          <td>Product 1</td>
                          <td>Category 1</td>
                          <td>$1.00</td>
                          <td>1</td>
                          <td>1</td>
                          <td onClick={(e) => editProduct(e)}><img src={Edit} /></td>
                        </tr>
                         */}
                      </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AdminProducts