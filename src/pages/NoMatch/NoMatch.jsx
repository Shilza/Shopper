import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ErrorCode = styled.h1`
    font-size: 8em;
    font-weight: 800;
    margin: 0;
`;

const Description = styled.h2`
    font-size: 2em;
`;

const NoMatch = () => (
    <Container>
        <ErrorCode>404</ErrorCode>
        <Description>Page does not exists</Description>
    </Container>
);

export default NoMatch;
