/* eslint-disable max-len */
import React from 'react';
import Index from './Index';
import ImagesContainer from './ImagesContainer';
import products from '../Product/products';

const images = [
    {
        id: products[0].id,
        src: products[0].images[0]
    },
    {
        id: products[0].id,
        src: products[0].images[1]
    },
    {
        id: products[1].id,
        src: products[1].images[0]
    },
    {
        id: products[1].id,
        src: products[1].images[1]
    },
    {
        id: products[1].id,
        src: products[1].images[2]
    }
];

const Men = () => (
    <Index>
        <ImagesContainer images={images} />
    </Index>
);

export default Men;
