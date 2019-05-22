/* eslint-disable max-len */
import React from 'react';
import novetly from '../../../images/collections/novetly.jpg';
import bestsellers from '../../../images/collections/bestsellers.jpg';
import comingSoon from '../../../images/collections/comingSoon.jpg';
import accessories from '../../../images/collections/accessories.jpg';
import Stack from './Stack';

const images = [
    {
        src: novetly,
        text: 'Novetly'
    },
    {
        src: bestsellers,
        text: 'BestSellers ⭐'
    },
    {
        src: comingSoon,
        text: 'Coming soon'
    },
    {
        src:
            'https://static.bershka.net/4/static/itxwebstandard/category_images/woman/thumbnail/1010352019.jpg?20190306024500',
        text: 'Footwear'
    },
    {
        src: accessories,
        text: 'Accessories'
    }
];

const Favorites = () => <Stack title="Favorites" items={images} />;

export default React.memo(Favorites);
