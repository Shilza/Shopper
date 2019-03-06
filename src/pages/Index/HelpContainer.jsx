import React from 'react';
import styled from 'styled-components';

const StyledHelpContainer = styled.div`
    padding: 25px 0 25px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.span`
    font-weight: 600;
    font-size: 1.2em;
`;

const Info = styled.span`
    color: gray;
    font-size: 0.8em;
`;

const HelpButton = styled.button`
    border: 1px solid black;
    outline: none;
    background: transparent;
    padding: 10px 20px;
    margin: 25px 0 25px 0;
    text-transform: uppercase;
    cursor: pointer;
`;

const HelpContainer = () => (
    <StyledHelpContainer>
        <Title>Need help?</Title>
        <HelpButton>Contact us</HelpButton>
        <Info>Monday - Friday from 9:00 to 21:00 Moscow time</Info>
        <Info>Saturday - Sunday from 9:00 to 19:00 Moscow time</Info>
    </StyledHelpContainer>
);

export default HelpContainer;
