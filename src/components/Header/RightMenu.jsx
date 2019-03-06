import React from 'react';
import styled from 'styled-components';
import Card from '../Icons/Card';
import Heart from '../Icons/Heart';
import SearchBar from './SearchBar';

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
        <Heart />
        <Card />
    </StyledRightMenu>
);

export default RightMenu;
