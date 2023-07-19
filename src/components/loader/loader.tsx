import React from 'react'
import {Ring, Wrapper} from "./style"

export const Loader: React.FC = () => {
    return (
        <Wrapper>
            <Ring>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Ring>
        </Wrapper>
    )
}
