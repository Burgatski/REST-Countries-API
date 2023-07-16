import React from "react"
import {Wrapper} from './style'

type LayoutProps = {
    className?: string;
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ className = '', children }) =>
    <Wrapper className={className}>{children}</Wrapper>
