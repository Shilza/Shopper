/* eslint-disable max-len */
import React from 'react';
import Index from './Index';
import ImagesContainer from './ImagesContainer';
import products from '../Product/products';

const images = [
    {
        id: products[2].id,
        src: products[2].images[0]
    },
    {
        id: products[2].id,
        src: products[2].images[1]
    },
    {
        id: products[3].id,
        src: products[3].images[0]
    },
    {
        id: products[3].id,
        src: products[3].images[1]
    },
    {
        id: products[3].id,
        src: products[3].images[2]
    }
];

const Women = () => (
    <Index>
        <ImagesContainer images={images} />
    </Index>
);

export default Women;
