import React from 'react'
import { Link } from 'react-router-dom';

import "../css/adminSidebar.css"
import HomeSvg from "../res/house-solid.svg"
import CartSvg from "../../shared/res/svg/cart-shopping-solid.svg"

function AdminSidebar() {
  return (
    <div id='adminSidebar'>
      <Link to='/admin/' className='link'><span className='linkSVG'><img src={HomeSvg} /></span></Link>
      <Link to='/admin/products' className='link'><span className='linkSVG'><img src={CartSvg} /></span></Link>
    </div>
  )
}

export default AdminSidebar