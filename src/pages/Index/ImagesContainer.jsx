/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const StyledImagesContainer = styled.div`
    position: relative;
    display: flex;

    img {
        height: 10%;
        flex: 1;
        width: ${props => 100 / props.scale}%;
    }
`;

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

const BuyButton = styled.button`
    outline: none;
    border: none;
    background: #fff;
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
    padding: 8px 20px 8px 20px;
    transition: 300ms;

    &:hover {
        color: #fff;
        background: black;
    }
`;

const ImagesContainer = () => (
    <>
        <StyledImagesContainer scale={2}>
            <img
                src="https://static.bershka.net/4/photos2/2019/V/0/1/p/2888/388/712/2888388712_1_1_4.jpg?t=15513676409091"
                alt=""
            />
            <img
                src="https://static.bershka.net/4/photos2/2019/V/0/1/p/5252/019/743/5252019743_1_1_4.jpg?t=15513676421311"
                alt=""
            />
            <BuyButtonContainer>
                <BuyButton>Buy now</BuyButton>
            </BuyButtonContainer>
        </StyledImagesContainer>
        <StyledImagesContainer scale={3}>
            <img
                src="https://static.bershka.net/4/photos2/2019/V/0/1/p/1938/151/807/1938151807_1_1_4.jpg?t=15468742346501"
                alt=""
            />
            <img
                src="https://static.bershka.net/4/photos2/2019/V/0/1/p/1938/151/807/1938151807_2_3_4.jpg?t=15468742346501"
                alt=""
            />
            <img
                src="https://static.bershka.net/4/photos2/2019/V/0/1/p/1938/151/807/1938151807_2_1_4.jpg?t=15468742346501"
                alt=""
            />
            <BuyButtonContainer>
                <BuyButton>Buy now</BuyButton>
            </BuyButtonContainer>
        </StyledImagesContainer>
    </>
);

export default ImagesContainer;
