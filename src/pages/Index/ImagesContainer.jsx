// @flow
/* eslint-disable max-len,prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import StyledImagesContainer from './StyledImagesContainer';

const BuyButtonContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    left: 0;
    top: 0;
`;

const BuyButton = styled(Link)`
    outline: none;
    border: none;
    background: #fff;
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
    padding: 8px 20px 8px 20px;
    transition: 300ms;
    text-decoration: none;
    max-width: 5%;
    min-width: 80px;
    max-height: 2%;
    min-height: 20px;
    color: black;
    text-align: center;

    &:hover {
        color: #fff;
        background: black;
    }
`;

type Image = {
    id: number,
    src: string
};

type PropTypes = {
    images: Array<Image>
};

const ImagesContainer = ({ images }: PropTypes) => (
    <>
        <StyledImagesContainer scale={2}>
                <img
                    src={images[0].src}
                    alt=""
                />
            <MediaQuery minWidth={768}>
                    <img
                        src={images[1].src}
                        alt=""
                    />
            </MediaQuery>
            <BuyButtonContainer>
                <BuyButton to={`/product/${images[0].id}`}>Buy now</BuyButton>
            </BuyButtonContainer>
        </StyledImagesContainer>
        <StyledImagesContainer scale={3}>
            <MediaQuery minWidth={768}>
                    <img
                        src={images[2].src}
                        alt=""
                    />
            </MediaQuery>
                <img
                    src={images[3].src}
                    alt=""
                />
            <MediaQuery minWidth={768}>
                <img
                    src={images[4].src}
                    alt=""
                />
            </MediaQuery>
            <BuyButtonContainer>
                <BuyButton to={`/product/${images[3].id}`}>Buy now</BuyButton>
            </BuyButtonContainer>
        </StyledImagesContainer>
    </>
);

export default ImagesContainer;
