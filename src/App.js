import React, { Suspense } from 'react'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import "./shared/css/root.css"

import ZenithBasics from './ZenithBasics'

export default function App() {
  return (
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {/*<Route path='/' component={ZenithBasics}/>*/}
            </Routes>
        </Suspense>
        <ZenithBasics />
    </BrowserRouter>
  )
}
