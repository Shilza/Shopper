/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const ImagesContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 450px;

    img {
        cursor: pointer;
    }
`;

const images = [
    'https://static.bershka.net/4/static/itxwebstandard/category_images/woman/content/WOMAN_NEON.jpg?20190306024500',
    'https://static.bershka.net/4/static/itxwebstandard/category_images/woman/content/WOMAN_SWEATSHIRTS.jpg?20190306024500'
];

const ImagesBlock = () => (
    <ImagesContainer>
        <img src={images[0]} alt="Neon" />
        <img src={images[1]} alt="Neon" />
    </ImagesContainer>
);

export default React.memo(ImagesBlock);
