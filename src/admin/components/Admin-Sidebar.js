import React from 'react'
import { Link } from 'react-router-dom';

import "../css/adminSidebar.css"
import HomeSvg from "../res/house-solid.svg" 

function AdminSidebar() {
  return (
    <div id='adminSidebar'>
      <Link to='/admin/' className='link'><span className='linkSVG'><img src={HomeSvg} /></span></Link>
    </div>
  )
}

export default AdminSidebar