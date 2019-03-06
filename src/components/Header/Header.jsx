import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GenderSwitch from './GenderSwitch';
import RightMenu from './RightMenu';

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10px 12px 15px;
    border-bottom: 1px solid #efefef;
`;

const LogoLink = styled(Link)`
    text-decoration: none;
    color: black;
    cursor: pointer;
`;

const Header = () => (
    <StyledHeader>
        <GenderSwitch />
        <LogoLink to={window.location}>Shopper</LogoLink>
        <RightMenu />
    </StyledHeader>
);

export default Header;
