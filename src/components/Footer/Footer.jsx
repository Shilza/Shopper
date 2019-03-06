import React from 'react';
import styled from 'styled-components';

const SingleString = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const StyledLink = styled.a`
    margin-left: 7px;
    text-decoration: underline;
    cursor: pointer;
`;

const StyledFooter = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    font-size: 0.8em;
    color: gray;
    margin: auto;
    padding: 20px 0;
    border-top: 1px solid #efefef;

    ${SingleString}:last-child {
        margin-top: 10px;
    }
`;

const Footer = () => (
    <StyledFooter>
        <SingleString>
            <span>© 2019 Shopper</span>
            <StyledLink>Purchase terms</StyledLink>
        </SingleString>
        <SingleString>
            <StyledLink>Cookies Policy</StyledLink>
            <StyledLink>Privacy Policy</StyledLink>
        </SingleString>
    </StyledFooter>
);

export default Footer;
