import React from 'react'
import {Container, ErrorText} from "./style"

export const ErrorPage: React.FC = () => (
    <Container>
        <ErrorText>404 - Page Not Found</ErrorText>
    </Container>
)