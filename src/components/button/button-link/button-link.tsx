import React from 'react'
import {Link} from 'react-router-dom'
import {Wrapper} from "./style"

type ButtonProps = {
    to: string;
    borderName: string
};

export const ButtonLink: React.FC<ButtonProps> = ({to, borderName}) => (
    <Link to={to}>
        <Wrapper>
            <span>{borderName}</span>
        </Wrapper>
    </Link>
)