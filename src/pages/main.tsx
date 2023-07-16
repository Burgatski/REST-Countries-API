import React from 'react'
import {Route, Routes} from "react-router-dom"
import {Header} from "../components/view/header"
import {Countries} from "./countries"
import {GlobalStyles} from "../global/global-styles"

export const Main: React.FC = () => {
    return (
        <div>
            <GlobalStyles />
            <Header/>
            <Routes>
                <Route path="/" element={<Countries/>}/>
            </Routes>
        </div>
    )
}
