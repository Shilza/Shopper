import React from 'react';
import styled from 'styled-components';
import Card from '../Icons/Card';
import SearchBar from './SearchBar';
import WishListButton from './WishListButton';

const StyledRightMenu = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    div {
        margin-right: 20px;
        cursor: pointer;
    }
`;

const RightMenu = () => (
    <StyledRightMenu>
        <SearchBar />
        <WishListButton />
        <Card />
    </StyledRightMenu>
);

export default RightMenu;
