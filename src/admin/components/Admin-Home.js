import React from 'react'

import "../css/adminHome.css"

import Chevron from "../res/chevron-down-solid.svg"

function AdminHome() {
  return (
    <section id='adminHome'>
        <div className='hero' id='heroSettings'>
            <h2><span>Hero Banners</span> <span><img src={Chevron} /></span></h2>
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
    </section>
  )
}

export default AdminHome