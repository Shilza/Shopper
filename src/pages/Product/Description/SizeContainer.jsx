import React from 'react';
import styled from 'styled-components';

const SizeList = styled.ul`
    display: flex;
    list-style-type: none;
    border: 0;
    padding: 0;
    margin: 15px 0 0 0;
`;

const Size = styled.li`
    text-transform: uppercase;
    border: 1px solid lightgray;
    padding: 10px;
    width: 20px;
    text-align: center;
    cursor: pointer;

    transition: 0.35s;

    &:hover {
        border: 1px solid black;
    }
`;

const SizeContainer = () => (
    <div>
        <span>Choose your size:</span>
        <SizeList>
            <Size>xs</Size>
            <Size>s</Size>
            <Size>m</Size>
            <Size>l</Size>
            <Size>xl</Size>
        </SizeList>
    </div>
);

export default SizeContainer;
