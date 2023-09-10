import React, { Suspense } from 'react'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import "./shared/css/root.css"

import ZenithBasics from './ZenithBasics'
import Loading from "./shared/components/loading/Loading"

export default function App() {
  return (
    <BrowserRouter>
        <Suspense fallback={<Loading />}>
            <Routes>
                {/*<Route path='/' component={ZenithBasics}/>*/}
            </Routes>
        </Suspense>
        <ZenithBasics />
    </BrowserRouter>
  )
}
