/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import womanNeon from '../../../images/collections/womanNeon.jpg';
import womanSweatshirts from '../../../images/collections/womanSweatshirts.jpg';

const ImagesContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 450px;

    img {
        cursor: pointer;
    }
`;

const images = [womanNeon, womanSweatshirts];

const ImagesBlock = () => (
    <ImagesContainer>
        <img src={images[0]} alt="Neon" />
        <img src={images[1]} alt="SweatShirts" />
    </ImagesContainer>
);

export default React.memo(ImagesBlock);
