import React from 'react'

import "../../css/Loading.css"

function Loading() {

  return (
    <div className='loading'>
        <div className='spinnerDots'>
            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    </div>
  )
}

export default Loading