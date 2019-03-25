// @flow

import React from 'react';
import styled from 'styled-components';
import MiniImages from './MiniImages/MiniImages';
import ImageScroller from './ImageScroller/ImageScroller';
import Description from './Description/Description';
import products from './products';
import type { ProductType } from './products';

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    max-width: 1600px;
    width: 70%;
    margin: auto;
    padding: 25px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0;
        width: 100%;
    }
`;

type PropTypes = {
    match: {
        params: {
            id: string
        }
    }
};

const Product = ({ match: { params } }: PropTypes) => {
    const product = products.find(
        (item: ProductType) => item.id === parseInt(params.id, 10)
    );
    return (
        <Container>
            <MiniImages images={product.images} />
            <ImageScroller images={product.images} />
            <Description product={product} />
        </Container>
    );
};

export default Product;
