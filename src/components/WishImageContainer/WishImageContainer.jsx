// @flow
/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import React from 'react';
import AddToWishListContainer from '../../pages/New/AddToWishListContainer';
import { Slider, SliderSection } from '../Slider/Slider';

const ImageContainer = styled.div`
    position: relative;
`;

const Image = styled.img`
    max-width: 100%;
    width: 100%;
`;

type PropTypes = {
    item: {
        id: number,
        images: Array<string>,
        title: string,
        collection: string,
        number: string,
        size: string,
        height: number,
        price: number,
        color: string,
        extendInfo: string
    }
};

const WishImageContainer = ({ item }: PropTypes) => (
    <ImageContainer>
        <Slider>
            {item.images.map((image: string, index: number) => (
                <SliderSection key={index}>
                    <Image src={image} />
                </SliderSection>
            ))}
        </Slider>
        <AddToWishListContainer id={item.id} />
    </ImageContainer>
);

export default WishImageContainer;
