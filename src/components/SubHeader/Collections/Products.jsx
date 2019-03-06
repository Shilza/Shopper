/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import React from 'react';
import SectionTitle from './SectionTitle';

const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitlesContainer = styled.div`
    display: grid;
    grid-template-columns: 100px 100px;
    grid-template-rows: repeat(10, minmax(25px, auto));
    margin-left: 15px;
    font-size: 0.8em;
`;

const products = [
    'Coat',
    'Jackets',
    'Blazers',
    'Trousers',
    'Jeans',
    'T-shirts',
    'Dresses',
    'Overalls',
    'Skirts',
    'Hoodies',
    'Knitwear',
    'Shirts',
    'Body',
    'Tops',
    'Shorts',
    'Swimwear',
    'Footwear',
    'Accessories',
    'Bags',
    'Jewelery'
];

const Product = styled.span`
    color: gray;
    cursor: pointer;
    transition: 200ms;

    :hover {
        color: black;
    }
`;

const Products = () => (
    <ProductsContainer>
        <SectionTitle>Products</SectionTitle>
        <TitlesContainer>
            {products.map((name, index) => (
                <Product key={index}>{name}</Product>
            ))}
        </TitlesContainer>
    </ProductsContainer>
);

export default React.memo(Products);
