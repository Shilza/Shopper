// @flow

import React from 'react';
import styled from 'styled-components';
import MetaInfo from './MetaInfo';
import SizeContainer from './SizeContainer';
import Delivery from './Delivery';
import ColorContainer from './ColorContainer';
import AddToWishListButton from './AddToWishListButton';
import FooterButton from './FooterButton';
import AbstractButton from './AbstractButton';
import type { ProductType } from '../products';

const Container = styled.div`
    order: 3;
    flex: 4 1;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 600px;
    max-height: 700px;
    font-size: 0.8em;
`;

const Title = styled.h3`
    margin: 0;
    font-size: 1.7em;
`;

const Collection = styled.h5`
    margin: 15px 0 20px 0;
    text-transform: uppercase;
    font-size: 1em;
`;

const Price = styled.h4`
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1.4em;
    margin 0;
`;

const AddToCartButton = styled(AbstractButton)`
    background: black;
    color: white;
    text-transform: uppercase;

    &:hover {
        background: #00a261;
    }
`;

const Description = ({ product }: ProductType) => (
    <Container>
        <div>
            <Title>{product.title}</Title>
            <Collection>{product.collection}</Collection>
            <MetaInfo
                number={product.number}
                size={product.size}
                height={product.height}
            />
        </div>
        <Price>{product.price} $</Price>
        <ColorContainer color={product.color} />
        <SizeContainer />
        <span>{product.extendInfo}</span>
        <AddToCartButton>Add to Cart</AddToCartButton>
        <Delivery />
        <AddToWishListButton id={product.id} />
        <FooterButton>Store search</FooterButton>
    </Container>
);

export default Description;
