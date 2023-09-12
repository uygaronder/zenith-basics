import React from 'react'

import "../../css/Loading.css"

function Loading(loadingText) {

  return (
    <div className='loading'>
        <div className='spinnerDots'>
            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        {loadingText.loadingText ? <p>{loadingText.loadingText}</p> : <p ></p>}
        </div>
    </div>
  )
}

export default Loading