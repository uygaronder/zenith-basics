import React from 'react'

function AdminProducts() {
  return (
    <section id='adminProducts'>
        <div className="setting">
            <h2 className="settingTitle"><span>Categories</span><label></label></h2>
            <input type="checkbox" id="productsBool"/>
            <div className='settingContainer'>
                <div className='collapsibleContainer'>
                    <table>
                    </table>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AdminProducts