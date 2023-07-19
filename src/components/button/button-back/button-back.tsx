import React from 'react'
import {Link} from 'react-router-dom'
import {Icon, Wrapper} from './style'

type ButtonProps = {
    to: string
};

export const ButtonBack: React.FC<ButtonProps> = ({to}) => (
    <Link to={to}>
        <Wrapper>
            <Icon/>
            <span>Back</span>
        </Wrapper>
    </Link>
)
